function validar(){

    var nombre, correo, direccion, region, comuna, monto, telefono, expresion;

    nombre = document.getElementById("nombre").value;
    correo = document.getElementById("correo").value;
    direccion = document.getElementById("direccion").value;
    region = document.getElementById("region").value;
    comuna = document.getElementById("comuna").value;
    monto = document.getElementById("monto").value;
    telefono = document.getElementById("telefono").value;

    expresion = /\w+@+\w+\.+[a-z]/;
    
    
    if(nombre === "" || correo === "" || direccion === "" || region === "" || comuna === "" || monto === "" || telefono === ""){
        alert("Todos los campos son obligatorios")
        return false;
    }
    else if (nombre.length>180){
        alert("El nombre es demasiado largo");
        return false;
    }    
    else if (correo.length>70){
        alert("El nombre es demasiado largo");
        return false;
    }
    else if (direccion.length>100){
        alert("El nombre es demasiado largo");
        return false;
    }
    else if (!expresion.test(correo)){
        alert("El correo es invalido")
        return false
    }
    else if (region.length>100){
        alert("El nombre es demasiado largo");
        return false;
    }
    else if (comuna.length>100){
        alert("El nombre es demasiado largo");
        return false;
    }
    else if (isNaN(monto)){
        alert("El monto ingresado no es un numero");
        return false;
    }
    else if (isNaN(telefono)){
        alert("El telefono ingresado no es un numero");
        return false;
    }

}