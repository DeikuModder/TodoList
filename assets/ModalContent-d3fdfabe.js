var p=Object.defineProperty;var x=(i,e,s)=>e in i?p(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s;var l=(i,e,s)=>(x(i,typeof e!="symbol"?e+"":e,s),s);import{r as n,u as j,j as t}from"./index-b644265e.js";class v{constructor(e,s,r=!1){l(this,"title");l(this,"priority");l(this,"isChecked");this.title=e,this.priority=s,this.isChecked=r}}const N=({onClose:i})=>{const[e,s]=n.useState(""),[r,o]=n.useState(""),d=j(),{taskArray:c,setTaskArray:u}=d,h=a=>{a.preventDefault();const m=new v(e,r);u([...c,m]),i()};return t.jsx("div",{id:"modalScreen",children:t.jsxs("div",{id:"modalContent",children:[t.jsx("div",{id:"btnContainer",children:t.jsx("button",{className:"closeBtn",onClick:i,children:"X"})}),t.jsx("div",{id:"modalMainForm",children:t.jsxs("form",{onSubmit:h,name:"newTaskData",children:[t.jsxs("div",{className:"formInputs",children:[t.jsx("label",{htmlFor:"taskTitleInput"}),t.jsxs("div",{className:"container",children:[t.jsx("div",{className:"leftSide",children:t.jsx("p",{children:"Title:"})}),t.jsx("div",{className:"rightSide",children:t.jsx("input",{value:e,onChange:a=>s(a.target.value),type:"text",id:"taskTitleInput",required:!0})})]}),t.jsx("label",{htmlFor:"priority"}),t.jsxs("div",{className:"container",children:[t.jsx("div",{className:"leftSide",children:t.jsx("p",{children:"Priority:"})}),t.jsx("div",{className:"rightSide",children:t.jsxs("select",{value:r,onChange:a=>{o(a.target.value)},id:"priority",name:"priority",required:!0,children:[t.jsx("option",{defaultValue:"",children:"Select priorotiy"}),t.jsx("option",{value:"Highly Important",children:"Highly Important"}),t.jsx("option",{value:"Important",children:"Important"}),t.jsx("option",{value:"Normal",children:"Normal"}),t.jsx("option",{value:"Not important",children:"Not important"})]})})]})]}),t.jsx("input",{type:"submit",value:"Create task",className:"submitBtn"})]})})]})})};export{N as default};
