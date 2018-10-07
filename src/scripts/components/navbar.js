$(() => {
    const $navbar = $('.uk-navbar');
    const $navContainer = $('.uk-navbar-container');
    const $body = $('body');
    const $overlay = $('<div class="tm-navbar-overlay"></div>');
    const activeNavClassName = 'tm-navbar-active';
    const activeTogglerClassName= 'uk-active';
    const relativePosClassName = 'uk-position-relative';

    $navbar.on({
        beforeshow: e => {
            const $toggler = $(e.target).parent();
            $toggler.addClass(activeTogglerClassName);
            $navContainer.addClass(activeNavClassName);
            $body.addClass(relativePosClassName);
            $overlay
                .appendTo($body)
                .fadeIn(200);
        },
        beforehide: e => {
            const $toggler = $(e.target).parent();
            $toggler.removeClass(activeTogglerClassName);
            $navContainer.removeClass(activeNavClassName);
            $overlay.fadeOut(200, () => {
                $overlay.remove();
                $body.removeClass(relativePosClassName);
            });
        },
    });
});
