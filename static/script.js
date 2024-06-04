window.addEventListener("load", (event) => {
    const sidenav = document.querySelector(".sidenav");
    const overlay =  document.querySelector(".overlay");
    document.querySelector(".navbar").addEventListener("click", (event) => {     
        sidenav.style.display = "block";
        overlay.style.display = "block";
        sidenav.animate([
            {transform: "translateX(-200px)"}, 
            {transform: "translateX(0px)"}, 
        ], {
            duration: 300,
            iterations: 1,
        })
    });

    document.querySelector(".close-sidebar").addEventListener("click", (event) => {
        sidenav.animate([
            {transform: "translateX(0px)"}, 
            {transform: "translateX(-200px)"}, 
        ], {
            duration: 300,
            iterations: 1,
        })
        sidenav.style.display = "none";
        overlay.style.display = "none";
        
    });
})