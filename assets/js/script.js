$('.slick-slider-parent').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
 arrows: false,
     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
       
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



$('.slider-containr').slick({
  arrows: true,
  nextArrow:".arrow-perv",
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true
});
   

$('.slider-containr').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
     
      
     
      autoplaySpeed: 0,
      dots: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode:false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode:false,
          }
        }
      ]
    });
  