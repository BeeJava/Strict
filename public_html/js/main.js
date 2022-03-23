$(document).ready(function(){
    
    function hamburgerToX() {
        $('.navbar-toggler span').each(function () {
            let dataClass = $(this).attr('data-class');
            $(this).toggleClass(dataClass);
        });
    }
    $('.navbar-toggler').click(function(){
        hamburgerToX();
    });
    
    function animation(){
        let windowHeight = $(window).height();
        let scrollFromTop = $(window).scrollTop();
        $('.animation').each(function(){
            let elementPosition = $(this).offset().top;
            let animation = $(this).attr('data-animation');
            if (elementPosition < scrollFromTop + windowHeight - 150){
                $(this).addClass(animation);
            }
        });  
    }
    animation();
    
    function setMarginTop() {
        let headerHeight = $('header').outerHeight();
        $('main').css('marginTop', headerHeight);
    }
    function setMarginViaScroll() {
        let headerHeight = $('header').outerHeight();
        if (($(window).scrollTop()) > headerHeight) {
            $('header').addClass('py-1');
            headerHeight = $('header').outerHeight();
            $('main').css('marginTop', headerHeight);
        } else {
            $('header').removeClass('py-1');
            headerHeight = $('header').outerHeight();
            $('main').css('marginTop', headerHeight);
        }
    }
    $(window).resize(function () {
        setMarginTop();
    }).scroll(function () {
        setMarginViaScroll();
        animation();
    });
    
    $(function () {
        $(".subscribe-form").validate({
            highlight: function (element) {
                $(element).addClass("is-invalid").removeClass("is-valid");
                $(element).closest('.form-group').addClass("is-invalid").removeClass("is-valid");
            },
            unhighlight: function (element) {
                $(element).removeClass('is-invalid').addClass('is-valid');
                $(element).closest('.form-group').addClass("is-valid").removeClass("is-invalid");
            },
            rules: {
                name: {
                    required: true,
                    rangelength: [2, 20]
                },
                email: {
                    required: true,
                    email: true
                },
                message:{
                    required: true,
                    rangelength: [20, 200]
                }


            },
            messages: {
                name: {
                    required: 'Ime je obavezno polje',
                    rangelength: 'Ime mora bitii izmedju 2 i 20 karaktera'
                },

                email: {
                    required: 'Email je obavezno polje',
                    email: 'Unesite ispravan email'
                },
                message:{
                    required: 'Posaljite neki tekst',
                    rangelength: 'Poruka mora sadrzati izmedju 20 i 200 karaktera'
                }

            },
            errorElement: 'p',
            errorPlacement: function (error, element) {
                error.appendTo($(element).closest('.form-group').find('.error-message'));
            }

        });
    });
    
});