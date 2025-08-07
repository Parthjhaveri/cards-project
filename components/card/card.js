// import images from '../../static/imgs/thumbs';
import title from '../title/title';

export default function card(cardData) {
    const card = document.createElement('div');
    card.className = 'section-card';
    
    const profilePic = document.createElement('img');
    profilePic.className = 'card-profile-pic';
    profilePic.src = window._getThumbnailURL(cardData.thumbnail);
    
    card.appendChild(profilePic);
    card.appendChild(title('h2', cardData.firstName));
    card.appendChild(title('h2', cardData.lastName));
    card.appendChild(title('p', cardData.teamName));

    // card.innerHTML = cardData?.firstName;
    return card;
};