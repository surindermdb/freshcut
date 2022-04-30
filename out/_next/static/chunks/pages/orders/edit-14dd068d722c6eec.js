(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[522],{9734:function(e,t,r){"use strict";r.d(t,{l:function(){return l}});var n=r(67294),o=r(45241),i={FormLayout:"Polaris-FormLayout",Title:"Polaris-FormLayout__Title",Items:"Polaris-FormLayout__Items",HelpText:"Polaris-FormLayout__HelpText",Item:"Polaris-FormLayout__Item",grouped:"Polaris-FormLayout--grouped",condensed:"Polaris-FormLayout--condensed"};function a(e){return n.createElement("div",{className:i.Item},e.children)}var s=r(10929),c=r(45416);function u({children:e,condensed:t,title:r,helpText:u}){const l=(0,c.A)(t?i.condensed:i.grouped),d=(0,s.L)("FormLayoutGroup");let p,f,m=null,h=null;u&&(p=`${d}HelpText`,m=n.createElement("div",{id:p,className:i.HelpText},u)),r&&(f=`${d}Title`,h=n.createElement("div",{id:f,className:i.Title},r));const v=n.Children.map(e,(e=>(0,o.oh)(e,a,{})));return n.createElement("div",{role:"group",className:l,"aria-labelledby":f,"aria-describedby":p},h,n.createElement("div",{className:i.Items},v),m)}const l=(0,n.memo)((function({children:e}){return n.createElement("div",{className:i.FormLayout},n.Children.map(e,d))}));function d(e,t){if((0,o.Mc)(e,u))return e;const r={key:t};return(0,o.oh)(e,a,r)}l.Group=u},99224:function(e,t,r){"use strict";r.d(t,{l:function(){return a}});var n=r(67294),o=r(76116),i=r(17114);function a({acceptCharset:e,action:t,autoComplete:r,children:a,encType:s,implicitSubmit:c=!0,method:u="post",name:l,noValidate:d,preventDefault:p=!0,target:f,onSubmit:m}){const h=(0,o.Q)(),v=(0,n.useCallback)((e=>{p&&(e.preventDefault(),m(e))}),[m,p]),y=function(e){if(null==e)return e;return e?"on":"off"}(r),g=c?n.createElement(i.T,null,n.createElement("button",{type:"submit","aria-hidden":"true",tabIndex:-1},h.translate("Polaris.Common.submit"))):null;return n.createElement("form",{acceptCharset:e,action:t,autoComplete:y,encType:s,method:u,name:l,noValidate:d,target:f,onSubmit:v},a,g)}},80320:function(e,t,r){"use strict";r.d(t,{Q:function(){return c}});var n=r(67294),o=r(63979),i=r(84450),a=r(30475),s={PageActions:"Polaris-PageActions"};function c({primaryAction:e,secondaryActions:t}){const r=e?(0,o.B)(e,{primary:!0}):null,c=t?n.createElement(i.h,null,(0,o.B)(t)):null,u=c?"equalSpacing":"trailing";return n.createElement("div",{className:s.PageActions},n.createElement(a.K,{distribution:u,spacing:"tight"},c,r))}},62859:function(e,t,r){"use strict";r.d(t,{p:function(){return c}});var n=r(67294),o=r(45416),i=r(54673),a=r(14738),s={Thumbnail:"Polaris-Thumbnail",sizeSmall:"Polaris-Thumbnail--sizeSmall",sizeMedium:"Polaris-Thumbnail--sizeMedium",sizeLarge:"Polaris-Thumbnail--sizeLarge"};function c({source:e,alt:t,size:r="medium"}){const c=(0,o.A)(s.Thumbnail,r&&s[(0,o.O)("size",r)]),u="string"===typeof e?n.createElement(i.E,{alt:t,source:e}):n.createElement(a.J,{accessibilityLabel:t,source:e});return n.createElement("span",{className:c},u)}},49110:function(e,t,r){"use strict";r.d(t,{F:function(){return c}});var n=r(67294),o=r(40115),i=r(10929),a=r(4275),s=r(45426);const c=(0,n.memo)((function(e){const t=(0,i.L)("Toast"),{showToast:r,hideToast:c}=function(){const e=(0,n.useContext)(s.l);if(!e)throw new Error("No Frame context was provided. Your component must be wrapped in a <Frame> component. See https://polaris.shopify.com/components/structure/frame for implementation instructions.");return e}();return(0,a.H)((()=>(r((0,o.Zj)({id:t},e)),()=>{c({id:t})})),[e]),null}))},82338:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/orders/edit",function(){return r(58978)}])},12e3:function(e,t,r){"use strict";var n=r(85893),o=r(62859),i=r(67294);t.Z=function(e){var t=e.src,r=(0,i.useState)(t),a=(r[0],r[1]);return(0,i.useEffect)((function(){a(t)}),[t]),(0,n.jsx)("div",{children:(0,n.jsx)(o.p,{source:t,size:"large"})})}},36453:function(e,t,r){"use strict";var n=new(r(34675).Z);t.Z={fetchAll:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"status_unfulfilled";return n.request.get("/orders?page=".concat(e,"&sort=").concat(t))},fetchSingle:function(e){return n.request.get("/orders/".concat(e))},printCard:function(e){return n.request.get("/orders/print?orders=".concat(e))},printPackagingSlips:function(e){return n.request.get("/orders/print-slips?orders=".concat(e))},update:function(e,t){return n.request.patch("/orders/".concat(e),t)}}},58978:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return S}});var n=r(34051),o=r.n(n),i=r(85893),a=r(67294),s=r(45416),c={DescriptionList:"Polaris-DescriptionList",Term:"Polaris-DescriptionList__Term",spacingTight:"Polaris-DescriptionList--spacingTight",Description:"Polaris-DescriptionList__Description"};function u({items:e,spacing:t="loose"}){const r=e.reduce(((e,{term:t,description:r},n)=>[...e,a.createElement("dt",{key:`dt${n}`,className:c.Term},t),a.createElement("dd",{key:`dd${n}`,className:c.Description},r)]),[]),n=(0,s.A)(c.DescriptionList,"tight"===t&&c.spacingTight);return a.createElement("dl",{className:n},r)}var l=r(49110),d=r(5602),p=r(99224),f=r(9734),m=r(63318),h=r(80320),v=r(11163),y=r(36453),g=r(12e3);function b(e,t,r,n,o,i,a){try{var s=e[i](a),c=s.value}catch(u){return void r(u)}s.done?t(c):Promise.resolve(c).then(n,o)}function T(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){b(i,n,o,a,s,"next",e)}function s(e){b(i,n,o,a,s,"throw",e)}a(void 0)}))}}function w(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}function x(e,t){return!t||"object"!==E(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e,t){return _=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},_(e,t)}var E=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=P(e);if(t){var o=P(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return x(this,r)}}var k=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(s,e);var t,r,n,a=j(s);function s(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(e=a.call(this)).state={currentOrder:null,pageIsReady:!1,showToast:!1},e}return t=s,r=[{key:"componentDidMount",value:function(){var e=this;return T(o().mark((function t(){var r,n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(r=v.default.query).id,n=r.order,console.log(JSON.parse(n)),e.setState({currentOrder:JSON.parse(n),pageIsReady:!0});case 3:case"end":return t.stop()}}),t)})))()}},{key:"renderToast",value:function(){if(this.state.showToast){var e=this;return(0,i.jsx)(l.F,{content:"Settings saved",duration:"2000",onDismiss:function(){return e.toggleToast()}})}return""}},{key:"toggleToast",value:function(){this.setState({showToast:!this.state.showToast})}},{key:"onOrderUpdate",value:function(e){var t=this.state.currentOrder;t.message=e,this.setState((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){O(e,t,r[t])}))}return e}({},e,{currentOrder:t})}))}},{key:"updateOrder",value:function(){var e=this;return T(o().mark((function t(){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.props.shop,r=e.state.currentOrder,t.prev=2,t.next=5,y.Z.update(r.id,r);case 5:e.toggleToast(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),console.log("Error at Order Update ",t.t0);case 11:case"end":return t.stop()}}),t,null,[[2,8]])})))()}},{key:"render",value:function(){var e=this,t=this.state.currentOrder;return t?(0,i.jsxs)(d.T,{breadcrumbs:[{content:"Back to Orders",onAction:function(){return v.default.push({pathname:"/"})}}],children:[(0,i.jsx)(u,{items:[{term:"Order Id",description:t.orderId},{term:"Customer name",description:t.customer},{term:"Delivery address",description:"".concat(t.address)},{term:"Font",description:"".concat(t.font)}]}),(0,i.jsx)(p.l,{children:(0,i.jsxs)(f.l,{children:[(0,i.jsx)("p",{style:{marginTop:"20px"},children:(0,i.jsx)("b",{children:"Design"})}),(0,i.jsx)(g.Z,{src:t.design}),(0,i.jsx)("p",{style:{marginTop:"15px"},children:(0,i.jsx)("b",{children:"Message"})}),(0,i.jsx)(m.n,{value:t.message,onChange:this.onOrderUpdate.bind(this),multiline:6})]})}),(0,i.jsx)("div",{style:{marginTop:20},children:(0,i.jsx)(h.Q,{primaryAction:{content:"Update",onAction:function(){return e.updateOrder()}}})}),this.renderToast()]}):null}}],r&&w(t.prototype,r),n&&w(t,n),s}(a.Component);k.getInitialProps=function(){var e=T(o().mark((function e(t){var r,n,i,a,s,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.req,n=t.query,e.prev=1,i=n.id,!!r&&(new Request).setHeader("cookie",r.headers.cookie),e.next=7,CardService.fetchSingle(i);case 7:return a=e.sent,s=a.data,c=s.payload.card,e.abrupt("return",{id:i,card:c});case 13:return e.prev=13,e.t0=e.catch(1),console.error("CardsEdit.getInitialProps ",e.t0),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();var S=k}},function(e){e.O(0,[602,318,774,888,179],(function(){return t=82338,e(e.s=t);var t}));var t=e.O();_N_E=t}]);