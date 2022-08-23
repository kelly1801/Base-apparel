
const requiredMessage = document.querySelector('.error-message')   
const requiredIcon = document.querySelector('.error-icon')
document.querySelector( "form" )
.addEventListener( "invalid", function( event ) {
    event.preventDefault();
}, true );


function newRequiredMessage() {
    requiredMessage.classList += " error-message-invalid"
    requiredIcon.classList   += " error-message-invalid"
}

