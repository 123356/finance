!function(t){t.color={},t.color.make=function(e,i,o,n){var r={};return r.r=e||0,r.g=i||0,r.b=o||0,r.a=null!=n?n:1,r.add=function(t,e){for(var i=0;i<t.length;++i)r[t.charAt(i)]+=e;return r.normalize()},r.scale=function(t,e){for(var i=0;i<t.length;++i)r[t.charAt(i)]*=e;return r.normalize()},r.toString=function(){return r.a>=1?"rgb("+[r.r,r.g,r.b].join(",")+")":"rgba("+[r.r,r.g,r.b,r.a].join(",")+")"},r.normalize=function(){function t(t,e,i){return e<t?t:e>i?i:e}return r.r=t(0,parseInt(r.r),255),r.g=t(0,parseInt(r.g),255),r.b=t(0,parseInt(r.b),255),r.a=t(0,r.a,1),r},r.clone=function(){return t.color.make(r.r,r.b,r.g,r.a)},r.normalize()},t.color.extract=function(e,i){var o;do{if(""!=(o=e.css(i).toLowerCase())&&"transparent"!=o)break;e=e.parent()}while(!t.nodeName(e.get(0),"body"));return"rgba(0, 0, 0, 0)"==o&&(o="transparent"),t.color.parse(o)},t.color.parse=function(i){var o,n=t.color.make;if(o=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(i))return n(parseInt(o[1],10),parseInt(o[2],10),parseInt(o[3],10));if(o=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(i))return n(parseInt(o[1],10),parseInt(o[2],10),parseInt(o[3],10),parseFloat(o[4]));if(o=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(i))return n(2.55*parseFloat(o[1]),2.55*parseFloat(o[2]),2.55*parseFloat(o[3]));if(o=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(i))return n(2.55*parseFloat(o[1]),2.55*parseFloat(o[2]),2.55*parseFloat(o[3]),parseFloat(o[4]));if(o=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(i))return n(parseInt(o[1],16),parseInt(o[2],16),parseInt(o[3],16));if(o=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(i))return n(parseInt(o[1]+o[1],16),parseInt(o[2]+o[2],16),parseInt(o[3]+o[3],16));var r=t.trim(i).toLowerCase();return"transparent"==r?n(255,255,255,0):(o=e[r]||[0,0,0],n(o[0],o[1],o[2]))};var e={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}}(jQuery),function(t){function e(e,i){var o=i.children("."+e)[0];if(null==o&&(o=document.createElement("canvas"),o.className=e,t(o).css({direction:"ltr",position:"absolute",left:0,top:0}).appendTo(i),!o.getContext)){if(!window.G_vmlCanvasManager)throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.");o=window.G_vmlCanvasManager.initElement(o)}this.element=o;var n=this.context=o.getContext("2d"),r=window.devicePixelRatio||1,a=n.webkitBackingStorePixelRatio||n.mozBackingStorePixelRatio||n.msBackingStorePixelRatio||n.oBackingStorePixelRatio||n.backingStorePixelRatio||1;this.pixelRatio=r/a,this.resize(i.width(),i.height()),this.textContainer=null,this.text={},this._textCache={}}function i(i,n,r,a){function l(t,e){e=[ft].concat(e);for(var i=0;i<t.length;++i)t[i].apply(this,e)}function s(t){Z=c(t),p(),g()}function c(e){for(var i=[],o=0;o<e.length;++o){var n=t.extend(!0,{},tt.series);null!=e[o].data?(n.data=e[o].data,delete e[o].data,t.extend(!0,n,e[o]),e[o].data=n.data):n.data=e[o],i.push(n)}return i}function u(t,e){var i=t[e+"axis"];return"object"==typeof i&&(i=i.n),"number"!=typeof i&&(i=1),i}function h(){return t.grep(at.concat(lt),function(t){return t})}function f(t){var e,i,o={};for(e=0;e<at.length;++e)(i=at[e])&&i.used&&(o["x"+i.n]=i.c2p(t.left));for(e=0;e<lt.length;++e)(i=lt[e])&&i.used&&(o["y"+i.n]=i.c2p(t.top));return void 0!==o.x1&&(o.x=o.x1),void 0!==o.y1&&(o.y=o.y1),o}function d(t){var e,i,o,n={};for(e=0;e<at.length;++e)if((i=at[e])&&i.used&&(o="x"+i.n,null==t[o]&&1==i.n&&(o="x"),null!=t[o])){n.left=i.p2c(t[o]);break}for(e=0;e<lt.length;++e)if((i=lt[e])&&i.used&&(o="y"+i.n,null==t[o]&&1==i.n&&(o="y"),null!=t[o])){n.top=i.p2c(t[o]);break}return n}function m(e,i){return e[i-1]||(e[i-1]={n:i,direction:e==at?"x":"y",options:t.extend(!0,{},e==at?tt.xaxis:tt.yaxis)}),e[i-1]}function p(){var e,i=Z.length,o=-1;for(e=0;e<Z.length;++e){var n=Z[e].color;null!=n&&(i--,"number"==typeof n&&n>o&&(o=n))}i<=o&&(i=o+1);var r,a=[],l=tt.colors,s=l.length,c=0;for(e=0;e<i;e++)r=t.color.parse(l[e%s]||"#666"),e%s==0&&e&&(c=c>=0?c<.5?-c-.2:0:-c),a[e]=r.scale("rgb",1+c);var h,f=0;for(e=0;e<Z.length;++e){if(h=Z[e],null==h.color?(h.color=a[f].toString(),++f):"number"==typeof h.color&&(h.color=a[h.color].toString()),null==h.lines.show){var d,p=!0;for(d in h)if(h[d]&&h[d].show){p=!1;break}p&&(h.lines.show=!0)}null==h.lines.zero&&(h.lines.zero=!!h.lines.fill),h.xaxis=m(at,u(h,"x")),h.yaxis=m(lt,u(h,"y"))}}function g(){function e(t,e,i){e<t.datamin&&e!=-b&&(t.datamin=e),i>t.datamax&&i!=b&&(t.datamax=i)}var i,o,n,r,a,s,c,u,f,d,m,p,g=Number.POSITIVE_INFINITY,x=Number.NEGATIVE_INFINITY,b=Number.MAX_VALUE;for(t.each(h(),function(t,e){e.datamin=g,e.datamax=x,e.used=!1}),i=0;i<Z.length;++i)a=Z[i],a.datapoints={points:[]},l(ht.processRawData,[a,a.data,a.datapoints]);for(i=0;i<Z.length;++i){if(a=Z[i],m=a.data,!(p=a.datapoints.format)){if((p=[]).push({x:!0,number:!0,required:!0}),p.push({y:!0,number:!0,required:!0}),a.bars.show||a.lines.show&&a.lines.fill){var v=!!(a.bars.show&&a.bars.zero||a.lines.show&&a.lines.zero);p.push({y:!0,number:!0,required:!1,defaultValue:0,autoscale:v}),a.bars.horizontal&&(delete p[p.length-1].y,p[p.length-1].x=!0)}a.datapoints.format=p}if(null==a.datapoints.pointsize){a.datapoints.pointsize=p.length,c=a.datapoints.pointsize,s=a.datapoints.points;var k=a.lines.show&&a.lines.steps;for(a.xaxis.used=a.yaxis.used=!0,o=n=0;o<m.length;++o,n+=c){var y=null==(d=m[o]);if(!y)for(r=0;r<c;++r)u=d[r],(f=p[r])&&(f.number&&null!=u&&(u=+u,isNaN(u)?u=null:u==1/0?u=b:u==-1/0&&(u=-b)),null==u&&(f.required&&(y=!0),null!=f.defaultValue&&(u=f.defaultValue))),s[n+r]=u;if(y)for(r=0;r<c;++r)null!=(u=s[n+r])&&((f=p[r]).x&&e(a.xaxis,u,u),f.y&&e(a.yaxis,u,u)),s[n+r]=null;else if(k&&n>0&&null!=s[n-c]&&s[n-c]!=s[n]&&s[n-c+1]!=s[n+1]){for(r=0;r<c;++r)s[n+c+r]=s[n+r];s[n+1]=s[n-c+1],n+=c}}}}for(i=0;i<Z.length;++i)a=Z[i],l(ht.processDatapoints,[a,a.datapoints]);for(i=0;i<Z.length;++i){s=(a=Z[i]).datapoints.points,c=a.datapoints.pointsize,p=a.datapoints.format;var w=g,M=g,T=x,S=x;for(o=0;o<s.length;o+=c)if(null!=s[o])for(r=0;r<c;++r)u=s[o+r],(f=p[r])&&!1!==f.autoscale&&u!=b&&u!=-b&&(f.x&&(u<w&&(w=u),u>T&&(T=u)),f.y&&(u<M&&(M=u),u>S&&(S=u)));if(a.bars.show){var z;switch(a.bars.align){case"left":z=0;break;case"right":z=-a.bars.barWidth;break;case"center":z=-a.bars.barWidth/2;break;default:throw new Error("Invalid bar alignment: "+a.bars.align)}a.bars.horizontal?(M+=z,S+=z+a.bars.barWidth):(w+=z,T+=z+a.bars.barWidth)}e(a.xaxis,w,T),e(a.yaxis,M,S)}t.each(h(),function(t,e){e.datamin==g&&(e.datamin=null),e.datamax==x&&(e.datamax=null)})}function x(){mt&&clearTimeout(mt),ot.unbind("mousemove",E),ot.unbind("mouseleave",R),ot.unbind("click",B),l(ht.shutdown,[ot])}function b(t){function e(t){return t}var i,o,n=t.options.transform||e,r=t.options.inverseTransform;"x"==t.direction?(i=t.scale=ct/Math.abs(n(t.max)-n(t.min)),o=Math.min(n(t.max),n(t.min))):(i=t.scale=ut/Math.abs(n(t.max)-n(t.min)),i=-i,o=Math.max(n(t.max),n(t.min))),t.p2c=n==e?function(t){return(t-o)*i}:function(t){return(n(t)-o)*i},t.c2p=r?function(t){return r(o+t/i)}:function(t){return o+t/i}}function v(t){for(var e=t.options,i=t.ticks||[],o=e.labelWidth||0,n=e.labelHeight||0,r=t.direction+"Axis "+t.direction+t.n+"Axis",a="flot-"+t.direction+"-axis flot-"+t.direction+t.n+"-axis "+r,l=e.font||"flot-tick-label tickLabel",s=0;s<i.length;++s){var c=i[s];if(c.label){var u=et.getTextInfo(a,c.label,l);null==e.labelWidth&&(o=Math.max(o,u.width)),null==e.labelHeight&&(n=Math.max(n,u.height))}}t.labelWidth=Math.ceil(o),t.labelHeight=Math.ceil(n)}function k(e){var i,o=e.labelWidth,n=e.labelHeight,r=e.options.position,a=e.options.tickLength,l=tt.grid.axisMargin,s=tt.grid.labelMargin,c="x"==e.direction?at:lt,u=t.grep(c,function(t){return t&&t.options.position==r&&t.reserveSpace});if(t.inArray(e,u)==u.length-1&&(l=0),null==a){var h=t.grep(c,function(t){return t&&t.reserveSpace});a=(i=0==t.inArray(e,h))?"full":5}isNaN(+a)||(s+=+a),"x"==e.direction?(n+=s,"bottom"==r?(st.bottom+=n+l,e.box={top:et.height-st.bottom,height:n}):(e.box={top:st.top+l,height:n},st.top+=n+l)):(o+=s,"left"==r?(e.box={left:st.left+l,width:o},st.left+=o+l):(st.right+=o+l,e.box={left:et.width-st.right,width:o})),e.position=r,e.tickLength=a,e.box.padding=s,e.innermost=i}function y(t){"x"==t.direction?(t.box.left=st.left-t.labelWidth/2,t.box.width=et.width-st.left-st.right+t.labelWidth):(t.box.top=st.top-t.labelHeight/2,t.box.height=et.height-st.bottom-st.top+t.labelHeight)}function w(){var e,i=tt.grid.minBorderMargin,o={x:0,y:0};if(null==i)for(i=0,e=0;e<Z.length;++e)i=Math.max(i,2*(Z[e].points.radius+Z[e].points.lineWidth/2));o.x=o.y=Math.ceil(i),t.each(h(),function(t,e){var i=e.direction;e.reserveSpace&&(o[i]=Math.ceil(Math.max(o[i],("x"==i?e.labelWidth:e.labelHeight)/2)))}),st.left=Math.max(o.x,st.left),st.right=Math.max(o.x,st.right),st.top=Math.max(o.y,st.top),st.bottom=Math.max(o.y,st.bottom)}function M(){var e,i=h(),o=tt.grid.show;for(var n in st){var r=tt.grid.margin||0;st[n]="number"==typeof r?r:r[n]||0}l(ht.processOffset,[st]);for(var n in st)"object"==typeof tt.grid.borderWidth?st[n]+=o?tt.grid.borderWidth[n]:0:st[n]+=o?tt.grid.borderWidth:0;if(t.each(i,function(t,e){e.show=e.options.show,null==e.show&&(e.show=e.used),e.reserveSpace=e.show||e.options.reserveSpace,T(e)}),o){var a=t.grep(i,function(t){return t.reserveSpace});for(t.each(a,function(t,e){S(e),z(e),C(e,e.ticks),v(e)}),e=a.length-1;e>=0;--e)k(a[e]);w(),t.each(a,function(t,e){y(e)})}ct=et.width-st.left-st.right,ut=et.height-st.bottom-st.top,t.each(i,function(t,e){b(e)}),o&&D(),Y()}function T(t){var e=t.options,i=+(null!=e.min?e.min:t.datamin),o=+(null!=e.max?e.max:t.datamax),n=o-i;if(0==n){var r=0==o?1:.01;null==e.min&&(i-=r),null!=e.max&&null==e.min||(o+=r)}else{var a=e.autoscaleMargin;null!=a&&(null==e.min&&(i-=n*a)<0&&null!=t.datamin&&t.datamin>=0&&(i=0),null==e.max&&(o+=n*a)>0&&null!=t.datamax&&t.datamax<=0&&(o=0))}t.min=i,t.max=o}function S(e){var i,n=e.options;i="number"==typeof n.ticks&&n.ticks>0?n.ticks:.3*Math.sqrt("x"==e.direction?et.width:et.height);var r=(e.max-e.min)/i,a=-Math.floor(Math.log(r)/Math.LN10),l=n.tickDecimals;null!=l&&a>l&&(a=l);var s,c=Math.pow(10,-a),u=r/c;if(u<1.5?s=1:u<3?(s=2,u>2.25&&(null==l||a+1<=l)&&(s=2.5,++a)):s=u<7.5?5:10,s*=c,null!=n.minTickSize&&s<n.minTickSize&&(s=n.minTickSize),e.delta=r,e.tickDecimals=Math.max(0,null!=l?l:a),e.tickSize=n.tickSize||s,"time"==n.mode&&!e.tickGenerator)throw new Error("Time mode requires the flot.time plugin.");if(e.tickGenerator||(e.tickGenerator=function(t){var e,i=[],n=o(t.min,t.tickSize),r=0,a=Number.NaN;do{e=a,a=n+r*t.tickSize,i.push(a),++r}while(a<t.max&&a!=e);return i},e.tickFormatter=function(t,e){var i=e.tickDecimals?Math.pow(10,e.tickDecimals):1,o=""+Math.round(t*i)/i;if(null!=e.tickDecimals){var n=o.indexOf("."),r=-1==n?0:o.length-n-1;if(r<e.tickDecimals)return(r?o:o+".")+(""+i).substr(1,e.tickDecimals-r)}return o}),t.isFunction(n.tickFormatter)&&(e.tickFormatter=function(t,e){return""+n.tickFormatter(t,e)}),null!=n.alignTicksWithAxis){var h=("x"==e.direction?at:lt)[n.alignTicksWithAxis-1];if(h&&h.used&&h!=e){var f=e.tickGenerator(e);if(f.length>0&&(null==n.min&&(e.min=Math.min(e.min,f[0])),null==n.max&&f.length>1&&(e.max=Math.max(e.max,f[f.length-1]))),e.tickGenerator=function(t){var e,i,o=[];for(i=0;i<h.ticks.length;++i)e=(h.ticks[i].v-h.min)/(h.max-h.min),e=t.min+e*(t.max-t.min),o.push(e);return o},!e.mode&&null==n.tickDecimals){var d=Math.max(0,1-Math.floor(Math.log(e.delta)/Math.LN10)),m=e.tickGenerator(e);m.length>1&&/\..*0$/.test((m[1]-m[0]).toFixed(d))||(e.tickDecimals=d)}}}}function z(e){var i=e.options.ticks,o=[];null==i||"number"==typeof i&&i>0?o=e.tickGenerator(e):i&&(o=t.isFunction(i)?i(e):i);var n,r;for(e.ticks=[],n=0;n<o.length;++n){var a=null,l=o[n];"object"==typeof l?(r=+l[0],l.length>1&&(a=l[1])):r=+l,null==a&&(a=e.tickFormatter(r,e)),isNaN(r)||e.ticks.push({v:r,label:a})}}function C(t,e){t.options.autoscaleMargin&&e.length>0&&(null==t.options.min&&(t.min=Math.min(t.min,e[0].v)),null==t.options.max&&e.length>1&&(t.max=Math.max(t.max,e[e.length-1].v)))}function W(){et.clear(),l(ht.drawBackground,[nt]);var t=tt.grid;t.show&&t.backgroundColor&&A(),t.show&&!t.aboveData&&F();for(var e=0;e<Z.length;++e)l(ht.drawSeries,[nt,Z[e]]),N(Z[e]);l(ht.draw,[nt]),t.show&&t.aboveData&&F(),et.render()}function I(t,e){for(var i,o,n,r,a=h(),l=0;l<a.length;++l)if((i=a[l]).direction==e&&(r=e+i.n+"axis",!t[r]&&1==i.n&&(r=e+"axis"),t[r])){o=t[r].from,n=t[r].to;break}if(t[r]||(i="x"==e?at[0]:lt[0],o=t[e+"1"],n=t[e+"2"]),null!=o&&null!=n&&o>n){var s=o;o=n,n=s}return{from:o,to:n,axis:i}}function A(){nt.save(),nt.translate(st.left,st.top),nt.fillStyle=K(tt.grid.backgroundColor,ut,0,"rgba(255, 255, 255, 0)"),nt.fillRect(0,0,ct,ut),nt.restore()}function F(){var e,i,o,n;nt.save(),nt.translate(st.left,st.top);var r=tt.grid.markings;if(r)for(t.isFunction(r)&&(i=ft.getAxes(),i.xmin=i.xaxis.min,i.xmax=i.xaxis.max,i.ymin=i.yaxis.min,i.ymax=i.yaxis.max,r=r(i)),e=0;e<r.length;++e){var a=r[e],l=I(a,"x"),s=I(a,"y");null==l.from&&(l.from=l.axis.min),null==l.to&&(l.to=l.axis.max),null==s.from&&(s.from=s.axis.min),null==s.to&&(s.to=s.axis.max),l.to<l.axis.min||l.from>l.axis.max||s.to<s.axis.min||s.from>s.axis.max||(l.from=Math.max(l.from,l.axis.min),l.to=Math.min(l.to,l.axis.max),s.from=Math.max(s.from,s.axis.min),s.to=Math.min(s.to,s.axis.max),l.from==l.to&&s.from==s.to||(l.from=l.axis.p2c(l.from),l.to=l.axis.p2c(l.to),s.from=s.axis.p2c(s.from),s.to=s.axis.p2c(s.to),l.from==l.to||s.from==s.to?(nt.beginPath(),nt.strokeStyle=a.color||tt.grid.markingsColor,nt.lineWidth=a.lineWidth||tt.grid.markingsLineWidth,nt.moveTo(l.from,s.from),nt.lineTo(l.to,s.to),nt.stroke()):(nt.fillStyle=a.color||tt.grid.markingsColor,nt.fillRect(l.from,s.to,l.to-l.from,s.from-s.to))))}i=h(),o=tt.grid.borderWidth;for(var c=0;c<i.length;++c){var u,f,d,m,p=i[c],g=p.box,x=p.tickLength;if(p.show&&0!=p.ticks.length){for(nt.lineWidth=1,"x"==p.direction?(u=0,f="full"==x?"top"==p.position?0:ut:g.top-st.top+("top"==p.position?g.height:0)):(f=0,u="full"==x?"left"==p.position?0:ct:g.left-st.left+("left"==p.position?g.width:0)),p.innermost||(nt.strokeStyle=p.options.color,nt.beginPath(),d=m=0,"x"==p.direction?d=ct+1:m=ut+1,1==nt.lineWidth&&("x"==p.direction?f=Math.floor(f)+.5:u=Math.floor(u)+.5),nt.moveTo(u,f),nt.lineTo(u+d,f+m),nt.stroke()),nt.strokeStyle=p.options.tickColor,nt.beginPath(),e=0;e<p.ticks.length;++e){var b=p.ticks[e].v;d=m=0,isNaN(b)||b<p.min||b>p.max||"full"==x&&("object"==typeof o&&o[p.position]>0||o>0)&&(b==p.min||b==p.max)||("x"==p.direction?(u=p.p2c(b),m="full"==x?-ut:x,"top"==p.position&&(m=-m)):(f=p.p2c(b),d="full"==x?-ct:x,"left"==p.position&&(d=-d)),1==nt.lineWidth&&("x"==p.direction?u=Math.floor(u)+.5:f=Math.floor(f)+.5),nt.moveTo(u,f),nt.lineTo(u+d,f+m))}nt.stroke()}}o&&(n=tt.grid.borderColor,"object"==typeof o||"object"==typeof n?("object"!=typeof o&&(o={top:o,right:o,bottom:o,left:o}),"object"!=typeof n&&(n={top:n,right:n,bottom:n,left:n}),o.top>0&&(nt.strokeStyle=n.top,nt.lineWidth=o.top,nt.beginPath(),nt.moveTo(0-o.left,0-o.top/2),nt.lineTo(ct,0-o.top/2),nt.stroke()),o.right>0&&(nt.strokeStyle=n.right,nt.lineWidth=o.right,nt.beginPath(),nt.moveTo(ct+o.right/2,0-o.top),nt.lineTo(ct+o.right/2,ut),nt.stroke()),o.bottom>0&&(nt.strokeStyle=n.bottom,nt.lineWidth=o.bottom,nt.beginPath(),nt.moveTo(ct+o.right,ut+o.bottom/2),nt.lineTo(0,ut+o.bottom/2),nt.stroke()),o.left>0&&(nt.strokeStyle=n.left,nt.lineWidth=o.left,nt.beginPath(),nt.moveTo(0-o.left/2,ut+o.bottom),nt.lineTo(0-o.left/2,0),nt.stroke())):(nt.lineWidth=o,nt.strokeStyle=tt.grid.borderColor,nt.strokeRect(-o/2,-o/2,ct+o,ut+o))),nt.restore()}function D(){t.each(h(),function(t,e){if(e.show&&0!=e.ticks.length){var i,o,n,r,a,l=e.box,s=e.direction+"Axis "+e.direction+e.n+"Axis",c="flot-"+e.direction+"-axis flot-"+e.direction+e.n+"-axis "+s,u=e.options.font||"flot-tick-label tickLabel";et.removeText(c);for(var h=0;h<e.ticks.length;++h)!(i=e.ticks[h]).label||i.v<e.min||i.v>e.max||("x"==e.direction?(r="center",o=st.left+e.p2c(i.v),"bottom"==e.position?n=l.top+l.padding:(n=l.top+l.height-l.padding,a="bottom")):(a="middle",n=st.top+e.p2c(i.v),"left"==e.position?(o=l.left+l.width-l.padding,r="right"):o=l.left+l.padding),et.addText(c,o,n,i.label,u,null,r,a))}})}function N(t){t.lines.show&&P(t),t.bars.show&&L(t),t.points.show&&H(t)}function P(t){function e(t,e,i,o,n){var r=t.points,a=t.pointsize,l=null,s=null;nt.beginPath();for(var c=a;c<r.length;c+=a){var u=r[c-a],h=r[c-a+1],f=r[c],d=r[c+1];if(null!=u&&null!=f){if(h<=d&&h<n.min){if(d<n.min)continue;u=(n.min-h)/(d-h)*(f-u)+u,h=n.min}else if(d<=h&&d<n.min){if(h<n.min)continue;f=(n.min-h)/(d-h)*(f-u)+u,d=n.min}if(h>=d&&h>n.max){if(d>n.max)continue;u=(n.max-h)/(d-h)*(f-u)+u,h=n.max}else if(d>=h&&d>n.max){if(h>n.max)continue;f=(n.max-h)/(d-h)*(f-u)+u,d=n.max}if(u<=f&&u<o.min){if(f<o.min)continue;h=(o.min-u)/(f-u)*(d-h)+h,u=o.min}else if(f<=u&&f<o.min){if(u<o.min)continue;d=(o.min-u)/(f-u)*(d-h)+h,f=o.min}if(u>=f&&u>o.max){if(f>o.max)continue;h=(o.max-u)/(f-u)*(d-h)+h,u=o.max}else if(f>=u&&f>o.max){if(u>o.max)continue;d=(o.max-u)/(f-u)*(d-h)+h,f=o.max}(u!=l||h!=s)&&nt.moveTo(o.p2c(u)+e,n.p2c(h)+i),l=f,s=d,nt.lineTo(o.p2c(f)+e,n.p2c(d)+i)}}nt.stroke()}nt.save(),nt.translate(st.left,st.top),nt.lineJoin="round";var i=t.lines.lineWidth,o=t.shadowSize;if(i>0&&o>0){nt.lineWidth=o,nt.strokeStyle="rgba(0,0,0,0.1)";var n=Math.PI/18;e(t.datapoints,Math.sin(n)*(i/2+o/2),Math.cos(n)*(i/2+o/2),t.xaxis,t.yaxis),nt.lineWidth=o/2,e(t.datapoints,Math.sin(n)*(i/2+o/4),Math.cos(n)*(i/2+o/4),t.xaxis,t.yaxis)}nt.lineWidth=i,nt.strokeStyle=t.color;var r=O(t.lines,t.color,0,ut);r&&(nt.fillStyle=r,function(t,e,i){for(var o=t.points,n=t.pointsize,r=Math.min(Math.max(0,i.min),i.max),a=0,l=!1,s=1,c=0,u=0;!(n>0&&a>o.length+n);){var h=o[(a+=n)-n],f=o[a-n+s],d=o[a],m=o[a+s];if(l){if(n>0&&null!=h&&null==d){u=a,n=-n,s=2;continue}if(n<0&&a==c+n){nt.fill(),l=!1,s=1,a=c=u+(n=-n);continue}}if(null!=h&&null!=d){if(h<=d&&h<e.min){if(d<e.min)continue;f=(e.min-h)/(d-h)*(m-f)+f,h=e.min}else if(d<=h&&d<e.min){if(h<e.min)continue;m=(e.min-h)/(d-h)*(m-f)+f,d=e.min}if(h>=d&&h>e.max){if(d>e.max)continue;f=(e.max-h)/(d-h)*(m-f)+f,h=e.max}else if(d>=h&&d>e.max){if(h>e.max)continue;m=(e.max-h)/(d-h)*(m-f)+f,d=e.max}if(l||(nt.beginPath(),nt.moveTo(e.p2c(h),i.p2c(r)),l=!0),f>=i.max&&m>=i.max)nt.lineTo(e.p2c(h),i.p2c(i.max)),nt.lineTo(e.p2c(d),i.p2c(i.max));else if(f<=i.min&&m<=i.min)nt.lineTo(e.p2c(h),i.p2c(i.min)),nt.lineTo(e.p2c(d),i.p2c(i.min));else{var p=h,g=d;f<=m&&f<i.min&&m>=i.min?(h=(i.min-f)/(m-f)*(d-h)+h,f=i.min):m<=f&&m<i.min&&f>=i.min&&(d=(i.min-f)/(m-f)*(d-h)+h,m=i.min),f>=m&&f>i.max&&m<=i.max?(h=(i.max-f)/(m-f)*(d-h)+h,f=i.max):m>=f&&m>i.max&&f<=i.max&&(d=(i.max-f)/(m-f)*(d-h)+h,m=i.max),h!=p&&nt.lineTo(e.p2c(p),i.p2c(f)),nt.lineTo(e.p2c(h),i.p2c(f)),nt.lineTo(e.p2c(d),i.p2c(m)),d!=g&&(nt.lineTo(e.p2c(d),i.p2c(m)),nt.lineTo(e.p2c(g),i.p2c(m)))}}}}(t.datapoints,t.xaxis,t.yaxis)),i>0&&e(t.datapoints,0,0,t.xaxis,t.yaxis),nt.restore()}function H(t){function e(t,e,i,o,n,r,a,l){for(var s=t.points,c=t.pointsize,u=0;u<s.length;u+=c){var h=s[u],f=s[u+1];null==h||h<r.min||h>r.max||f<a.min||f>a.max||(nt.beginPath(),h=r.p2c(h),f=a.p2c(f)+o,"circle"==l?nt.arc(h,f,e,0,n?Math.PI:2*Math.PI,!1):l(nt,h,f,e,n),nt.closePath(),i&&(nt.fillStyle=i,nt.fill()),nt.stroke())}}nt.save(),nt.translate(st.left,st.top);var i=t.points.lineWidth,o=t.shadowSize,n=t.points.radius,r=t.points.symbol;if(0==i&&(i=1e-4),i>0&&o>0){var a=o/2;nt.lineWidth=a,nt.strokeStyle="rgba(0,0,0,0.1)",e(t.datapoints,n,null,a+a/2,!0,t.xaxis,t.yaxis,r),nt.strokeStyle="rgba(0,0,0,0.2)",e(t.datapoints,n,null,a/2,!0,t.xaxis,t.yaxis,r)}nt.lineWidth=i,nt.strokeStyle=t.color,e(t.datapoints,n,O(t.points,t.color),0,!1,t.xaxis,t.yaxis,r),nt.restore()}function q(t,e,i,o,n,r,a,l,s,c,u,h){var f,d,m,p,g,x,b,v,k;u?(v=x=b=!0,g=!1,f=i,d=t,p=e+o,m=e+n,d<f&&(k=d,d=f,f=k,g=!0,x=!1)):(g=x=b=!0,v=!1,f=t+o,d=t+n,m=i,(p=e)<m&&(k=p,p=m,m=k,v=!0,b=!1)),d<l.min||f>l.max||p<s.min||m>s.max||(f<l.min&&(f=l.min,g=!1),d>l.max&&(d=l.max,x=!1),m<s.min&&(m=s.min,v=!1),p>s.max&&(p=s.max,b=!1),f=l.p2c(f),m=s.p2c(m),d=l.p2c(d),p=s.p2c(p),a&&(c.beginPath(),c.moveTo(f,m),c.lineTo(f,p),c.lineTo(d,p),c.lineTo(d,m),c.fillStyle=a(m,p),c.fill()),h>0&&(g||x||b||v)&&(c.beginPath(),c.moveTo(f,m+r),g?c.lineTo(f,p+r):c.moveTo(f,p+r),b?c.lineTo(d,p+r):c.moveTo(d,p+r),x?c.lineTo(d,m+r):c.moveTo(d,m+r),v?c.lineTo(f,m+r):c.moveTo(f,m+r),c.stroke()))}function L(t){nt.save(),nt.translate(st.left,st.top),nt.lineWidth=t.bars.lineWidth,nt.strokeStyle=t.color;var e;switch(t.bars.align){case"left":e=0;break;case"right":e=-t.bars.barWidth;break;case"center":e=-t.bars.barWidth/2;break;default:throw new Error("Invalid bar alignment: "+t.bars.align)}var i=t.bars.fill?function(e,i){return O(t.bars,t.color,e,i)}:null;(function(e,i,o,n,r,a,l){for(var s=e.points,c=e.pointsize,u=0;u<s.length;u+=c)null!=s[u]&&q(s[u],s[u+1],s[u+2],i,o,n,r,a,l,nt,t.bars.horizontal,t.bars.lineWidth)})(t.datapoints,e,e+t.bars.barWidth,0,i,t.xaxis,t.yaxis),nt.restore()}function O(e,i,o,n){var r=e.fill;if(!r)return null;if(e.fillColor)return K(e.fillColor,o,n,i);var a=t.color.parse(i);return a.a="number"==typeof r?r:.4,a.normalize(),a.toString()}function Y(){if(i.find(".legend").remove(),tt.legend.show){for(var e,o,n=[],r=[],a=!1,l=tt.legend.labelFormatter,s=0;s<Z.length;++s)(e=Z[s]).label&&(o=l?l(e.label,e):e.label)&&r.push({label:o,color:e.color});if(tt.legend.sorted)if(t.isFunction(tt.legend.sorted))r.sort(tt.legend.sorted);else if("reverse"==tt.legend.sorted)r.reverse();else{var c="descending"!=tt.legend.sorted;r.sort(function(t,e){return t.label==e.label?0:t.label<e.label!=c?1:-1})}for(s=0;s<r.length;++s){var u=r[s];s%tt.legend.noColumns==0&&(a&&n.push("</tr>"),n.push("<tr>"),a=!0),n.push('<td class="legendColorBox"><div style="border:1px solid '+tt.legend.labelBoxBorderColor+';padding:1px"><div style="width:4px;height:0;border:5px solid '+u.color+';overflow:hidden"></div></div></td><td class="legendLabel">'+u.label+"</td>")}if(a&&n.push("</tr>"),0!=n.length){var h='<table style="fonts-size:smaller;color:'+tt.grid.color+'">'+n.join("")+"</table>";if(null!=tt.legend.container)t(tt.legend.container).html(h);else{var f="",d=tt.legend.position,m=tt.legend.margin;null==m[0]&&(m=[m,m]),"n"==d.charAt(0)?f+="top:"+(m[1]+st.top)+"px;":"s"==d.charAt(0)&&(f+="bottom:"+(m[1]+st.bottom)+"px;"),"e"==d.charAt(1)?f+="right:"+(m[0]+st.right)+"px;":"w"==d.charAt(1)&&(f+="left:"+(m[0]+st.left)+"px;");var p=t('<div class="legend">'+h.replace('style="','style="position:absolute;'+f+";")+"</div>").appendTo(i);if(0!=tt.legend.backgroundOpacity){var g=tt.legend.backgroundColor;null==g&&(g=tt.grid.backgroundColor,g=g&&"string"==typeof g?t.color.parse(g):t.color.extract(p,"background-color"),g.a=1,g=g.toString());var x=p.children();t('<div style="position:absolute;width:'+x.width()+"px;height:"+x.height()+"px;"+f+"background-color:"+g+';"> </div>').prependTo(p).css("opacity",tt.legend.backgroundOpacity)}}}}}function j(t,e,i){var o,n,r,a=tt.grid.mouseActiveRadius,l=a*a+1,s=null;for(o=Z.length-1;o>=0;--o)if(i(Z[o])){var c=Z[o],u=c.xaxis,h=c.yaxis,f=c.datapoints.points,d=u.c2p(t),m=h.c2p(e),p=a/u.scale,g=a/h.scale;if(r=c.datapoints.pointsize,u.options.inverseTransform&&(p=Number.MAX_VALUE),h.options.inverseTransform&&(g=Number.MAX_VALUE),c.lines.show||c.points.show)for(n=0;n<f.length;n+=r){var x=f[n],b=f[n+1];if(null!=x&&!(x-d>p||x-d<-p||b-m>g||b-m<-g)){var v=Math.abs(u.p2c(x)-t),k=Math.abs(h.p2c(b)-e),y=v*v+k*k;y<l&&(l=y,s=[o,n/r])}}if(c.bars.show&&!s){var w="left"==c.bars.align?0:-c.bars.barWidth/2,M=w+c.bars.barWidth;for(n=0;n<f.length;n+=r){var x=f[n],b=f[n+1],T=f[n+2];null!=x&&((Z[o].bars.horizontal?d<=Math.max(T,x)&&d>=Math.min(T,x)&&m>=b+w&&m<=b+M:d>=x+w&&d<=x+M&&m>=Math.min(T,b)&&m<=Math.max(T,b))&&(s=[o,n/r]))}}}return s?(o=s[0],n=s[1],r=Z[o].datapoints.pointsize,{datapoint:Z[o].datapoints.points.slice(n*r,(n+1)*r),dataIndex:n,series:Z[o],seriesIndex:o}):null}function E(t){tt.grid.hoverable&&G("plothover",t,function(t){return 0!=t.hoverable})}function R(t){tt.grid.hoverable&&G("plothover",t,function(t){return!1})}function B(t){G("plotclick",t,function(t){return 0!=t.clickable})}function G(t,e,o){var n=ot.offset(),r=e.pageX-n.left-st.left,a=e.pageY-n.top-st.top,l=f({left:r,top:a});l.pageX=e.pageX,l.pageY=e.pageY;var s=j(r,a,o);if(s&&(s.pageX=parseInt(s.series.xaxis.p2c(s.datapoint[0])+n.left+st.left,10),s.pageY=parseInt(s.series.yaxis.p2c(s.datapoint[1])+n.top+st.top,10)),tt.grid.autoHighlight){for(var c=0;c<dt.length;++c){var u=dt[c];u.auto==t&&(!s||u.series!=s.series||u.point[0]!=s.datapoint[0]||u.point[1]!=s.datapoint[1])&&J(u.series,u.point)}s&&X(s.series,s.datapoint,t)}i.trigger(t,[l,s])}function _(){var t=tt.interaction.redrawOverlayInterval;-1!=t?mt||(mt=setTimeout(V,t)):V()}function V(){mt=null,rt.save(),it.clear(),rt.translate(st.left,st.top);var t,e;for(t=0;t<dt.length;++t)e=dt[t],e.series.bars.show?$(e.series,e.point):U(e.series,e.point);rt.restore(),l(ht.drawOverlay,[rt])}function X(t,e,i){if("number"==typeof t&&(t=Z[t]),"number"==typeof e){var o=t.datapoints.pointsize;e=t.datapoints.points.slice(o*e,o*(e+1))}var n=Q(t,e);-1==n?(dt.push({series:t,point:e,auto:i}),_()):i||(dt[n].auto=!1)}function J(t,e){if(null==t&&null==e)return dt=[],void _();if("number"==typeof t&&(t=Z[t]),"number"==typeof e){var i=t.datapoints.pointsize;e=t.datapoints.points.slice(i*e,i*(e+1))}var o=Q(t,e);-1!=o&&(dt.splice(o,1),_())}function Q(t,e){for(var i=0;i<dt.length;++i){var o=dt[i];if(o.series==t&&o.point[0]==e[0]&&o.point[1]==e[1])return i}return-1}function U(e,i){var o=i[0],n=i[1],r=e.xaxis,a=e.yaxis,l="string"==typeof e.highlightColor?e.highlightColor:t.color.parse(e.color).scale("a",.5).toString();if(!(o<r.min||o>r.max||n<a.min||n>a.max)){var s=e.points.radius+e.points.lineWidth/2;rt.lineWidth=s,rt.strokeStyle=l;var c=1.5*s;o=r.p2c(o),n=a.p2c(n),rt.beginPath(),"circle"==e.points.symbol?rt.arc(o,n,c,0,2*Math.PI,!1):e.points.symbol(rt,o,n,c,!1),rt.closePath(),rt.stroke()}}function $(e,i){var o="string"==typeof e.highlightColor?e.highlightColor:t.color.parse(e.color).scale("a",.5).toString(),n=o,r="left"==e.bars.align?0:-e.bars.barWidth/2;rt.lineWidth=e.bars.lineWidth,rt.strokeStyle=o,q(i[0],i[1],i[2]||0,r,r+e.bars.barWidth,0,function(){return n},e.xaxis,e.yaxis,rt,e.bars.horizontal,e.bars.lineWidth)}function K(e,i,o,n){if("string"==typeof e)return e;for(var r=nt.createLinearGradient(0,o,0,i),a=0,l=e.colors.length;a<l;++a){var s=e.colors[a];if("string"!=typeof s){var c=t.color.parse(n);null!=s.brightness&&(c=c.scale("rgb",s.brightness)),null!=s.opacity&&(c.a*=s.opacity),s=c.toString()}r.addColorStop(a/(l-1),s)}return r}var Z=[],tt={colors:["#edc240","#afd8f8","#cb4b4b","#4da74d","#9440ed"],legend:{show:!0,noColumns:1,labelFormatter:null,labelBoxBorderColor:"#ccc",container:null,position:"ne",margin:5,backgroundColor:null,backgroundOpacity:.85,sorted:null},xaxis:{show:null,position:"bottom",mode:null,font:null,color:null,tickColor:null,transform:null,inverseTransform:null,min:null,max:null,autoscaleMargin:null,ticks:null,tickFormatter:null,labelWidth:null,labelHeight:null,reserveSpace:null,tickLength:null,alignTicksWithAxis:null,tickDecimals:null,tickSize:null,minTickSize:null},yaxis:{autoscaleMargin:.02,position:"left"},xaxes:[],yaxes:[],series:{points:{show:!1,radius:3,lineWidth:2,fill:!0,fillColor:"#ffffff",symbol:"circle"},lines:{lineWidth:2,fill:!1,fillColor:null,steps:!1},bars:{show:!1,lineWidth:2,barWidth:1,fill:!0,fillColor:null,align:"left",horizontal:!1,zero:!0},shadowSize:3,highlightColor:null},grid:{show:!0,aboveData:!1,color:"#545454",backgroundColor:null,borderColor:null,tickColor:null,margin:0,labelMargin:5,axisMargin:8,borderWidth:2,minBorderMargin:null,markings:null,markingsColor:"#f4f4f4",markingsLineWidth:2,clickable:!1,hoverable:!1,autoHighlight:!0,mouseActiveRadius:10},interaction:{redrawOverlayInterval:1e3/60},hooks:{}},et=null,it=null,ot=null,nt=null,rt=null,at=[],lt=[],st={left:0,right:0,top:0,bottom:0},ct=0,ut=0,ht={processOptions:[],processRawData:[],processDatapoints:[],processOffset:[],drawBackground:[],drawSeries:[],draw:[],bindEvents:[],drawOverlay:[],shutdown:[]},ft=this;ft.setData=s,ft.setupGrid=M,ft.draw=W,ft.getPlaceholder=function(){return i},ft.getCanvas=function(){return et.element},ft.getPlotOffset=function(){return st},ft.width=function(){return ct},ft.height=function(){return ut},ft.offset=function(){var t=ot.offset();return t.left+=st.left,t.top+=st.top,t},ft.getData=function(){return Z},ft.getAxes=function(){var e={};return t.each(at.concat(lt),function(t,i){i&&(e[i.direction+(1!=i.n?i.n:"")+"axis"]=i)}),e},ft.getXAxes=function(){return at},ft.getYAxes=function(){return lt},ft.c2p=f,ft.p2c=d,ft.getOptions=function(){return tt},ft.highlight=X,ft.unhighlight=J,ft.triggerRedrawOverlay=_,ft.pointOffset=function(t){return{left:parseInt(at[u(t,"x")-1].p2c(+t.x)+st.left,10),top:parseInt(lt[u(t,"y")-1].p2c(+t.y)+st.top,10)}},ft.shutdown=x,ft.resize=function(){var t=i.width(),e=i.height();et.resize(t,e),it.resize(t,e)},ft.hooks=ht,function(){for(var i={Canvas:e},o=0;o<a.length;++o){var n=a[o];n.init(ft,i),n.options&&t.extend(!0,tt,n.options)}}(),function(e){t.extend(!0,tt,e),null==tt.xaxis.color&&(tt.xaxis.color=t.color.parse(tt.grid.color).scale("a",.22).toString()),null==tt.yaxis.color&&(tt.yaxis.color=t.color.parse(tt.grid.color).scale("a",.22).toString()),null==tt.xaxis.tickColor&&(tt.xaxis.tickColor=tt.grid.tickColor||tt.xaxis.color),null==tt.yaxis.tickColor&&(tt.yaxis.tickColor=tt.grid.tickColor||tt.yaxis.color),null==tt.grid.borderColor&&(tt.grid.borderColor=tt.grid.color),null==tt.grid.tickColor&&(tt.grid.tickColor=t.color.parse(tt.grid.color).scale("a",.22).toString());var o,n,r,a={style:i.css("fonts-style"),size:Math.round(.8*(+i.css("font-size").replace("px","")||13)),variant:i.css("fonts-variant"),weight:i.css("fonts-weight"),family:i.css("fonts-family")};for(a.lineHeight=1.15*a.size,r=tt.xaxes.length||1,o=0;o<r;++o)(n=tt.xaxes[o])&&!n.tickColor&&(n.tickColor=n.color),n=t.extend(!0,{},tt.xaxis,n),tt.xaxes[o]=n,n.font&&(n.font=t.extend({},a,n.font),n.font.color||(n.font.color=n.color));for(r=tt.yaxes.length||1,o=0;o<r;++o)(n=tt.yaxes[o])&&!n.tickColor&&(n.tickColor=n.color),n=t.extend(!0,{},tt.yaxis,n),tt.yaxes[o]=n,n.font&&(n.font=t.extend({},a,n.font),n.font.color||(n.font.color=n.color));for(tt.xaxis.noTicks&&null==tt.xaxis.ticks&&(tt.xaxis.ticks=tt.xaxis.noTicks),tt.yaxis.noTicks&&null==tt.yaxis.ticks&&(tt.yaxis.ticks=tt.yaxis.noTicks),tt.x2axis&&(tt.xaxes[1]=t.extend(!0,{},tt.xaxis,tt.x2axis),tt.xaxes[1].position="top"),tt.y2axis&&(tt.yaxes[1]=t.extend(!0,{},tt.yaxis,tt.y2axis),tt.yaxes[1].position="right"),tt.grid.coloredAreas&&(tt.grid.markings=tt.grid.coloredAreas),tt.grid.coloredAreasColor&&(tt.grid.markingsColor=tt.grid.coloredAreasColor),tt.lines&&t.extend(!0,tt.series.lines,tt.lines),tt.points&&t.extend(!0,tt.series.points,tt.points),tt.bars&&t.extend(!0,tt.series.bars,tt.bars),null!=tt.shadowSize&&(tt.series.shadowSize=tt.shadowSize),null!=tt.highlightColor&&(tt.series.highlightColor=tt.highlightColor),o=0;o<tt.xaxes.length;++o)m(at,o+1).options=tt.xaxes[o];for(o=0;o<tt.yaxes.length;++o)m(lt,o+1).options=tt.yaxes[o];for(var s in ht)tt.hooks[s]&&tt.hooks[s].length&&(ht[s]=ht[s].concat(tt.hooks[s]));l(ht.processOptions,[tt])}(r),function(){i.css("padding",0).children(":not(.flot-base,.flot-overlay)").remove(),"static"==i.css("position")&&i.css("position","relative"),et=new e("flot-base",i),it=new e("flot-overlay",i),nt=et.context,rt=it.context,ot=t(it.element).unbind();var o=i.data("plot");o&&(o.shutdown(),it.clear()),i.data("plot",ft)}(),s(n),M(),W(),function(){tt.grid.hoverable&&(ot.mousemove(E),ot.bind("mouseleave",R)),tt.grid.clickable&&ot.click(B),l(ht.bindEvents,[ot])}();var dt=[],mt=null}function o(t,e){return e*Math.floor(t/e)}var n=Object.prototype.hasOwnProperty;e.prototype.resize=function(t,e){if(t<=0||e<=0)throw new Error("Invalid dimensions for plot, width = "+t+", height = "+e);var i=this.element,o=this.context,n=this.pixelRatio;this.width!=t&&(i.width=t*n,i.style.width=t+"px",this.width=t),this.height!=e&&(i.height=e*n,i.style.height=e+"px",this.height=e),o.restore(),o.save(),o.scale(n,n)},e.prototype.clear=function(){this.context.clearRect(0,0,this.width,this.height)},e.prototype.render=function(){var t=this._textCache;for(var e in t)if(n.call(t,e)){var i=this.getTextLayer(e),o=t[e];i.hide();for(var r in o)if(n.call(o,r)){var a=o[r];for(var l in a)if(n.call(a,l)){var s=a[l];s.active?s.rendered||(i.append(s.element),s.rendered=!0):(delete a[l],s.rendered&&s.element.detach())}}i.show()}},e.prototype.getTextLayer=function(e){var i=this.text[e];return null==i&&(null==this.textContainer&&(this.textContainer=t("<div class='flot-text'></div>").css({position:"absolute",top:0,left:0,bottom:0,right:0,"font-size":"smaller",color:"#545454"}).insertAfter(this.element)),i=this.text[e]=t("<div></div>").addClass(e).css({position:"absolute",top:0,left:0,bottom:0,right:0}).appendTo(this.textContainer)),i},e.prototype.getTextInfo=function(e,i,o,n){var r,a,l,s;if(i=""+i,r="object"==typeof o?o.style+" "+o.variant+" "+o.weight+" "+o.size+"px/"+o.lineHeight+"px "+o.family:o,null==(a=this._textCache[e])&&(a=this._textCache[e]={}),null==(l=a[r])&&(l=a[r]={}),null==(s=l[i])){var c=t("<div></div>").html(i).css({position:"absolute",top:-9999}).appendTo(this.getTextLayer(e));"object"==typeof o?c.css({font:r,color:o.color}):"string"==typeof o&&c.addClass(o),s=l[i]={active:!1,rendered:!1,element:c,width:c.outerWidth(!0),height:c.outerHeight(!0)},c.detach()}return s},e.prototype.addText=function(t,e,i,o,n,r,a,l){var s=this.getTextInfo(t,o,n,r);s.active=!0,"center"==a?e-=s.width/2:"right"==a&&(e-=s.width),"middle"==l?i-=s.height/2:"bottom"==l&&(i-=s.height),s.element.css({top:Math.round(i),left:Math.round(e)})},e.prototype.removeText=function(t,e,i,o){if(null==e){var r=this._textCache[t];if(null!=r)for(var a in r)if(n.call(r,a)){var l=r[a];for(var s in l)n.call(l,s)&&(l[s].active=!1)}}else this.getTextInfo(t,e,i,o).active=!1},t.plot=function(e,o,n){return new i(t(e),o,n,t.plot.plugins)},t.plot.version="0.8.0",t.plot.plugins=[],t.fn.plot=function(e,i){return this.each(function(){t.plot(this,e,i)})}}(jQuery),function(t){function e(t,e){return e*Math.floor(t/e)}function i(t,e,i,o){if("function"==typeof t.strftime)return t.strftime(e);var n=function(t,e){return t=""+t,e=""+(null==e?"0":e),1==t.length?e+t:t},r=[],a=!1,l=t.getHours(),s=l<12;null==i&&(i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]),null==o&&(o=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]);var c;c=l>12?l-12:0==l?12:l;for(var u=0;u<e.length;++u){var h=e.charAt(u);if(a){switch(h){case"a":h=""+o[t.getDay()];break;case"b":h=""+i[t.getMonth()];break;case"d":h=n(t.getDate());break;case"e":h=n(t.getDate()," ");break;case"H":h=n(l);break;case"I":h=n(c);break;case"l":h=n(c," ");break;case"m":h=n(t.getMonth()+1);break;case"M":h=n(t.getMinutes());break;case"q":h=""+(Math.floor(t.getMonth()/3)+1);break;case"S":h=n(t.getSeconds());break;case"y":h=n(t.getFullYear()%100);break;case"Y":h=""+t.getFullYear();break;case"p":h=s?"am":"pm";break;case"P":h=s?"AM":"PM";break;case"w":h=""+t.getDay()}r.push(h),a=!1}else"%"==h?a=!0:r.push(h)}return r.join("")}function o(t){function e(t,e,i,o){t[e]=function(){return i[o].apply(i,arguments)}}var i={date:t};void 0!=t.strftime&&e(i,"strftime",t,"strftime"),e(i,"getTime",t,"getTime"),e(i,"setTime",t,"setTime");for(var o=["Date","Day","FullYear","Hours","Milliseconds","Minutes","Month","Seconds"],n=0;n<o.length;n++)e(i,"get"+o[n],t,"getUTC"+o[n]),e(i,"set"+o[n],t,"setUTC"+o[n]);return i}function n(t,e){if("browser"==e.timezone)return new Date(t);if(!e.timezone||"utc"==e.timezone)return o(new Date(t));if("undefined"!=typeof timezoneJS&&void 0!==timezoneJS.Date){var i=new timezoneJS.Date;return i.setTimezone(e.timezone),i.setTime(t),i}return o(new Date(t))}function r(o){o.hooks.processDatapoints.push(function(o,r,a){t.each(o.getAxes(),function(t,o){var r=o.options;"time"==r.mode&&(o.tickGenerator=function(t){var i=[],o=n(t.min,r),a=0,s=r.tickSize&&"quarter"===r.tickSize[1]||r.minTickSize&&"quarter"===r.minTickSize[1]?u:c;null!=r.minTickSize&&(a="number"==typeof r.tickSize?r.tickSize:r.minTickSize[0]*l[r.minTickSize[1]]);for(var h=0;h<s.length-1&&!(t.delta<(s[h][0]*l[s[h][1]]+s[h+1][0]*l[s[h+1][1]])/2&&s[h][0]*l[s[h][1]]>=a);++h);var f=s[h][0],d=s[h][1];if("year"==d){if(null!=r.minTickSize&&"year"==r.minTickSize[1])f=Math.floor(r.minTickSize[0]);else{var m=Math.pow(10,Math.floor(Math.log(t.delta/l.year)/Math.LN10)),p=t.delta/l.year/m;f=p<1.5?1:p<3?2:p<7.5?5:10,f*=m}f<1&&(f=1)}t.tickSize=r.tickSize||[f,d];var g=t.tickSize[0];d=t.tickSize[1];var x=g*l[d];"second"==d?o.setSeconds(e(o.getSeconds(),g)):"minute"==d?o.setMinutes(e(o.getMinutes(),g)):"hour"==d?o.setHours(e(o.getHours(),g)):"month"==d?o.setMonth(e(o.getMonth(),g)):"quarter"==d?o.setMonth(3*e(o.getMonth()/3,g)):"year"==d&&o.setFullYear(e(o.getFullYear(),g)),o.setMilliseconds(0),x>=l.minute?o.setSeconds(0):x>=l.hour?o.setMinutes(0):x>=l.day?o.setHours(0):x>=4*l.day?o.setDate(1):x>=2*l.month?o.setMonth(e(o.getMonth(),3)):x>=2*l.quarter?o.setMonth(e(o.getMonth(),6)):x>=l.year&&o.setMonth(0);var b,v=0,k=Number.NaN;do{if(b=k,k=o.getTime(),i.push(k),"month"==d||"quarter"==d)if(g<1){o.setDate(1);var y=o.getTime();o.setMonth(o.getMonth()+("quarter"==d?3:1));var w=o.getTime();o.setTime(k+v*l.hour+(w-y)*g),v=o.getHours(),o.setHours(0)}else o.setMonth(o.getMonth()+g*("quarter"==d?3:1));else"year"==d?o.setFullYear(o.getFullYear()+g):o.setTime(k+x)}while(k<t.max&&k!=b);return i},o.tickFormatter=function(t,e){var o=n(t,e.options);if(null!=r.timeformat)return i(o,r.timeformat,r.monthNames,r.dayNames);var a=e.options.tickSize&&"quarter"==e.options.tickSize[1]||e.options.minTickSize&&"quarter"==e.options.minTickSize[1],s=e.tickSize[0]*l[e.tickSize[1]],c=e.max-e.min,u=r.twelveHourClock?" %p":"",h=r.twelveHourClock?"%I":"%H";return i(o,s<l.minute?h+":%M:%S"+u:s<l.day?c<2*l.day?h+":%M"+u:"%b %d "+h+":%M"+u:s<l.month?"%b %d":a&&s<l.quarter||!a&&s<l.year?c<l.year?"%b":"%b %Y":a&&s<l.year?c<l.year?"Q%q":"Q%q %Y":"%Y",r.monthNames,r.dayNames)})})})}var a={xaxis:{timezone:null,timeformat:null,twelveHourClock:!1,monthNames:null}},l={second:1e3,minute:6e4,hour:36e5,day:864e5,month:2592e6,quarter:7776e6,year:525949.2*60*1e3},s=[[1,"second"],[2,"second"],[5,"second"],[10,"second"],[30,"second"],[1,"minute"],[2,"minute"],[5,"minute"],[10,"minute"],[30,"minute"],[1,"hour"],[2,"hour"],[4,"hour"],[8,"hour"],[12,"hour"],[1,"day"],[2,"day"],[3,"day"],[.25,"month"],[.5,"month"],[1,"month"],[2,"month"]],c=s.concat([[3,"month"],[6,"month"],[1,"year"]]),u=s.concat([[1,"quarter"],[2,"quarter"],[1,"year"]]);t.plot.plugins.push({init:r,options:a,name:"time",version:"1.0"}),t.plot.formatDate=i}(jQuery);
