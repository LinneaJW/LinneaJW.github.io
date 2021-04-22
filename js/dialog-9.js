document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu > a');
  const dialog = document.querySelector('.dialog');
  const dialogLinks = document.querySelectorAll('.noKids');

  const toggleDialog = (evt) => {
    evt.stopPropagation();
    dialog.classList.toggle('open');
  }

  menu.addEventListener('click', toggleDialog);
  dialogLinks.forEach(link => link.addEventListener('click', toggleDialog));
});