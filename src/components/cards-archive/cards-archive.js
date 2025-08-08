import users from '../../static/data/cards-data.json';
import card from '../card/card';
import backToTop from '../back-to-top/back-to-top';

export default function cardsArchive() {
  const cardsArchive = document.createElement('section');
  cardsArchive.className = 'section-cards-archive';

  const sentinel = document.createElement('div');
  sentinel.id = 'lazy-sentinel';
  cardsArchive.appendChild(sentinel);

  const cardsPerBatch = 20;
  let currentIndex = 0;
  let sortedData = [];

  fetch(users)
    .then(res => res.json())
    .then((data) => {
      sortedData = data.users.sort((a, b) => {
        const teamA = a.teamName.toLowerCase();
        const teamB = b.teamName.toLowerCase();
        const lastA = a.lastName.toLowerCase();
        const lastB = b.lastName.toLowerCase();

        if (teamA < teamB) return -1;
        if (teamA > teamB) return 1;
        if (lastA < lastB) return -1;
        if (lastA > lastB) return 1;
        return 0;
      });

      loadNextBatch();

      observer.observe(sentinel); 
    });

    function loadNextBatch() {
        const nextBatch = sortedData.slice(currentIndex, currentIndex + cardsPerBatch);
        nextBatch.forEach(data => {
        cardsArchive.insertBefore(card(data), sentinel);
        });

        currentIndex += cardsPerBatch;

        if (currentIndex >= sortedData.length) {
        observer.disconnect(); 
        sentinel.remove();
        }
    }

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            loadNextBatch();
        }
    }, {
        rootMargin: '200px'
    });

    backToTop(cardsArchive);

    return cardsArchive;
}
