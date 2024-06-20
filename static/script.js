window.addEventListener("load", (event) => {
    const sidenav = document.querySelector(".sidenav");
    const overlay =  document.querySelector(".overlay");
    const searchWindow = document.querySelector(".search-window");
    const searchResults = document.querySelector(".search-results");

    for (let i = 0; i < projects.length; i++) {
        const a = document.createElement("a");
        a.innerHTML = "<li class='sidenav-link'>" + projects[i][0] + "</li>";
        a.href = projects[i][1];
        document.querySelector(".sidenav-links").appendChild(a);
    }

    for (let i = 0; i < tools.length; i++) {
        const li = document.createElement("li");
        li.classList.add("tools-item");
        li.innerHTML = '<a target="_blank" href="' + tools[i][1] + '" class="tools-link"><span class="tool-icon icon" style="background-image: url(static/assets/' + (tools[i][2] === undefined ? '' : tools[i][2]) + ');"></span><span class="tool-text">' + tools[i][0] + '</span></a>';
        document.querySelector(".tools-list").append(li);
    }
    document.querySelector(".tools-window").style.height = String(30 * tools.length + 2) + "px";

    document.querySelector(".menu-icon").addEventListener("click", (event) => {     
        sidenav.style.display = "block";
        overlay.style.display = "block";
        sidenav.animate([
            {transform: "translateX(-200px)"}, 
            {transform: "translateX(0px)"}, 
        ], {
            duration: 300,
            iterations: 1,
        });

        document.querySelector(".tools-window").style.display = "none";
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

    document.querySelector(".search-icon").addEventListener("click", (event) => {
        document.querySelector(".search-bar").focus();
    });

    document.querySelector(".search-bar").addEventListener("focus", (event) => {
        overlay.style.display = "block";
        searchWindow.style.border = "2px solid rgba(151, 159, 171, 0.5)";
        searchWindow.style.zIndex = "20"; 
        searchWindow.style.minHeight = "90px";
        searchResults.style.display = "block";

        results = searchProjects(document.querySelector(".search-bar").value);
        searchResults.innerHTML = "";
        searchWindow.style.height = String(60 + 30 * results.length) + "px";
        for (result of results) {
            const li = document.createElement("li"); 
            li.classList.add("search-item");
            li.innerHTML = result;
            searchResults.appendChild(li);
        }

        document.querySelector(".tools-window").style.display = "none";
    });

    overlay.addEventListener("click", (event) => {
        overlay.style.display = "none"; 
        if (sidenav.style.display === "block") {
            sidenav.style.display = "none";
        } else if (searchWindow.style.zIndex == "20") {
            searchWindow.style.border = "2px solid rgba(151, 159, 171, 0)";
            searchWindow.style.zIndex = "1"; 
            searchWindow.style.minHeight = "54px";
            searchWindow.style.height = "";
            searchResults.style.display = "none";
        }
    })

    document.querySelector(".search-bar").addEventListener("input", (event) => {
        results = searchProjects(document.querySelector(".search-bar").value);
        searchResults.innerHTML = "";
        searchWindow.style.height = String(60 + 30 * results.length) + "px";
        if (results.length == 0) {
            const li = document.createElement("li"); 
            li.classList.add("search-item");
            li.innerHTML = "Sorry, No results found.";
            searchResults.appendChild(li);
        } else if (document.querySelector(".search-bar").value == "") {
            for (result of results) {
                const li = document.createElement("li"); 
                li.classList.add("search-item");
                li.innerHTML = result;
                searchResults.appendChild(li);
            }
        } else {
            for (result of results) {
                const li = document.createElement("li"); 
                li.classList.add("search-item");
                li.innerHTML = result;
                searchResults.appendChild(li);
            }
        }
    });

    document.querySelector(".content-wrapper").addEventListener("click", (event) => {
        document.querySelector(".tools-window").style.display = "none";
    })

    document.querySelector(".tools").addEventListener("click", (event) => {
        if (document.querySelector(".tools-window").style.display == "block") {
            document.querySelector(".tools-window").style.display = "none";
        } else {
            document.querySelector(".tools-window").style.display = "block";
            document.querySelector(".tools-window").animate([
                {transform: "translateY(-100px)"}, 
                {transform: "translateY(0px)"}, 
            ], {
                duration: 100,
                iterations: 1,
            });
        }
    })
})