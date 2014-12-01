$(document).ready(function() {
  $('#ibm-cookie-preferences-link, #ibm-close-cookie-overlay').on('click', function(e) {
    e.preventDefault();
    $('#ibm-cloud-cookie-overlay').toggleClass('open');
  });
});
