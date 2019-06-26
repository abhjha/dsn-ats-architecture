

$( document ).ready(function() {
    $(".dropdown-menu").on('click', 'a', function(){
        $(this).parents('.btn-group').find('.btn-primary:first-child').text($(this).text())
    });
});