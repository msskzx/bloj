$(document).ready( function() {

  /*
  |--------------------------------------------------------------------------
  | flash messages
  |--------------------------------------------------------------------------
  */
  $('div.alert').not('.alert-important').delay(3000).slideUp(300);

  /*
  |--------------------------------------------------------------------------
  | tags in form
  |--------------------------------------------------------------------------
  */
  $('#tag_list').select2( {
    placeholder: "Choose a tag",
    tags:true
  });

  /*
  |--------------------------------------------------------------------------
  | drag and drop in about
  |--------------------------------------------------------------------------
  */
  $( function() {
    $( "#draggable" ).draggable();

    $( "#droppable-magic" ).droppable({
      drop: function( event, ui ) {
        window.location.href = "http://localhost:8000/search?search=magic+trick";
      }
    });
  } );

  /*
  |--------------------------------------------------------------------------
  | submit form
  |--------------------------------------------------------------------------
  */
    $( function() {
    $( "#draggable" ).draggable();

    $( "#droppable-submit" ).droppable({
      drop: function( event, ui ) {
        document.getElementById("thaForm").submit();
      }
    });
  } );

  /*
  |--------------------------------------------------------------------------
  | create new tag
  |--------------------------------------------------------------------------
  */
  $('#create-tag-btn').popover({
      html : true,
      container: 'body',
      content: function() {
        return $("#create-tag-content").html();
      }
  });

  /*
  |--------------------------------------------------------------------------
  | text editor for the body
  |--------------------------------------------------------------------------
  */
  // tinymce.init({ selector:'textarea#article-body'});

});
