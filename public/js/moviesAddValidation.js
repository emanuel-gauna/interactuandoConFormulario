window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');
    let $errores = document.querySelector("ul.errores");
    let $form =  document.querySelector(".form");formulario
    let arrayErrores = [];
    let inputTitle = document.querySelector("div#title");
    let $inputRating = document.querySelector("#rating");//calificacion
    let $inputAwards = document.querySelector("#awards");//premios
    let $inputLength = document.querySelector("#length");//duracion
    

    $inputRating.addEventListener("blur", (e) => {
    switch (true) {
        case !$inputRating.value.trim() :
            $errores.innerText = `el valor ${$inputRating.name} no puede venir vacio`;
            $inputRating.classList.add("is-invalid");
            $errores.classList.add("is-invalid");
            arrayErrores.push($errores.value);
            break;
        case $inputRating.value.trim() && $inputRating.value >= 0 && $inputRating.value <= 10:
            $inputRating.classList.remove("is-invalid");
            $inputRating.classList.add("is-valid");
            break;
            default:
                $errores.innerText = `el valor ${$inputRating.name} no puede ser mayor a 10 ni menor a 0`;
                $inputRating.classList.add("is-invalid");
                $errores.classList.add("is-invalid");
                arrayErrores.push($errores.value);
                break; 
            }
            
        })
    $inputAwards.addEventListener("blur", (e) => {
    switch (true) {
        case !$inputAwards.value.trim() :
            $inputAwards.classList.add("is-invalid");
            $errores.innerText = ` el valor ${$inputAwards.name} no puede venir vacio `;
            $errores.classList.add("is-invalid");
            arrayErrores.push($errores.value);
            break;
        case $inputAwards.value.trim() && $inputAwards.value >= 0 && $inputAwards.value <= 10:
            $inputAwards.classList.remove("is-invalid");
            $inputAwards.classList.add("is-valid");
            break;
            default:
                $inputAwards.classList.add("is-invalid");
                $errores.innerText = ` el valor ${$inputAwards.name} no puede ser mayor a 10 ni menor a 0 `;
                $errores.classList.add("is-invalid");
                arrayErrores.push($errores.value);
                break; 
            }
            
        })
    $inputLength.addEventListener("blur", (e) => {
    switch (true) {
        case !$inputLength.value.trim() :
            $errores.innerText = ` el valor ${$inputLength.name} no puede venir vacio `;
            $inputLength.classList.add("is-invalid");
            $errores.classList.add("is-invalid");
            arrayErrores.push($errores.value);
            break;
        case $inputLength.value.trim() && $inputLength.value >= 60 && $inputLength.value <= 360:
            $inputLength.classList.remove("is-invalid");
            $inputLength.classList.add("is-valid");
            break;
            default:
                $inputLength.classList.add("is-invalid");
                $errores.innerText = ` el valor ${$inputLength.name} no puede ser mayor a 360 ni menor a 60 `;
                $errores.classList.add("is-invalid");
                arrayErrores.push($errores.value);
                break; 
            }
            
        })
        

    $form.addEventListener("submit", function(e){
        e.preventDefault();
        const FORM_ELEMENTS = e.target.elements;
        console.log($form);

        for (let i = 0; i < FORM_ELEMENTS.length; i++) {
            const element = FORM_ELEMENTS[i];
            if(element.value == ""){
              element.classList.add = "is-invalid" 
            }
        }
        let elementosConErrores = document.querySelectorAll(".is-invalid")
        let errores = elementosConErrores.length > 0;

        if(errores){
            $errores.innerText = "hay errores en el formulario";
            $errores.classList.add("alert-warning");
            
        }else{
            $errores.innerText = "La pelicula se guardo correctamente";
            $errores.classList.add("is-valid");
            $form.submit()
        }
    })
}