const cards = document.querySelectorAll('.heating-card');

for (const card of cards) {
  card.addEventListener('click', () => {
    card.classList.add('heating-card--selected');
    window.setTimeout(() => card.classList.remove('heating-card--selected'), 180);
  });

  card.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') {
      return;
    }

    event.preventDefault();
    card.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
}
