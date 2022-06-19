const colors = [
    "#ef5777",
    "#575fcf",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#485460",
    "#d16abb",
    "#3d833d",
    "#b6351e",
    "#d44071",
    "#1a4457"
];

function changeBackground() {
  const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
  let randomColor2 = colors[Math.floor(Math.random() * colors.length)];

  while (randomColor1 === randomColor2) {
    randomColor2 = colors[Math.floor(Math.random() * colors.length)];
  }
  interactiveBackground(randomColor1, randomColor2);
}

function interactiveBackground(randomColor1, randomColor2) {
  let i = 0;
  let count = setInterval(function () {
    if (i++ < 70) {
      document.body.style.background = `linear-gradient(135deg, ${randomColor1} ${i}%, ${randomColor2}`;
    } else {
      clearInterval(count);count = setInterval(function () {
        if (i-- > 0) {
          document.body.style.background = `linear-gradient(135deg, ${randomColor1} ${i}%, ${randomColor2}`;
        } else {
          clearInterval(count);
          interactiveBackground(randomColor1, randomColor2);
        }
      }, 70);
    }
  }, 120);
}

changeBackground();