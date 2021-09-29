function paintTime() {
  document.querySelector('main').textContent = new Date();
}

export default function clock() {
  paintTime();
  setInterval(paintTime, 1000);
};
