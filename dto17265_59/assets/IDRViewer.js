var IDRViewer=function(){var w={View:{MultiFile:0,SplitSpreads:1,SingleFile:2,IDR:3}},l=1,v=0,x=0,d=0,p=0,sa=0,f,m,r,t,Z=[],aa,B,ha=!0,ta,F,k=w.View,ba=k.MultiFile,A,D,P,Q,ca,ua,H,R,ka,la,G,K,va,wa,xa,ya,da,L,ea,S,fa,za,Aa,M={},q;w.makeNavBar=function(a,b,c,e){aa=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);/iPhone|iPad|iPod/i.test(navigator.userAgent);F=!e;q=c;m=h("contentContainer");r=h("mainContent");p=a;h("pgCount").innerHTML="/"+p;A=h("goBtn");D=
h("zoomBtn");P=h("btnFullscreen");Q=h("btnOutlines");ca=h("btnThumbnails");ua=h("btnPrev");h("btnNext");H=h("btnMove");R=h("btnSelect");ka=h("btnZoomIn");la=h("btnZoomOut");L=0;ea=1;K=0;va=1;wa=2;xa=3;ya=4;B=da=5;f=h("jpedal");T.setup(q,b);document.fullscreenEnabled||document.msFullscreenEnabled||document.mozFullScreenEnabled||document.webkitFullscreenEnabled?(U("fullscreenchange",document,ia),U("MSFullscreenChange",document,ia),U("mozfullscreenchange",document,ia),U("webkitfullscreenchange",document,
ia)):P.parentNode.removeChild(P);this.setSelectMode(L);a=Da("page");a=""!=a?parseInt(a):1;if(aa){D.parentNode.removeChild(D);H.parentNode.removeChild(H);R.parentNode.removeChild(R);ka.parentNode.removeChild(ka);la.parentNode.removeChild(la);r.style.overflow="hidden";V.setup(a);var g=window.innerWidth,y=window.innerHeight;c=function(){setTimeout(function(){if(g!==window.innerWidth||y!==window.innerHeight)m.innerHTML="",l=1,g=window.innerWidth,y=window.innerHeight,V.setup(d)},300)};window.onorientationchange=
c;window.onresize=c}else{for(b=0;b<p;b++)if(c[b][0]!=c[0][0]||c[b][1]!=c[0][1]){ha=!1;break}ha&&!ta&&(G=document.createElement("select"),G.id="viewBtn",c=document.createElement("option"),c.text="Single Pages",G.appendChild(c),c=document.createElement("option"),c.text="Magazine",G.appendChild(c),c=document.createElement("option"),c.text="Continuous",G.appendChild(c),G.onchange=Ea,h("mainNav").appendChild(G),G.selectedIndex=ba);M.setViewMode(ba);ha&&ba===k.SplitSpreads?W.setup(a):ha&&ba===k.SingleFile?
N.setup(a):O.setup(a);B=da;D.selectedIndex=B;window.onresize=E}};var T=function(){var a={},b=[],c=0,e,g,y,f=!1,n=!1,u=!1,na=!0;a.setup=function(a,c){g=h("leftContent");e=h("left");y=c;m(a);for(var d=0;d<p;d++)b[d]=!1;n=f=!1;U("scroll",g,Ba);d=document.createElement("script");d.setAttribute("src","bookmarks/bookmarks.js");d.setAttribute("onload","IDRViewer.setBookmarks(bookmarks);");d.onreadystatechange=function(){"complete"==this.readyState&&IDRViewer.setBookmarks(bookmarks)};(document.head||document.getElementsByTagName("head")[0]).appendChild(d)};
a.toggleThumbnails=function(){f?(e.style.width="0",e.style.left="-20px"):(k(-1),e.style.width="200px",e.style.left="0",Ba());f=!f};a.toggleOutlines=function(a){n&&!a?(h("thumbnailPanel").style.display="inline",h("outlinePanel").style.display="none",g.scrollTop=h("thumb"+d).getBoundingClientRect().top-80,n=!n,ca.className="inactive navBtn",Q.className="navBtn"):a&&"inactive navBtn"!=Q.className&&(h("thumbnailPanel").style.display="none",h("outlinePanel").style.display="inline",n=!n,ca.className="navBtn",
Q.className="inactive navBtn")};var m=function(a){for(var b=[],c=0;c<p;c++){var d=Math.floor(160/a[c][0]*a[c][1]);b[c]=a[c][0]>a[c][1]||200>=d?d:200}for(a=1;a<=p;a++){var e=document.createElement("a");e.style.height=b[a-1]+"px";e.className="thumbnail";e.href="?page="+a;e.id="thumb"+a;(function(a){e.onclick=function(){na=!1;IDRViewer.goToPage(a);return!1}})(a);e.setAttribute("title","Page "+a);e.innerHTML='<img src="assets/loading.gif"/>';g.children[0].appendChild(e)}},Ba=function(a){var b=g.scrollTop;
c=b;setTimeout(function(){k(b)},500)},k=function(a){if(a==c||-1==a)for(a=0;a<p;a++)if(!b[a]){var d=g.children[0].children[a];if(d.offsetTop>g.scrollTop+g.clientHeight)break;d.offsetTop+d.clientHeight>g.scrollTop&&(d=a,b[d]||(g.children[0].children[d].children[0].setAttribute("src","thumbnails/"+(d+1)+y),b[d]=!0))}};a.scrollToPage=function(a,b){var c=h("thumb"+a);if("thumbnail currentPageThumbnail"!=c.className){for(var d=1;d<=p;d++)h("thumb"+d).className="thumbnail";c.className="thumbnail currentPageThumbnail";
na&&(d=u?80:40,g.scrollTop=g.scrollTop+c.getBoundingClientRect().top-d)}"undefined"!=typeof b&&(h("thumb"+b).className="thumbnail currentPageThumbnail");na=!0};a.setBookmarks=function(a){h("leftContent").style.top="40px";h("leftNav").style.display="block";l(h("outlinePanel"),a);n?ca.className="navBtn":Q.className="navBtn";u=!0};var l=function(a,b){for(var c=document.createElement("ul"),d=0;d<b.length;d++)(function(){var a=b[d],e=document.createElement("li");e.setAttribute("title","Page "+a.page);
e.innerHTML=a.title;e.onclick=function(){IDRViewer.goToPage(parseInt(a.page))};c.appendChild(e);"undefined"!=typeof a.children&&l(c,a.children)})();a.appendChild(c)};return a}(),Ca=function(){A.style.width="65px";A.innerHTML="";var a=document.createElement("option");a.value=1;a.innerHTML="1";A.appendChild(a);for(var b,c=2;c<=p;c+=2)a=document.createElement("option"),a.value=c,b=c!==p||1===p%2?String(c+"-"+(c+1)):String(c),a.innerHTML=b,A.appendChild(a);A.selectedIndex=d/2},oa=function(){A.innerHTML=
"";for(var a=1;a<=p;a++){var b=document.createElement("option");b.value=a;b.innerHTML=String(a);A.appendChild(b)}A.selectedIndex=d-1},C={applyTransform:function(a,b){a.style.webkitTransform=b;a.style.mozTransform=b;a.style.msTransform=b;a.style.oTransform=b;a.style.transform=b},applyTransformOrigin:function(a,b){a.style.webkitTransformOrigin=b;a.style.mozTransformOrigin=b;a.style.msTransformOrigin=b;a.style.oTransformOrigin=b;a.style.transformOrigin=b},applyTransitionDuration:function(a,b){a.style.webkitTransitionDuration=
b;a.style.mozTransitionDuration=b;a.style.msTransitionDuration=b;a.style.oTransitionDuration=b;a.style.transitionDuration=b}},W=function(){var a={},b,c,d,g,y;a.setup=function(c){t=k.SplitSpreads;Ca();v=q[0][0];x=q[0][1];b=v;window.onpopstate=function(b){a.goToPage(b.state.page,!1)};a.goToPage(c,!1)};a.goToPage=function(a,c){a>p&&(a=p);1!==a&&0!==a%2&&--a;f.parentNode.removeChild(f);g=d=void 0;M.setPage(a);var n=1<a&&a<p,k=n?a+1:void 0;T.scrollToPage(a,k);v=b;n&&(v*=2);m.style.width=v+"px";var r="container"+
a;A.selectedIndex=a/2;c&&window.history.pushState({page:a},null,"?page="+a);f=document.createElement("div");f.id=r;f.style.width=v+"px";m.appendChild(f);C.applyTransformOrigin(f,"top left");f.style.margin="0";E();if(F)d=document.createElement("object"),d.setAttribute("width",""+b),d.setAttribute("height",""+x),d.setAttribute("data",a+".svg"),d.setAttribute("type","image/svg+xml"),f.appendChild(d),E();else{var q=function(){y||(l(),y=!0);var c=document.createElement("iframe");c.setAttribute("src",a+
".html");c.setAttribute("style","width: "+b+"px; height: "+x+"px; position: absolute; border: 0;");c.onload=function(){d=c};f.appendChild(c)};$.ajax({url:a+".html",success:function(b){try{var c=$("<div />").html(b).find("#jpedal").attr("id","page"+a).css({position:"absolute"});$(f).append(c);setTimeout(function(){var b=function(){window["load"+a]()};setTimeout(b,1E3);b();if("file:"==window.location.protocol){var b=h("fonts"+a),c=document.createElement("style");c.setAttribute("type","text/css");c.innerHTML=
b.innerHTML;f.appendChild(c)}},1)}catch(d){q()}},error:q})}if(n)if(F)g=document.createElement("object"),g.setAttribute("width",""+b),g.setAttribute("height",""+x),g.setAttribute("data",k+".svg"),g.setAttribute("type","image/svg+xml"),g.setAttribute("style","position: absolute; left: "+b+"px;"),f.appendChild(g),E();else{var t=function(){y||(l(),y=!0);var a=document.createElement("iframe");a.setAttribute("src",k+".html");a.setAttribute("style","width: "+b+"px; height: "+x+"px; position: absolute; border: 0; left: "+
b+"px;");a.onload=function(){g=a};f.appendChild(a)};$.ajax({url:k+".html",success:function(a){try{var c=$("<div />").html(a).find("#jpedal").attr("id","page"+k).css({position:"absolute",left:b});$(f).append(c);setTimeout(function(){var a=function(){window["load"+k]()};setTimeout(a,1E3);a();if("file:"==window.location.protocol){var a=h("fonts"+k),b=document.createElement("style");b.setAttribute("type","text/css");b.innerHTML=a.innerHTML;f.appendChild(b)}},1)}catch(d){t()}},error:t})}};var l=function(){X.currentSelectMode==
ea?a.enablePanning():a.enableTextSelection()};a.enableTextSelection=function(){if(y||F)n(),c.style.visibility="hidden"};a.enablePanning=function(){if(y||F)"undefined"!=typeof d&&Y(d.contentWindow),"undefined"!=typeof g&&Y(g.contentWindow),n(),c.style.visibility="visible"};var n=function(){"undefined"==typeof c&&(c=document.createElement("div"),c.id="jpedalOverlay",c.setAttribute("style","width: inherit; height: inherit; position: absolute; z-index: 10; visibility: hidden;"),m.insertBefore(c,m.firstChild))};
return a}(),O=function(){var a={},b,c,e;a.setup=function(b){t=k.MultiFile;oa();window.onpopstate=function(b){a.goToPage(b.state.page,!1)};a.goToPage(b,!1)};a.goToPage=function(c,g){f.parentNode.removeChild(f);b=void 0;M.setPage(c);T.scrollToPage(d);v=q[d-1][0];x=q[d-1][1];m.style.width=v+"px";m.style.height=x+"px";r.scrollTop=0;A.selectedIndex=d-1;g&&window.history.pushState({page:d},null,"?page="+d);if(F)f=document.createElement("object"),f.setAttribute("width",""+v),f.setAttribute("height",""+x),
f.setAttribute("data",d+".svg"),f.setAttribute("type","image/svg+xml"),f.setAttribute("id","jpedal"),m.appendChild(f),b=f,C.applyTransformOrigin(f,"top left"),E();else{var k=function(){e||(X.currentSelectMode==ea?a.enablePanning():a.enableTextSelection(),e=!0);f=document.createElement("iframe");f.setAttribute("id","jpedal");f.setAttribute("src",d+".html");f.setAttribute("style","width: "+v+"px; height: "+x+"px; position: relative; border: 0;");f.onload=function(){b=f};m.appendChild(f);C.applyTransformOrigin(f,
"top left");E()};$.ajax({url:d+".html",success:function(a){try{var b=$("<div />").html(a).find("#jpedal").css({margin:"0",overflow:"hidden",position:"relative"});$(m).append(b);setTimeout(function(){f=h("jpedal");C.applyTransformOrigin(f,"top left");E();var a=function(){window["load"+d]()};setTimeout(a,1E3);a();if("file:"==window.location.protocol){var a=h("fonts"+d),b=document.createElement("style");b.setAttribute("type","text/css");b.innerHTML=a.innerHTML;a.parentNode.removeChild(a);h("jpedal").appendChild(b)}},
1)}catch(c){k()}},error:k})}};a.enableTextSelection=function(){if(e||F)g(),c.style.visibility="hidden"};a.enablePanning=function(){if(e||F)"undefined"!=typeof b&&Y(b.contentWindow),g(),c.style.visibility="visible"};var g=function(){"undefined"==typeof c&&(c=document.createElement("div"),c.id="jpedalOverlay",c.setAttribute("style","width: inherit; height: inherit; position: absolute; z-index: 10; visibility: hidden;"),m.insertBefore(c,m.firstChild))};return a}(),N=function(){var a={},b=[],c=0,e,g,
y;a.setup=function(c){t=k.SingleFile;oa();e=[];window.onpopstate=function(b){a.goToPage(b.state.page,!1)};C.applyTransformOrigin(f,"top left");x=0;v=q[0][0];for(var d=0;d<p;d++){b[d]=!1;var h=document.createElement("div");h.id="page"+(d+1);h.setAttribute("style","position:relative; overflow: hidden; background-color: white; margin: 0 auto 10px; width: "+q[d][0]+"px; height: "+q[d][1]+"px;");f.appendChild(h);x+=q[d][1]+10}m.style.height=x+"px";r.onscroll=l;a.goToPage(c,!1)};var l=function(a){var e=
window.pageYOffset;c=e;setTimeout(function(){if(e==c){if(0<h("page1").getBoundingClientRect().top)M.setPage(1),A.selectedIndex=d-1;else for(var a=1;a<=p;a++){var g=h("page"+a).getBoundingClientRect(),f=g.top,g=g.bottom-g.top;if(f<=.25*g&&f>.5*-g){M.setPage(a);A.selectedIndex=d-1;break}}T.scrollToPage(d);for(a=1;a<=p;a++)b[a]||(g=h("page"+a),f=g.getBoundingClientRect().top,f<=g.clientHeight&&f>=-g.clientHeight&&n(a))}},250)};a.goToPage=function(a,c){r.scrollTop=r.scrollTop+h("page"+a).getBoundingClientRect().top-
45;b[a]||n(a)};var n=function(c){b[c]=!0;if(F){var d=document.createElement("object");d.setAttribute("width",""+q[c-1][0]);d.setAttribute("height",""+q[c-1][1]);d.setAttribute("data",c+".svg");d.setAttribute("type","image/svg+xml");e[c-1]=d;h("page"+c).appendChild(d)}else{var f=function(){g||(X.currentSelectMode==ea?a.enablePanning():a.enableTextSelection(),g=!0);var b=document.createElement("iframe");b.setAttribute("src",c+".html");b.setAttribute("style","width: "+q[c-1][0]+"px; height: "+q[c-1][1]+
"px; position: relative; border: 0;");e[c-1]=b;h("page"+c).appendChild(b)};$.ajax({url:c+".html",success:function(a){try{var b=$("<div />").html(a).find("#jpedal").html();$("#page"+c).html(b);setTimeout(function(){var a=function(){window["load"+c]()};setTimeout(a,1E3);a();if("file:"==window.location.protocol){var a=h("fonts"+c),b=document.createElement("style");b.setAttribute("type","text/css");b.innerHTML=a.innerHTML;a.parentNode.removeChild(a);h("jpedal").appendChild(b)}},1)}catch(d){f()}},error:f})}};
a.enableTextSelection=function(){if(g||F)u(),y.style.visibility="hidden"};a.enablePanning=function(){if(g||F){for(var a=0;a<e.length;a++)"undefined"!=typeof e[a]&&Y(e[a].contentWindow);u();y.style.visibility="visible"}};var u=function(){"undefined"==typeof y&&(y=document.createElement("div"),y.id="jpedalOverlay",y.setAttribute("style","width: inherit; height: inherit; position: absolute; z-index: 10; visibility: hidden;"),m.insertBefore(y,m.firstChild))};return a}(),V=function(){var a={},b=[],c=[],
e=[],g,f,v,n=0,u=0,w,x,B=0,D,E,G,K,z,ba=!1;a.next=function(){this.goToPage(z?d+2:d+1,!0,!0)};a.prev=function(){this.goToPage(d-1,!0,!0)};a.setup=function(Fa){t=k.IDR;m.removeAttribute("style");m.style.overflow="visible";m.style.padding="0";m.style.margin="0";m.style.webkitBackfaceVisibility="hidden";m.style.webkitPerspective="1000";ba||(r.addEventListener("touchstart",ia),r.addEventListener("touchmove",ka),r.addEventListener("touchend",la),ba=!0);z=window.innerWidth>window.innerHeight;M.setViewMode(k.IDR,
z?"landscape":"portrait");if(!ha||q[0][0]>q[0][1])z=!1;z?Ca():oa();for(var c=1;c<=p;c++)b[c]=!1;window.onpopstate=function(b){b.state&&a.goToPage(b.state.page,b.state.slide,!1)};setTimeout(function(){a.goToPage(Fa,!1,!1)},0)};var Q=!1,H=!1,ga,R,L=!1,ea,S,U,V,W,N,O,X,Y,Z,aa,P,I,J,ca,da,fa,ia=function(a){D=Q=!1;1!==a.touches.length||L||1!==l||(R=a.touches[0].clientX,S=a.touches[0].clientX,U=a.touches[0].clientY,V=S,W=U,Q=!0,ea=Date.now());ca&&(da=!0);1===a.touches.length&&1<l&&(E=a.touches[0].clientX,
G=a.touches[0].clientY,K=!0,N=u,O=n,X=N,Y=O,Z=Date.now(),aa=Date.now(),P||(P=setInterval(function(){N=X;O=Y;X=u;Y=n;aa=Z;Z=Date.now()},200)));if(2===a.touches.length&&!H){D=!0;K=!1;pa(d);var b=a.touches[0].clientX-g,c=a.touches[1].clientX-g,e=a.touches[0].clientY;a=a.touches[1].clientY;v=Math.sqrt(Math.pow(Math.abs(b-c),2)+Math.pow(Math.abs(e-a),2));w=b-(b-c)/2;x=e-(e-a)/2}},ka=function(a){a.preventDefault();a.stopPropagation();if(1===a.touches.length&&Q&&1===l){H=!0;var b=R-a.touches[0].clientX;
0!==b&&(R=a.touches[0].clientX,V=a.touches[0].clientX,W=a.touches[0].clientY,ga-=b,C.applyTransform(m,"translate3d("+ga+"px, 0, 0)"))}else if(1===a.touches.length&&K){fa=!0;b=a.touches[0].clientX;a=a.touches[0].clientY;var c=a-G;u+=b-E;n+=c;E=b;G=a;qa();requestAnimationFrame(function(){ma(u,n,l,!0)},h("main"))}else if(2===a.touches.length&&!L&&a.cancelable&&D&&!H&&(B=(B+1)%2,1!==B)){var d=a.touches[0].clientX-g,e=a.touches[1].clientX-g,c=a.touches[0].clientY,f=a.touches[1].clientY;a=Math.sqrt(Math.pow(Math.abs(d-
e),2)+Math.pow(Math.abs(c-f),2));b=a/v;1>l*b&&(l=b=1);4<l*b&&(b=1);l*=b;d-=(d-e)/2;c-=(c-f)/2;u=u+d-w;n=n+c-x;e=-u+d;u-=e*b-e;e=-n+c;n-=e*b-e;qa();w=d;x=c;requestAnimationFrame(function(){ma(u,n,l,!0)},h("main"));v=a}},la=function(b){var c;if(0===b.touches.length){if(H){var e=H=!1;300>Date.now()-ea&&(b=S-V,c=U-W,100<Math.abs(b)&&Math.abs(b)>.25*Math.abs(c)&&(e=!0,0<b?a.next():a.prev()));e||(b=-window.innerWidth*(d-1),z&&(b=-window.innerWidth*Math.floor(d/2)),ga>b+window.innerWidth/2?a.prev():ga<b-
window.innerWidth/2?a.next():a.goToPage(d,!0,!1))}clearInterval(P);P=null;fa&&(fa=!1,e=Date.now()-aa,b=N-u,c=O-n,I=b/(e/16),J=c/(e/16),.5>Math.abs(I)&&(I=0),.5>Math.abs(J)&&(J=0),0===I&&0===J||window.requestAnimationFrame(ja,h("main")))}},ja=function(){ca=!0;!da&&(-.5>I||.5<I||-.5>J||.5<J)?(u-=I,n-=J,I*=.95,J*=.95,qa(),ma(u,n,l,!0),window.requestAnimationFrame(ja,h("main"))):da=ca=!1},qa=function(){0<u&&(I=u=0);0<n&&(J=n=0);var a=q[d-1][0]*e[d];z&&(a*=2);var b=a*l;u<a-b&&(u=a-b,I=0);a=q[d-1][1]*e[d];
b=a*l;n<a-b&&(n=a-b,J=0)},ma=function(a,b,f,g){a=Math.round(2*a)/2;b=Math.round(2*b)/2;a=g?"translate3d("+(a+c[d])+"px, "+b+"px, 0) scale("+f*e[d]+")":"translateX("+(a+c[d])+"px) translateY("+b+"px) scale("+f*e[d]+")";b=h("page"+d);C.applyTransform(b,a)},ra=function(a){if(!b[a]){var d=document.createElement("div");d.setAttribute("id","page"+a);d.style.width=z&&1!=a&&(a<p||1===p%2)?2*q[a][0]+"px":q[a-1][0]+"px";d.style.height=q[a-1][1]+"px";pa(a);c[a]=z&&1!=a?window.innerWidth*Math.floor(a/2)+g:window.innerWidth*
(a-1)+g;C.applyTransform(d,"translate3d("+c[a]+"px, 0, 0) scale("+e[a]+")");C.applyTransformOrigin(d,"top left");d.style.marginTop=f+"px";d.style.position="absolute";m.appendChild(d)}b[a]||(F?(b[a]=!0,d=document.createElement("div"),d.setAttribute("style","position: absolute"),h("page"+a).appendChild(d),$(d).load(a+".svg")):$.ajax({url:a+".html",success:function(c){b[a]||(b[a]=!0,c=$("<div />").html(c).find("#jpedal").css("position","absolute"),$("#page"+a).append(c),setTimeout(function(){var b=function(){window["load"+
a]()};setTimeout(b,1E3);b()},1))}}));z&&1!=a&&!b[a+1]&&a!=p&&(F?(b[a+1]=!0,d=document.createElement("div"),d.setAttribute("style","position: absolute; left: "+q[a][0]+"px"),h("page"+a).appendChild(d),$(d).load(a+1+".svg")):$.ajax({url:a+1+".html",success:function(c){b[a+1]||(b[a+1]=!0,c=$("<div />").html(c).find("#jpedal").css("position","absolute"),(a<p||1===p%2)&&c.css("left",q[a][0]),$("#page"+a).append(c),setTimeout(function(){var b=function(){window["load"+(a+1)]()};setTimeout(b,1E3);b()},1))}}))},
pa=function(a){var b;b=z&&1!=a&&(a<p||1===p%2)?(window.innerWidth-20)/(2*q[a][0]):(window.innerWidth-20)/q[a-1][0];var c=(window.innerHeight-40-20)/q[a-1][1];b<c?(e[a]=b,g=10):(e[a]=c,g=(window.innerWidth-20-(z&&1!=a&&(a<p||1===p%2)?2*q[a][0]*e[a]:q[a-1][0]*e[a]))/2+10);return f=(window.innerHeight-40-q[a-1][1]*e[a])/2};a.goToPage=function(c,e,f){if(1<l)l=1,requestAnimationFrame(function(){ma(0,0,l,!0);a.goToPage(c,e,f)},h("main"));else{L=!0;1>c&&(c=1);c>p&&(c=p);z&&1!==c&&1===c%2&&--c;pa(c);b[c]||
ra(c);ga=z?-(window.innerWidth*Math.floor(c/2)):-(window.innerWidth*(c-1));e&&C.applyTransitionDuration(m,"200ms");C.applyTransform(m,"translate3d("+ga+"px, 0, 0)");z&&1!==c&&1===c%2&&--c;z&&1!==c&&c<p?T.scrollToPage(c,c+1):T.scrollToPage(c);M.setPage(c);f&&window.history.pushState({page:d,slide:e},null,"?page="+d);A.selectedIndex=z?Math.floor(d/2):d-1;var g=function(){var a;L=!1;a=c;z&&1===a&&(a=0);var e=a-1,f=a+1;z&&(--e,f+=1,2===a&&(e=1));1<=e&&!b[e]&&ra(e);f<=p&&!b[f]&&ra(f);C.applyTransitionDuration(m,
"");m.removeEventListener("transitionend",g,!1);m.removeEventListener("webkitTransitionEnd",g,!1);if(z)for(e=2;e<=p;e+=2)b[e]&&(e<d-2||e>d+2)&&(b[e]=!1,a=h("page"+e),a.parentNode.removeChild(a),e<p&&(b[e+1]=!1));else for(e=1;e<=p;e++)b[e]&&(e<d-1||e>d+1)&&(b[e]=!1,a=h("page"+e),a.parentNode.removeChild(a))};e?(m.addEventListener("transitionend",g,!1),m.addEventListener("webkitTransitionEnd",g,!1)):g()}};return a}();w.setBookmarks=T.setBookmarks;w.setDefaultViewMode=function(a){if(a===k.MultiFile||
a===k.SplitSpreads||a===k.SingleFile)ba=a};var Da=function(a){for(var b=document.URL,c=b.toString().indexOf("?"),b=-1!=c?b.substr(c+1).split("&"):"",c=0;c<b.length;c++)if(b[c]=b[c].split("="),b[c][0]==a)return b[c][1];return""};w.toggleOutlines=T.toggleOutlines;var Y=function(a){try{a.getSelection?a.getSelection().empty?a.getSelection().empty():a.getSelection().removeAllRanges&&a.getSelection().removeAllRanges():a.document.selection&&a.document.selection.empty()}catch(b){}},X=function(){var a={},
b,c,d=!1,f=!!window.opera||0<=navigator.userAgent.indexOf(" OPR/"),f=!!window.chrome&&!f;"undefined"!==typeof InstallTrigger?(S="-moz-grab",fa="-moz-grabbing"):f?(S="-webkit-grab",fa="-webkit-grabbing"):fa=S="all-scroll";a.currentSelectMode=L;a.enableTextSelection=function(){this.currentSelectMode=L;R.className="inactive navBtn";H.className="navBtn";r.style.cursor="";var a=function(a){};r.onmousedown=a;document.onmouseup=a;r.onmousemove=a;t===k.MultiFile?O.enableTextSelection():t===k.SplitSpreads?
W.enableTextSelection():t===k.SingleFile&&N.enableTextSelection()};a.enablePanning=function(){this.currentSelectMode=ea;R.className="navBtn";H.className="inactive navBtn";Y(window);r.style.cursor=S;r.onmousedown=function(a){a=a||window.event;r.style.cursor=fa;b=a.clientX;c=a.clientY;d=!0;return!1};document.onmouseup=function(a){r.style.cursor=S;d=!1};r.onmousemove=function(a){if(d)return a=a||window.event,r.scrollLeft=r.scrollLeft+b-a.clientX,r.scrollTop=r.scrollTop+c-a.clientY,b=a.clientX,c=a.clientY,
!1};t===k.MultiFile?O.enablePanning():t===k.SplitSpreads?W.enablePanning():t===k.SingleFile&&N.enablePanning()};return a}();w.setSelectMode=function(a){aa||(a==L?X.enableTextSelection():X.enablePanning())};var Ga=function(){var a=0;self.innerHeight?a=self.innerWidth:document.documentElement&&document.documentElement.clientHeight?a=document.documentElement.clientWidth:document.body&&(a=document.body.clientWidth);return a},ja=function(){var a=r.scrollTop,b=m.offsetHeight;B===K&&(D.selectedIndex=K);
4<l?l=4:.25>l&&(l=.25);"undefinded"!==typeof isIE&&isIE&&(f.style.zoom=l);C.applyTransform(f,"translateX(0px) translateY(0px) scale("+l+")");m.style.width=v*l+"px";m.style.height=x*l+"px";var c=Math.floor(100*l);aa||(D.options[0].innerHTML=c+"%");t==k.SingleFile&&(f.style.width=Math.floor(100/c*100)+"%");r.scrollTop=m.offsetHeight/b*a;sa++;1===sa%2&&E()};w.zoomIn=function(){B=K;l*=1.2;ja()};var Ea=function(){var a=G.selectedIndex;a!=t&&(M.setViewMode(a),t===k.SingleFile&&(r.onscroll=function(a){},
D.style.display=""),t=k.IDR,m.innerHTML="",m.setAttribute("style",""),f=document.createElement("div"),f.id="jpedal",m.appendChild(f),B=da,D.selectedIndex=B,a===k.MultiFile?O.setup(d):a===k.SplitSpreads?W.setup(d):a===k.SingleFile&&(D.style.display="none",N.setup(d),E()))};w.zoomUpdate=function(){B=D.selectedIndex;B!=K&&E()};var E=function(){var a,b,c,e,f,h=function(){a=r.clientWidth;t===k.SingleFile&&(v=Z[d].width);l=(a-6)/v},m=function(){a=r.clientWidth;b=r.clientHeight;t==k.SingleFile&&(v=Z[d].width,
f=Z[d].height);e=t!=k.SplitSpreads||1!==d&&d!==p?(a-6)/v:(a-6)/(2*v);c=(b-6)/x;t==k.SingleFile&&(c=(b-6)/f);l=e>c?c:e};switch(B){case da:var n=v;t!==k.SplitSpreads||1!==d&&d!==p||(n=2*v);n>x&&x>r.clientHeight?m():n>Ga()&&ha?h():l=1;break;case wa:h();break;case xa:b=r.clientHeight;c=(b-6)/x;t==k.SingleFile&&(f=Z[d].height,c=(b-6)/f);l=c;break;case ya:m();break;case va:l=1}ja()};w.zoomOut=function(){B=K;l/=1.2;ja()};w.goToPage=function(a){0===a&&(a=parseInt(A.options[A.selectedIndex].value));t===k.IDR?
V.goToPage(a,!1,!0):t===k.SplitSpreads?W.goToPage(a,!0):t===k.MultiFile?O.goToPage(a,!0):t===k.SingleFile&&N.goToPage(a,!0)};w.next=function(){t===k.IDR?V.next():t===k.SplitSpreads?d+1<=p&&this.goToPage(d+2):d<p&&this.goToPage(d+1)};w.prev=function(){t===k.IDR?V.prev():1<d&&this.goToPage(d-1)};var U=function(a,b,c){if(b.addEventListener)b.addEventListener(a,c,!1);else if(b.attachEvent)return b.attachEvent("on"+a,c)},h=function(a){return document.getElementById(a)};w.toggleThumbnails=T.toggleThumbnails;
var ia=function(){P.className=document.fullscreenElement||document.msFullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement?"navBtn open":"navBtn closed"};w.toggleFullScreen=function(){document.fullscreenElement||document.msFullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement?document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&
document.webkitCancelFullScreen():document.body.requestFullscreen?document.body.requestFullscreen():document.body.msRequestFullscreen?document.body.msRequestFullscreen():document.body.mozRequestFullScreen?document.body.mozRequestFullScreen():document.body.webkitRequestFullscreen&&document.body.webkitRequestFullscreen()};w.addToolBarHyperlink=function(a,b){var c=new Image;c.src=a;var d=document.createElement("a");d.href=b;d.className="customNavLink";d.appendChild(c);d.setAttribute("target","_blank");
h("mainNav").insertBefore(d,ua)};w.disableViewModeSwitching=function(){ta=!0};w.on=function(a,b){"pagechange"===a?za=b:"viewmodechange"===a&&(Aa=b)};M.setPage=function(a){if(a!=d){var b=za;b&&b({page:a});d=a}};M.setViewMode=function(a,b){var c=Aa;if(c){var d={viewmode:a};""!=b&&(d.orientation=b);c(d)}};return w}();