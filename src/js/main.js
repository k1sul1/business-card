import Optiscroll from 'optiscroll';
import Shake from 'shake.js';

let flipped = false;
const vcard = document.querySelector('.vcard');
const flipCard = () => { flipped = true; vcard.classList.add('flip') };
const unflipCard = () => { flipped = false; vcard.classList.remove('flip') };
const toggleFlip = () => {
  if (flipped) {
    return unflipCard();
  }

  return flipCard();
}

const scrollInstances = Array.from(document.querySelectorAll('.optiscroll')).map(area => {
  return new Optiscroll(area);
});

const shakeInstance = new Shake({
  threshold: 15,
  timeout: 1000
});
shakeInstance.start();

window.addEventListener('shake', function(e) {
  toggleFlip();
}, false);

Array.from(document.querySelectorAll('.toggle-flip')).map(element => {
  element.addEventListener('click', toggleFlip);
  return element;
});

setTimeout(() => {
  Array.from(document.querySelectorAll('.delayed')).map(element => {
    element.style.opacity = 1;
    return element;
  });
}, 2500);
