window.onload = ()=>{
    let main = document.querySelector("#main");
    let second0_2 = document.querySelector(".second0-2");

    let a1 = document.querySelector(".second0-2 > #a1");
    let a2 = document.querySelector(".second0-2 > #a2");
    let a3 = document.querySelector(".second0-2 > #a3");
    let a4 = document.querySelector(".second0-2 > #a4");
    
    function s0_2(a, b) {
        a.style.visibility = "visible";
        a.style.top = b;
        a.style.color = "#000";
        a.style.textShadow = "none";
    }

    main.addEventListener("click", ()=>{
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
    })
}