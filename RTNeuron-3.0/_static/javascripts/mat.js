// © Blue Brain Project/EPFL 2005 – 2019. All rights reserved.

// This file contains some fixes required as a result of the translation
// between mkdocs and sphinx.
// This uses an anonymous function rather than jQuery $(document).ready so that
// it runs immediately, since it must modify the DOM before application.js which
// needs the code divs fixed first.

(function () {
  // Clipboard requires codehilite class not highlight
  $("div.highlight")
    .children("pre")
    .wrap("<div class='codehilite'></div>");
  $("div[class^='highlight-'], div[class*=' highlight-']")
    .children()
    .unwrap();
  $("div.highlight")
    .children()
    .unwrap();
  // Tables are incorrectly rendered as the js/css requires they have no class.
  $("table.docutils").not(".field-list")
    .removeAttr("border")
    .removeAttr("class");
  // Add inline code highlighting, users need to set:
  // .. role:: js(code)
  //    :language: js
  // and use like :js:`return target`
  $("code.code")
    .addClass("codehilite");
  // Add the required id attribute to headings so that they receive the correct
  // offsets. This also removes the id of the wrapping div from Sphinx.
  $("div.section[id]")
    .children("h1, h2, h3, h4, h5, h6")
    .each(function(){
      $(this).attr("id", $(this).parent().attr("id"));
      $(this).parent().removeAttr("id");
    });
})();
