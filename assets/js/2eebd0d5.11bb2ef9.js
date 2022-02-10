"use strict";(self.webpackChunkApache_2_0=self.webpackChunkApache_2_0||[]).push([[1103],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return m}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(o),m=r,k=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return o?n.createElement(k,c(c({ref:t},u),{},{components:o})):n.createElement(k,c({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,c=new Array(a);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=o[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},9384:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),c=["components"],i={id:"troubleshooting",sidebar_label:"Troubleshooting",title:"Troubleshooting common issues"},l=void 0,s={unversionedId:"backend-admin/troubleshooting",id:"backend-admin/troubleshooting",title:"Troubleshooting common issues",description:"Assuming you work on the QA-Board server:",source:"@site/docs/backend-admin/troubleshooting.md",sourceDirName:"backend-admin",slug:"/backend-admin/troubleshooting",permalink:"/qaboard/docs/backend-admin/troubleshooting",editUrl:"https://github.com/Samsung/qaboard/edit/master/website/docs/docs/backend-admin/troubleshooting.md",tags:[],version:"current",frontMatter:{id:"troubleshooting",sidebar_label:"Troubleshooting",title:"Troubleshooting common issues"},sidebar:"docs",previous:{title:"FAQ",permalink:"/qaboard/docs/faq"},next:{title:"Host Upgrades",permalink:"/qaboard/docs/backend-admin/host-upgrades"}},u=[{value:"Talking to the different services",id:"talking-to-the-different-services",children:[],level:2},{value:"Questions to ask if things don&#39;t work",id:"questions-to-ask-if-things-dont-work",children:[],level:2},{value:"How to restart the docker containers",id:"how-to-restart-the-docker-containers",children:[{value:"How to start from scratch the docker container",id:"how-to-start-from-scratch-the-docker-container",children:[],level:3},{value:"Quick wins when the disk is full",id:"quick-wins-when-the-disk-is-full",children:[],level:3},{value:"Re-build and start the docker container",id:"re-build-and-start-the-docker-container",children:[],level:3}],level:2}],d={toc:u};function p(e){var t=e.components,o=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Assuming you work on the QA-Board server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ssh qaboard-server\n")),(0,a.kt)("h2",{id:"talking-to-the-different-services"},"Talking to the different services"),(0,a.kt)("p",null,"You can interact with the individual services with e.g."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# read logs from a specific service\ndocker-compose logs -f backend\n\n# you can get a shell on the various services:\ndocker-compose exec backend bash\ndocker-compose run proxy /bin/ash\n# or with the docker-compose conventions, if the service is up:\ndocker exec -it qaboard_proxy_1 bash\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Refer to the examples in ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"docker-compose.yml"},"docker-compose.yml"))," or to the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose")," docs.")),(0,a.kt)("h2",{id:"questions-to-ask-if-things-dont-work"},"Questions to ask if things don't work"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Is the container even running ? Is it restarting all the time?")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Is the disk full?")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"df -h\n")),(0,a.kt)("h2",{id:"how-to-restart-the-docker-containers"},"How to restart the docker containers"),(0,a.kt)("p",null,"Symptom:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cannot load the web application"),(0,a.kt)("li",{parentName:"ul"},"500 errors"),(0,a.kt)("li",{parentName:"ul"},"Often necessary if the disk got full..")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose -f docker-compose.yml -f production.yml restart\n# if you make changes to the docker-compose files...\ndocker-compose -f docker-compose.yml -f production.yml up -d\n")),(0,a.kt)("h3",{id:"how-to-start-from-scratch-the-docker-container"},"How to start from scratch the docker container"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose -f docker-compose.yml -f production.yml down\ndocker-compose -f docker-compose.yml -f production.yml up -d\n")),(0,a.kt)("h3",{id:"quick-wins-when-the-disk-is-full"},"Quick wins when the disk is full"),(0,a.kt)("p",null,"Symptom:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"500 errors"),(0,a.kt)("li",{parentName:"ul"},"database unreachable in the logs"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"no space left on device")," in the logs")),(0,a.kt)("p",null,"Remove the IIIF image cache:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# stop\ndocker-compose -f docker-compose.yml -f production.yml down cantaloupe\n# remove with the volumes\ndocker-compose -f docker-compose.yml -f production.yml rm -v cantaloupe\ndocker-compose -f docker-compose.yml -f production.yml up -d cantaloupe\n")),(0,a.kt)("p",null,"Remove unused docker images"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker image prune # -a\n")),(0,a.kt)("h3",{id:"re-build-and-start-the-docker-container"},"Re-build and start the docker container"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose -f docker-compose.yml -f production.yml up -d --build\n# you can rebuild a subset of the services: backend, frontend...\n")))}p.isMDXComponent=!0}}]);