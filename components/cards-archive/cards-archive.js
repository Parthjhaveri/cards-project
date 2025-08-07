import users from '../../static/data/cards-data.json';
import card from '../card/card';

export default function cardsArchive() {
    const cardsArchive = document.createElement('section');
    cardsArchive.className = 'section-cards-archive';
   
    fetch(users)
        .then(res => res.json())
        .then((data) => {
            console.log('DATA--- ', data);
            data.users.forEach(data => {
                cardsArchive.appendChild(card(data));
            });
        });

    return cardsArchive;
};