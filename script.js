const quotes = [
  "“You are my today and all of my tomorrows.” – Leo Christopher",
  "“I love you not only for what you are, but for what I am when I am with you.” – Roy Croft",
  "“Whatever our souls are made of, yours and mine are the same.” – Emily Brontë",
  "“I still get butterflies even though I’ve seen you a hundred times.”",
  "“Every moment with you is a beautiful dream come true.”"
];

let quoteIndex = 0;

function showSurprise() {
  document.getElementById("surprise").classList.remove("hidden");
}

// Love Quote Rotator
setInterval(() => {
  quoteIndex = (quoteIndex + 1) % quotes.length;
  document.getElementById("quoteBox").innerHTML = `<p class="quote">${quotes[quoteIndex]}</p>`;
}, 5000);

// Floating Hearts Generator
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 5 + Math.random() * 5 + "s";
  document.querySelector(".heart-container").appendChild(heart);
  setTimeout(() => heart.remove(), 10000);
}

setInterval(createHeart, 300);
