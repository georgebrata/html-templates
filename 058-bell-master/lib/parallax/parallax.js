/* ========================================================================
 * Tutorial specific Javascript
 * 
 * ========================================================================
 * Copyright 2016 Bootbites.com (unless otherwise stated)
 * For license information see: http://bootbites.com/license
 * ======================================================================== */$(document).ready(function(){var e={responsive:!0};$('[data-toggle="parallax-bg"], [data-toggle="parallax-element"]').each(function(){var e=$(this),t=e.data("toggle"),n=e.data("bg-img")||null,r=e.data("settings")||null;if(t==="parallax-bg"){e.css("backgroundImage","url("+n+")").addClass("block-bg-img");e.attr("data-stellar-background-ratio")}else if(t==="parallax-element"){e.attr("data-stellar-ratio");e.addClass("parallax-element")}$.each(r,function(t,n){e.attr("data-"+t,n)})});$.stellar.positionProperty.parallaxPosition={setTop:function(e,t,n){var r=e.data("vpos")||null;r!==null?e.css(r):e.css("top",t)},setLeft:function(e,t,n){var r=e.data("hpos")||null;r!==null?$.each(r,function(t,n){e.css(t,n)}):e.css("left",t)}};e.positionProperty="parallaxPosition";$.stellar(e)});