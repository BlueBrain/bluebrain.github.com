/*
 * Copyright (c) Blue Brain Project/EPFL 2018 – 2019. All rights reserved.
 */

(function () {
  // Clipboard requires codehilite class not highlight
  $("div.highlight").addClass("codehilite")
  // Tables are incorrectly rendered as the js/css requires they have no class.
  $("table.docutils")
    .not(".field-list")
    .removeAttr("border")
    .removeAttr("class");
  // Add inline code highlighting, users need to set:
  // .. role:: js(code)
  //    :language: js
  // and use like :js:`return target`
  $("code.code").addClass("codehilite");
  // Add the required id attribute to headings so that they receive the correct
  // offsets. This also removes the id of the wrapping div from Sphinx.
  $("div.section[id]")
    .children("h1, h2, h3, h4, h5, h6")
    .each(function(){
      $(this).attr("id", $(this).parent().attr("id"));
      $(this).parent().removeAttr("id");
    });
  // Resize sphinx-iframes to fit contents
  $("iframe.sphinx-iframe")
    .on("load", function(){
      $(this).height($(this).contents().height());
    });
})();