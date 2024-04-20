"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:true,get:all[name]})}_export(exports,{Accordion:function(){return Accordion},AccordionHeader:function(){return _accordionHeader.AccordionHeader},AccordionBody:function(){return _accordionBody.AccordionBody},useAccordion:function(){return _accordionContext.useAccordion},default:function(){return _default}});var _react=_interopRequireDefault(require("react"));var _classnames=_interopRequireDefault(require("classnames"));var _tailwindMerge=require("tailwind-merge");var _objectsToString=_interopRequireDefault(require("../../utils/objectsToString"));var _theme=require("../../context/theme");var _accordionContext=require("./AccordionContext");var _accordion=require("../../types/components/accordion");var _accordionHeader=require("./AccordionHeader");var _accordionBody=require("./AccordionBody");function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}var Accordion=_react.default.forwardRef(function(_param,ref){var open=_param.open,icon=_param.icon,animate=_param.animate,className=_param.className,disabled=_param.disabled,children=_param.children,rest=_objectWithoutProperties(_param,["open","icon","animate","className","disabled","children"]);var accordion=(0,_theme.useTheme)().accordion;var defaultProps=accordion.defaultProps,base=accordion.styles.base;icon=icon!==null&&icon!==void 0?icon:defaultProps.icon;animate=animate!==null&&animate!==void 0?animate:defaultProps.animate;disabled=disabled!==null&&disabled!==void 0?disabled:defaultProps.disabled;className=(0,_tailwindMerge.twMerge)(defaultProps.className||"",className);var accordionClasses=(0,_tailwindMerge.twMerge)((0,_classnames.default)((0,_objectsToString.default)(base.container),_defineProperty({},(0,_objectsToString.default)(base.disabled),disabled)),className);var contextValue=_react.default.useMemo(function(){return{open:open,icon:icon,animate:animate,disabled:disabled}},[open,icon,animate,disabled]);return _react.default.createElement(_accordionContext.AccordionContextProvider,{value:contextValue},_react.default.createElement("div",_extends({},rest,{ref:ref,className:accordionClasses}),children))});Accordion.propTypes={open:_accordion.propTypesOpen,icon:_accordion.propTypesIcon,animate:_accordion.propTypesAnimate,disabled:_accordion.propTypesDisabled,className:_accordion.propTypesClassName,children:_accordion.propTypesChildren};Accordion.displayName="MaterialTailwind.Accordion";var _default=Object.assign(Accordion,{Header:_accordionHeader.AccordionHeader,Body:_accordionBody.AccordionBody});