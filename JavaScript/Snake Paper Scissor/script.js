const computerchoice=Math.floor(Math.random() * 3);
console.log(computerchoice)

const snake_clk=document.getElementById("snake")
const waters=document.getElementById("water")
const gun=document.getElementById("gun")
const results=document.getElementById("result")
const choice=document.getElementById("choice")


const refresh=function(){

    setTimeout(function(){
        window.location.reload(1);
     }, 5000);
}

// const gamePlay=function() {
//     //
// }

// const snake_clk_evnt=snake.addEventListener ('click',function(){
    snake_clk.addEventListener ('click',function(){
    console.log("snake click")
    storedInput=0
    console.log(storedInput)
    //if block starts
    if(computerchoice==0)
    {
        results.innerHTML="<h2>Tie</h2>"
        results.style.color='#ff8503'
        choice.innerHTML=""
        refresh()
        
       
    }
    else if (computerchoice==1 )
    {
        // results.innerHTML="win"
        results.innerHTML="<h2>WIN</h2>"
        results.style.color='green'
        // choice.innerHTML="**Computer Choice:Water"
        choice.innerHTML=`<span h6 id="choice" style="color :white" >**Computer: </h6></span><h5 style="color:rgb(245, 239, 239)">Water</h5>`
        refresh()

    }
    else{
        results.innerHTML="<h2>Loose</h2>"
        results.style.color='red'
        choice.innerHTML=`<span h6 id="choice" style="color :white" >**Computer: </h6></span><h5 style="color:rgb(245, 239, 239)">Gun</h5>`
        refresh()
    }
})

        
    
     //if block ends
    //  const water_clk_evnt=w
   waters.addEventListener('click',function(){

    console.log("water click")
    storedInput=1
    console.log(storedInput)
    // return(storedInput)
     //if block starts
     if(computerchoice==1)
     {
        results.innerHTML="<h2>Tie</h2>"
        results.style.color='#ff8503'
        choice.innerHTML=""
        refresh()
     }
     else if (computerchoice==0 )
     {
        results.innerHTML="<h2>Loose</h2>"
        results.style.color='red'
        choice.innerHTML=`<span h6 id="choice" style="color :white" >**Computer: </h6></span><h5 style="color:rgb(245, 239, 239)">Snake</h5>`
        refresh()
 
     }
     else{
        results.innerHTML="<h2>WIN</h2>"
        results.style.color='green'
        choice.innerHTML=`<span h6 id="choice" style="color :white" >**Computer: </h6></span><h5 style="color:rgb(245, 239, 239)">Gun</h5>`
        refresh()
     }
       //if block ends
})
// const gun_clk_evnt=g
gun.addEventListener('click',function(){

    console.log("gun click")
    storedInput=2
    console.log(storedInput)
    // return(storedInput)
      //if block starts
      if(computerchoice==2)
      {
        results.innerHTML="<h2>Tie</h2>"
        results.style.color='#ff8503'
        choice.innerHTML=""
        refresh()
      }
      else if (computerchoice==1 )
      {
        results.innerHTML="<h2>Loose</h2>"
        results.style.color='red'
        choice.innerHTML=`<span h6 id="choice" style="color :white" >**Computer: </h6></span><h5 style="color:rgb(245, 239, 239)">Water</h5>`
        refresh()
  
      }
      else{
          results.innerHTML="<h2>WIN</h2>"
        results.style.color='green'
        choice.innerHTML=`<span h6 id="choice" style="color :white" >**Computer: </h6></span><h5 style="color:rgb(245, 239, 239)">Snake</h5>`
        refresh()
      }
        //if block ends

})


