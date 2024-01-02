// Navbar Close 
function closeNavbar() {
    // Close the navbar by toggling the collapse class
    $('.navbar-collapse').collapse('hide');
  }
  
  // Close the navbar when clicking outside of it
  document.addEventListener('click', function (event) {
    var target = event.target;
    if (!target.closest('.navbar')) {
      closeNavbar();
    }
  });

  