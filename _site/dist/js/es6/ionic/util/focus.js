import {raf,
  ready} from './dom';
let isKeyInputEnabled = false;
function keyDown(ev) {
  if (!isKeyInputEnabled && ev.keyCode == 9) {
    isKeyInputEnabled = true;
    raf(enableKeyInput);
  }
}
function enableKeyInput() {
  document.body.classList[isKeyInputEnabled ? 'add' : 'remove']('key-input');
  if (isKeyInputEnabled) {
    document.addEventListener('mousedown', pointerDown);
    document.addEventListener('touchstart', pointerDown);
  } else {
    document.removeEventListener('mousedown', pointerDown);
    document.removeEventListener('touchstart', pointerDown);
  }
}
function pointerDown() {
  isKeyInputEnabled = false;
  raf(enableKeyInput);
}
ready().then(function() {
  document.addEventListener('keydown', keyDown);
});
