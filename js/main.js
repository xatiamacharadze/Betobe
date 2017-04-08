





$(document).ready(function(){




    $('.daily-offers-list').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true
    });



    $('.special-offer-images').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3
    });


    $('.special-offer-list').slick({
        dots: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3
    });



    var personPageSlick =  $('.person-list-friend .special-offer-images');

    console.log(personPageSlick);

    personPageSlick.slick({
        dots: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4
    });
});