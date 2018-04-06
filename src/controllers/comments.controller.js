class CommentsController extends Comment {
  constructor() {
    super();
    this.$addCommentForm = $('.add-comment')
  }

  init() {
  }

  CommentsController.prototype.render = function(){
       let $ul = $(`ul.comments-${this.imageId}`); //set ul var to the comments ul
       $ul.forEach(function(comment){ //for each ul, perform function
         $ul.append(comment.commentEl()); // appends comment in li tags using commentEl prototype
       });
    });
  });


  CommentsController.prototype.addCommentFormListener = function(){
      $addCommentForm.on('click', function(e){// on add-comment, run function
        e.preventDefault(); //prevent default action
        $.ajax({          //ajax post request
          type: "POST",
          url: "index.html",
          data: $(e.target.form).serialize(), //unsure about data at this point
          dataType: "JSON"
        }).success(function(response) { //on success,create new comment with a name and imageId
           let $ul = $(`ul.comments-${this.imageId}`);
           $ul.append(response.render());
      });
    }
  }
}
