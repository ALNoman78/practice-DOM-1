// // step - 1
// document.getElementById('text').addEventListener('keyup', function(event){
//     const typingElement = event.target.value;
//     const enableBtn = document.getElementById('delete-element')
//     if (typingElement === 'delete') {
//         enableBtn.removeAttribute('disabled')
//     }else{
//         enableBtn.setAttribute('disabled', true)
//     }
// })

// // step - 2
// document.getElementById('delete-element').addEventListener('click', function(){
//     const removeElement = document.getElementById('heading-element');
//     removeElement.style.display = "none";
// })


// // section -02 

// document.getElementById('change-element').addEventListener('click', function(){
//     const inputElement = document.getElementById ('new-text');
//     const textElement = inputElement.value
//     console.log(textElement);

//     const changeHeaingElement = document.getElementById('cng-heading');
//     changeHeaingElement.innerText = textElement;
//     inputElement.value = "";
// })