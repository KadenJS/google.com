var input = document.getElementById("search").value();
input.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        window.open("https://www.google.com/search?q=" + input + "&rlz=1C1GTPM_enUS820US820&oq=" + input + "&aqs=chrome..69i57j69i60l2j69i61j69i60j35i39.1143j0j7&sourceid=chrome&ie=UTF-8");
    }
});