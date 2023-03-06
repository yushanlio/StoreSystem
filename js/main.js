/** 
 * ===================================================================
 * main js
 *
 * ------------------------------------------------------------------- 
 */ 

(function($) {

	"use strict";
	var linkgoogle = 'https://script.google.com/macros/s/AKfycbzB3NUcLMk3GUWBLb_yK3EGoy4Hfk_oJ801HT6O9ue8xTxv69EUcHXOYQThp15xaqgcvg/exec';
	/*---------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */ 
   $(window).load(function() {

      // will first fade out the loading animation 
    	$("#loader").fadeOut("slow", function(){

        // will fade out the whole DIV that covers the website.
        $("#preloader").delay(300).fadeOut("slow");

		//const container = document.querySelector('.owl-slider');
		//var template = $('.service > div').clone();
		
		
		var template = $('.owl-item:first-child').clone();
		// 将DOM模板插入到表单中，形成新的一行
		console.log(template);

    // 然后再插入到表单中
       $('.owl-wrapper').append(template);
	   $('.owl-wrapper').append(template);
	   $('.owl-wrapper').append(template);
		//container.append(template);

      });       

  	})


  	/*---------------------------------------------------- */
  	/* FitText Settings
  	------------------------------------------------------ */
  	setTimeout(function() {

   	$('#intro h1').fitText(1, { minFontSize: '42px', maxFontSize: '84px' });

  	}, 100);


	/*---------------------------------------------------- */
	/* FitVids
	------------------------------------------------------ */ 
  	$(".fluid-video-wrapper").fitVids();


	/*---------------------------------------------------- */
	/* Owl Carousel
	------------------------------------------------------ */ 
	$("#owl-slider").owlCarousel({
        navigation: false,
        pagination: true,
        itemsCustom : [
	        [0, 1],
	        [700, 2],
	        [960, 3]
	     ],
        navigationText: false
    });


	/*----------------------------------------------------- */
	/* Alert Boxes
  	------------------------------------------------------- */
	$('.alert-box').on('click', '.close', function() {
	  $(this).parent().fadeOut(500);
	});	


	/*----------------------------------------------------- */
	/* Stat Counter
  	------------------------------------------------------- */
   var statSection = $("#stats"),
       stats = $(".stat-count");

   statSection.waypoint({

   	handler: function(direction) {

      	if (direction === "down") {       		

			   stats.each(function () {
				   var $this = $(this);

				   $({ Counter: 0 }).animate({ Counter: $this.text() }, {
				   	duration: 4000,
				   	easing: 'swing',
				   	step: function (curValue) {
				      	$this.text(Math.ceil(curValue));
				    	}
				  	});
				});

       	} 

       	// trigger once only
       	this.destroy();      	

		},
			
		offset: "90%"
	
	});	


	/*---------------------------------------------------- */
	/*	Masonry
	------------------------------------------------------ */
	var containerProjects = $('#folio-wrapper');

	containerProjects.imagesLoaded( function() {

		containerProjects.masonry( {		  
		  	itemSelector: '.folio-item',
		  	resize: true 
		});

	});


	/*----------------------------------------------------*/
	/*	Modal Popup
	------------------------------------------------------*/
   $('.item-wrap a').magnificPopup({

      type:'inline',
      fixedContentPos: false,
      removalDelay: 300,
      showCloseBtn: false,
      mainClass: 'mfp-fade'

   });

   $(document).on('click', '.popup-modal-dismiss', function (e) {
   	e.preventDefault();
   	$.magnificPopup.close();
   });

	
	/*-----------------------------------------------------*/
  	/* Navigation Menu
   ------------------------------------------------------ */  
   var toggleButton = $('.menu-toggle'),
       nav = $('.main-navigation');

   // toggle button
   toggleButton.on('click', function(e) {

		e.preventDefault();
		toggleButton.toggleClass('is-clicked');
		nav.slideToggle();

	});

   // nav items
  	nav.find('li a').on("click", function() {   

   	// update the toggle button 		
   	toggleButton.toggleClass('is-clicked'); 
   	// fadeout the navigation panel
   	nav.fadeOut();   		
   	     
  	});


   /*---------------------------------------------------- */
  	/* Highlight the current section in the navigation bar
  	------------------------------------------------------ */
	var sections = $("section"),
	navigation_links = $("#main-nav-wrap li a");	

	sections.waypoint( {

       handler: function(direction) {

		   var active_section;

			active_section = $('section#' + this.element.id);

			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#main-nav-wrap a[href="#' + active_section.attr("id") + '"]');			

         navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		}, 

		offset: '25%'
	});


	/*---------------------------------------------------- */
  	/* Smooth Scrolling
  	------------------------------------------------------ */
  	$('.smoothscroll').on('click', function (e) {
	 	
	 	e.preventDefault();

   	var target = this.hash,
    	$target = $(target);

    	$('html, body').stop().animate({
       	'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
      	window.location.hash = target;
      });

  	});  
  

   /*---------------------------------------------------- */
	/*  Placeholder Plugin Settings
	------------------------------------------------------ */ 
	$('input, textarea, select').placeholder()  


  	/*---------------------------------------------------- */
	/*	contact form
	------------------------------------------------------ */

	/* local validation */
	$('#contactForm').validate({

		/* submit via ajax */
		submitHandler: function(form) {

			var sLoader = $('#submit-loader');
/*
			$.ajax({      	

		      type: "POST",
		      url: "inc/sendEmail.php",
		      data: $(form).serialize(),
		      beforeSend: function() { 

		      	sLoader.fadeIn(); 

		      },
		      success: function(msg) {

	            // Message was sent
	            if (msg == 'OK') {
	            	sLoader.fadeOut(); 
	               $('#message-warning').hide();
	               $('#contactForm').fadeOut();
	               $('#message-success').fadeIn();   
	            }
	            // There was an error
	            else {
	            	sLoader.fadeOut(); 
	               $('#message-warning').html(msg);
		            $('#message-warning').fadeIn();
	            }

		      },
		      error: function() {

		      	sLoader.fadeOut(); 
		      	$('#message-warning').html("Something went wrong. Please try again.");
		         $('#message-warning').fadeIn();

		      }

	      });   
		  */  		
  		}

	});

	document.getElementById('btnSub').onclick = function order(){
		console.log("1");
		$("#content1").attr("height",'10px');
		var content = document.getElementById("content1");
		content.style.height='10px';
		var getUrlString = location.href;
		var url = new URL(getUrlString);
		var idNumber = url.searchParams.get('id'); // 回傳 21
		//var getUrlString = location.href;
		//var url = new URL(getUrlString);
		//var idNumber = url.searchParams.get('id'); // 回傳 21
		console.log("2");
	var a = {
		id:1,
		program :1,
		name : document.getElementById('lead2').innerHTML,
		time1:  document.getElementById("time1").value,
		time2:  document.getElementById("time2").value,
		time3:  document.getElementById("time3").value,
		time4:  document.getElementById("time4").value,
		time5:  document.getElementById("time5").value,
		num1:document.getElementById("num1").value  ,
		num2:document.getElementById("num2").value,
		num3:document.getElementById("num3").value ,
		num4:document.getElementById("num4").value ,
		num5:document.getElementById("num5").value 
	/*	sheetTag : '工作表1',
		row: 1,
		col: 1,
		endRow : 6,
		endCol : 2
		*/
	};
	//試算表
	console.log("3");
	const ka = $.post(linkgoogle,a ,function(result){
		alert(result);    
	

		 document.getElementById("time1").value ="",
		 document.getElementById("time2").value="",
		 document.getElementById("time3").value="",
		document.getElementById("time4").value="",
		document.getElementById("time5").value="",
		document.getElementById("num1").value  ="",
		document.getElementById("num2").value="",
		document.getElementById("num3").value ="",
		document.getElementById("num4").value="" ,
		document.getElementById("num5").value =""

    })
	};

	function SingnUp(){
		//報名
		console.log(document.getElementById("contactNum").value);

		//var getUrlString = location.href;
		//var url = new URL(getUrlString);
		//var idNumber = url.searchParams.get('id'); // 回傳 21
		console.log(document.getElementById("contactEmail").value);
		/*
	var a = {
		ID:sessionStorage.getItem ('ID'),//表單ID
		program :2,
		storeID:sessionStorage.getItem ('StoreID'),//店家ID
		AppointmentPeople:document.getElementById("contactNum").value,//人數
		guestName :document.getElementById("contactName").value,
		guestPhone:document.getElementById("contactPhone").value,
		guestMail:document.getElementById("contactEmail").value,
		FiveNum:"12345"
	/*	sheetTag : '工作表1',
		row: 1,
		col: 1,
		endRow : 6,
		endCol : 2
		*/
//	};
	//試算表
	console.log(a);
	//const ka = $.post(linkgoogle,a ,function(result){
	//	alert();    
	
   // })
	};
	
 	/*----------------------------------------------------- */
  	/* Back to top
   ------------------------------------------------------- */ 
	var pxShow = 300; // height on which the button will show
	var fadeInTime = 400; // how slow/fast you want the button to show
	var fadeOutTime = 400; // how slow/fast you want the button to hide
	var scrollSpeed = 300; // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

   // Show or hide the sticky footer button
	jQuery(window).scroll(function() {

		if (!( $("#header-search").hasClass('is-visible'))) {

			if (jQuery(window).scrollTop() >= pxShow) {
				jQuery("#go-top").fadeIn(fadeInTime);
			} else {
				jQuery("#go-top").fadeOut(fadeOutTime);
			}

		}		

	});		

})(jQuery);