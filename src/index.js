const css = require('./scss/main.scss');
import hero from './components/hero/hero';
import announcement from './components/announcement-bar/announcement';
import cardsArchive from './components/cards-archive/cards-archive'

/**
 *
 *  THIS METHOD RETURNS THUMBNAIL URL BASED ON THUMBNAIL PROP VALUE
 *
 * */
const createImageFinderMethod = ()=> {

  function getImgThumbsObj() {
    const imgFilesObj = require.context('imgs/thumbs', true, /\.jpg|\.jpeg|\.svg|\.png$/);
    const imgCache = {};
    const importAll = (r) => r.keys().forEach(key => imgCache[key] = r(key));
    importAll(imgFilesObj);
    return imgCache;
  }

  const imgThumbsObj = getImgThumbsObj();
  return (imgUrl)=>imgThumbsObj[imgUrl];

}

window._getThumbnailURL = createImageFinderMethod();

const app = document.getElementById('app');
app.appendChild(announcement());
app.appendChild(hero());
app.appendChild(cardsArchive());