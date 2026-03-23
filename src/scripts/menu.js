// Hamburger menu
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebarOverlay');
const sidebarClose = document.getElementById('sidebarClose');

function openSidebar() {
  sidebar.classList.add('active');
  overlay.classList.add('active');
  hamburger.classList.add('active');
}

function closeSidebar() {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
  hamburger.classList.remove('active');
}

hamburger.addEventListener('click', openSidebar);
overlay.addEventListener('click', closeSidebar);
sidebarClose.addEventListener('click', closeSidebar);

// Cerrar sidebar al hacer clic en un enlace
document.querySelectorAll('.sidebar-links a').forEach(link => {
  link.addEventListener('click', closeSidebar);
});
