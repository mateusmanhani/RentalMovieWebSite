$(document).ready(function() {
    // Trailer button functionality
    $('.trailer-btn').click(function() {
      var trailerUrl = $(this).data('trailer-url');
      var iframeHtml = '<iframe width="560" height="315" src="' + trailerUrl + '?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
      $('.bd-example-modal-lg .modal-body').empty().append(iframeHtml);
    });
  
    // Clear the iframe when the modal is hidden
    $('.bd-example-modal-lg').on('hidden.bs.modal', function () {
      $(this).find('.modal-body').empty();
    });
  
    //Genre Filter functionality
    $('.genre-filter').click(function(e) {
        e.preventDefault(); // Prevent the default anchor link behavior
        var selectedGenre = $(this).data('genre');
        $('.col').each(function() {
          if (selectedGenre === "all") {
            $(this).show();
          } else {
            $(this).toggle($(this).data('genre') === selectedGenre);
          }
        });
      });
    });
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-list"); // Corrected the class name

hamburger.addEventListener("click", () => nav.classList.toggle("active"));