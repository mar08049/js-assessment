// create Comment class here
class Comment extends Image {  //inheretence?
  constructor(id, commentContent, imageId) { //comment constructor
      super();
      this.commentContent = commentContent;
      this.imageId = imageId;
  }

  function allComments(){
    return Comment.all//get all the comments in array
  }

  Comment.prototype.commentEl = function() {
    let html = ''  //set html to empty string
    html += `<li id="comment_el">${this.commentContent}</li>`//add comment content to li tag
    return html //return html inside ul tag with the image id as the id
  }

  Comment.prototype.findImage = function(id){
    let image = Image.find(image => image.id === this.imageId) //set image equal to the found Image with params
    return image //return that image
  }
}

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
          data: formData, //unsure about data at this point
          dataType: "JSON"
        }).success(function(response) { //on success,create new comment with a name and imageId
           let comment = new Comment(response.commentContent, response.imageId);
           let $ul = $(`ul.comments-${this.imageId}`);
           $ul.append(response.render());
      });
    }
  }
}

//I was unable to get the feature working the way it should but I have built out these methods and functions
//the best I know how.
