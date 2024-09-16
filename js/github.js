// step - 1
document.getElementById('text').addEventListener('keyup', function(event){
    const typingElement = event.target.value;
    const enableBtn = document.getElementById('delete-element')
    if (typingElement === 'delete') {
        enableBtn.removeAttribute('disabled')
    }else{
        enableBtn.setAttribute('disabled', true)
    }
})

// step - 2
document.getElementById('delete-element').addEventListener('click', function(){
    const removeElement = document.getElementById('heading-element');
    removeElement.style.display = "none";
})