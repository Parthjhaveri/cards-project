import title from '../title/title';

export default function announcement() {
    const announcement = document.createElement('section');
    announcement.className = 'section-announcement';
    announcement.appendChild(title('p', 'Check out our latest blog & hear the latest from our new-hires!'));
    return announcement;
};