const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.tab-panel');
const themeToggle = document.getElementById('themeToggle');
const profileButtons = document.querySelectorAll('.profile-btn');
const miniTabs = document.querySelectorAll('.mini-tab');
const detailPanels = document.querySelectorAll('.detail-panel');

function switchTab(targetId) {
  tabs.forEach((tab) => tab.classList.toggle('active', tab.dataset.tab === targetId));
  panels.forEach((panel) => panel.classList.toggle('active', panel.id === targetId));
}

function switchDetail(targetId) {
  miniTabs.forEach((tab) => tab.classList.toggle('active', tab.dataset.detail === targetId));
  detailPanels.forEach((panel) => panel.classList.toggle('active', panel.id === targetId));
}

for (const tab of tabs) {
  tab.addEventListener('click', () => {
    switchTab(tab.dataset.tab);
  });
}

profileButtons.forEach((button) => {
  button.addEventListener('click', () => {
    switchTab('profile');
    switchDetail(button.dataset.target);
  });
});

miniTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    switchDetail(tab.dataset.detail);
  });
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');

  if (document.body.classList.contains('light')) {
    themeToggle.textContent = 'Тёмная тема';
  } else {
    themeToggle.textContent = 'Светлая тема';
  }
});
