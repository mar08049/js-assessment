

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
       $ul.html(""); //get the html contents of UL
       json.forEach(function(comment){ //for each json, perform function
         $ul.append(comment.commentEl); // appends comment desc in li tags
       });
    });
  });


  CommentController.prototype.addCommentFormListener = function(){
      $('.add-comment').on('click', function(e){// on add-comment, run function
        e.preventDefault(); //prevent default action
        $.ajax({          //ajax post request
          type: "POST",
          url: "index.html",
          data: $(e.target.form).serialize(), //unsure about data at this point
          dataType: "JSON"
        }).success(function(response) { //on success,create new comment with a name and imageId
           let comment = new Comment(response.commentContent, response.imageId);
            $ul.append(comment); //append new comment to page using render() function
        })
      })
    }
  }
}
