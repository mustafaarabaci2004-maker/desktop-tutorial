document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.navbar_component');
  const menuButton = document.getElementById('menu-button');

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-nav-open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });

    document.querySelectorAll('.navbar_link').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-nav-open');
        menuButton.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if (nav) {
    const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar_link').forEach((link) => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('is-active');
    }
  });

  const revealSelectors = '.card, .step, .testimonial, .section_head, .service-detail_layout, .badge-item, .gallery-item, .benefits_layout, .team-card';
  const revealEls = document.querySelectorAll(revealSelectors);
  if ('IntersectionObserver' in window && revealEls.length) {
    revealEls.forEach((el) => el.classList.add('reveal'));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach((el) => observer.observe(el));
  }

  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  if (form && feedback) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        feedback.textContent = 'Merci de compléter les champs obligatoires.';
        feedback.className = 'form-note is-error';
        return;
      }
      feedback.textContent = 'Merci ! Votre demande a bien été enregistrée. Nous vous recontactons sous 24h.';
      feedback.className = 'form-note is-success';
      form.reset();
    });
  }
});
