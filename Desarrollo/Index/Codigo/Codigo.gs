

function doGet() {
  return HtmlService.createTemplateFromFile('Page').evaluate();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}