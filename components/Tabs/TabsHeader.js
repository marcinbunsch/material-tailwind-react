function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}import React from"react";import classnames from"classnames";import{twMerge}from"tailwind-merge";import objectsToString from"../../utils/objectsToString";import{useTheme}from"../../context/theme";import{useTabs,setIndicator}from"./TabsContext";import{propTypesIndicator,propTypesClassName,propTypesChildren}from"../../types/components/tabs";export var TabsHeader=React.forwardRef(function(_param,ref){var indicatorProps=_param.indicatorProps,className=_param.className,children=_param.children,rest=_objectWithoutProperties(_param,["indicatorProps","className","children"]);var tabsHeader=useTheme().tabsHeader;var defaultProps=tabsHeader.defaultProps,styles=tabsHeader.styles;var _useTabs=useTabs(),state=_useTabs.state,dispatch=_useTabs.dispatch;var orientation=state.orientation;React.useEffect(function(){setIndicator(dispatch,indicatorProps)},[dispatch,indicatorProps]);className=twMerge(defaultProps.className||"",className);var tabsHeaderClasses=twMerge(classnames(objectsToString(styles.base),_defineProperty({},styles[orientation]&&objectsToString(styles[orientation]),orientation)),className);return React.createElement("nav",null,React.createElement("ul",_extends({},rest,{ref:ref,role:"tablist",className:tabsHeaderClasses}),children))});TabsHeader.propTypes={indicatorProps:propTypesIndicator,className:propTypesClassName,children:propTypesChildren};TabsHeader.displayName="MaterialTailwind.TabsHeader";export default TabsHeader;