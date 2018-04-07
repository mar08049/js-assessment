function CommentsController() {
    this.$addCommentForm = $('.add-comment')
  }

CommentsController.prototype.render = function(){
     let $ul = $(`ul.comments-${this.imageId}`); //set ul var to the comments ul
     $ul.each(function(comment){ //for each ul, perform function
       $ul.append(comment.commentEl()); // appends comment in li tags using commentEl prototype
     });
  };

CommentsController.prototype.addCommentFormListener = function(){
    $(':submit').on('click', function(e){ // on add-comment, run function
      e.preventDefault(); //prevent default action
      $.ajax({          //ajax post request
        type: "POST",
        url: e.target.form.action,
        data: $(e.target.form).serialize(), //unsure about data at this point
        dataType: "JSON"
      }).success(function(response) { //on success,create new comment with a name and imageId
        debugger;
         let comment = new Comment(response.commentContent, response.imageId);
         let $ul = $(`ul.comments-${this.imageId}`);
         $ul.append(response.render(comment));
    });
  });
};

 CommentsController.prototype.init = function() {
   this.addCommentFormListener();
   this.render();

 };


window.CommentsController = CommentsController;
