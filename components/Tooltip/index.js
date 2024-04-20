"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:true,get:all[name]})}_export(exports,{Tooltip:function(){return Tooltip},default:function(){return _default}});var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _react1=require("@floating-ui/react");var _framerMotion=require("framer-motion");var _classnames=_interopRequireDefault(require("classnames"));var _tailwindMerge=require("tailwind-merge");var _deepmerge=_interopRequireDefault(require("deepmerge"));var _objectsToString=_interopRequireDefault(require("../../utils/objectsToString"));var _theme=require("../../context/theme");var _popover=require("../../types/components/popover");function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==="function"){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))}ownKeys.forEach(function(key){_defineProperty(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})}keys.push.apply(keys,symbols)}return keys}function _objectSpreadProps(target,source){source=source!=null?source:{};if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}return target}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest()}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(n);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}var Tooltip=_react.default.forwardRef(function(_param,ref){var open=_param.open,handler=_param.handler,content=_param.content,interactive=_param.interactive,placement=_param.placement,offset=_param.offset,dismiss=_param.dismiss,animate=_param.animate,className=_param.className,children=_param.children,rest=_objectWithoutProperties(_param,["open","handler","content","interactive","placement","offset","dismiss","animate","className","children"]);var tooltip=(0,_theme.useTheme)().tooltip;var defaultProps=tooltip.defaultProps,base=tooltip.styles.base;var _React_useState=_slicedToArray(_react.default.useState(false),2),internalOpen=_React_useState[0],setInternalOpen=_React_useState[1];open=open!==null&&open!==void 0?open:internalOpen;handler=handler!==null&&handler!==void 0?handler:setInternalOpen;interactive=interactive!==null&&interactive!==void 0?interactive:defaultProps.interactive;placement=placement!==null&&placement!==void 0?placement:defaultProps.placement;offset=offset!==null&&offset!==void 0?offset:defaultProps.offset;dismiss=dismiss!==null&&dismiss!==void 0?dismiss:defaultProps.dismiss;animate=animate!==null&&animate!==void 0?animate:defaultProps.animate;className=(0,_tailwindMerge.twMerge)(defaultProps.className||"",className);var tooltipClasses=(0,_tailwindMerge.twMerge)((0,_classnames.default)((0,_objectsToString.default)(base)),className);var animation={unmount:{opacity:0},mount:{opacity:1}};var appliedAnimation=(0,_deepmerge.default)(animation,animate);var _useFloating=(0,_react1.useFloating)({open:open,onOpenChange:handler,middleware:[(0,_react1.offset)(offset),(0,_react1.flip)(),(0,_react1.shift)()],placement:placement}),x=_useFloating.x,y=_useFloating.y,reference=_useFloating.reference,floating=_useFloating.floating,strategy=_useFloating.strategy,refs=_useFloating.refs,update=_useFloating.update,context=_useFloating.context;var _useInteractions=(0,_react1.useInteractions)([(0,_react1.useClick)(context,{enabled:interactive}),(0,_react1.useFocus)(context),(0,_react1.useHover)(context),(0,_react1.useRole)(context,{role:"tooltip"}),(0,_react1.useDismiss)(context,dismiss)]),getReferenceProps=_useInteractions.getReferenceProps,getFloatingProps=_useInteractions.getFloatingProps;_react.default.useEffect(function(){if(refs.reference.current&&refs.floating.current&&open){return(0,_react1.autoUpdate)(refs.reference.current,refs.floating.current,update)}},[open,update,refs.reference,refs.floating]);var mergedRef=(0,_react1.useMergeRefs)([ref,floating]);var childMergedRef=(0,_react1.useMergeRefs)([ref,reference]);var NewAnimatePresence=_framerMotion.AnimatePresence;return _react.default.createElement(_react.default.Fragment,null,typeof children==="string"?_react.default.createElement("span",_extends({},getReferenceProps({ref:childMergedRef})),children):_react.default.cloneElement(children,_objectSpread({},getReferenceProps(_objectSpreadProps(_objectSpread({},children===null||children===void 0?void 0:children.props),{ref:childMergedRef})))),_react.default.createElement(_framerMotion.LazyMotion,{features:_framerMotion.domAnimation},_react.default.createElement(_react1.FloatingPortal,null,_react.default.createElement(NewAnimatePresence,null,open&&_react.default.createElement(_framerMotion.m.div,_extends({},getFloatingProps(_objectSpreadProps(_objectSpread({},rest),{ref:mergedRef,className:tooltipClasses,style:{position:strategy,top:y!==null&&y!==void 0?y:"",left:x!==null&&x!==void 0?x:""}})),{initial:"unmount",exit:"unmount",animate:open?"mount":"unmount",variants:appliedAnimation}),content)))))});Tooltip.propTypes={open:_popover.propTypesOpen,handler:_popover.propTypesHandler,content:_popover.propTypesContent,interactive:_popover.propTypesInteractive,placement:_propTypes.default.oneOf(_popover.propTypesPlacement),offset:_popover.propTypesOffset,dismiss:_popover.propTypesDismiss,animate:_popover.propTypesAnimate,className:_popover.propTypesClassName,children:_popover.propTypesChildren};Tooltip.displayName="MaterialTailwind.Tooltip";var _default=Tooltip;