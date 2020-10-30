$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        slidesToShow:1,
        autoplay: false,
        speed:1000,
        autoplaySpeed:1000,
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:1
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow:1
                }
            }
        ]
    });
});
