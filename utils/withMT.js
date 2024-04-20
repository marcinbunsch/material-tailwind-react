function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==="function"){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))}ownKeys.forEach(function(key){_defineProperty(target,key,source[key])})}return target}var merge=require("deepmerge");var colors=require("../theme/base/colors");var typography=require("../theme/base/typography");var shadows=require("../theme/base/shadows");var breakpoints=require("../theme/base/breakpoints");var materialTailwindConfig={darkMode:"class",content:["./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}","./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"],theme:{colors:colors,fontFamily:typography,boxShadow:shadows,screens:breakpoints},plugins:[]};function withMT(tailwindConfig){var themeFont=materialTailwindConfig.theme.fontFamily;if(tailwindConfig.theme.fontFamily){var _tailwindConfig_theme_fontFamily=tailwindConfig.theme.fontFamily,sans=_tailwindConfig_theme_fontFamily.sans,serif=_tailwindConfig_theme_fontFamily.serif,body=_tailwindConfig_theme_fontFamily.body;themeFont.sans=sans||themeFont.sans;themeFont.serif=serif||themeFont.serif;themeFont.body=body||themeFont.body}return merge(materialTailwindConfig,_objectSpread({},tailwindConfig))}module.exports=withMT;