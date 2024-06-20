// List the project names here!

var projects = [
    ["Home", "index.html"],
    ["Object detector", "smart-camera.html"],
    ["About/Contacts", "about.html"],
    ["3D Tetris", "3d-tetris.html"]
]

var tools = [
    ["Wolfram|Alpha", "https://wolframalpha.com", "wolfram.ico",], 
    ["Dalle-3", "https://www.bing.com/images/create", "image-generator.png"],
    ["Copilot", "https://copilot.microsoft.com/", "copilot.png"],
    ["ChatGPT", "https://chatgpt.com/", "chatGPT.png"],
]

function searchProjects(query) {
    let results = [];
    let unsortedResults = []
    let projectsAndTools = projects.concat(tools);
    for (project of projectsAndTools) {
        projectName = project[0];
        if (projectName.toLowerCase().includes(query.toLowerCase())) {
            var regEx = new RegExp(query.toLowerCase(), "ig");
            occurences = [...projectName.matchAll(regEx)];
            var index = projectName.toLowerCase().indexOf(query.toLowerCase());
            for (o of occurences[0]) {
                projectName = projectName.replaceAll(o, "<span class = 'highlighted'>" + o + "</span>");
            }
            unsortedResults.push([projectName, index, project[1]]);
        }
    }

    unsortedResults.sort((a, b) => {return a[1] - b[1]});

    for (r of unsortedResults) {
        results.push("<a class='search-link'" + (r[2].includes("://") ? "target='_blank'" : "") + " href='" + r[2] + "'><div class='search-item-text'>" + r[0] + "</div></a>");
    }
    return results;
}