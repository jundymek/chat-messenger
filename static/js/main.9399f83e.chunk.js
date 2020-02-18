(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],[,,,,,function(e,a,t){e.exports=t(13)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(3),c=t.n(s),l=(t(10),t(1));t(11);function o(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"logo__title"},"Chat"),r.a.createElement("p",{className:"logo__subtitle"},"to JS master"))}function m(e){var a=e.isBlue;return r.a.createElement("svg",{className:a?"user-image user-image--blue":"user-image",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},r.a.createElement("circle",{cx:"16.022",cy:"15.977",r:"14.499"}),r.a.createElement("path",{className:a?"user-image__patch user-image__patch--hovered":"user-image__patch",d:"M16.022.159C7.286.159.204 7.241.204 15.977s7.082 15.819 15.818 15.819S31.84 24.713 31.84 15.977 24.759.159 16.022.159zm-.028 6.516c2.382 0 4.312 2.284 4.312 5.102 0 2.816-1.894 6.225-4.274 6.225-2.382 0-4.351-3.408-4.351-6.225 0-2.818 1.932-5.102 4.313-5.102zm8.65 17.627c0 .853-.674.977-1.466.977H8.875c-.791 0-1.463-.124-1.463-.977 0 0-.6-6.235 4.157-8.699.818 1.867 2.352 3.414 4.464 3.414 1.729 0 3.512-1.563 4.332-3.433 4.754 2.465 4.28 8.718 4.279 8.718z"}))}var i=function(e){var a=e.username,t=e.setUsername;return r.a.createElement("section",{className:"header"},r.a.createElement("div",{className:"header__logo-wrapper"},r.a.createElement(o,null)),r.a.createElement("div",{className:"header__login-wrapper"},r.a.createElement("span",{className:"header__login-username"},a),r.a.createElement("button",{className:"header__logout-button",onClick:function(){return t("")}},"Logout"),r.a.createElement(m,{isBlue:!0})))};function u(e){var a=e.allMessages,t=Object(n.useRef)(null);Object(n.useEffect)((function(){t.current&&t.current.scrollIntoView({behavior:"smooth"})}),[a]);return r.a.createElement("div",{className:"chat__messages"},r.a.createElement("ul",{className:"messages"},a.map((function(e,a){return r.a.createElement("li",{key:a,className:"messages__item messages__item--".concat((t=e[0],"John Doe"===t?"User1":"User2"))},e[1]);var t})),r.a.createElement("div",{ref:t})))}var g=t(4);function _(e){var a=e.username,t=(e.allMessages,e.setAllMessages),s=Object(n.useState)(""),c=Object(l.a)(s,2),o=c[0],m=c[1],i=Object(n.useRef)(null);return r.a.createElement("form",{className:"message-form",onSubmit:function(e){return function(e,a,n){e.preventDefault(),t((function(e){return[].concat(Object(g.a)(e),[[a,n]])})),i.current&&(i.current.value="")}(e,a,o)}},r.a.createElement("textarea",{className:"message-form__input",placeholder:"write message...",ref:i,onChange:function(e){return m(e.target.value)}}),r.a.createElement("div",{className:"message-form__button-wrapper"},r.a.createElement("button",{className:"message-form__button"},"send")))}var h=function(e){var a=e.username,t=e.setUsername,s=function(e,a){var t=Object(n.useState)((function(){try{var t=window.localStorage.getItem(e);return t?JSON.parse(t):a}catch(n){return console.log(n),a}})),r=Object(l.a)(t,2),s=r[0],c=r[1];return[s,function(a){try{var t=a instanceof Function?a(s):a;c(t),window.localStorage.setItem(e,JSON.stringify(t))}catch(n){console.log(n)}}]}("chatMessages",[]),c=Object(l.a)(s,2),o=c[0],g=c[1];return r.a.createElement("div",{className:"chat-window"},r.a.createElement(i,{username:a,setUsername:t}),r.a.createElement("section",{className:"chat"},r.a.createElement("div",{className:"chat__header"},r.a.createElement("div",{className:"chat__header-img"},r.a.createElement(m,{isBlue:!1})),r.a.createElement("h5",{className:"chat__header-title"},"John Doe"===a?"John Smith":"John Doe")),r.a.createElement(u,{allMessages:o})),r.a.createElement(_,{username:a,allMessages:o,setAllMessages:g}))};var E=function(e){var a=e.label,t=e.setUsername,s=Object(n.useState)(!1),c=Object(l.a)(s,2),o=c[0],i=c[1];return Object(n.useEffect)((function(){"John Doe"===a&&i(!0)}),[a]),r.a.createElement("button",{className:"login__button",onClick:function(){t(a)}},r.a.createElement("div",{className:"login__user-wrapper"},r.a.createElement("div",{className:"login__user-icon-wrapper"},r.a.createElement(m,{isBlue:o})),r.a.createElement("span",{className:o?"login__user-text login__user-text--blue":"login__user-text"},a)))};var v=function(e){var a=e.setUsername;return r.a.createElement("section",{className:"login"},r.a.createElement("div",{className:"login__title-wrapper"},r.a.createElement(o,null)),r.a.createElement("div",{className:"login__button-wrapper"},r.a.createElement(E,{label:"John Doe",setUsername:a}),r.a.createElement(E,{label:"John Smith",setUsername:a})),r.a.createElement("div",{className:"login__footer"},"Choice your account and start conversation"))},f=function(){var e=Object(n.useState)(""),a=Object(l.a)(e,2),t=a[0],s=a[1];return r.a.createElement("div",{className:"App"},t.length?r.a.createElement(h,{username:t,setUsername:s}):r.a.createElement(v,{setUsername:s}))};t(12),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.9399f83e.chunk.js.map