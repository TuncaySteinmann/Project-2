

let  cliks = 0;



function plus() {
     cliks++;
     
 if ( cliks > 50 ) {
     cliks = cliks + 1;
} 
if(cliks > 200  && cliks < 201){
     cliks = cliks + 5 - 2 ;
     alert("geweldig je hebt 200 gehaald")
 }



document.getElementById("teller").innerText =   cliks;
};

function reset(){
     if (cliks = 100) {
          cliks = 0;  
                 
     } 
     document.getElementById("teller").innerText =   cliks;
};

function keer(){
   
     cliks = cliks * 2;
     if(cliks > 100000000  && cliks < 200000000 ){
          alert("je hebt 100000000 gehaald ")
          
     }
   

     document.getElementById("teller").innerText =   cliks;
};

