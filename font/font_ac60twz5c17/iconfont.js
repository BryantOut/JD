(function(window){var svgSprite='<svg><symbol id="icon-qiapianxingshi" viewBox="0 0 1024 1024"><path d="M383.935495 479.919368 191.967747 479.919368c-52.980346 0-95.983874-43.003528-95.983874-95.983874L95.983874 191.967747c0-52.980346 43.003528-95.983874 95.983874-95.983874l191.967747 0c52.980346 0 95.983874 43.003528 95.983874 95.983874l0 191.967747C479.919368 436.915841 436.915841 479.919368 383.935495 479.919368zM191.967747 159.973123c-17.545439 0-31.994625 14.449185-31.994625 31.994625l0 191.967747c0 17.545439 14.449185 31.994625 31.994625 31.994625l191.967747 0c17.545439 0 31.994625-14.449185 31.994625-31.994625L415.930119 191.967747c0-17.545439-14.449185-31.994625-31.994625-31.994625L191.967747 159.973123 191.967747 159.973123z"  ></path><path d="M383.935495 928.016126 191.967747 928.016126c-52.980346 0-95.983874-43.003528-95.983874-95.983874L95.983874 639.892491c0-52.980346 43.003528-95.983874 95.983874-95.983874l191.967747 0c52.980346 0 95.983874 43.003528 95.983874 95.983874l0 191.967747C479.919368 884.840585 436.915841 928.016126 383.935495 928.016126zM191.967747 607.897867c-17.545439 0-31.994625 14.277171-31.994625 31.994625l0 191.967747c0 17.717453 14.449185 31.994625 31.994625 31.994625l191.967747 0c17.545439 0 31.994625-14.277171 31.994625-31.994625L415.930119 639.892491c0-17.717453-14.449185-31.994625-31.994625-31.994625L191.967747 607.897867 191.967747 607.897867z"  ></path><path d="M832.032253 928.016126 639.892491 928.016126c-52.980346 0-95.983874-43.003528-95.983874-95.983874l0-63.989249c0-52.980346 43.003528-95.983874 95.983874-95.983874l191.967747 0c52.980346 0 95.983874 43.003528 95.983874 95.983874l0 63.989249C928.016126 884.840585 884.840585 928.016126 832.032253 928.016126zM639.892491 736.048379c-17.717453 0-31.994625 14.277171-31.994625 31.994625l0 63.989249c0 17.717453 14.277171 31.994625 31.994625 31.994625l191.967747 0c17.717453 0 31.994625-14.277171 31.994625-31.994625l0-63.989249c0-17.717453-14.277171-31.994625-31.994625-31.994625L639.892491 736.048379 639.892491 736.048379z"  ></path><path d="M832.032253 607.897867 639.892491 607.897867c-52.980346 0-95.983874-43.003528-95.983874-95.983874l0-319.946246c0-52.980346 43.003528-95.983874 95.983874-95.983874l191.967747 0c52.980346 0 95.983874 43.003528 95.983874 95.983874l0 319.946246C928.016126 564.894339 884.840585 607.897867 832.032253 607.897867zM639.892491 159.973123c-17.717453 0-31.994625 14.449185-31.994625 31.994625l0 319.946246c0 17.545439 14.277171 31.994625 31.994625 31.994625l191.967747 0c17.717453 0 31.994625-14.449185 31.994625-31.994625l0-319.946246c0-17.545439-14.277171-31.994625-31.994625-31.994625L639.892491 159.973123 639.892491 159.973123z"  ></path></symbol><symbol id="icon-xiangzuo1" viewBox="0 0 1024 1024"><path d="M671.968176 911.99957c-12.287381 0-24.576482-4.67206-33.951566-14.047144L286.048434 545.984249c-18.751888-18.719204-18.751888-49.12028 0-67.872168L638.016611 126.111222c18.751888-18.751888 49.12028-18.751888 67.872168 0 18.751888 18.719204 18.751888 49.12028 0 67.872168l-318.016611 318.047574L705.888778 830.047574c18.751888 18.751888 18.751888 49.12028 0 67.872168C696.544658 907.32751 684.255557 911.99957 671.968176 911.99957z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)