/*

 jQuery Watch Plugin

 @author Darcy Clarke
 @version 2.0

 Copyright (c) 2012 Darcy Clarke
 Dual licensed under the MIT and GPL licenses.

 ADDS: 

 - $.watch()

 USES:

 - DOMAttrModified event

 FALLBACKS:

 - propertychange event
 - setTimeout() with delay 

 EXAMPLE:

 $('div').watch('width height', function(){
 console.log(this.style.width, this.style.height);
 });

 $('div').animate({width:'100px',height:'200px'}, 500);

*/
(function(a){a.extend(a.fn,{watch:function(b,c,d){var g=document.createElement("div"),f=function(a,c){var a="on"+a,f=a in c;f||(c.setAttribute(a,"return;"),f=typeof c[a]=="function");"onpropertychange"==a&&jQuery.browser.msie&&jQuery.browser.version>=9&&(f=!1);return f};typeof c=="function"&&(d=c,c={});typeof d!="function"&&(d=function(){});c=a.extend({},{throttle:10},c);return this.each(function(){var i=a(this),h=function(){for(var a=i.data(),c=!1,f,b=0;b<a.props.length;b++)if(f=i.css(a.props[b]),
a.vals[b]!=f){a.vals[b]=f;c=!0;break}c&&a.cb&&a.cb.call(i,a)},j={props:b.split(","),cb:d,vals:[]};a.each(j.props,function(a){j.vals[a]=i.css(j.props[a])});i.data(j);if(f("DOMAttrModified",g))i.on("DOMAttrModified",d);else if(f("propertychange",g))i.on("propertychange",d);else setInterval(h,c.throttle)})}})})(jQuery);
;(function(){if(!("undefined"==typeof Muse||"undefined"==typeof Muse.assets)){var a=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]==b)return c;return-1}(Muse.assets.required,"jquery.watch.js");if(-1!=a){Muse.assets.required.splice(a,1);for(var a=document.getElementsByTagName("meta"),b=0,c=a.length;b<c;b++){var d=a[b];if("generator"==d.getAttribute("name")){"2015.2.0.352"!=d.getAttribute("content")&&Muse.assets.outOfDate.push("jquery.watch.js");break}}}}})();
