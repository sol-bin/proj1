$(function(){
$(".lazy").slick({
    lazyLoad: 'ondemand', // ondemand progressive anticipated
    infinite: true,
    dots:true
  });
 
  $(".regular").slick({//sec5
    dots: true,
    infinite: true,
    slidesToShow: 3,//몇개의 이미지가 보일 지
    slidesToScroll: 1//클릭할때 몇칸씩 넘어갈지
  });

})//jq end