(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{179:function(e,a,t){},252:function(e,a,t){e.exports=t.p+"static/media/bg.b595ad80.svg"},270:function(e,a,t){e.exports=t(529)},275:function(e,a,t){},529:function(e,a,t){"use strict";t.r(a);var o=t(0),n=t.n(o),r=t(7),l=t.n(r),c=(t(275),t(77)),i=t(29),s=t(14),m=t(31),d=t(30),u=t(11),p=t(32),h=t(74),f=t(595),g=t(589);t(179);var b,v,C,y,x,E=function(e){var a=e.children,t=e.page;return n.a.createElement("section",{className:"page ".concat(t)},a)},j=t(236),w=t(33),O=t(536),k=t(8),N=t(39),S=t.n(N),B=function(e){return"@media only screen and (max-width: ".concat({xs:"576px",sm:"768px",md:"992px",lg:"1200px"}[e],")")},P={ColorBox:(b={width:"20%",height:function(e){return e.showingFullPalette?"25%":"50%"},margin:"0 auto",display:"inline-block",position:"relative",marginBottom:"-4px",cursor:"pointer","&:hover button":{opacity:"1"}},Object(k.a)(b,B("lg"),{width:"25%",height:function(e){return e.showingFullPalette?"20":"33.3333%"}}),Object(k.a)(b,B("md"),{width:"50%",height:function(e){return e.showingFullPalette?"10%":"20%"}}),Object(k.a)(b,B("xs"),{width:"100%",height:function(e){return e.showingFullPalette?"5%":"10%"}}),b),copyButton:{width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, .3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",color:function(e){return S()(e.background).luminance()<=.2?"white":"#2B2B2B"},textDecoration:"none",opacity:"0"},seeMore:{color:function(e){return S()(e.background).luminance()>=.65?"#2B2B2B":"white"},background:"rgba(255, 255, 255, 0.3)",position:"absolute",border:"none",right:"0px",bottom:"0px",width:"60px",height:"30px",textAlign:"center",lineHeight:"30px",textTransform:"uppercase"},boxContent:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:"black",letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px"},copyOverlay:{opacity:"0",zIndex:"0",width:"100%",height:"100%",transform:"scale(.1)",transition:"transform 0.6s ease-in-out"},copyMsg:(v={position:"fixed",left:"0px",right:"0px",top:"0px",bottom:"0px",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",fontSize:"4rem",transform:"scale(0.1)",opacity:"0",color:"white"},Object(k.a)(v,B("xs"),{fontSize:"2.5rem"}),Object(k.a)(v,"& h1",{fontWeight:"400",textShadow:"1px 2px black",background:"rgba(255, 255, 255, .2)",width:"100%",textAlign:"center",marginBottom:"0",padding:"1rem"}),Object(k.a)(v,"& p",{fontSize:"2rem",fontWeight:"100"}),v),showOverlay:{opacity:"1",transform:"scale(50)",zIndex:"10",position:"absolute"},showMsg:{transition:"all .4s ease-in-out .3s",opacity:"1",transform:"scale(1)",zIndex:"20"},copyText:{color:function(e){return S()(e.background).luminance()>=.6?"#2B2B2B":"white"}},colorName:{color:function(e){return S()(e.background).luminance()<=.2?"white":"#2B2B2B"}}},F=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(m.a)(this,Object(d.a)(a).call(this,e))).state={copied:!1},t.changeCopyState=t.changeCopyState.bind(Object(u.a)(t)),t}return Object(p.a)(a,e),Object(s.a)(a,[{key:"changeCopyState",value:function(){var e=this;this.setState({copied:!0},function(){setTimeout(function(){return e.setState({copied:!1})},1500)})}},{key:"render",value:function(){var e=this.props,a=e.name,t=e.background,o=e.moreUrl,r=e.showingFullPalette,l=e.classes,c=this.state.copied;return n.a.createElement(j.CopyToClipboard,{text:t,onCopy:this.changeCopyState},n.a.createElement("div",{style:{background:t},className:l.ColorBox},n.a.createElement("div",{style:{background:t},className:"".concat(l.copyOverlay," ").concat(c&&l.showOverlay)}),n.a.createElement("div",{className:"".concat(l.copyMsg," ").concat(c&&l.showMsg)},n.a.createElement("h1",null,"copied!"),n.a.createElement("p",{className:l.copyText},t)),n.a.createElement("div",null,n.a.createElement("div",{className:l.boxContent},n.a.createElement("span",{className:l.colorName},a)),n.a.createElement("button",{className:l.copyButton},"Copy")),r&&n.a.createElement(w.b,{to:o,onClick:function(e){return e.stopPropagation()}},n.a.createElement("span",{className:l.seeMore},"More"))))}}]),a}(o.Component),D=Object(O.a)(P)(F),I={Palette:{height:"100vh",display:"flex",flexDirection:"column"},PaletteColors:{height:"88%"},goBack:(C={backgroundColor:"black",width:"20%",height:"50%",margin:"0 auto",display:"inline-block",position:"relative",marginBottom:"-4px",cursor:"pointer"},Object(k.a)(C,B("lg"),{width:"75%",height:"33.3333%"}),Object(k.a)(C,B("md"),{width:"50%",height:"20%"}),Object(k.a)(C,B("xs"),{width:"100%",height:"10%"}),C),backButton:{width:"100px",height:" 30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, .3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",color:"white",textDecoration:"none"}},A=t(256),L=t(593),R=t(577),T=t(594),z=t(127),G=t.n(z),M=t(578),U=(t(341),{Navbar:{display:"flex",alignItems:"center",justifyContent:"flex-start",height:"7vh",width:"100%"},logo:(y={marginRight:"40px",padding:"0 13px",fontSize:"30px",fontFamily:"Pacifico, cursive",height:"100%",display:"flex",alignItems:"center","& a":{textDecoration:"none",color:"black"}},Object(k.a)(y,B("sm"),{fontSize:"20px",margin:"0"}),Object(k.a)(y,B("xs"),{display:"none"}),y),sliderContainer:Object(k.a)({},B("xs"),{display:"flex",fontSize:".7rem",padding:"0 .5rem"}),slider:(x={width:"340px",margin:"0 10px",display:"inline-block"},Object(k.a)(x,B("xs"),{width:"7rem"}),Object(k.a)(x,"& .rc-slider-rail",{height:"8px"}),Object(k.a)(x,"& .rc-slider-track",{backgroundColor:"transparent"}),Object(k.a)(x,"& .rc-slider-handle, .rc-slider-handle:hover, .rc-slider-handle:active, .rc-slider-handle:focus",{backgroundColor:"green",outline:"none",border:"2px solid green",boxShadow:"none",width:"13px",height:"13px",marginLeft:"-7px",marginTop:"-2px"}),x),selectContainer:{marginLeft:"auto"}}),W=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(m.a)(this,Object(d.a)(a).call(this,e))).state={format:"hex",open:!1},t.handleFormatChange=t.handleFormatChange.bind(Object(u.a)(t)),t.closeSnackBar=t.closeSnackBar.bind(Object(u.a)(t)),t}return Object(p.a)(a,e),Object(s.a)(a,[{key:"handleFormatChange",value:function(e){this.setState({format:e.target.value,open:!0}),this.props.handleChange(e.target.value)}},{key:"closeSnackBar",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.props,a=e.changeLevel,t=e.level,o=e.showSlider,r=e.classes,l=this.state.format;return n.a.createElement("nav",{className:r.Navbar},n.a.createElement("div",{className:r.logo},n.a.createElement(w.b,{to:"/colour-project"},"Colour Picker")),o&&n.a.createElement("div",{className:r.sliderContainer},n.a.createElement("span",null,"Level: ",t),n.a.createElement("div",{className:r.slider},n.a.createElement(A.a,{defaultValue:t,min:100,max:900,step:100,onAfterChange:a}))),n.a.createElement("div",{className:r.selectContainer},n.a.createElement(L.a,{value:l,onChange:this.handleFormatChange},n.a.createElement(R.a,{value:"hex"},"HEX - #ffffff"),n.a.createElement(R.a,{value:"rgb"},"RGB - rgb(255,255,255)"),n.a.createElement(R.a,{value:"rgba"},"RGBA - rgb(255,255,255,1.0)"))),n.a.createElement(T.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:3e3,message:n.a.createElement("span",{id:"message-id"},"Format Changed to ",l.toUpperCase()),ContentProps:{"aria-describedby":"message-id"},action:[n.a.createElement(M.a,{onClick:this.closeSnackBar,color:"inherit",key:"close","aria-label":"close"},n.a.createElement(G.a,null))],onClose:this.closeSnackBar}))}}]),a}(o.Component),H=Object(O.a)(U)(W),V={PaletteFooter:{backgroundColor:"#fff",height:"5vh",display:"flex",justifyContent:"flex-end",alignItems:"center",fontWeight:"bold",textDecoration:"none",color:"#000"},emoji:{fontSize:"1.5rem",margin:"0 1rem"}};var q=Object(O.a)(V)(function(e){var a=e.paletteName,t=e.emoji,o=e.classes,r=e.id;return n.a.createElement(w.b,{to:"/colour-project/palette/".concat(r),className:o.PaletteFooter},n.a.createElement("footer",null,a,n.a.createElement("span",{className:o.emoji},t)))}),J=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(m.a)(this,Object(d.a)(a).call(this,e))).state={level:500,format:"hex"},t.changeLevel=t.changeLevel.bind(Object(u.a)(t)),t.changeFormat=t.changeFormat.bind(Object(u.a)(t)),t}return Object(p.a)(a,e),Object(s.a)(a,[{key:"changeLevel",value:function(e){this.setState({level:e})}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.props.palette,a=e.colors,t=e.paletteName,o=e.emoji,r=e.id,l=this.props.classes,c=this.state,i=c.level,s=c.format,m=a[i].map(function(e){return n.a.createElement(D,{key:e.id,background:e[s],name:e.name,moreUrl:"/colour-project/palette/".concat(r,"/").concat(e.id),showingFullPalette:!0})});return n.a.createElement("div",{className:l.Palette},n.a.createElement(H,{handleChange:this.changeFormat,level:i,changeLevel:this.changeLevel,showSlider:!0}),n.a.createElement("div",{className:l.PaletteColors},m),n.a.createElement(q,{id:r,paletteName:t,emoji:o}))}}]),a}(o.Component),Y=Object(O.a)(I)(J),_=t(80),K=t(4),Q=t(245),X=t.n(Q),$=t(585),Z=t(586),ee=t(587),ae=t(92),te=t(247),oe=t.n(te),ne=t(584),re=t(579),le=t(583),ce=t(581),ie=t(582),se=t(580),me=t(60),de=t(257),ue=(t(359),function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;me.ValidatorForm.addValidationRule("isPaletteUnique",function(a){return e.props.palettes.every(function(e){return e.paletteName.toLowerCase()!==a.toLowerCase()})})}},{key:"render",value:function(){var e=this.props,a=e.handleSubmit,t=e.newPaletteName,o=e.handleNewPaletteName,r=e.isFormOpen,l=e.formClose,c=e.formEmoji;return n.a.createElement("div",null,n.a.createElement(re.a,{open:"emoji"===r,onClose:l},n.a.createElement(se.a,{id:"form-dialog-title"},"Choose a Palette Emoji"),n.a.createElement(de.a,{title:"Pick a palette emoji",emoji:"point_up",onSelect:a,set:"emojione"})),n.a.createElement(re.a,{open:"form"===r,onClose:l,"aria-labelledby":"form-dialog-title"},n.a.createElement(se.a,{id:"form-dialog-title"},"Choose a Palette Name"," ",n.a.createElement("span",{role:"img","aria-label":"emoji palette name"},"\ud83c\udfa8")),n.a.createElement(me.ValidatorForm,{onSubmit:c},n.a.createElement(ce.a,null,n.a.createElement(ie.a,null,"Please enter a name for the new palette. Make sure that the name is unique and not left blank."),n.a.createElement(me.TextValidator,{value:t,label:"Palette Name",onChange:o,fullWidth:!0,margin:"normal",validators:["required","isPaletteUnique"],errorMessages:["Palette name must be entered","Palette Name must be unique"]})),n.a.createElement(le.a,null,n.a.createElement(ne.a,{onClick:l,color:"primary"},"Cancel"),n.a.createElement(ne.a,{variant:"contained",color:"primary",type:"submit"},"Save New Palette")))))}}]),a}(o.Component));var pe,he=function(e){var a=e.handleDrawerOpen,t=e.handleSubmit,o=e.handleNewPaletteName,r=e.open,l=e.newPaletteName,c=e.classes,i=e.isFormOpen,s=e.formOpen,m=e.formClose,d=e.formEmoji;return n.a.createElement("div",{className:c.root},n.a.createElement($.a,null),n.a.createElement(Z.a,{color:"default",position:"fixed",className:Object(K.a)(c.appBar,Object(k.a)({},c.appBarShift,r))},n.a.createElement(ee.a,{disableGutters:!r},n.a.createElement(M.a,{color:"inherit","aria-label":"Open drawer",onClick:a,edge:"start",className:Object(K.a)(c.menuButton,r&&c.hide)},n.a.createElement(oe.a,null)),n.a.createElement(ae.a,{className:c.navTitle,variant:"h6",noWrap:!0},"Create a Palette")),n.a.createElement("div",{className:c.navBtns},n.a.createElement(ue,Object.assign({handleSubmit:t,newPaletteName:l,handleNewPaletteName:o,isFormOpen:i,formClose:m,formEmoji:d,classes:c},e)),n.a.createElement(w.b,{to:"/colour-project"},n.a.createElement(ne.a,{variant:"contained",color:"secondary"},"Go Back")),n.a.createElement(ne.a,{variant:"contained",color:"primary",onClick:s},"SAVE"))))},fe=t(248),ge=t(533),be=window.matchMedia("(min-width: 500px)").matches?400:320,ve=Object(ge.a)(function(e){var a;return{root:{display:"flex",alignItems:"center"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),flexDirection:"row",justifyContent:"space-between"},appBarShift:{width:"calc(100% - ".concat(be,"px)"),marginLeft:be,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:Object(k.a)({margin:e.spacing(2)},B("xs"),{margin:e.spacing(0)}),hide:{display:"none"},drawer:{width:be,flexShrink:0},drawerPaper:{width:be,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",overflow:"hidden"},drawerHeader:Object(fe.a)({alignSelf:"flex-end",display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,height:"calc(100vh - 64px) ",padding:0,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-be},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},navBtns:Object(k.a)({marginRight:"1rem",display:"flex",alignItems:"center",justifyContent:"space-between","& button":Object(k.a)({margin:"0 0.5rem"},B("xs"),{padding:".3rem",fontSize:".6rem",margin:".2rem"}),"& a":{textDecoration:"none"}},B("xs"),{marginRight:".5rem"}),container:{width:"90%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},buttons:{width:"100%",marginBottom:"1rem"},button:{width:"50%"},picker:{width:"80% !important",marginTop:"2rem"},pickerContainer:{height:"80%",display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center"},addColor:{width:"80%",padding:"1rem",margin:"2rem 0",fontSize:"1.2rem"},colorNameInput:{width:"80%",height:"20px",margin:"1rem 0 2rem 0"},formContainer:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center"},navTitle:(a={},Object(k.a)(a,B("xs"),{fontSize:".8rem"}),Object(k.a)(a,"@media only screen and (max-width: 450px)",{fontSize:".8rem"}),a)}}),Ce=t(128),ye=t(129),xe=t.n(ye),Ee={root:(pe={width:"20%",height:"25%",margin:"0 auto",display:"inline-block",position:"relative",marginBottom:"-6px",cursor:"pointer","&:hover svg":{color:"white",transform:"scale(1.)"}},Object(k.a)(pe,B("lg"),{width:"25%",height:"20%"}),Object(k.a)(pe,B("md"),{width:"50%",height:"10%"}),Object(k.a)(pe,B("xs"),{width:"100%",height:"5%"}),pe),boxContent:Object(k.a)({position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:function(e){return S()(e.color).luminance()<=.2?"rgba(255,255,255.8)":"rgba(0,0,0,.6)"},letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px",display:"flex",justifyContent:"space-between"},B("xs"),{padding:"0"}),deleteIcon:{color:function(e){return S()(e.color).luminance()>=.08?"#2B2B2B":"rgba(255,255,255.8)"},transition:"all .2s"}},je=Object(Ce.SortableElement)(function(e){var a=e.classes,t=e.color,o=e.name,r=e.deleteBox;return n.a.createElement("div",{style:{backgroundColor:t},className:a.root},n.a.createElement("div",{className:a.boxContent},n.a.createElement("span",null,o),n.a.createElement(xe.a,{className:a.deleteIcon,onClick:function(){r(o)}})))}),we=Object(O.a)(Ee)(je),Oe=Object(Ce.SortableContainer)(function(e){var a=e.colors,t=e.deleteBox;return n.a.createElement("div",{style:{width:"100%",height:"100%"}},a.map(function(e,a){return n.a.createElement(we,{index:a,key:e.name,color:e.color,name:e.name,deleteBox:t})}))}),ke=t(596),Ne=t(588),Se=t(250),Be=t.n(Se),Pe=t(249);function Fe(e){var a=e.updateCurrentColor,t=e.addNewColor,r=e.handleNewColorName,l=e.currentColor,c=e.colors,i=e.newColorName,s=e.paletteIsFull,m=e.classes;return Object(o.useEffect)(function(){me.ValidatorForm.addValidationRule("isColorNameUnique",function(e){return c.every(function(a){return a.name.toLowerCase()!==e.toLowerCase()})}),me.ValidatorForm.addValidationRule("isColorUnique",function(e){return c.every(function(e){return e.color!==l})})},[c,l]),n.a.createElement("div",{className:m.pickerContainer},n.a.createElement(Pe.SketchPicker,{className:m.picker,color:l,onChangeComplete:function(e){return a(e)}}),n.a.createElement(me.ValidatorForm,{instantValidate:!1,className:m.formContainer,onSubmit:t},n.a.createElement(me.TextValidator,{className:m.colorNameInput,variant:"filled",placeholder:"Color Name",value:i,onChange:r,validators:["required","isColorNameUnique","isColorUnique"],errorMessages:["Please enter a color name","Color name must be unique","Color was already used"]}),n.a.createElement(ne.a,{className:m.addColor,variant:"contained",color:"primary",style:{backgroundColor:s?"grey":l},type:"submit",defaultProps:!0,disabled:s},s?"Palette Full":"Add Color")))}var De=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.open,o=e.handleDrawerClose,r=e.clearColors,l=e.addRandomColor,c=e.paletteIsFull,i=e.updateCurrentColor,s=e.addNewColor,m=e.handleNewColorName,d=e.colors,u=e.newColorName,p=e.currentColor;return n.a.createElement("div",null,n.a.createElement(ke.a,{className:a.drawer,variant:"persistent",anchor:"left",open:t,classes:{paper:a.drawerPaper}},n.a.createElement("div",{className:a.drawerHeader},n.a.createElement(M.a,{onClick:o},n.a.createElement(Be.a,null))),n.a.createElement(Ne.a,null),n.a.createElement("div",{className:a.container},n.a.createElement(ae.a,{variant:"h4",gutterBottom:!0},"Design Your Palette"),n.a.createElement("div",{className:a.buttons},n.a.createElement(ne.a,{className:a.button,variant:"contained",color:"secondary",onClick:r},"Clear Palette"),n.a.createElement(ne.a,{className:a.button,variant:"contained",color:"primary",onClick:l,disabled:c},"Random Colour")),n.a.createElement(Fe,{updateCurrentColor:i,addNewColor:s,handleNewColorName:m,colors:d,newColorName:u,currentColor:p,paletteIsFull:c,classes:a}))))}}]),a}(o.Component),Ie=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83d\udc71\u200d",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\udfc3\u200d",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83d\udc28",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83e\udd2f",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83e\udd14",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83d\udc73\ud83c\udffe\u200d",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83d\udece",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}];function Ae(e){var a=ve(),t=Object(o.useState)(!1),r=Object(_.a)(t,2),l=r[0],i=r[1],s=Object(o.useState)("teal"),m=Object(_.a)(s,2),d=m[0],u=m[1],p=Object(o.useState)(Ie[0].colors),h=Object(_.a)(p,2),f=h[0],g=h[1],b=Object(o.useState)(""),v=Object(_.a)(b,2),C=v[0],y=v[1],x=Object(o.useState)(""),E=Object(_.a)(x,2),j=E[0],w=E[1],O=f.length>=e.maxColors,N=Object(o.useState)(!1),S=Object(_.a)(N,2),B=S[0],P=S[1];function F(){P(!1)}return n.a.createElement("div",{className:a.root},n.a.createElement(he,Object.assign({handleDrawerOpen:function(){i(!0)},handleSubmit:function(a){var t={paletteName:j,id:j.replace(/\s+/g,"-").toLowerCase(),emoji:a.native,colors:f};e.savePalette(t),F(),e.history.push("/colour-project")},handleNewPaletteName:function(e){w(e.target.value)},open:l,newPaletteName:j,classes:a,isFormOpen:B,formOpen:function(){P("form")},formClose:F,formEmoji:function(){P("emoji")}},e)),n.a.createElement(De,{handleDrawerClose:function(){i(!1)},clearColors:function(){g([])},addRandomColor:function e(){var a=Ie.map(function(e){return e.colors}).flat(),t=a[Math.floor(Math.random()*a.length)];f.every(function(e){return e.name!==t.name&&e.color!==t.color})?g([].concat(Object(c.a)(f),[t])):e()},paletteIsFull:O,updateCurrentColor:function(e){u(e.hex)},addNewColor:function(){var e={color:d,name:C};g([].concat(Object(c.a)(f),[e])),y("")},handleNewColorName:function(e){y(e.target.value)},colors:f,newColorName:C,currentColor:d,open:l,classes:a}),n.a.createElement("main",{className:Object(K.a)(a.content,Object(k.a)({},a.contentShift,l))},n.a.createElement("div",{className:a.drawerHeader}),n.a.createElement(Oe,{axis:"xy",colors:f,deleteBox:function(e){g(f.filter(function(a){return a.name!==e}))},onSortEnd:function(e){var a=e.oldIndex,t=e.newIndex;g(X()(f,a,t))},distance:10})))}Ae.defaultProps={maxColors:20};var Le=Ae,Re=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(m.a)(this,Object(d.a)(a).call(this,e)))._shades=t.gatherShades(t.props.palette,t.props.colorId),t.changeFormat=t.changeFormat.bind(Object(u.a)(t)),t.state={format:"hex"},t}return Object(p.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.paletteBack()}},{key:"gatherShades",value:function(e,a){var t=[],o=e.colors;for(var n in o)t=t.concat(o[n].filter(function(e){return e.id===a}));return t.slice(1)}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.state.format,a=this.props.palette,t=a.paletteName,o=a.emoji,r=a.id,l=this.props.classes,c=this._shades.map(function(a){return n.a.createElement(D,{showingFullPalette:!1,key:a.hex,name:a.name,background:a[e]})});return n.a.createElement("div",{className:l.Palette},n.a.createElement(H,{handleChange:this.changeFormat,showSlider:!1}),n.a.createElement("div",{className:l.PaletteColors},c,n.a.createElement("div",{className:l.goBack},n.a.createElement(w.b,{to:"/colour-project/palette/".concat(r),className:l.backButton},"Go Back"))),n.a.createElement(q,{id:r,paletteName:t,emoji:o}))}}]),a}(o.Component),Te=Object(O.a)(I)(Re),ze=[50,100,200,300,400,500,600,700,800,900];var Ge,Me=function(e){for(var a={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},t=0,o=ze;t<o.length;t++){var n=o[t];a.colors[n]=[]}var r,l,c=!0,i=!1,s=void 0;try{for(var m,d=e.colors[Symbol.iterator]();!(c=(m=d.next()).done);c=!0){var u=m.value,p=(r=u.color,l=10,S.a.scale(function(e){return[S()(e).darken(1.4).hex(),e,"#fff"]}(r)).mode("lab").colors(l)).reverse();for(var h in p)a.colors[ze[h]].push({name:"".concat(u.name," ").concat(ze[h]),id:u.name.toLowerCase().replace(/ /g,"-"),hex:p[h],rgb:S()(p[h]).css(),rgba:S()(p[h]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(f){i=!0,s=f}finally{try{c||null==d.return||d.return()}finally{if(i)throw s}}return a},Ue=t(591),We=t(576),He=t(531),Ve=t(590),qe=t(592),Je=t(170),Ye=t.n(Je),_e=t(171),Ke=t.n(_e),Qe=t(255),Xe=t.n(Qe),$e=t(251),Ze=t.n($e),ea={root:{backgroundColor:"white",border:"1px solid  black",borderRadius:"5px",padding:"0.5rem",position:"relative",overflow:"hidden",cursor:"pointer","&:hover svg":{opacity:1}},colors:{backgroundColor:"#dae1e4",display:"grid",gridTemplateColumns:"repeat(5,1fr)",gridTemplateRows:"repeat(4,1fr)",height:"10rem",width:"100%",borderRadius:"5px",overflow:"hidden"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0",color:"#000",paddingTop:"0.5rem",fontSize:"1rem",position:"relative"},emoji:{marginLeft:"0.5rem",fontSize:"1.5rem"},miniColor:{width:"100%",display:"inline-block",margin:"0 auto",position:"relative",marginBottom:"0"},delete:{},deleteIcon:{color:"white",backgroundColor:"#eb3d30",width:"40px",height:"40px",position:"absolute",top:"0px",right:"0px",padding:"10px",zIndex:"10",opacity:"0",transition:"all 0.3s"}},aa=Object(O.a)(ea)(Ze()(function(e){var a=e.classes,t=e.paletteName,o=e.emoji,r=e.colors,l=e.deleteDialog,c=e.id,i=e.handleClick,s=r.map(function(e){return n.a.createElement("div",{className:a.miniColor,style:{backgroundColor:e.color},key:e.name})});return n.a.createElement("div",{className:a.root,onClick:function(){return i(c)}},n.a.createElement("div",{className:a.delete},n.a.createElement(xe.a,{className:a.deleteIcon,onClick:function(e){e.stopPropagation(),l(c)}})),n.a.createElement("div",{className:a.colors},s),n.a.createElement("h5",{className:a.title},t," ",n.a.createElement("span",{className:a.emoji},o)))})),ta=t(252),oa={"@global":{".palette-exit":{opacity:1},".palette-exit-active":{opacity:0,transition:"opacity 500ms ease-in"}},root:{backgroundColor:"#3915bb",backgroundImage:"url(".concat(t.n(ta).a,")"),height:"100vh",display:"flex",alignItems:"flex-start",justifyContent:"center",overflow:"scroll"},container:Object(k.a)({width:"50%",height:"100%",display:"flex",alignItems:"flex-start",flexDirection:"column"},B("xs"),{width:"100%"}),nav:(Ge={display:"flex",width:"100%",justifyContent:"space-between",color:"white",alignItems:"center",margin:"1rem 0"},Object(k.a)(Ge,B("xs"),{flexDirection:"column"}),Object(k.a)(Ge,"& h1",{fontSize:"1rem"}),Object(k.a)(Ge,"& a",Object(k.a)({color:"white"},B("xs"),{fontSize:"1rem",textDecoration:"none",backgroundColor:"#e01b5c",padding:".5rem",borderRadius:"2px"})),Ge),palettes:Object(k.a)({boxSizing:"border-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gridColumnGap:"5%",gridRowGap:"2%"},B("xs"),{width:"90%"}),logo:Object(k.a)({fontFamily:"Pacifico, cursive",fontWeight:"200",fontSize:"2rem"},B("xs"),{fontSize:"3rem",display:"initial"}),label:Object(k.a)({},B("xs"),{display:"none"})},na=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(m.a)(this,Object(d.a)(a).call(this,e))).state={id:""},t.deleteDialog=t.deleteDialog.bind(Object(u.a)(t)),t.handleClose=t.handleClose.bind(Object(u.a)(t)),t.handleDelete=t.handleDelete.bind(Object(u.a)(t)),t.goToPalette=t.goToPalette.bind(Object(u.a)(t)),t}return Object(p.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.paletteForward()}},{key:"goToPalette",value:function(e){this.props.history.push("/colour-project/palette/".concat(e))}},{key:"deleteDialog",value:function(e){this.props.openDialog(),this.setState({id:e})}},{key:"handleDelete",value:function(){this.props.deletePalette(this.state.id),this.setState({id:""}),this.props.closeDialog()}},{key:"handleClose",value:function(){this.props.closeDialog(),this.setState({id:""})}},{key:"render",value:function(){var e=this,a=this.props,t=a.palettes,o=a.classes,r=a.open;return n.a.createElement("div",{className:o.root},n.a.createElement("div",{className:o.container},n.a.createElement("nav",{className:o.nav},n.a.createElement("h1",null,n.a.createElement("span",{className:o.logo},"Color Picker")," ",n.a.createElement("span",{className:o.label},"\u2014 with React")),n.a.createElement(w.b,{to:"/colour-project/palette/new"},"Create Palette")),n.a.createElement(f.a,{className:o.palettes},t.map(function(a){return n.a.createElement(g.a,{key:a.id,classNames:"palette",timeout:500},n.a.createElement(aa,Object.assign({deleteDialog:e.deleteDialog,id:a.id,key:a.id},a,{handleClick:e.goToPalette})))}))),n.a.createElement(re.a,{open:r,"aria-labelledby":"delete-dialog-title"},n.a.createElement(se.a,{id:"delete-dialog-title"},"Delete Palette?"),n.a.createElement(We.a,null,n.a.createElement(He.a,{button:!0,onClick:this.handleDelete},n.a.createElement(Ve.a,null,n.a.createElement(Ue.a,{style:{backgroundColor:Ye.a[100],color:Ye.a[600]}},n.a.createElement(Xe.a,null))),n.a.createElement(qe.a,{primary:"Delete"})),n.a.createElement(He.a,{button:!0,onClick:this.handleClose},n.a.createElement(Ve.a,null,n.a.createElement(Ue.a,{style:{backgroundColor:Ke.a[100],color:Ke.a[600]}},n.a.createElement(G.a,null))),n.a.createElement(qe.a,{primary:"Cancel"})))))}}]),a}(o.Component),ra=Object(O.a)(oa)(na),la=function(e){function a(e){var t;Object(i.a)(this,a),(t=Object(m.a)(this,Object(d.a)(a).call(this,e))).savePalette=function(e){t.setState({palettes:[].concat(Object(c.a)(t.state.palettes),[e])},t.syncLocalStorage)},t.paletteBack=function(){t.setState({page:"paletteBack"})},t.paletteForward=function(){t.setState({page:"paletteForward"})};var o=JSON.parse(window.localStorage.getItem("palettes"));return t.state={palettes:o||Ie,open:!1,page:"paletteForward"},t.findPalette=t.findPalette.bind(Object(u.a)(t)),t.deletePalette=t.deletePalette.bind(Object(u.a)(t)),t.openDialog=t.openDialog.bind(Object(u.a)(t)),t.closeDialog=t.closeDialog.bind(Object(u.a)(t)),t}return Object(p.a)(a,e),Object(s.a)(a,[{key:"deletePalette",value:function(e){var a=this.state.palettes.filter(function(a){return a.id!==e});this.setState({palettes:a},this.syncLocalStorage)}},{key:"findPalette",value:function(e){return this.state.palettes.find(function(a){return a.id===e})}},{key:"syncLocalStorage",value:function(){window.localStorage.setItem("palettes",JSON.stringify(this.state.palettes))}},{key:"openDialog",value:function(){this.setState({open:!0})}},{key:"closeDialog",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this;return n.a.createElement(h.a,{render:function(a){var t=a.location;return n.a.createElement(f.a,null,n.a.createElement(g.a,{key:t.key,classNames:"page",timeout:500},n.a.createElement(h.c,{location:t},n.a.createElement(h.a,{exact:!0,path:"/colour-project",render:function(a){return n.a.createElement(E,{page:"paletteList"},n.a.createElement(ra,Object.assign({deletePalette:e.deletePalette,palettes:e.state.palettes,open:e.state.open,openDialog:e.openDialog,closeDialog:e.closeDialog},a,{paletteForward:e.paletteForward})))}}),n.a.createElement(h.a,{exact:!0,path:"/colour-project/palette/new",render:function(a){return n.a.createElement(E,{page:"newPalette"},n.a.createElement(Le,Object.assign({},a,{savePalette:e.savePalette,palettes:e.state.palettes})))}}),n.a.createElement(h.a,{exact:!0,path:"/colour-project/palette/:id",render:function(a){return n.a.createElement(E,{page:e.state.page},n.a.createElement(Y,{palette:Me(e.findPalette(a.match.params.id)),goBack:e.goBack}))}}),n.a.createElement(h.a,{path:"/colour-project/palette/:paletteId/:colorId",render:function(a){return n.a.createElement(E,{page:"singleColorPalette"},n.a.createElement(Te,{paletteBack:e.paletteBack,colorId:a.match.params.colorId,palette:Me(e.findPalette(a.match.params.paletteId))}))}}),n.a.createElement(h.a,{render:function(a){return n.a.createElement(E,{page:"paletteList"},n.a.createElement(ra,Object.assign({deletePalette:e.deletePalette,palettes:e.state.palettes,open:e.state.open,openDialog:e.openDialog,closeDialog:e.closeDialog},a,{paletteForward:e.paletteForward})))}}))))}})}}]),a}(o.Component),ca=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ia(e,a){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(n.a.createElement(w.a,null,n.a.createElement(la,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/colour-project",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var a="".concat("/colour-project","/service-worker.js");ca?(function(e,a){fetch(e).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ia(e,a)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(a,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):ia(a,e)})}}()}},[[270,1,2]]]);
//# sourceMappingURL=main.33aa6118.chunk.js.map