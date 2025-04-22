function randomPage(){
    var f = "html/";
    var p = [
        "index.html",
        "two.html",
        "three.html",
        "four.html",
        "five.html"
    ];
    var n = Math.floor(Math.random() * p.length);
    var url = window.location.pathname;
    var file = url.split("/").pop();
  
    if(file == "index.html"){
        if(n == 0){
            document.location = p[n];
        } else {
            document.location = f + p[n];
        }
    } else {
        if(n == 0){
            document.location = "../" + p[n];
        } else {
            document.location = p[n];
        }
    }
  
    console.log("Redirecting to: " + p[n]);
  }