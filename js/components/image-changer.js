!function(p){p.fn.twentytwenty=function(y){y=p.extend({default_offset_pct:.5,orientation:"horizontal"},y);return this.each(function(){function e(t){t=o(t),c.css("vertical"===s?"top":"left","vertical"===s?t.ch:t.cw),r(t)}var n=y.default_offset_pct,i=p(this),s=y.orientation,t="vertical"===s?"down":"left",a="vertical"===s?"up":"right",d=(i.wrap("<div class='twentytwenty-wrapper twentytwenty-"+s+"'></div>"),i.append("<div class='twentytwenty-overlay'></div>"),i.find("img:first")),w=i.find("img:last"),c=(i.append("<div class='twentytwenty-handle'></div>"),i.find(".twentytwenty-handle")),t=(c.append("<span class='twentytwenty-"+t+"-arrow'></span>"),c.append("<span class='twentytwenty-"+a+"-arrow'></span>"),i.addClass("twentytwenty-container"),d.addClass("twentytwenty-before"),w.addClass("twentytwenty-after"),i.find(".twentytwenty-overlay")),o=(t.append("<div class='twentytwenty-before-label'></div>"),t.append("<div class='twentytwenty-after-label'></div>"),function(t){var e=d.width(),n=d.height();return{w:e+"px",h:n+"px",cw:t*e+"px",ch:t*n+"px"}}),r=function(t){"vertical"===s?d.css("clip","rect(0,"+t.w+","+t.ch+",0)"):d.css("clip","rect(0,"+t.cw+","+t.h+",0)"),i.css("height",t.h)},f=(p(window).on("resize.twentytwenty",function(t){e(n)}),0),l=0;c.on("movestart",function(t){((t.distX>t.distY&&t.distX<-t.distY||t.distX<t.distY&&t.distX>-t.distY)&&"vertical"!==s||(t.distX<t.distY&&t.distX<-t.distY||t.distX>t.distY&&t.distX>-t.distY)&&"vertical"===s)&&t.preventDefault(),i.addClass("active"),f=i.offset().left,offsetY=i.offset().top,l=d.width(),imgHeight=d.height()}),c.on("moveend",function(t){i.removeClass("active")}),c.on("move",function(t){i.hasClass("active")&&(n="vertical"===s?(t.pageY-offsetY)/imgHeight:(t.pageX-f)/l,e(n=1<(n=n<0?0:n)?1:n))}),i.find("img").on("mousedown",function(t){t.preventDefault()}),p(window).trigger("resize.twentytwenty")})}}(jQuery);