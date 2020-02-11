(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{155:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return b}));var r=a(1),n=a(9),o=(a(0),a(167)),l={title:"Introducing QA-Board: R&D Platform",author:"Arthur Flam",authorURL:"https://shapescience.xyz/",authorFBID:508446717},i={permalink:"/qaboard/blog/2019/04/24/introducing-qatools",source:"@site/blog/2019-04-24-introducing-qatools.md",description:"## What is qatools made of?\r",date:"2019-04-24T00:00:00.000Z",tags:[],title:"Introducing QA-Board: R&D Platform"},c=[{value:"What is qatools made of?",id:"what-is-qatools-made-of",children:[]},{value:"How does Docusaurus work?",id:"how-does-docusaurus-work",children:[]},{value:"qatools may not be a great fit",id:"qatools-may-not-be-a-great-fit",children:[]},{value:"qatools may not be a great fit for you if",id:"qatools-may-not-be-a-great-fit-for-you-if",children:[]},{value:"Usage",id:"usage",children:[]},{value:"open source tech blocker",id:"open-source-tech-blocker",children:[]},{value:"CI",id:"ci",children:[]}],u={rightToc:c};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"what-is-qatools-made-of"},"What is qatools made of?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"a client library"),Object(o.b)("li",{parentName:"ul"},"..a web application that displays results.")),Object(o.b)("p",null,"Icon? Maybe ask samsung design. Chekc github how they do it...."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"papillon (spent a lot of effort preparing), chrysalide"),Object(o.b)("li",{parentName:"ul"},"diamond (too common?)"),Object(o.b)("li",{parentName:"ul"},"bar char (too simple)"),Object(o.b)("li",{parentName:"ul"},"boxplot (hard to recognize? geek? narrow)"),Object(o.b)("li",{parentName:"ul"},"caniche (looking good?)"),Object(o.b)("li",{parentName:"ul"},"colorful fish, bird."),Object(o.b)("li",{parentName:"ul"},"Etoile de mer?")),Object(o.b)("p",null,"Check: CometML docs, polyaxon, MLflow, NNI microsoft"),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"#",alt:"cool image"}))),Object(o.b)("p",null,"We are very happy to introduce ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#"}),"qatools")," to help algorithm enginneers build products with powerful QA tools."),Object(o.b)("p",null,"We created ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#"}),"qatools")," for the following reasons:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Focus on experimenting algorithms, not worrying about the QA infrastructure."),Object(o.b)("li",{parentName:"ul"},"Most comparable tools focus on training for machine learning. Our use cases revolve around qualitative outputs. Hence, we feature advanced visualizations: out-of-the-box viewers for images, pointclouds, plotly, HTML, etc."),Object(o.b)("li",{parentName:"ul"},"Make it easy for engineers and QA to compare different algorithms, configurations, perform tuning, and share their results.\nAnd, finally, to provide a consistent look and feel across QA for all of our algorithms projects.")),Object(o.b)("h2",{id:"how-does-docusaurus-work"},"How does Docusaurus work?"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docusaurus.io/blog/2017/12/14/introducing-docusaurus"}),"https://docusaurus.io/blog/2017/12/14/introducing-docusaurus")),Object(o.b)("h2",{id:"qatools-may-not-be-a-great-fit"},"qatools may not be a great fit"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"You want reporting, integraton with git")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Need ")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Shared and persistent database of results. Tensorboard is temporary")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Need to handle multiple projects")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Doing low-level optimization or hardware design: you need to worry about (1) bit-accuracy of the new code (2) tools to understand your tradeoffs "))),Object(o.b)("h2",{id:"qatools-may-not-be-a-great-fit-for-you-if"},"qatools may not be a great fit for you if"),Object(o.b)("p",null,"It is a step above notebooks"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"you need to manage long training sessions, and need live training feedback"),Object(o.b)("li",{parentName:"ul"},"you")),Object(o.b)("h1",{id:"what-you-still-need---to-integrate-with-qatools"},"What you still need   to integrate with qatools"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"task-runner infrastructure: internally we use X. TODO: sample Celery integration."),Object(o.b)("li",{parentName:"ul"},"deployment infrastructure"),Object(o.b)("li",{parentName:"ul"},"model and database versionning"),Object(o.b)("li",{parentName:"ul"},"CI: qatools doesn't do automation, triggers... Your CI should call it.")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"Follow the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://gitlab-srv/common-infrastructure/qatools/wikis/step-by-step-tutorial"}),"tutorial"),".\nHow does it work, concretely?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You need to write a ",Object(o.b)("inlineCode",{parentName:"li"},"run()")," python function that wraps your code. It gives you a CLI interface (eg ",Object(o.b)("inlineCode",{parentName:"li"},"qa run --input my_input"),") for local development."),Object(o.b)("li",{parentName:"ul"},"A configuration file, ",Object(o.b)("em",{parentName:"li"},"qatools.yaml"),", describes metadata like how to find your inputs, what outputs and metrics you expect, etc."),Object(o.b)("li",{parentName:"ul"},"... after init, print link to the project's integration page"),Object(o.b)("li",{parentName:"ul"},"? need to start server first ? (docker commands), qa init should get the URL, unless we default to the hosted version. Still need stuff like git permissions to clone, project namespace... (maybe provide a deploy key, or setup as a 2FA application? maybe offer inputs, with default...)"),Object(o.b)("li",{parentName:"ul"},"API if no results, None, just 200 empty list..."),Object(o.b)("li",{parentName:"ul"},"Results are automatically")),Object(o.b)("h2",{id:"open-source-tech-blocker"},"open source tech blocker"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"rename dvs/slamvizapp => qatools/frontend + qatools/backend; common-infrastrcture/qatools => qatools/cli"),Object(o.b)("li",{parentName:"ul"},"storage: need to review linux/windows: offer eg s8, make it clearer"),Object(o.b)("li",{parentName:"ul"},"github integration, per-project repo host, permissions, integrations like user pictures..."),Object(o.b)("li",{parentName:"ul"},"replace lsf with eg celery, make it pluggable (qatools","[lsf]","), so also need to carve it out of the server..."),Object(o.b)("li",{parentName:"ul"},"grep arthurf, grep dvs, grep tof..."),Object(o.b)("li",{parentName:"ul"},"unified devops: docker compose the 2 IIFS, the server, terminate https once...")),Object(o.b)("h2",{id:"ci"},"CI"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'ssh ispq@ispq-vdi\nbash\nexport GITLAB_RUNNER=1\nexport GITLAB_PROJECT=qatools\nexport GITLAB_TOKEN="xxxxxxxx"\n')),Object(o.b)("p",null,"Getting Started"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Installation"),Object(o.b)("li",{parentName:"ul"},"=> readme"),Object(o.b)("li",{parentName:"ul"},"qa init\nCLI features"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"qa run"),", how to find tests, ",Object(o.b)("inlineCode",{parentName:"li"},"run()")),Object(o.b)("li",{parentName:"ul"},"recipies for the run function:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"command, docker, direct python"),Object(o.b)("li",{parentName:"ul"},"platform, android..."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"qa batch"),", groups of tests"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"qa check-bit-accuracy")," "),Object(o.b)("li",{parentName:"ul"},"CI integration: ",Object(o.b)("inlineCode",{parentName:"li"},"qa get --input output_directory"),"\nVisualizations\nTuning from the web UI"),Object(o.b)("li",{parentName:"ul"},"needed: artifacts, define and save"),Object(o.b)("li",{parentName:"ul"},"tuning"),Object(o.b)("li",{parentName:"ul"},"optimization"),Object(o.b)("li",{parentName:"ul"},"custom env? docker?")),Object(o.b)("p",null,"Guides"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"working with sub-projects"),Object(o.b)("li",{parentName:"ul"},"bit-accuracy: custom inputs"),Object(o.b)("li",{parentName:"ul"},"generating reports, exporting/re-using results: API"),Object(o.b)("li",{parentName:"ul"},"inputs metadata: computing custom metrics per test"),Object(o.b)("li",{parentName:"ul"},"Machine learning: working on whole databases"),Object(o.b)("li",{parentName:"ul"},"Creating meta-benchmarks (TODO)")),Object(o.b)("p",null,"Admin Guides"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Starting a qatools server / restarting the server"),Object(o.b)("li",{parentName:"ul"},"qatools's own CI"),Object(o.b)("li",{parentName:"ul"},"database backups")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"create sample docs structure with empty files"),Object(o.b)("li",{parentName:"ul"},"add pages with the wiki"),Object(o.b)("li",{parentName:"ul"},"serve docs on ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://qa/docs"}),"https://qa/docs")),Object(o.b)("li",{parentName:"ul"},"remove wiki (point to docs)")))}b.isMDXComponent=!0},167:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=n.a.createContext({}),b=function(e){var t=n.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},s=function(e){var t=b(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=b(a),m=r,d=s["".concat(l,".").concat(m)]||s[m]||p[m]||o;return a?n.a.createElement(d,i({ref:t},u,{components:a})):n.a.createElement(d,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);