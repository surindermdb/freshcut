(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{78581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(44369)}])},74217:function(e,t,r){"use strict";var n=r(85893),a=r(67294),o=r(24708),i=r(50490),s=r(8294),c=r(13607),u=r(2186),l=r(63318),f=r(76645),d=r(85691),p=r(643),h=r(34010),g=r(56776),v=r(11163);function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(c){s=!0,a=c}finally{try{i||null==r.return||r.return()}finally{if(s)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.Z=function(e){var t=e.orders,r=e.onPrint,y=e.onPrintSlips,b=e.meta,x=e.onPageChange,j=e.onSortChange,w=e.openNewTab,S=[];t.forEach((function(e){var t;if(e.delivery)if("asap"==e.delivery)t="ASAP";else{var r="Not set";void 0!=e.arriveByDate&&(r=function(e){var t=m(e.split("T"),2),r=t[0],n=t[1],a=m(r.match(/\d+/g),3),o=a[0],i=a[1],s=a[2],c=m(n.split(/(?=[+-])/),2),u=c[0];return c[1],"".concat(i,"/").concat(s,"/").concat(o," ").concat(u)}(e.arriveByDate)),t=r}else t="Not defined";var n=e.orderName,a=e.orderId,o={id:e._id,orderId:a,orderName:e.orderName,orderNameUpdate:n,customer:e.firstName+" "+e.lastName,address:e.deliverTo,shipDate:t,message:e.message,font:e.font,design:e.design,status:"fulfilled"==e.status?"Printed":"Unprinted"};S.push(o)}));var C=(0,o.T)(S),P=C.selectedResources,O=C.allResourcesSelected,k=C.handleSelectionChange,A=(0,a.useState)(null),_=A[0],N=A[1],I=(0,a.useState)(null),T=(I[0],I[1]),E=(0,a.useState)("status_unfulfilled"),R=E[0],Z=E[1];(0,a.useEffect)((function(){}));var D,q=S.map((function(e,t){var r=e.orderName,a=e.orderNameUpdate,o=e.customer,l=e.shipDate,f=e.status,d=e.address,p=e.id,y=e.order,m=e.orderId,b=e.message,x=e.font,j=e.design;return(0,n.jsxs)(i.m.Row,{id:p,selected:P.includes(p),position:t,children:[(0,n.jsx)(i.m.Cell,{style:{position:"relative"},children:a}),(0,n.jsxs)(i.m.Cell,{children:[(0,n.jsx)("p",{children:(0,n.jsx)("strong",{children:o})}),(0,n.jsx)("p",{children:d})]}),(0,n.jsx)(i.m.Cell,{children:l}),(0,n.jsx)(i.m.Cell,{children:(0,n.jsx)(s.C,{status:"Printed"==f?"success":"new",children:f})}),(0,n.jsxs)(i.m.Cell,{children:[(0,n.jsx)(c.u,{content:"Edit",children:(0,n.jsx)(u.z,{size:"slim",icon:h.S,plain:!0,onClick:function(){return v.default.push({pathname:"/orders/edit",query:{id:p,order:JSON.stringify({orderName:r,customer:o,shipDate:l,status:f,address:d,id:p,order:y,orderId:m,message:b,font:x,design:j})}})}})}),(0,n.jsx)(c.u,{content:"Open order",children:(0,n.jsx)(u.z,{size:"slim",icon:g.S,plain:!0,onClick:function(){return w("admin/orders/".concat(m))}})})]})]},p)})),U=((0,a.useCallback)((function(e){return N(e)}),[]),(0,a.useCallback)((function(){return N(null)}),[])),z=(0,a.useCallback)((function(){return T(null)}),[]),B=((0,a.useCallback)((function(){U(),z()}),[z,U]),(0,a.useCallback)((function(e){Z(e),j(1,e)}),[])),M=[{content:"Generate Print File",onAction:function(){return r(P)}}],L=[{content:"Print packaging slips",onAction:function(){return y(P)}}];return l.n,D=_,(Array.isArray(D)?0===D.length:""===D||null==D)||function(e,t){"taggedWith"===e&&"Tagged with ".concat(t)}("taggedWith",_),(0,n.jsxs)(f.Z,{children:[(0,n.jsx)("div",{style:{padding:"16px",display:"flex",justifyContent:"end"},children:(0,n.jsx)("div",{style:{paddingLeft:"0.4rem"},children:(0,n.jsx)(d.P,{labelInline:!0,label:"Sort by",options:[{label:"Status Unprinted",value:"status_unfulfilled"},{label:"Status Printed",value:"status_fulfilled"}],value:R,onChange:B})})}),(0,n.jsx)(i.m,{resourceName:{singular:"customer",plural:"customers"},itemCount:S.length,selectedItemsCount:O?"All":P.length,onSelectionChange:k,hasMoreItems:!0,bulkActions:L,promotedBulkActions:M,headings:[{title:"Order"},{title:"Customer / Shipping Address"},{title:"Order Date"},{title:"Status"},{title:"Actions"}],children:q}),(0,n.jsx)(p.t,{hasPrevious:"1"!=b.page,onPrevious:function(){x(parseInt(b.page)-1,R)},hasNext:b.pages!=parseInt(b.page),onNext:function(){x(parseInt(b.page)+1,R)}})]})}},57915:function(e,t,r){"use strict";r(85893),r(67294),r(11163)},36453:function(e,t,r){"use strict";var n=new(r(34675).Z);t.Z={fetchAll:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"status_unfulfilled";return n.request.get("/orders?page=".concat(e,"&sort=").concat(t))},fetchSingle:function(e){return n.request.get("/orders/".concat(e))},printCard:function(e){return n.request.get("/orders/print?orders=".concat(e))},printPackagingSlips:function(e){return n.request.get("/orders/print-slips?orders=".concat(e))},update:function(e,t){return n.request.patch("/orders/".concat(e),t)}}},44369:function(e,t,r){"use strict";r.r(t);var n=r(34051),a=r.n(n),o=r(85893),i=r(67294),s=r(5602),c=r(62850),u=r(76645),l=r(36453),f=(r(57915),r(74217)),d=r(58923);function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t,r,n,a,o,i){try{var s=e[o](i),c=s.value}catch(u){return void r(u)}s.done?t(c):Promise.resolve(c).then(n,a)}function v(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){g(o,n,a,i,s,"next",e)}function s(e){g(o,n,a,i,s,"throw",e)}i(void 0)}))}}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function x(e,t){return!t||"object"!==S(t)&&"function"!==typeof t?h(e):t}function j(e,t){return j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},j(e,t)}function w(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var S=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=b(e);if(t){var a=b(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return x(this,r)}}var P=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(p,e);var t,r,n,i=C(p);function p(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),m(h(e=i.call(this)),"redirectTo",(function(e){d.Redirect.create(AppContainer).dispatch(d.Redirect.Action.REMOTE,{url:"".concat(AppContainer.localOrigin,"/public/widget/").concat(e),newContext:!0})}));var t=h(e);m(h(e),"handlePackagingSlips",function(){var e=v(a().mark((function e(r){var n,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.join(","),e.prev=1,e.next=4,l.Z.printPackagingSlips(n);case 4:o=e.sent,t.props.redirectTo(o.data.payload.file),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}());var r=h(e);m(h(e),"handlePrintPdf",function(){var e=v(a().mark((function e(t){var n,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.state.orders,console.log(t),n=t.join(","),e.prev=3,e.next=6,l.Z.printCard(n);case 6:o=e.sent,t.forEach((function(e){r.updateOrder(e,{status:"fulfilled"})})),r.props.redirectTo(o.data.payload.file),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}());var n=h(e);m(h(e),"handlePageChange",function(){var e=v(a().mark((function e(t,r){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.fetchOrders(t,r);case 1:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}());var o=h(e);return m(h(e),"handleSortChange",v(a().mark((function e(){var t,r,n=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=n.length>0&&void 0!==n[0]?n[0]:1,r=n.length>1?n[1]:void 0,o.fetchOrders(t,r);case 2:case"end":return e.stop()}}),e)})))),e.state={orders:[],meta:null,currentPage:0,fetchingOrders:!1,pageIsReady:!1},e}return t=p,r=[{key:"componentDidMount",value:function(){var e=this;return v(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchOrders();case 2:e.setState({pageIsReady:!0});case 3:case"end":return t.stop()}}),t)})))()}},{key:"updateOrder",value:function(e,t){var r=this.state.orders.findIndex((function(t){return t._id===e}));-1===r||this.setState({orders:w(this.state.orders.slice(0,r)).concat([Object.assign({},this.state.orders[r],t)],w(this.state.orders.slice(r+1)))})}},{key:"fetchOrders",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"status_unfulfilled",r=this;return v(a().mark((function n(){var o,i,s,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.setState({fetchingOrders:!0}),n.prev=1,n.next=4,l.Z.fetchAll(e,t);case 4:o=n.sent,i=o.data,s=i.payload,c=i.meta,r.setState({orders:s,meta:c,currentPage:e}),n.next=13;break;case 11:n.prev=11,n.t0=n.catch(1);case 13:return n.prev=13,r.setState({fetchingCards:!1}),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[1,11,13,16]])})))()}},{key:"render",value:function(){var e=this,t=this.state,r=t.orders,n=t.meta;return t.currentPage,t.pageIsReady?(0,o.jsx)(s.T,{title:"Orders",separator:!0,children:(0,o.jsxs)(u.Z,{children:[(0,o.jsx)(u.Z.Header,{}),(0,o.jsx)(u.Z.Section,{children:(0,o.jsx)(f.Z,{orders:r,meta:n,onPrint:function(t){return e.handlePrintPdf(t)},onPrintSlips:function(t){return e.handlePackagingSlips(t)},onPageChange:function(t,r){return e.handlePageChange(t,r)},onSortChange:function(t,r){return e.handleSortChange(t,r)},openNewTab:function(t){return e.props.openNewTab(t)}})})]})}):(0,o.jsx)(s.T,{title:"Orders",separator:!0,children:(0,o.jsx)(c.$,{accessibilityLabel:"Loading Orders",size:"large"})})}}],r&&y(t.prototype,r),n&&y(t,n),p}(i.Component);t.default=P}},function(e){e.O(0,[602,318,286,774,888,179],(function(){return t=78581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);