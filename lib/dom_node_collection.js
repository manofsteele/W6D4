class DOMNodeCollection {
  constructor(elements) {
    this.elements = elements;
  }
  
  html(str) {
    if (!str) {
      return this.elements[0].innerHTML;
    } 
    this.elements.forEach( (node) => {
      node.innerHTML = str;
    });
  }
  
  empty() {
    this.elements.forEach( (node) => {
      node.innerHTML = "";
    });  
  }
  
  // accepts jQuery-lite-wrapped collection, HTML element, or a string
  
  append(arg) {
    
    if (typeof arg === 'string') {
      this.elements.forEach( (node) => {
        node.innerHTML += arg;
      });
    } else if(arg instanceof HTMLElement) {
      this.elements.forEach( (node) => {
        node.innerHTML += arg.innerHTML;
      });
    } else {
      arg.elements.forEach((el) => {
        this.elements.forEach( (node) => {
          node.innerHTML += el.outerHTML;
        });
      });
    }
  }
  
  
  //html 
  attr(attribute, value) {
    if(!value) {
      return this.elements[0].getAttribute(attribute);
    } else {
      this.elements.forEach( (node) => {
        node.setAttribute(attribute, value);
      });
      
    }
  }
  
  addClass(name) {
    this.elements.forEach( (node) => {
      node.classList.add(name);
    });
  }
  
  removeClass(name) {
    this.elements.forEach( (node) => {
      node.classList.remove(name);
    });
  }
  
  
  children() {
    let result = [];
    this.elements.forEach( (node) => {
      result = result.concat(node.children);
    });
    return result;
  }
  
  parent() {
    let result = [];
    this.elements.forEach( (node) => {
      if (!result.includes(node.parentNode)) {
        result = result.concat(node.parentNode);
      }
    });
    return result;
  }
  
  find(selector) {
    return this.elements[0].querySelectorAll(selector);
  }
  
  remove(args) {
    this.empty();
    
    this.elements.forEach( (node) => {
      while (node.firstChild) {
        node.removeChild(node.firstChild);
      } 
      node.parentNode.removeChild(node); 
    });
    
  }
  
  on(e, callback) {
    this.elements.forEach( (node) => {
      node.addEventListener(e,callback);
      node[e] = callback;
    });
  }
  
  off(e) {
    this.elements.forEach( (node) => {
      node.removeEventListener(e, node[e]);
    });
  }
  
  
}

module.exports = DOMNodeCollection;