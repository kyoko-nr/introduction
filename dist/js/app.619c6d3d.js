(function(e){function t(t){for(var i,a,c=t[0],s=t[1],u=t[2],d=0,f=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);h&&h(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(i=!1)}i&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},r={app:0},o=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var h=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0868":function(e,t,n){},"73e8":function(e,t,n){"use strict";n("cfe5")},"878d":function(e,t,n){"use strict";n("0868")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23");function r(e,t,n,r,o,a){var c=Object(i["h"])("BackGround");return Object(i["c"])(),Object(i["b"])(c)}var o=n("d4ec"),a=n("262e"),c=n("2caf"),s=n("9ab4"),u=n("ce1f"),h=Object(i["i"])("data-v-1af5984c");Object(i["f"])("data-v-1af5984c");var d={class:"background"};Object(i["d"])();var f=h((function(e,t,n,r,o,a){return Object(i["c"])(),Object(i["b"])("div",d)})),l=n("bee2"),p=n("5a89"),b=function(){function e(){Object(o["a"])(this,e),this.geom=new p["a"](3,3,3),this.mat=new p["e"]({color:13499122,wireframe:!0}),this.mesh=new p["d"](this.geom,this.mat)}return Object(l["a"])(e,[{key:"getMesh",value:function(){return this.mesh}},{key:"setPosition",value:function(e,t,n){this.mesh.position.set(e,t,n)}},{key:"setRotation",value:function(e,t,n){this.mesh.rotation.x=e,this.mesh.rotation.y=t,this.mesh.rotation.z=n}}]),e}(),v=function(e){Object(a["a"])(n,e);var t=Object(c["a"])(n);function n(){var e;return Object(o["a"])(this,n),e=t.apply(this,arguments),e.size={width:0,height:0},e}return Object(l["a"])(n,[{key:"mounted",value:function(){this.size.width=window.innerWidth,this.size.height=window.innerHeight,this.scene=new p["g"],this.renderer=new p["h"]({antialias:!0,alpha:!0});var e=document.querySelector("div.background");null===e||void 0===e||e.appendChild(this.renderer.domElement),this.renderer.setSize(this.size.width,this.size.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.camera=new p["f"](45,window.innerWidth/window.innerHeight,.1,100),this.camera.position.set(0,0,100),this.cube=new b,this.cube.setPosition(28,11.8,4),this.group=new p["c"],this.group.add(this.cube.getMesh()),this.scene.add(this.group),this.clock=new p["b"],this.animate()}},{key:"animate",value:function(){this.renderer.render(this.scene,this.camera);var e=this.clock.getElapsedTime();this.group.rotation.z=-e/3,this.cube.setRotation(1.8*-e,2*-e,0),window.requestAnimationFrame(this.animate)}}]),n}(u["b"]);n("878d");v.render=f,v.__scopeId="data-v-1af5984c";var w=v,m=function(e){Object(a["a"])(n,e);var t=Object(c["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return n}(u["b"]);m=Object(s["a"])([Object(u["a"])({components:{BackGround:w}})],m);var O=m;n("73e8");O.render=r;var j=O;Object(i["a"])(j).mount("#app")},cfe5:function(e,t,n){}});
//# sourceMappingURL=app.619c6d3d.js.map