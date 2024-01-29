const buttons=document.querySelectorAll('.button')
// const b=document.body.getElementsByTagName("h1")
// console.log(b)
// b[0].textContent="vikku"
// console.log(buttons);

const body = document.querySelector("body")
// console.log(body);
buttons.forEach(function(button){
    // console.log(button);

    button.addEventListener("mouseover",function(e){

        // console.log(e)
        // console.log(e.target)

        

       if(e.target.id==="green")
        {
            body.style.backgroundColor=e.target.id
            const b=document.body.getElementsByTagName("h1")
            b[0].textContent="You Clicked green"
    
        }
        
        else if(e.target.id==="red"){
            body.style.backgroundColor=e.target.id
            const b=document.body.getElementsByTagName("h1")
            b[0].textContent="You Clicked red"
        }
        
        else if(e.target.id==="yellow")
        {
            body.style.backgroundColor=e.target.id
            const b=document.body.getElementsByTagName("h1")
            b[0].textContent="You Clicked Yellow"
        }
        
        else if(e.target.id==="blue")
        {
            body.style.backgroundColor=e.target.id
            const b=document.body.getElementsByTagName("h1")
            b[0].textContent="You Clicked blue"
        }
      
        
       
        
    }
  
        
   
    )
    

 });

