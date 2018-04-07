class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

    init() {
    this.addCommentFormListener();
  }

  addCommentFormListener() {
      let self = this;
      this.$addCommentForm.on('click', 'input[type="submit"]', function(e){
        let imageId = parseInt($(this).parents('ul').data('id'));
        let commentDesc = $(this).prev('input[type="text"]').val();
        $(this).prev('input[type="text"]').val(""); //clear form
        let newComment = new Comment(commentDesc, imageId); //create new comment
        e.preventDefault();
        self.render(newComment);
        newComment.findImage();
      });
    }
}

 CommentsController.prototype.render = function(commentObj) {
    $(`ul[id="comments-${commentObj.id}"]`).append(commentObj.commentEl());
  }
