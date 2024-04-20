"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:true,get:all[name]})}_export(exports,{List:function(){return List},ListItem:function(){return _listItem.ListItem},ListItemPrefix:function(){return _listItemPrefix.ListItemPrefix},ListItemSuffix:function(){return _listItemSuffix.ListItemSuffix},default:function(){return _default}});var _react=_interopRequireDefault(require("react"));var _theme=require("../../context/theme");var _classnames=_interopRequireDefault(require("classnames"));var _tailwindMerge=require("tailwind-merge");var _objectsToString=_interopRequireDefault(require("../../utils/objectsToString"));var _list=require("../../types/components/list");var _listItem=require("./ListItem");var _listItemPrefix=require("./ListItemPrefix");var _listItemSuffix=require("./ListItemSuffix");function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}var List=_react.default.forwardRef(function(_param,ref){var className=_param.className,children=_param.children,rest=_objectWithoutProperties(_param,["className","children"]);var list=(0,_theme.useTheme)().list;var defaultProps=list.defaultProps,base=list.styles.base;className=(0,_tailwindMerge.twMerge)(defaultProps.className||"",className);var listClasses=(0,_tailwindMerge.twMerge)((0,_classnames.default)((0,_objectsToString.default)(base.list)),className);return _react.default.createElement("nav",_extends({},rest,{ref:ref,className:listClasses}),children)});List.propTypes={className:_list.propTypesClassName,children:_list.propTypesChildren};List.displayName="MaterialTailwind.List";var _default=Object.assign(List,{Item:_listItem.ListItem,ItemPrefix:_listItemPrefix.ListItemPrefix,ItemSuffix:_listItemSuffix.ListItemSuffix});