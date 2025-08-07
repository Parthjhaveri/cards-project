import users from '../../static/data/cards-data.json';
import card from '../card/card';

export default function cardsArchive() {
    const cardsArchive = document.createElement('section');
    cardsArchive.className = 'section-cards-archive';
   
    fetch(users)
        .then(res => res.json())
        .then((data) => {
            const sortedData = data.users.sort((a, b) => {
                    const teamA = a.teamName.toLowerCase();
                    const teamB = b.teamName.toLowerCase();
                    const lastA = a.lastName.toLowerCase();
                    const lastB = b.lastName.toLowerCase();

                    // FIRST, COMPARE TEAM NAME
                    if (teamA < teamB) return -1;
                    if (teamA > teamB) return 1;

                    // IF SAME TEAM NAME, COMPARE LAST NAME
                    if (lastA < lastB) return -1;
                    if (lastA > lastB) return 1;

                    return 0;
            });
            console.log('sortedData---- ', sortedData); 

            sortedData.forEach(data => {
                cardsArchive.appendChild(card(data));
            });
        });

    return cardsArchive;
};