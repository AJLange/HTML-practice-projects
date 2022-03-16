

async function getUser(user)
{
    data = await getUserData(user)
    document.getElementById("followers").innerText = data.followers;
    document.getElementById("avatar").src = data.avatar_url;

}


async function getUserData(user) {
    // The await keyword lets js know that it needs to wait until it gets a response back to continue.

    var response = await fetch("https://api.github.com/users/" + user );
    // We then need to convert the data into JSON format.
    var coderData = await response.json();
    return coderData;
}

function helloWorld(user){
    console.log(user)
}