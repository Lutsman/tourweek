const $togglers = $('[uk-toggle]');

$togglers.each(function () {
    const $toggler = $(this);
    const $target = $($toggler.attr('href'));
    const activeClassName = 'uk-toggle-active';

    $target.on({
        'shown': function () {
            $toggler.addClass(activeClassName);
        },
        'hidden': function () {
            $toggler.removeClass(activeClassName);
        },
    });
});
