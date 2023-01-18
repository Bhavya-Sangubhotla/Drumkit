//detecting mouse click

for(var i = 0; i < document.querySelectorAll(".img-drum").length; i++){
    document.querySelectorAll(".img-drum")[i].addEventListener("click", function(){
        var buttoninnerHTML = this.innerHTML;
        console.log(buttoninnerHTML);
        AudioControls(buttoninnerHTML);
        buttonAnimation(buttoninnerHTML);
        
        
    });
}
    // detecting keypress
    document.addEventListener("keydown" , function(event){
        AudioControls(event.key);
        buttonAnimation(event.key);
    });


        function AudioControls(key){

            switch (key){

                case "w":
                    var tom1 = new Audio("tom-1.mp3");
                    tom1.play();
                    break;
    
                case "a":
                    var tom2 = new Audio("tom-2.mp3");
                    tom2.play();
                    break;
    
                case "s":
                    var tom3 = new Audio("tom-3.mp3");
                    tom3.play();
                    break;
    
                case "j":
                    var tom4 = new Audio("tom-4.mp3");
                    tom4.play();
                    break;
    
                case "d":
                    var kickBass = new Audio("kick-bass.mp3");
                    kickBass.play();
                    break;
    
                case "k":
                    var snare = new Audio("snare.mp3");
                    snare.play();
                    break;
    
                case "l":
                    var crash = new Audio("crash.mp3");
                    crash.play();
                    break;
                default: console.log(this.classList[1]);
            }
        }
    //action that needs to be done after button is clicked. 
 function buttonAnimation(key){
    document.querySelector("." + key).classList.add("clicked");
    setTimeout(function(){
        document.querySelector("." + key).classList.remove("clicked");
    } , 100);
 }

