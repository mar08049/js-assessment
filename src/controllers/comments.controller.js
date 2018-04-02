class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
  }

  CommentsController.prototype.render = $(function(){
    $.getJSON(this.href).success(function(json){ //on success, append comment
       var $ul = $("div.comments ul"); //set ul var to the comments ul div
       $ul.html(""); //get the html contents of the variable
       json.forEach(function(comment){ //for each json, perform function
         $ul.append("<li>" + comment.description + "</li>"); // appends comment desc in li tags
  };

  // selects the appropriate `ul` for this comment to be added to
  // appends the new comment element to this `ul`

  CommentController.prototype.addCommentFormListener = function(){
    let elements = document.getElementsByTagName(':submit')
    for (let i = 0 < elements.length; i++) {
      $(':submit').on('click', function(e){
        e.preventDefault();
        $.ajax({
          type: "POST",
          url: e.target.form.action,
          data: $(e.target.form).serialize(),
          dataType: "JSON"
        }).success(function(response){
          console.log(response)
        })
      })
    }
  }
  // iterates through each comment form and adds an eventlistener to trigger a function on form submit
  // function should grab the imageId + comment and create a new Comment with those arguments
  // execute the render function on that found image object to append the new comment
}
