(this["webpackJsonpemployee-info"]=this["webpackJsonpemployee-info"]||[]).push([[0],{31:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(22),r=n.n(c),i=(n(31),n(14)),l=n(8),o=n(9),u=n(11),j=n(10),p=(n(32),n(26)),h=n(23),b=function(e){return{type:"SUBMIT_NAME",payload:e}},d={employees:[]},m=Object(h.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SUBMIT_NAME":return{employees:[].concat(Object(p.a)(e.employees),[t.payload])};default:return e}})),O=n(13),f=n(2),x=(n(34),n(1)),g=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"formContainer",children:[Object(x.jsx)("h1",{children:"fill employee details"}),Object(x.jsxs)("form",{onSubmit:this.props.handleSubmit,children:[Object(x.jsx)("input",{required:!0,type:"text",onChange:this.props.setNameValue,value:this.props.state.name,placeholder:"Name"}),Object(x.jsx)("input",{required:!0,type:"text",onChange:this.props.setEmpidValue,value:this.props.state.empId,placeholder:"employee Id"}),Object(x.jsx)("input",{required:!0,type:"number",onChange:this.props.setAgeValue,value:this.props.state.age,placeholder:"age"}),Object(x.jsx)("input",{className:"formSubmit",type:"submit",value:"submit"})]})]})}}]),n}(s.a.Component),v=(n(36),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"tableContainer",children:[console.log(this.props.store.getState()),Object(x.jsxs)("table",{children:[Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"name"}),Object(x.jsx)("th",{children:"employee id"}),Object(x.jsx)("th",{children:"age"})]}),this.props.store.getState().employees.map((function(e){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:e.name}),Object(x.jsx)("td",{children:e.empId}),Object(x.jsx)("td",{children:e.age})]},e.empId)}))]})]})}}]),n}(s.a.Component)),y=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={name:"",empId:"",age:""},e.setNameValue=function(t){var n=Object(i.a)({},e.state);n.name=t.target.value,e.setState(n)},e.setEmpidValue=function(t){var n=Object(i.a)({},e.state);n.empId=t.target.value,e.setState(n)},e.setAgeValue=function(t){var n=Object(i.a)({},e.state);n.age=t.target.value,e.setState(n)},e.handleSubmit=function(t){t.preventDefault(),m.dispatch(b(e.state)),e.setState({name:"",empId:"",age:""}),alert("submited successfully")},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(x.jsx)(O.a,{children:Object(x.jsxs)("div",{className:"App",children:[Object(x.jsxs)("nav",{children:[Object(x.jsx)(O.b,{to:"/",children:Object(x.jsx)("button",{children:"home"})}),Object(x.jsx)(O.b,{to:"/table",children:Object(x.jsx)("button",{children:"table"})})]}),Object(x.jsxs)(f.c,{children:[Object(x.jsx)(f.a,{path:"/table",children:Object(x.jsx)(v,{store:m})}),Object(x.jsx)(f.a,{path:"/",children:Object(x.jsx)(g,{state:this.state,setNameValue:this.setNameValue,setEmpidValue:this.setEmpidValue,setAgeValue:this.setAgeValue,handleSubmit:this.handleSubmit})})]})]})})}}]),n}(s.a.Component),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};r.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(y,{})}),document.getElementById("root")),S()}},[[41,1,2]]]);
//# sourceMappingURL=main.11394e5d.chunk.js.map