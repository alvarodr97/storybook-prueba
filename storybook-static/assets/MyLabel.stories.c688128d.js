var i=Object.defineProperty;var l=(e,n)=>i(e,"name",{value:n,configurable:!0});import{j as t}from"./jsx-runtime.ec5f7295.js";import"./iframe.79e3100f.js";const o=l(({allCaps:e=!1,color:n="primary",label:a="No Label",size:s="normal",fontColor:c})=>t("span",{className:`label ${s} text-${n}`,style:{color:c},children:e?a.toUpperCase():a}),"MyLabel");try{o.displayName="MyLabel",o.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:{value:"No Label"},description:"Mensaje a mostrar en la etiqueta",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Tama\xF1o de la etiqueta",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"Mayusculas",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"Color del label",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},fontColor:{defaultValue:null,description:"Color personalizado",name:"fontColor",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/MyLabel.tsx#MyLabel"]={docgenInfo:o.__docgenInfo,name:"MyLabel",path:"src/components/MyLabel.tsx#MyLabel"})}catch{}const L={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from "@storybook/react";\r
import { MyLabel } from "../../components/MyLabel";\r
\r
export default {\r
  title: 'UI/MyLabel',\r
  component: MyLabel,\r
  argTypes: {\r
    // size: { control: 'select', options: ['nomal', 'h1'] }\r
    size: { control: 'select' },\r
    color: { control: 'select' },\r
    fontColor: { control: 'color' }\r
  }\r
} as ComponentMeta<typeof MyLabel>\r
\r
const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel { ...args } />\r
\r
export const Basic = Template.bind({})\r
Basic.args = {\r
  size: 'normal',\r
  allCaps: false // true: capitalize\r
}\r
\r
export const AllCaps = Template.bind({})\r
AllCaps.args = {\r
  size: 'normal',\r
  allCaps: true\r
}\r
\r
export const Secondary = Template.bind({})\r
Secondary.args = {\r
  size: 'normal',\r
  color: 'secondary'\r
}\r
\r
export const Tertiary = Template.bind({})\r
Tertiary.args = {\r
  size: 'normal',\r
  color: 'tertiary'\r
}\r
\r
export const CustomFontColor = Template.bind({})\r
CustomFontColor.args = {\r
  size: 'h1',\r
  fontColor: '#5517ac'\r
}`,locationsMap:{basic:{startLoc:{col:49,line:15},endLoc:{col:82,line:15},startBody:{col:49,line:15},endBody:{col:82,line:15}},"all-caps":{startLoc:{col:49,line:15},endLoc:{col:82,line:15},startBody:{col:49,line:15},endBody:{col:82,line:15}},secondary:{startLoc:{col:49,line:15},endLoc:{col:82,line:15},startBody:{col:49,line:15},endBody:{col:82,line:15}},tertiary:{startLoc:{col:49,line:15},endLoc:{col:82,line:15},startBody:{col:49,line:15},endBody:{col:82,line:15}},"custom-font-color":{startLoc:{col:49,line:15},endLoc:{col:82,line:15},startBody:{col:49,line:15},endBody:{col:82,line:15}}}}},title:"UI/MyLabel",component:o,argTypes:{size:{control:"select"},color:{control:"select"},fontColor:{control:"color"}}},r=l(e=>t(o,{...e}),"Template"),p=r.bind({});p.args={size:"normal",allCaps:!1};const d=r.bind({});d.args={size:"normal",allCaps:!0};const y=r.bind({});y.args={size:"normal",color:"secondary"};const m=r.bind({});m.args={size:"normal",color:"tertiary"};const u=r.bind({});u.args={size:"h1",fontColor:"#5517ac"};const M=["Basic","AllCaps","Secondary","Tertiary","CustomFontColor"];export{d as AllCaps,p as Basic,u as CustomFontColor,y as Secondary,m as Tertiary,M as __namedExportsOrder,L as default};
//# sourceMappingURL=MyLabel.stories.c688128d.js.map
