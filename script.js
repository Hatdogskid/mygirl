/* =========================
   ELEMENTS
========================= */

const openButton =
    document.getElementById("openButton");

const envelope =
    document.getElementById("envelope");

const opening =
    document.getElementById("opening");

const letterPage =
    document.getElementById("letterPage");

const music =
    document.getElementById("backgroundMusic");

const musicButton =
    document.getElementById("musicButton");


/* =========================
   OPEN LETTER
========================= */

openButton.addEventListener("click", () => {

    /*
        Open the envelope first.
    */

    envelope.classList.add("open");

    /*
        Start the music.

        Because this happens after
        the user clicks the button,
        browsers normally allow it.
    */

    music.volume = 0.45;

    music.play().catch((error) => {
        console.log(
            "Music could not autoplay:",
            error
        );
    });


    /*
        Wait for the envelope animation,
        then show the actual letter.
    */

    setTimeout(() => {

        opening.classList.add("hide");

    }, 800);


    setTimeout(() => {

        opening.style.display = "none";

        letterPage.classList.add("show");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1600);

});


/* =========================
   MUSIC BUTTON
========================= */

musicButton.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        musicButton.textContent = "❚❚";

    } else {

        music.pause();

        musicButton.textContent = "▶";

    }

});


/* =========================
   VIDEO
========================= */

const video =
    document.getElementById("loveVideo");

/*
    Pause the music when
    the video starts playing.
*/

video.addEventListener("play", () => {

    music.pause();

    musicButton.textContent = "▶";

});


/*
    Resume music when
    video finishes.
*/

video.addEventListener("ended", () => {

    music.play();

    musicButton.textContent = "❚❚";

});


/* =========================
   FLOATING PETALS
========================= */

const petals =
    document.getElementById("petals");

function createPetal() {

    const petal =
        document.createElement("span");

    const symbols = [
        "🌷",
        "🌸",
        "♡",
        "♥"
    ];

    petal.textContent =
        symbols[
            Math.floor(
                Math.random() *
                symbols.length
            )
        ];

    petal.style.left =
        Math.random() * 100 + "vw";

    petal.style.fontSize =
        Math.random() * 15 + 12 + "px";

    petal.style.animationDuration =
        Math.random() * 5 + 6 + "s";

    petals.appendChild(petal);


    setTimeout(() => {

        petal.remove();

    }, 12000);

}


/*
    Create a new petal
    every 800 milliseconds.
*/

setInterval(createPetal, 800);