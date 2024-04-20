"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:true,get:all[name]})}_export(exports,{button:function(){return button},default:function(){return _default}});var _buttonFilled=_interopRequireDefault(require("./buttonFilled"));var _buttonGradient=_interopRequireDefault(require("./buttonGradient"));var _buttonOutlined=_interopRequireDefault(require("./buttonOutlined"));var _buttonText=_interopRequireDefault(require("./buttonText"));var _button=require("../../../types/components/button");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var button={defaultProps:{variant:"filled",size:"md",color:"gray",fullWidth:false,ripple:true,className:""},valid:{variants:_button.propTypesVariant,sizes:_button.propTypesSize,colors:_button.propTypesColor},styles:{base:{initial:{verticalAlign:"align-middle",userSelect:"select-none",fontFamily:"font-sans",fontWeight:"font-bold",textAlign:"text-center",textTransform:"uppercase",transition:"transition-all",disabled:"disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none"},fullWidth:{display:"block",width:"w-full"}},sizes:{sm:{fontSize:"text-xs",py:"py-2",px:"px-4",borderRadius:"rounded-lg"},md:{fontSize:"text-xs",py:"py-3",px:"px-6",borderRadius:"rounded-lg"},lg:{fontSize:"text-sm",py:"py-3.5",px:"px-7",borderRadius:"rounded-lg"}},variants:{filled:_buttonFilled.default,gradient:_buttonGradient.default,outlined:_buttonOutlined.default,text:_buttonText.default}}};var _default=button;