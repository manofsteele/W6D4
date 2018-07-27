const DOMNodeCollection = require ("./dom_node_collection.js");

function $l(selector, callback) {
  if (callback) {
    
    
  }
  document.addEventListener("DOMContentLoaded", function(event) {
    if (callback) {
      callback();
    }
  });
  
  
  if (selector instanceof HTMLElement) {
    const domNodeList = new DOMNodeCollection([selector]);
    return domNodeList;
  }
  
  let list = document.querySelectorAll(selector);
  let listArray = Array.from(list);
  return new DOMNodeCollection(listArray);
  
}

window.$l = $l;  