(this["webpackJsonpmoney-stacks"]=this["webpackJsonpmoney-stacks"]||[]).push([[0],{10:function(t,e,a){t.exports=a.p+"static/media/moneystack.3297cfd4.jpg"},12:function(t,e,a){t.exports=a(17)},17:function(t,e,a){"use strict";a.r(e);var n=a(1),o=a(2),r=a(4),l=a(3),c=a(0),i=a.n(c),u=a(8),s=a.n(u),p=(a(5),a(11)),d=a(6),m=a(9),g=a.n(m),f=a(10),h=a.n(f),b=function(t){Object(r.a)(a,t);var e=Object(l.a)(a);function a(){return Object(n.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return!0===this.props.celeb?i.a.createElement("div",{id:"celebration"},i.a.createElement("div",{className:"red"}),i.a.createElement("div",{className:"blue"}),i.a.createElement("div",{className:"yellow"}),i.a.createElement("div",{className:"purple"}),i.a.createElement("div",{className:"green"}),i.a.createElement("div",{className:"pink"}),i.a.createElement("div",{className:"orange"}),i.a.createElement("div",{className:"sky"})):i.a.createElement("div",null)}}]),a}(i.a.Component),E=function(t){Object(r.a)(a,t);var e=Object(l.a)(a);function a(){return Object(n.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var t=this;return!0===this.props.addition?i.a.createElement("div",{className:"additionpopup"},i.a.createElement("h2",null,"Update Your Cash"),i.a.createElement("form",{id:"additionform"},i.a.createElement("p",null,"Date"),i.a.createElement("input",{onChange:function(e){t.props.updateDate(e)},placeholder:"Aug. 13"}),i.a.createElement("p",null,"$ Amount to Add"),i.a.createElement("input",{onChange:function(e){t.props.updateAmount(1,e)},placeholder:"0.00"}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("button",{type:"button",onClick:function(e){t.props.captureData(e),document.forms.additionform.reset()}},"+ Money Stack")),i.a.createElement("br",null),i.a.createElement("button",{id:"exitX",onClick:function(){t.props.toggleAdditionOff(),t.props.percentChange(),document.forms.additionform.reset(),t.props.goalMet()}},"Done")):null}}]),a}(i.a.Component),y=function(t){Object(r.a)(a,t);var e=Object(l.a)(a);function a(){return Object(n.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var t=this;return!0===this.props.subtraction?i.a.createElement("div",{className:"additionpopup"},i.a.createElement("h2",null,"Update Your Cash"),i.a.createElement("form",{id:"subtractionform"},i.a.createElement("p",null,"Date"),i.a.createElement("input",{onChange:function(e){t.props.updateDate(e)},placeholder:"Aug. 13"}),i.a.createElement("p",null,"$ Amount to Add"),i.a.createElement("input",{onChange:function(e){t.props.updateAmount(1,e)},placeholder:"0.00"}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("button",{type:"button",onClick:function(e){t.props.captureData(e),document.forms.subtractionform.reset()}},"+ Money Stack")),i.a.createElement("br",null),i.a.createElement("button",{id:"exitX",onClick:function(){t.props.toggleAdditionOff(),t.props.percentChange(),document.forms.subtractionform.reset(),t.props.goalMet()}},"Done")):null}}]),a}(i.a.Component),v=function(t){Object(r.a)(a,t);var e=Object(l.a)(a);function a(t){var o;return Object(n.a)(this,a),(o=e.call(this,t)).percentChange=function(){var t=parseFloat(o.state.goal),e=parseFloat(o.state.current)/t*100;o.setState({percentcomplete:e})},o.captureData=function(t){if(""!==o.state.date&&0!==o.state.amount){o.setState({history:[].concat(Object(p.a)(o.state.history),[[o.state.date+" ",o.state.amount]])});var e=0;return e+=parseFloat(o.state.current)+parseFloat(o.state.amount),o.setState({current:e}),o.setState({date:""}),o.setState({amount:0}),t.target.value="",void(o.state.goal<=0&&alert("no goal set!"))}return alert("set date and amount")},o.toggleAdditionOn=function(){o.setState({addition:!0}),o.setState({subtraction:!1})},o.toggleAdditionOff=function(){o.setState({addition:!1})},o.toggleSubtractionOn=function(){o.setState({subtraction:!0}),o.setState({addition:!1})},o.toggleSubtractionOff=function(){o.setState({subtraction:!1})},o.toggleGoalOff=function(){o.setState({goaltoggle:!1})},o.toggleGoalOn=function(){o.setState({goaltoggle:!0})},o.toggleHistoryOn=function(){o.setState({historytoggle:!0})},o.toggleHistoryOff=function(){o.setState({historytoggle:!1})},o.startGoalDisplay=function(){o.setState({goaltoggle:!1})},o.goalMet=function(){if(0!==o.state.goal&&o.state.goal<=o.state.current)return o.setState({celebration:!0}),null;o.state.goal>o.state.current&&o.setState({celebration:!1})},o.updateMyDate=function(t){o.setState({date:t.target.value})},o.updateMyAmount=function(t,e){o.setState({amount:t*e.target.value})},o.updateMyGoal=function(t){o.setState({goal:t.target.value})},o.appearSubtraction=function(){return!0===o.state.subtraction?i.a.createElement("div",{className:"additionpopup"},i.a.createElement("h2",null,"Update Your Cash"),i.a.createElement("form",{id:"additionform"},i.a.createElement("p",null,"Date"),i.a.createElement("input",{onChange:function(t){o.updateMyDate(t)},placeholder:"Aug. 13"}),i.a.createElement("p",null,"$ Amount to Subtract"),i.a.createElement("input",{onChange:function(t){o.updateMyAmount(-1,t)},placeholder:"0.00"}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("button",{type:"button",onClick:function(t){o.captureData(t),document.forms.additionform.reset()}},"+ Money Stack")),i.a.createElement("br",null),i.a.createElement("button",{id:"exitX",onClick:function(){o.toggleSubtractionOff(),o.percentChange(),document.forms.additionform.reset(),o.goalMet()}},"Done")):null},o.appearHistory=function(){return!0===o.state.historytoggle?i.a.createElement("div",{className:"additionpopup"},i.a.createElement("h2",null,"History"),o.state.history.map((function(t,e){return i.a.createElement("p",{key:e},t)})),i.a.createElement("button",{id:"exitY",onClick:function(){o.toggleHistoryOff()}},"Done")):null},o.appearGoal=function(){return!0===o.state.goaltoggle?i.a.createElement("div",{id:"setgoal"},i.a.createElement("p",null,"$ ","   ",i.a.createElement("input",{id:"goalamountbox",placeholder:"Goal Amount",onChange:function(t){o.updateMyGoal(t)}})),i.a.createElement("button",{id:"set",onClick:function(){o.startGoalDisplay(),o.percentChange()}},"set")):i.a.createElement("p",{id:"thegoalnumber"},"$",o.state.goal)},o.state={goal:0,current:0,percentcomplete:0,history:[],celebration:!1,addition:!1,subtraction:!1,goaltoggle:!0,historytoggle:!1,date:"",amount:0},o.percentChange=o.percentChange.bind(Object(d.a)(o)),o}return Object(o.a)(a,[{key:"render",value:function(){var t=this;return i.a.createElement("div",null,i.a.createElement("div",{id:"main"},i.a.createElement("div",{id:"title"},i.a.createElement("img",{id:"goalBanner",src:g.a,alt:"Goal banner"})),i.a.createElement("div",{id:"goalnumber"},this.appearGoal()),i.a.createElement("div",{id:"percentEmpty"},i.a.createElement("div",{id:"percentComplete",style:{height:this.state.percentcomplete+"%"}},i.a.createElement("img",{id:"cashstack",src:h.a,alt:"cash stack"}))),i.a.createElement("div",{id:"white"},i.a.createElement("p",{id:"currentstate"},"Current Amount: $",this.state.current),i.a.createElement("div",{id:"history"},i.a.createElement("button",{type:"button",onClick:function(){t.toggleHistoryOn()}},"History"))),i.a.createElement("div",{id:"buttons"},i.a.createElement("button",{id:"add",onClick:function(){t.toggleAdditionOn()}}," + "),i.a.createElement("button",{id:"sub",onClick:function(){t.toggleSubtractionOn()}}," - ")),i.a.createElement(E,{addition:this.state.addition,updateMyAmount:this.updateMyAmount,updateMyDate:this.updateMyDate,captureData:this.captureData,toggleAdditionOff:this.toggleAdditionOff,percentChange:this.percentChange,goalMet:this.goalMet}),i.a.createElement(y,{subtraction:this.state.subtraction,updateMyAmount:this.updateMyAmount,updateMyDate:this.updateMyDate,captureData:this.captureData,toggleSubtractionOff:this.toggleSubtractionOff,percentChange:this.percentChange,goalMet:this.goalMet}),this.appearHistory()),i.a.createElement(b,{celeb:this.state.celebration,updateAmount:this.updateMyAmount}))}}]),a}(i.a.Component),O=function(t){Object(r.a)(a,t);var e=Object(l.a)(a);function a(){return Object(n.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",{id:"apptitle"},"Money Stacks"),i.a.createElement(v,null))}}]),a}(c.Component);s.a.render(i.a.createElement(O,null),document.getElementById("root"))},5:function(t,e,a){},9:function(t,e,a){t.exports=a.p+"static/media/banner.b05a4b37.png"}},[[12,1,2]]]);
//# sourceMappingURL=main.7eb2236b.chunk.js.map