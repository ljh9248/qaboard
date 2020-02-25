(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{168:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return u}));var a=t(1),i=t(9),r=(t(0),t(173)),o={id:"batches-running-on-multiple-inputs",title:"Batches of inputs",sidebar_label:"Batches of Inputs"},c={id:"batches-running-on-multiple-inputs",title:"Batches of inputs",description:":::important Reminder",source:"@site/docs/batches-running-on-multiple-inputs.md",permalink:"/qaboard/docs/batches-running-on-multiple-inputs",sidebar_label:"Batches of Inputs",sidebar:"docs",previous:{title:"Visualizing your algorithm's outputs",permalink:"/qaboard/docs/visualizations"},next:{title:"Enabling tuning and extra runs from QA-Board",permalink:"/qaboard/docs/tuning-from-the-webapp"}},s=[{value:"Setting a custom database per batch",id:"setting-a-custom-database-per-batch",children:[]},{value:"Specifying test configurations",id:"specifying-test-configurations",children:[]},{value:"Organizing your groups of inputs",id:"organizing-your-groups-of-inputs",children:[{value:"Group aliases",id:"group-aliases",children:[]},{value:"Configuration aliases",id:"configuration-aliases",children:[]},{value:"Reusable configurations/inputs",id:"reusable-configurationsinputs",children:[]}]}],b={rightToc:s};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-important"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Reminder")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Make sure you read ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"identifying-inputs-files"}),"the section on input files")))),Object(r.b)("p",null,"As we discussed, you can define batch of batches of inputs in file(s) whose paths are given by ",Object(r.b)("inlineCode",{parentName:"p"},"inputs.batches")," in your ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Samsung/qaboard/blob/master/qatools/sample_project/qaboard.yaml#L25"}),"qaboard.yaml")," configuration."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# qa/batches.yaml (default)\nmy-batch:\n inputs:\n   - A.jpg\n   - B.jpg\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"qa batch my-batch\n#=> qa run --input A.jpg\n#=> qa run --input B.jpg\n\nqa batch --batch first-batch --batch second-batch\n")),Object(r.b)("h2",{id:"setting-a-custom-database-per-batch"},"Setting a custom database per batch"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:"{2-4}","{2-4}":!0}),"you-can-override-the-default-database:\n  database:\n    linux: /mnt/database\n    windows: '\\\\\\\\storage\\\\database'\n  inputs:\n  - Images/Demo3/A.jpg\n  - Images/Demo2\n")),Object(r.b)("h2",{id:"specifying-test-configurations"},"Specifying test configurations"),Object(r.b)("div",{className:"admonition admonition-important"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Reminder")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Make sure you read ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"identifying-inputs-files"}),"the section on configurations")))),Object(r.b)("p",null,"Let's look at examples from one of Samsung's projects to illustrate how configurations can be given. In short, each image is processed by a tool named \"CDE\". We need to feed it config files and CLI arguments."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:"{2-3}","{2-3}":!0}),'using-a-custom-configuration:\n  configurations:\n  - base\n  inputs:\n  - Bayer/A.dng\n  - Bayer/B.dng\n# => configurations == ["base"]\n# => the code would load base/config.cde\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:"{2-4}","{2-4}":!0}),'multiple-configurations:\n  configurations:\n    - base\n    - low-light\n  inputs:\n  - Bayer/A.dng\n  - Bayer/B.dng\n#=> configurations == ["base", "low-light"]\n#=> we merge 2 CDE configs \n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:"{2-8}","{2-8}":!0}),'configurations-can-be-complex-objects:\n  configurations:\n    - base\n    - low-light\n    - cde:\n      - "-w 9920"\n      - "-h 2448"\n      - "-it BAYER10"\n  inputs:\n  - Bayer/A.dng\n  - Bayer/B.dng\n# configurations == ["base", "low-light", {"cde": ["-w 9920", "-h 2448", "-it BAYER10"]}]\n# => Here we use the "cde" config parameter to pass CLI arguments to CDE.\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:"{5,7-10}","{5,7-10}":!0}),'each-input-can-have-its-own-configuration:\n  configurations:\n    - base\n  inputs:\n  - Bayer/A.dng:\n    #=> configurations == ["base"]\n  - Bayer/B.dng:\n      - low-light\n      - cde:\n        - "-DD"\n    #=> configurations == ["base", "low-light", {"cde": ["-DD"]}]\n')),Object(r.b)("h2",{id:"organizing-your-groups-of-inputs"},"Organizing your groups of inputs"),Object(r.b)("h3",{id:"group-aliases"},"Group aliases"),Object(r.b)("p",null,"For convenience you can define aliases for groups you often run together. For instance you can do:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# qa/batches.yaml\ngroups:\n  two-batches:\n  - first-batch\n  - second-batch\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"qa batch two-batches\n")),Object(r.b)("h3",{id:"configuration-aliases"},"Configuration aliases"),Object(r.b)("p",null,"For convenience you can define YAML aliases for common configurations"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:"{1-3,7}","{1-3,7}":!0}),'.base: &base\n  - base\n  - partial\n\nhdr:\n  configurations:\n    - *base\n    - hdr\n  inputs:\n    - A\n    - B\n    - C\n#=> configurations == ["base", "partial", "hdr"]\n')),Object(r.b)("div",{className:"admonition admonition-note"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},'YAML "aliases" and "anchors" are standard YAML feature. ',Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://confluence.atlassian.com/bitbucket/yaml-anchors-960154027.html"}),"Read more here"),"."))),Object(r.b)("h3",{id:"reusable-configurationsinputs"},"Reusable configurations/inputs"),Object(r.b)("p",null,"Sometimes you want to mix and match reusabe definitions of configs and inputs. YAML anchors let you do it:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),".inputs_hdr: &inputs_hdr\n  inputs:\n    - A\n    - B\n\n.lots_of_inputs_hdr: &lots_inputs_hdr\n  inputs:\n    - A\n    - B\n    - C\n    - D\n    - E\n    - F\n\n.HDR: &HDR\n  configurations:\n    - *base\n    - hdr_base\n    - hdr_motion\n\n.HDR-disabled: &HDR-disabled\n  configurations:\n    - *base\n\nhdr:\n  <<: *HDR\n  <<: *inputs_hdr\nno-hdr:\n  <<: *HDR-disabled\n  <<: *inputs_hdr\n# qa --batch-label hdr    batch hdr\n# qa --batch-label no-hdr batch no-hdr\n\n# Maybe on nightly runs you want to run lots of inputs\nlots-of-hdr-inputs:\n  <<: *HDR\n  <<: *lots_inputs_hdr\nlots-of-no-hdr-inputs:\n  <<: *HDR-disabled\n  <<: *lots_inputs_hdr\n")))}u.isMDXComponent=!0},173:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var b=i.a.createContext({}),u=function(e){var n=i.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},l=function(e){var n=u(e.components);return i.a.createElement(b.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),l=u(t),d=a,m=l["".concat(o,".").concat(d)]||l[d]||p[d]||r;return t?i.a.createElement(m,c({ref:n},b,{components:t})):i.a.createElement(m,c({ref:n},b))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var b=2;b<r;b++)o[b]=t[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);