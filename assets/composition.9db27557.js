/**
 * name: vue-picture-cropper-demo
 * version: v0.1.0
 * description: vA demo of vue-picture-cropper.
 * author: chengpeiquan
 */
import{_,c as _e,B as Z,u as Be,a as we,b as q,d as G,g as H,M as b,e as i,I as xe,C as Ee,f as Re,E as ee,o as Pe,h as w,i as Te,j as De,k as Ae,U as Oe,p as x}from"./esm.a647e59d.js";import{r as B,o as te,d as O,a as Se,c as a,b as J,_ as Ue,e as Le,f as T,g as K,h as Q,i as f,w as h,j as Ne,F as Ie,k as D}from"./index.d562943c.js";var $e=function(){var e=B(!1);return te(function(){e.value=!0}),e},Ve=$e,Me={type:{type:String},actionFn:Function,close:Function,autofocus:Boolean,prefixCls:String,buttonProps:Object,emitEvent:Boolean,quitOnNullishReturnValue:Boolean};function X(t){return!!(t&&!!t.then)}var Y=O({name:"ActionButton",props:Me,setup:function(e,d){var r=d.slots,s=B(!1),y=B(),c=B(!1),C,m=Ve();Se(function(){e.autofocus&&(C=setTimeout(function(){var n;return(n=y.value.$el)===null||n===void 0?void 0:n.focus()}))}),te(function(){clearTimeout(C)});var p=function(l){var u=e.close;!X(l)||(c.value=!0,l.then(function(){m.value||(c.value=!1),u.apply(void 0,arguments),s.value=!1},function(v){console.error(v),m.value||(c.value=!1),s.value=!1}))},o=function(l){var u=e.actionFn,v=e.close,k=v===void 0?function(){}:v;if(!s.value){if(s.value=!0,!u){k();return}var g;if(e.emitEvent){if(g=u(l),e.quitOnNullishReturnValue&&!X(g)){s.value=!1,k(l);return}}else if(u.length)g=u(k),s.value=!1;else if(g=u(),!g){k();return}p(g)}};return function(){var n=e.type,l=e.prefixCls,u=e.buttonProps;return a(Z,_(_(_({},_e(n)),{},{onClick:o,loading:c.value,prefixCls:l},u),{},{ref:y}),r)}}});function E(t){return typeof t=="function"?t():t}var je=O({name:"ConfirmDialog",inheritAttrs:!1,props:["icon","onCancel","onOk","close","closable","zIndex","afterClose","visible","keyboard","centered","getContainer","maskStyle","okButtonProps","cancelButtonProps","okType","prefixCls","okCancel","width","mask","maskClosable","okText","cancelText","autoFocusButton","transitionName","maskTransitionName","type","title","content","direction","rootPrefixCls","bodyStyle","closeIcon","modalRender","focusTriggerAfterClose","wrapClassName"],setup:function(e,d){var r=d.attrs,s=Be("Modal"),y=we(s,1),c=y[0];return function(){var C=e.icon,m=e.onCancel,p=e.onOk,o=e.close,n=e.closable,l=n===void 0?!1:n,u=e.zIndex,v=e.afterClose,k=e.visible,g=e.keyboard,S=e.centered,oe=e.getContainer,ae=e.maskStyle,le=e.okButtonProps,ue=e.cancelButtonProps,U=e.okCancel,L=U===void 0?!0:U,N=e.width,re=N===void 0?416:N,I=e.mask,se=I===void 0?!0:I,$=e.maskClosable,ie=$===void 0?!1:$,V=e.type,M=e.title,ce=e.content,fe=e.direction,de=e.closeIcon,Ce=e.modalRender,ve=e.focusTriggerAfterClose,P=e.rootPrefixCls,me=e.bodyStyle,pe=e.wrapClassName,be=e.okType||"primary",A=e.prefixCls||"ant-modal",F="".concat(A,"-confirm"),ge=r.style||{},ke=E(e.okText)||(L?c.value.okText:c.value.justOkText),Fe=E(e.cancelText)||c.value.cancelText,j=e.autoFocusButton===null?!1:e.autoFocusButton||"ok",ye=q(F,"".concat(F,"-").concat(V),"".concat(A,"-").concat(V),G({},"".concat(F,"-rtl"),fe==="rtl"),r.class),he=L&&a(Y,{actionFn:m,close:o,autofocus:j==="cancel",buttonProps:ue,prefixCls:"".concat(P,"-btn")},{default:function(){return[Fe]}});return a(b,{prefixCls:A,class:ye,wrapClassName:q(G({},"".concat(F,"-centered"),!!S),pe),onCancel:function(W){return o({triggerCancel:!0},W)},visible:k,title:"",footer:"",transitionName:H(P,"zoom",e.transitionName),maskTransitionName:H(P,"fade",e.maskTransitionName),mask:se,maskClosable:ie,maskStyle:ae,style:ge,bodyStyle:me,width:re,zIndex:u,afterClose:v,keyboard:g,centered:S,getContainer:oe,closable:l,closeIcon:de,modalRender:Ce,focusTriggerAfterClose:ve},{default:function(){return[a("div",{class:"".concat(F,"-body-wrapper")},[a("div",{class:"".concat(F,"-body")},[E(C),M===void 0?null:a("span",{class:"".concat(F,"-title")},[E(M)]),a("div",{class:"".concat(F,"-content")},[E(ce)])]),a("div",{class:"".concat(F,"-btns")},[he,a(Y,{type:be,actionFn:p,close:o,autofocus:j==="ok",buttonProps:le,prefixCls:"".concat(P,"-btn")},{default:function(){return[ke]}})])])]}})}}}),ze=function(e){var d=document.createDocumentFragment(),r=i(i({},Pe(e,["parentContext","appContext"])),{close:c,visible:!0}),s=null;function y(){s&&(J(null,d),s.component.update(),s=null);for(var o=arguments.length,n=new Array(o),l=0;l<o;l++)n[l]=arguments[l];var u=n.some(function(g){return g&&g.triggerCancel});e.onCancel&&u&&e.onCancel.apply(e,n);for(var v=0;v<w.length;v++){var k=w[v];if(k===c){w.splice(v,1);break}}}function c(){for(var o=this,n=arguments.length,l=new Array(n),u=0;u<n;u++)l[u]=arguments[u];r=i(i({},r),{visible:!1,afterClose:function(){typeof e.afterClose=="function"&&e.afterClose(),y.apply(o,l)}}),C(r)}function C(o){typeof o=="function"?r=o(r):r=i(i({},r),o),s&&(i(s.component.props,r),s.component.update())}var m=function(n){var l=De,u=l.prefixCls,v=n.prefixCls||"".concat(u,"-modal");return a(Te,_(_({},l),{},{notUpdateGlobalConfig:!0,prefixCls:u}),{default:function(){return[a(je,_(_({},n),{},{rootPrefixCls:u,prefixCls:v}),null)]}})};function p(o){var n=a(m,i({},o));return n.appContext=e.parentContext||e.appContext||n.appContext,J(n,d),n}return s=p(r),w.push(c),{destroy:c,update:C}},R=ze;function We(t){return i(i({icon:function(){return a(ee,null,null)},okCancel:!1},t),{type:"warning"})}function qe(t){return i(i({icon:function(){return a(xe,null,null)},okCancel:!1},t),{type:"info"})}function Ge(t){return i(i({icon:function(){return a(Ee,null,null)},okCancel:!1},t),{type:"success"})}function He(t){return i(i({icon:function(){return a(Re,null,null)},okCancel:!1},t),{type:"error"})}function Je(t){return i(i({icon:function(){return a(ee,null,null)},okCancel:!0},t),{type:"confirm"})}function ne(t){return R(We(t))}b.info=function(e){return R(qe(e))};b.success=function(e){return R(Ge(e))};b.error=function(e){return R(He(e))};b.warning=ne;b.warn=ne;b.confirm=function(e){return R(Je(e))};b.destroyAll=function(){for(;w.length;){var e=w.pop();e&&e()}};b.install=function(t){return t.component(b.name,b),t};const Ke=O({components:{Button:Z,Modal:b,VuePictureCropper:Ae,UploadOutlined:Oe},setup(){const t=B(null),e=B(""),d=Le({dataURL:"",blobURL:""}),r=B(!1);return{uploadInput:t,pic:e,result:d,isShowDialog:r,selectFile:m=>{d.dataURL="",d.blobURL="",e.value="";const p=m.target,{files:o}=p;if(!o)return;const n=o[0],l=new FileReader;l.readAsDataURL(n),l.onload=()=>{e.value=String(l.result),r.value=!0,t.value&&(t.value.value="")}},getResult:async()=>{const m=x.getDataURL(),p=await x.getBlob(),o=await x.getFile({fileName:"\u6D4B\u8BD5\u6587\u4EF6\u540D\uFF0C\u53EF\u4E0D\u4F20"});console.log({base64:m,blob:p,file:o}),d.dataURL=m;try{d.blobURL=URL.createObjectURL(p)}catch{d.blobURL=""}r.value=!1},clear:()=>{x.clear()},reset:()=>{x.reset()}}}}),Qe={class:"section"},Xe=f("div",{class:"desc"},[f("p",null,"\u5728 Vue 3.0 \uFF0C\u4F18\u5148\u63A8\u8350\u4F7F\u7528 Composition API \u6765\u5199\u7EC4\u4EF6"),f("a",{href:"https://github.com/chengpeiquan/vue-picture-cropper-demo/blob/main/src/views/composition.vue",target:"_blank"},[f("span",null,"\u67E5\u770B\u672C DEMO \u6E90\u7801")])],-1),Ye=f("p",null,"\u8BF7\u5148\u70B9\u51FB\u6309\u94AE\u9009\u62E9\u56FE\u7247\uFF0C\u4F1A\u8FDB\u5165\u88C1\u5207\u5904\u7406\u73AF\u8282",-1),Ze=f("span",null,"\u9009\u62E9\u56FE\u7247",-1),et={key:0,class:"section"},tt=f("p",null,"\u88C1\u5207\u540E\u7684 Base64 \u56FE\u7247\u9884\u89C8\uFF1A",-1),nt={class:"preview"},ot=["src"],at=f("p",null,"\u88C1\u5207\u540E\u7684 Blob \u56FE\u7247\u9884\u89C8\uFF1A",-1),lt={class:"preview"},ut=["src"],rt=f("p",null,"\u53EF\u4EE5\u6309 F12 \u67E5\u770B\u6253\u5370\u7684 base64 / blob / file \u7ED3\u679C",-1),st=D("\u53D6\u6D88"),it=D("\u6E05\u9664"),ct=D("\u91CD\u7F6E"),ft=D("\u88C1\u5207");function dt(t,e,d,r,s,y){const c=T("UploadOutlined"),C=T("Button"),m=T("VuePictureCropper"),p=T("Modal");return K(),Q(Ie,null,[f("section",Qe,[Xe,Ye,a(C,{class:"select-picture"},{icon:h(()=>[a(c)]),default:h(()=>[Ze,f("input",{ref:"uploadInput",type:"file",accept:"image/jpg, image/jpeg, image/png, image/gif",onChange:e[0]||(e[0]=(...o)=>t.selectFile&&t.selectFile(...o))},null,544)]),_:1})]),t.result.dataURL&&t.result.blobURL?(K(),Q("section",et,[tt,f("div",nt,[f("img",{src:t.result.dataURL,alt:"\u7EC4\u5408\u5F0F API"},null,8,ot)]),at,f("div",lt,[f("img",{src:t.result.blobURL,alt:"\u7EC4\u5408\u5F0F API"},null,8,ut)]),rt])):Ne("",!0),a(p,{visible:t.isShowDialog,"onUpdate:visible":e[2]||(e[2]=o=>t.isShowDialog=o),title:"\u56FE\u7247\u88C1\u5207",maskClosable:!1},{footer:h(()=>[a(C,{onClick:e[1]||(e[1]=o=>t.isShowDialog=!1)},{default:h(()=>[st]),_:1}),a(C,{onClick:t.clear},{default:h(()=>[it]),_:1},8,["onClick"]),a(C,{onClick:t.reset},{default:h(()=>[ct]),_:1},8,["onClick"]),a(C,{type:"primary",onClick:t.getResult},{default:h(()=>[ft]),_:1},8,["onClick"])]),default:h(()=>[a(m,{boxStyle:{width:"100%",height:"100%",backgroundColor:"#f8f8f8",margin:"auto"},img:t.pic,options:{viewMode:1,dragMode:"crop",aspectRatio:16/9}},null,8,["img"])]),_:1},8,["visible"])],64)}var mt=Ue(Ke,[["render",dt]]);export{mt as default};
