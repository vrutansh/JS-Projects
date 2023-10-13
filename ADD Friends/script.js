 var a = document.querySelector("h5");
 var add = document.querySelector("#add");
 var flag = 0;

add.addEventListener("click", function(){
    if (flag == 0) {
     a.innerHTML = "Friends";
     a.style.color = "green";
     add.innerHTML = "Remove Friend";
      flag = 1;
    }
    else{
        a.innerHTML = "Removed";
        a.style.color = "red";
        add.innerHTML = "Add Friend";
        flag = 0;    
    }
})

