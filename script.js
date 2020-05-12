document.addEventListener('DOMContentLoaded', () => {
  // OPEN BUTTON
  const openBtn = document.querySelector('#open-button');

  openBtn.addEventListener('click', () => {
    const content = document.querySelector('#exp-content');
    content.classList.add('active');
  });

  // CLOSE BUTTON
  const closeBtn = document.querySelector('#close-button');

  closeBtn.addEventListener('click', () => {
    const content = document.querySelector('#exp-content');
    content.classList.remove('active');
  });
});