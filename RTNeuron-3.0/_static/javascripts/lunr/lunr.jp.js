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
!function(e,r){"function"==typeof define&&define.amd?define(r):"object"==typeof exports?module.exports=r():r()(e.lunr)}(this,function(){return function(n){if(void 0===n)throw new Error("Lunr is not present. Please include / require Lunr before this script.");if(void 0===n.stemmerSupport)throw new Error("Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script.");var i="2"==n.version[0];n.jp=function(){this.pipeline.reset(),this.pipeline.add(n.jp.stopWordFilter,n.jp.stemmer),i?this.tokenizer=n.jp.tokenizer:(n.tokenizer&&(n.tokenizer=n.jp.tokenizer),this.tokenizerFn&&(this.tokenizerFn=n.jp.tokenizer))};var o=new n.TinySegmenter;n.jp.tokenizer=function(e){if(!arguments.length||null==e||null==e)return[];if(Array.isArray(e))return e.map(function(e){return i?new n.Token(e.toLowerCase()):e.toLowerCase()});for(var r=e.toString().toLowerCase().replace(/^\s+/,""),t=r.length-1;0<=t;t--)if(/\S/.test(r.charAt(t))){r=r.substring(0,t+1);break}return o.segment(r).filter(function(e){return!!e}).map(function(e){return i?new n.Token(e):e})},n.jp.stemmer=function(e){return e},n.Pipeline.registerFunction(n.jp.stemmer,"stemmer-jp"),n.jp.wordCharacters="一二三四五六七八九十百千万億兆一-龠々〆ヵヶぁ-んァ-ヴーｱ-ﾝﾞa-zA-Zａ-ｚＡ-Ｚ0-9０-９",n.jp.stopWordFilter=function(e){if(-1===n.jp.stopWordFilter.stopWords.indexOf(i?e.toString():e))return e},n.jp.stopWordFilter=n.generateStopWordFilter("これ それ あれ この その あの ここ そこ あそこ こちら どこ だれ なに なん 何 私 貴方 貴方方 我々 私達 あの人 あのかた 彼女 彼 です あります おります います は が の に を で え から まで より も どの と し それで しかし".split(" ")),n.Pipeline.registerFunction(n.jp.stopWordFilter,"stopWordFilter-jp")}});