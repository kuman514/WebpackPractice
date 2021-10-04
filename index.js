(()=>{"use strict";class t{constructor(t,e){this.props=t,this.state=e,this.rootElement=null,this.render=()=>this.rootElement,this.setState=t=>{for(const[e,n]of Object.entries(t))this.state[e]=n;this.render()}}}const e=new Set,n=t=>{e.add(t)},s=t=>{clearInterval(t),e.delete(t)},o=()=>{e.forEach((t=>{clearInterval(t)})),e.clear()};class r extends t{constructor(t,e){super(t,e),this.intervalId=setInterval((()=>{this.setState({date:new Date})}),1e3),n(this.intervalId),this.rootElement=document.createElement("div"),this.rootElement.className="clock",this.render=()=>(this.rootElement.textContent=this.state.date,this.rootElement)}}class i extends t{constructor(t,e){super(t,e),this.rootElement=document.createElement("div"),this.rootElement.className="stopwatch-control",this.rootElement.addEventListener("click",(t=>{switch(t.target.id){case"stopwatch-start":this.props.onStart();break;case"stopwatch-stop":this.props.onStop();break;case"stopwatch-reset":this.props.onReset()}})),this.render=()=>{if(this.rootElement.innerText="",this.state.isRunning){const t=document.createElement("button");t.id="stopwatch-stop",t.textContent="Stop",this.rootElement.appendChild(t)}else{const t=document.createElement("button");t.id="stopwatch-start",t.textContent="Start";const e=document.createElement("button");e.id="stopwatch-reset",e.textContent="Reset",this.rootElement.appendChild(t),this.rootElement.appendChild(e)}return this.rootElement}}}const a=36e5;class h extends t{constructor(t,e){super(t,e),this.rootElement=document.createElement("div"),this.rootElement.className="stopwatch-timestamp",this.render=()=>{let t=this.state.elapsed;const e=String(Math.floor(t/a)).padStart(2,"0");t%=a;const n=String(Math.floor(t/6e4)).padStart(2,"0");t%=6e4;const s=String(Math.floor(t/1e3)).padStart(2,"0");t%=1e3;const o=String(Math.floor(t/10)).padStart(2,"0");return this.rootElement.textContent=`${e}:${n}:${s}.${o}`,this.rootElement}}}class l extends t{constructor(t,e){super(t,e),this.stopwatchInterval=null,this.deltaOrg=null,this.timestamp=new h({},{elapsed:0}),this.startStopwatch=()=>{this.deltaOrg=Date.now(),this.stopwatchInterval=setInterval((()=>{const t=Date.now()-this.deltaOrg,e=this.timestamp.state.elapsed+t;this.timestamp.setState({elapsed:e}),this.deltaOrg=Date.now()}),10),n(this.stopwatchInterval),this.controller.setState({isRunning:!0})},this.stopStopwatch=()=>{this.stopwatchInterval&&(s(this.stopwatchInterval),this.stopwatchInterval=null,this.controller.setState({isRunning:!1}))},this.resetStopwatch=()=>{this.stopStopwatch(),this.timestamp.setState({elapsed:0})},this.controller=new i({onStart:this.startStopwatch,onStop:this.stopStopwatch,onReset:this.resetStopwatch},{isRunning:!1}),this.rootElement=document.createElement("div"),this.rootElement.className="stopwatch",this.render=()=>(this.rootElement.appendChild(this.controller.render()),this.rootElement.appendChild(this.timestamp.render()),this.rootElement)}}class c extends t{constructor(t,e){super(t,e),this.rootElement=document.createElement("div"),this.rootElement.className="countdown-control",this.rootElement.addEventListener("click",(t=>{switch(t.target.id){case"countdown-start":this.props.onStart();break;case"countdown-stop":this.props.onStop();break;case"countdown-reset":this.props.onReset()}})),this.render=()=>{if(this.rootElement.innerText="",this.state.isRunning){const t=document.createElement("button");t.id="countdown-stop",t.textContent="Stop",this.rootElement.appendChild(t)}else{const t=document.createElement("button");t.id="countdown-start",t.textContent="Start";const e=document.createElement("button");e.id="countdown-reset",e.textContent="Reset",this.rootElement.appendChild(t),this.rootElement.appendChild(e)}return this.rootElement}}}const d=36e5;class m extends t{constructor(t,e){super(t,e),this.rootElement=document.createElement("div"),this.rootElement.className="countdown-timestamp",this.render=()=>{let t=this.state.remaining;const e=String(Math.floor(t/d)).padStart(2,"0");t%=d;const n=String(Math.floor(t/6e4)).padStart(2,"0");t%=6e4;const s=String(Math.floor(t/1e3)).padStart(2,"0");return t%=1e3,String(Math.floor(t/10)).padStart(2,"0"),this.rootElement.textContent=`${e}:${n}:${s}`,this.rootElement}}}class p extends t{constructor(t,e){super(t,e),this.hourSetter=document.createElement("input"),this.hourSetter.type="number",this.hourSetter.value="0",this.hourSetter.min="0",this.hourSetter.max="99",this.minuteSetter=document.createElement("input"),this.minuteSetter.type="number",this.minuteSetter.value="0",this.minuteSetter.min="0",this.minuteSetter.max="59",this.secondSetter=document.createElement("input"),this.secondSetter.type="number",this.secondSetter.value="0",this.secondSetter.min="0",this.secondSetter.max="59",this.getTotalMs=()=>{let t=0;return t+=36e5*this.hourSetter.value,t+=6e4*this.minuteSetter.value,t+=1e3*this.secondSetter.value,t},this.rootElement=document.createElement("div"),this.rootElement.className="countdown-timeamount",this.rootElement.addEventListener("change",(()=>{this.props.onChange()})),this.render=()=>(this.rootElement.appendChild(this.hourSetter),this.rootElement.appendChild(this.minuteSetter),this.rootElement.appendChild(this.secondSetter),this.rootElement)}}class u extends t{constructor(t,e){super(t,e),this.countdownInterval=null,this.deltaOrg=null,this.timestamp=new m({},{remaining:0}),this.startCountdown=()=>{this.deltaOrg=Date.now(),this.countdownInterval=setInterval((()=>{const t=Date.now()-this.deltaOrg,e=this.timestamp.state.remaining-t;this.timestamp.setState({remaining:e>0?e:0}),this.deltaOrg=Date.now(),this.timestamp.state.remaining<=0&&this.stopCountdown()}),10),n(this.countdownInterval),this.controller.setState({isRunning:!0})},this.stopCountdown=()=>{this.countdownInterval&&(s(this.countdownInterval),this.countdownInterval=null,this.controller.setState({isRunning:!1}))},this.resetCountdown=()=>{this.stopCountdown(),this.timestamp.setState({remaining:this.timeAmount.getTotalMs()})},this.controller=new c({onStart:this.startCountdown,onStop:this.stopCountdown,onReset:this.resetCountdown},{isRunning:!1}),this.changeTimeAmount=()=>{this.stopCountdown(),this.timestamp.setState({remaining:this.timeAmount.getTotalMs()})},this.timeAmount=new p({onChange:this.changeTimeAmount},{}),this.rootElement=document.createElement("div"),this.rootElement.className="countdown",this.render=()=>(this.rootElement.appendChild(this.timeAmount.render()),this.rootElement.appendChild(this.controller.render()),this.rootElement.appendChild(this.timestamp.render()),this.rootElement)}}class E extends t{constructor(t,e){super(t,e),this.rootElement=document.createElement("div"),this.rootElement.className="content",this.render=()=>{switch(this.rootElement.innerText="",o(),this.state.mode){case"clock":this.rootElement.appendChild(new r({},{date:new Date}).render());break;case"stopwatch":this.rootElement.appendChild(new l({},{}).render());break;case"countdown":this.rootElement.appendChild(new u({},{}).render())}return this.rootElement}}}class w extends t{constructor(t,e){super(t,e),this.rootElement=document.createElement("div"),this.rootElement.className="buttons",this.rootElement.addEventListener("click",(t=>{const e=parseInt(t.target.id);null!=e&&this.props.onClick(this.props.modes[e])})),this.render=()=>(Array.from({length:this.props.modes.length},((t,e)=>{const n=document.createElement("button");return n.id=e,n.textContent=this.props.modes[e],n})).forEach((t=>{this.rootElement.appendChild(t)})),this.rootElement)}}new class extends t{constructor(t,e){super(t,e),this.content=new E({},{mode:"clock"}),this.changeMode=t=>{this.content.setState({mode:t})},this.buttons=new w({modes:["clock","stopwatch","countdown"],onClick:this.changeMode},{}),this.rootElement=document.querySelector("main"),this.rootElement.className="main",this.render=()=>(this.rootElement.appendChild(this.buttons.render()),this.rootElement.appendChild(this.content.render()),this.rootElement)}}({},{}).render()})();