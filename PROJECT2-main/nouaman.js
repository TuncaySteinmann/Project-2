

let  cliks = 0;



function plus() {
     cliks++;
     
 if ( cliks > 50 ) {
     cliks = cliks + 1;
} 
if(cliks > 200){
     cliks = cliks + 5 - 2 ;
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

     document.getElementById("teller").innerText =   cliks;
};

