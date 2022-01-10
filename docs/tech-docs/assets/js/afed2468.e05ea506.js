"use strict";(self.webpackChunktech_docs=self.webpackChunktech_docs||[]).push([[615],{876:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7570:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=r(7896),a=r(1461),o=(r(2784),r(876)),i=["components"],l={},c="React Native",s={unversionedId:"frontend-frameworks/react-native",id:"frontend-frameworks/react-native",title:"React Native",description:"In React vs. Pure JS we compared React Native to ReactDOM, but it\u2019s not quite that simple. While React Native enables React to render to native platforms like iOS and Android, it also does a bunch of other things like:",source:"@site/docs/frontend-frameworks/react-native.md",sourceDirName:"frontend-frameworks",slug:"/frontend-frameworks/react-native",permalink:"/tech-docs/docs/frontend-frameworks/react-native",editUrl:"https://github.com/sterlingwes/dingus.business/tree/main/sites/tech-docs/docs/frontend-frameworks/react-native.md",tags:[],version:"current",frontMatter:{},sidebar:"frontend",previous:{title:"React vs. Pure JS",permalink:"/tech-docs/docs/frontend-frameworks/react"},next:{title:"APIs & State Management",permalink:"/tech-docs/docs/frontend-frameworks/apis-and-state"}},u=[],p={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"react-native"},"React Native"),(0,o.kt)("p",null,"In ",(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/React-vs-Pure-JS-a77837c86e184b779605112f292a30c0"},"React vs. Pure JS")," we compared React Native to ReactDOM, but it\u2019s not quite that simple. While React Native enables React to render to native platforms like iOS and Android, it also does a bunch of other things like:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"provide a way to expose platform APIs to javascript code through Native Modules (like control the camera or file picker)"),(0,o.kt)("li",{parentName:"ul"},"provides native classes like RCTRootView, that allow for more than one \u201crendering surface\u201d for the javascript to drive"),(0,o.kt)("li",{parentName:"ul"},"provides build tooling to help bundle the app\u2019s javascript within the native binary for distribution, install apps on simulators, and manage NPM dependencies with native code from the OSS community"),(0,o.kt)("li",{parentName:"ul"},"bundle developer tooling integrations like Flipper, a built-in inspector tool and debugger interface"),(0,o.kt)("li",{parentName:"ul"},"enable styling views & layout in a way that\u2019s similar to the web (flexbox through a native library called Yoga)"),(0,o.kt)("li",{parentName:"ul"},"handle interoperability with platform API changes as operating systems change (not something that\u2019s as common on the web)"),(0,o.kt)("li",{parentName:"ul"},"baked-in support for development mode vs. release mode (live reload, error overlays, direct integration with the default bundler: Metro)"),(0,o.kt)("li",{parentName:"ul"},"provide a bunch of helpful components out of the box beyond primitives like ",(0,o.kt)("inlineCode",{parentName:"li"},"View")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Text")),(0,o.kt)("li",{parentName:"ul"},"probably a lot more I\u2019ve missed?")),(0,o.kt)("p",null,"TODO:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"overview of components"),(0,o.kt)("li",{parentName:"ul"},"mobile considerations")))}d.isMDXComponent=!0}}]);