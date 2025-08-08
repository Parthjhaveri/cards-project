import title from '../title/title';

export default function card(cardData) {
    const card = document.createElement('div');
    card.className = 'section-card';
    
    if (cardData) {
        // IMAGE DIV
        const imgDiv = document.createElement('div');
        imgDiv.classList = 'card-img-div';
        card.appendChild(imgDiv);

        // WRAPPER SPAN
        const wrapperSpan = document.createElement('span');
        wrapperSpan.className = 'card-wrapper-span';

        // PROFILE PIC
        const profilePic = document.createElement('img');
        profilePic.className = 'card-profile-pic';
        profilePic.src = window._getThumbnailURL(cardData.thumbnail);
        
        // NAME
        const nameSpan = document.createElement('span');
        nameSpan.appendChild(title('h2', (cardData.firstName + ' ' + cardData.lastName)));

        // APPEND
        wrapperSpan.appendChild(profilePic);
        wrapperSpan.appendChild(nameSpan);
        wrapperSpan.appendChild(title('p', cardData.title));
        wrapperSpan.appendChild(title('p', cardData.bioShort));
        wrapperSpan.appendChild(title('p', `Skill: ${cardData.linkedInSkill}`));
        wrapperSpan.appendChild(title('p', `Team: ${cardData.teamName || cardData.team}`));

        // BUTTON
        const btn = document.createElement('button');
        btn.className = 'card-btn';
        btn.innerHTML = 'Contact';
        card.appendChild(wrapperSpan);
        card.appendChild(btn);
    }
    return card;
};