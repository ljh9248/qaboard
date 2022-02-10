"use strict";(self.webpackChunkApache_2_0=self.webpackChunkApache_2_0||[]).push([[8109],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return g}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(a),g=i,c=d["".concat(s,".").concat(g)]||d[g]||m[g]||r;return a?n.createElement(c,l(l({ref:t},u),{},{components:a})):n.createElement(c,l({ref:t},u))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2898:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return m},default:function(){return g}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),l=a(4996),o=["components"],s={id:"visualizations",title:"Visualizing your algorithm's outputs",sidebar_label:"Visualizations"},p=void 0,u={unversionedId:"visualizations",id:"visualizations",title:"Visualizing your algorithm's outputs",description:"The run()function wrapping your code receives an output_directory where it can create all kinds of files. Usually, you only want to look at a few of those files, the rest being debug data. Visualizations help you declare pre-sets of relevant files.",source:"@site/docs/visualizations.md",sourceDirName:".",slug:"/visualizations",permalink:"/qaboard/docs/visualizations",editUrl:"https://github.com/Samsung/qaboard/edit/master/website/docs/docs/visualizations.md",tags:[],version:"current",frontMatter:{id:"visualizations",title:"Visualizing your algorithm's outputs",sidebar_label:"Visualizations"},sidebar:"docs",previous:{title:"Configurations",permalink:"/qaboard/docs/specifying-configurations"},next:{title:"Batches of Inputs",permalink:"/qaboard/docs/batches-running-on-multiple-inputs"}},m=[{value:"Available file viewers",id:"available-file-viewers",children:[{value:"Image viewer",id:"image-viewer",children:[],level:3},{value:"Regions of interest",id:"regions-of-interest",children:[],level:3},{value:"Plot.ly viewer",id:"plotly-viewer",children:[],level:3},{value:"Text Viewer",id:"text-viewer",children:[],level:3},{value:"Flame Graphs",id:"flame-graphs",children:[],level:3},{value:"More Viewers?",id:"more-viewers",children:[],level:3}],level:2},{value:"Dynamic visualizations",id:"dynamic-visualizations",children:[],level:2},{value:"Advanced Options EXPERIMENTAL",id:"advanced-options-experimental",children:[{value:"Custom Styles",id:"custom-styles",children:[],level:3},{value:"Viewer Configuration",id:"viewer-configuration",children:[],level:3}],level:2}],d={toc:m};function g(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"run()"),"function wrapping your code receives an ",(0,r.kt)("inlineCode",{parentName:"p"},"output_directory")," where it can create all kinds of files. Usually, you only want to look at a few of those files, the rest being debug data. ",(0,r.kt)("strong",{parentName:"p"},"Visualizations")," help you declare pre-sets of relevant files. "),(0,r.kt)("p",null,"Here is a simple example, assuming your code an image named ",(0,r.kt)("em",{parentName:"p"},"output.jpg"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="qaboard.yaml"',title:'"qaboard.yaml"'},"outputs:\n    visualizations:\n    - path: output.jpg\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For now, to debug your visualizations, you have to commit and push your new ",(0,r.kt)("em",{parentName:"p"},"qaboard.yaml"),".\nWe plan on letting you edit simply ",(0,r.kt)("em",{parentName:"p"},"qaboard.yaml")," locally, and update the visualizations when you use ",(0,r.kt)("inlineCode",{parentName:"p"},"qa --share"),"."))),(0,r.kt)("p",null,"You can provide multiple relevant files, and hide debug visualizations by default: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'{5-6} title="qaboard.yaml"',"{5-6}":!0,title:'"qaboard.yaml"'},"outputs:\n    visualizations:\n    - path: output.jpg\n    - path: debug.jpg\n      default_hidden: true\n      # type: image/jpg # auto-guessed\n")),(0,r.kt)("p",null,"Users will get switches to toggle debug visualizations:"),(0,r.kt)("img",{alt:"toggle visualizations",src:(0,l.Z)("img/hidden_by_default_switches.png")}),(0,r.kt)("h2",{id:"available-file-viewers"},"Available file viewers"),(0,r.kt)("p",null,"QA-Board tries to guess the right image viewer depending on the file extension or a ",(0,r.kt)("inlineCode",{parentName:"p"},"type")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"File"),(0,r.kt)("th",{parentName:"tr",align:null},"Viewer Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Viewer"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*.jpg*"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"*.png*"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"*.bmp*"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"*.tif*"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"*.pdf*"),"..."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"image/*")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Image"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*.plotly.json")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"plotly/json")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Plot.ly"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*.flame.json")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"flame/json")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"http://www.brendangregg.com/flamegraphs.html"},"Flame Graph")),", ",(0,r.kt)("a",{parentName:"td",href:"http://www.brendangregg.com/blog/2014-11-09/differential-flame-graphs.html"},"diffable"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*.html")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"text/html")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"HTML")," (assumes trusted input..!)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*.mp4")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"video/*")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Video")," (synced)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*.txt"),", unidentified"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"text/plain*")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Text")," (diffs, with VSCode's ",(0,r.kt)("a",{parentName:"td",href:"https://microsoft.github.io/monaco-editor/"},"Monaco Editor"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pointcloud/txt")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"pointcloud")," viewer (needs to be refactored, coupled to a specific internal project...)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"6dof/txt")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"6DoF")," viewer (needs to be refactored, coupled to a specific internal project...)"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"image-viewer"},"Image viewer"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Supports all common image formats."),(0,r.kt)("li",{parentName:"ul"},"Fast and smooth zoom & pan, synced. Fast image streaming via ",(0,r.kt)("a",{parentName:"li",href:"https://iiif.io"},"IIIF"),"."),(0,r.kt)("li",{parentName:"ul"},"Perceptual color difference."),(0,r.kt)("li",{parentName:"ul"},"Color tooltip."),(0,r.kt)("li",{parentName:"ul"},"Image filters (exposure, contrast, gamma...)."),(0,r.kt)("li",{parentName:"ul"},"Histograms per channel."),(0,r.kt)("li",{parentName:"ul"},"Automatic regions of interest.")),(0,r.kt)("img",{alt:"Image viewer",src:(0,l.Z)("img/image-viewer-autoroi.png")}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If your configurations or ",(0,r.kt)("a",{parentName:"p",href:"metadata-integration-external-databases"},"input metadata")," contain ",(0,r.kt)("inlineCode",{parentName:"p"},"roi: [{x, y, w, h, label}]"),', those "regions of interest" will be displayed and easily selectable.'))),(0,r.kt)("h3",{id:"regions-of-interest"},"Regions of interest"),(0,r.kt)("p",null,"The image viewer can thumbnails to navigate between Regions of Interest. To enable this, you must provide as ","[metadata-integration-external-databases]","(input metadata) some info. With YAML syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'width: 800   # optional, useful if your results are showed with downscaled resolution\nheight: 600  # optional, idem\nroi:\n- {x: 1408, y: 244, w: 121, h: 97, label: "Gradations and overshoots"}\n- {x: 455, y: 651, w: 58, h: 58, label: "False colors"}\n# you can override give the image dimension per ROI:\n- {image_width: 1600, image_height: 1200, x: 351, y: 567, w: 45, h: 53, label: "Details fine line"}\n')),(0,r.kt)("p",null,"If you click on the histogram button, you'll be able to select a region of interest and easily copy the format above:"),(0,r.kt)("img",{alt:"Image viewer",src:(0,l.Z)("img/image-viewer-selection.png")}),(0,r.kt)("h3",{id:"plotly-viewer"},"Plot.ly viewer"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://plot.ly/graphing-libraries/"},"The Plotly library")," has everything you need from bar charts to 3d plots."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"huge variety of plots"),(0,r.kt)("li",{parentName:"ul"},"interactive plots"),(0,r.kt)("li",{parentName:"ul"},"easy-ish to use with binding to ",(0,r.kt)("a",{parentName:"li",href:"https://plot.ly/python/getting-started/"},"python"),"/JS/matlab..."),(0,r.kt)("li",{parentName:"ul"},"web-based"),(0,r.kt)("li",{parentName:"ul"},"open-source and popular"),(0,r.kt)("li",{parentName:"ul"},"performant")),(0,r.kt)("img",{alt:"plotly gallery",src:(0,l.Z)("img/plotly-1.png")}),(0,r.kt)("img",{alt:"3d plot with plotly for LSF/Calibration",src:(0,l.Z)("img/plotly-3d-example.png")}),(0,r.kt)("p",null,"All you need is to save your plot data as JSON. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import plotly.graph_objects as go\nfig = go.Figure(data=go.Bar(y=[2, 3, 1]))\nwith open('graph.plotly.json', 'w') as f:\n  spec = fig.to_json() # '{\"layout\": {...}, \"data\": [{...}, {...}, ...]}'\n  f.write()\n")),(0,r.kt)("h3",{id:"text-viewer"},"Text Viewer"),(0,r.kt)("img",{alt:"Text/diff viewer",src:(0,l.Z)("img/text-viewer.jpg")}),(0,r.kt)("h3",{id:"flame-graphs"},"Flame Graphs"),(0,r.kt)("p",null,"We love Brendan Gregg's ",(0,r.kt)("a",{parentName:"p",href:"http://www.brendangregg.com/flamegraphs.html"},"flame charts")," and integrated Martin Spier's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spiermar/d3-flame-graph"},(0,r.kt)("inlineCode",{parentName:"a"},"d3-flame-graph")),". At a glance, you can check where you code spends its CPU cycles, and use ",(0,r.kt)("a",{parentName:"p",href:"(http://www.brendangregg.com/blog/2014-11-09/differential-flame-graphs.html)"},"differential flame graphs")," to debug regressions."),(0,r.kt)("img",{alt:"flame graphs viewer",src:(0,l.Z)("img/slides/flame-graphs.jpg")}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For a tutorial ",(0,r.kt)("a",{parentName:"p",href:"https://samsung.github.io/qaboard/blog/2020/06/24/flame-graphs"},"read our blog post"),".")),(0,r.kt)("h3",{id:"more-viewers"},"More Viewers?"),(0,r.kt)("p",null,"Tell us what you need! The next we'll implement is likely ",(0,r.kt)("a",{parentName:"p",href:"https://vega.github.io/vega/"},(0,r.kt)("strong",{parentName:"a"},"vega"))," specs. It would notably allow us to display ",(0,r.kt)("inlineCode",{parentName:"p"},"altair")," visualizations. We could also have a minimal integration with notebooks, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/visdom"},"visdom"),", ",(0,r.kt)("a",{parentName:"p",href:"https://webviz.io/"},"webiz"),"..."),(0,r.kt)("h2",{id:"dynamic-visualizations"},"Dynamic visualizations"),(0,r.kt)("p",null,"You can use a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pillarjs/path-to-regexp"},"special syntax")," to create dynamic visualizations at display-time. Users will be able to choose what to display using sliders / select options:"),(0,r.kt)("img",{alt:"Viewing each frame of a movie",src:(0,l.Z)("img/dynamic-outputs.gif")}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'{5,7} title="qaboard.yaml"',"{5,7}":!0,title:'"qaboard.yaml"'},'outputs:\n    visualizations:\n    - name: Movie Frames\n      # you can use the `/user/:name` syntax to match part of filenames\n      path: ":frame/output.jpg"\n      # you can match part of filenames (experimental)\n      path: ":frame/frame_:number.jpg"\n\n      # For more examples, the full syntax is available at:\n      # https://github.com/pillarjs/path-to-regexp\n\n')),(0,r.kt)("p",null,"You can also use regular expressions ",(0,r.kt)("strong",{parentName:"p"},"(inside parentheses!)")," to match which output files you want to view:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{4,6,8}","{4,6,8}":!0},'outputs:\n    visualizations:\n      # A common use case is matching file extensions\n      path: "(.*\\.jpg)"\n      # ... or parts of filenames\n      path: "(debug_.*\\.jpg)"\n      # you can mix with the previous syntax\n      path: ":frame/(.*\\.txt)"\n\n      # If you use regular expressions, we aware that:\n      # - You MUST use "( )" aka "capture groups" !\n      # - While you can often get away "(.*)/output.jpg", in many cases you\'d want "([^/]*)/output.jpg"\n      # - Parts of paths matched via regular expressions are not synced with other outputs. Prefer the ":name" syntax\n      #   Eg if you ask also to visualize "(.*)/debug_output.jpg" and "(.*)/output.jpg"\n      #   you will get two select inputs for the frame.\n')),(0,r.kt)("p",null,"By default, only one viewer/path is shown at a time, and you get sliders/select to decide what to show:"),(0,r.kt)("img",{alt:"Everything is synced",src:(0,l.Z)("img/dynamic-outputs-select.gif")}),(0,r.kt)("p",null,"If you want, you can visualize all matching files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{5-7}","{5-7}":!0},'   # --snip--\n    - name: KPI reports\n      path: "reports/:report"\n      type: plotly/json\n      display: single  # (default): will list views one after the other\n             # all     # will render all matching paths/views\n             # viewer  # let the viewer decide what to do... (EXPERIMENTAL)\n')),(0,r.kt)("h2",{id:"advanced-options-experimental"},"Advanced Options ","[EXPERIMENTAL]"),(0,r.kt)("h3",{id:"custom-styles"},"Custom Styles"),(0,r.kt)("p",null,"You can style your visualizations:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{3-7,10-12}","{3-7,10-12}":!0},"outputs:\n    # define global or per-view styles\n    style:\n        # use any CSS properties\n        width: 500px\n        # the style will be applied to the outer-container\n        # and passed down to the viewers\n    detailed_views:\n    - name: My debug visualization\n      style:\n        width: 400px   \n")),(0,r.kt)("h3",{id:"viewer-configuration"},"Viewer Configuration"),(0,r.kt)("p",null,"Some viewers can read extra configuration parameters from their configuration: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{5}","{5}":!0},"outputs:\n    detailed_views:\n    - name: My SLAM plot\n      type: 6dof/txt\n      show_3d: true\n")),(0,r.kt)("p",null,'You can specify those parameters at "display-time" by defining controls:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{2-7}","{2-7}":!0},"outputs:\n  controls:\n    - type: toggle\n      label: Debug\n      name: show_debug\n      default: false\n")))}g.isMDXComponent=!0}}]);