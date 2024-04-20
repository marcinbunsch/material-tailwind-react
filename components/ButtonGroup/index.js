"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:true,get:all[name]})}_export(exports,{ButtonGroup:function(){return ButtonGroup},default:function(){return _default}});var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _classnames=_interopRequireDefault(require("classnames"));var _tailwindMerge=require("tailwind-merge");var _findMatch=_interopRequireDefault(require("../../utils/findMatch"));var _objectsToString=_interopRequireDefault(require("../../utils/objectsToString"));var _theme=require("../../context/theme");var _button=require("../../types/components/button");function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}var ButtonGroup=_react.default.forwardRef(function(_param,ref){var variant=_param.variant,size=_param.size,color=_param.color,fullWidth=_param.fullWidth,ripple=_param.ripple,className=_param.className,children=_param.children,rest=_objectWithoutProperties(_param,["variant","size","color","fullWidth","ripple","className","children"]);var buttonGroup=(0,_theme.useTheme)().buttonGroup;var defaultProps=buttonGroup.defaultProps,styles=buttonGroup.styles,valid=buttonGroup.valid;var base=styles.base,dividerColor=styles.dividerColor;variant=variant!==null&&variant!==void 0?variant:defaultProps.variant;size=size!==null&&size!==void 0?size:defaultProps.size;color=color!==null&&color!==void 0?color:defaultProps.color;ripple=ripple!==null&&ripple!==void 0?ripple:defaultProps.ripple;fullWidth=fullWidth!==null&&fullWidth!==void 0?fullWidth:defaultProps.fullWidth;className=(0,_tailwindMerge.twMerge)(defaultProps.className||"",className);var _obj;var classes=(0,_tailwindMerge.twMerge)((0,_classnames.default)((0,_objectsToString.default)(base.initial),(_obj={},_defineProperty(_obj,(0,_objectsToString.default)(base.fullWidth),fullWidth),_defineProperty(_obj,"divide-x",variant!=="outlined"),_defineProperty(_obj,(0,_objectsToString.default)(dividerColor[(0,_findMatch.default)(valid.colors,color,"gray")]),variant!=="outlined"),_obj)),className);return _react.default.createElement("div",_extends({},rest,{ref:ref,className:classes}),_react.default.Children.map(children,function(child,index){var _child_props;return _react.default.isValidElement(child)&&_react.default.cloneElement(child,{variant:variant,size:size,color:color,ripple:ripple,fullWidth:fullWidth,className:(0,_tailwindMerge.twMerge)((0,_classnames.default)({"rounded-r-none":index!==_react.default.Children.count(children)-1,"border-r-0":index!==_react.default.Children.count(children)-1,"rounded-l-none":index!==0}),(_child_props=child.props)===null||_child_props===void 0?void 0:_child_props.className)})}))});ButtonGroup.propTypes={variant:_propTypes.default.oneOf(_button.propTypesVariant),size:_propTypes.default.oneOf(_button.propTypesSize),color:_propTypes.default.oneOf(_button.propTypesColor),fullWidth:_button.propTypesFullWidth,ripple:_button.propTypesRipple,className:_button.propTypesClassName,children:_button.propTypesChildren};ButtonGroup.displayName="MaterialTailwind.ButtonGroup";var _default=ButtonGroup;