(this["webpackJsonpvk-apps-socialist"]=this["webpackJsonpvk-apps-socialist"]||[]).push([[0],{105:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},188:function(e,t,a){e.exports=a(298)},290:function(e,t,a){},298:function(e,t,a){"use strict";a.r(t);a(189),a(216),a(218),a(219),a(221),a(222),a(223),a(224),a(225),a(226),a(227),a(228),a(230),a(231),a(232),a(233),a(234),a(235),a(236),a(237),a(238),a(239),a(241),a(242),a(243),a(244),a(245),a(246),a(247),a(248),a(249),a(250),a(251),a(252),a(253),a(254),a(255),a(256),a(257),a(258);var n=a(0),c=a.n(n),r=a(70),l=a.n(r),s=a(25),i=a.n(s),u=a(40),o=a.n(u),m=a(53),p=a(26),b=a(108),f=a.n(b),E=a(107),d=a.n(E),h=(a(267),a(54)),v=a.n(h),j=a(46),O=a.n(j),k=a(102),g=a.n(k),x=a(41),y=a.n(x),P=a(100),w=a.n(P),S=a(42),A=a.n(S),K=a(101),V=a.n(K),_=function(e){var t=e.id,a=e.go,n=e.fetchedUser;return c.a.createElement(v.a,{id:t},c.a.createElement(O.a,null,"Example"),n&&c.a.createElement(y.a,{title:"User Data Fetched with VK Connect"},c.a.createElement(w.a,{before:n.photo_200?c.a.createElement(V.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(y.a,{title:"Navigation Example"},c.a.createElement(A.a,null,c.a.createElement(g.a,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"Show me the Persik, please"))))},C=a(72),U=a(106),W=a.n(U),I=a(103),N=a.n(I),G=a(104),z=a.n(G),J=a(71),T=a.n(J),B=a(105),D=a.n(B),F=(a(290),Object(C.b)()),q=function(e){var t=Object(n.useState)(null),a=Object(p.a)(t,2),r=a[0],l=a[1],s=Object(n.useState)(null),u=Object(p.a)(s,2),b=u[0],f=u[1],E=Object(n.useState)(!1),d=Object(p.a)(E,2),h=d[0],j=d[1],k=Object(n.useState)(!1),g=Object(p.a)(k,2),x=g[0],P=g[1];return Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=null,e.prev=1,e.next=4,i.a.sendPromise("VKWebAppGetEmail");case 4:t=e.sent,j(!0),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:return l(t?t.email:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c"),a=null,e.prev=12,e.next=15,i.a.sendPromise("VKWebAppGetPhoneNumber");case 15:a=e.sent,P(!0),e.next=21;break;case 19:e.prev=19,e.t1=e.catch(12);case 21:f(a?a.phone_number:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c");case 22:case"end":return e.stop()}}),e,null,[[1,8],[12,19]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),c.a.createElement(v.a,{id:e.id},c.a.createElement(O.a,{left:c.a.createElement(W.a,{onClick:e.go,"data-to":"home"},F===C.a?c.a.createElement(N.a,null):c.a.createElement(z.a,null))},"Persik"),c.a.createElement(y.a,{title:"e-mail"},c.a.createElement(A.a,null,null==r?c.a.createElement(T.a,null):r)),c.a.createElement(y.a,{title:"phone"},c.a.createElement(A.a,null,null==b?c.a.createElement(T.a,null):b)),c.a.createElement(A.a,null,h&&x?c.a.createElement("img",{className:"Persik",src:D.a,alt:"Persik The Cat"}):"\u0427\u0442\u043e \u0431\u044b \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u043f\u0435\u0440\u0441\u0438\u043a\u0430 \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u0435 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443 \u0438 \u043f\u043e\u0447\u0442\u0435"))},H=function(){var e=Object(n.useState)("home"),t=Object(p.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(null),s=Object(p.a)(l,2),u=s[0],b=s[1],E=Object(n.useState)(c.a.createElement(d.a,{size:"large"})),h=Object(p.a)(E,2),v=h[0],j=h[1];Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.sendPromise("VKWebAppGetUserInfo");case 2:t=e.sent,b(t),j(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),function(){e.apply(this,arguments)}()}),[]);var O=function(e){r(e.currentTarget.dataset.to)};return c.a.createElement(f.a,{activePanel:a,popout:v},c.a.createElement(_,{id:"home",fetchedUser:u,go:O}),c.a.createElement(q,{id:"persik",go:O}))};i.a.send("VKWebAppInit"),l.a.render(c.a.createElement(H,null),document.getElementById("root"))}},[[188,1,2]]]);
//# sourceMappingURL=main.559f4062.chunk.js.map