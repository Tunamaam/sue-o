document.addEventListener('DOMContentLoaded', () => {
    // Sidebar Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const appContainer = document.querySelector('.app-container');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 1024) {
            if (!sidebar.contains(e.target) && !menuToggle.contains(e.target) && sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
            }
        }
    });

    // View Switching Logic
    const navItems = document.querySelectorAll('.nav-item');
    const views = {
        'Inicio': document.getElementById('view-home'),
        'Herramientas': document.getElementById('view-tools')
    };

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const text = item.querySelector('span').textContent;

            if (views[text]) {
                e.preventDefault(); // Prevent default anchor behavior

                // Update active state in sidebar
                navItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');

                // Hide all views
                Object.values(views).forEach(view => view.classList.add('hidden'));

                // Show target view
                views[text].classList.remove('hidden');
            }
        });
    });

    // Tab Filtering (Visual only for now)
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');

            // Here you would add logic to filter the tool cards
            // For now, we just animate the cards to simulate a refresh
            const cards = document.querySelectorAll('.tool-card');
            cards.forEach(card => {
                card.style.opacity = '0.5';
                card.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 200);
            });
        });
    });

    // Add simple hover effects for "Create Session" card
    const createSessionCard = document.querySelector('.action-card.primary');
    const schoolModal = document.getElementById('school-modal');
    const modalCloseBtn = document.querySelector('.modal-close');
    const schoolForm = document.getElementById('school-form');

    function openModal() {
        if (schoolModal) {
            schoolModal.classList.remove('hidden');
            // Small delay to allow display:flex to apply before opacity transition
            setTimeout(() => {
                schoolModal.classList.remove('opacity-0');
                schoolModal.querySelector('div').classList.remove('scale-95');
                schoolModal.querySelector('div').classList.add('scale-100');
            }, 10);
        }
    }

    function closeModal() {
        if (schoolModal) {
            schoolModal.classList.add('opacity-0');
            schoolModal.querySelector('div').classList.remove('scale-100');
            schoolModal.querySelector('div').classList.add('scale-95');
            setTimeout(() => {
                schoolModal.classList.add('hidden');
            }, 300);
        }
    }

    if (createSessionCard) {
        createSessionCard.addEventListener('click', (e) => {
            e.preventDefault();

            // Check if data already exists, if so, maybe skip? (Optional logic, for now always show or pre-fill)
            const storedData = localStorage.getItem('schoolData');
            if (storedData) {
                const data = JSON.parse(storedData);
                // Pre-fill if exists
                if (schoolForm) {
                    schoolForm.dre.value = data.dre || '';
                    schoolForm.ugel.value = data.ugel || '';
                    schoolForm.ie.value = data.ie || '0018';
                    schoolForm.distrito.value = data.distrito || 'Tarapoto';
                }
            }
            openModal();
        });
    }

    // Custom Confirmation Dialog
    const confirmDialog = document.getElementById('confirm-dialog');
    const confirmAccept = document.getElementById('confirm-accept');
    const confirmCancel = document.getElementById('confirm-cancel');
    let confirmResolve = null;

    function showConfirmDialog(message) {
        return new Promise((resolve) => {
            confirmResolve = resolve;
            if (confirmDialog) {
                confirmDialog.classList.remove('hidden');
                setTimeout(() => {
                    confirmDialog.classList.remove('opacity-0');
                    confirmDialog.querySelector('div').classList.remove('scale-90');
                    confirmDialog.querySelector('div').classList.add('scale-100');
                }, 10);
            }
        });
    }

    function hideConfirmDialog() {
        if (confirmDialog) {
            confirmDialog.classList.add('opacity-0');
            confirmDialog.querySelector('div').classList.remove('scale-100');
            confirmDialog.querySelector('div').classList.add('scale-90');
            setTimeout(() => {
                confirmDialog.classList.add('hidden');
            }, 300);
        }
    }

    if (confirmAccept) {
        confirmAccept.addEventListener('click', () => {
            hideConfirmDialog();
            if (confirmResolve) confirmResolve(true);
        });
    }

    if (confirmCancel) {
        confirmCancel.addEventListener('click', () => {
            hideConfirmDialog();
            if (confirmResolve) confirmResolve(false);
        });
    }

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', async () => {
            // Show custom confirmation dialog
            const confirmed = await showConfirmDialog();
            if (confirmed) {
                closeModal();
            }
        });
    }

    // Disable closing on background click to prevent accidents
    if (schoolModal) {
        // Optional: Maybe shake the modal or show a tooltip if they click outside?
        // For now, we just don't bind the close event to the background click.
        schoolModal.addEventListener('click', (e) => {
            if (e.target === schoolModal) {
                // Do nothing, or maybe flash the modal to indicate it's modal
                const container = schoolModal.querySelector('div');
                container.classList.add('scale-105');
                setTimeout(() => container.classList.remove('scale-105'), 200);
            }
        });
    }

    // Handle Form Submit
    if (schoolForm) {
        schoolForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(schoolForm);
            const data = Object.fromEntries(formData.entries());

            // Save to LocalStorage
            localStorage.setItem('schoolData', JSON.stringify(data));

            // Show success feedback (optional, or just redirect)
            const btn = schoolForm.querySelector('button');
            const originalContent = btn.innerHTML;
            btn.innerHTML = `<i data-lucide="check" class="w-5 h-5"></i> <span>¡Guardado!</span>`;
            btn.classList.remove('bg-indigo-600');
            btn.classList.add('bg-emerald-500');

            if (window.lucide) lucide.createIcons();

            setTimeout(() => {
                window.location.href = 'home.html';
            }, 800);
        });
    }
    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle ? themeToggle.querySelector('i') : null;

    if (themeToggle && icon) {
        // Load saved preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }

        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');

            if (body.classList.contains('dark-mode')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
                localStorage.setItem('theme', 'dark');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
                localStorage.setItem('theme', 'light');
            }
        });
    }
});
