


function closeBox()
{
    var box = document.getElementById("cookiebox");
    box.remove();
}

//OK this is way better than previous attempt

function convertTemps(ele){
    console.log(`Convert to ${ele.value}`);

    var highTemp = document.querySelectorAll("#hightemp");
    var lowTemp = document.querySelectorAll("#lowtemp");
   
       
    for(var i = 0; i < 4; i++)
    {
        if(ele.value === 'C'){
            console.log("C");
            
            lowTemp[i].innerText = Math.round((lowTemp[i].innerText- 32)/ 1.8);
            highTemp[i].innerText = Math.round((highTemp[i].innerText -32)/1.8);
    }
        else if(ele.value === 'F'){
            console.log("F");
            highTemp[i].innerText = Math.round((highTemp[i].innerText  * 1.8) + 32);
            lowTemp[i].innerText  = Math.round((lowTemp[i].innerText  * 1.8) + 32);
        }

    }
    
    //it's a mess if you don't round it

  
    
}


function alertme()
{
    alert('Loading weather report...');
}
