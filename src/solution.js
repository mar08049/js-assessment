// create Comment class here
function Comment(commentContent, imageId) {
  this.id = imageId;
  this.commentContent = commentContent;
}

Comment.all = []; //get all comments

Comment.prototype.findImage = function() {
	Image.all[this.id].comments.push(this.commentContent); //push THIS comment into comments array in THIS Image
	return Image.all[this.id]; //return comment id
}

Comment.prototype.commentEl = function() {
	return `<li id="${Image.all[this.id].comments.length}">${this.commentContent}</li>` //give comment an li tag with id of last image...add comment
}
//id is element by id inside the image.comments array
//

class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

    init() {
    this.addCommentFormListener();
  }

  addCommentFormListener() {
      let self = this; //maintain original reference to this

      this.$addCommentForm.on('click', 'input[type="submit"]', function(e){ //on submit
        let imageId = parseInt($(this).parents('ul').data('id')); //set imageId to id in searched parents matching UL
        let commentDesc = $(this).prev('input[type="text"]').val(); //set var to previous element to text. get value
        $(this).prev('input[type="text"]').val(""); //clear form, sets val to empty
        let newComment = new Comment(commentDesc, imageId); //create new comment
        e.preventDefault(); // prevent default action(page refresh)
        self.render(newComment); //renders comment
        newComment.findImage(); //pushes comment into comments array for image
      });
    }
}

 CommentsController.prototype.render = function(commentObj) {
    $(`ul[id="comments-${commentObj.id}"]`).append(commentObj.commentEl()); //on the id, append the comment li
  }
