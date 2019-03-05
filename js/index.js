// console.clear();

// # Logo Toggle Active Class
logo = document.getElementsByClassName("logo-heading")[0];

toggleClass = {
  add: function(el, val) {
    el.className += ` ${val}`;
  },
  remove: function(el, val) {
    el.classList.remove(val);
  }
};

// footer = document
//   .getElementsByClassName("footer")[0]
//   .getElementsByTagName("p")[0].innerText;

function showCopyright(val) {
  alert(val);
}

body = document.getElementsByTagName("body")[0];
navbar = body.getElementsByClassName("main-navigation")[0];

function toggleDarkMode(el) {}

body.addEventListener("wheel", e => {
  wDelta = e.wheelDelta < 0 ? "down" : "up";
  if (wDelta === "down") {
    if (!navbar.classList.contains("darkmode")) {
      navbar.className += " darkmode";
    }
  }
  if (wDelta === "up") {
    if (navbar.classList.contains("darkmode")) {
      navbar.classList.remove("darkmode");
    }
  }
});

images = document.getElementsByTagName("img");

function removeFullscreen(image) {}

function makeItHappenDelegate(i) {
  return function() {
    body.className = "body-hide";
    images[i].className = " fullscreen";
    document.body.onkeyup = function(e) {
      if (e.keyCode == 32) {
        images[i].classList.remove("fullscreen");
        body.classList.remove("body-hide");
      }
    };
  };
}

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("dblclick", makeItHappenDelegate(i), false);
}

titles = body.getElementsByTagName("h4");

for (let i = 0; i < images.length; i++) {
  images[i].setAttribute("draggable", "true");
}

buttons = body.getElementsByClassName("btn");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function() {
    if (!buttons[i].classList.contains("new-color")) {
      buttons[i].classList += " new-color";
    }
    console.log(buttons[i]);
  };
}

console.log(buttons);
