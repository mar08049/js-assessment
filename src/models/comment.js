// create Comment class here
function Comment(commentContent, imageId) {
  this.id = imageId;
  this.commentContent = commentContent;
}

Comment.all = []; //get all comments

Comment.prototype.findImage = function() {
	Image.all[this.id].comments.push(this.commentContent); //push the THIS comment into comments array in Image
	return Image.all[this.id]; //return image id
}

Comment.prototype.commentEl = function() {
	return `<li id="${Image.all[this.id].comments.length}">${this.commentContent}</li>` //give comment an li tag with id of last image...add comment
}
