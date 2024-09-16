// document.getElementById('btn-comment').addEventListener('click', function(){
//     const inputField = document.getElementById('input-field');
//     const postedComment = inputField.value
//     const newComment = document.createElement('p')
//     newComment.innerText = postedComment;
//     // step - 2
//     const commentPost = document.getElementById('comment-post');
//     commentPost.appendChild(newComment)
//     // again input-field empty
//     inputField.value = '';

// })









// task -2

    // step - 01
document.getElementById('btn-comment').addEventListener('click', function(){
    const inputField = document.getElementById('input-field')
    const inputValue = inputField.value;
    
    // step - 02

    const newComponent = document.createElement('p')
    newComponent.innerText = inputValue;
    console.log(newComponent);

    // step - 03

    const commentSection = document.getElementById('comment-post');
    commentSection.appendChild(newComponent);

    inputField.value = "";
})