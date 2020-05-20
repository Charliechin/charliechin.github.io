"use strict";var scroller={config:{hoverColor:"#DB7661",bgColor:"#1f2b31",opacity:1},init:function(){var o=document.createElement("a"),i=".scroll-top-button",n=document.createElement("img");$(n).text("^"),$(o).attr({href:"#top"}),$(n).attr({id:"up-btn","class":i.replace(".",""),src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAATCAYAAABobNZCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7VpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MDI4MDExNzQwNzIwNjgxMThEQkJGNTAwMDFENjJCODEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjQ3MDE3RkUzN0M2MTFFMkI5MUNENTYyQzU3ODhFNEUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjQ3MDE3RkQzN0M2MTFFMkI5MUNENTYyQzU3ODhFNEUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MjY1MDg5QjNGMkZFMjExQUM3Q0Q4Nzg2MUU1NkM3RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowMjgwMTE3NDA3MjA2ODExOERCQkY1MDAwMUQ2MkI4MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Psc29coAAAE7SURBVHjaYvj//z8DmTgOiM8CsTK5ZpBrccR/BDhPrgPIsTgKiH//RwVkhQCpFscA8Y//2AHIAaq0stwNiL/8xw+OAbEQtS13AuKX/4kD24FYgFqW25FgMUkOIMbiF//JA9uAmJ9cy22B+Dkew/8C8R0CDtgKxMKkWu5AhI/bgVgNiE8SEQVixFpuD8TPCBjYg6RekUgHiBCy3IkIi7uAmAlNnwIQnyAiDQjistyRiKAGWcyKI6pkiAiBbci5AEQwQoOakMXdeCxGdsBpIqIAFAKMIA36QPyWQKrugTqSmHJBhsgoUGNiYGD4BsQPGXCDfiAuAeL/DMSBJ0AcCsQn8ai5B8Q/kFPsGRxBTW61K4cjBCZgS3BKaPHVSYHFuHJBH76sBgqBo0DciyU7UeKAw0A8EYiZkeUAAgwAswRZ5V7ztVUAAAAASUVORK5CYII="});var c,t,e,l;"undefined"!=typeof conf?(c="undefined"==typeof conf.bgColor?scroller.config.bgColor:conf.bgColor,t="undefined"==typeof conf.hoverColor?scroller.config.hoverColor:conf.hoverColor,l="undefined"==typeof conf.opacity?scroller.config.opacity:conf.opacity):(c=scroller.config.bgColor,t=scroller.config.hoverColor,l=scroller.config.opacity),$(o).append(n),$("body").prepend(o),$(o).prepend("<a name='top'></a>"),$(i).css({position:"absolute",top:"120px",right:"40px",color:"#fff",backgroundColor:c,opacity:l,webkitTransition:"background 0.4s",mozTransition:"background 0.4s",msTransition:"background 0.4s",transition:"background 0.4s",padding:"15px 10px",textAlign:"center",boxSizing:"content-box"}),$(i).on("mouseover",function(){$(this).css({backgroundColor:t,opacity:1})}),$(i).on("mouseout",function(){$(this).css({color:e,backgroundColor:c,opacity:l})}),this.offset()},offset:function(){var o=(window.innerHeight,$(".scroll-top-button"));o.css("display","none"),$(function(){var i=$("body").offset().top;o.offset().top;$(window).scroll(function(){var n=i-$(window).scrollTop();if(n>-200&&o.fadeOut("slow"),n<=-400){var c=window.innerHeight-100;o.fadeIn("slow"),o.css({position:"fixed",display:"block",top:c,"z-index":2})}})}),this.scrolls()},scrolls:function(){$("a[href*=\\#]:not([href=\\#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")||location.hostname==this.hostname){var o=$(this.hash);if(o=o.length?o:$("[name="+this.hash.slice(1)+"]"),o.length)return $("html,body").animate({scrollTop:o.offset().top},500),!1}})}};$(function(){scroller.scrolls()});