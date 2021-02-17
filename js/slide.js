$(function(){
$(".lazy").slick({
    lazyLoad: 'ondemand', // ondemand progressive anticipated
    infinite: true,
    dots:true,
    
  });
 
  $(".regular").slick({//sec5
    dots: true,
    infinite: true,
    slidesToShow: 3,//몇개의 이미지가 보일 지
    slidesToScroll: 1//클릭할때 몇칸씩 넘어갈지
  });


    var slide;
    slide = setInterval(function(){
        $('.notice .notice_list > li:first-child').animate({
            'margin-top':'-2rem'},600,function(){
          $('.notice .notice_list').append(
          $('.notice .notice_list > li:first-child')); 
          $('.notice .notice_list > li:last-child').css({'margin-top':0});
            });
    },2000);


  //sec5 슬라이드 좌우버튼 제이쿼리

    $('#btn_slides .btn_slides_next').click(function(){
     if(!$('#slides li').last().is(':visible')){//내가 보고 있는 상황이 아니라면 앞에 느낌표를 달게되면 last를 보고 있지 않은 상황이다(상황의 반대)
   $('#slides li:visible').hide().next('li').fadeIn(400);//선택자 하나로 연속 해서 써야할 때는 붙여서 쓸 수도 있다
   $('.btn_slides_prev').removeClass('off');//이전 버튼이 살아남
   //마지막이 아닐때
     }
   if($('#slides li').last().is(':visible')){
      $('.btn_slides_next').addClass('off')
   }//마지막 일때
    })//next_btn
  
    $('#btn_slides .btn_slides_prev').click(function(){
      if(!$('#slides li').first().is(':visible')){
     $('#slides li:visible').hide().prev('li').fadeIn(400);
    $('.btn_slides_next').removeClass('off');
      }
      if($('#slides li').first().is(':visible')){
      $('#btn_slides .btn_slides_prev').addClass('off')
      }
    })
  

})//jq end