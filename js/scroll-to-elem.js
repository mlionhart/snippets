// scroll element into view. elem = e.g. 'form'; num = e.g. '1' (signifying form number 1)
function scrollToElem(elem, num) {
  if (num != undefined) {
    let element = document.querySelectorAll(elem)[num];
    console.log("Multiple; " + check(element));
    element.style.border = '2px solid red';
    check(element) ? element.scrollIntoView({ behavior: 'smooth' }) : displayError();
  } else {
    let element = document.querySelector(elem);
    console.log("Single; " + check(element));
    element.style.border = '2px solid red';
    check(element) ? element.scrollIntoView({ behavior: 'smooth' }) : displayError();
  }
}

function check(elem) {
  return ((elem.style.display != 'inline') || (elem.style.display != 'none'));
}

function displayError() {
  console.error('Element isn\'t even visible, so why try?');
}

