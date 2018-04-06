class Comment extends Image {  //inheretence?
  constructor(id, commentContent, imageId) { //comment constructor
      super();
      this.commentContent = commentContent;
      this.imageId = imageId;
    }
  }

  allComments() {
    return Comment.all//get all the comments in array
  }

  Comment.prototype.commentEl = function() {
    let html = ''  //set html to empty string
    html += `<li id="comment_el">${this.commentContent}</li>`//add comment content to li tag
    return '<div class=comments'
              `<ul id=comment_list_${this.imageId}> `
                  html
               '</ul>' //return html inside ul tag with the image id as the id
            '</div>'
  }

  Comment.prototype.findImage = function(id){     // id as arg
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
    let elements = document.getElementsByTagName(':submit')//set elements equal to contents of submit
    for (let i = 0 < elements.length; i++) {//for each element
      $('.add-comment').on('click', function(e){// on submit, run function
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
//I was unable to get the feature working the way it should but I have built out these methods and functions
//the best I know how.
