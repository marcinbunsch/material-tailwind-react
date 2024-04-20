"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:true,get:all[name]})}_export(exports,{Menu:function(){return Menu},MenuHandler:function(){return _menuHandler.MenuHandler},MenuList:function(){return _menuList.MenuList},MenuItem:function(){return _menuItem.MenuItem},useMenu:function(){return _menuContext.useMenu},default:function(){return _default}});var _react=_interopRequireDefault(require("react"));var _react1=require("@floating-ui/react");var _menuContext=require("./MenuContext");var _menuCore=require("./MenuCore");var _menuHandler=require("./MenuHandler");var _menuList=require("./MenuList");var _menuItem=require("./MenuItem");function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var Menu=_react.default.forwardRef(function(param,ref){var open=param.open,handler=param.handler,placement=param.placement,offset=param.offset,dismiss=param.dismiss,animate=param.animate,lockScroll=param.lockScroll,allowHover=param.allowHover,children=param.children;var parentId=(0,_react1.useFloatingParentNodeId)();var props={open:open,handler:handler,placement:placement,offset:offset,dismiss:dismiss,animate:animate,lockScroll:lockScroll,allowHover:allowHover};if(parentId==null){return _react.default.createElement(_react1.FloatingTree,null,_react.default.createElement(_menuCore.MenuCore,_extends({ref:ref},props),children))}return _react.default.createElement(_menuCore.MenuCore,_extends({ref:ref},props),children)});Menu.propTypes=_menuCore.MenuCore.propTypes;Menu.displayName="MaterialTailwind.Menu";var _default=Object.assign(Menu,{Handler:_menuHandler.MenuHandler,List:_menuList.MenuList,Item:_menuItem.MenuItem});