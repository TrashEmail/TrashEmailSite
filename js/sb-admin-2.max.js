
var xmlhttp = new XMLHttpRequest();
var url = "https://sawx2b7151.execute-api.us-east-2.amazonaws.com/default/teml-stats";
var adminStats;

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200)
        adminStats = JSON.parse(this.responseText)
};

xmlhttp.open("GET", url, false);
xmlhttp.send();

console.log(adminStats)

document.getElementById("numberOfActiveUsers").innerText = adminStats.connectorStats[0].activeUsers;
document.getElementById("numberOfEmailsRegistered").innerText = adminStats.connectorStats[0].totalNumberOfEmailIds;

document.getElementById("numberOfEmailsRegisteredToday").innerText = adminStats.emailIdsCreatedToday;
document.getElementById("version").innerText = adminStats.version;
document.getElementById("totalNumberOfUsers").innerText = adminStats.totalNumberOfUsers;
document.getElementById("numberOfEmailsProcessed").innerText = adminStats.numberOfEmailsProcessed;
document.getElementById("totalNumberOfUsers").innerText = adminStats.connectorStats[0].totalNumberOfUsers;

