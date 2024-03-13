var Pages = function(initParams) {
    var _this = this;

    _this.init = function(d) {
        _this.URL = _this.getUrl();

        if (typeof d.pages == 'undefined' || d.pages == 1) return false; else _this.pages = parseInt(d.pages);
        if (typeof d.url == 'undefined') _this.url = _this.URL.location; else _this.url = d.url;
        if (typeof d.prefix == 'undefined') _this.prefix = 'p'; else _this.prefix = d.prefix;
        if (typeof _this.URL.params.p == 'undefined') _this.current = 1; else _this.current = parseInt(_this.URL.params.p);
        if (_this.pages < _this.current) return false;
        _this.obj = d._object;
        _this.offset = 0;
        if (_this.pages > 5) {
            _this.buildList();
        } else {
            var changes = {};
            if (_this.pages > 1) {
                changes[_this.prefix] = null;
                _this.item = _this.createItem(1, _this.location + _this.joinUrlParams(changes), (_this.current == 1)?(2):(0));
                if (_this.item) d._object.append(_this.item);
                for (var i=2;i<=_this.pages;i++) {
                    changes[_this.prefix] = i;
                    _this.item = _this.createItem(i, _this.location + _this.joinUrlParams(changes), (i == _this.current)?(2):(0));
                    if (_this.item) _this.obj.append(_this.item);
                }
            } else {
                return false;
            }
        }
        item = null;
        _this.obj.style.visibility = 'visible';
    }
    _this.buildList = function() {
        _this.obj.innerHTML = ('');
        var mult = Math.floor(_this.current/5), multAll = Math.ceil(_this.pages/5), ii;
        if (mult * 5 == _this.current) mult--;
        if ((mult > 0 && _this.offset < 0) || (mult+1 < multAll && _this.offset > 0)) {mult = mult + _this.offset;}

        // Inserting the _this.first NAV
        if (mult > 0) {
            _this.first = _this.createItem("<div class='arrow-left'></div>", '', 0);
            _this.first.addEventListener('click', function(e){
                e.preventDefault();
                _this.offset = _this.offset - 1;
                _this.buildList();
            });
        } else _this.first = _this.createItem("<div class='arrow-left'></div>", '', 1);
        if (_this.first) _this.obj.append(_this.first);

        // Inserting main NAVS
        var changes = {};
        for (var i=1;i<=5;i++) {
            ii = mult * 5 + i;
            if (mult + 1 == multAll) ii = ii - (multAll * 5 - _this.pages);
            if (ii > _this.pages) break;
            if (ii == 1) changes[_this.prefix] = null; else changes[_this.prefix] = ii;
            _this.item = _this.createItem(ii, _this.location + _this.joinUrlParams(changes), (ii == _this.current)?(2):(0));
            if (_this.item) _this.obj.append(_this.item);
        }

        // Inserting the _this.last NAV
        if (mult + 1 < multAll) {
            _this.last = _this.createItem("<div class='arrow-right'></div>", '', 0);
            _this.last.addEventListener('click', function(e){
                e.preventDefault();
                _this.offset = _this.offset + 1;
                _this.buildList();
            });
        } else _this.last = _this.createItem("<div class='arrow-right'></div>", '', 1);
        if (_this.last) _this.obj.append(_this.last);
    }
    _this.createItem = function() {
        /*
            Args: title[string], link[string], state[0:default, 1:disabled, 2:active]
        */
        var newElem = document.createElement('a'),
            newElemText = document.createElement('span');

        newElem.classList.add("pages-button");
        if (typeof arguments[0] != 'undefined' && arguments[0] != '') newElemText.innerHTML = arguments[0]; else return false;
        if (typeof arguments[1] != 'undefined') newElem.setAttribute('href',arguments[1]);
        if (typeof arguments[2] != 'undefined') {
            switch(arguments[2]) {
                case 1: newElem.setAttribute('disabled',true); break;
                case 2: newElem.setAttribute('active',true); break;
            }
        }
        newElem.append(newElemText);
        return newElem;
    }
    _this.getUrl = function() {
        /*
            Args: Custom location[string]
        */
        if (typeof arguments[0] != 'undefined') url = arguments[0]; else url = document.location;
        var res = {
            location:url.pathname,
            fullpath:url.pathname + url.search,
            string:url.search.substring(1),
            params:{}
        }
        if (res.string.length > 0) {
            var params = JSON.parse('{"' + decodeURI(url.search.substring(1)).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
            for (var k in params) {
                var v = params[k];
                if (v[0] == '[')
                    res.params[k] = JSON.parse(v);
                else
                    res.params[k] = v;
            }
        }
        _this.location = res.location;
        return res;
    }
    _this.joinUrlParams = function() {
        var changes = false;
        var copy = _this.URL.params;
        if (typeof arguments[0] != 'undefined') var changes = arguments[0];
        if (changes) for(var i in changes) copy[i] = changes[i];
        var url = [];
        for (var i in copy) if (copy[i] != null) url.push(i+"="+copy[i]);
        if (url.length > 0) url = ('?' + url.join('&')); else url = '';
        return url;
    }
    _this.init(initParams);
};

[...document.querySelectorAll(".navigation--pages-1")].map((obj) => {
    var params = JSON.parse(obj.getAttribute("data-params"));
    new Pages({
        "_object": obj,
        "pages": params.pages,
        "prefix": params.prefix,
        "url": params.url
    });
});
