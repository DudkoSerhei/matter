(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6252:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return D}});var n=o(5893),r=o(7294),i=o(2122),a=o(872),l=o(9700);var c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,a.Z)(e,(0,i.Z)({defaultTheme:l.Z},t))},s=o(1253);o(5697);function u(e){var t,o,n="";if("string"===typeof e||"number"===typeof e)n+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=u(e[t]))&&(n&&(n+=" "),n+=o);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function p(){for(var e,t,o=0,n="";o<arguments.length;)(e=arguments[o++])&&(t=u(e))&&(n&&(n+=" "),n+=t);return n}var d=o(288);function h(e){if("string"!==typeof e)throw new Error((0,d.Z)(7));return e.charAt(0).toUpperCase()+e.slice(1)}var m=o(8786),f=o(3935),y=!0,v=!1,g=null,b={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function w(e){e.metaKey||e.altKey||e.ctrlKey||(y=!0)}function x(){y=!1}function N(){"hidden"===this.visibilityState&&v&&(y=!0)}function S(e){var t=e.target;try{return t.matches(":focus-visible")}catch(o){}return y||function(e){var t=e.type,o=e.tagName;return!("INPUT"!==o||!b[t]||e.readOnly)||"TEXTAREA"===o&&!e.readOnly||!!e.isContentEditable}(t)}function E(){v=!0,window.clearTimeout(g),g=window.setTimeout((function(){v=!1}),100)}function z(){return{isFocusVisible:S,onBlurVisible:E,ref:r.useCallback((function(e){var t,o=f.findDOMNode(e);null!=o&&((t=o.ownerDocument).addEventListener("keydown",w,!0),t.addEventListener("mousedown",x,!0),t.addEventListener("pointerdown",x,!0),t.addEventListener("touchstart",x,!0),t.addEventListener("visibilitychange",N,!0))}),[])}}function T(e,t){"function"===typeof e?e(t):e&&(e.current=t)}var k={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},B=r.forwardRef((function(e,t){var o=e.align,n=void 0===o?"inherit":o,a=e.classes,l=e.className,c=e.color,u=void 0===c?"initial":c,d=e.component,m=e.display,f=void 0===m?"initial":m,y=e.gutterBottom,v=void 0!==y&&y,g=e.noWrap,b=void 0!==g&&g,w=e.paragraph,x=void 0!==w&&w,N=e.variant,S=void 0===N?"body1":N,E=e.variantMapping,z=void 0===E?k:E,T=(0,s.Z)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),B=d||(x?"p":z[S]||k[S])||"span";return r.createElement(B,(0,i.Z)({className:p(a.root,l,"inherit"!==S&&a[S],"initial"!==u&&a["color".concat(h(u))],b&&a.noWrap,v&&a.gutterBottom,x&&a.paragraph,"inherit"!==n&&a["align".concat(h(n))],"initial"!==f&&a["display".concat(h(f))]),ref:t},T))})),C=(0,m.Z)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(B),A=r.forwardRef((function(e,t){var o,n,a=e.classes,l=e.className,c=e.color,u=void 0===c?"primary":c,d=e.component,m=void 0===d?"a":d,f=e.onBlur,y=e.onFocus,v=e.TypographyClasses,g=e.underline,b=void 0===g?"hover":g,w=e.variant,x=void 0===w?"inherit":w,N=(0,s.Z)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),S=z(),E=S.isFocusVisible,k=S.onBlurVisible,B=S.ref,A=r.useState(!1),Z=A[0],_=A[1],j=(o=t,n=B,r.useMemo((function(){return null==o&&null==n?null:function(e){T(o,e),T(n,e)}}),[o,n]));return r.createElement(C,(0,i.Z)({className:p(a.root,a["underline".concat(h(b))],l,Z&&a.focusVisible,"button"===m&&a.button),classes:v,color:u,component:m,onBlur:function(e){Z&&(k(),_(!1)),f&&f(e)},onFocus:function(e){E(e)&&_(!0),y&&y(e)},ref:j,variant:x},N))})),Z=(0,m.Z)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(A),_=r.forwardRef((function(e,t){var o=e.children,n=e.classes,a=e.className,l=e.color,c=void 0===l?"inherit":l,u=e.component,d=void 0===u?"svg":u,m=e.fontSize,f=void 0===m?"medium":m,y=e.htmlColor,v=e.titleAccess,g=e.viewBox,b=void 0===g?"0 0 24 24":g,w=(0,s.Z)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return r.createElement(d,(0,i.Z)({className:p(n.root,a,"inherit"!==c&&n["color".concat(h(c))],"default"!==f&&"medium"!==f&&n["fontSize".concat(h(f))]),focusable:"false",viewBox:b,color:y,"aria-hidden":!v||void 0,role:v?"img":void 0,ref:t},w),o,v?r.createElement("title",null,v):null)}));_.muiName="SvgIcon";var j=(0,m.Z)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(_);var R=function(e,t){var o=function(t,o){return r.createElement(j,(0,i.Z)({ref:o},t),e)};return o.muiName=j.muiName,r.memo(r.forwardRef(o))}(r.createElement("path",{d:"M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"})),M=c({container:{width:"100%",height:"100vh"},main:{maxWidth:"80%",margin:"0 auto"},footer:{display:"flex"},icon:{fontSize:"40px"}}),D=function(){var e=M();return(0,n.jsx)("div",{className:e.container,children:(0,n.jsxs)("main",{className:e.main,children:[(0,n.jsxs)("h1",{children:["Welcome to"," ",(0,n.jsx)(Z,{target:"_blank",href:"https://nextjs.org",children:"Next.js!"})]}),(0,n.jsxs)("footer",{className:e.footer,children:[(0,n.jsx)(R,{className:e.icon}),(0,n.jsx)("p",{children:(new Date).getFullYear()})]})]})})}},5301:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o(6252)}])}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);