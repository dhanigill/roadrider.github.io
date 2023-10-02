document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("orientationchange", function() {
            window.location.reload();
    });
    // Select all slides
    if (window.outerWidth <= 700) {
        const slides = document.querySelectorAll(".tank");

        slides.forEach((tank, indx) => {
            tank.style.transform = `translateY(${-indx * 100}%`;
        });

        // current slide counter
        var curSlide = 0;
        // maximum number of slides
        var maxSlide = slides.length - 1;

        const slider = document.querySelector(".s2");
        //Auto play
        var inter = setInterval(nextS, 2500);

        function nextS() {
            // check if current slide is the last and reset current slide
            if (curSlide === maxSlide) {
                slides[curSlide].classList.remove("vis");
                curSlide = 0;
            } else {
                curSlide++;
            }
            //   move slide by -100%

            slides[curSlide].classList.add("vis");
            if (curSlide - 1 >= 0) slides[curSlide - 1].classList.remove("vis");
        }
    }

    screen.addEventListener("orientationchange", () => {  	window.location.reload(); });

});
