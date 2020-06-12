!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s="./client/src/boot/index.js")}({"./client/src/boot/index.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(1),i=(o(r),n(0)),u=(o(i),n("./client/src/boot/registerComponents.js")),a=o(u);document.addEventListener("DOMContentLoaded",function(){(0,a.default)()})},"./client/src/boot/registerComponents.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=o(r),u=n("./client/src/components/FocusPointField.jsx"),a=o(u),c=n("./client/src/components/FocusPointPicker.jsx"),s=o(c),l=function(){i.default.component.register("FocusPointField",a.default),i.default.component.register("FocusPointPicker",s.default)};t.default=l},"./client/src/components/FocusPointField.jsx":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(1),l=o(s),f=n(2),p=o(f),d=n(0),h=n(3),y=o(h),v=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={FocusX:e.data?e.data.X:0,FocusY:e.data?e.data.Y:0},n.handleFocusChange=n.handleFocusChange.bind(n),n}return u(t,e),c(t,[{key:"handleFocusChange",value:function(e){var t=e.focusX,n=e.focusY;this.setState({FocusX:t,FocusY:n});var o=this.props,r=o.onAutofill,i=o.name;"function"==typeof r&&(r(i+"X",t),r(i+"Y",n))}},{key:"handleFieldChange",value:function(e,t){var n=this.props,o=n.children,r=n.name,i=o[e].props.name,u=parseFloat(t.target.value);Number.isNaN(u)&&(u=0),i===r+"X"?this.setState({FocusX:u}):this.setState({FocusY:u})}},{key:"renderChildren",value:function(e,t){var n=this;return t?e.map(function(e,t){return(0,s.cloneElement)(e,{onChange:function(e){return n.handleFieldChange(t,e)},key:t,value:e.props.value||0},e.props.children)}):e}},{key:"render",value:function(){var e=this.props,t=e.FocusPointPicker,n=e.FieldGroup,o=e.children,r=e.readOnly,i=this.props.data,u=i.showDebug,c=i.tooltip,s=i.previewUrl,f=i.previewWidth,d=i.previewHeight,h=this.state,y=h.FocusX,v=h.FocusY,m=a({},this.props,{className:(0,p.default)("focuspoint-field",{"focuspoint-field--debug":u})});return l.default.createElement(n,m,l.default.createElement("div",{className:"focuspoint-field__image-wrapper"},l.default.createElement(t,{className:"focuspoint-field__picker",imageUrl:s,focusX:y,focusY:v,width:Math.ceil(.5*f),height:Math.ceil(.5*d),tooltip:c,readOnly:r,onChange:this.handleFocusChange})),this.renderChildren(o,u))}}]),t}(s.Component);v.defaultProps={extraClass:"",value:""},v.propTypes={extraClass:y.default.string,id:y.default.string,name:y.default.string.isRequired,children:y.default.array.isRequired,onAutofill:y.default.func,readOnly:y.default.bool},t.Component=v,t.default=(0,d.inject)(["FieldGroup","FocusPointPicker"])(v)},"./client/src/components/FocusPointPicker.jsx":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(1),s=o(c),l=n(2),f=o(l),p=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={focusX:e.focusX||0,focusY:e.focusY||0},n.handleClick=n.handleClick.bind(n),n}return u(t,e),a(t,[{key:"handleClick",value:function(e){if(!this.props.readOnly){var t=e.nativeEvent.offsetX,n=e.nativeEvent.offsetY,o=this.props,r=o.width,i=o.height;"function"==typeof this.props.onChange&&this.props.onChange({focusX:2*t/r-1,focusY:2*n/i-1})}}},{key:"componentWillReceiveProps",value:function(e){this.setState({focusX:e.focusX||0,focusY:e.focusY||0})}},{key:"render",value:function(){var e=this.state,t=e.focusX,n=e.focusY,o=this.props,r=o.width,i=o.height,u=o.imageUrl,a=o.tooltip,c=o.className,l={left:Math.round(.5*(t+1)*r),top:Math.round(.5*(n+1)*i),width:2*r,height:2*i};return s.default.createElement("div",{className:(0,f.default)(c,"focuspoint-picker"),title:a},s.default.createElement("img",{className:"focuspoint-picker__image",src:u,width:r,height:i}),s.default.createElement("span",{className:"focuspoint-picker__gradient",style:l}),s.default.createElement("span",{className:"focuspoint-picker__overlay",onClick:this.handleClick}))}}]),t}(c.Component);p.defaultProps={imageUrl:"",width:0,height:0,tooltip:"",onChange:null},t.default=p},0:function(e,t){e.exports=Injector},1:function(e,t){e.exports=React},2:function(e,t){e.exports=classnames},3:function(e,t){e.exports=PropTypes}});