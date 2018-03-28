class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
  }

  CommentsController.prototype.render(commentObject)

  // selects the appropriate `ul` for this comment to be added to
  // appends the new comment element to this `ul`
  // Don't try to copy the `ImagesController.render` function because that is implemented differently

  CommentController.prototype.addCommentFormListener = function(data){
    $.ajax({
      type: 'POST',
      url: '',
      data: data,
      headers: {}
    })
  }
  // iterates through each comment form and adds an eventlistener to trigger a function on form submit
  // function should grab the imageId + comment and create a new Comment with those arguments
  // execute the render function on that found image object to append the new comment
}
