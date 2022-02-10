"use strict";(self.webpackChunkApache_2_0=self.webpackChunkApache_2_0||[]).push([[7968],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return f}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),l=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=l(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),d=l(a),f=n,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return a?r.createElement(m,o(o({ref:e},u),{},{components:a})):r.createElement(m,o({ref:e},u))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=d;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:n,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5161:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),o=a(4996),c=["components"],s={id:"artifacts",sidebar_label:"Artifacts",title:"Artifacts"},l=void 0,u={unversionedId:"storage/artifacts",id:"storage/artifacts",title:"Artifacts",description:"Artifacts are needed by QA-Board to start tuning experiments",source:"@site/docs/storage/artifacts.md",sourceDirName:"storage",slug:"/storage/artifacts",permalink:"/qaboard/docs/storage/artifacts",editUrl:"https://github.com/Samsung/qaboard/edit/master/website/docs/docs/storage/artifacts.md",tags:[],version:"current",frontMatter:{id:"artifacts",sidebar_label:"Artifacts",title:"Artifacts"},sidebar:"docs",previous:{title:"Where is the data?",permalink:"/qaboard/docs/storage/where-is-the-data"},next:{title:"Deleting Old Data",permalink:"/qaboard/docs/storage/deleting-old-data"}},p=[{value:"What are artifacts?",id:"what-are-artifacts",children:[],level:2},{value:"Defining artifacts",id:"defining-artifacts",children:[],level:2},{value:"How to save artifacts?",id:"how-to-save-artifacts",children:[],level:2}],d={toc:p};function f(t){var e=t.components,a=(0,n.Z)(t,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Artifacts are needed by QA-Board to start tuning experiments"),(0,i.kt)("h2",{id:"what-are-artifacts"},"What are artifacts?"),(0,i.kt)("p",null,"To run your code, you generally need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"binaries compiled automatically during the continuous integration."),(0,i.kt)("li",{parentName:"ul"},"wrapper scripts..."),(0,i.kt)("li",{parentName:"ul"},"depending on how you view things, trained networks or calibrated data.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Defining those as artifacts makes it possible to upload them to QA-Board's storage, then start tuning experiments.")),(0,i.kt)("h2",{id:"defining-artifacts"},"Defining artifacts"),(0,i.kt)("p",null,"Artifacts are defined with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="qaboard.yaml"',title:'"qaboard.yaml"'},'# Basic example\nartifacts:\n  binary:\n    glob: build/binary\n  configurations:\n    globs:\n    - configurations/*.json\n    - "*.yaml"\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For convenience, ",(0,i.kt)("em",{parentName:"p"},"qaboard.yaml")," and ",(0,i.kt)("em",{parentName:"p"},"qa/")," are pre-defined as artifacts."))),(0,i.kt)("p",null,'In QA-Board, you can view each commit\'s artifacts in the "Configuration" tab.'),(0,i.kt)("img",{alt:"Artifacts",src:(0,o.Z)("img/artifacts-tab.jpg")}),(0,i.kt)("h2",{id:"how-to-save-artifacts"},"How to save artifacts?"),(0,i.kt)("p",null,"After your build is done, call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"qa save-artifacts\n")),(0,i.kt)("p",null,"Usually you can do it simply in your CI tool:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="gitlab-ci.yml"',title:'"gitlab-ci.yml"'},"after_script:\n  - qa save-artifacts\n")))}f.isMDXComponent=!0}}]);