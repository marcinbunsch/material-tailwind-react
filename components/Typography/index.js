"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:true,get:all[name]})}_export(exports,{Typography:function(){return Typography},default:function(){return _default}});var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _classnames=_interopRequireDefault(require("classnames"));var _tailwindMerge=require("tailwind-merge");var _findMatch=_interopRequireDefault(require("../../utils/findMatch"));var _objectsToString=_interopRequireDefault(require("../../utils/objectsToString"));var _theme=require("../../context/theme");var _typography=require("../../types/components/typography");function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==="function"){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))}ownKeys.forEach(function(key){_defineProperty(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})}keys.push.apply(keys,symbols)}return keys}function _objectSpreadProps(target,source){source=source!=null?source:{};if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}return target}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}var Typography=_react.default.forwardRef(function(_param,ref){var variant=_param.variant,color=_param.color,textGradient=_param.textGradient,as=_param.as,className=_param.className,children=_param.children,rest=_objectWithoutProperties(_param,["variant","color","textGradient","as","className","children"]);var typography=(0,_theme.useTheme)().typography;var defaultProps=typography.defaultProps,valid=typography.valid,styles=typography.styles;var variants=styles.variants,colors=styles.colors,gradient=styles.textGradient;variant=variant!==null&&variant!==void 0?variant:defaultProps.variant;color=color!==null&&color!==void 0?color:defaultProps.color;textGradient=textGradient||defaultProps.textGradient;as=as!==null&&as!==void 0?as:undefined;className=(0,_tailwindMerge.twMerge)(defaultProps.className||"",className);var typographyVariant=(0,_objectsToString.default)(variants[(0,_findMatch.default)(valid.variants,variant,"paragraph")]);var typographyColor=colors[(0,_findMatch.default)(valid.colors,color,"inherit")];var gradientTextClasses=(0,_objectsToString.default)(gradient);var classes=(0,_tailwindMerge.twMerge)((0,_classnames.default)(typographyVariant,_defineProperty({},typographyColor.color,!textGradient),_defineProperty({},gradientTextClasses,textGradient),_defineProperty({},typographyColor.gradient,textGradient)),className);var template;switch(variant){case"h1":template=_react.default.createElement(as||"h1",_objectSpreadProps(_objectSpread({},rest),{ref:ref,className:classes}),children);break;case"h2":template=_react.default.createElement(as||"h2",_objectSpreadProps(_objectSpread({},rest),{ref:ref,className:classes}),children);break;case"h3":template=_react.default.createElement(as||"h3",_objectSpreadProps(_objectSpread({},rest),{ref:ref,className:classes}),children);break;case"h4":template=_react.default.createElement(as||"h4",_objectSpreadProps(_objectSpread({},rest),{ref:ref,className:classes}),children);break;case"h5":template=_react.default.createElement(as||"h5",_objectSpreadProps(_objectSpread({},rest),{ref:ref,className:classes}),children);break;case"h6":template=_react.default.createElement(as||"h6",_objectSpreadProps(_objectSpread({},rest),{ref:ref,className:classes}),children);break;case"lead":template=_react.default.createElement(as||"p",_objectSpreadProps(_objectSpread({},rest),{ref:ref,className:classes}),children);break;case"paragraph":template=_react.default.createElement(as||"p",_objectSpreadProps(_objectSpread({},rest),{ref:ref,className:classes}),children);break;case"small":template=_react.default.createElement(as||"p",_objectSpreadProps(_objectSpread({},rest),{ref:ref,className:classes}),children);break;default:template=_react.default.createElement(as||"p",_objectSpreadProps(_objectSpread({},rest),{ref:ref,className:classes}),children);break}return template});Typography.propTypes={variant:_propTypes.default.oneOf(_typography.propTypesVariant),color:_propTypes.default.oneOf(_typography.propTypesColor),as:_typography.propTypesAs,textGradient:_typography.propTypesTextGradient,className:_typography.propTypesClassName,children:_typography.propTypesChildren};Typography.displayName="MaterialTailwind.Typography";var _default=Typography;