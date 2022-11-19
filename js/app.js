const personas = [
    new Persona('Juan','Perez'),
    new Persona('Pedro','Hernandez')
];

function mostrarPersonas(){
    console.log('Cargando Personas...');
    let texto = '';

    for(let i of personas){
        console.log(i);
        texto += `<li>${i.nombre} ${i.apellido}</li>`;
    }

    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona(){
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    if (nombre.value != '' && apellido.value != ''){
        const persona = new Persona(nombre.value, apellido.value);
        personas.push(persona);
        mostrarPersonas();
    }

    else{
        console.log('Elementos no agregados');
    }
}