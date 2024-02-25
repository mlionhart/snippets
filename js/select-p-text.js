let elem = document.querySelector('p');
let selection = window.getSelection(); // get selection object
let range = document.createRange(); // create range object
range.selectNodeContents(elem); // set range object to encompass elem
selection.removeAllRanges(); // remove all ranges from selection (existing ranges)
selection.addRange(range); // add range to selection

// optionally, copy selection to clipboard
navigator.clipboard.writeText(selection.value);

// solution for if browser doesn't allow non-user-generated copy
document.querySelector("#copyButton").addEventListener("click", function() {
  navigator.clipboard.writeText("Test Text").then(function() {
      console.log("Text copied to clipboard!");
  }).catch(function(err) {
      console.error("Could not copy text: ", err);
  });
});
