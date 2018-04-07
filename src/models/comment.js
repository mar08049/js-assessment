// create Comment class here
function Comment(comment, imageId) {
  this.id = imageId;
  this.commentContent = comment;
  Comment.all.push(this.commentContent);
}

 Comment.prototype.findImage = function() {
 	Image.all[this.id].comments.push(this.commentContent);
 	return Image.all[this.id];
 }

 Comment.prototype.commentEl = function() {
 	return `<li id="${Image.all[this.id].comments.length}">${this.commentContent}</li>`;
 }

  Comment.all = [];
