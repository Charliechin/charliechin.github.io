function debounce(a,o,n){var e;return function(){var t=this,r=arguments;clearTimeout(e),e=setTimeout(function(){e=null,n||a.apply(t,r)},o),n&&!e&&a.apply(t,r)}}function hasScrolled(){var a=$(this).scrollTop();Math.abs(lastScrollTop-a)<=delta||(a>lastScrollTop&&a>navbarHeight?$(".navbar.nav-down").removeClass("nav-down").addClass("nav-up"):a+$(window).height()<$(document).height()&&$(".navbar.nav-up").removeClass("nav-up").addClass("nav-down"),lastScrollTop=a)}function debounce(a,o,n){var e;return function(){var t=this,r=arguments;clearTimeout(e),e=setTimeout(function(){e=null,n||a.apply(t,r)},o),n&&!e&&a.apply(t,r)}}var transparent=!0,big_image,transparentDemo=!0,fixedTop=!1,navbar_initialized,backgroundOrange=!1,toggle_initialized=!1;$(document).ready(function(){window_width=$(window).width();var a;0!=$('[data-toggle="tooltip"]').length&&$('[data-toggle="tooltip"]').tooltip(),0!=$("[data-toggle='switch']").length&&$("[data-toggle='switch']").bootstrapSwitch(),0!=$(".modal").length&&$(".modal").appendTo("body"),pk.initSliders(),pk.initPopovers(),pk.initNavbarImage(),0!=$(".navbar[color-on-scroll]").length&&$(window).on("scroll",pk.checkScrollForTransparentNavbar),$(".navbar-collapse").click(function(){setTimeout(function(){1==pk.misc.navbar_menu_visible&&($("html").removeClass("nav-open"),pk.misc.navbar_menu_visible=0,$("#bodyClick").remove(),setTimeout(function(){$toggle.removeClass("toggled")},550))},550)}),$("#navbarToggler").on("show.bs.collapse",function(){$("nav").hasClass("navbar-transparent")&&$(document).scrollTop()<50&&($(".navbar").addClass("no-transition"),$("nav").removeClass("navbar-transparent"))}).on("hidden.bs.collapse",function(){$(document).scrollTop()<50&&($(".navbar").removeClass("no-transition"),$("nav:first-of-type").addClass("navbar-transparent"))}),$navbar=$(".navbar[color-on-scroll]"),scroll_distance=$navbar.attr("color-on-scroll")||500,0!=$(".navbar[color-on-scroll]").length&&(pk.checkScrollForTransparentNavbar(),$(window).on("scroll",pk.checkScroll)),$(".form-control").on("focus",function(){$(this).parent(".input-group").addClass("input-group-focus")}).on("blur",function(){$(this).parent(".input-group").removeClass("input-group-focus")}),window_width>=768&&(a=$('.page-header[data-parallax="true"]'),0!=a.length&&$(window).on("scroll",pk.checkScrollForPresentationPage)),$(".carousel").carousel({interval:4e3})}),$(document).on("click",".navbar-toggler",function(){$toggle=$(this),1==pk.misc.navbar_menu_visible?($("html").removeClass("nav-open"),pk.misc.navbar_menu_visible=0,$("#bodyClick").remove(),setTimeout(function(){$toggle.removeClass("toggled")},550)):(setTimeout(function(){$toggle.addClass("toggled")},580),div='<div id="bodyClick"></div>',$(div).appendTo("body").click(function(){$("html").removeClass("nav-open"),pk.misc.navbar_menu_visible=0,setTimeout(function(){$toggle.removeClass("toggled"),$("#bodyClick").remove()},550)}),$("html").addClass("nav-open"),pk.misc.navbar_menu_visible=1)}),pk={misc:{navbar_menu_visible:0},checkScrollForTransparentNavbar:debounce(function(){$(document).scrollTop()>$(".navbar").attr("color-on-scroll")?transparent&&(transparent=!1,$(".navbar[color-on-scroll]").removeClass("navbar-transparent")):transparent||(transparent=!0,$(".navbar[color-on-scroll]").addClass("navbar-transparent"))},17),initNavbarImage:function(){var a=$(".navbar").find(".navbar-translate").siblings(".navbar-collapse"),o=a.data("nav-image");$(window).width()<991||$("body").hasClass("burger-menu")?void 0!=o&&a.css("background","url('"+o+"')").removeAttr("data-nav-image").css("background-size","cover").addClass("has-image"):void 0!=o&&a.css("background","").attr("data-nav-image",""+o).css("background-size","").removeClass("has-image")},initPopovers:function(){0!=$('[data-toggle="popover"]').length&&($("body").append('<div class="popover-filter"></div>'),$('[data-toggle="popover"]').popover().on("show.bs.popover",function(){$(".popover-filter").click(function(){$(this).removeClass("in"),$('[data-toggle="popover"]').popover("hide")}),$(".popover-filter").addClass("in")}).on("hide.bs.popover",function(){$(".popover-filter").removeClass("in")}))},initSliders:function(){if(0!=$("#sliderRegular").length){var a=document.getElementById("sliderRegular");noUiSlider.create(a,{start:[5e3],range:{min:[2e3],max:[1e4]}})}if(0!=$("#sliderDouble").length){var o=document.getElementById("sliderDouble");noUiSlider.create(o,{start:[20,80],connect:!0,range:{min:0,max:100}})}},checkScroll:debounce(function(){big_image=$('.page-header[data-parallax="true"]'),oVal=$(window).scrollTop()/3,big_image.css({transform:"translate3d(0,"+oVal+"px,0)","-webkit-transform":"translate3d(0,"+oVal+"px,0)","-ms-transform":"translate3d(0,"+oVal+"px,0)","-o-transform":"translate3d(0,"+oVal+"px,0)"})},4)},demo={initPickColor:function(){$(".pick-class-label").click(function(){var a=$(this).attr("new-class"),o=$("#display-buttons").attr("data-class"),n=$("#display-buttons");if(n.length){var e=n.find(".btn");e.removeClass(o),e.addClass(a),n.attr("data-class",a)}})}};