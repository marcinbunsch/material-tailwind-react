"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:true,get:all[name]})}_export(exports,{TabsBody:function(){return TabsBody},default:function(){return _default}});var _react=_interopRequireDefault(require("react"));var _framerMotion=require("framer-motion");var _deepmerge=_interopRequireDefault(require("deepmerge"));var _classnames=_interopRequireDefault(require("classnames"));var _tailwindMerge=require("tailwind-merge");var _objectsToString=_interopRequireDefault(require("../../utils/objectsToString"));var _theme=require("../../context/theme");var _tabsContext=require("./TabsContext");var _tabs=require("../../types/components/tabs");function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}var TabsBody=_react.default.forwardRef(function(_param,ref){var animate=_param.animate,className=_param.className,children=_param.children,rest=_objectWithoutProperties(_param,["animate","className","children"]);var tabsBody=(0,_theme.useTheme)().tabsBody;var defaultProps=tabsBody.defaultProps,base=tabsBody.styles.base;var dispatch=(0,_tabsContext.useTabs)().dispatch;animate=animate!==null&&animate!==void 0?animate:defaultProps.animate;className=(0,_tailwindMerge.twMerge)(defaultProps.className||"",className);var tabsBodyClasses=(0,_tailwindMerge.twMerge)((0,_classnames.default)((0,_objectsToString.default)(base)),className);var mainAnimation=_react.default.useMemo(function(){return{initial:{opacity:0,position:"absolute",top:"0",left:"0",zIndex:1,transition:{duration:0}},unmount:{opacity:0,position:"absolute",top:"0",left:"0",zIndex:1,transition:{duration:.5}},mount:{opacity:1,position:"relative",zIndex:2,transition:{duration:.5}}}},[]);var appliedAnimation=_react.default.useMemo(function(){return(0,_deepmerge.default)(mainAnimation,animate)},[animate,mainAnimation]);(0,_framerMotion.useIsomorphicLayoutEffect)(function(){(0,_tabsContext.setAnimation)(dispatch,appliedAnimation)},[appliedAnimation,dispatch]);return _react.default.createElement("div",_extends({},rest,{ref:ref,className:tabsBodyClasses}),children)});TabsBody.propTypes={animate:_tabs.propTypesAnimate,className:_tabs.propTypesClassName,children:_tabs.propTypesChildren};TabsBody.displayName="MaterialTailwind.TabsBody";var _default=TabsBody;