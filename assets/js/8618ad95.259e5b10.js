"use strict";(self.webpackChunkApache_2_0=self.webpackChunkApache_2_0||[]).push([[3210],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||l[m]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5337:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"apis",sidebar_label:"APIs",title:"QA-Board's API"},c=void 0,p={unversionedId:"apis",id:"apis",title:"QA-Board's API",description:"CLI API",source:"@site/docs/integrating-qa-in-scripts.md",sourceDirName:".",slug:"/apis",permalink:"/qaboard/docs/apis",editUrl:"https://github.com/Samsung/qaboard/edit/master/website/docs/docs/integrating-qa-in-scripts.md",tags:[],version:"current",frontMatter:{id:"apis",sidebar_label:"APIs",title:"QA-Board's API"},sidebar:"docs",previous:{title:"FAQ",permalink:"/qaboard/docs/faq"},next:{title:"Defining Pipelines / DAG",permalink:"/qaboard/docs/dag-pipelines"}},u=[{value:"CLI API",id:"cli-api",children:[],level:2},{value:"HTTP API",id:"http-api",children:[],level:2}],l={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"cli-api"},"CLI API"),(0,i.kt)("p",null,"If you run batches, it can be useful to know where results where saved."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'qa batch my-batch \u2013-list-output-dirs\n##=> prints to STDOUT each output directory on a line\n#> $some/where/place\n#> $some/other/place\n#> ...\n\nqa batch my-batch \u2013-list\n##=> prints to STDOUT an array with info on each run\n# [\n#   {\n#      "absolute_input_path": "some/file"\n#      "configurations": ["my-config"],\n#      "output_directory": "some/place"\n#   }\n# ]\n')),(0,i.kt)("p",null,"For specific needs, you can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"qa get")," to output internal variables:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"qa --input my/input get output_directory\nqa get commit_id\n# etc\n")),(0,i.kt)("h2",{id:"http-api"},"HTTP API"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"TODO:")," Formalize with an ",(0,i.kt)("a",{parentName:"p",href:"https://editor.swagger.io/"},"openapi/swagger spec"),".")),(0,i.kt)("p",null,"It's not documented yet, but quite stable and there are no surprises."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -k "https://qa/api/v1/commits?project=my/project"\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'[\n  // --snip--\n  {\n    "id": "af9370b9246657e74e8e7fbd28c180b5cca7d3a7",\n    "type": "git",\n    "branch": "origin/my-branch",\n    "parents": [\n      "c976adc9020683f90d51d25c39d9e177c621dc95"\n    ],\n    "message": "add dynamic min subtract\\n",\n    "committer_name": "Rivka E",\n    "committer_avatar_url": "http://gitlab-srv/uploads/-/system/user/avatar/164/avatar.png",\n    "authored_datetime": "2019-04-30T09:05:09+00:00",\n    "authored_date": "2019-04-30",\n    "data": null,\n    "repo_artifacts_url": "/s/commit/dir/url",\n    "artifacts_url": "/s/commit/dir/url/maybe/subproject", //placeholder...\n    "batches": {\n      "default": {\n        "id": 19172,\n        "commit_id": "af9370b9246657e74e8e7fbd28c180b5cca7d3a7",\n        "label": "default",\n        "created_date": "2019-04-30T09:08:59.962664",\n        "data": {\n          "type": "ci"\n        },\n        "batch_dir_url": "/s/some/directory/output",\n        "aggregated_metrics": {},\n        "valid_outputs": 0,\n        "pending_outputs": 0,\n        "running_outputs": 0,\n        "failed_outputs": 2\n      }\n    },\n    "time_of_last_batch": "2019-04-30T09:05:09+00:00"\n  },\n  // --snip--\n]\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -k "$base_url/commit/01c27dfc4ffbf93ce95639b4dfbc126da4c53053?project=my/project" | jq\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "id": "2032a39564281de429e667260d1def3d16980e01",\n  "type": "git",\n  "branch": "origin/InvestigateCompression",\n  "parents": [\n    "93b0a95d0ceaa78d24be33bea67a4aa333491c23"\n  ],\n  "message": "1. PARAMETERIZE compression\\n2. add XX package\\n",\n  "committer_name": "Rivka E",\n  "committer_avatar_url": "http://gitlab-srv/uploads/-/system/user/avatar/164/avatar.png",\n  "authored_datetime": "2019-04-28T12:55:51+00:00",\n  "authored_date": "2019-04-28",\n  "data": {\n    "qatools_config": {\n      // --snip\n     },\n    "qatools_metrics": {\n      // --snip\n     }\n  }\n  "repo_artifacts_url": "/s/commit/dir/url",\n  "artifacts_url": "/s/commit/dir/url/maybe/subproject", //placeholder...\n  "batches": {\n    "default": {\n      "id": 19071,\n      "commit_id": "2032a39564281de429e667260d1def3d16980e01",\n      "label": "default",\n      "created_date": "2019-04-28T13:27:28.119816",\n      "data": {\n        "type": "ci"\n      },\n      "batch_dir_url": "/s/some/directory/output",\n      "aggregated_metrics": {},\n      "valid_outputs": 1,\n      "pending_outputs": 2,\n      "running_outputs": 1,\n      "failed_outputs": 2,\n      "outputs": {\n        "350582": {\n          "id": 350582,\n          "output_type": "",\n          "platform": "windows",\n          "configuration": "base_XXX",\n          "extra_parameters": {},\n          "metrics": {\n            "is_failed": false,\n            "compute_time": 30.1366302967\n            "OTP_size_CrossTalk": 1040,\n            "OTP_size_DayLight50": 464,\n            // --snip\n          },\n          "is_failed": false,\n          "is_pending": false,\n          "is_running": false,\n          "data": {\n            "ci": true\n          },\n          "batch_dir_url": "/s/some/directory/output",\n          "test_input_database": "/db/XX",\n          "test_input_path": "LSC/M01",\n          "test_input_tags": []\n        },\n        // --snip--\n      }\n    }\n  },\n  "time_of_last_batch": "2019-04-28T12:55:51+00:00"\n}\n\n')))}d.isMDXComponent=!0}}]);