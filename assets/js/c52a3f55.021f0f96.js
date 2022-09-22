"use strict";(self.webpackChunkblogs=self.webpackChunkblogs||[]).push([[2228],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,k=c["".concat(p,".").concat(d)]||c[d]||s[d]||l;return n?r.createElement(k,i(i({ref:t},m),{},{components:n})):r.createElement(k,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={slug:"frontEnd/css",title:"css",authors:[{name:"Fei Peng",title:"Front-end developer",url:"https://github.com/PENGFEI-CN",image_url:"https://github.com/PENGFEI-CN.png",tags:["blogs","front-end"]}]},i=void 0,o={permalink:"/blogs/blog/frontEnd/css",source:"@site/blog/notes/\u524d\u7aef\u7279\u6027/css.md",title:"css",description:"1. CSS\u7279\u6027",date:"2022-09-22T10:33:29.000Z",formattedDate:"2022\u5e749\u670822\u65e5",tags:[],readingTime:4.67,hasTruncateMarker:!1,authors:[{name:"Fei Peng",title:"Front-end developer",url:"https://github.com/PENGFEI-CN",image_url:"https://github.com/PENGFEI-CN.png",tags:["blogs","front-end"],imageURL:"https://github.com/PENGFEI-CN.png"}],frontMatter:{slug:"frontEnd/css",title:"css",authors:[{name:"Fei Peng",title:"Front-end developer",url:"https://github.com/PENGFEI-CN",image_url:"https://github.com/PENGFEI-CN.png",tags:["blogs","front-end"],imageURL:"https://github.com/PENGFEI-CN.png"}]},prevItem:{title:"Welcome",permalink:"/blogs/blog/Blogs"},nextItem:{title:"html",permalink:"/blogs/blog/frontEnd/html"}},p={authorsImageUrls:[void 0]},u=[{value:"1. CSS\u7279\u6027",id:"1-css\u7279\u6027",level:2},{value:"\u52a8\u753b",id:"\u52a8\u753b",level:3},{value:"chrome\u5b57\u4f53\u9650\u5236",id:"chrome\u5b57\u4f53\u9650\u5236",level:3},{value:"\u5c42\u53e0\u4e0a\u4e0b\u6587\u6bd4\u8f83\u6982\u5ff5",id:"\u5c42\u53e0\u4e0a\u4e0b\u6587\u6bd4\u8f83\u6982\u5ff5",level:3},{value:"\u91cd\u7ed8\u548c\u56de\u6d41\uff0c\u6027\u80fd\u4f18\u5316",id:"\u91cd\u7ed8\u548c\u56de\u6d41\u6027\u80fd\u4f18\u5316",level:3},{value:"position:fixed\u5c5e\u6027",id:"positionfixed\u5c5e\u6027",level:3},{value:"2. CSS\u6548\u679c\u5b9e\u73b0",id:"2-css\u6548\u679c\u5b9e\u73b0",level:2},{value:"\u6587\u672c\u79fb\u9664\u7701\u7565\u53f7",id:"\u6587\u672c\u79fb\u9664\u7701\u7565\u53f7",level:3},{value:"\u7ffb\u8f6c\u5361\u7247\u52a8\u753b\u5b9e\u73b0",id:"\u7ffb\u8f6c\u5361\u7247\u52a8\u753b\u5b9e\u73b0",level:3},{value:"\u6e10\u53d8\u8272\u7565\u8fc7\u6548\u679c",id:"\u6e10\u53d8\u8272\u7565\u8fc7\u6548\u679c",level:3},{value:"text-shadow\u5b9e\u73b0\u590d\u5236\u6587\u5b57",id:"text-shadow\u5b9e\u73b0\u590d\u5236\u6587\u5b57",level:3},{value:"grid\u5e03\u5c40",id:"grid\u5e03\u5c40",level:3}],m={toc:u};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-css\u7279\u6027"},"1. CSS\u7279\u6027"),(0,a.kt)("h3",{id:"\u52a8\u753b"},"\u52a8\u753b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"transition \u8fc7\u6e21",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"transition-property \u8fc7\u6e21\u5c5e\u6027\u540d\u79f0\ntransition-duration \u6301\u7eed\u65f6\u95f4\ntransition-timing-function \u65f6\u95f4\u66f2\u7ebf\ntransition-delay \u5f00\u59cb\u65f6\u95f4"))),(0,a.kt)("li",{parentName:"ul"},"animation & @keyframe",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"animation-name \u5173\u952e\u5e27\u52a8\u753b\u540d\u79f0\nanimation-duration \u6301\u7eed\u65f6\u95f4\nanimation-timing-function \u65f6\u95f4\u66f2\u7ebf\nanimation-delay \u5f00\u59cb\u65f6\u95f4\nanimation-iteration-count \u52a8\u753b\u6b21\u6570\nanimation-direction \u662f\u5426\u53cd\u5411\u64ad\u653e"),(0,a.kt)("li",{parentName:"ul"},"keyframe\u5b9a\u4e49\u5c5e\u6027\u53d8\u5316 from to"))),(0,a.kt)("li",{parentName:"ul"},"will-change\u901a\u77e5\u6d4f\u89c8\u5668\u5143\u7d20\u5373\u5c06\u53d1\u751f\u53d8\u5316\uff0c\u4ece\u800c\u5bf9\u52a8\u6548\u8fdb\u884c\u4f18\u5316"),(0,a.kt)("li",{parentName:"ul"},"animation step\u53c2\u6570\u9010\u5e27\u52a8\u753b")),(0,a.kt)("h3",{id:"chrome\u5b57\u4f53\u9650\u5236"},"chrome\u5b57\u4f53\u9650\u5236"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"font-size<12 chrome\u90fd\u4f1a\u5f53\u4f5c12px\u5904\u7406\u5e76\u663e\u793a\uff0c\u6240\u4ee5\u8c03\u8bd5\u79fb\u52a8\u7aef\u754c\u9762\u65f6\u4f1a\u6709\u6ea2\u51fa\u95ee\u9898")),(0,a.kt)("h3",{id:"\u5c42\u53e0\u4e0a\u4e0b\u6587\u6bd4\u8f83\u6982\u5ff5"},"\u5c42\u53e0\u4e0a\u4e0b\u6587\u6bd4\u8f83\u6982\u5ff5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u540c\u5c42\u7ea7\u5df2z-index\u5c5e\u6027\u53ca\u5176\u5148\u540e\u987a\u5e8f\u51b3\u5b9a\u4e0a\u4e0b\u5173\u7cfb"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u4e0d\u540c\u5c42\u53e0\u4e0a\u4e0b\u6587\u901a\u8fc7\u201c\u7236\u7ea7\u5143\u7d20\u5c42\u53e0\u7ea7\u522b\u201d\u6765\u51b3\u5b9a\u4e0a\u4e0b\u5173\u7cfb")),(0,a.kt)("h3",{id:"\u91cd\u7ed8\u548c\u56de\u6d41\u6027\u80fd\u4f18\u5316"},"\u91cd\u7ed8\u548c\u56de\u6d41\uff0c\u6027\u80fd\u4f18\u5316"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u91cd\u7ed8: \u4e0d\u4f1a\u5f71\u54cd\u5e03\u5c40\u7684\u64cd\u4f5c\u5982\u6539\u53d8\u5143\u7d20\u7684\u5916\u89c2\u3001\u98ce\u683c\u7b49\uff08\u5982color\u76f8\u5173\u5c5e\u6027\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u56de\u6d41\uff1a\u4f1a\u5f71\u54cd\u5230\u5e03\u5c40\u7684\u64cd\u4f5c\u5982\u6539\u53d8\u5143\u7d20\u89c4\u6a21\u5c3a\u5bf8\u3001\u5e03\u5c40\u3001\u9690\u85cf\u7b49",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9664\u5f00\u6539\u53d8\u5143\u7d20\u5c3a\u5bf8\u5e03\u5c40\u5916\u4e00\u4e9b\u9700\u8981\u6ce8\u610f\u7684\u4f1a\u5f15\u8d77\u56de\u6d41\u7684\u64cd\u4f5c",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6539\u53d8\u5185\u5d4c\u7684style\u5c5e\u6027"),(0,a.kt)("li",{parentName:"ul"},"\u8bfb\u53d6offset\u3001client\u3001scroll\u7b49\u5c5e\u6027"),(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u6216\u8005\u5220\u9664\u201c\u53ef\u89c1\u201d\u7684DOM\u5143\u7d20"))))),(0,a.kt)("li",{parentName:"ul"},"\u76f8\u5e94\u7684\u53ef\u4ee5\u6ce8\u610f\u6216\u8005\u8fdb\u884c\u7684\u6027\u80fd\u4f18\u5316",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u51cf\u5c11\u5bf9\u53ef\u89c1DOM\u7684\u64cd\u4f5c\u6b21\u6570",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5982\u4f7f\u7528documentFragment\u7f13\u5b58\u64cd\u4f5c\u5f85\u7ed3\u675f\u540eappend\u5230body\u4e2d"),(0,a.kt)("li",{parentName:"ul"},"\u6216\u8005\u5c06\u8981\u64cd\u4f5c\u7684dom\u5148display none\u9690\u85cf\u6389"))),(0,a.kt)("li",{parentName:"ul"},"\u7528\u53d8\u91cf\u9884\u5148\u7f13\u5b58\u7528\u5230\u7684\u5c5e\u6027\uff0c\u4ece\u800c\u907f\u514d\u5728\u5faa\u73af\u4e2d\u8bfb\u53d6\u6bd4\u5982offsetWidth\u7b49\u5c5e\u6027"),(0,a.kt)("li",{parentName:"ul"},"\u590d\u6742\u52a8\u753b\u6548\u679c,\u4f7f\u7528\u7edd\u5bf9\u5b9a\u4f4d\u8ba9\u5176\u8131\u79bb\u6587\u6863\u6d41\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u590d\u6742\u52a8\u753b\u4f1a\u9891\u7e41\u89e6\u53d1\u56de\u6d41\uff0c\u8131\u79bb\u6587\u6863\u6d41\u53ef\u4ee5\u51cf\u5c11\u5bf9\u5176\u4ed6\u5143\u7d20\u7684\u5f71\u54cd"))),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame"},"requestAnimationFrame"),"\u66f4\u52a0\u7cbe\u7ec6\u7684\u63a7\u5236\u52a8\u753b\u6e32\u67d3"))),(0,a.kt)("li",{parentName:"ul"},"transform\u548cposition\u7684\u533a\u522b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"position\u7ed3\u5408top\u5c5e\u6027\u7684\u6539\u53d8\u4f1a\u5bfc\u81f4\u56de\u6d41\uff0c\u7531\u6b64\u5236\u4f5c\u52a8\u753b\u6548\u679c\u5361\u987f"),(0,a.kt)("li",{parentName:"ul"},"\u800ctransform \u52a8\u753b\u7531GPU\u63a7\u5236\uff0c\u652f\u6301\u786c\u4ef6\u52a0\u901f\uff0c\u5e26\u6709transform\u3001z-index\u3001opacity\u3001filter\u7684\u5143\u7d20\u6216\u80053D\u3001video\u3001canvas\u5143\u7d20\u90fd\u4f1a\u521b\u5efa\u72ec\u7acb\u7684\u65b0\u7684\u590d\u5408\u56fe\u5c42\uff0c\u6574\u4e2a\u590d\u5408\u56fe\u5c42\u52a8\u753b\u7684\u6267\u884c\u7531GPU\u7684\u590d\u5408\u5668\u64cd\u7eb5\uff083D\u4f1a\u5728\u6e32\u67d3\u524d\u521b\u5efa\u72ec\u7acb\u56fe\u5c42\uff0c2D\u5219\u4f1a\u5728\u52a8\u753b\u5f00\u59cb\u518d\u524d\u521b\u5efa\u56fe\u5c42\u7528\u4e8eGPU\u6e32\u67d3\uff09")))),(0,a.kt)("h3",{id:"positionfixed\u5c5e\u6027"},"position:fixed\u5c5e\u6027"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"fixed\u662f\u76f8\u5bf9\u4e8e viewport \u5b9a\u4f4d\uff0c\u4f46\u662f\u4e5f\u6709\u7279\u6b8a\u60c5\u51b5: \u5f53\u5143\u7d20\u7956\u5148\u7684 transform \u5c5e\u6027\u975e none \u65f6\uff0c\u76f8\u5bf9\u5b9a\u4f4d\u7684\u5bb9\u5668\u7531\u89c6\u53e3\u6539\u4e3a\u8be5\u7956\u5148")),(0,a.kt)("h2",{id:"2-css\u6548\u679c\u5b9e\u73b0"},"2. CSS\u6548\u679c\u5b9e\u73b0"),(0,a.kt)("h3",{id:"\u6587\u672c\u79fb\u9664\u7701\u7565\u53f7"},"\u6587\u672c\u79fb\u9664\u7701\u7565\u53f7"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5355\u884c\u6587\u672c",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7edf\u4e00css\uff1a",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"overflow: hidden;//\u6ea2\u51fa\u9690\u85cf\nwhite-space: nowrap;//\u7a7a\u95f4\u6ea2\u51fa\u6362\u884c\ntext-overflow: ellipsis;//\u6587\u672c\u79fb\u9664\u7701\u7565\u53f7\u66ff\u4ee3\n"))))),(0,a.kt)("li",{parentName:"ul"},"webkit\u5185\u6838\u6d4f\u89c8\u5668\u5904\u7406",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"    display: -webkit-box;\n    -webkit-line-clamp: 3;\n"))),(0,a.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u5185\u6838\u6d4f\u89c8\u5668\u5904\u7406\u65b9\u6848\uff1a\n\u7528js\u901a\u8fc7\u5b57\u4f53\u5927\u5c0f\u548cline-height\u4ee5\u53ca\u76d2\u5b50\u5f97height\u9650\u5236\u6765\u5b9e\u73b0\u6ea2\u51fa\u6dfb\u52a0\u7701\u7565\u53f7\uff0c\u4f2a\u7c7b\u6dfb\u52a0\u7701\u7565\u53f7\u56fe\u7247\u6216\u8005\u66ff\u6362\u6389\u6700\u540e\u51e0\u4e2a\u6587\u5b57\u4e3a\u7701\u7565\u53f7\u7b49\u65b9\u6cd5")),(0,a.kt)("h3",{id:"\u7ffb\u8f6c\u5361\u7247\u52a8\u753b\u5b9e\u73b0"},"\u7ffb\u8f6c\u5361\u7247\u52a8\u753b\u5b9e\u73b0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"3D\u89c6\u89d2\u8bbe\u7f6e\u80cc\u9762\u4e0d\u53ef\u89c1\u8bbe\u7f6e\u52a8\u753b\u5e76\u65cb\u8f6c\u6b63\u53cd\u9762\u5373\u53ef\u5b9e\u73b0",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language--css"},"  transform-style: preserve-3d; // \u8bbe\u7f6e\u4e3a3D\n  perspective: 5000px; // 3D \u89c6\u89d2\u8ddd\u79bb\n  perspective-origin: 50% 50%; // \u89c2\u5bdf\u8005\u7684\u4f4d\u7f6e\n  .front {\n      z-index: 3;\n      transform: rotateY(0deg);\n  }\n  .back {\n      z-index: 2;\n      transform: rotateY(180deg);\n  }\n")))),(0,a.kt)("h3",{id:"\u6e10\u53d8\u8272\u7565\u8fc7\u6548\u679c"},"\u6e10\u53d8\u8272\u7565\u8fc7\u6548\u679c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6309\u94ae\u767d\u5149\u63a0\u8fc7\u6548\u679c\u5373\u53ef\u7528\u5982\u4e0b\u6e10\u53d8\u767d\u8272\u5149\u6761\u8bbe\u7f6etranslate\u65cb\u8f6c\u4e00\u4e0b\u5e76\u901a\u8fc7\u52a8\u753b\u5b9e\u73b0\u79fb\u52a8\u5373\u53ef\u5b9e\u73b0",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language--js"},"    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, .3) 50%, rgba(255, 255, 255, 0) 100%);\n")))),(0,a.kt)("h3",{id:"text-shadow\u5b9e\u73b0\u590d\u5236\u6587\u5b57"},"text-shadow\u5b9e\u73b0\u590d\u5236\u6587\u5b57"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5229\u7528\u9634\u5f71\u6548\u679c\u5b9e\u73b0\u6587\u5b57\u7684\u590d\u5236",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language--js"},"text-shadow: .5em 0, 1em 0, 1.5em 0;\n")))),(0,a.kt)("h3",{id:"grid\u5e03\u5c40"},"grid\u5e03\u5c40"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html"},"grid\u4e8c\u7ef4\u7f51\u683c\u5e03\u5c40"))))}s.isMDXComponent=!0}}]);