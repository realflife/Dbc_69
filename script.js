document.addEventListener('DOMContentLoaded', () => {
    const cardsGrid = document.getElementById('cardsGrid');
    const searchInput = document.getElementById('searchInput');
    const totalCount = document.getElementById('totalCount');
    
    // Modal elements
    const modal = document.getElementById('studentModal');
    const closeModal = document.querySelector('.close-modal');
    const modalImage = document.getElementById('modalImage');
    const modalFullName = document.getElementById('modalFullName');
    const modalNickname = document.getElementById('modalNickname');
    const modalHint = document.getElementById('modalHint');

    // Helper function to extract Drive ID and create a direct image link
    function getDirectImageUrl(driveUrl) {
        if (!driveUrl) return '';
        const urlParams = new URLSearchParams(driveUrl.split('?')[1]);
        const id = urlParams.get('id');
        if (id) {
            return `https://drive.google.com/uc?export=view&id=${id}`;
        }
        return driveUrl; // Fallback
    }

    // Function to render cards
    function renderCards(data) {
        cardsGrid.innerHTML = '';
        totalCount.textContent = data.length;

        if (data.length === 0) {
            cardsGrid.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; color: var(--text-muted); padding: 2rem;">ไม่พบข้อมูลนักศึกษาที่ค้นหา</p>`;
            return;
        }

        data.forEach((student, index) => {
            const card = document.createElement('div');
            card.className = 'student-card';
            card.style.animationDelay = `${index * 0.05}s`;

            const imgUrl = getDirectImageUrl(student.image);
            
            // Add a fallback image in case it fails to load or doesn't exist
            const imgElement = imgUrl 
                ? `<img src="${imgUrl}" alt="${student.fullName}" class="card-image" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(student.nickname || student.fullName)}&background=random&color=fff&size=250'">`
                : `<img src="https://ui-avatars.com/api/?name=${encodeURIComponent(student.nickname || student.fullName)}&background=random&color=fff&size=250" alt="${student.fullName}" class="card-image">`;

            card.innerHTML = `
                <div class="card-image-container">
                    ${imgElement}
                </div>
                <div class="card-content">
                    <h2 class="student-name">${student.fullName}</h2>
                    <div class="student-nickname">น้อง${student.nickname || '-'}</div>
                    
                    <div class="student-hint-label">คำใบ้</div>
                    <div class="student-hint">"${student.hint || '-'}"</div>
                </div>
            `;
            
            // Add click event to open modal
            card.addEventListener('click', () => {
                openModal(student, imgUrl);
            });
            
            cardsGrid.appendChild(card);
        });
    }

    // Modal Logic
    function openModal(student, imgUrl) {
        modalImage.src = imgUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(student.nickname || student.fullName)}&background=random&color=fff&size=800`;
        modalImage.onerror = function() {
            this.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(student.nickname || student.fullName)}&background=random&color=fff&size=800`;
        };
        
        modalFullName.textContent = student.fullName;
        modalNickname.textContent = student.nickname || '-';
        modalHint.textContent = `"${student.hint || '-'}"`;
        
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent scrolling in background
    }

    function closeStudentModal() {
        modal.classList.remove('show');
        document.body.style.overflow = ''; // Restore scrolling
        // Wait for animation to finish before clearing image to prevent flash
        setTimeout(() => {
            if (!modal.classList.contains('show')) {
                modalImage.src = '';
            }
        }, 300);
    }

    closeModal.addEventListener('click', closeStudentModal);

    // Close modal when clicking outside of it
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeStudentModal();
        }
    });

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeStudentModal();
        }
    });

    // Initial render
    renderCards(students);

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        
        const filteredStudents = students.filter(student => {
            const name = (student.fullName || '').toLowerCase();
            const nickname = (student.nickname || '').toLowerCase();
            const hint = (student.hint || '').toLowerCase();
            
            return name.includes(searchTerm) || 
                   nickname.includes(searchTerm) || 
                   hint.includes(searchTerm);
        });
        
        renderCards(filteredStudents);
    });
});
