webpackJsonp([0],[,,,,,,,function(e,t,n){"use strict";function s(e){return{token:d.token,answers:e}}function i(e){d.token=e.token}function a(e){var t=[];return o(e,t),{questionnaire:e,questions:t}}function o(e,t){var n=0;e.forEach(function(e){n=r(e.questions,n,t)})}function r(e,t,n){return e.forEach(function(e){Array.isArray(e.matrix)?(Array.isArray(e.headers)||(e.headers=["Nunca","Raramente","Algumas vezes","Muitas vezes","Todo tempo","Não se aplica"]),n.push("--- "+e.question),e.matrix.forEach(function(e){n.push(t+1+" - "+e.item),e.id=t++,e.pending=!0}),n.push("---")):e.multiple?(n.push("--- "+e.question),e.options.forEach(function(e){n.push(t+1+" - "+e.item),e.id=t++}),n.push("---")):(n.push(t+1+" - "+e.question),e.id=t++,e.pending=!0,Array.isArray(e.options)&&e.options.forEach(function(s){s.textbox&&(n.push(t+1+" - "+e.question+" - "+s.item),s.id=t++,s.pending=!0),Array.isArray(s.subquestions)&&(t=r(s.subquestions,t,n))}))}),t}function u(e){var t=0,n=void 0,s=void 0;if(0===e.length)return t;for(n=0;n<e.length;n++)s=e.charCodeAt(n),t=(t<<5)-t+s,t|=0;return(t+2147483647+1).toString(36)}var c=document.getElementById("parameters").text,d=JSON.parse(c),l=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];t.a={prepareQuestionnaire:a,hashCode:u,getStorageItem:s,loadStorageItem:i,MONTHS:l,PARAMETERS:d}},,,,,,,,,function(e,t,n){"use strict";var s=n(9),i=n(89),a=n(71),o=n.n(a);s.a.use(i.a),t.a=new i.a({routes:[{path:"/",name:"Hello",component:o.a}]})},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){function s(e){n(55)}var i=n(1)(n(42),n(79),s,null,null);e.exports=i.exports},,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var s=n(8),i=n.n(s);t.a={save:function(e,t,n,s){return i.a.post("/questionario/"+e,{token:t,set:n,answers:s})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(8),i=(n.n(s),n(5)),a=(n.n(i),n(22)),o=(n.n(a),n(19)),r=(n.n(o),n(18)),u=(n.n(r),n(20)),c=(n.n(u),n(17)),d=(n.n(c),n(9)),l=n(21),p=n.n(l),v=n(16);d.a.config.productionTip=!1,new d.a({el:"#app",router:v.a,template:"<App/>",components:{App:p.a}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(78),i=n.n(s);t.default={components:{hc:i.a},data:function(){return{}},methods:{finish:function(){this.$emit("finished")}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(5),i=n.n(s),a=n(76),o=n.n(a),r=n(77),u=n.n(r),c=n(70),d=n.n(c),l=n(7),p=n(93),v=n.n(p);t.default={components:{questionnaire:o.a,ThankYou:u.a,consent:d.a},data:function(){return{textarea:null,consent:!0,finished:!1,questionnaire:null,questions:null,answers:null,questionSet:"HC",loadedAnswers:null}},mounted:function(){var e=this,t=l.a.prepareQuestionnaire(v.a);this.questionnaire=t.questionnaire,this.questions=t.questions;try{var n=localStorage.getItem(l.a.PARAMETERS.key);if(n){var s=JSON.parse(n);Array.isArray(s.answers)&&i()({title:"Existe um questionário em andamento",text:"Você deseja continuar respondendo ou recomeçar?",type:"warning",showCancelButton:!0,confirmButtonColor:"#0074E0",confirmButtonText:"Continuar respondendo",cancelButtonText:"Recomeçar"},function(){e.consent=!1,e.loadedAnswers=s.answers,l.a.loadStorageItem(s),window.scrollTo(0,0)})}}catch(e){}window.scrollTo(0,0)},methods:{consent1Finished:function(){this.consent=!1,window.scrollTo(0,0)},questionnaireFinished:function(e){this.answers=e,this.finished=!0,window.scrollTo(0,0)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["percentage"]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["question","showPending","answers"],data:function(){return{fixedHeader:!1}},mounted:function(){var e=this;new Waypoint({element:this.$refs.header,handler:function(t){e.fixedHeader="down"===t}}),new Waypoint({element:this.$refs.items[this.$refs.items.length-1],handler:function(t){e.fixedHeader="up"===t}})},methods:{selectItem:function(e,t){this.$emit("select",e,t)},validateItem:function(){return!0}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(7);t.default={props:["question","answers"],data:function(){return{month:null,year:null,months:s.a.MONTHS}},mounted:function(){if(this.answers[this.question.id]){var e=this.answers[this.question.id].split("/");this.month=e[0],this.year=e[1]}},methods:{updateValue:function(){if(this.month&&this.year){var e=this.month+"/"+this.year;this.$emit("date-selected",this.question,e)}}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["question","answers"],data:function(){return{}},methods:{selectItem:function(e,t){this.$emit("select",e,t)},toggleItem:function(e){this.$emit("toggle",e)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(52),i=n.n(s),a=n(5),o=n.n(a),r=n(91),u=n.n(r),c=n(73),d=n.n(c),l=n(75),p=n.n(l),v=n(74),m=n.n(v),f=n(72),h=n.n(f),_=n(7),g=n(40);t.default={props:["pages","set","loadedAnswers"],components:{matrix:d.a,options:p.a,monthYear:m.a,VueCircle:u.a,LinearProgress:h.a},data:function(){return{currentPage:0,answers:[],showPending:!1,completedSteps:0,totalSteps:0,saving:!1}},mounted:function(){var e=this;if(this.pages.forEach(function(t){t.questions.forEach(function(t){t.multiple||(Array.isArray(t.matrix)?e.totalSteps+=t.matrix.length:e.totalSteps++)})}),Array.isArray(this.loadedAnswers)){this.answers=this.loadedAnswers,this.updateProgress();for(var t=!1,n=0;n<this.pages.length;n++){for(var s=0;s<this.screenQuestions.length;s++)if(!this.validate(this.screenQuestions[s])){t=!0;break}if(t||this.currentPage===this.pages.length-1)break;this.currentPage++}}},methods:{previous:function(){this.showPending=!1,this.currentPage--},next:function(){this.validatePage()&&(this.showPending=!1,this.currentPage++,window.scrollTo(0,0))},finish:function(){var e=this;this.validatePage()&&(this.saving=!0,g.a.save(_.a.PARAMETERS.key,_.a.PARAMETERS.token,this.set,this.answers).then(function(){"undefined"!=typeof Storage&&localStorage.removeItem(_.a.PARAMETERS.key),e.$emit("finished",e.answers)}).catch(function(){e.saving=!1,o()("Oops...","Ocorreu um erro ao enviar o questionário. Por favor tente novamente.","error")}))},validateNumber:function(e){var t=parseInt(this.answers[e.id],10);return t>=e.number.min&&t<=e.number.max},validateNumberAndUpdateProgress:function(e){this.validateNumber(e)?this.updateProgress():e.invalidNumber=!0},validatePage:function(){for(var e=0;e<this.screenQuestions.length;e++)if(!this.validate(this.screenQuestions[e]))return this.showPending=!0,o()("Perguntas pendentes","Por favor responda as perguntas marcadas em vermelho","error"),!1;return!0},validateItem:function(e){return Boolean(this.answers[e.id])},validate:function(e){function t(e){return!!e&&Boolean(e.trim())}if(e.multiple)return!0;if(e.textbox||e.monthYear)return e.number?this.validateNumber(e):t(this.answers[e.id]);if(Array.isArray(e.matrix)){for(var n=0;n<e.matrix.length;n++){var s=e.matrix[n];if(!this.validateItem(s))return!1}return!0}var i=this.answers[e.id];if(i){var a=e.options[i-1];return!a.textbox||t(this.answers[a.id])}return!1},selectItem:function(e,t){var n=JSON.parse(i()(this.answers));n[e.id]=t,e.pending=!1,this.answers=n,this.updateProgress()},toggleItem:function(e){var t=JSON.parse(i()(this.answers));t[e.id]=1===t[e.id]?null:1,this.answers=t},updateProgress:function(){var e=this,t=0;this.pages.forEach(function(n){n.questions.forEach(function(n){n.multiple||(Array.isArray(n.matrix)?n.matrix.forEach(function(n){e.validateItem(n)&&t++}):e.validate(n)&&t++)})}),this.completedSteps=t,this.$refs.progresscircle.updateProgress(Math.ceil(t/this.totalSteps*100))},loadSubquestions:function(e){var t=this,n=[];if(this.answers[e.id]&&e.options){var s=this.answers[e.id],i=e.options[s-1];Array.isArray(i.subquestions)&&i.subquestions.forEach(function(e){n.push(e),n=n.concat(t.loadSubquestions(e))})}return n}},computed:{screenQuestions:function(){var e=this,t=[];return this.pages&&this.pages[this.currentPage].questions.forEach(function(n){t.push(n),t=t.concat(e.loadSubquestions(n))}),t},title:function(){return this.pages[this.currentPage].name},percentage:function(){return Math.ceil(this.completedSteps/this.totalSteps*100)}},watch:{answers:function(e){if("undefined"!=typeof Storage){var t=_.a.getStorageItem(e);localStorage.setItem(_.a.PARAMETERS.key,i()(t))}}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,,,,,function(e,t,n){function s(e){n(59)}var i=n(1)(n(43),n(83),s,null,null);e.exports=i.exports},function(e,t,n){function s(e){n(61)}var i=n(1)(n(44),n(85),s,"data-v-d1a58bfa",null);e.exports=i.exports},function(e,t,n){function s(e){n(63)}var i=n(1)(n(45),n(87),s,"data-v-ea6382de",null);e.exports=i.exports},function(e,t,n){function s(e){n(58)}var i=n(1)(n(46),n(82),s,"data-v-38fb4d60",null);e.exports=i.exports},function(e,t,n){function s(e){n(56)}var i=n(1)(n(47),n(80),s,"data-v-27d4e3e4",null);e.exports=i.exports},function(e,t,n){function s(e){n(57)}var i=n(1)(n(48),n(81),s,"data-v-2cc940e2",null);e.exports=i.exports},function(e,t,n){function s(e){n(60)}var i=n(1)(n(49),n(84),s,"data-v-8a489558",null);e.exports=i.exports},function(e,t,n){function s(e){n(62)}var i=n(1)(n(50),n(86),s,"data-v-d8da4a98",null);e.exports=i.exports},function(e,t,n){var s=n(1)(n(51),n(88),null,null,null);e.exports=s.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("router-view")],1),e._v(" "),n("div",[e._v(" ")]),e._v(" "),n("div",[e._v(" ")]),e._v(" "),n("div",[e._v(" ")])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("select",{directives:[{name:"model",rawName:"v-model",value:e.month,expression:"month"}],on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.month=t.target.multiple?n:n[0]},e.updateValue]}},[n("option",{staticStyle:{display:"none"}}),e._v(" "),e._l(e.months,function(t){return n("option",[e._v(e._s(t))])})],2),e._v("\n    /\n    "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.year,expression:"year"}],on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.year=t.target.multiple?n:n[0]},e.updateValue]}},[n("option",{staticStyle:{display:"none"}}),e._v(" "),e._l(Array(76).fill().map(function(e,t){return t+1942}),function(t){return n("option",[e._v(e._s(t))])})],2)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.question.options.length>3?"options-columns":""},[e.question.multiple?n("div",e._l(e.question.options,function(t){return n("div",[n("div",{staticClass:"option-item pure-checkbox",on:{click:function(n){e.toggleItem(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.answers[t.id],expression:"answers[option.id]"}],attrs:{name:t.id,value:"1",type:"checkbox"},domProps:{checked:Array.isArray(e.answers[t.id])?e._i(e.answers[t.id],"1")>-1:e.answers[t.id]},on:{__c:function(n){var s=e.answers[t.id],i=n.target,a=!!i.checked;if(Array.isArray(s)){var o=e._i(s,"1");i.checked?o<0&&(e.answers[t.id]=s.concat("1")):o>-1&&(e.answers[t.id]=s.slice(0,o).concat(s.slice(o+1)))}else e.$set(e.answers,t.id,a)}}}),e._v(" "),n("label",[n("span",{staticClass:"option-item-text"},[e._v(e._s(t.item))])])])])})):n("div",e._l(e.question.options,function(t,s){return n("div",[n("div",{staticClass:"option-item pure-radiobutton",on:{click:function(t){e.selectItem(e.question,s+1)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.answers[e.question.id],expression:"answers[question.id]"}],attrs:{name:e.question.id,type:"radio"},domProps:{value:s+1,checked:e._q(e.answers[e.question.id],s+1)},on:{__c:function(t){e.$set(e.answers,e.question.id,s+1)}}}),e._v(" "),n("label",[n("span",{staticClass:"option-item-text"},[e._v("\n                        "+e._s(t.item)+"\n                       "),t.textbox?n("input",{directives:[{name:"model",rawName:"v-model",value:e.answers[t.id],expression:"answers[option.id]"}],staticClass:"pure-input",attrs:{type:"text",placeholder:"Especifique"},domProps:{value:e.answers[t.id]},on:{input:function(n){n.target.composing||e.$set(e.answers,t.id,n.target.value)}}}):e._e()])])])])}))])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{ref:"header",class:{header:!0,fixed:e.fixedHeader}},[n("div",{staticClass:"question"},[e._v(" ")]),e._v(" "),e._l(e.question.headers,function(t){return n("div",{class:{option:!0,"option-100":e.question.headers.length<=5}},[e._v(e._s(t))])})],2),e._v(" "),n("div",{staticClass:"rows"},e._l(e.question.matrix,function(t){return n("div",{key:t.id,ref:"items",refInFor:!0,class:{row:!0,pending:e.showPending&&!e.answers[t.id]}},[n("div",{staticClass:"question"},[e._v("\n                "+e._s(t.item)+"\n            ")]),e._v(" "),e._l(e.question.headers,function(s,i){return n("div",{class:{option:!0,"option-100":e.question.headers.length<=5},on:{click:function(n){e.selectItem(t,i+1)}}},[n("div",{staticClass:"pure-radiobutton"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.answers[t.id],expression:"answers[item.id]"}],attrs:{name:t.id,type:"radio"},domProps:{value:i+1,checked:e._q(e.answers[t.id],i+1)},on:{__c:function(n){e.$set(e.answers,t.id,i+1)}}}),e._v(" "),n("label")])])})],2)}))])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"consent"}},[e._m(0),e._v(" "),n("hc"),e._v(" "),n("div",{staticClass:"pagination"},[n("a",{staticClass:"pure-button",attrs:{href:"http://www.qvt-ufmg.com.br/"}},[e._v("Quero saber mais")]),e._v(" "),n("button",{staticClass:"pure-button pure-button-primary",on:{click:function(t){e.finish()}}},[e._v("Eu concordo")])])],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title-bar"},[n("h1",[e._v("Termo de Consentimento Livre e Esclarecido")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"title-bar"},[n("h1",[e._v(e._s(e.title))])]),e._v(" "),n("vue-circle",{ref:"progresscircle",staticClass:"progress-circle",attrs:{id:"progress-circle","start-angle":-Math.PI/2,progress:0,fill:{gradient:["#0683C3","#06A4C2","#06C3C1"]},size:100,thickness:10,"show-percent":!0}}),e._v(" "),n("ul",{staticClass:"question-list pure-form"},e._l(e.screenQuestions,function(t){return n("li",{staticClass:"question-item"},[Array.isArray(t.matrix)?n("div",{staticClass:"item-box"},[n("div",{staticClass:"question"},[e._v(e._s(t.question))]),e._v(" "),n("matrix",{attrs:{question:t,"show-pending":e.showPending,answers:e.answers},on:{select:e.selectItem}})],1):n("div",{class:{pending:e.showPending&&!e.validate(t),"item-box":!0}},[n("div",{staticClass:"question"},[e._v(e._s(t.question))]),e._v(" "),t.instruction?n("div",{staticClass:"instruction"},[e._v("\n                    "+e._s(t.instruction)+"\n                ")]):e._e(),e._v(" "),t.invalidNumber||e.showPending?n("div",{staticClass:"instruction-alert"},[e._v("\n                    "+e._s(t.validationMsg)+"\n                ")]):e._e(),e._v(" "),t.monthYear?n("div",{staticClass:"textbox-item"},[n("month-year",{attrs:{question:t,answers:e.answers},on:{"date-selected":e.selectItem}})],1):e._e(),e._v(" "),t.textbox?n("div",{staticClass:"textbox-item"},[t.number?n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.answers[t.id],expression:"answers[question.id]",modifiers:{lazy:!0}}],attrs:{type:"number",placeholder:"Digite sua resposta"},domProps:{value:e.answers[t.id]},on:{change:[function(n){e.$set(e.answers,t.id,n.target.value)},function(n){e.validateNumberAndUpdateProgress(t)}]}}):n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.answers[t.id],expression:"answers[question.id]",modifiers:{lazy:!0}}],attrs:{type:"text",placeholder:"Digite sua resposta"},domProps:{value:e.answers[t.id]},on:{change:[function(n){e.$set(e.answers,t.id,n.target.value)},e.updateProgress]}})]):e._e(),e._v(" "),Array.isArray(t.options)?n("div",[t.multiple?n("div",{staticClass:"instruction-alert"},[e._v("\n                        Pode marcar mais de uma alternativa\n                    ")]):e._e(),e._v(" "),n("options",{attrs:{question:t,answers:e.answers},on:{select:e.selectItem,toggle:e.toggleItem}})],1):e._e()])])})),e._v(" "),null!=e.pages?n("div",{staticClass:"pagination"},[n("button",{staticClass:"pure-button",attrs:{disabled:0===e.currentPage},on:{click:function(t){e.previous()}}},[e._v("Anterior")]),e._v(" "),n("linear-progress",{attrs:{percentage:e.percentage}}),e._v(" "),e.currentPage<e.pages.length-1?n("button",{staticClass:"pure-button pure-button-primary",on:{click:function(t){e.next()}}},[e._v("Próximo")]):n("button",{staticClass:"pure-button pure-button-primary",attrs:{disabled:e.saving},on:{click:function(t){e.finish()}}},[e.saving?n("span",[e._v("Aguarde...")]):n("span",[e._v("Finalizar")])])],1):e._e()],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.consent?n("div",[n("consent",{on:{finished:e.consent1Finished}})],1):e._e(),e._v(" "),e.consent||e.finished?e._e():n("div",[n("questionnaire",{attrs:{pages:e.questionnaire,"loaded-answers":e.loadedAnswers,set:e.questionSet},on:{finished:function(t){e.questionnaireFinished(t)}}})],1),e._v(" "),e.finished?n("div",[n("thank-you")],1):e._e()])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Obrigado!")]),e._v(" "),n("p",[e._v("\n        Agradecemos o tempo que você tomou para responder esse questionário e nos colocamos à disposição\n        para quaisquer esclarecimentos.\n    ")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"linear-progress"},[n("div",{staticClass:"bar-main-container azure",attrs:{id:"bar-1"}},[n("div",{staticClass:"wrap"},[n("div",{staticClass:"bar-percentage"},[e._v(e._s(e.percentage)+"%")]),e._v(" "),n("div",{staticClass:"bar-container"},[n("div",{staticClass:"bar",style:"width: "+e.percentage+"%"})])])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"texto"},[n("p",[e._v("\n        Este é um convite para você participar da pesquisa, "),n("i",[e._v('"Identificação e análise de condições de trabalho e\n        riscos psicossociais em trabalhadores de uma organização hospitalar"')]),e._v(", coordenada pela Profa. Dra. Lívia de\n        Oliveira Borges e pela doutorando Geraldo Majela Garcia Primo, do Programa de Pós-graduação em Psicologia, da\n        Faculdade de Filosofia e Ciências Humanas da UFMG. Você participa apenas se quiser e poderá desistir a qualquer\n        momento, retirando seu consentimento, sem que isso lhe traga nenhum prejuízo ou penalidade.\n    ")]),e._v(" "),n("p",[e._v("\n        A pesquisa tem por finalidade analisar de que forma as mudanças institucionais e as condições de trabalho tem\n        impacto no desempenho organizacional e ocasionam estresse ocupacional com repercussões no processo de adoecimento\n        e ausência ao trabalho. Caso você aceite o convite, poderá responder ao questionário: "),n("i",[e._v('"Avaliação das condições\n        de trabalho"')]),e._v(", considerando quatro grandes categorias: condições contratuais e jurídicas, condições físicas e\n        materiais, processos e características das atividades, e condições do ambiente sociogerencial. E também ao\n        questionário: "),n("i",[e._v('"Avaliação do estresse no trabalho"')]),e._v(", de acordo com o Modelo de Demanda e Controle.\n    ")]),e._v(" "),n("p",[e._v("\n        O risco da sua participação consiste na exposição das próprias opiniões. Este risco será minimizado pela\n        providência da sua não identificação. As respostas serão guardadas em local seguro e tratadas em sigilo. A\n        divulgação dos resultados será feita de forma a não identificar os participantes, focalizando o seu conteúdo\n        geral. Você não terá benefícios pessoais diretos ao participar da pesquisa, mas poderá se beneficiar dos\n        resultados e conclusões advindas da pesquisa e analises posteriores, que poderão traduzir em benefícios para\n        o conjunto de trabalhadores da instituição, na perspectiva de que podem apontar caminhos na gestão e nos\n        processos de trabalho, para a minimização de riscos e melhoria nas condições de trabalho, saúde física\n        e psíquica e qualidade de vida no trabalho.\n    ")]),e._v(" "),n("p",[e._v("\n        Não estamos prevendo que você venha a ter quaisquer despesas ou danos em decorrência de sua participação, mas,\n        se despesas ou danos vierem a ocorrer, você será ressarcido ou indenizado conforme o caso.\n    ")]),e._v(" "),n("p",[e._v("\n        Qualquer dúvida que você tiver a respeito desta pesquisa, poderá perguntar diretamente para as coordenadoras\n        do projeto (endereço e telefone especificado ao final). Dúvidas a respeito da ética dessa pesquisa também\n        poderão ser questionadas ao Comitê de Ética em Pesquisa da UFMG conforme endereço também especificado ao final.\n    ")]),e._v(" "),n("p",[e._v("\n        Ao concordar em responder o questionário você declara que compreendi os objetivos desta pesquisa, como ela será\n        realizada, os riscos e benefícios envolvidos e concorda em participar voluntariamente da pesquisa "),n("i",[e._v('"Identificação\n        e análise de condições de trabalho e riscos psicossociais em trabalhadores de uma organização hospitalar"')]),e._v(".\n    ")]),e._v(" "),n("div",{staticClass:"pure-g"},[n("div",{staticClass:"pure-u-1-2 signature"},[n("p",[n("span",{staticClass:"bold"},[e._v("Profa. Dra. Livia de Oliveira Borges")]),n("br"),e._v(" Coordenadora\n            ")])]),e._v(" "),n("div",{staticClass:"pure-u-1-2 signature"},[n("p",[n("span",{staticClass:"bold"},[e._v("Geraldo Majela Garcia Primo")]),n("br"),e._v(" Doutorando\n            ")])])]),e._v(" "),n("p",[n("span",{staticClass:"bold"},[e._v("Endereço:")]),e._v(" Departamento de Psicologia, da Faculdade de Filosofia e Ciências Humanas (FAFICH) da Universidade Federal de Minas Gerais (UFMG), Sala 4100. Campus Pampulha. Av. Antônio Carlos, 6627. CEP 31270-901. Telefone:\n        (31) 3409-6266\n    ")]),e._v(" "),n("p",[n("span",{staticClass:"bold"},[e._v("Comitê de Ética e Pesquisa:")]),e._v(" Av. Antônio Carlos, 6627, Unidade Administrativa II - 2º andar - Sala 2005. Campus Pampulha. Belo Horizonte, MG. CEP 31270-901. Telefone: (31) 3409-4592\n    ")])])}]}},,,,,function(e,t){e.exports=[{name:"Ficha sociodemográfica",questions:[{question:"Qual a sua idade?",validationMsg:"Digite um número entre 14 e 75",number:{min:14,max:99},textbox:!0},{question:"Em que ano começou a trabalhar?",validationMsg:"Digite um número entre 1942 e 2017",number:{min:1942,max:2017},textbox:!0}]},{name:"Condições contratuais e jurídicas",questions:[{question:"Vinculo com a UFMG",options:[{item:"Técnico administrativo de educação (RJU)"},{item:"Celetista concursado (p.ex. Ebserh"},{item:"Celetista terceirizado"},{item:"Professor dedicação exclusiva"},{item:"Professor 40 h"},{item:"Professor 20 h"},{item:"Cedido de outro órgão"},{item:"Voluntário, como:",textbox:!0},{item:"Contrato temporário, como:",textbox:!0},{item:"Estagiário"},{item:"Outro:",textbox:!0}]},{question:"Tipo de cargo",options:[{item:"Nível básico"},{item:"Administrativo nível médio"},{item:"Administrativo nível superior"},{item:"Técnico ou auxiliar de enfermagem"},{item:"Outro técnico de nível médio"},{item:"Enfermeiro"},{item:"Médico"},{item:"Outro profissional assistencial, de nível superior"},{item:"Professor de ensino fundamental e/ou médio"},{item:"Professor Ensino Superior"},{item:"Outro:",textbox:!0}]}]}]}],[41]);
//# sourceMappingURL=app.6275070526ed801588b2.js.map