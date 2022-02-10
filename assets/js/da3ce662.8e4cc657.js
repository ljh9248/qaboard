"use strict";(self.webpackChunkApache_2_0=self.webpackChunkApache_2_0||[]).push([[3706],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6378:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n(4996),p=["components"],s={id:"running-your-code",sidebar_label:"Running your code",title:"Running your code"},l=void 0,d={unversionedId:"running-your-code",id:"running-your-code",title:"Running your code",description:"QA-Board works as a CLI wrapper for your code. As a default to get started, it runs commands you provide as extra arguments:",source:"@site/docs/running-your-code.md",sourceDirName:".",slug:"/running-your-code",permalink:"/qaboard/docs/running-your-code",editUrl:"https://github.com/Samsung/qaboard/edit/master/website/docs/docs/running-your-code.md",tags:[],version:"current",frontMatter:{id:"running-your-code",sidebar_label:"Running your code",title:"Running your code"},sidebar:"docs",previous:{title:"From Inputs to Outputs",permalink:"/qaboard/docs/inputs"},next:{title:"Outputs",permalink:"/qaboard/docs/creating-and-viewing-outputs-files"}},u=[{value:"Wrapping your code",id:"wrapping-your-code",children:[],level:2},{value:"What should your wrapper do?",id:"what-should-your-wrapper-do",children:[{value:"Use-case #1: Running Python code",id:"use-case-1-running-python-code",children:[],level:3},{value:"Use-case #2: Running an executable",id:"use-case-2-running-an-executable",children:[],level:3},{value:"Use-case #3: Importing existing results (Advanced)",id:"use-case-3-importing-existing-results-advanced",children:[],level:3}],level:2},{value:"Useful <code>context</code> properties (Reference)",id:"useful-context-properties-reference",children:[],level:2},{value:"Accessing the QA-Board configuration",id:"accessing-the-qa-board-configuration",children:[],level:2}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"QA-Board works as a CLI wrapper for your code. As a default to get started, it runs commands you provide as extra arguments: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'qa run --input path/to/your/input.file \'echo "{input_path} => {output_dir}"\'\n#=> prints "/database/path/to/your/input.file  => output/dir"\n\nqa --share run --input path/to/your/input.file \'echo "{input_path} => {output_dir}"\'\n#=> prints an URL to view logs in the web interface\n')),(0,i.kt)("img",{alt:"First results",src:(0,o.Z)("img/first-outputs.png")}),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Results are saved under ",(0,i.kt)("em",{parentName:"p"},"output/"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"--share"),"'d results are available in the web UI and their data is stored under ",(0,i.kt)("em",{parentName:"p"},"/mnt/qaboard"),". To change it, edit ",(0,i.kt)("inlineCode",{parentName:"p"},"storage")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"qaboard.yaml"),"."))),(0,i.kt)("h2",{id:"wrapping-your-code"},"Wrapping your code"),(0,i.kt)("p",null,"How does it work? When you ",(0,i.kt)("inlineCode",{parentName:"p"},"pip install")," QA-Board with ",(0,i.kt)("inlineCode",{parentName:"p"},"pip"),", you get the ",(0,i.kt)("inlineCode",{parentName:"p"},"qa")," executable. ",(0,i.kt)("inlineCode",{parentName:"p"},"qa")," opens ",(0,i.kt)("em",{parentName:"p"},"qaboard.yaml")," and imports the python file specified by ",(0,i.kt)("inlineCode",{parentName:"p"},"project.entrypoint"),". Then it runs your entrypoint's ",(0,i.kt)("inlineCode",{parentName:"p"},"run()")," function with information about the current run: input, configuration, where outputs should be saved etc."),(0,i.kt)("p",null,"Take a look at the default ",(0,i.kt)("inlineCode",{parentName:"p"},"run()")," in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Samsung/qaboard/blob/master/qaboard/sample_project/qa/main.py"},(0,i.kt)("em",{parentName:"a"},"qa/main.py")),". You should change it to run your code. In most cases that means finding and executing an executable file, or importing+running python code..."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Many users want to separate algorithm runs and postprocessing. To make this flow easier, you can optionnaly implement ",(0,i.kt)("inlineCode",{parentName:"p"},"postprocess()"),". Then you will get ",(0,i.kt)("inlineCode",{parentName:"p"},"qa run")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"qa postprocess"),"."))),(0,i.kt)("h2",{id:"what-should-your-wrapper-do"},"What should your wrapper do?"),(0,i.kt)("p",null,"The main assumption is that your code"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Write ",(0,i.kt)("em",{parentName:"li"},'"qualitative"')," files in the ",(0,i.kt)("inlineCode",{parentName:"li"},"output_dir")),(0,i.kt)("li",{parentName:"ul"},"Returns ",(0,i.kt)("em",{parentName:"li"},'"quantitative"')," metrics/KPIs (",(0,i.kt)("a",{parentName:"li",href:"computing-quantitative-metrics"},'More info here - what you return can also be used to consider the run as "failed", or display badges...'),").")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"run()")," function receives as argument a ",(0,i.kt)("a",{parentName:"p",href:"#reference-useful-context-properties"},(0,i.kt)("inlineCode",{parentName:"a"},"context")," object whose properties")," tell us ",(0,i.kt)("strong",{parentName:"p"},"how")," you should run ",(0,i.kt)("strong",{parentName:"p"},"what"),", and ",(0,i.kt)("strong",{parentName:"p"},"where")," outputs are expected to be saved."),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Below are the most common ways users wrap their code. Identify what works for you and continue to the next page!"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"use-case-1-running-python-code"},"Use-case #1: Running Python code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="qa/main.py"',title:'"qa/main.py"'},'from pathlib import  Path\n\ndef run(context):\n  metrics = your_code(\n      input=context.input_path,\n      output=context.output_dir,\n      # The next page will show you to supply configurations via context.params\n      params={"hard-coded": "values"}, \n  )\n  # you can return a dict with "metrics"\n  metrics[\'is_failed\'] = False\n  return metrics\n')),(0,i.kt)("h3",{id:"use-case-2-running-an-executable"},"Use-case #2: Running an executable"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"QA-Board")," assumes you already built your code.     "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="qa/main.py"',title:'"qa/main.py"'},'import subprocess\n\ndef run(context):\n    command = [\n        \'build/executable\',\n        "--input", str(context.input_path),\n        "--output", str(context.output_dir),\n        # if you call e.g. "qa run -i some_input --forwarded args", you can do:\n        *context.forwarded_args,\n    ]\n    process = subprocess.run(\n        command,\n        capture_output=True,\n    )\n    print(process.stdout)\n    print(process.stderr)\n    return {"is_failed": process.returncode != 0}\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Instead of returning your metrics, in some cases it's more convinient to write them as JSON in ",(0,i.kt)("em",{parentName:"p"},"context.output_dir/metrics.json"),"."))),(0,i.kt)("h3",{id:"use-case-3-importing-existing-results-advanced"},"Use-case #3: Importing existing results (Advanced)"),(0,i.kt)("p",null,"It's is sometimes needed to easily compare results versus reference implementations or benchmarks. Let's say the benchmark results can be found alongside images in your database like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-log"},"database\n\u251c\u2500\u2500 images\n\u2502  \u251c\u2500\u2500 A.jpg\n\u2502  \u2514\u2500\u2500 B.jpg\n\u2514\u2500\u2500 standard-benchmark\n   \u2514\u2500\u2500 images\n      \u251c\u2500\u2500 A\n      \u2502  \u2514\u2500\u2500 output.jpg\n      \u2514\u2500\u2500 B\n         \u2514\u2500\u2500 output.jpg\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="qa/main.py"',title:'"qa/main.py"'},"import os\nimport shutil\n\ndef run(context):\n    if context.type == 'benchmark':\n        # Next page you will learn how you can provided configurations/parameters to the run.\n        benchmark = context.params['benchmark']\n        # Find the benchmark results...\n        benchmark_outputs = context.database / benchmark context.input_path.parent / context.input_path.stem\n        # To copy the result image only\n        os.copy(str(benchmark_outputs / 'output.jpg'), str(context.output_dir])\n        # To copy the whole directory\n        shutil.copytree(\n            str(benchmark_outputs),\n            str(context.output_dir),\n            dirs_exist_ok=True, # python>=3.8, otherwise just call `cp -R` to do it yourself...\n        )\n    # Otherwise run your code, that create *output.jpg*\n")),(0,i.kt)("p",null,"To actually import the results, create a batch (more info later) for the benchmark. ",(0,i.kt)("inlineCode",{parentName:"p"},"qa batch import-standard-benchmark")," with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="qa/batches.yaml"',title:'"qa/batches.yaml"'},"import-standard-benchmark:\n  type: benchmark\n  configurations:\n  - benchmark: standard-benchmark\n  inputs:\n  - images\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Now you can make comparaisons!")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'From the QA-Board web application, you can set the benchark as a "milestone", to compare your results to it in a click.'))),(0,i.kt)("h2",{id:"useful-context-properties-reference"},"Useful ",(0,i.kt)("inlineCode",{parentName:"h2"},"context")," properties (Reference)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"What")),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"database")),(0,i.kt)("td",{parentName:"tr",align:null},"path to the database")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"rel_input_path")),(0,i.kt)("td",{parentName:"tr",align:null},"input relative to the database")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"input_path")),(0,i.kt)("td",{parentName:"tr",align:null},"$database / $rel_input_path")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:null},"input type")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"input_metadata")),(0,i.kt)("td",{parentName:"tr",align:null},"if relevant, input metadata (more info later)")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"How")),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"configs")),(0,i.kt)("td",{parentName:"tr",align:null},'Many algorithms need some notion of "incremental/delta/cascading configs". ',(0,i.kt)("em",{parentName:"td"},"Array")," of strings or dicts or whatever. ",(0,i.kt)("em",{parentName:"td"},"You")," decide how to interpret it.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"params")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"dict")," with all the above ",(0,i.kt)("inlineCode",{parentName:"td"},"configs")," of type ",(0,i.kt)("inlineCode",{parentName:"td"},"dict")," deep merged. It's often all you need!.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"platform")),(0,i.kt)("td",{parentName:"tr",align:null},"Usually the host (linux/windows), but can be overwritten as part of your custom logic")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"forwarded_args")),(0,i.kt)("td",{parentName:"tr",align:null},"Extra CLI flags. Usually used for debugging. Also available in ",(0,i.kt)("inlineCode",{parentName:"td"},"params"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"configurations")),(0,i.kt)("td",{parentName:"tr",align:null},"(advanced): Array of strings or dicts, but without tuning extra parameters like ",(0,i.kt)("inlineCode",{parentName:"td"},"configs"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"extra_parameters")),(0,i.kt)("td",{parentName:"tr",align:null},"(advanced): When doing tuning via QA-Board or using extra CLI forwarded arguments, a dict of ",(0,i.kt)("inlineCode",{parentName:"td"},"key:values"),".")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Where")),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"output_dir")),(0,i.kt)("td",{parentName:"tr",align:null},"where your code should save its outputs")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"context.obj")," to store arbitrary data."))),(0,i.kt)("h2",{id:"accessing-the-qa-board-configuration"},"Accessing the QA-Board configuration"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Work in Progress")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"A full reference for ",(0,i.kt)("inlineCode",{parentName:"p"},"from qaboard.config import ...")," will arrive in the docs!"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from qaboard.config import project, config, ...\n")))}m.isMDXComponent=!0}}]);