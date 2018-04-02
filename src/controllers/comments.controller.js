class CommentsController extends Comment {
  constructor() {
    super();
    this.$addCommentForm = $('.add-comment')
  }

  init() {
  }

  CommentsController.prototype.render = $(function(){
    $.getJSON(this.href).success(function(json){ //on success, append comment
       var $ul = $(`ul.${this.imageId}`); //set ul var to the comments ul div
       $ul.html(""); //get the html contents of the variable
       json.forEach(function(comment){ //for each json, perform function
         $ul.append(comment.commentEl); // appends comment desc in li tags
       });
    });
  });


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
           let comment = new Comment(response.comment, response.imageId);
            $ul.append(comment.render());
        })
      })
    }
  }
}
