function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}import React from"react";import{FloatingPortal,FloatingOverlay,FloatingFocusManager,useMergeRefs}from"@floating-ui/react";import{AnimatePresence,m,LazyMotion,domAnimation}from"framer-motion";import classnames from"classnames";import{twMerge}from"tailwind-merge";import objectsToString from"../../utils/objectsToString";import{useTheme}from"../../context/theme";import{useMenu}from"./MenuContext";import{propTypesClassName,propTypesChildren}from"../../types/components/menu";export var MenuList=React.forwardRef(function(_param,ref){var children=_param.children,className=_param.className,rest=_objectWithoutProperties(_param,["children","className"]);var menu=useTheme().menu;var base=menu.styles.base;var _useMenu=useMenu(),open=_useMenu.open,handler=_useMenu.handler,strategy=_useMenu.strategy,x=_useMenu.x,y=_useMenu.y,floating=_useMenu.floating,listItemsRef=_useMenu.listItemsRef,getFloatingProps=_useMenu.getFloatingProps,getItemProps=_useMenu.getItemProps,appliedAnimation=_useMenu.appliedAnimation,lockScroll=_useMenu.lockScroll,context=_useMenu.context,activeIndex=_useMenu.activeIndex,tree=_useMenu.tree,allowHover=_useMenu.allowHover,internalAllowHover=_useMenu.internalAllowHover,setActiveIndex=_useMenu.setActiveIndex,nested=_useMenu.nested;className=className!==null&&className!==void 0?className:"";var menuClasses=twMerge(classnames(objectsToString(base.menu)),className);var mergedRef=useMergeRefs([ref,floating]);var NewAnimatePresence=AnimatePresence;var menuComponent=React.createElement(m.div,_extends({},rest,{ref:mergedRef,style:{position:strategy,top:y!==null&&y!==void 0?y:0,left:x!==null&&x!==void 0?x:0},className:menuClasses},getFloatingProps({onKeyDown:function onKeyDown(event){if(event.key==="Tab"){handler(false);if(event.shiftKey){event.preventDefault()}}}}),{initial:"unmount",exit:"unmount",animate:open?"mount":"unmount",variants:appliedAnimation}),React.Children.map(children,function(child,index){return React.isValidElement(child)&&React.cloneElement(child,getItemProps({tabIndex:activeIndex===index?0:-1,role:"menuitem",className:child.props.className,ref:function ref(node){listItemsRef.current[index]=node},onClick:function onClick(event){if(child.props.onClick){var _child_props,_child_props_onClick;(_child_props_onClick=(_child_props=child.props).onClick)===null||_child_props_onClick===void 0?void 0:_child_props_onClick.call(_child_props,event)}tree===null||tree===void 0?void 0:tree.events.emit("click")},onMouseEnter:function onMouseEnter(){if(allowHover&&open||internalAllowHover&&open){setActiveIndex(index)}}}))}));return React.createElement(LazyMotion,{features:domAnimation},React.createElement(FloatingPortal,null,React.createElement(NewAnimatePresence,null,open&&React.createElement(React.Fragment,null,lockScroll?React.createElement(FloatingOverlay,{lockScroll:true},React.createElement(FloatingFocusManager,{context:context,modal:!nested,initialFocus:nested?-1:0,returnFocus:!nested,visuallyHiddenDismiss:true},menuComponent)):React.createElement(FloatingFocusManager,{context:context,modal:!nested,initialFocus:nested?-1:0,returnFocus:!nested,visuallyHiddenDismiss:true},menuComponent)))))});MenuList.propTypes={className:propTypesClassName,children:propTypesChildren};MenuList.displayName="MaterialTailwind.MenuList";export default MenuList;