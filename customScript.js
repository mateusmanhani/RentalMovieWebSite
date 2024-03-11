$(document).ready(function() {
// Trailer button functionality
$('.trailer-btn').click(function() {
  var trailerUrl = $(this).data('trailer-url');
  var iframeWidth = 560; // iframe width
  var iframeHeight = 315; // iframe height
  var modalPadding = 30; // Adjust this value based on your modal's padding and desired spacing

  var iframeHtml = '<iframe width="' + iframeWidth + '" height="' + iframeHeight + '" src="' + trailerUrl + '?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

  $('.bd-example-modal-lg .modal-body').empty().append(iframeHtml);

  // Adjust modal dialog size dynamically
  $('.bd-example-modal-lg .modal-dialog').css({
    'max-width': (iframeWidth + modalPadding) + 'px' // Add some extra width for padding/borders
  });

  $('.bd-example-modal-lg .modal-content').css({
    'height': 'auto', // Set to auto to adjust height based on the content
    'min-height': (iframeHeight + modalPadding) + 'px' // Ensure the modal is tall enough
  });
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

/*Search movie by actor name*/

$(document).ready(function() {
  $('#searchInput').keyup(function() {
      var searchText = $(this).val().toLowerCase();
      $('.col').each(function() {
          var actorNames = $(this).data('actor').toLowerCase().split(', '); // Split names into an array
          var match = actorNames.some(function(name) { // Check if any name matches the search text
              return name.includes(searchText);
          });
          if (match) {
              $(this).show();
          } else {
              $(this).hide();
          }
      });
  });
});