"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:true,get:all[name]})}_export(exports,{CardFooter:function(){return CardFooter},default:function(){return _default}});var _react=_interopRequireDefault(require("react"));var _classnames=_interopRequireDefault(require("classnames"));var _tailwindMerge=require("tailwind-merge");var _objectsToString=_interopRequireDefault(require("../../utils/objectsToString"));var _theme=require("../../context/theme");var _card=require("../../types/components/card");function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}var CardFooter=_react.default.forwardRef(function(_param,ref){var divider=_param.divider,className=_param.className,children=_param.children,rest=_objectWithoutProperties(_param,["divider","className","children"]);var cardFooter=(0,_theme.useTheme)().cardFooter;var defaultProps=cardFooter.defaultProps,base=cardFooter.styles.base;divider=divider!==null&&divider!==void 0?divider:defaultProps.divider;className=(0,_tailwindMerge.twMerge)(defaultProps.className||"",className);var cardFooterClasses=(0,_tailwindMerge.twMerge)((0,_classnames.default)((0,_objectsToString.default)(base.initial),_defineProperty({},(0,_objectsToString.default)(base.divider),divider)),className);return _react.default.createElement("div",_extends({},rest,{ref:ref,className:cardFooterClasses}),children)});CardFooter.propTypes={divider:_card.propTypesDivider,className:_card.propTypesClassName,children:_card.propTypesChildren};CardFooter.displayName="MaterialTailwind.CardFooter";var _default=CardFooter;