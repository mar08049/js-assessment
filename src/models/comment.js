// create Comment class here
class Comment {
  constructor(comment, imageId) {
  this.comment = comment;
  this.imageId = imageId;
  }

  allComments() {
    return Comment.all//get all the comments
  }

  Comment.prototype.commentEl = function() {
    let html = ''
    html += `<li id="comment_el">${this.comment}</li>`
    return html
    //returns comment html
    // returns a string of html
    // html has an `li` tag with an `id` field and shows the comment

  }

  Comment.prototype.findImage = function(imageId){
    // given an `int` for an image id, returns the image object with that id
    // before return - adds current comment to image's comments property
  }
}
