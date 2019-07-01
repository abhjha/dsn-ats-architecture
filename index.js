

$(document).ready(function () {
    let qno1Answer = '',
        qno2Answer = '',
        qno3Answer = '',
        qno4Answer = '',
        qno5Answer = '',
        qno6Answer = '';

    $(".qno1-container").on('click', 'a', function () {
        qno1Answer = $(this).text();
        $('.qno1-container .btn-group .btn-primary:first-child').text(qno1Answer);
        $('.qno1-container button').prop("disabled", false);
    });

    $(".qno2-container").on('click', 'input[type="radio"]', function(){
        qno2Answer = $(this).val();
        $('.qno2-container button').prop("disabled", false);
    });

    $(".qno3-container").on('click', 'input[type="radio"]', function(){
        qno3Answer = $(this).val();
        $('.qno3-container button').prop("disabled", false);
    });

    $(".qno4-container").on('click', 'input[type="radio"]', function(){
        qno4Answer = $(this).val();
        $('.qno4-container button').prop("disabled", false);
    });

    $(".qno5-container").on('click', 'input[type="radio"]', function(){
        qno5Answer = $(this).val();
        $('.qno5-container button').prop("disabled", false);
    });

    $(".qno6-container").on('click', 'input[type="radio"]', function(){
        qno6Answer = $(this).val();
        $('.qno6-container button').prop("disabled", false);
    });

    $('.proceed-button').on('click', 'button', function(){
        $(this).parent().parent().addClass('d-none');
        $(this).parent().parent().next().removeClass('d-none');
    })
    
});