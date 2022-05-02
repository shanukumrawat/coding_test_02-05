var displayMatchArr = JSON.parse(localStorage.getItem("schedule"))

var favArr = JSON.parse(localStorage.getItem("favourites")) || [];
// console.log(displayMatchData)
displayData(displayMatchArr);

function displayData(data) {
document.querySelector("tbody").innerHTML=null;
    
    data.forEach(function (ele) {

        var tr = document.createElement("tr")

        var td1 = document.createElement("td")
        td1.innerText = ele.matchNumber;

        var td2 = document.createElement("td")
        td2.innerText = ele.teamA;

        var td3 = document.createElement("td")
        td3.innerText = ele.teamB;

        var td4 = document.createElement("td")
        td4.innerText = ele.date;

        var td5 = document.createElement("td")
        td5.innerText = ele.venue;

        var td6 = document.createElement("td")
        td6.innerText = "Add as favourites"
        td6.style.color = "green"
        td6.style.cursor = "pointer"
        td6.addEventListener("click", function () {
            funFav(ele)
        })

        tr.append(td1, td2, td3, td4, td5, td6)
        document.querySelector("tbody").append(tr);
    })
}
function funFav(ele) {
    favArr.push(ele)
    localStorage.setItem("favourites", JSON.stringify(favArr))
}

document.querySelector("#filterVenue").addEventListener("change" , filterData)

function filterData(){
    var selected = document.getElementById("filterVenue").value;
    var filterArr =displayMatchArr.filter(function(ele){
        return ele.venue == selected;
    })

    displayData(filterArr)
}
