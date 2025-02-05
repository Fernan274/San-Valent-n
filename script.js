document.addEventListener("DOMContentLoaded", function() {
    const text = "Hola Zuleimy, desde que te conocí supe que eras alguien especial. Hoy quiero preguntarte algo muy importante te amo como no tienes idea y quiero salir adelante contigo no puedo estar el 14 cerca de ti pero quiero que sepas que siempre te pienso te amo ...";
    let i = 0;
    let speed = 50;
    
    function typeWriter() {
        if (i < text.length) {
            document.getElementById("text").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter(); 

    document.getElementById("btn").addEventListener("click", function() {
        document.getElementById("mensaje").classList.remove("hidden");
        document.getElementById("music").play();
    });
});