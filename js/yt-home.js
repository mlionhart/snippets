// ctrl + alt + h to get player into view
window.addEventListener('keydown', (event) => {
  if ((event.key == 'h') && (event.ctrlKey) && (event.altKey)) {
    player.scrollIntoView();
  }  
}); 