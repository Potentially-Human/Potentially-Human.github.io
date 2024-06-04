// List the project names here!

projects = [
    ["Google", "https://google.com"], 
    ["Wolfram|Alpha", "https://wolframalpha.com"], 
    ["Home", "index.html"],
]


function searchProjects(query) {
    let results = [];
    let unsortedResults = []
    for (project of projects) {
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
        results.push("<a class='search-link' href='" + r[2] + "'><div class='search-item-text'>" + r[0] + "</div></a>");
    }
    return results;
}