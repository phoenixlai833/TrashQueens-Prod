import{S as b,T as _,b as f,G as y,B as G,a as v}from"./GameTrashMountain.5a898128.js";import{_ as g,o as s,c as o,a as t,t as N,f as B,p as l,d as u,b as r,F as c,j as w,g as k}from"./index.edcd9521.js";import"./GoBack.7a9a6666.js";/* empty css                                                               */const S="/assets/idea.png",C={name:"Hint",methods:{},computed:{hintBoxNote:function(){const[a]=this.listOfNotes.filter(e=>e.category===this.garbageCategory);return a.hintNote}},props:{garbageName:String,garbageCategory:String},data(){return{listOfNotes:[{category:"organics",hintNote:"This is the purest form of recycling, because nature does 100% of the work for us! "},{category:"glass",hintNote:"We can take them and purpose them without any loss in quality."},{category:"metal",hintNote:"No pun intended, but some can be used to create new road signs and window frames"},{category:"paper",hintNote:"They can be recycled into a whole bunch of new things, including new boxes, paper towels!"},{category:"e-waste",hintNote:"They are a treasure trove of recyclable material!"},{category:"plastic",hintNote:"They can be recycled into ropes, packaging, chairs, brush bristles and even car bumpers!"}],showHintBox:!1}}},h=a=>(l("data-v-95eed5b9"),a=a(),u(),a),W={class:"hintParent"},T={key:0,class:"hintBox hintChild"},$=h(()=>t("h2",null,"x",-1)),V=[$],x=h(()=>t("img",{src:S,alt:"hint"},null,-1)),H=[x];function I(a,e,d,i,n,m){return s(),o("div",W,[n.showHintBox?(s(),o("div",T,[t("h3",null,N(m.hintBoxNote),1),t("div",{class:"hintX hintChild",onClick:e[0]||(e[0]=p=>n.showHintBox=!1)},V)])):B("",!0),t("div",{class:"hintButton hintChild",onClick:e[1]||(e[1]=p=>n.showHintBox=!n.showHintBox)},H)])}const D=g(C,[["render",I],["__scopeId","data-v-95eed5b9"]]);const M=a=>(l("data-v-afe43933"),a=a(),u(),a),E=M(()=>t("div",{class:"blueBack"},[t("div",{class:"pattern"})],-1)),L={class:"gameContainer"},O={class:"skyArea"},j={class:"grassArea"},P={class:"recycleBins__grid"},R={name:"gameplay-Easy",methods:{setCurrentGarbage(a){this.currentGarbage=a},nextGarbage(){this.$refs.gameGarbage.getRandomGarbage(),this.rounds++},wrongDrop(){this.$refs.gameTrashMountain.moveMountainY(),this.$refs.backgroundGame.changeBack(this.numWrong)},setWrongNums(a){this.numWrong=a,console.log("this is in the gameplay",this.numWrong)}},computed:{score(){return this.rounds-this.numWrong},lives(){return 9-this.numWrong}},props:{},data(){return{currentGarbage:{},recycleBins:["organics","glass","metal","paper","e-waste","plastic"],numWrong:0,rounds:0}},beforeRouteLeave(a,e){this.$refs.timerVue.clearTimer()}},A=Object.assign(R,{setup(a){return(e,d)=>(s(),o(c,null,[r(b,{currentScore:e.score,livesLeft:e.lives,class:"topScore"},null,8,["currentScore","livesLeft"]),E,t("div",L,[t("div",O,[r(G,{ref:"backgroundGame"},null,512),r(_,{class:"timer",finalScore:e.score,ref:"timerVue"},null,8,["finalScore"])]),r(f,{class:"trashMountain",ref:"gameTrashMountain",setWrongNums:e.setWrongNums,finalScore:e.score},null,8,["setWrongNums","finalScore"]),t("div",j,[t("div",P,[(s(!0),o(c,null,w(e.recycleBins,i=>(s(),k(v,{binType:i,key:i,currentGarbage:e.currentGarbage,onNextGarbage:e.nextGarbage,onWrongDrop:e.wrongDrop},null,8,["binType","currentGarbage","onNextGarbage","onWrongDrop"]))),128))]),r(y,{setCurrentGarbage:e.setCurrentGarbage,ref:"gameGarbage",class:"garbage"},null,8,["setCurrentGarbage"]),r(D,{"garbage-name":e.currentGarbage.garbageName,"garbage-category":e.currentGarbage.garbageCategory,class:"hint"},null,8,["garbage-name","garbage-category"])])])],64))}}),z=g(A,[["__scopeId","data-v-afe43933"]]);export{z as default};