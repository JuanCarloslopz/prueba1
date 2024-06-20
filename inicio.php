<?php
    
    //$ejemplo = $_GET["id"];
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $opcion = $_POST["opcion"];
    $resultado; 


////////////////////////////////////////////////////
    switch ($opcion) {
        case "guardar":
            $resultado = "Primer Caso";
          break;
            
          case "modificar":
            $resultado = "Segundo Caso";
          break;

          case "opt3":
            $resultado = "Terser Caso";
          break;
       
       
       
       
       
       
        }
/////////////////////////////////////////////////////////////////
      
        
     echo json_encode( $resultado) ;
////////////////////////////////////////////////////////////


     
    
?>