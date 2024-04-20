"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:true,get:all[name]})}_export(exports,{ListItem:function(){return ListItem},ListItemPrefix:function(){return _listItemPrefix.ListItemPrefix},ListItemSuffix:function(){return _listItemSuffix.ListItemSuffix},default:function(){return _default}});var _react=_interopRequireDefault(require("react"));var _theme=require("../../context/theme");var _materialRippleEffects=_interopRequireDefault(require("material-ripple-effects"));var _classnames=_interopRequireDefault(require("classnames"));var _tailwindMerge=require("tailwind-merge");var _objectsToString=_interopRequireDefault(require("../../utils/objectsToString"));var _list=require("../../types/components/list");var _listItemPrefix=require("./ListItemPrefix");var _listItemSuffix=require("./ListItemSuffix");function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}var ListItem=_react.default.forwardRef(function(_param,ref){var className=_param.className,disabled=_param.disabled,selected=_param.selected,ripple=_param.ripple,children=_param.children,rest=_objectWithoutProperties(_param,["className","disabled","selected","ripple","children"]);var list=(0,_theme.useTheme)().list;var defaultProps=list.defaultProps,base=list.styles.base;ripple=ripple!==null&&ripple!==void 0?ripple:defaultProps.ripple;var rippleEffect=ripple!==undefined&&new _materialRippleEffects.default;var _obj;var listItemClasses=(0,_tailwindMerge.twMerge)((0,_classnames.default)((0,_objectsToString.default)(base.item.initial),(_obj={},_defineProperty(_obj,(0,_objectsToString.default)(base.item.disabled),disabled),_defineProperty(_obj,(0,_objectsToString.default)(base.item.selected),selected&&!disabled),_obj)),className);return _react.default.createElement("div",_extends({},rest,{ref:ref,role:"button",tabIndex:0,className:listItemClasses,onMouseDown:function(e){var onMouseDown=rest===null||rest===void 0?void 0:rest.onMouseDown;if(ripple)rippleEffect.create(e,"dark");return typeof onMouseDown==="function"&&onMouseDown(e)}}),children)});ListItem.propTypes={className:_list.propTypesClassName,selected:_list.propTypesSelected,disabled:_list.propTypesDisabled,ripple:_list.propTypesRipple,children:_list.propTypesChildren};ListItem.displayName="MaterialTailwind.ListItem";var _default=Object.assign(ListItem,{Prefix:_listItemPrefix.ListItemPrefix,Suffix:_listItemSuffix.ListItemSuffix});