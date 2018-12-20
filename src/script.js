var input = document.getElementById("search").value;
input.addEventListener("keyup", function (event) {
    event.preventDefault();
   /* if (event.keyCode === 13) {
        window.open("https://www.google.com/search?q=" + input + "&rlz=1C1GTPM_enUS820US820&oq=" + input + "&aqs=chrome..69i57j69i60l2j69i61j69i60j35i39.1143j0j7&sourceid=chrome&ie=UTF-8");
    }*/
    queryGoogle(input);
});



function importJQuery(){
    let newScriptTag = document.createElement("script");
    newScriptTag.src = "https://code.jquery.com/jquery.min.js";
    document.body.appendChild(newScriptTag);
}

importJQuery();


function queryGoogle(request){
    //First, we have to urlencode the input
    const input = encodeURI(request);
    
    //Next, we make an HTTP request to google.com
    const url = "https://www.google.com/search?q=" + input + "&rlz=1C1GTPM_enUS820US820&oq=" + input + "&aqs=chrome..69i57j69i60l2j69i61j69i60j35i39.1143j0j7&sourceid=chrome&ie=UTF-8";
    
    $.ajax({
        url:url,
        method:"get",
        success:function(data){
            //Now we have the raw HTML. For now, let's write it to the screen
            document.write(data);
        }
    });
}
