$(document)
    .ready(function () {

        // fix main menu to page on passing
        $('.main.menu').visibility({
            type: 'fixed'
        });
        $('.overlay').visibility({
            type: 'fixed',
            offset: 80
        });

        // lazy load images
        $('.image').visibility({
            type: 'image',
            transition: 'vertical flip in',
            duration: 500
        });

        // show dropdown on hover
        
        $('.ui.dropdown').dropdown();
        
        speed = 1000;
        $('.page').animate({
            top: '-270px'
        }, 700);
        
       
    });

$(function () {

    $('#btn-cari').bind('click', function () {
        $('.trn').toggleClass('trn-up');
        return false;
    });
    


});

$(function () {

    $('.ui.basic.modal').modal('attach events', '#login', 'show').modal({
        blurring: true
    });

});