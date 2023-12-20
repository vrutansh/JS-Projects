var inp = document.querySelector("input");


var data = [
    {name: "harsh", src:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"},
    {name: "harshita", src:"https://plus.unsplash.com/premium_photo-1683134080778-aaa686741d0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"},
    {name: "harshika", src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRyYWl0fGVufDB8fDB8fHww"},
    {name: "vrutansh", src:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "vrutanshii", src:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"},
]

var pers = "";
data.forEach(function(elem){
      pers += `<div class="person">
     <div class="img">
         <img src="${elem.src}" alt="">
     </div>
     <h4>${elem.name}</h4>
 </div>`
})

document.querySelector(".people").innerHTML = pers;

inp.addEventListener("input",function(){
  var match = data.filter(function(e){
       return e.name.startsWith(inp.value)
    })
    var newuseres = "";
   match.forEach(function(elem){
        newuseres += `<div class="person">
       <div class="img">
           <img src="${elem.src}" alt="">
       </div>
       <h4>${elem.name}</h4>
   </div>`
  })
  document.querySelector(".people").innerHTML = newuseres;
  
})