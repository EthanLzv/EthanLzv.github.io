// build time:Sat Apr 11 2020 17:10:10 GMT+0800 (GMT+08:00)
!window._bd_share_is_recently_loaded&&window._bd_share_main.F.module("trans/trans",function(e,n){var t=e("component/comm_tools"),i=e("conf/const").URLS,r=function(){window._bd_share_main.F.use("base/tangram",function(e){var n=e.T;null==n.cookie.get("bdshare_firstime")&&n.cookie.set("bdshare_firstime",1*new Date,{path:"/",expires:(new Date).setFullYear(2022)-new Date})})},a=function(e){var n=e.bdUrl||t.getPageUrl();return n=n.replace(/\'/g,"%27").replace(/\"/g,"%22")},o=function(e){var n=(new Date).getTime()+3e3,i={click:1,url:a(e),uid:e.bdUid||"0",to:e.__cmd,type:"text",pic:e.bdPic||"",title:(e.bdText||document.title).substr(0,300),key:(e.bdSnsKey||{})[e.__cmd]||"",desc:e.bdDesc||"",comment:e.bdComment||"",relateUid:e.bdWbuid||"",searchPic:e.bdSearchPic||0,sign:e.bdSign||"on",l:window._bd_share_main.n1.toString(32)+window._bd_share_main.n2.toString(32)+n.toString(32),linkid:t.getLinkId(),firstime:c("bdshare_firstime")||""};switch(e.__cmd){case"copy":_(i);break;case"print":u();break;case"bdxc":m();break;case"bdysc":b(i);break;case"weixin":l(i);break;default:d(e,i)}window._bd_share_main.F.use("trans/logger",function(n){n.commit(e,i)})},d=function(e,n){var t=i.jumpUrl;"mshare"==e.__cmd?t=i.mshareUrl:"mail"==e.__cmd&&(t=i.emailUrl);var r=t+"?"+s(n);window.open(r)},c=function(e){if(e){var n=new RegExp("(^| )"+e+"=([^;]*)(;|$)"),t=n.exec(document.cookie);if(t)return decodeURIComponent(t[2]||null)}},s=function(e){var n=[];for(var t in e)n.push(encodeURIComponent(t)+"="+encodeURIComponent(e[t]));return n.join("&").replace(/%20/g,"+")},_=function(e){window._bd_share_main.F.use("base/tangram",function(n){var i=n.T;i.browser.ie?(window.clipboardData.setData("text",document.title+" "+(e.bdUrl||t.getPageUrl())),alert("标题和链接复制成功，您可以推荐给QQ/MSN上的好友了！")):window.prompt("您使用的是非IE核心浏览器，请按下 Ctrl+C 复制代码到剪贴板",document.title+" "+(e.bdUrl||t.getPageUrl()))})},u=function(){window.print()},m=function(){window._bd_share_main.F.use("trans/trans_bdxc",function(e){e&&e.run()})},b=function(e){window._bd_share_main.F.use("trans/trans_bdysc",function(n){n&&n.run(e)})},l=function(e){window._bd_share_main.F.use("trans/trans_weixin",function(n){n&&n.run(e)})},w=function(e){o(e)};n.run=w,r()});
//rebuild by neat 