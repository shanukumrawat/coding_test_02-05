document.querySelector("form").addEventListener("submit", funSubmit)

var matchDataArr = JSON.parse(localStorage.getItem("schedule")) || [];

function funSubmit() {
    // console.log("print")
    event.preventDefault();

    var matchDataObj = {

        matchNumber: document.querySelector("#matchNum").value,

        teamA: document.querySelector("#teamA").value,

        teamB: document.querySelector("#teamB").value,

        date: document.querySelector("#date").value,

        venue: document.querySelector("#venue").value
    };
    console.log(matchDataObj)
    matchDataArr.push(matchDataObj)
    localStorage.setItem("schedule", JSON.stringify(matchDataArr));
    console.log(matchDataArr);
    window.location.href="matches.html"
}
