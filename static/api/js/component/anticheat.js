// build time:Sun Apr 19 2020 22:03:46 GMT+0800 (GMT+08:00)
window._bd_share_main.F.module("component/anticheat",function(t,e,a){var o,n,i=t("base/tangram").T,r=function(t,e){var a=i(e).offset(),o={left:t.pageX,top:t.pageY};return{left:Math.floor(o.left-a.left),top:Math.floor(o.top-a.top)}},f=function(t,e){if("undefined"==typeof o&&(o=Math.floor(t.pageX),n=Math.floor(t.pageY)),e){var a=r(t,e);i(e).data("over_x",a.left).data("over_y",a.top).data("over_time",+new Date)}},c=function(t,e){var a=r(t,e);i(e).data("click_x",a.left).data("click_y",a.top)},d=function(t,e,a){"mouseenter"==t?f(e,a):"mouseclick"==t&&c(e,a)},l=function(t){var e=i(t.__element),a=t.__buttonType,r=e.data("over_x")||0,f=e.data("over_y")||0,c=e.data("click_x"),d=e.data("click_y"),l=e.innerWidth(),_=e.innerHeight(),u=new Date-e.data("over_time"),p=document.body.offsetWidth,v=document.body.offsetHeight,h=window.screen.availWidth,m=window.screen.availHeight;return[o,n,a>0?1:0,r,f,c,d,l,_,a,u,p,v,h,m].join(".")};e.process=d,e.getSloc=l});
//rebuild by neat 