"use strict";(self.webpackChunkApache_2_0=self.webpackChunkApache_2_0||[]).push([[5087],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(a),u=r,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||o;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3086:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={id:"deploy",title:"Starting a QA-Board server",sidebar_label:"Server Bringup"},p=void 0,s={unversionedId:"deploy",id:"deploy",title:"Starting a QA-Board server",description:"QA-Board's run-wrapper, qa, will sync with a central server that tracks and displays results.",source:"@site/docs/start-server.md",sourceDirName:".",slug:"/deploy",permalink:"/qaboard/docs/deploy",editUrl:"https://github.com/Samsung/qaboard/edit/master/website/docs/docs/start-server.md",tags:[],version:"current",frontMatter:{id:"deploy",title:"Starting a QA-Board server",sidebar_label:"Server Bringup"},sidebar:"docs",previous:{title:"What is QA-Board?",permalink:"/qaboard/docs/introduction"},next:{title:"Client Installation",permalink:"/qaboard/docs/installation"}},d=[{value:"Create a directory to store results",id:"create-a-directory-to-store-results",children:[],level:2},{value:"Starting the server",id:"starting-the-server",children:[],level:2},{value:"(Optional) Environment variables",id:"optional-environment-variables",children:[],level:2},{value:"(Optional) For &quot;production&quot;",id:"optional-for-production",children:[{value:"Backups",id:"backups",children:[],level:3},{value:"Using SSL / hosting behind a reverse proxy",id:"using-ssl--hosting-behind-a-reverse-proxy",children:[],level:3}],level:2},{value:"(Optional) Cleanup",id:"optional-cleanup",children:[],level:2}],m={toc:d};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"QA-Board's run-wrapper, ",(0,o.kt)("inlineCode",{parentName:"p"},"qa"),", will sync with a central server that tracks and displays results."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Need a hosted version?")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We're considering offering a hosted solution to help you get started. If you are interested, contact the ",(0,o.kt)("a",{href:"mailto:arthur.flam@gmail.com"},"maintainers"),"."),(0,o.kt)("p",{parentName:"div"},"Until then, please ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Samsung/qaboard/issues"},"fill issues"),", ",(0,o.kt)("a",{parentName:"p",href:"https://spectrum.chat/qaboard"},"chat")," or ",(0,o.kt)("a",{href:"mailto:arthur.flam@samsung.com"},"send an email")," to maintainers if you run into issues starting a server. We're responsive."))),(0,o.kt)("h2",{id:"create-a-directory-to-store-results"},"Create a directory to store results"),(0,o.kt)("p",null,"QA-Board expects that all clients can access a shared storage to save and read results."),(0,o.kt)("p",null,"To get started quickly on a single server, create a ",(0,o.kt)("em",{parentName:"p"},"local")," folder. Worry about sharing it later: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /mnt/qabaord\nchmod -R 777 /mnt/qabaord\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you want to use a different folder, find-and-replace ",(0,o.kt)("em",{parentName:"p"},"/mnt/qaboard")," with your path in ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," and ",(0,o.kt)("em",{parentName:"p"},"services/nginx/conf.d/qaboard.conf"),"."))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Shared Storage?")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Later, read how to setup ",(0,o.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/how-to-set-up-an-nfs-mount-on-ubuntu-18-04"},(0,o.kt)("strong",{parentName:"a"},"NFS"))," or ",(0,o.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/how-to-set-up-a-samba-share-for-a-small-organization-on-ubuntu-16-04"},(0,o.kt)("strong",{parentName:"a"},"Samba")),". If you need fine-tuning read about ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/compose-file/#volume-configuration-reference"},"options for NFS volumes")," in ",(0,o.kt)("em",{parentName:"p"},"docker-compose.yml"),"."))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Working in the cloud?")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Use file-base storage like ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/en/efs/"},"AWS EFS")," or ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/filestore"},"GCP Filestore"),"."),(0,o.kt)("p",{parentName:"div"},"We plan on supporting blob-stores like AWS ",(0,o.kt)("strong",{parentName:"p"},"S3"),". ",(0,o.kt)("a",{href:"mailto:arthur.flam@gmail.com"},"Contact us")," or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/samsung/qaboard/issues"},"create an issue")," if it would help."))),(0,o.kt)("h2",{id:"starting-the-server"},"Starting the server"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You need Linux, ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},(0,o.kt)("inlineCode",{parentName:"a"},"docker")),", ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},(0,o.kt)("inlineCode",{parentName:"a"},"docker-compose"))," and ",(0,o.kt)("inlineCode",{parentName:"li"},"git"),"."),(0,o.kt)("li",{parentName:"ol"},"To start the QA-Board server:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Samsung/qaboard.git\ncd qaboard\n\ndocker-compose pull\ndocker-compose up -d\n#=> the application is live at localhost:5151\n\n# if you can't access the application, check the port is not blocked by a firewall\n# cloud services often require you to add the ports you need to an allow-list.\n")),(0,o.kt)("p",null,"To have the server restart automatically:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose -f docker-compose.yml -f production.yml up -d\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Want to install from a Kubernetes helm chart, CloudFormation or Terraform plans? ",(0,o.kt)("a",{href:"mailto:arthur.flam@gmail.com"},"Get in touch"),"."))),(0,o.kt)("h2",{id:"optional-environment-variables"},"(Optional) Environment variables"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To configure your installation, you can either edit ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/environment-variables/#the-env-file"},"an ",(0,o.kt)("inlineCode",{parentName:"a"},".env")," file")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"services.backend.environment")," in one of the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose")," files (",(0,o.kt)("em",{parentName:"p"},"docker-compose.yml"),", ",(0,o.kt)("em",{parentName:"p"},"development.yml"),", ",(0,o.kt)("em",{parentName:"p"},"production.yml"),"...).")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"ENV Variable"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Usage"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"GITLAB_ACCESS_TOKEN")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"none")),(0,o.kt)("td",{parentName:"tr",align:null},"Optional for some extra features. Get it with a ",(0,o.kt)("inlineCode",{parentName:"td"},"read_repository")," scope at https://$gitlab-server/profile/personal_access_tokens")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"GITLAB_HOST")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"none")),(0,o.kt)("td",{parentName:"tr",align:null},"e.g. ",(0,o.kt)("em",{parentName:"td"},(0,o.kt)("a",{parentName:"em",href:"https://gitlab.com"},"https://gitlab.com"))," or ",(0,o.kt)("em",{parentName:"td"},"http://my-gitlab-srv/"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"QABOARD_PORT_HTTP")),(0,o.kt)("td",{parentName:"tr",align:null},"5151"),(0,o.kt)("td",{parentName:"tr",align:null},"Port mapped to the app on the host")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"QABOARD_DB_HOST")),(0,o.kt)("td",{parentName:"tr",align:null},"db"),(0,o.kt)("td",{parentName:"tr",align:null},"Connect the backend to a non-default database host (e.g. instead of dev'ing with prod dumps, connect directly to it)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"QABOARD_DB_PORT")),(0,o.kt)("td",{parentName:"tr",align:null},"5432"),(0,o.kt)("td",{parentName:"tr",align:null},"Connect to a non-default database port")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"JENKINS_AUTH")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"none")),(0,o.kt)("td",{parentName:"tr",align:null},"Credentials used to ",(0,o.kt)("a",{parentName:"td",href:"/docs/triggering-third-party-tool"},"trigger jenkins jobs")," on 1 or many jenkins servers. The format is a JSON string looking like ",(0,o.kt)("inlineCode",{parentName:"td"},'{"hostname_1": {"user": "jenkinsuser", "token": "xxxxx", "crumb": "yyy"}}')," (","[how-to-get-the-token-crumb?]","(/docs/triggering-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"third-party-tools#example-jenkins-integration-via-webhooks))"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"QABOARD_LDAP_ENABLED")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"none")),(0,o.kt)("td",{parentName:"tr",align:null},"If set to ",(0,o.kt)("inlineCode",{parentName:"td"},"true")," LDAP is enabled")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"QABOARD_LDAP_HOST")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"none")),(0,o.kt)("td",{parentName:"tr",align:null},"Server hostname (including port)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"QABOARD_LDAP_PORT")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"389")),(0,o.kt)("td",{parentName:"tr",align:null},"Server port, usually 389 (or 636 if SSL is used / ",(0,o.kt)("strong",{parentName:"td"},"not supported yet!"),").")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"QABOARD_LDAP_USER_BASE")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"none")),(0,o.kt)("td",{parentName:"tr",align:null},"Search base for users.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"QABOARD_LDAP_BIND_DN")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"none")),(0,o.kt)("td",{parentName:"tr",align:null},"The Distinguished Name to bind as, this user will be used to lookup information about other users.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"QABOARD_LDAP_PASSWORD")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"none")),(0,o.kt)("td",{parentName:"tr",align:null},"The password to bind with for the lookup user.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"QABOARD_LDAP_USER_FILTER")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"none")),(0,o.kt)("td",{parentName:"tr",align:null},"User lookup filter, the placeholder ",(0,o.kt)("inlineCode",{parentName:"td"},"{login}")," will be replaced by the user supplied login. (e.g. `(&(objectClass=inetOrgPerson)(")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"QABOARD_LDAP_ATTRIBUTE_EMAIL")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"mail")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"QABOARD_LDAP_ATTRIBUTE_COMMON_NAME")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"cn")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"CANTALOUPE_MEM_START")),(0,o.kt)("td",{parentName:"tr",align:null},"1g"),(0,o.kt)("td",{parentName:"tr",align:null},"Starting memory for the image server")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"CANTALOUPE_MEM_MAX")),(0,o.kt)("td",{parentName:"tr",align:null},"2g"),(0,o.kt)("td",{parentName:"tr",align:null},"Max memory for the image server")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"UWSGI_PROCESSS")),(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},"default: 1g")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"UWSGI_UID_CAN_SUDO")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"none")),(0,o.kt)("td",{parentName:"tr",align:null},"if set, the uwsgi user can sudo")))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'In the future we plan to introduce a proper "secret" store, per user and per project.'))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Consult the ",(0,o.kt)("a",{parentName:"p",href:"backend-admin/troubleshooting"},"Troubleshooting")," page for examples that show how to get logs from the various services composing QA-Board."),(0,o.kt)("p",{parentName:"blockquote"},"For development, consult the READMEs for the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Samsung/qaboard/tree/master/backend"},"backend")," and the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Samsung/qaboard/tree/master/webapp"},"frontend"),".")),(0,o.kt)("h2",{id:"optional-for-production"},'(Optional) For "production"'),(0,o.kt)("h3",{id:"backups"},"Backups"),(0,o.kt)("p",null,"In ",(0,o.kt)("em",{parentName:"p"},"production.yml")," you can uncomment the ",(0,o.kt)("inlineCode",{parentName:"p"},"cron-backup-db")," service to enable daily backups, and replace ",(0,o.kt)("inlineCode",{parentName:"p"},"/WHERE/TO/SAVE/BACKUPS")," with a (backup'ed!)location on the host."),(0,o.kt)("h3",{id:"using-ssl--hosting-behind-a-reverse-proxy"},"Using SSL / hosting behind a reverse proxy"),(0,o.kt)("p",null,"What we do is directly change the ",(0,o.kt)("inlineCode",{parentName:"p"},"nginx")," confix:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-nginx",metastring:'title="services/nginx/conf.d/qaboard.conf"',title:'"services/nginx/conf.d/qaboard.conf"'},"server {\n  # ...\n  listen 443 ssl;\n  ssl_certificate_key /ssl/cert.key;\n  ssl_certificate /ssl/cert.pem;\n  # ...\n}\n")),(0,o.kt)("p",null,"And mount keys with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="docker-compose.yml"',title:'"docker-compose.yml"'},'proxy:\n  volumes:\n  - "somewhere/cert.key:/ssl/cert.key"\n  - "somewhere/cert.pem:/ssl/cert.pem"\n')),(0,o.kt)("p",null,"If you want to use your own reverse proxy, with ",(0,o.kt)("inlineCode",{parentName:"p"},"nginx")," for instance you can set ",(0,o.kt)("inlineCode",{parentName:"p"},"QABOARD_PORT_HTTP=8080")," and: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-nginx"},"server {\n  listen 80;\n  server_name default_server;\n  location / {\n    proxy_pass http://localhost:8080/;\n  }\n}\n")),(0,o.kt)("h2",{id:"optional-cleanup"},"(Optional) Cleanup"),(0,o.kt)("p",null,"We run those cron jobs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cron"},"# Weekly cleanup of old results\n# https://samsung.github.io/qaboard/docs/deleting-old-data\n59 1 1 * * cd qaboard && docker-compose exec -T backend qaboard_clean\n# https://github.com/docker/compose/issues/3352\n\n# Weekly removal of old docker images, helps to avoid filling the disk on the host\n59 1 2 * * docker image prune --force\n\n# Restart the image server, somehow after a while they need it (need research...)\n0 4 * * * cd qaboard && docker-compose -f docker-compose.yml -f production.yml stop cantaloupe && docker-compose -f docker-compose.yml -f production.yml rm -v cantaloupe && docker-compose -f docker-compose.yml -f production.yml up -d cantaloupe\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Check ",(0,o.kt)("inlineCode",{parentName:"p"},"qaboard_clean --help")," to implement complex cleanup strategies."))))}c.isMDXComponent=!0}}]);