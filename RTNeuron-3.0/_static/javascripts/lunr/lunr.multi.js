/*
 * Copyright (c) 2016-2019 Martin Donath <martin.donath@squidfunk.com>
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
!function(e,i){"function"==typeof define&&define.amd?define(i):"object"==typeof exports?module.exports=i():i()(e.lunr)}(this,function(){return function(o){o.multiLanguage=function(){for(var e=Array.prototype.slice.call(arguments),i=e.join("-"),t="",r=[],n=[],s=0;s<e.length;++s)"en"==e[s]?(t+="\\w",r.unshift(o.stopWordFilter),r.push(o.stemmer),n.push(o.stemmer)):(t+=o[e[s]].wordCharacters,r.unshift(o[e[s]].stopWordFilter),r.push(o[e[s]].stemmer),n.push(o[e[s]].stemmer));var p=o.trimmerSupport.generateTrimmer(t);return o.Pipeline.registerFunction(p,"lunr-multi-trimmer-"+i),r.unshift(p),function(){this.pipeline.reset(),this.pipeline.add.apply(this.pipeline,r),this.searchPipeline&&(this.searchPipeline.reset(),this.searchPipeline.add.apply(this.searchPipeline,n))}}}});