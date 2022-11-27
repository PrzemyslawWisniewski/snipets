// Mono on one chanel audio on YouTube 

var context = new AudioContext(); 
var audioElement = context.createMediaElementSource(document.getElementsByTagName("video")[0]); 
context.destination.channelCount = 1; 
audioElement.connect(context.destination);