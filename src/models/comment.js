// create Comment class here
function Comment(commentContent, imageId) {
  this.id = imageId;
  this.commentContent = commentContent;
  Comment.all.push(this.commentContent);
}

Comment.all = [];

Comment.prototype.findImage = function() {
	Image.all[this.id].comments.push(this.commentContent);
	return Image.all[this.id];
}

Comment.prototype.commentEl = function() {
	return `<li id="${Image.all[this.id].comments.length}">${this.commentContent}</li>`;
}
