/* archivo JavaScripts */

/** Aseguro quwe cargo todo el contenido */
$(document).ready(function(){

    /* Smooth Scroll */
    $("a").click(function(event){
      event.preventDefault();
      var gato=this.hash;
  
      $("html").animate(
        {
          scrollTop:$(gato).offset().top - 55,
        },
        800
      );
    });

    /** Popover */
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    });

    /** Tooltips */
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    });
  
    /** Modal */
    var myModal = document.getElementById('myModal')
    var myInput = document.getElementById('myInput')
    myModal.addEventListener('shown.bs.modal', function () {
      myInput.focus()
    })
  
  
  });