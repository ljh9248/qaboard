"use strict";(self.webpackChunkApache_2_0=self.webpackChunkApache_2_0||[]).push([[3430],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(s,".").concat(d)]||p[d]||g[d]||a;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5027:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return g},default:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=n(4996),l=["components"],s={id:"tuning-workflows",sidebar_label:"Tuning Workflows",title:"Various Tuning Workflows"},u=void 0,c={unversionedId:"tuning-workflows",id:"tuning-workflows",title:"Various Tuning Workflows",description:"Tuning from QA-Board",source:"@site/docs/tuning-workflows.md",sourceDirName:".",slug:"/tuning-workflows",permalink:"/qaboard/docs/tuning-workflows",editUrl:"https://github.com/Samsung/qaboard/edit/master/website/docs/docs/tuning-workflows.md",tags:[],version:"current",frontMatter:{id:"tuning-workflows",sidebar_label:"Tuning Workflows",title:"Various Tuning Workflows"},sidebar:"docs",previous:{title:"APIs",permalink:"/qaboard/docs/apis"},next:{title:"Defining Pipelines / DAG",permalink:"/qaboard/docs/dag-pipelines"}},g=[{value:"Tuning from QA-Board",id:"tuning-from-qa-board",children:[],level:2},{value:"Investigating results/configs you see in the UI",id:"investigating-resultsconfigs-you-see-in-the-ui",children:[],level:2},{value:"Workflows used for Tuning",id:"workflows-used-for-tuning",children:[{value:"<strong>Local</strong> Workflow",id:"local-workflow",children:[],level:3},{value:"<strong>Local configs &gt; SharedStorage &gt; Tuning from QA-Board</strong> Workflow",id:"local-configs--sharedstorage--tuning-from-qa-board-workflow",children:[],level:3},{value:"<strong>Local &gt; QA-Board</strong> Workflow",id:"local--qa-board-workflow",children:[],level:3},{value:"<strong>Commit &gt; CI &gt; QA-Board</strong> Qorkflow",id:"commit--ci--qa-board-qorkflow",children:[],level:3}],level:2}],p={toc:g};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"tuning-from-qa-board"},"Tuning from QA-Board"),(0,a.kt)("p",null,"When doing QA or during development, you often want to run the code/configs from a given commit on new tests. QA-Board lets you define and runs batches of tests with extra tuning parameters:"),(0,a.kt)("img",{alt:"Tuning from the UI",src:(0,i.Z)("img/tuning-from-the-ui.jpg")}),(0,a.kt)("h2",{id:"investigating-resultsconfigs-you-see-in-the-ui"},"Investigating results/configs you see in the UI"),(0,a.kt)("p",null,"Every time you see an output in the web application, you see what configurations were used, and you can easily open the output directory:"),(0,a.kt)("img",{alt:"Copy the Windows output dir",src:(0,i.Z)("img/output-windows-dir.jpg")}),(0,a.kt)("img",{alt:"Output directory from Windows",src:(0,i.Z)("img/winows-explorer-output-dir.jpg")}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The output logs always show you the exact CLI commands that were used, so that reproducing results is only a ",(0,a.kt)("inlineCode",{parentName:"p"},"git checkout $revision ; make ; qa run")," away.")),(0,a.kt)("h2",{id:"workflows-used-for-tuning"},"Workflows used for Tuning"),(0,a.kt)("h3",{id:"local-workflow"},(0,a.kt)("strong",{parentName:"h3"},"Local")," Workflow"),(0,a.kt)("p",null,"If you already have great development/debugging tools, use them!"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"At SIRC, ",(0,a.kt)("inlineCode",{parentName:"li"},"CDE")," provides a great environment to run hardware chains and view images.**"),(0,a.kt)("li",{parentName:"ul"},"For deep learning ",(0,a.kt)("inlineCode",{parentName:"li"},"tensorboard")," is a great tool to investigate NNs."),(0,a.kt)("li",{parentName:"ul"},"Many people love to write one-off ",(0,a.kt)("inlineCode",{parentName:"li"},"matlab")," script.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can continue to use the existing tools!")),(0,a.kt)("p",null,"This said, it's worth having your IDE/debugger/scripts call your code via QA-Board's ",(0,a.kt)("inlineCode",{parentName:"p"},"qa")," CLI. ",(0,a.kt)("a",{parentName:"p",href:"debugging-runs-with-an-IDE"},"Here is how to do it"),"."),(0,a.kt)("h3",{id:"local-configs--sharedstorage--tuning-from-qa-board-workflow"},(0,a.kt)("strong",{parentName:"h3"},"Local configs > SharedStorage > Tuning from QA-Board")," Workflow"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Details: WIP")),(0,a.kt)("h3",{id:"local--qa-board-workflow"},(0,a.kt)("strong",{parentName:"h3"},"Local > QA-Board")," Workflow"),(0,a.kt)("p",null,"QA-Board lets you runs your ",(0,a.kt)("em",{parentName:"p"},"local")," code/configurations, and see results in the web application. ",(0,a.kt)("strong",{parentName:"p"},"It gives you an easy way to tweak/compile/run your code and compare results across runs:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"qa --share run [...]\nqa --share --label testing-some-logic-tweaks batch [...]\n")),(0,a.kt)("p",null,"Results will appear in a new batch:"),(0,a.kt)("img",{alt:"selecting local runs",src:(0,i.Z)("img/selecting-local-runs.jpg")}),(0,a.kt)("img",{alt:"local runs warning",src:(0,i.Z)("img/local-runs-warning.jpg")}),(0,a.kt)("h3",{id:"commit--ci--qa-board-qorkflow"},(0,a.kt)("strong",{parentName:"h3"},"Commit > CI > QA-Board")," Qorkflow"),(0,a.kt)("p",null,"If you make changes in configuration files, you need to commit them."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Make changes"),(0,a.kt)("li",{parentName:"ol"},"Commit the changes"),(0,a.kt)("li",{parentName:"ol"},"Push your commit"),(0,a.kt)("li",{parentName:"ol"},"See results in the UI")))}d.isMDXComponent=!0}}]);