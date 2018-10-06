const $navbar = $('.uk-navbar');
const $body = $('body');
const $overlay = $('<div class="tm-navbar-overlay"></div>');
const activeNavClassName = 'tm-navbar-active';
const activeTogglerClassName= 'uk-active';
const relativePosClassName = 'uk-position-relative';

$navbar.on({
    beforeshow: e => {
        const $toggler = $(e.target).parent();
        $toggler.addClass(activeTogglerClassName);
        $navbar.addClass(activeNavClassName);
        $body.addClass(relativePosClassName);
        $overlay
            .appendTo($body)
            .fadeIn(200);
    },
    beforehide: e => {
        const $toggler = $(e.target).parent();
        $toggler.removeClass(activeTogglerClassName);
        $navbar.removeClass(activeNavClassName);
        $overlay.fadeOut(200, () => {
            $overlay.remove();
            $body.removeClass(relativePosClassName);
        });
    },
});
