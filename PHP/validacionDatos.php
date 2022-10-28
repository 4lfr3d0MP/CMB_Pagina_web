<?php 

//correo al que se enviara
$destinatario = 'ney.barreto.flores@gmail.com';


    $asunto = $_POST['nombre'];
    $email = $_POST['email'];
    $fecha = $_POST['date'];
    $hora = $_POST['time'];
  //  $mensaje= $_POST['datos adicionales'];
    

function enviar(){
    $header ="Enviado desde CBM";
   $mensajeCompleto = "agendo: " . $asunto . "\n Dia: " . $fecha .  "\n hora: " . $hora . "\n correo: " . $email  ;
    //enviando mensaje
    mail($destinatario, $asunto, $mensajeCompleto, $header);
   
        echo "<script>alert('correo enviado exitosamente') </script>";
        echo"<script>setTimeout(\"location.href='index.html'\",1000) </script>";
    
}
    


if(isset($_POST['submit'])){
if(empty($asunto)){ 
    echo "<p>*Agrega tu nombre</p>";
}
if(empty($email)){ 
    echo "<p >*Agrega tu email</p>";
}else{
    enviar();
}
if(empty($fecha)){ 
    echo "<p >*Agrega fecha</p>";
}
if(empty($hora)){ 
    echo "<p >*Agrega hora</p>";
}
}

?>




