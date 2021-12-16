function changename()
{
    var name = document.getElementById('username');
    var newname;
    newname = prompt("Enter your name")
    console.log(newname);
    name.innerHTML= newname;
    
    
}

function removeUser(element)
{
    element.parentElement.parentElement.remove();
    var numReq = document.getElementById('numconnects');
    numReq.innerText--;
    
}

function addUser(element)
{
    var numConn = document.getElementById('yourconnects');
    numConn.innerText++;
}