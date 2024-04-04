document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.nav').classList.toggle('active');
});

$(document).ready(function() {
  $('#contact-form').submit(function(event) {
    event.preventDefault(); 
    const formData = $(this).serialize();

    $.ajax({
      type: 'POST',
      url: $(this).attr('action'),
      data: formData,
      dataType: 'json',
      encode: true
    })
   .done(function(data) {
      if (data.success) {
        alert('Message sent successfully!');
        $('#contact-form')[0].reset();
      } else {
        alert('Error: ' + data.message);
      }
    })
   .fail(function(xhr, textStatus, errorThrown) {
      alert('Error: ' + textStatus + ' ' + errorThrown);
    });
  });
});
