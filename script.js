let openBar = document.getElementById("open-bar");
let lateralBar = document.querySelector("aside");
let show = true;



openBar.addEventListener("click",function(){
    if (show) 
    {
        lateralBar.style["width"] = "20%";
        lateralBar.style["display"] = "block";
        show = false;    
    }
    else
    {   
        lateralBar.style["display"] = "none";
        lateralBar.style["width"] = "0%";
        show = true;
    }
    
    
});




