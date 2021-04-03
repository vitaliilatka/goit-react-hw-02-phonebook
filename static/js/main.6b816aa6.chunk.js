(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={buttonForm:"ContactForm_buttonForm__1h7NH"}},13:function(t,e,n){t.exports={container:"Container_container__NWeWv"}},14:function(t,e,n){t.exports={Filter:"Filter_Filter__VHipU"}},29:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(9),o=n.n(r),i=n(15),s=n(3),l=n(4),u=n(6),b=n(5),d=n(10),j=n.n(d),h=n(7),m=n.n(h),f=n(0),C=function(t){var e=t.name,n=t.number,a=t.onClickRemove;return Object(f.jsxs)("li",{className:m.a.ContactsListItem,children:[Object(f.jsxs)("p",{children:[e,": ",n]}),Object(f.jsx)("button",{type:"button",className:m.a.ContactsList__button,onClick:a,children:"Delete"})]})},v=function(t){var e=t.filteredContacts,n=t.onRemove;return e.length>0&&Object(f.jsx)("ul",{className:m.a.ContactsList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(f.jsx)(C,{name:a,number:c,onClickRemove:function(){return n(e)}},e)}))})},O=n(11),p=n(12),x=n.n(p),g={name:"",number:""},_=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state=g,t.handleChange=function(e,n){var a=t.props.contacts;if("name"===e){var c=a.find((function(t){return t.name.toLowerCase()===n.target.value.toLowerCase()}));c&&alert("".concat(c.name," is already in contacts!"))}t.setState(Object(O.a)({},e,n.target.value))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number,r=t.props,o=r.contacts,i=r.onAddContact,s=o.find((function(t){return t.name.toLowerCase()===a.toLocaleLowerCase()}));if(s&&alert("".concat(s.name," is already in contacts!")),!s&&a&&c)return i(a,c),void t.setState(g)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.name,a=e.number;return Object(f.jsxs)("form",{children:[Object(f.jsx)("h3",{children:"Name"}),Object(f.jsx)("label",{children:Object(f.jsx)("input",{type:"text",value:n,onChange:function(e){return t.handleChange("name",e)}})}),Object(f.jsx)("br",{}),Object(f.jsx)("h3",{children:"Number"}),Object(f.jsx)("label",{children:Object(f.jsx)("input",{type:"tel",value:a,onChange:function(e){return t.handleChange("number",e)}})}),Object(f.jsx)("br",{}),Object(f.jsx)("button",{type:"submit",className:x.a.buttonForm,children:"Add contact"})]})}}]),n}(a.Component),y=n(13),L=n.n(y),F=function(t){var e=t.children;return Object(f.jsx)("div",{className:L.a.container,children:e})},w=n(14),k=n.n(w),N=function(t){var e=t.value,n=t.onChangeFilter;return Object(f.jsxs)("div",{className:k.a.Filter,children:[Object(f.jsx)("p",{children:"Find contacts by name"}),Object(f.jsx)("input",{type:"text",value:e,onChange:function(t){return n(t.target.value)}})]})};N.defaultProps={value:""};var S=N,R=(n(29),function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e,n){var a={id:j.a.generate(),name:e,number:n};t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[a])}}))},t.handleChangeFilter=function(e){t.setState({filter:e})},t.getFilteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.handleRemove=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter;return Object(f.jsxs)(F,{children:[Object(f.jsxs)("section",{title:"Phonebook",className:"Section",children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(_,{contacts:e,onAddContact:this.addContact})]}),Object(f.jsxs)("section",{title:"Contacts",className:"Section",children:[Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(S,{value:n,onChangeFilter:this.handleChangeFilter}),Object(f.jsx)(v,{filteredContacts:this.getFilteredContacts(),onRemove:this.handleRemove})]})]})}}]),n}(a.Component));n(30);o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(R,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={ContactsList:"ContactList_ContactsList__3-kwx",ContactListItem:"ContactList_ContactListItem__3y2ld"}}},[[31,1,2]]]);
//# sourceMappingURL=main.6b816aa6.chunk.js.map