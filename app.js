//Compartir
const shareBtn = document.getElementById('shareBtn')
shareBtn.addEventListener('click', event => {
    if (navigator.share) {
        //drive
        navigator.share({
            text: 'Please read this great article: ',
            url: 'https://bit.ly/3O2QDxk'
        }).then(() => {
            console.log('Thanks for sharing!');
        })
            .catch((err) => console.error(err));
    } else {

        alert("The current browser does not support the share function. Please, manually share the link")
    }
});



const evento = document.getElementById('send')
const enviarFormulario =() => {

        let numero = document.getElementById('numero').value;
        let Drive = document.getElementById('drive').value;
        let mensaje = document.getElementById('mensaje').value;
       
        
var win= window.open(`https://wa.me/54${numero}?text=Hola soy brandon y esta es mi%20Tarjeta%20Web:%20${Drive}%0A%0Ahttps://bit.ly/3O2QDxk%0A
${mensaje}%0ANo te olvides ajendarme.`,'_blank');       
}
evento.addEventListener('click', enviarFormulario)
// copi
function copy(copyId){
    let inputElement = document.createElement("input");
    inputElement.type = "text";
    let copyText = document.getElementById(copyId).innerHTML;
    inputElement.value = copyText;
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    document.body.removeChild(inputElement);
    
    document.getElementById("alert").style.display = "block";
    setTimeout(function(){
        document.getElementById("alert").style.display = "none";
    }, 3000);
}


//Modal 
function modal_01() {
    Swal.fire({
        title: 'Scan me',
        text: 'https://bit.ly/3O2QDxk',
        imageUrl: 'https://res.cloudinary.com/dww4ftvvv/image/upload/v1668191429/iconos/qr-code_7_ok5zez.png',
        imageWidth: 300,
        imageHeight: 300,
    })
 }
 function modal_02() {
    Swal.fire({
        html: 'No disponible el Qr de pago',
        imageUrl: 'https://res.cloudinary.com/dcjkcl8po/image/upload/v1666386781/grafica/qr-code_x9dwaz.png',
        imageWidth: 400,
        imageHeight: 400,
        
    })
 }
 function modal_03() {
    Swal.fire({
        title: 'Qr copi cbu',
        imageUrl: 'https://res.cloudinary.com/dww4ftvvv/image/upload/v1666716202/iconos/qr-code_1_balzcn.png',
        imageWidth: 400,
        imageHeight: 400,
        
    })
 }
 function modal_04() {
    Swal.fire({
        title: 'Qr copi Alias',
        imageUrl: 'https://res.cloudinary.com/dww4ftvvv/image/upload/v1666716477/iconos/qr-code_2_iow3qs.png',
        imageWidth: 400,
        imageHeight: 400,
        
    })
 }
 function modal_05() {
    Swal.fire({
        imageUrl: 'https://res.cloudinary.com/dww4ftvvv/image/upload/v1668190527/iconos/Sin_t%C3%ADtulo-1_xo6nbc.png',
        imageWidth: 400,
        imageHeight: 400,
        
    })
 }

 function modal_06() {
    Swal.fire({
        html: '<p>Envía el comprobante por whatsapp</p>',
        imageUrl: 'https://res.cloudinary.com/dww4ftvvv/image/upload/v1666716900/iconos/qr-code_3_nje7rw.png',
        imageWidth: 400,
        imageHeight: 400,
        
    })
 }
 