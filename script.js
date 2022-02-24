$(document).ready(() => {
    $('.carousel').slick({
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 4 , 
    slidesToScroll: 1,
    prevArrow: '.prev-arrow',
    nextArrow: '.next-arrow'
    });
});