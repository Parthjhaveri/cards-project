import title from '../title/title';

export default function card(cardData) {
    const card = document.createElement('div');
    card.className = 'section-card';
    card.role = 'card'; // FOR WCAG
    
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
        profilePic.alt = 'card-profile-pic'; // FOR WCAG
        profilePic.src = window._getThumbnailURL(cardData.thumbnail);
        
        // NAME
        const nameSpan = document.createElement('span');
        nameSpan.appendChild(title('h2', (cardData.firstName + ' ' + cardData.lastName)));

        // APPEND
        wrapperSpan.appendChild(profilePic);
        wrapperSpan.appendChild(nameSpan);
        wrapperSpan.appendChild(title('h4', cardData.title));
        wrapperSpan.appendChild(title('p', cardData.bioShort));
        wrapperSpan.appendChild(title('h4', `Skill: ${cardData.linkedInSkill}`));
        wrapperSpan.appendChild(title('h4', `Team: ${cardData.teamName || cardData.team}`));

        // BUTTON
        const btn = document.createElement('button');
        btn.className = 'card-btn';
        btn.type = 'button'; // FOR WCAG
        btn.role = 'button'; // FOR WCAG
        btn.innerHTML = 'Contact';
        card.appendChild(wrapperSpan);
        card.appendChild(btn);
    }
    return card;
};