const symbols = {
    "\\(\\backslash\\)": {
        "\\(\\backslash\\)": "\\backslash",
        "\\(\\{\\)": "\\{",
    }, 
    "\\(\\sum\\)": {
        "\\(\\sum\\)": "∑",
        "\\(\\prod\\)": "∏",
    },
    "\\(\\int\\)": {
        "\\(\\int\\)": "∫",
        "\\(\\frac{d}{d□}\\)": "\\frac{d}{d□}"
    },
}

window.addEventListener("load", (event) => {

    // copied online https://phuoc.ng/collection/html-dom/insert-text-into-a-text-area-at-the-current-position/
    const insertText = (textarea, text) => {
        // Get the current cursor position
        const position = textarea.selectionStart;
    
        // Get the text before and after the cursor position
        const before = textarea.value.substring(0, position);
        const after = textarea.value.substring(position, textarea.value.length);
    
        // Insert the new text at the cursor position
        textarea.value = before + text + after;

        textarea.focus();
    
        // Set the cursor position to after the newly inserted text
        textarea.selectionStart = textarea.selectionEnd = position + text.length;
    };
    
    function generateSymbols(s) {
        for (x in symbols) {
            var div = document.createElement("div"); 
            div.classList.add("symbol-class");
            div.innerHTML = x; 
            div.setAttribute("name", x);
            div.addEventListener("click", (e) => {
                select(e.target.closest(".symbol-class"));
            })
            document.getElementById("symbol-selectors").appendChild(div);
            var container = document.createElement("div");
            container.classList.add("symbol-container"); 
            container.setAttribute("name", x);
            
            for (t in symbols[x]) {
                var s = document.createElement("div");
                s.classList.add("symbol");
                s.innerHTML = t; 
                s.setAttribute("name", t);
                s.addEventListener("click", (e) => {
                    textarea = document.getElementById("editor-textarea");
                    console.log(e.target.closest(".symbol-container").getAttribute("name"))
                    console.log(e.target.closest(".symbol").getAttribute("name"))
                    insertText(textarea, symbols[e.target.closest(".symbol-container").getAttribute("name")][e.target.closest(".symbol").getAttribute("name")]);
                })
                container.appendChild(s);
            }
            document.getElementById("symbol-selectors").appendChild(container);
        }

        MathJax.typeset();
    }

    function select(symbolClass) {
        for (var i = 0; i < Array.from(document.querySelectorAll(".selected")).length; i++) {
            Array.from(document.querySelectorAll(".selected"))[i].classList.remove("selected");
        }
        for (var i = 0; i < Array.from(document.querySelectorAll(".selected")).length; i++) {
            Array.from(document.querySelectorAll(".selected"))[i].classList.remove("selected");
        }

        for (var i = 0; i < document.getElementsByName(symbolClass.getAttribute("name")).length; i++) {
            document.getElementsByName(symbolClass.getAttribute("name"))[i].classList.add("selected");
        }
    }

    function initialize() {
        select(document.querySelector(".symbol-class"));
    }

    generateSymbols();
    initialize();

});