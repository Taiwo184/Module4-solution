
(function (window){ 
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var i = 0; i < names.length; i++)
        var helloSpeaker = {};
        name = names[i];
        var speakWord = "Hello";
        helloSpeaker.speak = function (name){
            console.log(speakWord + " " + name);
        } 
   
window.helloSpeaker = helloSpeaker;
})(window);
