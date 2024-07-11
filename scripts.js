/* scripts.js */
$(document).ready(function() {
    // Filter functionality
    $('.filters button').click(function() {
        const filter = $(this).attr('data-filter');
        if (filter == 'all') {
            $('.gallery-item').show();
        } else {
            $('.gallery-item').hide();
            $(`.gallery-item[data-category="${filter}"]`).show();
        }
    });

    // Lightbox functionality
    $('.gallery-item img').click(function() {
        const src = $(this).attr('src');
        $('.lightbox-content').attr('src', src);
        $('.lightbox').fadeIn();
    });

    $('.close').click(function() {
        $('.lightbox').fadeOut();
    });
});

$(document).ready(function() {
    // Filter functionality with fade effect
    $('.filters button').click(function() {
        const filter = $(this).attr('data-filter');
        if (filter == 'all') {
            $('.gallery-item').fadeIn();
        } else {
            $('.gallery-item').hide();
            $(`.gallery-item[data-category="${filter}"]`).fadeIn();
        }
    });

    // Lightbox functionality
    $('.gallery-item img').click(function() {
        const src = $(this).attr('src');
        $('.lightbox-content').attr('src', src);
        $('.lightbox').fadeIn();
    });

    $('.close').click(function() {
        $('.lightbox').fadeOut();
    });
});
