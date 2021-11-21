     var swiper = new Swiper('.swiper-container_about', {
      autoplay:true,
	  slidesPerView: 3,
      spaceBetween: 28,
      slidesPerGroup: 3,
	  loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
     var swiper = new Swiper('.swiper-container_list2', {
      autoplay:true,
	  slidesPerView: 3,
      spaceBetween: 28,
      slidesPerGroup: 3,
	  loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
   var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 16,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
   autoplay:true,
     spaceBetween: 16,
      thumbs: {
        swiper: galleryThumbs
      }
    });
	
	
$(document).ready(function() {
	/*search*/
	$(function(){
		$(document).click(function(){
			 var display = $('.header form').css('top');
			 if( display == '100px'){
				$(".header form").animate({"top":'-50'},"slow"); ;
			 }});	
	$(".search_ico").click(function(event){
				 var display = $('.header form').css('top');
				 if( display == '-50px'){
					$(".header form").animate({"top":'100'},"slow"); ;
				 }else{
					$(".header form").animate({"top":'-50'},"slow"); ;
			}
         event.stopPropagation();
	});
	$(".header form").click(function(event){
         event.stopPropagation();
	});
	});
 	
	/*tab*/
  var $wrapperIndex = $('.tab-wrapper'),
  $allTabsIndex = $wrapperIndex.find('.tab-pane'),
  $tabMenuIndex = $wrapperIndex.find('.tab-menu li') ;  
  $tabMenuIndex.each(function(i) {
    $(this).attr('data-tab', 'tab'+i);
  });
  $allTabsIndex.each(function(i) {
    $(this).attr('data-tab', 'tab'+i);
  });
 $a= $tabMenuIndex.on('click', function() {
    var dataTab3 = $(this).data('tab'),
    $getWrapper3 = $(this).closest($wrapperIndex);
    $getWrapper3.find($tabMenuIndex).removeClass('active');
    $(this).addClass('active');
     $getWrapper3.find($allTabsIndex).hide().filter('[data-tab='+dataTab3+']').show();
  });
		 
});
  var swiper = new Swiper('.swiper-container_list1', {
      autoplay:true,
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
	  	   breakpoints: {
        540: {
      slidesPerView: 2,
       spaceBetween: 10,
       },
	   }

    });
	
	$(function () {
    $(".thumbs_2").click(function () {
     var swiper = new Swiper('.swiper-container_list22', {
      autoplay:true,
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
	  	   breakpoints: {
        540: {
      slidesPerView: 2,
       spaceBetween: 10,
       },
	   }

    });
   });});
	$(function () {
    $(".thumbs_3").click(function () {
     var swiper = new Swiper('.swiper-container_list33', {
      autoplay:true,
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
	  	   breakpoints: {
        540: {
      slidesPerView: 2,
       spaceBetween: 10,
       },
	   }

    });
   });});