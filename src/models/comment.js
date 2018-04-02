// create Comment class here
class Comment extends Image {
  constructor(id, comment, imageId) {
      super();

      this.comment = comment;
      this.imageId = imageId;
    }
  }

  allComments() {
    return this.comment.all//get all the comments for each instance
  }

  Comment.prototype.commentEl = function() {
    let html = ''
    html += `<li id="comment_el">${this.comment}</li>`
    return `<ul id=${this.imageId}> ` + html + '</ul>'
  }

  Comment.prototype.findImage = function(){
    let currentContent = Comment.find(image => image.id === this.imageId)
    this.comments.push(this.comment)
    return currentContent
  }
}
