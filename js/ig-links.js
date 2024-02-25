function openAllLinks() {
  let a = Array.from(document.querySelectorAll('a'));
  a = a.filter((i) => i.href.includes("instagram")); 
  if (a.some(i => i.firstChild.nextElementSibling.innerHTML.includes('/'))) {
    a = a.filter((i) => i.firstChild.nextElementSibling.innerHTML.includes("/"));
  }
  a = a.filter((i) => !i.textContent.includes("whatever"));
  a = a.filter((i) => !i.textContent.includes("bd"));
  a === undefined ? console.log("No Links to Open :)") : a.forEach((i) => window.open(i.href, "_blank"));
}

openAllLinks();