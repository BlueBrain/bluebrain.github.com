/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
!function(e,r){"function"==typeof define&&define.amd?define(r):"object"==typeof exports?module.exports=r():r()(e.lunr)}(this,function(){return function(e){if(void 0===e)throw new Error("Lunr is not present. Please include / require Lunr before this script.");if(void 0===e.stemmerSupport)throw new Error("Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script.");var v,q,r;console.warn('[Lunr Languages] Please use the "nl" instead of the "du". The "nl" code is the standard code for Dutch language, and "du" will be removed in the next major versions.'),e.du=function(){this.pipeline.reset(),this.pipeline.add(e.du.trimmer,e.du.stopWordFilter,e.du.stemmer),this.searchPipeline&&(this.searchPipeline.reset(),this.searchPipeline.add(e.du.stemmer))},e.du.wordCharacters="A-Za-zªºÀ-ÖØ-öø-ʸˠ-ˤᴀ-ᴥᴬ-ᵜᵢ-ᵥᵫ-ᵷᵹ-ᶾḀ-ỿⁱⁿₐ-ₜKÅℲⅎⅠ-ↈⱠ-ⱿꜢ-ꞇꞋ-ꞭꞰ-ꞷꟷ-ꟿꬰ-ꭚꭜ-ꭤﬀ-ﬆＡ-Ｚａ-ｚ",e.du.trimmer=e.trimmerSupport.generateTrimmer(e.du.wordCharacters),e.Pipeline.registerFunction(e.du.trimmer,"trimmer-du"),e.du.stemmer=(v=e.stemmerSupport.Among,q=e.stemmerSupport.SnowballProgram,r=new function(){var r,i,u,o=[new v("",-1,6),new v("á",0,1),new v("ä",0,1),new v("é",0,2),new v("ë",0,2),new v("í",0,3),new v("ï",0,3),new v("ó",0,4),new v("ö",0,4),new v("ú",0,5),new v("ü",0,5)],n=[new v("",-1,3),new v("I",0,2),new v("Y",0,1)],t=[new v("dd",-1,-1),new v("kk",-1,-1),new v("tt",-1,-1)],c=[new v("ene",-1,2),new v("se",-1,3),new v("en",-1,2),new v("heden",2,1),new v("s",-1,3)],a=[new v("end",-1,1),new v("ig",-1,2),new v("ing",-1,1),new v("lijk",-1,3),new v("baar",-1,4),new v("bar",-1,5)],l=[new v("aa",-1,-1),new v("ee",-1,-1),new v("oo",-1,-1),new v("uu",-1,-1)],m=[17,65,16,1,0,0,0,0,0,0,0,0,0,0,0,0,128],d=[1,0,0,17,65,16,1,0,0,0,0,0,0,0,0,0,0,0,0,128],f=[17,67,16,1,0,0,0,0,0,0,0,0,0,0,0,0,128],_=new q;function s(e){return(_.cursor=e)>=_.limit||(_.cursor++,!1)}function w(){for(;!_.in_grouping(m,97,232);){if(_.cursor>=_.limit)return!0;_.cursor++}for(;!_.out_grouping(m,97,232);){if(_.cursor>=_.limit)return!0;_.cursor++}return!1}function b(){return i<=_.cursor}function p(){return r<=_.cursor}function g(){var e=_.limit-_.cursor;_.find_among_b(t,3)&&(_.cursor=_.limit-e,_.ket=_.cursor,_.cursor>_.limit_backward&&(_.cursor--,_.bra=_.cursor,_.slice_del()))}function h(){var e;u=!1,_.ket=_.cursor,_.eq_s_b(1,"e")&&(_.bra=_.cursor,b()&&(e=_.limit-_.cursor,_.out_grouping_b(m,97,232)&&(_.cursor=_.limit-e,_.slice_del(),u=!0,g())))}function k(){var e;b()&&(e=_.limit-_.cursor,_.out_grouping_b(m,97,232)&&(_.cursor=_.limit-e,_.eq_s_b(3,"gem")||(_.cursor=_.limit-e,_.slice_del(),g())))}this.setCurrent=function(e){_.setCurrent(e)},this.getCurrent=function(){return _.getCurrent()},this.stem=function(){var e=_.cursor;return function(){for(var e,r,i,n=_.cursor;;){if(_.bra=_.cursor,e=_.find_among(o,11))switch(_.ket=_.cursor,e){case 1:_.slice_from("a");continue;case 2:_.slice_from("e");continue;case 3:_.slice_from("i");continue;case 4:_.slice_from("o");continue;case 5:_.slice_from("u");continue;case 6:if(_.cursor>=_.limit)break;_.cursor++;continue}break}for(_.cursor=n,_.bra=n,_.eq_s(1,"y")?(_.ket=_.cursor,_.slice_from("Y")):_.cursor=n;;)if(r=_.cursor,_.in_grouping(m,97,232)){if(i=_.cursor,_.bra=i,_.eq_s(1,"i"))_.ket=_.cursor,_.in_grouping(m,97,232)&&(_.slice_from("I"),_.cursor=r);else if(_.cursor=i,_.eq_s(1,"y"))_.ket=_.cursor,_.slice_from("Y"),_.cursor=r;else if(s(r))break}else if(s(r))break}(),_.cursor=e,i=_.limit,r=i,w()||((i=_.cursor)<3&&(i=3),w()||(r=_.cursor)),_.limit_backward=e,_.cursor=_.limit,function(){var e,r,i,n,o,t,s=_.limit-_.cursor;if(_.ket=_.cursor,e=_.find_among_b(c,5))switch(_.bra=_.cursor,e){case 1:b()&&_.slice_from("heid");break;case 2:k();break;case 3:b()&&_.out_grouping_b(f,97,232)&&_.slice_del()}if(_.cursor=_.limit-s,h(),_.cursor=_.limit-s,_.ket=_.cursor,_.eq_s_b(4,"heid")&&(_.bra=_.cursor,p()&&(r=_.limit-_.cursor,_.eq_s_b(1,"c")||(_.cursor=_.limit-r,_.slice_del(),_.ket=_.cursor,_.eq_s_b(2,"en")&&(_.bra=_.cursor,k())))),_.cursor=_.limit-s,_.ket=_.cursor,e=_.find_among_b(a,6))switch(_.bra=_.cursor,e){case 1:if(p()){if(_.slice_del(),i=_.limit-_.cursor,_.ket=_.cursor,_.eq_s_b(2,"ig")&&(_.bra=_.cursor,p()&&(n=_.limit-_.cursor,!_.eq_s_b(1,"e")))){_.cursor=_.limit-n,_.slice_del();break}_.cursor=_.limit-i,g()}break;case 2:p()&&(o=_.limit-_.cursor,_.eq_s_b(1,"e")||(_.cursor=_.limit-o,_.slice_del()));break;case 3:p()&&(_.slice_del(),h());break;case 4:p()&&_.slice_del();break;case 5:p()&&u&&_.slice_del()}_.cursor=_.limit-s,_.out_grouping_b(d,73,232)&&(t=_.limit-_.cursor,_.find_among_b(l,4)&&_.out_grouping_b(m,97,232)&&(_.cursor=_.limit-t,_.ket=_.cursor,_.cursor>_.limit_backward&&(_.cursor--,_.bra=_.cursor,_.slice_del())))}(),_.cursor=_.limit_backward,function(){for(var e;;)if(_.bra=_.cursor,e=_.find_among(n,3))switch(_.ket=_.cursor,e){case 1:_.slice_from("y");break;case 2:_.slice_from("i");break;case 3:if(_.cursor>=_.limit)return;_.cursor++}}(),!0}},function(e){return"function"==typeof e.update?e.update(function(e){return r.setCurrent(e),r.stem(),r.getCurrent()}):(r.setCurrent(e),r.stem(),r.getCurrent())}),e.Pipeline.registerFunction(e.du.stemmer,"stemmer-du"),e.du.stopWordFilter=e.generateStopWordFilter(" aan al alles als altijd andere ben bij daar dan dat de der deze die dit doch doen door dus een eens en er ge geen geweest haar had heb hebben heeft hem het hier hij hoe hun iemand iets ik in is ja je kan kon kunnen maar me meer men met mij mijn moet na naar niet niets nog nu of om omdat onder ons ook op over reeds te tegen toch toen tot u uit uw van veel voor want waren was wat werd wezen wie wil worden wordt zal ze zelf zich zij zijn zo zonder zou".split(" ")),e.Pipeline.registerFunction(e.du.stopWordFilter,"stopWordFilter-du")}});