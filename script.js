'use strict';
function DomElement (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.newElem = function () {
    let elem;
    if (this.selector[0] === '.') {
        elem = document.createElement('div');
        elem.className = this.selector.slice(1);
        elem.innerText = 'div с классом';
    }
    if (this.selector[0] === '#') {
        elem = document.createElement('p');
        elem.id = this.selector.slice(1);
        elem.innerText = 'параграф с id';

    }
    elem.style.cssText = `height: ${this.height}px;
        width: ${this.width}px;
        background: ${this.bg};
        font-size: ${this.fontSize}px;`;
    return elem;
};

let elDiv = new DomElement('.block', 100, 200, 'yellow', '14px');
let elParagraph = new DomElement('#best', 120, 300, 'green', '14px');

document.body.append(elDiv.newElem());
document.body.append(elParagraph.newElem());


