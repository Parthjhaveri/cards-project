// import images from '../../static/imgs/thumbs';
import title from '../title/title';

export default function card(cardData) {
    const card = document.createElement('div');
    card.className = 'section-card';
    
    const profilePic = document.createElement('img');
    profilePic.src = window._getThumbnailURL(cardData.thumbnail);
    
    card.appendChild(profilePic);
    card.appendChild(title('p', cardData.firstName));

    // card.innerHTML = cardData?.firstName;
    return card;
};