let member = true;
let adminGroup = false;

// El operador lógico && verifica si ambas condiciones son verdaderas (no cumple en este caso)
if (member && adminGroup) {
    console.log("Este miembro del grupo tiene permisos de administrador");
} else {
    console.log("Este miembro del grupo no tiene permisos de administrador");
}
