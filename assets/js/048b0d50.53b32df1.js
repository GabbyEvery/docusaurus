"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[45173],{61132:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(24246),r=(t(27378),t(40624));const i={tabItem:"tabItem_pnkT"};function o({children:e,hidden:n,className:t}){return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,t),hidden:n,children:e})}},97555:(e,n,t)=>{t.d(n,{Z:()=>C});var a=t(24246),r=t(27378),i=t(40624),o=t(75527),s=t(3620),l=t(44479),c=t(62821),u=t(52196),d=t(53589);function m(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function h(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function p(e){var n,t;return null!==(t=null===(n=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function g(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=null!=n?n:function(e){return p(e).map((({props:{value:e,label:n,attributes:t,default:a}})=>({value:e,label:n,attributes:t,default:a})))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f({value:e,tabValues:n}){return n.some((n=>n.value===e))}function b({queryString:e=!1,groupId:n}){const t=(0,s.k6)(),a=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n}),i=(0,c._X)(a),o=(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(t.location.search);n.set(a,e),t.replace(h(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){m(e,n,t[n])}))}return e}({},t.location),{search:n.toString()}))}),[a,t]);return[i,o]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=g(e),[o,s]=(0,r.useState)((()=>function({defaultValue:e,tabValues:n}){if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!f({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var t;const a=null!==(t=n.find((e=>e.default)))&&void 0!==t?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[c,u]=b({queryString:t,groupId:a}),[m,h]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,a]=(0,d.Nk)(n);return[t,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:a}),p=(()=>{const e=null!=c?c:m;return f({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{p&&s(p)}),[p]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),h(e)}),[u,h,i]),tabValues:i}}var x=t(29088);const y={tabList:"tabList_Qoir",tabItem:"tabItem_AQgk"};function k(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){k(e,n,t[n])}))}return e}function w(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function O({className:e,block:n,selectedValue:t,selectValue:r,tabValues:s}){const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const n=e.currentTarget,a=l.indexOf(n),i=s[a].value;i!==t&&(c(n),r(i))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;var t;n=null!==(t=l[a])&&void 0!==t?t:l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;var a;n=null!==(a=l[t])&&void 0!==a?a:l[l.length-1];break}}null==n||n.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},e),children:s.map((({value:e,label:n,attributes:r})=>(0,a.jsx)("li",w(j({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:e=>l.push(e),onKeyDown:d,onClick:u},r),{className:(0,i.Z)("tabs__item",y.tabItem,null==r?void 0:r.className,{"tabs__item--active":t===e}),children:null!=n?n:e}),e)))})}function q({lazy:e,children:n,selectedValue:t}){const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=o.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function D(e){const n=v(e);return(0,a.jsxs)("div",{className:(0,i.Z)("tabs-container",y.tabList),children:[(0,a.jsx)(O,j({},n,e)),(0,a.jsx)(q,j({},n,e))]})}function C(e){const n=(0,x.Z)();return(0,a.jsx)(D,w(j({},e),{children:p(e.children)}),String(n))}},57904:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=t(24246),r=t(71670),i=t(97555),o=t(61132);const s={},l="Diagram Examples",c={type:"mdx",permalink:"/tests/pages/diagrams",source:"@site/_dogfooding/_pages tests/diagrams.mdx",title:"Diagram Examples",description:"Invalid Diagrams",frontMatter:{},lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1718903736e3,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/_dogfooding/_pages tests/diagrams.mdx",unlisted:!1},u={},d=[{value:"Invalid Diagrams",id:"invalid-diagrams",level:2},{value:"Invalid type",id:"invalid-type",level:3},{value:"Invalid content",id:"invalid-content",level:3},{value:"Sequence Diagram",id:"sequence-diagram",level:2},{value:"Sequence Diagram (forest theme directive)",id:"sequence-diagram-forest-theme-directive",level:2},{value:"Gantt Chart",id:"gantt-chart",level:2},{value:"Flow Chart",id:"flow-chart",level:2},{value:"With Markdown:",id:"with-markdown",level:3},{value:"Class Diagram",id:"class-diagram",level:2},{value:"State Diagram",id:"state-diagram",level:2},{value:"Entity Relationship Diagram",id:"entity-relationship-diagram",level:2},{value:"User Journey",id:"user-journey",level:2},{value:"Pie Chart",id:"pie-chart",level:2},{value:"Requirement Diagram",id:"requirement-diagram",level:2},{value:"Gitgraph (Git) Diagram",id:"gitgraph-git-diagram",level:2},{value:"Mermaid in tabs",id:"mermaid-in-tabs",level:2},{value:"Mindmap",id:"mindmap",level:2},{value:"Quadrant Chart",id:"quadrant-chart",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",mermaid:"mermaid",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"diagram-examples",children:"Diagram Examples"}),"\n",(0,a.jsx)(n.h2,{id:"invalid-diagrams",children:"Invalid Diagrams"}),"\n",(0,a.jsx)(n.p,{children:"Those errors should not crash the whole page"}),"\n",(0,a.jsx)(n.h3,{id:"invalid-type",children:"Invalid type"}),"\n",(0,a.jsx)(n.mermaid,{value:"badType\n    participant Alice\n    participant Bob"}),"\n",(0,a.jsx)(n.h3,{id:"invalid-content",children:"Invalid content"}),"\n",(0,a.jsx)(n.mermaid,{value:"sequenceDiagram\n    badInstruction Alice\n    participant Bob"}),"\n",(0,a.jsx)(n.h2,{id:"sequence-diagram",children:"Sequence Diagram"}),"\n",(0,a.jsx)(n.mermaid,{value:"sequenceDiagram\n    participant Alice\n    participant Bob\n    Alice->>John: Hello John, how are you?\n    loop Health check\n        John->>John: Fight against hypochondria\n    end\n    Note right of John: Rational thoughts <br/>prevail!\n    John--\x3e>Alice: Great!\n    John->>Bob: How about you?\n    Bob--\x3e>John: Jolly good!"}),"\n",(0,a.jsx)(n.h2,{id:"sequence-diagram-forest-theme-directive",children:"Sequence Diagram (forest theme directive)"}),"\n",(0,a.jsx)(n.p,{children:"It is possible to override default config locally with Mermaid text directives such as:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'%%{init: { "theme": "forest" } }%%\n'})}),"\n",(0,a.jsx)(n.mermaid,{value:'%%{init: { "theme": "forest" } }%%\n\nsequenceDiagram\n    participant Alice\n    participant Bob\n    Alice->>John: Hello John, how are you?\n    loop Health check\n        John->>John: Fight against hypochondria\n    end\n    Note right of John: Rational thoughts <br/>prevail!\n    John--\x3e>Alice: Great!\n    John->>Bob: How about you?\n    Bob--\x3e>John: Jolly good!'}),"\n",(0,a.jsx)(n.h2,{id:"gantt-chart",children:"Gantt Chart"}),"\n",(0,a.jsx)(n.mermaid,{value:"gantt\ndateFormat  YYYY-MM-DD\ntitle Adding GANTT diagram to mermaid\nexcludes weekdays 2014-01-10\n\nsection A section\nCompleted task            :done,    des1, 2014-01-06,2014-01-08\nActive task               :active,  des2, 2014-01-09, 3d\nFuture task               :         des3, after des2, 5d\nFuture task2               :         des4, after des3, 5d"}),"\n",(0,a.jsx)(n.h2,{id:"flow-chart",children:"Flow Chart"}),"\n",(0,a.jsx)(n.mermaid,{value:"flowchart TD\n    A[Start] --\x3e B{Is it?}\n    B --\x3e|Yes| C[OK]\n    C --\x3e D[Rethink]\n    D --\x3e B\n    B ----\x3e|No| E[End]"}),"\n",(0,a.jsx)(n.h3,{id:"with-markdown",children:"With Markdown:"}),"\n",(0,a.jsx)(n.mermaid,{value:'flowchart LR\n    markdown["`This **is** _Markdown_`"]\n    newLines["`Line1\n    Line 2\n    Line 3`"]\n    markdown --\x3e newLines'}),"\n",(0,a.jsx)(n.h2,{id:"class-diagram",children:"Class Diagram"}),"\n",(0,a.jsx)(n.mermaid,{value:" classDiagram\n      Animal <|-- Duck\n      Animal <|-- Fish\n      Animal <|-- Zebra\n      Animal : +int age\n      Animal : +String gender\n      Animal: +isMammal()\n      Animal: +mate()\n      class Duck{\n          +String beakColor\n          +swim()\n          +quack()\n      }\n      class Fish{\n          -int sizeInFeet\n          -canEat()\n      }\n      class Zebra{\n          +bool is_wild\n          +run()\n      }"}),"\n",(0,a.jsx)(n.h2,{id:"state-diagram",children:"State Diagram"}),"\n",(0,a.jsx)(n.mermaid,{value:"stateDiagram-v2\n    [*] --\x3e Active\n\n    state Active {\n        [*] --\x3e NumLockOff\n        NumLockOff --\x3e NumLockOn : EvNumLockPressed\n        NumLockOn --\x3e NumLockOff : EvNumLockPressed\n        --\n        [*] --\x3e CapsLockOff\n        CapsLockOff --\x3e CapsLockOn : EvCapsLockPressed\n        CapsLockOn --\x3e CapsLockOff : EvCapsLockPressed\n        --\n        [*] --\x3e ScrollLockOff\n        ScrollLockOff --\x3e ScrollLockOn : EvScrollLockPressed\n        ScrollLockOn --\x3e ScrollLockOff : EvScrollLockPressed\n    }"}),"\n",(0,a.jsx)(n.h2,{id:"entity-relationship-diagram",children:"Entity Relationship Diagram"}),"\n",(0,a.jsx)(n.mermaid,{value:"erDiagram\n    CAR ||--o{ NAMED-DRIVER : allows\n    CAR {\n        string registrationNumber\n        string make\n        string model\n    }\n    PERSON ||--o{ NAMED-DRIVER : is\n    PERSON {\n        string firstName\n        string lastName\n        int age\n    }"}),"\n",(0,a.jsx)(n.h2,{id:"user-journey",children:"User Journey"}),"\n",(0,a.jsx)(n.mermaid,{value:"journey\n    title My working day\n    section Go to work\n      Make tea: 5: Me\n      Go upstairs: 3: Me\n      Do work: 1: Me, Cat\n    section Go home\n      Go downstairs: 5: Me\n      Sit down: 5: Me"}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["If there's too much space above it's due to a ",(0,a.jsx)(n.a,{href:"https://github.com/mermaid-js/mermaid/issues/3501",children:"Mermaid bug"})]})}),"\n",(0,a.jsx)(n.h2,{id:"pie-chart",children:"Pie Chart"}),"\n",(0,a.jsx)(n.mermaid,{value:'pie showData\n    title Key elements in Product X\n    "Calcium" : 42.96\n    "Potassium" : 50.05\n    "Magnesium" : 10.01\n    "Iron" :  5'}),"\n",(0,a.jsx)(n.h2,{id:"requirement-diagram",children:"Requirement Diagram"}),"\n",(0,a.jsx)(n.mermaid,{value:'    requirementDiagram\n\n    requirement test_req {\n    id: 1\n    text: the test text.\n    risk: high\n    verifymethod: test\n    }\n\n    functionalRequirement test_req2 {\n    id: 1.1\n    text: the second test text.\n    risk: low\n    verifymethod: inspection\n    }\n\n    performanceRequirement test_req3 {\n    id: 1.2\n    text: the third test text.\n    risk: medium\n    verifymethod: demonstration\n    }\n\n    interfaceRequirement test_req4 {\n    id: 1.2.1\n    text: the fourth test text.\n    risk: medium\n    verifymethod: analysis\n    }\n\n    physicalRequirement test_req5 {\n    id: 1.2.2\n    text: the fifth test text.\n    risk: medium\n    verifymethod: analysis\n    }\n\n    designConstraint test_req6 {\n    id: 1.2.3\n    text: the sixth test text.\n    risk: medium\n    verifymethod: analysis\n    }\n\n    element test_entity {\n    type: simulation\n    }\n\n    element test_entity2 {\n    type: word doc\n    docRef: reqs/test_entity\n    }\n\n    element test_entity3 {\n    type: "test suite"\n    docRef: github.com/all_the_tests\n    }\n\n\n    test_entity - satisfies -> test_req2\n    test_req - traces -> test_req2\n    test_req - contains -> test_req3\n    test_req3 - contains -> test_req4\n    test_req4 - derives -> test_req5\n    test_req5 - refines -> test_req6\n    test_entity3 - verifies -> test_req5\n    test_req <- copies - test_entity2'}),"\n",(0,a.jsx)(n.h2,{id:"gitgraph-git-diagram",children:"Gitgraph (Git) Diagram"}),"\n",(0,a.jsx)(n.mermaid,{value:"%%{init: { 'logLevel': 'debug', 'theme': 'base' } }%%\n      gitGraph\n        commit\n        branch hotfix\n        checkout hotfix\n        commit\n        branch develop\n        checkout develop\n        commit id:\"ash\" tag:\"abc\"\n        branch featureB\n        checkout featureB\n        commit type:HIGHLIGHT\n        checkout main\n        checkout hotfix\n        commit type:NORMAL\n        checkout develop\n        commit type:REVERSE\n        checkout featureB\n        commit\n        checkout main\n        merge hotfix\n        checkout featureB\n        commit\n        checkout develop\n        branch featureA\n        commit\n        checkout develop\n        merge hotfix\n        checkout featureA\n        commit\n        checkout featureB\n        commit\n        checkout develop\n        merge featureA\n        branch release\n        checkout release\n        commit\n        checkout main\n        commit\n        checkout release\n        merge main\n        checkout develop\n        merge release"}),"\n",(0,a.jsx)(n.h2,{id:"mermaid-in-tabs",children:"Mermaid in tabs"}),"\n","\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsxs)(o.Z,{value:"tab-a",children:[(0,a.jsx)(n.p,{children:"The following mermaid diagram is shown:"}),(0,a.jsx)(n.mermaid,{value:"graph LR\n  a ---\x3e c(10)\n  b ---\x3e c(10)"})]}),(0,a.jsxs)(o.Z,{value:"tab-b",children:[(0,a.jsx)(n.p,{children:"This mermaid diagram is not displayed:"}),(0,a.jsx)(n.mermaid,{value:"graph LR\n  d ---\x3e z(42)\n  e ---\x3e z(42)"})]})]}),"\n",(0,a.jsx)(n.h2,{id:"mindmap",children:"Mindmap"}),"\n",(0,a.jsx)(n.mermaid,{value:"mindmap\n  root((conda-forge))\n    (Repos)\n        (Package building)\n            [*-feedstock]\n            [staged-recipes]\n            [cdt-builds]\n            [msys2-recipes]\n        (Maintenance)\n            [admin-requests]\n            [repodata-patches]\n        (Configuration)\n            [.github]\n            [.cirun]\n            [conda-forge-pinning]\n            [conda-forge-ci-setup]\n            [docker-images]\n            [conda-smithy]\n        (Automations)\n            [admin-migrations]\n            [artifact-validation]\n            [regro/cf-scripts]\n            [conda-forge-webservices]\n            [regro/cf-graph-countyfair]\n            [regro/libcfgraph + regro/libcflib]\n            [feedstock-outputs]\n        (Communications)\n            [conda-forge.github.io]\n            [blog]\n            [status]\n            [by-the-numbers]\n            [conda-forge-status-monitor]\n            [feedstocks]\n    (Bots & apps)\n        [conda-forge-admin]\n        [conda-forge-bot]\n        [conda-forge-coordinator]\n        [conda-forge-daemon]\n        [conda-forge-linter]\n        [conda-forge-manager]\n        [conda-forge-status]\n        [regro-cf-autotick-bot]\n        [conda-forge-curator]\n        [conda-forge-webservices]\n    (Delivery)\n        [anaconda.org]\n        [ghcr.io]\n        [quay.io]\n    (Installers)\n        Miniforge\n        Mambaforge\n    (CI for builds)\n        Azure Pipelines\n        Travis CI\n        cirun.io\n    (Infra)\n        Heroku\n        Github Actions\n        Circle CI"}),"\n",(0,a.jsx)(n.h2,{id:"quadrant-chart",children:"Quadrant Chart"}),"\n",(0,a.jsx)(n.mermaid,{value:"quadrantChart\n    title Reach and engagement of campaigns\n    x-axis Low Reach --\x3e High Reach\n    y-axis Low Engagement --\x3e High Engagement\n    quadrant-1 We should expand\n    quadrant-2 Need to promote\n    quadrant-3 Re-evaluate\n    quadrant-4 May be improved\n    Campaign A: [0.3, 0.6]\n    Campaign B: [0.45, 0.23]\n    Campaign C: [0.57, 0.69]\n    Campaign D: [0.78, 0.34]\n    Campaign E: [0.40, 0.34]\n    Campaign F: [0.35, 0.78]"})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},71670:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var a=t(27378);const r={},i=a.createContext(r);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);