const banner = document.querySelector(".campaignbanner");

/* smooth transition for hiding banner: */
async function easeOut(){
  banner.style.transform = "translateY(-400px)";
  banner.style.opacity = "0";
  await new Promise(resolve => setTimeout(resolve, 1000));
  banner.style.display = "none";
}

/* close banner by clicking button: */
document.querySelector(".campaignbanner__close").addEventListener("click", function(){
  easeOut();
})

/* countdown until banner closes: */
const startingMinutes = 10;
let time = startingMinutes * 60;

setInterval(updateCounter, 1000);

function updateCounter(){
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.querySelector(".campaignbanner__countdown").innerHTML = `Countdown: ${minutes}:${seconds}`;

  time--;
  time =
    time < 0
    ? easeOut()
    : time;
}

/* get url params 'foo' and 'bar': */
const queryString = window.location.href;
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("foo")){
  var foo = urlParams.get("foo");
}

if(urlParams.has("bar")){
  var bar = urlParams.get("bar");
}
