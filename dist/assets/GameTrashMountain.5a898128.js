import{_ as g,o as r,c as n,f as m,a as s,t as l,n as b,l as d,b as u,k as p,i as h,p as f,d as y,m as v}from"./index.edcd9521.js";import{G as $}from"./GoBack.7a9a6666.js";const k="/assets/recycling-bins/organic-bin.svg",T="/assets/recycling-bins/glass-bin.svg",G="/assets/recycling-bins/metal-bin.svg",C="/assets/recycling-bins/paper-bin.svg",I="/assets/recycling-bins/e-waste-bin.svg",N="/assets/recycling-bins/plastic-bin.svg";const M={name:"GameRecycleBin",components:{},methods:{onDrop(e){e===this.currentGarbage.garbageCategory?this.isRight=!0:(this.isWrong=!0,this.$emit("wrong-drop")),setTimeout(()=>{this.isRight=!1,this.isWrong=!1},1e3),this.$emit("next-garbage")}},computed:{},props:{binType:String,currentGarbage:Object},data(){return{isDrag:!1,isWrong:!1,isRight:!1}}},x={key:0,src:k,alt:"organic-bin",draggable:"false"},L={key:1,src:T,alt:"glass-bin",draggable:"false"},S={key:2,src:G,alt:"metal-bin",draggable:"false"},B={key:3,src:C,alt:"paper-bin",draggable:"false"},R={key:4,src:I,alt:"e-waste-bin",draggable:"false"},w={key:5,src:N,alt:"plastic-bin",draggable:"false"};function D(e,i,a,c,t,o){return r(),n("div",{class:b(["recycleBin__container",[t.isDrag?"dragEnter":"",t.isRight?"isRight":"",t.isWrong?"isWrong":""]]),onDrop:i[0]||(i[0]=_=>o.onDrop(a.binType)),onDragover:i[1]||(i[1]=d(()=>{},["prevent"]))},[a.binType=="organics"?(r(),n("img",x)):a.binType=="glass"?(r(),n("img",L)):a.binType=="metal"?(r(),n("img",S)):a.binType=="paper"?(r(),n("img",B)):a.binType=="e-waste"?(r(),n("img",R)):a.binType=="plastic"?(r(),n("img",w)):m("",!0),s("p",null,l(a.binType.toUpperCase()),1)],34)}const re=g(M,[["render",D],["__scopeId","data-v-2bd4d2bb"]]);const U={name:"GameGarbage",methods:{getRandomGarbage(){this.selectedGarbage=this.garbages[Math.floor(Math.random()*this.garbages.length)],this.garbageUrl=`/assets/garbages/trash-${this.selectedGarbage.garbageName}.svg`,this.setCurrentGarbage(this.selectedGarbage)}},computed:{},props:{setCurrentGarbage:Function},beforeMount(){this.getRandomGarbage()},data(){return{selectedGarbage:{},garbageUrl:"",garbages:[{garbageName:"apple",garbageCategory:"organics"},{garbageName:"apple-bitten",garbageCategory:"organics"},{garbageName:"avocado",garbageCategory:"organics"},{garbageName:"pizza",garbageCategory:"organicx"},{garbageName:"broken-glass",garbageCategory:"glass"},{garbageName:"broken-bottle",garbageCategory:"glass"},{garbageName:"glass",garbageCategory:"glass"},{garbageName:"can",garbageCategory:"metal"},{garbageName:"fork",garbageCategory:"metal"},{garbageName:"frying-pan",garbageCategory:"metal"},{garbageName:"cardbox",garbageCategory:"paper"},{garbageName:"airplane",garbageCategory:"paper"},{garbageName:"newspaper",garbageCategory:"paper"},{garbageName:"mouse",garbageCategory:"e-waste"},{garbageName:"hairdryer",garbageCategory:"e-waste"},{garbageName:"computer",garbageCategory:"e-waste"},{garbageName:"bag",garbageCategory:"plastic"},{garbageName:"bottle",garbageCategory:"plastic"},{garbageName:"cup",garbageCategory:"plastic"}]}}},V={class:"garbage__container"},E=["src"],F={class:"garbage__name"};function W(e,i,a,c,t,o){return r(),n("div",V,[s("img",{src:t.garbageUrl,alt:"trash",draggable:"true"},null,8,E),s("span",F,l(t.selectedGarbage.garbageName),1)])}const ne=g(U,[["render",W],["__scopeId","data-v-a44426b9"]]);const A={props:["currentScore","livesLeft"],components:{GoBack:$}},z={class:"scoreContainer"};function H(e,i,a,c,t,o){const _=h("GoBack");return r(),n("div",null,[s("div",z,[u(_,{isGame:!0}),s("div",null,[s("span",null,"Lives: "+l(a.livesLeft),1),p(" \xA0\xA0 "),s("span",null,"Score: "+l(a.currentScore),1)])])])}const ie=g(A,[["render",H],["__scopeId","data-v-351dfb24"]]);const P={name:"BackgroundGame",props:["numWrong"],data(){return{backgrounds:["Game-Skyscape.svg","Game-Skyscape_orange.svg","Game-Skyscape_dark.svg"],backgroundUrl:""}},methods:{changeBack(e){e<=3?this.backgroundUrl=`/assets/backgrounds/${this.backgrounds[0]}`:3<e<7&&(this.backgroundUrl=`/assets/backgrounds/${this.backgrounds[1]}`),e>=7&&(this.backgroundUrl=`/assets/backgrounds/${this.backgrounds[2]}`)}},beforeMount(){this.backgroundUrl=`/assets/backgrounds/${this.backgrounds[0]}`}},Y=["src"];function j(e,i,a,c,t,o){return r(),n("div",null,[s("img",{src:t.backgroundUrl,alt:"cartoon trees"},null,8,Y)])}const oe=g(P,[["render",j],["__scopeId","data-v-52ff5c3a"]]);const O={props:{finalScore:Number},data(){return{TIME_LIMIT:60,timePassed:0,timeLeft:60,timerInterval:null,FULL_DASH_ARRAY:283}},methods:{clearTimer(){clearInterval(this.timerInterval),this.timeLeft=60},formatTimeLeft(e){const i=Math.floor(e/60);let a=e%60;return a<10&&(a=`0${a}`),`${i}:${a}`},calculateTimeFraction(){const e=this.timeLeft/this.TIME_LIMIT;return e-1/this.TIME_LIMIT*(1-e)},setCircleDasharray(){const e=`${(this.calculateTimeFraction()*this.FULL_DASH_ARRAY).toFixed(0)} 283`;document.getElementById("base-timer-path-remaining").setAttribute("stroke-dasharray",e)},startTimer(){this.timerInterval=setInterval(()=>{if(this.timeLeft<1)return this.$router.push(`/result/${this.finalScore}`),this.clearTimer();this.timePassed=this.timePassed+=1,this.timeLeft=this.TIME_LIMIT-this.timePassed,document.getElementById("base-timer-label").innerHTML=this.formatTimeLeft(this.timeLeft),this.setCircleDasharray()},1e3)}},beforeMount(){this.startTimer()},unMount(){}},q=e=>(f("data-v-da5c0fcd"),e=e(),y(),e),J={class:"base-timer"},K=q(()=>s("svg",{class:"base-timer__svg",viewBox:"0 0 100 100"},[s("g",{class:"base-timer__circle"},[s("circle",{class:"base-timer__path-elapsed",cx:"50",cy:"50",r:"45"}),s("path",{id:"base-timer-path-remaining","stroke-dasharray":"283",class:"base-timer__path-remaining",d:`
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        `})])],-1)),Q={id:"base-timer-label",class:"base-timer__label"};function X(e,i,a,c,t,o){return r(),n("div",null,[s("div",J,[K,s("span",Q,l(o.formatTimeLeft(t.timeLeft)),1)])])}const ge=g(O,[["render",X],["__scopeId","data-v-da5c0fcd"]]),Z="/assets/garbages/trash-mountain.svg";const ee={name:"GameTrashMountain",components:{},methods:{moveMountainY(){this.counter<9?(this.counter++,this.translateRem=this.translateRem-1.3,this.$emit("wrongItems",this.counter),this.setWrongNums(this.counter)):this.$router.push(`/result/${this.finalScore}`)}},computed:{},props:{setWrongNums:Function,finalScore:Number},data(){return{translateRem:0,counter:0}}};function ae(e,i,a,c,t,o){return r(),n("div",null,[s("img",{draggable:"false",class:"trashMountain__svg",style:v({transform:`translateY(${t.translateRem}rem)`}),src:Z,alt:"trash-mountain"},null,4)])}const ce=g(ee,[["render",ae],["__scopeId","data-v-d70cbc7b"]]);export{oe as B,ne as G,ie as S,ge as T,re as a,ce as b};