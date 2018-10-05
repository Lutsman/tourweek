const $navbar = $('.uk-navbar');
const $body = $('body');
const activeNavClass = 'tm-navbar-active';
const activeNavItemClass= 'tm-navbar-item-active';
const $overlay = $('<div class="tm-navbar-overlay"></div>');

$navbar.on({
    beforeshow: (e) => {
        console.dir(e);
        $navbar.addClass(activeNavClass);
        $body
            .css('position', 'relative')
            .append($overlay);
        $overlay.fadeIn(200);
    },
    beforehide: (e) => {
        console.dir(e);
        $navbar.removeClass(activeNavClass);
        $overlay.fadeOut(200, () => $overlay.remove());
        document.body.style.position = '';
    },
});
