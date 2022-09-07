"use strict";(self.webpackChunkblogs=self.webpackChunkblogs||[]).push([[1239],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),g=r,f=u["".concat(s,".").concat(g)]||u[g]||m[g]||l;return t?o.createElement(f,a(a({ref:n},p),{},{components:t})):o.createElement(f,a({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,a=new Array(l);a[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var c=2;c<l;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3668:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var o=t(7462),r=(t(7294),t(3905));const l={slug:"frontEnd/js",title:"js",authors:[{name:"Fei Peng",title:"Front-end developer",url:"https://github.com/PENGFEI-CN",image_url:"https://github.com/PENGFEI-CN.png",tags:["blogs","front-end"]}]},a=void 0,i={permalink:"/blogs/blog/frontEnd/js",source:"@site/blog/notes/\u524d\u7aef\u7279\u6027/js.md",title:"js",description:"\u4e8b\u4ef6\u5faa\u73af\u673a\u5236",date:"2022-09-07T02:52:33.000Z",formattedDate:"2022\u5e749\u67087\u65e5",tags:[],readingTime:3.465,hasTruncateMarker:!1,authors:[{name:"Fei Peng",title:"Front-end developer",url:"https://github.com/PENGFEI-CN",image_url:"https://github.com/PENGFEI-CN.png",tags:["blogs","front-end"],imageURL:"https://github.com/PENGFEI-CN.png"}],frontMatter:{slug:"frontEnd/js",title:"js",authors:[{name:"Fei Peng",title:"Front-end developer",url:"https://github.com/PENGFEI-CN",image_url:"https://github.com/PENGFEI-CN.png",tags:["blogs","front-end"],imageURL:"https://github.com/PENGFEI-CN.png"}]},prevItem:{title:"html",permalink:"/blogs/blog/frontEnd/html"},nextItem:{title:"\u6d4f\u89c8\u5668",permalink:"/blogs/blog/frontEnd/\u6d4f\u89c8\u5668"}},s={authorsImageUrls:[void 0]},c=[{value:"\u4e8b\u4ef6\u5faa\u73af\u673a\u5236",id:"\u4e8b\u4ef6\u5faa\u73af\u673a\u5236",level:2},{value:"\u539f\u578b\u94fe",id:"\u539f\u578b\u94fe",level:2},{value:"\u5173\u4e8eES6\u548cCommonJS\u6a21\u5757\u5316\u95ee\u9898",id:"\u5173\u4e8ees6\u548ccommonjs\u6a21\u5757\u5316\u95ee\u9898",level:2}],p={toc:c};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4e8b\u4ef6\u5faa\u73af\u673a\u5236"},"\u4e8b\u4ef6\u5faa\u73af\u673a\u5236"),(0,r.kt)("p",null,"\u6240\u6709\u4efb\u52a1\u90fd\u5728\u4e3b\u7ebf\u7a0b\u4e0a\u6267\u884c\uff0c\u5373\u6267\u884c\u6808(Execution Context Stack)\uff0c\u800cJS\u6267\u884c\u4efb\u52a1\u7684\u961f\u5217\u53ef\u4ee5\u5212\u5206\u4e3a\u5fae\u4efb\u52a1\uff08ES6\u4e2d\u79f0\u4f5cPromiseJobs\uff09\u548c\u5b8f\u4efb\u52a1\uff08ES6\u4e2d\u79f0\u4f5cScriptJobs\uff09\u961f\u5217\uff0c\u6267\u884c\u987a\u5e8f\u53ef\u4ee5\u5206\u4e3a\u4e09\u6b65"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4e3b\u7ebf\u7a0b\u6267\u884c\u6240\u6709\u7684\u521d\u59cb\u5316\u540c\u6b65\u4efb\u52a1\u4ee3\u7801"),(0,r.kt)("li",{parentName:"ol"},"\u8bfb\u53d6\u5e76\u6267\u884c\u5fae\u4efb\u52a1\u961f\u5217\u7684\u5168\u90e8\u4efb\u52a1"),(0,r.kt)("li",{parentName:"ol"},"\u8bfb\u53d6\u5e76\u6267\u884c\u6240\u6709\u7684\u5b8f\u4efb\u52a1")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5177\u4f53\u6267\u884c\u987a\u5e8f\u53ef\u4ee5\u770b\u4f5c \u4e3b\u7a0b\u5e8f\u4ee3\u7801\u2014>process.nextTick\u2014>Promise.then|async await\u540e\u7684\u8bed\u53e5\u2014\u2014>setTimeout|setInterval\u2014\u2014>setImmediate\u2014\u2014> I/O\u2014\u2014>UI rendering",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u4ee5v8\u5f15\u64ce\u4e3e\u4f8b\nsetImmediate(function() {\n    console.log(1);\n});\n\nsetTimeout(function() {\n    console.log(2);\n}, 0);\n\nnew Promise(function(resolve) {\n    console.log(3);\n    resolve();\n    console.log(4);\n}).then(function() {\n    console.log(5);\n});\n\nconsole.log(6);\n\nprocess.nextTick(function() {\n    console.log(7);\n});\n\nasync function getData(){\n    console.log(8)\n}\n\nasync function readData() {\n    console.log(9);\n    await getData();\n    console.log(10);\n}\n\nreadData();\n")),"  \u8f93\u51fa\u7ed3\u679c\u4e3a",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"3\n4\n6\n9\n8 // \u4e0a\u9762\u90fd\u4e3a\u4e3b\u7a0b\u5e8f\u6267\u884c\u7684\u540c\u6b65\u4ee3\u7801\u7684\u8f93\u51fa\n7 // process.nextTick\n5 // promise.then\n10 // await\u540e\n1 // setImmediate\n2 // setTimeout\n")))),(0,r.kt)("h2",{id:"\u539f\u578b\u94fe"},"\u539f\u578b\u94fe"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7b80\u5355\u6765\u8bf4\u5c31\u662f\u6784\u9020\u51fd\u6570\u4f1a\u6709\u4e00\u4e2aprototype\u5c5e\u6027\u6307\u5411\u539f\u578b\u5bf9\u8c61\uff0c\u800c\u7531\u6b64\u51fd\u6570\u521b\u5efa\u51fa\u7684\u5b9e\u4f8b\u4f1a\u6709\u4e00\u4e2a\u9690\u5f0f\u7684",(0,r.kt)("strong",{parentName:"li"},"proto"),"\u5c5e\u6027\u540c\u6837\u6307\u5411\u539f\u578b\u5bf9\u8c61\uff0c\u4e14\u539f\u578b\u5bf9\u8c61\u4e2d\u9ed8\u8ba4\u5e26\u6709 constructor \u5c5e\u6027\u6307\u5411\u7684\u662f\u6784\u9020\u51fd\u6570\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5f53\u8bbf\u95ee\u5b9e\u4f8b\u4e0a\u6ca1\u6709\u7684\u5c5e\u6027\u53ca\u65b9\u6cd5\u65f6\uff0c\u4f1a\u6cbf\u7740\u539f\u578b\u94fe\u4e00\u76f4\u5411\u4e0a\u904d\u5386\u539f\u578b\u5bf9\u8c61\u4e0a\u662f\u5426\u6709\u5bf9\u5e94\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u539f\u578b\u94fe\u7684\u9876\u7aef\u662fObject\u7684\u539f\u578b\u5bf9\u8c61"),(0,r.kt)("li",{parentName:"ul"},"instanceof\u3001isPrototypeOf\u53ef\u4ee5\u7528\u6765\u68c0\u6d4b\u539f\u578b\u94fe\u7684\u7ee7\u627f\u5173\u7cfb",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'function Person (name) {\n    this.name = name;\n    this.sayName = function () {\n        console.log(this.name)\n    }\n}\n\nfunction Child() {}\n\nlet personB = new Person("Banana")\n\nChild.prototype = personB;\n\nlet child = new Child()\n\nchild.sayName()\n\nlet person = new Person("Apple")\n\nperson.sayName()\n\nconsole.log(child.__proto__ === Child.prototype) // \u5b9e\u4f8b\u7684__proto__\u6307\u5411\u539f\u578b\u5bf9\u8c61\uff0cprototype\u4e00\u6837\nconsole.log(Child.prototype === personB) // \u6307\u5411\u539f\u578b\u5bf9\u8c61\uff0c\nconsole.log(Child.prototype.constructor === Person) // constructor\u6307\u5411\u539f\u578b\u5bf9\u8c61new Person("Banana")\u5bf9\u5e94\u7684\u6784\u9020\u51fd\u6570\u4e5f\u5c31\u662fPerson\n\nconsole.log(child instanceof Person)\nconsole.log(child instanceof Object)  // instanceof\u68c0\u6d4b\u6784\u9020\u51fd\u6570\u7684 prototype \u5c5e\u6027\u662f\u5426\u51fa\u73b0\u5728\u67d0\u4e2a\u5b9e\u4f8b\u5bf9\u8c61\u7684\u539f\u578b\u94fe\u4e0a\n\nconsole.log(Person.prototype.isPrototypeOf(child)) // isPrototypeOf\u68c0\u6d4b\u4e00\u4e2a\u5bf9\u8c61\u662f\u5426\u5b58\u5728\u4e8e\u53e6\u4e00\u4e2a\u5bf9\u8c61\u7684\u539f\u578b\u94fe\n')))),(0,r.kt)("h2",{id:"\u5173\u4e8ees6\u548ccommonjs\u6a21\u5757\u5316\u95ee\u9898"},(0,r.kt)("a",{parentName:"h2",href:"https://zhuanlan.zhihu.com/p/422704350"},"\u5173\u4e8eES6\u548cCommonJS\u6a21\u5757\u5316\u95ee\u9898")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"CommonJS \u6a21\u5757\u662f\u987a\u5e8f\u6267\u884c\u7684\uff0c\u9047\u5230 require \u65f6\uff0c\u52a0\u8f7d\u5e76\u6267\u884c\u5bf9\u5e94\u6a21\u5757\u7684\u4ee3\u7801\uff0c\u7136\u540e\u518d\u56de\u6765\u6267\u884c\u5f53\u524d\u6a21\u5757\u7684\u4ee3\u7801\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u5faa\u73af\u5f15\u7528\u65f6\uff0c\u5728\u6a21\u5757\u6267\u884c\u524d\u5c31\u4f1a\u521b\u5efa\u597d\u5bf9\u5e94\u7684\u6a21\u5757\u5bf9\u8c61\u5e76\u8fdb\u884c\u7f13\u5b58\uff0c\u5c3d\u7ba1\u662f\u4e00\u4e2a\u7a7a\u5bf9\u8c61\uff0c\u4f46\u662f\u4e00\u822c\u4e0d\u4f1a\u5bfc\u81f4JS\u62a5\u9519\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ES6 \u6a21\u5757\u501f\u52a9 JS \u5f15\u64ce\u5b9e\u73b0\uff0c\u5177\u4f53\u5206\u4e3a\u8fde\u63a5\u548c\u8bc4\u4f30\u9636\u6bb5\uff0c\u4ece\u6548\u679c\u4e0a\u770b\uff0c\u5b50\u6a21\u5757\u5148\u4e8e\u7236\u6a21\u5757\u88ab\u6267\u884c\u3002"),(0,r.kt)("li",{parentName:"ul"},"ES6 \u6a21\u5757\u7684\u5bfc\u5165\u5bfc\u51fa\u8bed\u53e5\u7684\u4f4d\u7f6e\u4e0d\u5f71\u54cd\u6a21\u5757\u4ee3\u7801\u8bed\u53e5\u7684\u6267\u884c\u7ed3\u679c\u3002")))))}m.isMDXComponent=!0}}]);