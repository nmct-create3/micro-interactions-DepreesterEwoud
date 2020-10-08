
function getDOMElements(){
    
}
/* function handleFloatingLabel(){

} */


function handlePasswordSwitcher() {
    
    let checkbox = document.querySelector(`.c-toggle-password__checkbox`);
    let passwordInput = document.querySelector(`.c-toggle-password__input`);
    checkbox.addEventListener(`change`, function(){

        if(checkbox.checked){
            passwordInput.type = "text";
            
            console.log("unchecked")
        }
        else{
            passwordInput.type = "password";
            console.log("checked")
        }
        


    })

}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    getDOMElements();
    //handleFloatingLabel();
    handlePasswordSwitcher();
});