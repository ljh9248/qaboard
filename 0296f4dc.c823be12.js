(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{125:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(1),a=r(9),o=(r(0),r(173)),c={id:"celery-integration",title:"Using celery as a task runner",sidebar_label:"Celery Integration"},i={id:"celery-integration",title:"Using celery as a task runner",description:"[Celery](http://docs.celeryproject.org/en/latest/index.html) is a simple, flexible, and reliable distributed task queue.",source:"@site/docs/celery-integration.md",permalink:"/qaboard/docs/celery-integration",sidebar_label:"Celery Integration",sidebar:"docs",previous:{title:"Enabling tuning and extra runs from QA-Board",permalink:"/qaboard/docs/tuning-from-the-webapp"},next:{title:"LSF Integration",permalink:"/qaboard/docs/lsf-integration"}},l=[{value:"Starting Celery workers",id:"starting-celery-workers",children:[]},{value:"Configuring Celery",id:"configuring-celery",children:[]}],s={rightToc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://docs.celeryproject.org/en/latest/index.html"}),"Celery")," is a simple, flexible, and reliable distributed task queue."),Object(o.b)("h2",{id:"starting-celery-workers"},"Starting Celery workers"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"To manage the task queue we'll need what they call a ",Object(o.b)("em",{parentName:"li"},"broker"),". It's easy to start one:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker run --detach -p 5672:5672 rabbitmq\n#=> runs in the backgroud, stays alive\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Next you need to start at least a ",Object(o.b)("em",{parentName:"li"},"worker")," that will execute async tasks:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"pip install celery\ncelery -A qaboard.runners.celery_app worker --loglevel=info\n")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Next, use QA-Board's Celery runner:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"qa batch --runner=celery my-batch\n")),Object(o.b)("h2",{id:"configuring-celery"},"Configuring Celery"),Object(o.b)("p",null,"To configure Celery at the ",Object(o.b)("strong",{parentName:"p"},"project level"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'# qaboard.yaml\nrunners:\n  default: celery\n  celery:\n    # Those are the default settings:\n    broker_url: pyamqp://guest@localhost//  # also read from ENV vars with CELERY_BROKER_URL\n    result_backend: rpc://                  # also read from ENV vars with CELERY_RESULT_BACKEND\n    # To know all the options and tweak priorities, rate-limiting... Read:\n    # http://docs.celeryproject.org/en/latest/getting-started/first-steps-with-celery.html#configuration\n    # http://docs.celeryproject.org/en/latest/userguide/configuration.html#configuration\n    # For example:\n    timezone: Europe/Paris\n\n    # By default tasks will be named "qaboard" unless you define\n    qaboard_task_name: qaboard\n')),Object(o.b)("p",null,"It's often useful to give ",Object(o.b)("strong",{parentName:"p"},"batches")," their own settings. For instance you may want to use different queues if you manage different types of resources (GPUs, Windows/Linux/Android...):"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# On a server with a GPU:\ncelery -A qaboard.runners.celery_app worker --concurrency=1 --queues gpu,large-gpu\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:"{7-9}","{7-9}":!0}),"# qa/batches.yaml\nmy-batch-that-needs-a-gpu:\n  inputs:\n  - my/training/images\n  configuration:\n  - hyperparams.yaml\n  celery:\n    task_routes:\n      qaboard: gpu\n")),Object(o.b)("div",{className:"admonition admonition-tip"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Read ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://docs.celeryproject.org/en/latest/getting-started/first-steps-with-celery.html"}),"Celery's tutorial")))),Object(o.b)("p",null,"Celery's ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.celeryproject.org/en/stable/userguide/workers.html"}),"worker user guide")," has lots of information on how to run ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.celeryproject.org/en/stable/userguide/daemonizing.html#daemonizing"}),"worker in the background"),", set ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.celeryproject.org/en/stable/userguide/workers.html#concurrency"}),"concurrency"),"... Check it out too as needed!"),Object(o.b)("p",null,"If you need worker monitoring, read the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://docs.celeryproject.org/en/latest/userguide/monitoring.html"}),"docs"),"."))}b.isMDXComponent=!0},173:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(r),d=n,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return r?a.a.createElement(m,i({ref:t},s,{components:r})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);