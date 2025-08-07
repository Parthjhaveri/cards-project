import title from '../title/title';

export default function card(cardData) {
    const card = document.createElement('div');
    card.className = 'section-card';
    
    const profilePic = document.createElement('img');
    profilePic.className = 'card-profile-pic';
    profilePic.src = window._getThumbnailURL(cardData.thumbnail);
    
    const nameSpan = document.createElement('span');
    nameSpan.appendChild(title('h2', (cardData.firstName + ' ' + cardData.lastName)));

    card.appendChild(profilePic);
    card.appendChild(nameSpan);
    card.appendChild(title('p', cardData.teamName));

    return card;
};