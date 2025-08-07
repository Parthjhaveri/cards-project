export default function title(titleType, titleContent) {
    const title = document.createElement(titleType);
    title.textContent = titleContent;
    return title;
};