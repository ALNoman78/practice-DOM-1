document.getElementById('btn-comment').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const postedComment = inputField.value
    const newComment = document.createElement('p')
    newComment.innerText = postedComment;
    // step - 2
    const commentPost = document.getElementById('comment-post');
    commentPost.appendChild(newComment)
    // again input-field empty
    inputField.value = '';

})