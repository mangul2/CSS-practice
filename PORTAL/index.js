window.onload = ()=>{
    let audio = new Audio('music.mp3');
    let main = document.querySelector("#main");
    let second0_2 = document.querySelector(".second0-2");

    let a1 = document.querySelector(".second0-2 > #a1");
    let a2 = document.querySelector(".second0-2 > #a2");
    let a3 = document.querySelector(".second0-2 > #a3");
    let a4 = document.querySelector(".second0-2 > #a4");

    let second3_8 = document.querySelector(".second3-8");

    let b1 = document.querySelector(".second3-8 > #b1");
    let b2 = document.querySelector(".second3-8 > #b2");
    let b3 = document.querySelector(".second3-8 > #b3");
    let b4 = document.querySelector(".second3-8 > #b4");
    let b5 = document.querySelector(".second3-8 > #b5");
    
    let c1 = document.querySelector(".second9-15 > #c1");
    let c2 = document.querySelector(".second9-15 > #c2");
    let c3 = document.querySelector(".second9-15 > #c3");
    let c4 = document.querySelector(".second9-15 > #c4");
    let c5 = document.querySelector(".second9-15 > #c5");

    function s0_2(a, b) {
        a.style.visibility = "visible";
        a.style.top = b;
        a.style.color = "#000";
        a.style.textShadow = "none";
    }

    function s3_8(a, b) {
        a.style.left = b;
        a.style.color = "#000";
        a.style.textShadow = "none";
    }

    main.addEventListener("click", ()=>{
        audio.volume = 0.5;
        audio.play();
        document.body.requestFullscreen();
        //This
        s0_2(a1, "350px");
        //was
        s0_2(a2, "350px");
        //a
        s0_2(a3, "350px");
        //TRIUMPH
        s0_2(a4, "450px");
        setTimeout(()=>{
            a1.style.transition = "all 1s";
            a1.style.left = "-1000px"
            a2.style.transition = "all 1s";
            a2.style.left = "-716px"
            a3.style.transition = "all 1s";
            a3.style.left = "-385px"
            a4.style.transition = "all 1s";
            a4.style.left = "-1000px"
        }, 3000)
        setTimeout(()=>{
            second0_2.style.display = "none";
        }, 4000)
        s3_8(b1, "120px");
        s3_8(b2, "400px");
        s3_8(b3, "950px");
        s3_8(b4, "1150px");
        s3_8(b5, "1470px");
        setTimeout(()=>{
            b1.style.transition = "all 1s";
            b1.style.top = "-500px";
            b2.style.transition = "all 1s";
            b2.style.top = "-500px";
            b3.style.transition = "all 1s";
            b3.style.top = "-500px";
            b4.style.transition = "all 1s";
            b4.style.top = "-500px";
            b5.style.transition = "all 1s";
            b5.style.top = "-500px";
        }, 8000)
        setTimeout(()=>{
            second3_8.style.display = "none";
        }, 8300)
        c1.style.top = "160px";
        c1.style.color = "#000";
        c1.style.textShadow = "none";
    })
}