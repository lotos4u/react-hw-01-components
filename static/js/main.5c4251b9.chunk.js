(this["webpackJsonpreact-hw-01-components"]=this["webpackJsonpreact-hw-01-components"]||[]).push([[0],[,function(e,a,t){e.exports={profile:"styles_profile__hVznA",description:"styles_description__2txLQ",avatar:"styles_avatar__15ERA",name:"styles_name__kR0f3",tag:"styles_tag__2z5ZW",location:"styles_location__HcFF0",stats:"styles_stats__2YXHb",label:"styles_label__3C96X",quantity:"styles_quantity__23Zr2"}},,,function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/j04ntoh/128.jpg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mugukamil/128.jpg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/sweetdelisa/128.jpg","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(3),r=t.n(s),i=(t(17),t(18),t(1)),l=t.n(i),o=function(e){return c.a.createElement("div",{className:l.a.profile},c.a.createElement("div",{className:l.a.description},c.a.createElement("img",{src:e.avatar,alt:"user avatar",className:l.a.avatar}),c.a.createElement("p",{className:l.a.name},e.name),c.a.createElement("p",{className:l.a.tag},"@",e.tag),c.a.createElement("p",{className:l.a.location},e.location)),c.a.createElement("ul",{className:l.a.stats},c.a.createElement("li",null,c.a.createElement("span",{className:l.a.label},"Followers"),c.a.createElement("span",{className:l.a.quantity},e.stats.followers)),c.a.createElement("li",null,c.a.createElement("span",{className:l.a.label},"Views"),c.a.createElement("span",{className:l.a.quantity},e.stats.views)),c.a.createElement("li",null,c.a.createElement("span",{className:l.a.label},"Likes"),c.a.createElement("span",{className:l.a.quantity},e.stats.likes))))};o.defaultProps={};var m=o,d=t(4),u=t(5),p=t(6),f=t(7),y=t(8),b=t.n(y);console.log(b.a);var E=function(e){return c.a.createElement("section",{className:"statistics"},c.a.createElement("h2",{className:"title"},e.title),c.a.createElement("ul",{className:"stat-list"},e.stats.map((function(e){return c.a.createElement("li",{className:"item",key:e.id},c.a.createElement("span",{className:"label"},e.label),c.a.createElement("span",{className:"percentage"},e.percentage,"%"))}))))};E.defaultProps={};var v=E,w=t(9),h=t.n(w);console.log(h.a);var N=function(e){return c.a.createElement("table",{className:"transaction-history"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Type"),c.a.createElement("th",null,"Amount"),c.a.createElement("th",null,"Currency"))),c.a.createElement("tbody",null,e.items.map((function(e){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",null,e.type),c.a.createElement("td",null,e.amount),c.a.createElement("td",null,e.currency))}))))};N.defaultProps={};var g=N,_=t(10),k=t.n(_),O=t(11),P=t.n(O);console.log(P.a);var j=function(e){return c.a.createElement("li",{className:"item"},c.a.createElement("span",{className:"status"},e.isOnline),c.a.createElement("img",{className:"avatar",src:e.avatar,alt:"",width:"48"}),c.a.createElement("p",{className:"name"},e.name))};j.defaultProps={};var U=j;console.log(k.a);var x=function(e){return c.a.createElement("ul",{className:"friend-list"},e.friends.map((function(e){return c.a.createElement(U,{key:e.id,name:e.name,avatar:e.avatar,isOnline:e.isOnline})})))};x.defaultProps={};var J=x;var z=function(){var e={profile:d,statistics:u,friends:p,transactions:f};return c.a.createElement("div",{className:"application"},c.a.createElement("div",{className:"navigation"},c.a.createElement("a",{href:"#profile"},"Profile"),c.a.createElement("a",{href:"#statistics"},"Statistics"),c.a.createElement("a",{href:"#friends"},"Friends"),c.a.createElement("a",{href:"#transactions"},"Transactions")),c.a.createElement("div",{className:"content"},c.a.createElement("div",{id:"profile",className:"task-container"},c.a.createElement(m,{name:e.profile.name,location:e.profile.location,tag:e.profile.tag,avatar:e.profile.avatar,stats:e.profile.stats})),c.a.createElement("div",{id:"statistics",className:"task-container"},c.a.createElement(v,{title:"Upload stats",stats:e.statistics}),","),c.a.createElement("div",{id:"friends",className:"task-container"},c.a.createElement(J,{friends:e.friends})),c.a.createElement("div",{id:"transactions",className:"task-container"},c.a.createElement(g,{items:e.transactions}),",")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.5c4251b9.chunk.js.map