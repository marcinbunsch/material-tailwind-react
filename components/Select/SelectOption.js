function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}import React from"react";import classnames from"classnames";import{twMerge}from"tailwind-merge";import objectsToString from"../../utils/objectsToString";import{useTheme}from"../../context/theme";import{useSelect}from"./SelectContext";import{propTypesValue,propTypesIndex,propTypesDisabled,propTypesClassName,propTypesChildren}from"../../types/components/select";export var SelectOption=function(_param){var handleSelect=function handleSelect(){setSelectedIndex(index);onChange(value);setOpen(false);setActiveIndex(null)};var handleKeyDown=function handleKeyDown(event){if(event.key==="Enter"||event.key===" "&&!dataRef.current.typing){event.preventDefault();handleSelect()}};var _param_value=_param.value,value=_param_value===void 0?"":_param_value,_param_index=_param.index,index=_param_index===void 0?0:_param_index,_param_disabled=_param.disabled,disabled=_param_disabled===void 0?false:_param_disabled,_param_className=_param.className,className=_param_className===void 0?"":_param_className,children=_param.children,rest=_objectWithoutProperties(_param,["value","index","disabled","className","children"]);var select=useTheme().select;var styles=select.styles;var base=styles.base;var _useSelect=useSelect(),selectedIndex=_useSelect.selectedIndex,setSelectedIndex=_useSelect.setSelectedIndex,listRef=_useSelect.listRef,setOpen=_useSelect.setOpen,onChange=_useSelect.onChange,activeIndex=_useSelect.activeIndex,setActiveIndex=_useSelect.setActiveIndex,getItemProps=_useSelect.getItemProps,dataRef=_useSelect.dataRef;var optionBaseClasses=objectsToString(base.option.initial);var optionActiveClasses=objectsToString(base.option.active);var optionDisabledClasses=objectsToString(base.option.disabled);var _obj;var classes=twMerge(classnames(optionBaseClasses,(_obj={},_defineProperty(_obj,optionActiveClasses,selectedIndex===index),_defineProperty(_obj,optionDisabledClasses,disabled),_obj)),className!==null&&className!==void 0?className:"");return React.createElement("li",_extends({},rest,{role:"option",ref:function(node){return listRef.current[index]=node},className:classes,disabled:disabled,tabIndex:activeIndex===index?0:1,"aria-selected":activeIndex===index&&selectedIndex===index,"data-selected":selectedIndex===index},getItemProps({onClick:function(e){var onClick=rest===null||rest===void 0?void 0:rest.onClick;if(typeof onClick==="function"){onClick(e);handleSelect()}handleSelect()},onKeyDown:function(e){var onKeyDown=rest===null||rest===void 0?void 0:rest.onKeyDown;if(typeof onKeyDown==="function"){onKeyDown(e);handleKeyDown(e)}handleKeyDown(e)}})),children)};SelectOption.propTypes={value:propTypesValue,index:propTypesIndex,disabled:propTypesDisabled,className:propTypesClassName,children:propTypesChildren};SelectOption.displayName="MaterialTailwind.SelectOption";export default SelectOption;