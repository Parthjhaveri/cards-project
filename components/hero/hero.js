import title from '../title/title';

export default function hero() {
    const hero = document.createElement('section');
    hero.className = 'section-hero';
    hero.appendChild(title('h1', 'Our Team'));
    return hero;
};