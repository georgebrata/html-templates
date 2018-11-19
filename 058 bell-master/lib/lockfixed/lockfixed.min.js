/*!
 * jQuery lockfixed plugin
 * http://www.directlyrics.com/code/lockfixed/
 *
 * Copyright 2012-2015 Yvo Schaap
 * Released under the MIT license
 * http://www.directlyrics.com/code/lockfixed/license.txt
 *
 * Date: Sun March 30 2015 12:00:01 GMT
 */
(function(e,p){e.extend({lockfixed:function(a,b){b&&b.offset?(b.offset.bottom=parseInt(b.offset.bottom,10),b.offset.top=parseInt(b.offset.top,10)):b.offset={bottom:100,top:0};if((a=e(a))&&a.offset()){var n=a.css("position"),c=parseInt(a.css("marginTop"),10),l=a.css("top"),k=a.offset().top,f=!1;if(!0===b.forcemargin||navigator.userAgent.match(/\bMSIE (4|5|6)\./)||navigator.userAgent.match(/\bOS ([0-9])_/)||navigator.userAgent.match(/\bAndroid ([0-9])\./i))f=!0;a.wrap("<div class='lf-ghost' style='height:"+
a.outerHeight()+"px;display:"+a.css("display")+"'></div>");e(window).bind("DOMContentLoaded load scroll resize orientationchange lockfixed:pageupdate",a,function(g){if(!f||!document.activeElement||"INPUT"!==document.activeElement.nodeName){var d=0,d=a.outerHeight();g=a.parent().innerWidth()-parseInt(a.css("marginLeft"),10)-parseInt(a.css("marginRight"),10);var m=e(document).height()-b.offset.bottom,h=e(window).scrollTop();"fixed"===a.css("position")||f||(k=a.offset().top,l=a.css("top"));
h>=k-(c?c:0)-b.offset.top?(d=m<h+d+c+b.offset.top?h+d+c+b.offset.top-m:0,f?a.css({marginTop:parseInt(h-k-d,10)+2*b.offset.top+"px"}):a.css({position:"fixed",top:b.offset.top-d+"px",width:g+"px"})):a.css({position:n,top:l,width:g+"px",marginTop:(c&&!f?c:0)+"px"})}})}}})})(jQuery);