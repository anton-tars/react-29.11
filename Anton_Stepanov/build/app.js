!function(e){function t(t){for(var r,o,i=t[0],u=t[1],s=t[2],l=0,p=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(f&&f(t);p.length;)p.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={0:0},a={0:0},c=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{2:1,3:1,4:1,5:1,6:1,7:1,8:1,9:1,10:1}[e]&&t.push(o[e]=new Promise((function(t,n){for(var r=e+".main.css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=(f=c[u]).getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(s===r||s===a))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){var f;if((s=(f=l[u]).getAttribute("data-href"))===r||s===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],p.parentNode.removeChild(p),n(c)},p.href=a,document.getElementsByTagName("head")[0].appendChild(p)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=function(e){return i.p+""+({}[e]||e)+".bundle.js"}(e);var s=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}a[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var u=window.webpackJsonp=window.webpackJsonp||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=s;c.push([97,1]),n()}({97:function(e,t,n){"use strict";n.r(t);var r,o=n(0),a=n.n(o),c=n(6),i=n.n(c),u=n(45),s=n(17),l=n(14),f=n(15),p=n(61),y=n(57),b=n(66),h=n.n(b),m=n(67),d=n.n(m),g=n(34),v=n(129),O=n(128),w=Object(O.a)({CREATE_CHAT:function(e){return{name:e}},SET_CHAT_ID:function(e){return{chatId:e}}}),j=w.createChat,_=w.setChatId,E=Object(O.a)({LOAD_MESSENGER:function(){return{}},SEND_MESSAGE:function(e,t){return{chatId:e,message:t}},BOT_MESSAGE:function(e,t){return{chatId:e,status:t}}}),S=E.loadMessenger,P=E.sendMessage,C=E.botMessage,k=n(32),T=n.n(k);function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N,M=Object(v.a)((I(r={},S,(function(e,t){t.payload;return{chatId:1,chats:{1:{name:"First chat",messages:[1]},2:{name:"Second chat",messages:[2]},3:{name:"New chat",messages:[3]}},messages:{1:{name:"Robot",content:"Привет путник, приветствую тебя в нашем чате!"},2:{name:"Robot",content:"Привет путник, приветствую тебя в нашем чате!"},3:{name:"Robot",content:"Привет путник, приветствую тебя в нашем чате!"}},botMessage:{}}})),I(r,j,(function(e,t){var n=t.payload.name,r=Object.keys(e.chats).length+1;return T()(e,{chats:{$merge:I({},r,{name:n,messages:[]})}})})),I(r,_,(function(e,t){var n=t.payload.chatId;return T()(e,{$merge:{chatId:n}})})),I(r,P,(function(e,t){var n=t.payload,r=n.chatId,o=n.message,a=Object.keys(e.messages).length+1;return T()(e,{messages:{$merge:I({},a,o)},chats:I({},r,{messages:{$push:[a]}})})})),I(r,C,(function(e,t){var n=t.payload,r=n.chatId,o=n.status;return T()(e,{botMessage:{$merge:{chatId:r,status:o}}})})),r),{chatId:1,chats:{},messages:{},botMessage:{}}),A=Object(O.a)({LOAD_PROFILE:function(){return{}},CHANGE_NAME:function(e){return{name:e}}}),R=A.loadProfile,x=A.changeName;function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var L=Object(v.a)((D(N={},R,(function(e,t){t.payload;return{name:"Anton"}})),D(N,x,(function(e,t){var n=t.payload.name;return T()(e,{name:n})})),N),{name:""}),B=function(e){return Object(l.c)({router:Object(g.b)(e),messenger:M,profile:L})},q=[function(e){return function(t){return function(n){"@@router/LOCATION_CHANGE"===n.type&&setTimeout((function(){return e.dispatch(_(n.payload.location.pathname.match(/\d+/)[0]))}),10),t(n)}}},function(e){return function(t){return function(n){switch(n.type){case"SEND_MESSAGE":"Robot"!==n.payload.message.name&&(setTimeout((function(){return e.dispatch(P(n.payload.chatId,{name:"Robot",content:"Hello, "+n.payload.message.name+", how are you?"}))}),1e3),setTimeout((function(){return e.dispatch(C(n.payload.chatId,1))}),1e3))}return t(n)}}}],G=n(69),H=n.n(G);function U(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var F={key:"messenger",storage:h.a,stateReconciler:d.a,whitelist:["messenger","profile"]},K=Object(f.a)();var W=function(){var e=Object(l.e)(Object(y.a)(F,B(K)),{},Object(l.d)(l.a.apply(void 0,[Object(p.a)(K),H.a].concat(U(q))),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(){}));return{store:e,persistor:Object(y.b)(e)}},$=n(25),z=n(70),X=n(2),J=n.n(X);function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Y(e,t){return!t||"object"!==V(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Z(e){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ee(e,t){return(ee=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.e(3).then(n.t.bind(null,143,7));var ne=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Y(this,Z(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ee(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"Messenger"),a.a.createElement("span",{className:"chat-name",style:{fontSize:"20px"}},"Чат ",this.props.chatId),a.a.createElement(u.b,{className:"profile-link",to:"/profile/"},"Profile"))}}])&&Q(n.prototype,r),o&&Q(n,o),t}(o.Component);te(ne,"propTypes",{chatId:J.a.number}),te(ne,"defaultProps",{chatId:1});var re=n(123),oe=n(125),ae=n(126),ce=n(130),ie=n(127),ue=n(124),se=n(73),le=n.n(se);function fe(e){return(fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function pe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ye(e){return(ye=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function be(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function he(e,t){return(he=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function me(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.e(2).then(n.t.bind(null,145,7));var de=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return r=this,o=(e=ye(t)).call.apply(e,[this].concat(c)),n=!o||"object"!==fe(o)&&"function"!=typeof o?be(r):o,me(be(n),"state",{chatname:""}),me(be(n),"handleInputChange",(function(e){var t=e.target.value,r=e.target.name;n.setState(me({},r,t))})),me(be(n),"handleClick",(function(e){n.props.onCreateChat(n.state.chatname),n.setState({chatname:""})})),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&he(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this,t=this.state.chatname;return a.a.createElement("div",{className:"chatForm"},a.a.createElement(ie.a,{name:"chatname",value:t,className:"nameInput",placeholder:"Новый чат",fullWidth:!0,onChange:this.handleInputChange,style:{fontSize:"22px"},variant:"outlined"}),a.a.createElement(ue.a,{className:"submitBtn",variant:"contained",color:"primary",fullWidth:!0,onClick:function(){return e.handleClick()},endIcon:a.a.createElement(le.a,null)},"Create"))}}])&&pe(n.prototype,r),o&&pe(n,o),t}(o.Component),ge=n(47),ve=n.n(ge);function Oe(e){return(Oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function we(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function je(e){return(je=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _e(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ee(e,t){return(Ee=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.e(10).then(n.t.bind(null,144,7));var Pe=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return r=this,o=(e=je(t)).call.apply(e,[this].concat(c)),n=!o||"object"!==Oe(o)&&"function"!=typeof o?_e(r):o,Se(_e(n),"handleNavigate",(function(e){n.props.push(e)})),Se(_e(n),"handleCreateChat",(function(e){n.props.onCreateChat(e)})),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ee(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this,t=this.props.chats,n=this.props.chatId,r=[];for(var o in t)r.push({key:o,link:"/chat/"+o+"/"});return a.a.createElement("div",{className:"items-list"},a.a.createElement(re.a,null,r.map((function(r){return a.a.createElement(oe.a,{selected:n===r.key,button:!0,key:r.key,onClick:function(){return e.handleNavigate("/chat/".concat(r.key,"/"))}},a.a.createElement(ae.a,null,a.a.createElement(ve.a,null),a.a.createElement(ce.a,{primary:t[r.key].name})))}))),a.a.createElement(de,{onCreateChat:this.handleCreateChat}))}}])&&we(n.prototype,r),o&&we(n,o),t}(o.Component);Se(Pe,"propTypes",{chatId:J.a.number.isRequired,chats:J.a.object.isRequired});var Ce=n(74),ke=n.n(Ce);function Te(e){return(Te="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ie(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ne(e,t){return!t||"object"!==Te(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Me(e){return(Me=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ae(e,t){return(Ae=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.e(5).then(n.t.bind(null,148,7));var Re,xe,De,Le={name:J.a.string,content:J.a.string.isRequired},Be=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Ne(this,Me(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ae(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.name,n=e.content,r=ke()("message",{"message-person":"Robot"!==t});return a.a.createElement("div",{className:r},a.a.createElement("b",null,t,":")," ",n)}}])&&Ie(n.prototype,r),o&&Ie(n,o),t}(o.Component);function qe(e){return(qe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ge(){return(Ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function He(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ue(e,t){return!t||"object"!==qe(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Fe(e){return(Fe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ke(e,t){return(Ke=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}De=Le,(xe="propTypes")in(Re=Be)?Object.defineProperty(Re,xe,{value:De,enumerable:!0,configurable:!0,writable:!0}):Re[xe]=De,n.e(7).then(n.t.bind(null,147,7));var We=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Ue(this,Fe(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ke(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"message-list"},this.props.chat.messages.map((function(t){return a.a.createElement(Be,Ge({},e.props.messagesList[t],{key:t}))})))}}])&&He(n.prototype,r),o&&He(n,o),t}(o.Component);function $e(e){return($e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ze(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Xe(e){return(Xe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Je(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ve(e,t){return(Ve=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Qe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(We,"propTypes",{messages:J.a.arrayOf(J.a.shape(Le))}),n.e(9).then(n.t.bind(null,149,7));var Ye=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return r=this,o=(e=Xe(t)).call.apply(e,[this].concat(c)),n=!o||"object"!==$e(o)&&"function"!=typeof o?Je(r):o,Qe(Je(n),"state",{name:"",content:""}),Qe(Je(n),"handleInputChange",(function(e){var t=e.target.value,r=e.target.name;n.setState(Qe({},r,t))})),Qe(Je(n),"handleKeyUp",(function(e){13===e.keyCode&&e.ctrlKey&&(n.props.onSendMessage({name:n.state.name,content:n.state.message}),n.setState({message:""}))})),Qe(Je(n),"handleClick",(function(e){n.props.onSendMessage({name:n.state.name,content:n.state.message}),n.setState({message:""})})),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ve(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this,t=this.state,n=t.name,r=t.message;return a.a.createElement("div",{className:"sendBox"},a.a.createElement(ie.a,{name:"name",value:n,className:"nameInput",placeholder:"Введите имя",fullWidth:!0,onChange:this.handleInputChange,style:{fontSize:"22px"},variant:"outlined"}),a.a.createElement(ie.a,{name:"message",value:r,className:"messageTextarea",fullWidth:!0,multiline:!0,placeholder:"Введите сообщение",style:{fontSize:"22px"},rows:"4",onChange:this.handleInputChange,onKeyUp:function(){return e.handleKeyUp(event)},autoFocus:!0}),a.a.createElement(ue.a,{className:"submitBtn",variant:"contained",color:"primary",fullWidth:!0,onClick:function(){return e.handleClick()},endIcon:a.a.createElement(ve.a,null)},"Send"))}}])&&ze(n.prototype,r),o&&ze(n,o),t}(o.Component);function Ze(e){return(Ze="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function et(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function tt(e){return(tt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function nt(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function rt(e,t){return(rt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ot(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.e(6).then(n.t.bind(null,146,7));var at=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return r=this,o=(e=tt(t)).call.apply(e,[this].concat(c)),n=!o||"object"!==Ze(o)&&"function"!=typeof o?nt(r):o,ot(nt(n),"sendMessage",(function(e){n.props.onSendMessage(e)})),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&rt(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return null!=this.props.chats&&(this.chat=this.props.chats[this.props.chatId]),a.a.createElement("div",{className:"messenger"},this.chat?a.a.createElement(We,{chat:this.chat,messagesList:this.props.messages}):"",a.a.createElement(Ye,{onSendMessage:this.sendMessage}))}}])&&et(n.prototype,r),o&&et(n,o),t}(o.Component);function ct(e){return(ct="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function it(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ut(e){return(ut=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function st(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function lt(e,t){return(lt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}ot(at,"propTypes",{messages:J.a.object.isRequired}),n.e(4).then(n.t.bind(null,142,7));var ft=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return r=this,o=(e=ut(t)).call.apply(e,[this].concat(c)),n=!o||"object"!==ct(o)&&"function"!=typeof o?st(r):o,function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(st(n),"sendMessage",(function(e){n.props.onSendMessage(e)})),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&lt(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return a.a.createElement("div",{className:"layout"},a.a.createElement("div",{className:"header"},a.a.createElement(ne,{chatId:this.props.chatId})),a.a.createElement("div",{className:"messenger-content"},a.a.createElement("div",{className:"chat-list"},a.a.createElement(Pe,{chatId:this.props.chatId,chats:this.props.chats,push:this.props.push,onCreateChat:this.props.onCreateChat})),a.a.createElement("div",{className:"messages-list"},a.a.createElement(at,{chatId:this.props.chatId,chats:this.props.chats,messages:this.props.messages,onSendMessage:this.sendMessage}))))}}])&&it(n.prototype,r),o&&it(n,o),t}(o.Component),pt=n(13);function yt(e){return(yt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function bt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ht(e){return(ht=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function mt(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function dt(e,t){return(dt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function gt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var vt=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return r=this,o=(e=ht(t)).call.apply(e,[this].concat(c)),n=!o||"object"!==yt(o)&&"function"!=typeof o?mt(r):o,gt(mt(n),"handleSendMessage",(function(e){n.props.sendMessage(n.props.chatId,e)})),gt(mt(n),"handleCreateChat",(function(e){n.props.createChat(e)})),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&dt(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){0==Object.keys(this.props.chats).length&&this.props.loadMessenger()}},{key:"render",value:function(){return a.a.createElement(ft,{chatId:this.props.chatId,chats:this.props.chats,push:this.props.push,messages:this.props.messages,profile:this.props.profile,onSendMessage:this.handleSendMessage,onCreateChat:this.handleCreateChat})}}])&&bt(n.prototype,r),o&&bt(n,o),t}(o.Component);gt(vt,"propTypes",{chatId:J.a.number,push:J.a.func.isRequired});var Ot=Object($.c)((function(e,t){return{chatId:e.messenger.chatId,chats:e.messenger.chats,messages:e.messenger.messages}}),(function(e){return Object(l.b)({loadMessenger:S,sendMessage:P,createChat:j,push:pt.d,setChatId:_},e)}))(vt);function wt(e){return(wt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function jt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _t(e,t){return!t||"object"!==wt(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Et(e){return(Et=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function St(e,t){return(St=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.e(8).then(n.t.bind(null,150,7));var Pt=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),_t(this,Et(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&St(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return console.log(this.props),a.a.createElement("div",{className:"profile"},"Profile ",this.props.name)}}])&&jt(n.prototype,r),o&&jt(n,o),t}(o.Component);function Ct(e){return(Ct="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function kt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Tt(e){return(Tt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function It(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Nt(e,t){return(Nt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Mt=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return r=this,o=(e=Tt(t)).call.apply(e,[this].concat(c)),n=!o||"object"!==Ct(o)&&"function"!=typeof o?It(r):o,function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(It(n),"handleChangeName",(function(e){n.props.changeName(e)})),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Nt(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.props.loadProfile()}},{key:"render",value:function(){return a.a.createElement(Pt,{name:this.props.profile.name})}}])&&kt(n.prototype,r),o&&kt(n,o),t}(o.Component),At=Object($.c)((function(e,t){return{profile:e.profile}}),(function(e){return Object(l.b)({loadProfile:R,changeName:x},e)}))(Mt);function Rt(e){return(Rt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function xt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Dt(e,t){return!t||"object"!==Rt(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Lt(e){return(Lt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Bt(e,t){return(Bt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var qt=W(),Gt=qt.store,Ht=qt.persistor,Ut=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Dt(this,Lt(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Bt(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return a.a.createElement($.a,{store:Gt},a.a.createElement(z.a,{loading:null,persistor:Ht},a.a.createElement(g.a,{history:K},a.a.createElement(u.a,null,a.a.createElement(s.c,null,a.a.createElement(s.a,{exact:!0,path:"/",component:Ot}),a.a.createElement(s.a,{exact:!0,path:"/chat/:chatId",component:Ot}),a.a.createElement(s.a,{exact:!0,path:"/profile/",render:function(){return a.a.createElement(At,null)}}))))))}}])&&xt(n.prototype,r),o&&xt(n,o),t}(o.Component);i.a.render(a.a.createElement(Ut,null),document.getElementById("root"))}});