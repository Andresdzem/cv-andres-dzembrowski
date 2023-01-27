document.getElementById ('presen').onpointerover = 
    function(){
        document.getElementById ("presentacion-titulo").style.color= "black";
        document.getElementById ("presentacion").style.color= "black";
        }  
document.getElementById ('presen').onclick = 
    function(){
        document.getElementById ("presentacion-titulo").style.color= "lightgray";
        document.getElementById ("presentacion").style.color= "lightgray";
        }   
        
document.getElementById ('dat').onpointerover = 
    function(){
        document.getElementById ("datos-titulo").style.color= "black";
        document.getElementById ("datos").style.color= "black";
         } 
document.getElementById ('dat').onclick = 
    function(){
        document.getElementById ("datos-titulo").style.color= "lightgray";
        document.getElementById ("datos").style.color= "lightgray";
         }
         
document.getElementById ('dire').onpointerover = 
    function(){
        document.getElementById ("direccion-titulo").style.color= "black";
        document.getElementById ("direccion").style.color= "black";
        }  
document.getElementById ('dire').onclick = 
    function(){
        document.getElementById ("direccion-titulo").style.color= "lightgray";
        document.getElementById ("direccion").style.color= "lightgray";
        }   
             
document.getElementById ('mai').onpointerover = 
    function(){
        document.getElementById ("mail-titulo").style.color= "black";
        document.getElementById ("mail").style.color= "black";
        }      
document.getElementById ('mai').onclick = 
    function(){
        document.getElementById ("mail-titulo").style.color= "lightgray";
        document.getElementById ("mail").style.color= "lightgray";
        }          

document.getElementById ('cel').onpointerover = 
    function(){
        document.getElementById ("celular-titulo").style.color= "black";
        document.getElementById ("celular").style.color= "black";
        } 
document.getElementById ('cel').onclick = 
    function(){
        document.getElementById ("celular-titulo").style.color= "lightgray";
        document.getElementById ("celular").style.color= "lightgray";
        }

const getValueInput = () =>{
    let inputValue = document.getElementById("preg").value; 
        if (inputValue == "si"){
            document.getElementById ("respuesta").style.color = "white";
            document.getElementById ("negativa").style.color = "black";
            }
        else{
              document.getElementById ("negativa").style.color = "white";
              document.getElementById ("respuesta").style.color = "black";
            }
}        