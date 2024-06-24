const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
/*const ano = document.getElementById("ano").value;
const mes = document.getElementById("mes").value;
const dia = document.getElementById("dia").value;
const fechaNac = new Date(ano,mes,dia);*/
const fechaNac= document.getElementById("fecha_Nac")
const pais = document.getElementById('pais');
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings") 
let countries = [
    "Afganistán", "Albania", "Alemania", "Andorra", "Angola", "Antigua y Barbuda",
    "Arabia Saudita", "Argelia", "Argentina", "Armenia", "Australia", "Austria",
    "Azerbaiyán", "Bahamas", "Bangladés", "Barbados", "Baréin", "Bélgica",
    "Belice", "Benín", "Bielorrusia", "Birmania", "Bolivia", "Bosnia y Herzegovina",
    "Botsuana", "Brasil", "Brunéi", "Bulgaria", "Burkina Faso", "Burundi",
    "Bután", "Cabo Verde", "Camboya", "Camerún", "Canadá", "Catar", "Chad",
    "Chile", "China", "Chipre", "Ciudad del Vaticano", "Colombia", "Comoras",
    "Corea del Norte", "Corea del Sur", "Costa de Marfil", "Costa Rica", "Croacia",
    "Cuba", "Dinamarca", "Dominica", "Ecuador", "Egipto", "El Salvador",
    "Emiratos Árabes Unidos", "Eritrea", "Eslovaquia", "Eslovenia", "España",
    "Estados Unidos", "Estonia", "Etiopía", "Filipinas", "Finlandia", "Fiyi",
    "Francia", "Gabón", "Gambia", "Georgia", "Ghana", "Granada", "Grecia",
    "Guatemala", "Guinea", "Guinea-Bisáu", "Guinea Ecuatorial", "Guyana", "Haití",
    "Honduras", "Hungría", "India", "Indonesia", "Irak", "Irán", "Irlanda",
    "Islandia", "Islas Marshall", "Islas Salomón", "Israel", "Italia", "Jamaica",
    "Japón", "Jordania", "Kazajistán", "Kenia", "Kirguistán", "Kiribati", "Kuwait",
    "Laos", "Lesoto", "Letonia", "Líbano", "Liberia", "Libia", "Liechtenstein",
    "Lituania", "Luxemburgo", "Macedonia del Norte", "Madagascar", "Malasia",
    "Malaui", "Maldivas", "Malí", "Malta", "Marruecos", "Mauricio", "Mauritania",
    "México", "Micronesia", "Moldavia", "Mónaco", "Mongolia", "Montenegro",
    "Mozambique", "Namibia", "Nauru", "Nepal", "Nicaragua", "Níger", "Nigeria",
    "Noruega", "Nueva Zelanda", "Omán", "Países Bajos", "Pakistán", "Palaos",
    "Palestina", "Panamá", "Papúa Nueva Guinea", "Paraguay", "Perú", "Polonia",
    "Portugal", "Reino Unido", "República Centroafricana", "República Checa",
    "República del Congo", "República Democrática del Congo", "República Dominicana",
    "Ruanda", "Rumania", "Rusia", "Samoa", "San Cristóbal y Nieves", "San Marino",
    "San Vicente y las Granadinas", "Santa Lucía", "Santo Tomé y Príncipe",
    "Senegal", "Serbia", "Seychelles", "Sierra Leona", "Singapur", "Siria",
    "Somalia", "Sri Lanka", "Suazilandia", "Sudáfrica", "Sudán", "Sudán del Sur",
    "Suecia", "Suiza", "Surinam", "Tailandia", "Tanzania", "Tayikistán", "Timor Oriental",
    "Togo", "Tonga", "Trinidad y Tobago", "Túnez", "Turkmenistán", "Turquía",
    "Tuvalu", "Ucrania", "Uganda", "Uruguay", "Uzbekistán", "Vanuatu", "Venezuela",
    "Vietnam", "Yemen", "Yibuti", "Zambia", "Zimbabue"
];

form.addEventListener("submit", e => {
    e.preventDefault()
    let warning = ""
    let entrar = false
    emailValido = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0 -9-]+(?:\.[a-zA-Z0-9-]+)*$/
    
    if (nombre.value==="") {
        warning += "El campo nombre no puede estar vacio <br>"
        entrar = true
    }
    if (apellido.value=== "") {
        warning += "El campo apellido no puede estar vacio <br>"
        entrar = true
    }

    if (!emailValido.test(email.value)) {
        warning += "El email no es valido <br>"
        entrar = true
    }

    if (entrar) {
        parrafo.innerHTML = warning
    }
    else
        parrafo.innerHTML = "Enviado"
})

/*function validation(){
    if(nombre= null || nombre.length== 0 || /^\s+$/.test(nombre))
    return false;
  
    else if(apellido= null || apellido.length== 0 || /^\s+$/.test(apellido))
    return false;

    else if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0 -9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
    return false;

    else if(!isNaN(fechaNac))
    return false;
}*/