(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{148:function(t,e,i){"use strict";i.r(e);var s=i(0),n=i.n(s),a=i(149),o=i(154),r=i(152),l=i(150),h=i(7),c=i.n(h);function p(t,e){if(!e.exploded){var i=t.x-e.x,s=t.y-e.y;Math.sqrt(i*i+s*s)-e.size/2<=t.explosionSize&&e.explode()}}function d(t,e){return e=e||0,Math.random()*(t-e)+e}var m,x=function(){function t(t,e,i,s,n,a,o,r,l,h,c){this.ctx=e,this.w=i,this.h=s,this.settings=n,this.cells=a,this.cellsExplored=o,this.img=r,this.expImg=function(t,e,i,s,n,a){s=parseInt(s),s=isNaN(s)||s>255?255:s,n=parseInt(n),n=isNaN(n)||n>255?255:n,a=parseInt(a),a=isNaN(a)||a>255?255:a;var o=document.createElement("canvas");o.width=t,o.height=e;var r=o.getContext("2d"),l=r.createRadialGradient(t/2,e/2,0,t/2,e/2,t/2);function h(t,e){return(t=Math.abs(t*e/255|0))<256?t:255}return l.addColorStop(0,"rgba("+[h(s,255),h(n,255),h(a,255),i]+")"),l.addColorStop(.3,"rgba("+[h(s,254),h(n,239),h(a,29),i]+")"),l.addColorStop(.4,"rgba("+[h(s,254),h(n,88),h(a,29),i]+")"),l.addColorStop(.6,"rgba("+[h(s,239),h(n,27),h(a,51),.05*i]+")"),l.addColorStop(.88,"rgba("+[h(s,153),h(n,10),h(a,27),.05*i]+")"),l.addColorStop(.92,"rgba("+[h(s,254),h(n,39),h(a,17),.1*i]+")"),l.addColorStop(.98,"rgba("+[h(s,254),h(n,254),h(a,183),.2*i]+")"),l.addColorStop(1,"rgba("+[h(s,254),h(n,39),h(a,17),0]+")"),r.fillStyle=l,r.fillRect(0,0,t,e),o}(64,64,.2,255,t.g,t.b);var p=n.maxSize>n.minSize?n.maxSize:n.minSize,d=p===n.maxSize?n.minSize:n.maxSize;this.size=l||Math.random()*(p-d)+d,this.initSize=this.size,this.x=h||Math.random()*i,this.y=c||Math.random()*s,this.vx=Math.random()*n.maxSpeed*2-n.maxSpeed,this.vy=Math.random()*n.maxSpeed*2-n.maxSpeed,this.exploded=!1,this.explosionSize=n.maxSizeExp/5,this.expV=n.stepExplosion}var e=t.prototype;return e.update=function(){var t=2*this.size,e=t/2;if(this.exploded||this.ctx.moveTo(this.x,this.y),this.x+=this.vx*d(d(5)),this.y+=this.vy*d(d(5)),(this.x<0||this.x>this.w)&&(this.vx*=-1,this.x=this.x>0?this.w:0),(this.y<0||this.y>this.h)&&(this.vy*=-1,this.y=this.y>0?this.h:0),this.exploded){if(this.explosionSize+=this.expV/this.explosionSize*10,this.size>0&&(this.size-=.05),this.explosionSize>2*this.settings.maxSizeExp)this.expV*=-1,this.vx*=0,this.vy*=0;else if(this.explosionSize<0)return void this.cellsExplored.splice(this.cellsExplored.indexOf(this),1);t=this.explosionSize*(this.now&&this.now--?2:1*(this.settings.firstExplosionDegree-(this.now||0))||1),void 0===this.now&&(this.cells.splice(this.cells.indexOf(this),1),this.cellsExplored.push(this)),this.now=this.now||this.settings.firstExplosionDegree,e=t/2,this.ctx.drawImage(this.expImg,this.x-e,this.y-e,t,t);for(var i=this.cells.length;i--;)p(this,this.cells[i])}else this.ctx.drawImage(this.img,this.x-e,this.y-e)},e.explode=function(){this.exploded=!0,this.vx*=this.settings.speedExplosionX,this.vy*=this.settings.speedExplosionY},t}(),u=!1,g=[],f=[],y={maxSize:6,minSize:2,maxSpeed:2,speedExplosionX:0,speedExplosionY:0,firstExplosionDegree:10,stepExplosion:3,maxSizeExp:14,maxColor:255,minColor:10,composite:"lighter",limitParticles:1999,channelsR:!1,channelsG:!0,channelsB:!0},v=!1,w=4;var S=function(t){function e(){return t.apply(this,arguments)||this}c()(e,t);var i=e.prototype;return i.componentDidMount=function(){var t=this.refs.canvas,e=t.getContext("2d"),i=window.innerWidth,s=760,n=i*s/1024|0;function a(t){var e=document.createElement("canvas");e.width=24,e.height=24;var i=e.getContext("2d");return i.font="12px sans-serif",i.fillStyle="#0a400a",i.fillText(t,0,12),e}var o=[a("0"),a("1")];function r(n){if(u){n=n.touches&&n.touches.length?n.touches[0]:n;var a=new x(t,e,i,s,y,g,f,o[Math.random()<.5?1:0],y.maxSize,n.layerX,n.layerY);g.push(a),a.explode()}else h()}function l(){if(v)return v=!1,h();u&&window.requestAnimationFrame(l),e.save(),e.globalCompositeOperation="destination-out",e.fillStyle="rgba(0, 0, 0, .4)",e.fillRect(0,0,i,s),e.globalCompositeOperation=y.composite,e.fillStyle="none",e.strokeStyle="#fff",e.beginPath();for(var a=g.length;a--;)g[a].update();for(a=f.length;a--;)f[a].update();if(e.stroke(),e.restore(),g.length||f.length||(u=m-- >0)||(console.log("restarting"),v=!0,u||h()),g.length<n)for(var r=w;r>=0;r--)g.push(new x(t,e,i,s,y,g,f,o[Math.random()<.5?1:0]))}function h(){n=n>y.limitParticles?y.limitParticles:n,t.width=i,t.height=s,e.fillStyle="black",e.fillRect(0,0,i,s),g.splice(0),f.splice(0);for(var a=n;a--;)g.push(new x(t,e,i,s,y,g,f,o[Math.random()<.5?1:0]));u=!0,m=30,l()}t.addEventListener("click",r,!1),t.addEventListener("touchstart",r,!1),h()},i.render=function(){return n.a.createElement("canvas",{ref:"canvas",style:{position:"absolute",top:0,left:0,height:760,width:"100%",background:"#000",cursor:"crosshair"}})},e}(n.a.Component),b=i(197),E=i.n(b);e.default=function(t){var e=t.location;return n.a.createElement(r.a,{containerStyle:{maxWidth:null,paddingTop:0},location:e},n.a.createElement(l.a,{title:"Home",keywords:["gatsby","application","react"]}),n.a.createElement("div",{style:{height:760,background:"black",position:"relative"}},n.a.createElement(S,null),n.a.createElement(o.Flex,{justifyContent:"center",alignItems:"center",style:{height:"100%",color:"white",textAlign:"center"}},n.a.createElement(o.Box,{p:3,style:{zIndex:2},className:E.a.textBanner},n.a.createElement("h1",null,"ByteBandits"),n.a.createElement("p",null,"Hide yo' bytes, hide yo' bits, or be pwn'd by ByteBandits!"),n.a.createElement("p",null,"We are ",n.a.createElement(a.a,{to:"/team"},"team")," of hackers and geeks with our roots from IIT Indore."),n.a.createElement("p",null,"Check out some of our ",n.a.createElement(a.a,{to:"/writeups"},"writeups")," for some CTF problems.")))))}},150:function(t,e,i){"use strict";var s=i(151),n=i(0),a=i.n(n),o=i(4),r=i.n(o),l=i(155),h=i.n(l),c=i(149);function p(t){var e=t.description,i=t.lang,n=t.meta,o=t.keywords,r=t.title;return a.a.createElement(c.b,{query:d,render:function(t){var s=e||t.site.siteMetadata.description;return a.a.createElement(h.a,{htmlAttributes:{lang:i},title:r,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:r},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:s}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(n)})},data:s})}p.defaultProps={lang:"en",meta:[],keywords:[]},p.propTypes={description:r.a.string,lang:r.a.string,meta:r.a.array,keywords:r.a.arrayOf(r.a.string),title:r.a.string.isRequired},e.a=p;var d="1025518380"},151:function(t){t.exports={data:{site:{siteMetadata:{title:"ByteBandits",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-28baf84bd1db3bd6a4e0.js.map