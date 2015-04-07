/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Group',
            type:'group',
            rect:['0','0','100%','100%','auto','auto'],
            c:[
            {
               id:'Character',
               type:'image',
               rect:['0','0','100%','100%','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"Wolverine-01.svg",'0px','0px']
            },
            {
               id:'Claws',
               type:'image',
               rect:['0','0','100%','100%','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"Wolverine-02.svg",'0px','0px']
            }]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '90vw'],
            ["style", "height", '90vh'],
            ["style", "overflow", 'hidden']
         ],
         "${_Claws}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "opacity", '0']
         ],
         "${_Group}": [
            ["style", "top", '0px'],
            ["style", "left", '2px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2750,
         autoPlay: true,
         timeline: [
            { id: "eid19", tween: [ "style", "${_Group}", "top", '-57px', { fromValue: '0px'}], position: 1750, duration: 250 },
            { id: "eid20", tween: [ "style", "${_Group}", "top", '-90px', { fromValue: '-57px'}], position: 2000, duration: 250 },
            { id: "eid23", tween: [ "style", "${_Group}", "top", '-62px', { fromValue: '-90px'}], position: 2250, duration: 250 },
            { id: "eid24", tween: [ "style", "${_Group}", "top", '3px', { fromValue: '-62px'}], position: 2500, duration: 250 },
            { id: "eid35", tween: [ "style", "${_Group}", "left", '2px', { fromValue: '2px'}], position: 2750, duration: 0 },
            { id: "eid29", tween: [ "style", "${_Claws}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2750, duration: 0 },
            { id: "eid36", tween: [ "style", "${_Claws}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2750, duration: 0 },
            { id: "eid37", tween: [ "style", "${_Claws}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2750, duration: 0 },
            { id: "eid38", tween: [ "style", "${_Claws}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2750, duration: 0 },
            { id: "eid39", tween: [ "style", "${_Claws}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2750, duration: 0 },
            { id: "eid18", tween: [ "style", "${_Claws}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 2000 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
   $('#d').click(function(){
     Edge.launchComposition(compId);
  });
});
})(jQuery, AdobeEdge, "EDGE-226780666");
