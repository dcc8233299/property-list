(this["webpackJsonpproperty-list-app"]=this["webpackJsonpproperty-list-app"]||[]).push([[0],{19:function(e,t,a){"use strict";a.r(t);var r=a(2),i=a(10),d=a.n(i),c=a(3),s=a(6),n=a(11),o=a(1),l=a(0),u=function(e){var t=e.price,a=e.agency,r=e.id,i=e.mainImage,d=a.brandingColors.primary,c=a.logo,s=o.a.create({card:{border:"1px solid grey",borderRadius:"10px",boxShadow:"2px 2px lightgrey","@media only screen and (max-width: 768px)":{maxWidth:"640px"}},header:{backgroundColor:d,borderRadius:"10px 10px 0 0",height:"40px"},logo:{marginTop:"4px",marginBottom:"4px",marginLeft:"5px"},footer:{padding:"10px"}});return Object(l.jsxs)("div",{id:r,className:Object(o.b)(s.card),"data-testid":"card-".concat(r),children:[Object(l.jsx)("div",{"data-testid":"card-header-".concat(r),className:Object(o.b)(s.header),children:Object(l.jsx)("img",{"data-testid":"card-logo-".concat(r),className:Object(o.b)(s.logo),src:c,alt:"Logo"})}),Object(l.jsx)("div",{children:Object(l.jsx)("img",{"data-testid":"card-image-".concat(r),src:i,alt:"Property"})}),Object(l.jsx)("div",{"data-testid":"card-price-".concat(r),className:Object(o.b)(s.footer),children:"Price Guide ".concat(t)})]})},b=function(e){var t=e.funcType,a=e.id,r=e.cursor,i=e.isButtonDisabled,d=void 0!==i&&i,c=e.onClick,s="add"===t,n=o.a.create({button:{border:"2px solid ".concat(s?"green":"red"),borderRadius:"20px",backgroundColor:s?"#DEFFE1":"#FFE4E1",color:s?"green":"red",cursor:r,width:"600px",height:"30px",position:"relative",left:"20px",top:"-100px"},disabledButton:{border:"2px solid grey",borderRadius:"20px",backgroundColor:"light grey",color:"grey",cursor:r,width:"600px",height:"30px",position:"relative",left:"20px",top:"-100px"}});return Object(l.jsx)("button",{className:d?Object(o.b)(n.disabledButton):Object(o.b)(n.button),"data-testid":"".concat(t,"-button-").concat(a),disabled:d,type:"button",onClick:c,children:"add"===t?"Add Property":"Remove Property"})},p=function(e){var t=e.results,a=e.saved,i=e.setSaved,d=r.useState(-1),p=Object(c.a)(d,2),j=p[0],x=p[1],v=r.useState("default"),h=Object(c.a)(v,2),f=h[0],O=h[1],g=r.useState(!1),m=Object(c.a)(g,2),y=m[0],N=m[1],C=o.a.create({listHeader:{textAlign:"center"},listCard:{height:"600px"}});return Object(l.jsxs)("div",{"data-testid":"results-list",children:[Object(l.jsx)("h1",{className:Object(o.b)(C.listHeader),"data-testid":"results-list-title",children:"Results"}),t.map((function(e){return Object(l.jsxs)("div",{className:Object(o.b)(C.listCard),"data-testid":"result-item-".concat(e.id),onMouseEnter:function(e){var t=e.target.dataset.testid||"",r=null===t||void 0===t?void 0:t.split("-"),i=Number(r[(null===r||void 0===r?void 0:r.length)-1]);a.findIndex((function(e){return Number(e.id)===i}))>-1&&N(!0),x(i),O("pointer")},onMouseLeave:function(){x(-1),O("default"),N(!1)},children:[Object(l.jsx)(u,Object(s.a)({},e)),Number(e.id)===j&&Object(l.jsx)(b,{id:e.id,funcType:"add",cursor:f,isButtonDisabled:y,onClick:function(){return t=e,N(!0),void i([].concat(Object(n.a)(a),[t]));var t}})]},e.id)}))]})},j=function(e){var t=e.saved,a=e.setSaved,i=r.useState(-1),d=Object(c.a)(i,2),n=d[0],p=d[1],j=r.useState("default"),x=Object(c.a)(j,2),v=x[0],h=x[1],f=o.a.create({listHeader:{textAlign:"center"},listCard:{height:"600px"}});return r.useEffect((function(){}),[t]),Object(l.jsxs)("div",{"data-testid":"saved-list",children:[Object(l.jsx)("h1",{className:Object(o.b)(f.listHeader),"data-testid":"saved-list-title",children:"Saved"}),t.map((function(e,r){return Object(l.jsxs)("div",{className:Object(o.b)(f.listCard),"data-testid":"saved-item-".concat(e.id),onMouseEnter:function(e){p((function(){var t=e.target.dataset.testid||"",a=null===t||void 0===t?void 0:t.split("-");return Number(a[(null===a||void 0===a?void 0:a.length)-1])})),h("pointer")},onMouseLeave:function(){p(-1),h("default")},children:[Object(l.jsx)(u,Object(s.a)({},e)),Number(e.id)===n&&Object(l.jsx)(b,{id:e.id,funcType:"remove",cursor:v,onClick:function(){return e=r,void a(t.filter((function(t,a){return a!==e})));var e}})]},e.id)}))]})},x=function(){var e=r.useState([]),t=Object(c.a)(e,2),a=t[0],i=t[1],d=r.useState([]),s=Object(c.a)(d,2),n=s[0],u=s[1];r.useEffect((function(){fetch("./data.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){var t=e.results,a=e.saved;i(t),u(a)})).catch((function(e){console.error(e)}))}),[]);var b=o.a.create({lists:{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly","@media only screen and (max-width: 768px)":{width:"768px"}}});return Object(l.jsxs)("div",{className:Object(o.b)(b.lists),children:[Object(l.jsx)(p,{results:a,saved:n,setSaved:u}),Object(l.jsx)(j,{saved:n,setSaved:u})]})},v=document.getElementById("root");v&&d.a.render(Object(l.jsx)(x,{}),v)}},[[19,1,2]]]);
//# sourceMappingURL=main.682d0302.chunk.js.map