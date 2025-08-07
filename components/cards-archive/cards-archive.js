import users from '../../static/data/cards-data.json';

export default function cardsArchive() {
    const cardsArchive = document.createElement('section');
    cardsArchive.className = 'section-cards-archive';
   
    fetch(users)
        .then(res => res.json())
        .then((data) => {
            console.log('DATA--- ', data);
        })

    return cardsArchive;
};