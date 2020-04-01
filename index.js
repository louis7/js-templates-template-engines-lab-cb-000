

function createPost(){
  //retrieve the commeenter name , comments and the template

  let commenterName = document.getElementById('commenterName').value
  let commets = document.getElementById('commentText').value
  let commentTemplate =document/getElementById('comment-template').innerHTML

  //find the location where we will dynamicaly add our comment
  let commentsDiv = document.getElementById('comments');


  //make it a dinamic template by giving it to lodash

  let templateFn = _.template(commentTemplate);


  //execute template function with JSON object for the interpolated values
  let templateHTML = templateFn({ comment: comment, commenter: commenter });

  //append rather than replace!
  commentsDiv.innerHTML += templateHTML;


}

createPost();
