var isReady;
var routeDebut = document.querySelector("body header h1 div");;
var routeClick = document.querySelector("body header h1 .unown-container");;
var img;
var audio;
var gif;
var divContainer;
var i = 0;

//si le nom de domaine du site est twitter.com
if(window.location.hostname === "twitter.com") {
    function replace(route) {
        isReady = setInterval(() => {

            route = document.querySelector("body header h1 div");

            if(route) {
                clearInterval(isReady);
                route.remove();

                //take random number between 1 and 4096
                var random = Math.floor(Math.random() * 4096) + 1;
                console.log("random : "+random);

                //si la page affichée est https://twitter.com/LordAythur, random est toujours égal à 2
                if(window.location.href === "https://twitter.com/LordAythur") {
                    random = 2;
                }

                
                //create an img
                divContainer = document.createElement("div");
                divContainer.className = "unown-container";

                img = document.createElement("img");

                audio = new Audio(chrome.runtime.getURL("assets/shiny.mp3"));
                audio.volume = 1;
                audio.loop = false;
                audio.preload = "auto";
                audio.autoplay = false;
                audio.muted = true;
                audio.controls = false;



                if(random === 2) {
                    gif = document.createElement("img");
                    img.src = chrome.runtime.getURL("assets/unown_shiny.png");
                    gif.src = chrome.runtime.getURL("assets/shiny.gif");
                    gif.style = "position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);";
                } else {
                    img.src = chrome.runtime.getURL("assets/unown_default.png");
                }

                img.style = "width:40px;aspect-ration:1;";
                document.querySelector("body header h1 a").style = "display:flex;align-items:center;justify-content:center;position:relative;";
                document.querySelector("body header h1 a").appendChild(divContainer);
                document.querySelector("body header h1 a .unown-container").appendChild(img);

                if(random === 2) {
                    document.querySelector("body").addEventListener("click", function() {
                        if(i === 0) {
                            document.querySelector("body header h1 a .unown-container").appendChild(gif);
                            audio.muted = false;
                            audio.play();
                            i = 1;
                        }
                    });
                }
            }
        }, 10);
    }
    replace(routeDebut);
}


    