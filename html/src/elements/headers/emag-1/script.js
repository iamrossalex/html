$(".headers--emag-1 .close-btn").addEventListener("click", (ev) => {
    ev.preventDefault();
    $(".headers--emag-1 .line3").classList.remove('opened')
});
$(".headers--emag-1 .ctlg-btn").addEventListener("click", (ev) => {
    ev.preventDefault();
});
$(".headers--emag-1 .menu-btn").addEventListener("click", (ev) => {
    ev.preventDefault();
    $(".headers--emag-1 .line3").classList.add('opened');
});
$(".headers--emag-1 .catalog-btn > a").addEventListener("click", (ev) => {
    ev.preventDefault();
    $(".headers--emag-1 .catalog-btn .dropdown").classList.toggle('opened');
});