"use strict";(self.webpackChunkApache_2_0=self.webpackChunkApache_2_0||[]).push([[3101],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),u=r,g=p["".concat(s,".").concat(u)]||p[u]||m[u]||o;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2759:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={id:"deleting-old-data",sidebar_label:"Deleting Old Data",title:"Deleting Old Outputs and Artifacts"},s=void 0,d={unversionedId:"storage/deleting-old-data",id:"storage/deleting-old-data",title:"Deleting Old Outputs and Artifacts",description:"QA-Board lets you erase old outputs after a period of time.",source:"@site/docs/storage/deleting-old-data.md",sourceDirName:"storage",slug:"/storage/deleting-old-data",permalink:"/qaboard/docs/storage/deleting-old-data",editUrl:"https://github.com/Samsung/qaboard/edit/master/website/docs/docs/storage/deleting-old-data.md",tags:[],version:"current",frontMatter:{id:"deleting-old-data",sidebar_label:"Deleting Old Data",title:"Deleting Old Outputs and Artifacts"},sidebar:"docs",previous:{title:"Artifacts",permalink:"/qaboard/docs/storage/artifacts"},next:{title:"Triggering External Tools",permalink:"/qaboard/docs/triggering-third-party-tools"}},c=[{value:"What data will <em>not</em> be deleted",id:"what-data-will-not-be-deleted",children:[],level:2},{value:"Configuring garbage collection",id:"configuring-garbage-collection",children:[],level:2},{value:"Recovering lost data?",id:"recovering-lost-data",children:[],level:2},{value:"Deleting commit artifacts",id:"deleting-commit-artifacts",children:[],level:2}],m={toc:c};function p(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"QA-Board lets you erase old outputs after a period of time."),(0,o.kt)("h2",{id:"what-data-will-not-be-deleted"},"What data will ",(0,o.kt)("em",{parentName:"h2"},"not")," be deleted"),(0,o.kt)("p",null,"Outputs from commits that are either:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Recent (more info below)"),(0,o.kt)("li",{parentName:"ul"},"On the ",(0,o.kt)("inlineCode",{parentName:"li"},"project.reference_branch")," from ",(0,o.kt)("em",{parentName:"li"},"qaboard.yaml"),"."),(0,o.kt)("li",{parentName:"ul"},"Are on a ",(0,o.kt)("strong",{parentName:"li"},"commit/tag/branch")," listed as a ",(0,o.kt)("inlineCode",{parentName:"li"},"project.milestones")," in ",(0,o.kt)("em",{parentName:"li"},"qaboard.yaml"),"."),(0,o.kt)("li",{parentName:"ul"},"Are a milestone defined from QA-Board's UI.")),(0,o.kt)("p",null,'Files "Exported" from QA-Board\'s UI are never deleted. You can do it yourself if needed. ',(0,o.kt)("strong",{parentName:"p"},"TODO:")," track them at least!"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"QA-Board will set as a commit's branch the first it was seen on. If you merge with fast-forward rebased branches, then this information will not be what you expect. "))),(0,o.kt)("h2",{id:"configuring-garbage-collection"},"Configuring garbage collection"),(0,o.kt)("p",null,"Data can be erased after a period of time where the commit has no new outputs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="qaboard.yaml"',title:'"qaboard.yaml"'},"storage:\n  garbage:\n    after: 1month\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"after:")," supports human-readable values like ",(0,o.kt)("em",{parentName:"p"},"2weeks"),", ",(0,o.kt)("em",{parentName:"p"},"1year"),", ",(0,o.kt)("em",{parentName:"p"},"3months"),"..."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"TODO")," Right now we only clean data for repositories ",(0,o.kt)("a",{parentName:"p",href:"/docs/project-init"},"that have an integration with Gitlab"),"."))),(0,o.kt)("h2",{id:"recovering-lost-data"},"Recovering lost data?"),(0,o.kt)("p",null,"Well, you won't be able to do that. What you should try to do is make everything ",(0,o.kt)("strong",{parentName:"p"},"reproducable"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Define your whole ",(0,o.kt)("em",{parentName:"li"},"environment as code"),". Make sure your commits contain 100% of what is needed for your code to run. Tools you can use include ",(0,o.kt)("inlineCode",{parentName:"li"},"docker+Dockerfile"),", etc."),(0,o.kt)("li",{parentName:"ul"},"Make it easy to re-trigger your CI, so that it's straightfoward to re-builds, re-run your tests, and uploads artifacts to QA-Board."),(0,o.kt)("li",{parentName:"ul"},"If necessary, make it also very easy to run manually something like")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout $hexsha\nmake\nqa save-artifacts\nqa batch my-batch\n")),(0,o.kt)("h2",{id:"deleting-commit-artifacts"},"Deleting commit artifacts"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Artifacts")," are not deleted by default, you have to ask for it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'{4,5} title="qaboard.yaml"',"{4,5}":!0,title:'"qaboard.yaml"'},"storage:\n  garbage:\n    after: 1month\n    artifacts:\n      delete: true\n")),(0,o.kt)("p",null,'If you want to keep some artifacts (maybe "small" coverage reports defined as ',(0,o.kt)("inlineCode",{parentName:"p"},"coverage_report: ...")," in ",(0,o.kt)("em",{parentName:"p"},"qaboard.yaml"),"'s artifacts)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{6-7}","{6-7}":!0},"storage:\n  garbage:\n    after: 1month\n    artifacts:\n      delete: true\n      keep:\n      - coverage_report\n      # also supports relative artifacts paths, e.g.\n      - build/my_binary\n")),(0,o.kt)("p",null,"Notes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The settings that are used are those in the latest commit of the ",(0,o.kt)("inlineCode",{parentName:"li"},"reference_branch")," defined in ",(0,o.kt)("em",{parentName:"li"},"qaboard.yaml")," "),(0,o.kt)("li",{parentName:"ul"},"If you change those settings, artifacts for already deleted commits don't get deleted."),(0,o.kt)("li",{parentName:"ul"},"When a ",(0,o.kt)("inlineCode",{parentName:"li"},"qa run")," uses a commit that was deleted, or if you upload manifests for a deleted commit, it is marked as undeleted.")))}p.isMDXComponent=!0}}]);