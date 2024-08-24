var friendCount = 0; 

function addFriend() {
    var name = document.getElementById("friendName").value;
    if (name === "") {
        alert("Please enter a friend's name");
        return;
    }

    friendCount++;

    var friendDiv = document.createElement("div");
    friendDiv.className = "friend-item";

    var serialDiv = document.createElement("div");
    serialDiv.textContent = friendCount + ".";

    var nameDiv = document.createElement("div");
    nameDiv.textContent = name;

    var voteCountDiv = document.createElement("div");
    voteCountDiv.textContent = "0 votes";

    var voteButton = document.createElement("button");
    voteButton.textContent = "Vote";
    voteButton.onclick = function() {
        var currentVotes = parseInt(voteCountDiv.textContent);
        voteCountDiv.textContent = (currentVotes + 1) + " votes";
    };

    friendDiv.appendChild(serialDiv);
    friendDiv.appendChild(nameDiv);
    friendDiv.appendChild(voteCountDiv);
    friendDiv.appendChild(voteButton);

    document.getElementById("friendsList").appendChild(friendDiv);

    document.getElementById("friendName").value = "";
}