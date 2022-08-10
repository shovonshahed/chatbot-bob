function talk(){
    var know ={
        "Can I ask you a question?":"Sure",
        "What happened":"Whoa, chill out!",
        "What the heck?":"Calm down, I know what I'm doing!",
        "You are too friendly":"Fine. Be that way!",
    };
    
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";

    if(user in know) {
        document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }
    else {
        document.getElementById('chatLog').innerHTML = "Whatever";
    }
}