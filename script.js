const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

const applyFilter = (filter) => {
  projectCards.forEach((card) => {
    const category = card.dataset.category;
    const isVisible = filter === 'all' || category === filter || (filter === 'reconciliation' && category === 'excel');

    card.classList.toggle('is-hidden', !isVisible);
  });

  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === filter;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
};

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    applyFilter(button.dataset.filter);
  });
});