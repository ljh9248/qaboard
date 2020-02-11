(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{138:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return d}));var n=r(1),a=r(9),o=(r(0),r(167)),c={id:"troubleshooting",sidebar_label:"Troubleshooting",title:"Troubleshooting common issues"},i={id:"backend-admin/troubleshooting",title:"Troubleshooting common issues",description:"Assuming you work on the QA-Board host:\r",source:"@site/docs/backend-admin/troubleshooting.md",permalink:"/qaboard/docs/backend-admin/troubleshooting",editUrl:"http://gitlab-srv/common-infrastructure/qatools/edit/master/website/docs/backend-admin/troubleshooting.md",sidebar_label:"Troubleshooting",sidebar:"docs",previous:{title:"Frequently Asked Questions",permalink:"/qaboard/docs/faq"},next:{title:"Upgrading the QA-Board host",permalink:"/qaboard/docs/backend-admin/host-upgrades"}},s=[{value:"How to get logs from QA-Board's backend",id:"how-to-get-logs-from-qa-boards-backend",children:[]},{value:"How to restart nginx if the server reboots",id:"how-to-restart-nginx-if-the-server-reboots",children:[]},{value:"Restart the docker container",id:"restart-the-docker-container",children:[]},{value:"Start from scratch the docker container",id:"start-from-scratch-the-docker-container",children:[]},{value:"What to do when the disk space is full",id:"what-to-do-when-the-disk-space-is-full",children:[]},{value:"Re-build and start the docker container",id:"re-build-and-start-the-docker-container",children:[]}],l={rightToc:s};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Assuming you work on the QA-Board host:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"ssh qa\n")),Object(o.b)("h3",{id:"how-to-get-logs-from-qa-boards-backend"},"How to get logs from QA-Board's backend"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker logs  -f --since 5m qaboard-production\n\n# is the container even running ? restarting all the time\ndocker ps\n\n# docker exec -it qaboard-production bash\n")),Object(o.b)("h3",{id:"how-to-restart-nginx-if-the-server-reboots"},"How to restart nginx if the server reboots"),Object(o.b)("p",null,"Symptom:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"In case of timeouts when ",Object(o.b)("inlineCode",{parentName:"li"},"qa run/batch")," tries to contact the server (at ",Object(o.b)("inlineCode",{parentName:"li"},"http://qa:5000"),").")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sudo service nginx start\n                 # status\n                 # restart\n")),Object(o.b)("h3",{id:"restart-the-docker-container"},"Restart the docker container"),Object(o.b)("p",null,"Symptom:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Issues accession pages at ",Object(o.b)("inlineCode",{parentName:"li"},"https://qa/")),Object(o.b)("li",{parentName:"ul"},"500 errors"),Object(o.b)("li",{parentName:"ul"},"Often necessary of the disk gets full")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker restart qaboard-production\n             ## and the image server...\n             # qaboard_iiif_cantaloupe-production\n")),Object(o.b)("h3",{id:"start-from-scratch-the-docker-container"},"Start from scratch the docker container"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker stop qaboard-production\ndocker rm qaboard-production\n# ! it's arthurf's dev workspace, UNSTABLE\n#   do your own clone...!\nCI_ENVIRONMENT_SLUG=production qaboard/qaboard-backend/deployment/start-docker.sh\n")),Object(o.b)("h3",{id:"what-to-do-when-the-disk-space-is-full"},"What to do when the disk space is full"),Object(o.b)("p",null,"Symptom:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"500 errors"),Object(o.b)("li",{parentName:"ul"},"database unreachable in the logs"),Object(o.b)("li",{parentName:"ul"},'"no space left on device" in the logs')),Object(o.b)("p",null,"Remove the image cache:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker stop qaboard_iiif_cantaloupe-production && \\\ndocker rm qaboard_iiif_cantaloupe-production && \\\ndocker volume rm cache_cantaloupe && \\\n# restart the image server\ndocker run --name qaboard_iiif_cantaloupe-production -p 8182:8182 -v cache_cantaloupe:/var/cache/cantaloupe -v /:/repository -v /srv/cantaloupe:/srv/cantaloupe --detach --restart always -it cantaloupe\n\n# you'll also likely need to restart the container\n")),Object(o.b)("p",null,"Remove unused docker images"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker image prune\n")),Object(o.b)("h3",{id:"re-build-and-start-the-docker-container"},"Re-build and start the docker container"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cd slamvizapp-webapp && \\\n# build the frontend\nnpm run build && \\\n# keep old JS bundles not to break users currently using the app\nrsync -r build deployed_build && \\\ncd .. && \\\n# re-build the container\ndocker build -t qaboard:production . && \\\ndocker stop qaboard-production && \\\ndocker rm qaboard-production && \\\nCI_ENVIRONMENT_SLUG=production ~/dvs/slamvizapp/deployment/start-docker.sh\n")))}d.isMDXComponent=!0},167:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},b=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=d(r),p=n,h=b["".concat(c,".").concat(p)]||b[p]||u[p]||o;return r?a.a.createElement(h,i({ref:t},l,{components:r})):a.a.createElement(h,i({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);