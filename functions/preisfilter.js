const filterButtons = document.querySelectorAll('.filter-btn');
        const priceCategories = document.querySelectorAll('.price-category');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Aktiven Button aktualisieren
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filter = button.getAttribute('data-filter');

                // Kategorien filtern
                priceCategories.forEach(category => {
                    if (filter === 'all' || category.getAttribute('data-category') === filter) {
                        category.classList.remove('hidden');
                        category.style.animation = 'fadeInUp 0.4s ease forwards';
                    } else {
                        category.classList.add('hidden');
                    }
                });
            });
        });

        // Smooth Scroll für Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Preise animieren beim Hover
        const priceSpans = document.querySelectorAll('.price-category li span');
        priceSpans.forEach(span => {
            span.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1) rotate(2deg)';
            });
            
            span.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1) rotate(0deg)';
            });
        });