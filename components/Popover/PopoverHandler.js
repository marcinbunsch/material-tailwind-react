"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:true,get:all[name]})}_export(exports,{PopoverHandler:function(){return PopoverHandler},default:function(){return _default}});var _react=_interopRequireDefault(require("react"));var _react1=require("@floating-ui/react");var _popoverContext=require("./PopoverContext");var _popover=require("../../types/components/popover");function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==="function"){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))}ownKeys.forEach(function(key){_defineProperty(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})}keys.push.apply(keys,symbols)}return keys}function _objectSpreadProps(target,source){source=source!=null?source:{};if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}return target}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}var PopoverHandler=_react.default.forwardRef(function(_param,ref){var children=_param.children,rest=_objectWithoutProperties(_param,["children"]);var _usePopover=(0,_popoverContext.usePopover)(),getReferenceProps=_usePopover.getReferenceProps,reference=_usePopover.reference;var mergedRef=(0,_react1.useMergeRefs)([ref,reference]);return _react.default.cloneElement(children,_objectSpread({},getReferenceProps(_objectSpreadProps(_objectSpread({},rest),{ref:mergedRef}))))});PopoverHandler.propTypes={children:_popover.propTypesChildren};PopoverHandler.displayName="MaterialTailwind.PopoverHandler";var _default=PopoverHandler;