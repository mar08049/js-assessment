// create Comment class here
class Comment extends Image {  //inheretence?
  constructor(id, commentContent, imageId) { //comment constructor
      super();
      this.commentContent = commentContent;
      this.imageId = imageId;
  }

  function allComments(){
    return Comment.all//get all the comments in array
  }

  Comment.prototype.commentEl = function() {
    let html = ''  //set html to empty string
    html += `<li id="comment_el">${this.commentContent}</li>`//add comment content to li tag
    return html //return html inside ul tag with the image id as the id
  }

  Comment.prototype.findImage = function(id){
    let image = Image.find(image => image.id === this.imageId) //set image equal to the found Image with params
    return image //return that image
  }
}
