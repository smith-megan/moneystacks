(this["webpackJsonpmoney-stacks"]=this["webpackJsonpmoney-stacks"]||[]).push([[0],{10:function(e,t,a){e.exports=a.p+"static/media/moneystack.3297cfd4.jpg"},12:function(e,t,a){e.exports=a(17)},17:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a(2),r=a(4),l=a(3),i=a(0),c=a.n(i),u=a(8),s=a.n(u),m=(a(7),a(11)),d=a(5),p=a(9),g=a.n(p),f=a(10),E=a.n(f),b=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return console.log(this.props.celeb),!0===this.props.celeb?c.a.createElement("div",{id:"celebration"},c.a.createElement("div",{className:"red"}),c.a.createElement("div",{className:"blue"}),c.a.createElement("div",{className:"yellow"}),c.a.createElement("div",{className:"purple"}),c.a.createElement("div",{className:"green"}),c.a.createElement("div",{className:"pink"}),c.a.createElement("div",{className:"orange"}),c.a.createElement("div",{className:"sky"})):c.a.createElement("div",null)}}]),a}(c.a.Component),h=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).percentChange=function(){var e=parseFloat(o.state.goal),t=parseFloat(o.state.current)/e*100;o.setState({percentcomplete:t})},o.pleaseDoSomething=function(e){if(""!==o.state.date&&0!==o.state.amount){o.setState({history:[].concat(Object(m.a)(o.state.history),[[o.state.date+" ",o.state.amount]])});var t=0;return t+=parseFloat(o.state.current)+parseFloat(o.state.amount),o.setState({current:t}),o.setState({date:""}),o.setState({amount:0}),e.target.value="",void(o.state.goal<=0&&alert("no goal set!"))}return alert("set date and amount")},o.toggleAdditionOn=function(){o.setState({addition:!0})},o.toggleAdditionOff=function(){o.setState({addition:!1})},o.toggleSubtractionOn=function(){o.setState({subtraction:!0})},o.toggleSubtractionOff=function(){o.setState({subtraction:!1})},o.toggleGoalOff=function(){o.setState({goaltoggle:!1})},o.toggleGoalOn=function(){o.setState({goaltoggle:!0})},o.toggleHistoryOn=function(){o.setState({historytoggle:!0})},o.toggleHistoryOff=function(){o.setState({historytoggle:!1})},o.startGoalDisplay=function(){o.setState({goaltoggle:!1})},o.goalMet=function(){if(0!==o.state.goal&&o.state.goal<=o.state.current)return o.setState({celebration:!0}),null;o.state.goal>o.state.current&&o.setState({celebration:!1})},o.updateMyDate=function(e){o.setState({date:e.target.value})},o.updateMyAmount=function(e,t){o.setState({amount:e*t.target.value})},o.updateMyGoal=function(e){o.setState({goal:e.target.value})},o.appearAddition=function(){return!0===o.state.addition?c.a.createElement("div",{className:"additionpopup"},c.a.createElement("h2",null,"Update Your Cash"),c.a.createElement("form",{id:"additionform"},c.a.createElement("p",null,"Date"),c.a.createElement("input",{onChange:function(e){o.updateMyDate(e)},placeholder:"Aug. 13"}),c.a.createElement("p",null,"$ Amount to Add"),c.a.createElement("input",{onChange:function(e){o.updateMyAmount(1,e)},placeholder:"0.00"}),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("button",{type:"button",onClick:function(e){o.pleaseDoSomething(e),document.forms.additionform.reset()}},"+ Money Stack")),c.a.createElement("br",null),c.a.createElement("button",{id:"exitX",onClick:function(){o.toggleAdditionOff(),o.percentChange(),document.forms.additionform.reset(),o.goalMet()}},"Done")):null},o.appearSubtraction=function(){return!0===o.state.subtraction?c.a.createElement("div",{className:"additionpopup"},c.a.createElement("h2",null,"Update Your Cash"),c.a.createElement("form",{id:"additionform"},c.a.createElement("p",null,"Date"),c.a.createElement("input",{onChange:function(e){o.updateMyDate(e)},placeholder:"Aug. 13"}),c.a.createElement("p",null,"$ Amount to Subtract"),c.a.createElement("input",{onChange:function(e){o.updateMyAmount(-1,e)},placeholder:"0.00"}),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("button",{type:"button",onClick:function(e){o.pleaseDoSomething(e),document.forms.additionform.reset()}},"+ Money Stack")),c.a.createElement("br",null),c.a.createElement("button",{id:"exitX",onClick:function(){o.toggleSubtractionOff(),o.percentChange(),document.forms.additionform.reset(),o.goalMet()}},"Done")):null},o.appearHistory=function(){return!0===o.state.historytoggle?c.a.createElement("div",{className:"additionpopup"},c.a.createElement("h2",null,"History"),o.state.history.map((function(e,t){return c.a.createElement("p",{key:t},e)})),c.a.createElement("button",{id:"exitY",onClick:function(){o.toggleHistoryOff()}},"Done")):null},o.appearGoal=function(){return!0===o.state.goaltoggle?c.a.createElement("div",{id:"setgoal"},c.a.createElement("p",null,"$ ",c.a.createElement("input",{id:"goalamountbox",placeholder:"Goal Amount",onChange:function(e){o.updateMyGoal(e)}}),c.a.createElement("button",{onClick:function(){o.startGoalDisplay(),o.percentChange()}},"set"))):c.a.createElement("p",{id:"thegoalnumber"},"$",o.state.goal)},o.state={goal:0,current:0,percentcomplete:0,history:[],celebration:!1,addition:!1,subtraction:!1,goaltoggle:!0,historytoggle:!1,date:"",amount:0},o.percentChange=o.percentChange.bind(Object(d.a)(o)),o}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",{id:"main"},c.a.createElement("div",{id:"title"},c.a.createElement("img",{id:"goalBanner",src:g.a,alt:"Goal banner"})),c.a.createElement("div",{id:"goalnumber"},this.appearGoal()),c.a.createElement("div",{id:"percentEmpty"},c.a.createElement("div",{id:"percentComplete",style:{height:this.state.percentcomplete+"%"}},c.a.createElement("img",{id:"cashstack",src:E.a,alt:"cash stack"}))),c.a.createElement("div",{id:"white"},c.a.createElement("p",{id:"currentstate"},"Current Amount: $",this.state.current),c.a.createElement("div",{id:"history"},c.a.createElement("button",{type:"button",onClick:function(){e.toggleHistoryOn()}},"History"))),c.a.createElement("div",{id:"buttons"},c.a.createElement("button",{id:"add",onClick:function(){e.toggleAdditionOn()}}," + "),c.a.createElement("button",{id:"sub",onClick:function(){e.toggleSubtractionOn()}}," - ")),this.appearAddition(),this.appearHistory(),this.appearSubtraction()),c.a.createElement(b,{celeb:this.state.celebration}))}}]),a}(c.a.Component),y=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",{id:"apptitle"},"Money Stacks"),c.a.createElement(h,null))}}]),a}(i.Component);s.a.render(c.a.createElement(y,null),document.getElementById("root"))},7:function(e,t,a){},9:function(e,t,a){e.exports=a.p+"static/media/banner.b05a4b37.png"}},[[12,1,2]]]);
//# sourceMappingURL=main.c3f94d43.chunk.js.map