$('input[type="button"]').on('click', function() {
    $('#btn-menu').toggle('slow');
});

$('#btn-menu a').on('click', function() {
    $('#btn-menu').hide();
});