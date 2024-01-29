

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  const random=getRandomInt(100)
// console.log(random);
  

 const btn_clk=document.getElementById("btn1")
 const displaymse=document.getElementById('result')//win or losse
 const displayhelp=document.getElementById('help')
 const attempts=document.getElementById('counter')//mouse counter
 const rem=document.getElementById('remain')
 const input=document.getElementById('inputtxt')// input text
 const span=document.getElementById('remainatmpt')

 

 //counters value yaha thi
 let counter=0
let remAtt=10
// span.innerHTML="Remaning attempts:"+remAtt
rem.innerHTML="<b>"+remAtt+"</b>"


 btn_clk.addEventListener('click',function(){
    const rr = document.getElementById('inputtxt')
    
    counter=counter+1
    remAtt=remAtt-1
    // attempts.innerHTML=+counter+" Attempts"
    // rem.innerHTML=remAtt+ " remaining"
    if(counter>6)
    {
        rem.innerHTML="<b>"+remAtt+"</b>"
     rem.style.color='red'
    //  rem.innerHTML.b.style.color='brown'
    }
    else{
        rem.innerHTML="<b>"+remAtt+"</b>"
        // rem.innerHTML="Remaining attempts:<b>"+remAtt+"</b>"
        rem.style.color='green'

    }

    const gameplay=function(){

        const valrang=function(){

            if(random > Number(rr.value) && random!==Number(rr.value) )
            {
            // console.log("value is low")
            displayhelp.innerHTML="Value is low"
            displaymse.innerHTML=""
            }
        
            else {
            //  console.log("Value is high")
             displayhelp.innerHTML="Value is High"
             displaymse.innerHTML=""
        
                }
        }
    
    
        // console.log(rr.value)
        
        if(random==Number(rr.value))
        {
            console.log("won")
            displaymse.innerHTML="<h2>You won in " +counter+" attempts</h2>"
            displaymse.style.color='green'
            displayhelp.innerHTML=""
            // attempts.innerHTML=""
            span.innerHTML=""
            rem.innerHTML=""
            btn_clk.disabled=true
    
            
    
        }
        else{
            // console.log("loose")
            // displaymse.innerHTML="<h2>You Lost</h2>"
            // displaymse.style.color='red'
            valrang()
    
        }
    

   

   
}


if((Number(rr.value)>100)||(Number(rr.value)<0)||Number(rr.value)==""||isNaN(rr.value))
{
    
    displayhelp.innerHTML="Numbers between 1-100 are allowed" 
    displaymse.innerHTML=""  
       let newatmpt=3
       newatmpt=newatmpt-counter
    attempts.innerHTML="Remaining:"+newatmpt   
    rem.innerHTML="" 
    span.innerHTML=""  
    if(counter>=3)
    {     

       displaymse.innerHTML=""
       displayhelp.innerHTML=""
       attempts.innerHTML=""
       rem.innerHTML="Disqualified !!!"
       rem.style.color='red';
        btn_clk.disabled=true
      
    }
      
    //   btn_clk.disabled=true
    // }

    

    
}
else{
         if(remAtt==0)
             {     

                displaymse.innerHTML="<h2>Better luck next time :(</h2>"
                displayhelp.innerHTML="Computer picked "+random
                attempts.innerHTML=""
               rem.innerHTML="Attempts Exhausted"
               span.innerHTML=""

               btn_clk.disabled=true

             }

        else{
            
              gameplay()
            }
 }
 
    


 })



  
  
  