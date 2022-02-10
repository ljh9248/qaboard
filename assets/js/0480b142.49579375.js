"use strict";(self.webpackChunkApache_2_0=self.webpackChunkApache_2_0||[]).push([[836],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3584:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=a(4996),l=["components"],s={id:"faq",sidebar_label:"FAQ",title:"Frequently Asked Questions"},p=void 0,u={unversionedId:"faq",id:"faq",title:"Frequently Asked Questions",description:"There is a bug I'd like you to know about",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/qaboard/docs/faq",editUrl:"https://github.com/Samsung/qaboard/edit/master/website/docs/docs/faq.md",tags:[],version:"current",frontMatter:{id:"faq",sidebar_label:"FAQ",title:"Frequently Asked Questions"},sidebar:"docs",previous:{title:"Bit Accuracy",permalink:"/qaboard/docs/bit-accuracy"},next:{title:"Troubleshooting",permalink:"/qaboard/docs/backend-admin/troubleshooting"}},d=[{value:"There is a bug I&#39;d like you to know about",id:"there-is-a-bug-id-like-you-to-know-about",children:[],level:2},{value:"What is QA-Board written with?",id:"what-is-qa-board-written-with",children:[],level:2},{value:"Does QA-Board work with <code>python2.7</code>?",id:"does-qa-board-work-with-python27",children:[],level:2},{value:"Where are results saved?",id:"where-are-results-saved",children:[],level:2},{value:"Can I export the data or use a third-party viewer?",id:"can-i-export-the-data-or-use-a-third-party-viewer",children:[],level:2}],c={toc:d};function m(e){var t=e.components,a=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"there-is-a-bug-id-like-you-to-know-about"},"There is a bug I'd like you to know about"),(0,o.kt)("p",null,"Open an issue ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Samsung/qaboard/issues"},"here"),", or even mail ",(0,o.kt)("a",{parentName:"p",href:"mailto:arthur.flam@samsung.com"},"Arthur Flam"),"."),(0,o.kt)("h2",{id:"what-is-qa-board-written-with"},"What is QA-Board written with?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CLI tool")," (wraps your code): ",(0,o.kt)("inlineCode",{parentName:"li"},"python")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Frontend:")," views with ",(0,o.kt)("inlineCode",{parentName:"li"},"reactjs"),", state with ",(0,o.kt)("inlineCode",{parentName:"li"},"reduxjs"),", design with ",(0,o.kt)("inlineCode",{parentName:"li"},"blueprintjs"),", images with ",(0,o.kt)("inlineCode",{parentName:"li"},"openseadragon"),", plots with ",(0,o.kt)("inlineCode",{parentName:"li"},"plotly"),"/",(0,o.kt)("inlineCode",{parentName:"li"},"threejs"),"..."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Backend"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"postgreSQL")," (to store metadata) accessed via ",(0,o.kt)("inlineCode",{parentName:"li"},"flask"))),(0,o.kt)("h2",{id:"does-qa-board-work-with-python27"},"Does QA-Board work with ",(0,o.kt)("inlineCode",{parentName:"h2"},"python2.7"),"?"),(0,o.kt)("p",null,"Well enough! Just call ",(0,o.kt)("inlineCode",{parentName:"p"},"python2 your_code.py")," as any other executable."),(0,o.kt)("h2",{id:"where-are-results-saved"},"Where are results saved?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Local runs")," are saved under the ",(0,o.kt)("em",{parentName:"li"},"output/")," directory in the project."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"During CI runs"),", results are saved under the ",(0,o.kt)("inlineCode",{parentName:"li"},"storage")," defined in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Samsung/qaboard/blob/master/qaboard/sample_project/qaboard.yaml#L119"},(0,o.kt)("em",{parentName:"a"},"qaboard.yaml")),". To be honest, the exact naming conventions is complicated... ",(0,o.kt)("strong",{parentName:"li"},"Export the data using the UI's export utilities, or ask QA-Board' simple API.")," ")),(0,o.kt)("h2",{id:"can-i-export-the-data-or-use-a-third-party-viewer"},"Can I export the data or use a third-party viewer?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Yes!")," All the outputs are saved as files, and QA-Board provides multiple ways to get them out."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"At the moment nothing prevents your from modifying/destroying files created from the CI."))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},'In the "Visualization" tab, an export utility')," lets you copy-to-clipboard a path with filtered/nicely-renamed results/files: "),(0,o.kt)("img",{alt:"Export batch outputs",src:(0,i.Z)("img/export-files-viz.jpg")})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Next to each output"),", there is always a button to copy-to-clipboard the path to the files it created."))),(0,o.kt)("img",{alt:"Export batch outputs",src:(0,i.Z)("img/export-files-output.jpg")}),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"From the Navigation bar"),", you can copy-to-clipboard the windows-ish path where each commit saves its results:"),(0,o.kt)("img",{alt:"Export batch outputs",src:(0,i.Z)("img/export-files-commit.jpg")})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You can also ",(0,o.kt)("strong",{parentName:"p"},"programmatically access QA-Board's data")," by ",(0,o.kt)("a",{parentName:"p",href:"api"},"querying its API"),"."))))}m.isMDXComponent=!0}}]);