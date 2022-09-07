"use strict";(self.webpackChunkblogs=self.webpackChunkblogs||[]).push([[3482],{3905:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>p});var i=l(7294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,i)}return l}function a(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,i,n=function(e,t){if(null==e)return{};var l,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)l=r[i],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)l=r[i],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var u=i.createContext({}),s=function(e){var t=i.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):a(a({},t),e)),l},c=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var l=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(l),p=n,v=d["".concat(u,".").concat(p)]||d[p]||m[p]||r;return l?i.createElement(v,a(a({ref:t},c),{},{components:l})):i.createElement(v,a({ref:t},c))}));function p(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=l.length,a=new Array(r);a[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,a[1]=o;for(var s=2;s<r;s++)a[s]=l[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,l)}d.displayName="MDXCreateElement"},9361:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var i=l(7462),n=(l(7294),l(3905));const r={slug:"questions/interview",title:"\u9762\u8bd5\u9898",authors:[{name:"Fei Peng",title:"Front-end developer",url:"https://github.com/PENGFEI-CN",image_url:"https://github.com/PENGFEI-CN.png",tags:["docs","questions"]}]},a=void 0,o={unversionedId:"\u95ee\u9898\u53ca\u89e3\u6790/\u9762\u8bd5\u9898\u76ee\u96c6\u5408",id:"\u95ee\u9898\u53ca\u89e3\u6790/\u9762\u8bd5\u9898\u76ee\u96c6\u5408",title:"\u9762\u8bd5\u9898",description:"margin\u4e09\u4e2a\u503c\u7684\u65f6\u5019\u662f\u4ec0\u4e48\uff1f\u767e\u5206\u6bd4\u65f6\u76f8\u5bf9\u57fa\u51c6\uff1f",source:"@site/docs/\u95ee\u9898\u53ca\u89e3\u6790/\u9762\u8bd5\u9898\u76ee\u96c6\u5408.md",sourceDirName:"\u95ee\u9898\u53ca\u89e3\u6790",slug:"/\u95ee\u9898\u53ca\u89e3\u6790/questions/interview",permalink:"/blogs/docs/\u95ee\u9898\u53ca\u89e3\u6790/questions/interview",draft:!1,tags:[],version:"current",frontMatter:{slug:"questions/interview",title:"\u9762\u8bd5\u9898",authors:[{name:"Fei Peng",title:"Front-end developer",url:"https://github.com/PENGFEI-CN",image_url:"https://github.com/PENGFEI-CN.png",tags:["docs","questions"]}]},sidebar:"tutorialSidebar",previous:{title:"\u865a\u62dfDOM\u95ee\u9898",permalink:"/blogs/docs/\u95ee\u9898\u53ca\u89e3\u6790/questions/virtualDom"}},u={},s=[{value:"margin\u4e09\u4e2a\u503c\u7684\u65f6\u5019\u662f\u4ec0\u4e48\uff1f\u767e\u5206\u6bd4\u65f6\u76f8\u5bf9\u57fa\u51c6\uff1f",id:"margin\u4e09\u4e2a\u503c\u7684\u65f6\u5019\u662f\u4ec0\u4e48\u767e\u5206\u6bd4\u65f6\u76f8\u5bf9\u57fa\u51c6",level:2},{value:"\u5bf9\u8c61\u8c03\u7528\u7684this\u6307\u5411\u7b49\u7b49\uff1fthis\uff01",id:"\u5bf9\u8c61\u8c03\u7528\u7684this\u6307\u5411\u7b49\u7b49this",level:2},{value:"\u4e8b\u4ef6\u5192\u6ce1\u548c\u6355\u83b7\u987a\u5e8f\uff1f",id:"\u4e8b\u4ef6\u5192\u6ce1\u548c\u6355\u83b7\u987a\u5e8f",level:2},{value:"script\u6807\u7b7e\u7684\u5c5e\u6027\uff0cjs\u52a0\u8f7d\u6027\u80fd\u4f18\u5316",id:"script\u6807\u7b7e\u7684\u5c5e\u6027js\u52a0\u8f7d\u6027\u80fd\u4f18\u5316",level:2},{value:"\u6b63\u5219\u8868\u8fbe\u5f0f",id:"\u6b63\u5219\u8868\u8fbe\u5f0f",level:2},{value:"\u56fe\u7247\u4f7f\u7528img \u548c div\u7684\u533a\u522b",id:"\u56fe\u7247\u4f7f\u7528img-\u548c-div\u7684\u533a\u522b",level:2},{value:"\u884c\u5185\u548c\u5757\u7ea7\u533a\u522b",id:"\u884c\u5185\u548c\u5757\u7ea7\u533a\u522b",level:2},{value:"\u8bed\u4e49\u5316\u6807\u7b7e",id:"\u8bed\u4e49\u5316\u6807\u7b7e",level:2},{value:"js\u5783\u573e\u56de\u6536\u673a\u5236(v8\u7684\u5783\u573e\u56de\u6536\u673a\u5236\u662f\u4ec0\u4e48\uff1f\u6807\u8bb0\u6e05\u695a+\u5185\u5b58\u6574\u7406)",id:"js\u5783\u573e\u56de\u6536\u673a\u5236v8\u7684\u5783\u573e\u56de\u6536\u673a\u5236\u662f\u4ec0\u4e48\u6807\u8bb0\u6e05\u695a\u5185\u5b58\u6574\u7406",level:2},{value:"\u95ed\u5305\uff0c\u4f18\u7f3a\u70b9\uff0c\u5982\u4f55\u91ca\u653e",id:"\u95ed\u5305\u4f18\u7f3a\u70b9\u5982\u4f55\u91ca\u653e",level:2},{value:"\u79fb\u52a8\u7aef1px\u95ee\u9898",id:"\u79fb\u52a8\u7aef1px\u95ee\u9898",level:2},{value:"\u5bf9\u8c61\u539f\u578b\u94fe\uff0c\u6784\u9020\u51fd\u6570\uff0cnew\u4e4b\u540e\u7684\u64cd\u4f5c",id:"\u5bf9\u8c61\u539f\u578b\u94fe\u6784\u9020\u51fd\u6570new\u4e4b\u540e\u7684\u64cd\u4f5c",level:2},{value:"\u624b\u5199promise.all",id:"\u624b\u5199promiseall",level:2},{value:"\u9632\u6296\uff1a",id:"\u9632\u6296",level:2},{value:"\u8282\u6d41\uff1a",id:"\u8282\u6d41",level:2},{value:"'1','2'.map(parseInt)\uff0cparseInt\u53c2\u6570\u95ee\u9898",id:"12mapparseintparseint\u53c2\u6570\u95ee\u9898",level:2},{value:"\u4e3a\u4ec0\u4e48\u51cf\u5c11http\u8bf7\u6c42\u6570\u91cf\u80fd\u4f18\u5316\u7f51\u9875\u901f\u5ea6\uff0c\u4e09\u6b21\u63e1\u624b\u56db\u6b21\u6325\u624b\u5f97\u8be6\u60c5",id:"\u4e3a\u4ec0\u4e48\u51cf\u5c11http\u8bf7\u6c42\u6570\u91cf\u80fd\u4f18\u5316\u7f51\u9875\u901f\u5ea6\u4e09\u6b21\u63e1\u624b\u56db\u6b21\u6325\u624b\u5f97\u8be6\u60c5",level:2},{value:"HTTPS\u6d41\u7a0b\u8a73\u89e3",id:"https\u6d41\u7a0b\u8a73\u89e3",level:2},{value:"\u95ed\u5305\u4e2dthis\u7684\u6307\u5411",id:"\u95ed\u5305\u4e2dthis\u7684\u6307\u5411",level:2},{value:"\u9996\u9875\u767d\u5c4f\u4f18\u5316\u65b9\u6848",id:"\u9996\u9875\u767d\u5c4f\u4f18\u5316\u65b9\u6848",level:2},{value:"react\u548cvue\u7684\u5177\u4f53\u5dee\u522b",id:"react\u548cvue\u7684\u5177\u4f53\u5dee\u522b",level:2},{value:"\u9047\u5230\u7684\u6ca1\u6709\u8bb0\u6e05\u695a\u7684\u95ee\u9898\u56de\u987e",id:"\u9047\u5230\u7684\u6ca1\u6709\u8bb0\u6e05\u695a\u7684\u95ee\u9898\u56de\u987e",level:2},{value:"git rebase\u7ba1\u7406\u591a\u4e2a\u5206\u652f\u7684commit",id:"git-rebase\u7ba1\u7406\u591a\u4e2a\u5206\u652f\u7684commit",level:2},{value:"\u5bf9\u5206\u652fcommit\u7684\u5408\u5e76",id:"\u5bf9\u5206\u652fcommit\u7684\u5408\u5e76",level:2},{value:"\u540c\u4e00\u4e2acommit\u590d\u5236\u7c98\u8d34\u5230\u4e0d\u540c\u5206\u652f",id:"\u540c\u4e00\u4e2acommit\u590d\u5236\u7c98\u8d34\u5230\u4e0d\u540c\u5206\u652f",level:2},{value:"git commit\u89c4\u8303",id:"git-commit\u89c4\u8303",level:2},{value:"BFC\u7684\u5b9a\u4e49\u548c\u4f5c\u7528",id:"bfc\u7684\u5b9a\u4e49\u548c\u4f5c\u7528",level:2},{value:"css\u5339\u914d\u89c4\u5219",id:"css\u5339\u914d\u89c4\u5219",level:2},{value:"\u4ece\u53f3\u5230\u5de6\u5339\u914d\u907f\u514d\u65e0\u6548\u5339\u914d",id:"\u4ece\u53f3\u5230\u5de6\u5339\u914d\u907f\u514d\u65e0\u6548\u5339\u914d",level:2},{value:"new\u4e00\u4e2a\u5bf9\u8c61\u53d1\u751f\u4e86\u4ec0\u4e48\u6df1\u5165\u7814\u7a76\uff08 EC\uff0cAO\uff0cVO \u5bf9\u8c61\uff09",id:"new\u4e00\u4e2a\u5bf9\u8c61\u53d1\u751f\u4e86\u4ec0\u4e48\u6df1\u5165\u7814\u7a76-ecaovo-\u5bf9\u8c61",level:2},{value:"generator/yield\u662f\u4ec0\u4e48",id:"generatoryield\u662f\u4ec0\u4e48",level:2},{value:"\b\u56de\u6d41\u548c\u91cd\u7ed8/DocumentFragment",id:"\u56de\u6d41\u548c\u91cd\u7ed8documentfragment",level:2},{value:"\u7406\u89e3json\u4f5c\u4e3a\u6570\u636e\u683c\u5f0f\u548cjs object\u7684\u533a\u522b\uff0c\u5982\u4f55\u4e92\u76f8\u8f6c\u6362",id:"\u7406\u89e3json\u4f5c\u4e3a\u6570\u636e\u683c\u5f0f\u548cjs-object\u7684\u533a\u522b\u5982\u4f55\u4e92\u76f8\u8f6c\u6362",level:2},{value:"\u9047\u5230\u7684\u6ca1\u6709\u8bb0\u6e05\u695a\u7684\u95ee\u9898\u56de\u987e",id:"\u9047\u5230\u7684\u6ca1\u6709\u8bb0\u6e05\u695a\u7684\u95ee\u9898\u56de\u987e-1",level:2},{value:"git rebase\u7ba1\u7406\u591a\u4e2a\u5206\u652f\u7684commit",id:"git-rebase\u7ba1\u7406\u591a\u4e2a\u5206\u652f\u7684commit-1",level:2},{value:"\u91cd\u7ed8\u548c\u56de\u6d41\uff0c\u6027\u80fd\u4f18\u5316",id:"\u91cd\u7ed8\u548c\u56de\u6d41\u6027\u80fd\u4f18\u5316",level:2},{value:"BFC\u7684\u5177\u4f53\u5b9a\u4e49\u548c\u6e05\u9664BFC\u95ee\u9898\u7684\u65b9\u6cd5",id:"bfc\u7684\u5177\u4f53\u5b9a\u4e49\u548c\u6e05\u9664bfc\u95ee\u9898\u7684\u65b9\u6cd5",level:2},{value:"findMissing(10,12,11,14,16,9,16) \u6570\u7ec4-----\u5bfb\u627e\u6570\u7ec4\u4e2d\u7f3a\u5931\u7684 \u6570\u5b57",id:"findmissing1012111416916-\u6570\u7ec4-----\u5bfb\u627e\u6570\u7ec4\u4e2d\u7f3a\u5931\u7684-\u6570\u5b57",level:2},{value:"React\u4e2d\u7684\u6570\u636eimmuteble\u548cVue\u4e2d\u7684\u6570\u636e\u9a71\u52a8",id:"react\u4e2d\u7684\u6570\u636eimmuteble\u548cvue\u4e2d\u7684\u6570\u636e\u9a71\u52a8",level:2},{value:"React\u65b0\u7248\u7684hooks\uff0cVUE3.0\u65b0\u66f4\u65b0\u7684\u4e1c\u897f",id:"react\u65b0\u7248\u7684hooksvue30\u65b0\u66f4\u65b0\u7684\u4e1c\u897f",level:2},{value:"BFC\u7684\u5b9a\u4e49\u548c\u4f5c\u7528",id:"bfc\u7684\u5b9a\u4e49\u548c\u4f5c\u7528-1",level:2},{value:"React\u4e2dshouldComponentUpdate\u7684\u5177\u4f53\u4f5c\u7528",id:"react\u4e2dshouldcomponentupdate\u7684\u5177\u4f53\u4f5c\u7528",level:2},{value:"React\u4e2dreceivedProps\u751f\u547d\u5468\u671f\u7684\u5177\u4f53\u4f5c\u7528\uff0c\u5b83\u505a\u5230\u4e86\u54ea\u91cc\u7684\u4f18\u5316",id:"react\u4e2dreceivedprops\u751f\u547d\u5468\u671f\u7684\u5177\u4f53\u4f5c\u7528\u5b83\u505a\u5230\u4e86\u54ea\u91cc\u7684\u4f18\u5316",level:2},{value:"\u4e3a\u4ec0\u4e48js\u9009\u62e9\u5feb\u901f\u6392\u5e8f\u800c\u4e0d\u9009\u62e9\u5f52\u5e76\u6392\u5e8f",id:"\u4e3a\u4ec0\u4e48js\u9009\u62e9\u5feb\u901f\u6392\u5e8f\u800c\u4e0d\u9009\u62e9\u5f52\u5e76\u6392\u5e8f",level:2}],c={toc:s};function m(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"margin\u4e09\u4e2a\u503c\u7684\u65f6\u5019\u662f\u4ec0\u4e48\u767e\u5206\u6bd4\u65f6\u76f8\u5bf9\u57fa\u51c6"},"margin\u4e09\u4e2a\u503c\u7684\u65f6\u5019\u662f\u4ec0\u4e48\uff1f\u767e\u5206\u6bd4\u65f6\u76f8\u5bf9\u57fa\u51c6\uff1f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"padding \u548c margin \u7684\u65e0\u8bba\u4e0a\u4e0b\u5de6\u53f3 \u503c \u90fd\u662f\u57fa\u4e8e\u7236\u5143\u7d20\u7684\u5bbd\u5ea6\uff1b"),(0,n.kt)("li",{parentName:"ul"},"margin\uff1a \u56db\u4e2a\u503c\uff1a\u4e0a\u53f3\u4e0b\u5de6\uff1b\u4e09\u4e2a\u503c\uff1a\u4e0a\uff0c\u5de6\u53f3\uff0c\u4e0b\uff1b\u4e24\u4e2a\u503c\uff1a\u4e0a\u4e0b\uff0c\u5de6\u53f3\uff1b")),(0,n.kt)("h2",{id:"\u5bf9\u8c61\u8c03\u7528\u7684this\u6307\u5411\u7b49\u7b49this"},"\u5bf9\u8c61\u8c03\u7528\u7684this\u6307\u5411\u7b49\u7b49\uff1fthis\uff01"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"this\u6307\u5411\u5f97\u6539\u53d8\uff0c\u4ee5\u53ca\u7bad\u5934\u51fd\u6570\u548c\u5408\u7406\u4f7f\u7528\u3002",(0,n.kt)("a",{parentName:"li",href:"https://segmentfault.com/a/1190000008400124"},"JavaScript \u7684 this \u6307\u5411\u95ee\u9898\u6df1\u5ea6\u89e3\u6790"),"\u3002this\u4e00\u822c\u6307\u5411\u5f97\u662f\u51fd\u6570\u8fd0\u884c\u65f6\u6240\u5728\u7684\u73af\u5883\u5bf9\u8c61")),(0,n.kt)("h2",{id:"\u4e8b\u4ef6\u5192\u6ce1\u548c\u6355\u83b7\u987a\u5e8f"},"\u4e8b\u4ef6\u5192\u6ce1\u548c\u6355\u83b7\u987a\u5e8f\uff1f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"addEventListener\u7684\u7b2c\u4e09\u4e2a\u53c2\u6570false\u9ed8\u8ba4\u5192\u6ce1\uff0ctrue\u6355\u83b7"),(0,n.kt)("li",{parentName:"ul"},"\u5148\u6355\u83b7\uff0c\u7136\u540e\u5230\u76ee\u6807\u4e8b\u4ef6\uff0c\u518d\u5192\u6ce1\uff1b",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u5192\u6ce1\u7684\u6982\u5ff5\u4e0b\u5728p\u5143\u7d20\u4e0a\u53d1\u751fclick\u4e8b\u4ef6\u7684\u987a\u5e8f\u5e94\u8be5\u662fp -> div -> body -> html -> document"),(0,n.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u6355\u83b7\u7684\u6982\u5ff5\u4e0b\u5728p\u5143\u7d20\u4e0a\u53d1\u751fclick\u4e8b\u4ef6\u7684\u987a\u5e8f\u5e94\u8be5\u662fdocument -> html -> body -> div -> p")))),(0,n.kt)("h2",{id:"script\u6807\u7b7e\u7684\u5c5e\u6027js\u52a0\u8f7d\u6027\u80fd\u4f18\u5316"},"script\u6807\u7b7e\u7684\u5c5e\u6027\uff0cjs\u52a0\u8f7d\u6027\u80fd\u4f18\u5316"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"prefetch, preload, dns-prefetch\uff0cdefer\u548casync")),(0,n.kt)("h2",{id:"\u6b63\u5219\u8868\u8fbe\u5f0f"},"\u6b63\u5219\u8868\u8fbe\u5f0f"),(0,n.kt)("h2",{id:"\u56fe\u7247\u4f7f\u7528img-\u548c-div\u7684\u533a\u522b"},"\u56fe\u7247\u4f7f\u7528img \u548c div\u7684\u533a\u522b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"img:\u6709alt\u5c5e\u6027\uff0c\u4fbf\u4e8e\u8f85\u52a9\u9605\u8bfb\uff1b\u5c5e\u4e8ehtml\u7ed3\u6784\uff0c\u9884\u5148\u52a0\u8f7d\uff0c\u53ef\u4ee5\u53f3\u952e\u53e6\u5b58\u4e3a\uff1balt\u5c5e\u6027\u5229\u4e8eseo\uff1b\u901a\u8fc7src\u83b7\u53d6\uff1b\u884c\u5185\u66ff\u6362\u5143\u7d20\uff0c\u7c7b\u4f3cinline-block\uff1b\u65b9\u4fbf\u5b9e\u73b0\u61d2\u52a0\u8f7d\uff1b"),(0,n.kt)("li",{parentName:"ul"},"bg-image\uff1a\u5c5e\u4e8ecss\uff0c\u5728html\u7ed3\u6784\u52a0\u8f7d\u5b8c\u6210\u4e4b\u540e\u8fdb\u884c\u52a0\u8f7d\uff1b\u9700\u8981\u8bbe\u7f6ebackground\u5c5e\u6027\u6765\u5b9e\u73b0\u56fe\u7247\u7684\u6b63\u5e38\u663e\u793a\uff1b")),(0,n.kt)("h2",{id:"\u884c\u5185\u548c\u5757\u7ea7\u533a\u522b"},"\u884c\u5185\u548c\u5757\u7ea7\u533a\u522b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u884c\u5185\u5143\u7d20\uff1a"),(0,n.kt)("li",{parentName:"ul"},"\u5757\u7ea7\u5143\u7d20\uff1a\u72ec\u5360\u4e00\u884c\uff0c\u76d2\u6a21\u578b\u5bbd\u9ad8\u8fb9\u8ddd\u7b49")),(0,n.kt)("h2",{id:"\u8bed\u4e49\u5316\u6807\u7b7e"},"\u8bed\u4e49\u5316\u6807\u7b7e"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"main\uff0caside\uff0carticle\uff0cfooter\uff0cheader  \n")),(0,n.kt)("h2",{id:"js\u5783\u573e\u56de\u6536\u673a\u5236v8\u7684\u5783\u573e\u56de\u6536\u673a\u5236\u662f\u4ec0\u4e48\u6807\u8bb0\u6e05\u695a\u5185\u5b58\u6574\u7406"},"js\u5783\u573e\u56de\u6536\u673a\u5236(v8\u7684\u5783\u573e\u56de\u6536\u673a\u5236\u662f\u4ec0\u4e48\uff1f\u6807\u8bb0\u6e05\u695a+\u5185\u5b58\u6574\u7406)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u503c\u8d4b\u503c\u4e3anull"),(0,n.kt)("li",{parentName:"ul"},"\u6807\u8bb0\u6e05\u9664\u5b9a\u65f6\u56de\u6536\u673a\u5236"),(0,n.kt)("li",{parentName:"ul"},"\u8001\u7684ie,\u6709\u4e00\u90e8\u5206\u5bf9\u8c61\u4e3ac--\u4e2d\u7684com\uff0c\u5982dom\u548cbom\uff0c\u91c7\u7528\u5f15\u7528\u8ba1\u6570\uff0c\u5faa\u73af\u5f15\u7528\u4e0d\u4f1a\u88ab\u79fb\u9664\u7684\u95ee\u9898"),(0,n.kt)("li",{parentName:"ul"},"\u89e3\u9664\u53d8\u91cf\u7684\u5f15\u7528\uff0c\u53d8\u91cf\u8d4b\u503c\u4e3anull     ")),(0,n.kt)("h2",{id:"\u95ed\u5305\u4f18\u7f3a\u70b9\u5982\u4f55\u91ca\u653e"},"\u95ed\u5305\uff0c\u4f18\u7f3a\u70b9\uff0c\u5982\u4f55\u91ca\u653e"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u5faa\u73af\u5f15\u7528\uff0c\u5916\u90e8dom\u53d8\u91cf\u4fdd\u5b58\u5728\u526f\u672c\u4e2d\uff0c\u7136\u540e\u5c06dom\u5143\u7d20\u8bbe\u7f6e\u4e3anull"),(0,n.kt)("li",{parentName:"ul"},"\u95ed\u5305\u4e2d\u7684this"),(0,n.kt)("li",{parentName:"ul"},"\u503c\u8d4b\u503c\u4e3anull")),(0,n.kt)("h2",{id:"\u79fb\u52a8\u7aef1px\u95ee\u9898"},"\u79fb\u52a8\u7aef1px\u95ee\u9898"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"css\u50cf\u7d20|\u903b\u8f91\u50cf\u7d20\u548c\u7269\u7406\u50cf\u7d20|\u8bbe\u5907\u50cf\u7d20\u7684\u533a\u522b\uff1bpc\u662f1\u6bd41\uff0c\u79fb\u52a8\u7aef\u4e3a\u4e86\u663e\u793a\u66f4\u9ad8\u6e05\uff0c\u4e00\u4e2a\u903b\u8f91\u50cf\u7d20\u53ef\u80fd\u5360\u7528\u4e24\u4e2a\u7269\u7406\uff0c\u5bfc\u81f41px\u663e\u793a\u51fa\u73b0\u95ee\u9898")),(0,n.kt)("h2",{id:"\u5bf9\u8c61\u539f\u578b\u94fe\u6784\u9020\u51fd\u6570new\u4e4b\u540e\u7684\u64cd\u4f5c"},"\u5bf9\u8c61\u539f\u578b\u94fe\uff0c\u6784\u9020\u51fd\u6570\uff0cnew\u4e4b\u540e\u7684\u64cd\u4f5c"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"```\nthis\nconstructor\nprototype\n__proto__(Object.getPrototypeOf)\n```\n")),(0,n.kt)("h2",{id:"\u624b\u5199promiseall"},"\u624b\u5199promise.all"),(0,n.kt)("h2",{id:"\u9632\u6296"},"\u9632\u6296\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"```-js\n//\u9632\u6296\uff1an\u79d2\u5185\u53ea\u89e6\u53d1\u4e00\u6b21\uff0c\u5982\u679c\u53d8\u5316\u8fc7\u5feb\u5219\u6e05\u9664\u8ba1\u65f6\u5668\n    function debounce(func,wait) {\n      let timeout;\n      return function () {\n        let context = this;\n        let args = arguments;\n\n        if (timeout) clearTimeout(timeout);\n\n        let callNow = !timeout;\n        timeout = setTimeout(() => {\n          timeout = null;\n        }, wait)\n\n        if (callNow) func.apply(context, args)\n      }\n    }\n```\n")),(0,n.kt)("h2",{id:"\u8282\u6d41"},"\u8282\u6d41\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"```-js\n//\u8282\u6d41\uff1a\u89e6\u53d1\u8fc7\u5feb\u65f6\u6ca1n\u79d2\u6267\u884c\u4e00\u6b21\n        function throttle(func, wait) {\n          let timeout;\n          return function() {\n            let context = this;\n            let args = arguments;\n            if (!timeout) {\n              timeout = setTimeout(() => {\n                timeout = null;\n                func.apply(context, args)\n              }, wait)\n            }\n          }\n        }\n```\n")),(0,n.kt)("h2",{id:"12mapparseintparseint\u53c2\u6570\u95ee\u9898"},"['1','2']",".map(parseInt)\uff0cparseInt\u53c2\u6570\u95ee\u9898"),(0,n.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u51cf\u5c11http\u8bf7\u6c42\u6570\u91cf\u80fd\u4f18\u5316\u7f51\u9875\u901f\u5ea6\u4e09\u6b21\u63e1\u624b\u56db\u6b21\u6325\u624b\u5f97\u8be6\u60c5"},"\u4e3a\u4ec0\u4e48\u51cf\u5c11http\u8bf7\u6c42\u6570\u91cf\u80fd\u4f18\u5316\u7f51\u9875\u901f\u5ea6\uff0c\u4e09\u6b21\u63e1\u624b\u56db\u6b21\u6325\u624b\u5f97\u8be6\u60c5"),(0,n.kt)("h2",{id:"https\u6d41\u7a0b\u8a73\u89e3"},"HTTPS\u6d41\u7a0b\u8a73\u89e3"),(0,n.kt)("h2",{id:"\u95ed\u5305\u4e2dthis\u7684\u6307\u5411"},"\u95ed\u5305\u4e2dthis\u7684\u6307\u5411"),(0,n.kt)("h2",{id:"\u9996\u9875\u767d\u5c4f\u4f18\u5316\u65b9\u6848"},"\u9996\u9875\u767d\u5c4f\u4f18\u5316\u65b9\u6848"),(0,n.kt)("h2",{id:"react\u548cvue\u7684\u5177\u4f53\u5dee\u522b"},"react\u548cvue\u7684\u5177\u4f53\u5dee\u522b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"vue\u4e2d\u7684diff\u7b97\u6cd5\uff1a\u4ea4\u53c9\u6bd4\u8f83\uff1f")),(0,n.kt)("h2",{id:"\u9047\u5230\u7684\u6ca1\u6709\u8bb0\u6e05\u695a\u7684\u95ee\u9898\u56de\u987e"},"\u9047\u5230\u7684\u6ca1\u6709\u8bb0\u6e05\u695a\u7684\u95ee\u9898\u56de\u987e"),(0,n.kt)("h2",{id:"git-rebase\u7ba1\u7406\u591a\u4e2a\u5206\u652f\u7684commit"},"git rebase\u7ba1\u7406\u591a\u4e2a\u5206\u652f\u7684commit"),(0,n.kt)("h2",{id:"\u5bf9\u5206\u652fcommit\u7684\u5408\u5e76"},"\u5bf9\u5206\u652fcommit\u7684\u5408\u5e76"),(0,n.kt)("h2",{id:"\u540c\u4e00\u4e2acommit\u590d\u5236\u7c98\u8d34\u5230\u4e0d\u540c\u5206\u652f"},"\u540c\u4e00\u4e2acommit\u590d\u5236\u7c98\u8d34\u5230\u4e0d\u540c\u5206\u652f"),(0,n.kt)("h2",{id:"git-commit\u89c4\u8303"},"git ",(0,n.kt)("a",{parentName:"h2",href:"https://juejin.im/post/5afc5242f265da0b7f44bee4"},"commit\u89c4\u8303")),(0,n.kt)("h2",{id:"bfc\u7684\u5b9a\u4e49\u548c\u4f5c\u7528"},"BFC\u7684\u5b9a\u4e49\u548c\u4f5c\u7528"),(0,n.kt)("h2",{id:"css\u5339\u914d\u89c4\u5219"},"css\u5339\u914d\u89c4\u5219"),(0,n.kt)("h2",{id:"\u4ece\u53f3\u5230\u5de6\u5339\u914d\u907f\u514d\u65e0\u6548\u5339\u914d"},"\u4ece\u53f3\u5230\u5de6\u5339\u914d\u907f\u514d\u65e0\u6548\u5339\u914d"),(0,n.kt)("h2",{id:"new\u4e00\u4e2a\u5bf9\u8c61\u53d1\u751f\u4e86\u4ec0\u4e48\u6df1\u5165\u7814\u7a76-ecaovo-\u5bf9\u8c61"},"new\u4e00\u4e2a\u5bf9\u8c61\u53d1\u751f\u4e86\u4ec0\u4e48\u6df1\u5165\u7814\u7a76\uff08 EC\uff0cAO\uff0cVO \u5bf9\u8c61\uff09"),(0,n.kt)("h2",{id:"generatoryield\u662f\u4ec0\u4e48"},"generator/yield\u662f\u4ec0\u4e48"),(0,n.kt)("h2",{id:"\u56de\u6d41\u548c\u91cd\u7ed8documentfragment"},"\b\u56de\u6d41\u548c\u91cd\u7ed8/DocumentFragment"),(0,n.kt)("h2",{id:"\u7406\u89e3json\u4f5c\u4e3a\u6570\u636e\u683c\u5f0f\u548cjs-object\u7684\u533a\u522b\u5982\u4f55\u4e92\u76f8\u8f6c\u6362"},"\u7406\u89e3json\u4f5c\u4e3a\u6570\u636e\u683c\u5f0f\u548cjs object\u7684\u533a\u522b\uff0c\u5982\u4f55\u4e92\u76f8\u8f6c\u6362"),(0,n.kt)("h2",{id:"\u9047\u5230\u7684\u6ca1\u6709\u8bb0\u6e05\u695a\u7684\u95ee\u9898\u56de\u987e-1"},"\u9047\u5230\u7684\u6ca1\u6709\u8bb0\u6e05\u695a\u7684\u95ee\u9898\u56de\u987e"),(0,n.kt)("h2",{id:"git-rebase\u7ba1\u7406\u591a\u4e2a\u5206\u652f\u7684commit-1"},"git rebase\u7ba1\u7406\u591a\u4e2a\u5206\u652f\u7684commit"),(0,n.kt)("h2",{id:"\u91cd\u7ed8\u548c\u56de\u6d41\u6027\u80fd\u4f18\u5316"},"\u91cd\u7ed8\u548c\u56de\u6d41\uff0c\u6027\u80fd\u4f18\u5316"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"transform\u548cposition\u7684\u533a\u522b")),(0,n.kt)("h2",{id:"bfc\u7684\u5177\u4f53\u5b9a\u4e49\u548c\u6e05\u9664bfc\u95ee\u9898\u7684\u65b9\u6cd5"},"BFC\u7684\u5177\u4f53\u5b9a\u4e49\u548c\u6e05\u9664BFC\u95ee\u9898\u7684\u65b9\u6cd5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\uff1a"),(0,n.kt)("li",{parentName:"ul"},"\u65b9\u6cd5\uff1a")),(0,n.kt)("h2",{id:"findmissing1012111416916-\u6570\u7ec4-----\u5bfb\u627e\u6570\u7ec4\u4e2d\u7f3a\u5931\u7684-\u6570\u5b57"},"findMissing(","[10,12,11,14,16]",",9,16) \u6570\u7ec4-----\u5bfb\u627e\u6570\u7ec4\u4e2d\u7f3a\u5931\u7684 \u6570\u5b57"),(0,n.kt)("h2",{id:"react\u4e2d\u7684\u6570\u636eimmuteble\u548cvue\u4e2d\u7684\u6570\u636e\u9a71\u52a8"},"React\u4e2d\u7684\u6570\u636eimmuteble\u548cVue\u4e2d\u7684\u6570\u636e\u9a71\u52a8"),(0,n.kt)("h2",{id:"react\u65b0\u7248\u7684hooksvue30\u65b0\u66f4\u65b0\u7684\u4e1c\u897f"},"React\u65b0\u7248\u7684hooks\uff0cVUE3.0\u65b0\u66f4\u65b0\u7684\u4e1c\u897f"),(0,n.kt)("h2",{id:"bfc\u7684\u5b9a\u4e49\u548c\u4f5c\u7528-1"},"BFC\u7684\u5b9a\u4e49\u548c\u4f5c\u7528"),(0,n.kt)("h2",{id:"react\u4e2dshouldcomponentupdate\u7684\u5177\u4f53\u4f5c\u7528"},"React\u4e2dshouldComponentUpdate\u7684\u5177\u4f53\u4f5c\u7528"),(0,n.kt)("h2",{id:"react\u4e2dreceivedprops\u751f\u547d\u5468\u671f\u7684\u5177\u4f53\u4f5c\u7528\u5b83\u505a\u5230\u4e86\u54ea\u91cc\u7684\u4f18\u5316"},"React\u4e2dreceivedProps\u751f\u547d\u5468\u671f\u7684\u5177\u4f53\u4f5c\u7528\uff0c\u5b83\u505a\u5230\u4e86\u54ea\u91cc\u7684\u4f18\u5316"),(0,n.kt)("h2",{id:"\u4e3a\u4ec0\u4e48js\u9009\u62e9\u5feb\u901f\u6392\u5e8f\u800c\u4e0d\u9009\u62e9\u5f52\u5e76\u6392\u5e8f"},"\u4e3a\u4ec0\u4e48js\u9009\u62e9\u5feb\u901f\u6392\u5e8f\u800c\u4e0d\u9009\u62e9\u5f52\u5e76\u6392\u5e8f"))}m.isMDXComponent=!0}}]);