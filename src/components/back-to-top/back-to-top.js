export default function backToTop(appendingDiv) {
    // BACK TO TOP BUTTON
    const backToTopBtn = document.createElement('button');
    backToTopBtn.textContent = 'Back To Top';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.role = 'button'; // FOR WCAG

    appendingDiv.appendChild(backToTopBtn);

    window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
};