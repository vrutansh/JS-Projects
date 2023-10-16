var arr = [
    {dp:"https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2034&q=80",
    story:"https://images.unsplash.com/photo-1583119274460-b8f6c2ae887e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60"
   },

   {dp:"https://images.unsplash.com/photo-1583511666445-775f1f2116f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    story:"https://images.unsplash.com/photo-1583513702439-2e611c58e93d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60"
   },

   {dp:"https://images.unsplash.com/photo-1575859431774-2e57ed632664?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8S08zVFU5RXZ4S2N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
   story:"https://images.unsplash.com/photo-1568106640696-a04935b09b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0MjQwMTYxMnx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60"
   },
 
   {dp:"https://images.unsplash.com/photo-1554224311-beee415c201f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
   story:"https://images.unsplash.com/photo-1595729148514-bb2f497f8f54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
   },
   {dp:"https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60",
   story:"https://images.unsplash.com/photo-1549775924-433bdc7ea7a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80"
   },
   
]
 
var stories = document.querySelector("#stories")
var clutter = ""
arr.forEach(function(elem,idx){
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div> `
})

stories.innerHTML = clutter

stories.addEventListener("click", function(dets){
   document.querySelector("#full-screen").style.display = "block"
   document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

   setTimeout(function(){
    document.querySelector("#full-screen").style.display = "none"
   },2000)
})