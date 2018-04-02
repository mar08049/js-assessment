// create Comment class here
class Comment extends Image {
  constructor(id, comment, imageId) {
      super();

      this.comment = comment;
      this.imageId = imageId;
    }
  }

  allComments() {
    return this.comment.all//get all the comments for each instance
  }

  Comment.prototype.commentEl = function() {
    let html = ''
    html += `<li id="comment_el">${this.comment}</li>`
    return `<ul id=${this.imageId}> ` + html + '</ul>'
  }

  Comment.prototype.findImage = function(){
    let currentContent = Comment.find(image => image.id === this.imageId)
    this.comments.push(this.comment)
    return currentContent
  }
}

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

//I was unable to get the feature working the way it should but I have built out these methods and functions
//the best I know how.
