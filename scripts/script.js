// scripts/script.js
document.addEventListener('DOMContentLoaded', () => {
  const rows = document.querySelectorAll('.dashboard__table-body tr');
  rows.forEach((row, index) => {
    setTimeout(() => {
      row.style.opacity = 1;
    }, index * 150);
  });
});
