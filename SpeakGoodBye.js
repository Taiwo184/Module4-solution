
(function (window){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var i = 0; i < names.length; i++)
    var  byeSpeaker = {};
    name = names[i];
   var speakWord = "Good Bye";
   byeSpeaker.speak = function(name){
       console.log(speakWord + " " + name);
   } 
  
 
 window.byeSpeaker = byeSpeaker;
})(window);

