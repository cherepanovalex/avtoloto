$(function () {

    // if (screen.width < 1025)
    // {
    //     var mvp = document.getElementById('vp');
    //     mvp.setAttribute('content', 'width=1025', 'initial-scale=1');
    // }





        /*слайдер победители*/
    $('.winners .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText: [],
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1024:{
                items:3
            }
        }
    });


    /*слайдер news*/
    $('.news-block .owl-carousel').owlCarousel({
        loop:true,
        margin:35,
        nav:true,
        navText: [],
        autoplay: true,
        responsive:{
            0:{
                items:1,
                margin:0
            },
            768:{
                items:2,
                margin:5
            },
            1280:{
                items:2
            },
            1440:{
                items:3
            }
        }
    });

    var $modal = $("#myModal");

    $("form").each(function() {
        var $form = $(this);
        var action = $form.attr("action");

        var send = function() {
            var data = $form.serialize();
            $.post(action, data, function(response) {
                $modal.modal("show");
            });
        };

        $form.on("submit", function() {
            send();
            return false;
        });
    });

    //scroll
    $("#menu a, .link-btn").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - 150}, 1000);
    });

    //form valid
    $('.form-input').each(function() {
        var inp = $(this);
        let regBtn = $('.reg-btn');

        var check = function() {
            var val = inp.val();
            if (val && val.indexOf('_')<0) {
                inp.removeClass('empty-field');
                regBtn.removeAttr('disabled')
            } else {
                inp.addClass('empty-field');
                regBtn.attr('disabled', 'disabled')
            }
        };

        check();

        inp.on('focus blur keyup', function() {
            check();
        })
    });

    //




//    tel mask
    $('.tel-mask').inputmask('9(999) 999-99-99');

//menu open
    $('.menu-ico').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('open-menu')
    });

//menu
    var navSelector = '.header-menu li';

    $(navSelector).on('click', function () {
        $(navSelector).removeClass('active');
        $(this).addClass('active');
    });




});