(this["webpackJsonpai-daw"]=this["webpackJsonpai-daw"]||[]).push([[0],[,,,,,,,function(e,t,a){},,,,,,,,,,,function(e,t,a){e.exports=a(38)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),i=a.n(o),c=(a(23),a(3)),l=(a(24),{padding:8,background:"#222222",color:"white"});function s(){return r.a.createElement("div",{style:l},r.a.createElement("strong",null,"AI DAW")," by sibeliusy")}var u=a(1),m=a.n(u),d=(a(25),a(13)),p=a(14),h=a(16),E=a(15),f=a(17),g=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(E.a)(t).call(this,e))).tick=function(){a.setState({data:a.props.data}),a.myReq=window.requestAnimationFrame(a.tick)},a.state={data:a.props.data},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){window.requestAnimationFrame(this.tick)}},{key:"componentWillUnmount",value:function(){window.cancelAnimationFrame(this.myReq)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.render(this.state.data))}}]),t}(r.a.Component),v=["bar","beat","sixteenth"];function b(){return r.a.createElement(g,{render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"menu-button disabled"},m.a.Transport.position.split(":").map((function(e,t){return r.a.createElement("span",{className:"num-box",key:t},r.a.createElement("span",{className:"num"},Math.floor(e)),r.a.createElement("span",{className:"num-title"},v[t]))}))))}})}a(26);function y(e){var t=Object(n.useState)(e.source.volume.value),a=Object(c.a)(t,2),o=a[0],i=a[1];Object(n.useEffect)((function(){e.source.volume.value=o}));var l=new m.a.Meter;return e.source.connect(l),r.a.createElement(g,{render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{width:100,textAlign:"left",position:"relative"},className:"menu-button disabled"},r.a.createElement("input",{className:"fader",style:{position:"absolute",width:100,margin:0},type:"range",min:"-100",max:"10",step:"0.1",value:o,onChange:function(e){i(e.target.value)}}),r.a.createElement("input",{type:"number",value:o,onChange:function(e){i(e.target.value)},style:{width:"100%"}}),r.a.createElement("div",{className:"meter",style:{width:Math.round(100*(t=Math.min(l.getLevel(),0),Math.pow(10,t/50)))+"%"}})),r.a.createElement("span",{className:"clipping",style:{opacity:l.getLevel()>0?1:0,transition:l.getLevel()>0?"none":"opacity 2s"}},"!"));var t}})}var k=a(6);a(27),a(28),a(7);function x(e){return r.a.createElement("div",{className:"track-part track-header",style:{height:e.data.trackHeight-0}},r.a.createElement("div",null,e.track.instrument.toString()),r.a.createElement(y,{source:e.track.instrument}),r.a.createElement("button",{className:"delete-track",onClick:function(){e.methods.removeTrack(e.index)}},"x"))}var w=a(11);a(29);function N(e){return m.a.Time(e).valueOf()*m.a.Transport.bpm.value/60}function j(e,t){return m.a.Time(m.a.Time(e).valueOf()+m.a.Time(t).valueOf()).toBarsBeatsSixteenths()}function T(e,t){return m.a.Time(m.a.Time(e).valueOf()-m.a.Time(t).valueOf()).toBarsBeatsSixteenths()}function O(e,t){return m.a.Time(e).valueOf()>m.a.Time(t).valueOf()?1:m.a.Time(e).valueOf()===m.a.Time(t).valueOf()?0:-1}function P(e){return r.a.createElement("div",{className:"region",style:{height:e.data.trackHeight-2*e.data.trackDisplayPadding,width:e.data.beatPixels*N(e.region.duration)}},r.a.createElement("div",{className:"region-wrapper",style:{width:e.data.beatPixels*N(e.region.duration)-1}},r.a.createElement("div",{className:"region-title"},"heyo"),r.a.createElement("svg",{preserveAspectRatio:"none",viewBox:"0 0 100 100",className:"region-svg",style:{width:"calc(100% + 1px)"}},function(e,t){var a=e.notes.map((function(e){return e.pitch})),n=Math.min.apply(Math,Object(w.a)(a)),o=Math.max.apply(Math,Object(w.a)(a)),i=[],c=100/N(e.duration);return e.notes.forEach((function(e,t){var a=N(e.position)*c,l=100-100*((e.pitch-n)/(o-n)*.6+.2),s=a+c*N(e.duration);i.push(r.a.createElement("line",{x1:a,y1:l,x2:s,y2:l,stroke:"black",strokeWidth:4,key:t}))})),r.a.createElement(r.a.Fragment,null,i)}(e.region,e.data))))}function S(e){return console.log(e.data.trackHeight),r.a.createElement("div",{className:"track-part track-display",style:{height:e.data.trackHeight-0,padding:e.data.trackDisplayPadding,width:N(e.data.projectMaxLength)*e.data.beatPixels}},e.track.regions.map((function(t,a){return r.a.createElement(P,{region:t,data:e.data,key:a})})))}a(30);function M(e){return r.a.createElement(g,{render:function(t){return r.a.createElement("div",{className:"playhead "+e.variant,style:{height:"top"===e.variant?11:e.data.tracks.length*e.data.trackHeight,width:"top"===e.variant?11:1,left:("top"===e.variant?Math.ceil(-5.5):0)+e.data.trackDisplayPadding+e.data.beatPixels*N(m.a.Transport.position)}})}})}a(31);function L(e){return r.a.createElement("div",{className:"end-screen",style:{height:"top"===e.variant?"100%":e.data.tracks.length*e.data.trackHeight,left:e.data.trackDisplayPadding+e.data.beatPixels*N(e.data.projectLength),width:e.data.trackDisplayPadding+e.data.beatPixels*N(T(e.data.projectMaxLength,e.data.projectLength))}})}a(32);function A(e){return r.a.createElement("div",{className:"loop-screen",style:{left:e.data.trackDisplayPadding+N(m.a.Transport.loopStart)*N(e.data.projectLength),width:e.data.beatPixels*N(T(m.a.Transport.loopEnd,m.a.Transport.loopStart))}})}function F(e){return r.a.createElement("div",{className:"track-part top",style:{padding:e.trackDisplayPadding,width:N(e.data.projectMaxLength)*e.data.beatPixels}},r.a.createElement("svg",{height:"100",width:N(e.data.projectMaxLength)*e.data.beatPixels},function(e){for(var t,a,o,i,c,l=[],s=m.a.Transport.timeSignature,u=0;u<N(e.projectMaxLength);u++)l.push((t=u*e.beatPixels,a=Math.floor(u/s),o=u%s,i=e.beatPixels,c=u,i<50?r.a.createElement(n.Fragment,{key:c},0===o?r.a.createElement("text",{x:t+4,y:"1em"},a):r.a.createElement(r.a.Fragment,null),r.a.createElement("rect",{x:t,y:0===o?"0":"1.5em",width:"1",height:"100",fill:"#e6e6e6"})):r.a.createElement(n.Fragment,{key:c},r.a.createElement("text",{x:t+4,y:"1em"},a,".",o),r.a.createElement("rect",{x:t,y:0===o?"0":"1.5em",width:"1",height:"100",fill:"#e6e6e6"}))));return r.a.createElement(r.a.Fragment,null,l)}(e.data)))}function C(e){var t=Object(n.useState)(120),a=Object(c.a)(t,2),o=a[0],i=a[1],l=Object.assign({},e.data,{trackDisplayPadding:8,trackHeight:o});return r.a.createElement(k.ScrollSync,null,r.a.createElement("div",{className:"master"},r.a.createElement("div",{className:"column left"},r.a.createElement("div",{className:"pane top left track-part top"},"header"),r.a.createElement(k.ScrollSyncPane,{group:["horizontal","vertical"]},r.a.createElement("div",{className:"pane bottom left hidden-scrollbar"},e.data.tracks.map((function(t,a){return r.a.createElement(x,{key:a,index:a,track:e.data.tracks[a],data:l,methods:e.methods})}))))),r.a.createElement("div",{className:"column right"},r.a.createElement(k.ScrollSyncPane,{group:["horizontal","vertical"]},r.a.createElement("div",{className:"pane top right hidden-scrollbar"},r.a.createElement("input",{type:"range",style:{position:"fixed",zIndex:17},min:"10",max:"310",step:"10",value:o,onChange:function(e){return i(e.target.value)}}),r.a.createElement(M,{variant:"top",data:l}),r.a.createElement(A,{data:l}),r.a.createElement(L,{variant:"top",data:l}),r.a.createElement(F,{data:l}))),r.a.createElement(k.ScrollSyncPane,{group:["horizontal","vertical"]},r.a.createElement("div",{className:"pane bottom right"},r.a.createElement(M,{variant:"bottom",data:l}),r.a.createElement(L,{variant:"bottom",data:l}),e.data.tracks.map((function(t,a){return r.a.createElement(S,{key:a,index:a,track:e.data.tracks[a],data:l,methods:e.methods})})))))))}var D=a(4),B=a(5);function H(){for(var e=[],t=0;t<30;t++)e.push({pitch:Math.floor(30*Math.random())+40,duration:"8n",position:"0:0:"+2*t});return{title:"melodyy",duration:"0:16:0",position:"0:0:0",notes:e}}function q(e){var t="0:0:0";return m.a.Transport.loop&&(t=m.a.Time(m.a.Transport.loopEnd).toBarsBeatsSixteenths()),e.forEach((function(e){e.regions.forEach((function(e){var a=j(e.position,e.duration);O(a,t)>0&&(t=a)}))})),"0:"+Math.ceil(N(t))+":0"}function W(e){var t="96:0:0";return O(q(e),t)>0&&(t=q(e)),t}m.a.Transport.setLoopPoints(0,"1m"),m.a.Transport.loop=!0;var z=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)(120),l=Object(c.a)(i,2),u=l[0],d=l[1],p=Object(n.useState)(0),h=Object(c.a)(p,2),E=h[0],f=h[1],g=Object(n.useState)(110),v=Object(c.a)(g,2),k=v[0],x=v[1],w=Object(n.useState)([{instrument:(new m.a.Synth).toMaster(),regions:[{title:"cde",position:"0:0:0",duration:"1:0:0",notes:[{pitch:60,duration:"8n",position:"0:0:0"},{pitch:62,duration:"8n",position:"0:1:0"},{pitch:64,duration:"8n",position:"0:2:0"}]}]}]),N=Object(c.a)(w,2),T=N[0],O=N[1];return Object(n.useEffect)((function(){a?m.a.Transport.start():m.a.Transport.pause(),m.a.Transport.bpm.value=u,m.a.Transport.cancel(),T.forEach((function(e){e.regions.forEach((function(t){t.notes.forEach((function(a){m.a.Transport.schedule((function(t){e.instrument.triggerAttackRelease(m.a.Frequency(a.pitch,"midi").toNote(),a.duration,t)}),j(a.position,t.position))}))}))}))})),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(s,null),r.a.createElement("div",{className:"App-menu-bar"},r.a.createElement("input",{id:"title",type:"text",placeholder:"Untitled Project"})),r.a.createElement("div",{className:"App-menu-bar"},r.a.createElement("button",{className:"menu-button",onClick:function(){O(T.concat({instrument:(new m.a.Synth).toMaster(),regions:[H()]}))}},r.a.createElement(D.a,{icon:B.c})," new beat"),r.a.createElement("button",{className:"menu-button",onClick:function(){m.a.Transport.pause(),m.a.Transport.position="0:0:0",a?m.a.Transport.start():m.a.Transport.pause()}},r.a.createElement(D.a,{icon:B.d})),r.a.createElement("button",{className:"menu-button",onClick:function(){"running"!==m.a.context.state&&m.a.context.resume(),o(!a)}},a?r.a.createElement(D.a,{icon:B.a}):r.a.createElement(D.a,{icon:B.b})),r.a.createElement("button",{className:"menu-button"},r.a.createElement(D.a,{icon:B.e})),r.a.createElement("button",{className:"menu-button"},r.a.createElement("label",null,"Tempo:")," ",r.a.createElement("input",{id:"tempo",type:"number",value:u,onChange:function(e){return d(e.target.value)}})),r.a.createElement("button",{className:"menu-button"},r.a.createElement("label",null,"Key:")," ",r.a.createElement("select",{id:"key",value:E,onChange:function(e){return f(e.target.value)}},r.a.createElement("option",null,"0"),r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5"),r.a.createElement("option",null,"6"),r.a.createElement("option",null,"7"),r.a.createElement("option",null,"8"),r.a.createElement("option",null,"9"),r.a.createElement("option",null,"10"),r.a.createElement("option",null,"11"))),r.a.createElement(b,null),r.a.createElement(y,{source:m.a.Master}),r.a.createElement("input",{type:"range",min:"10",max:"310",step:"50",value:k,onChange:function(e){return x(e.target.value)}}),k)),r.a.createElement(C,{data:{tracks:T,beatPixels:k,projectLength:q(T),projectMaxLength:W(T)},methods:{removeTrack:function(e){O(T.slice(0,e).concat(T.slice(e+1)))}}}),r.a.createElement("footer",{className:"App-menu-bar"},"fotoer"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[18,1,2]]]);
//# sourceMappingURL=main.a93cbd63.chunk.js.map