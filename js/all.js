$('input[type="button"]').on('click', function() {
    $('#btn-menu').toggle('slow');
});

$('#btn-menu a').on('click', function() {
    $('#btn-menu').hide();
});

$('.contactMeClick').on('click', function() {
    $('html').animate({
        scrollTop: $('a#contact').offset().top
    }, 1000);
});

$('.portfolioClick').on('click', function() {
    $('html').animate({
        scrollTop: $('a#portfolio').offset().top
    }, 1000);
});

$('.aboutClick').on('click', function() {
    $('html').animate({
        scrollTop: $('a#about').offset().top
    }, 1000);
});

console.log($('a#contact').offset().top);