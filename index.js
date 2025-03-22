/*Math.random() generates a decimal between 0 and 1.
Multiplying by 100 scales it up to 0 to 99.999....
Math.floor() rounds it down to the nearest whole number.
Adding 1 shifts the range to 1-100.*/
let randomNumber = Math.floor(Math.random() * 100) + 1;  

document.getElementById('btn').addEventListener('click',function(){
    let guess=document.getElementById('lbl');
    // console.log(guess.value)

    //saving guessed number
    let guessNumber=guess.value;

//checking for invalid 
  if ( (guess.value<=0) || (guess.value>100)) {
    alert("Error Code:309(Enter a valid Number)");
    guess.value="";  //clearing the input space
    return;
}
//checking for empty input field
  if (guess.value=="" ) {
    alert("Error Code:309(Enter a valid Number)");
    return;
  }
 guess.value="";//empty field if valid input

 
 //GAME LOGIC
 let result=document.querySelector('#op');
 let write=document.querySelector('#opb')
if (guessNumber<randomNumber) {
    result.style.background="#f54d4d";
    result.style.boxShadow="0px 0px 15px red"
    result.style.color="White"
    write.textContent="Guess Higher, Your guess:"+guessNumber 
}
else if (guessNumber>randomNumber) {
    result.style.background="#f54d4d";
    result.style.boxShadow="0px 0px 15px red"
    result.style.color="White"
    write.textContent="Guess Lower, Your guess:"+guessNumber 
}
else if(guessNumber==randomNumber){
    result.style.background="#67ec65";
    result.style.boxShadow="0px 0px 35px #04652c"
    result.style.color="White"
    write.textContent="🎉 Congratulations! 🎉You guessed the correct number! 🎯, The Number was:"+guessNumber
    opbb.textContent="Click here to Replay"
    //reloading on winning
    document.querySelector('#opbb').addEventListener("click",function(){
        location.reload();
    })
}
})
