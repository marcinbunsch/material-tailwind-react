import buttonGroupDividerColor from"./buttonGroupDividerColor";import{propTypesVariant,propTypesSize,propTypesColor}from"../../../types/components/button";export var buttonGroup={defaultProps:{variant:"filled",size:"md",color:"gray",fullWidth:false,ripple:true,className:""},valid:{variants:propTypesVariant,sizes:propTypesSize,colors:propTypesColor},styles:{base:{initial:{display:"flex",flexDirection:"row"},fullWidth:{width:"w-full"}},dividerColor:buttonGroupDividerColor}};export default buttonGroup;