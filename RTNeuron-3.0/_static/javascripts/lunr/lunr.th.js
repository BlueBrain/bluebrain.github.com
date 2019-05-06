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
!function(e,r){"function"==typeof define&&define.amd?define(r):"object"==typeof exports?module.exports=r():r()(e.lunr)}(this,function(){return function(t){if(void 0===t)throw new Error("Lunr is not present. Please include / require Lunr before this script.");if(void 0===t.stemmerSupport)throw new Error("Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script.");var i="2"==t.version[0];t.th=function(){this.pipeline.reset(),this.pipeline.add(t.th.trimmer),i?this.tokenizer=t.th.tokenizer:(t.tokenizer&&(t.tokenizer=t.th.tokenizer),this.tokenizerFn&&(this.tokenizerFn=t.th.tokenizer))},t.th.wordCharacters="[฀-๿]",t.th.trimmer=t.trimmerSupport.generateTrimmer(t.th.wordCharacters),t.Pipeline.registerFunction(t.th.trimmer,"trimmer-th");var n=t.wordcut;n.init(),t.th.tokenizer=function(e){if(!arguments.length||null==e||null==e)return[];if(Array.isArray(e))return e.map(function(e){return i?new t.Token(e):e});var r=e.toString().replace(/^\s+/,"");return n.cut(r).split("|")}}});