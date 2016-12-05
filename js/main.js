function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);
  $('.welcome').hide();
  $('.welcome').fadeIn(300);

  $('.projects').hide();

  $('.projects-button').on('click', function() {
		$(this).next().slideToggle(400);
    $(this).toggleClass('active');
    $(this).text('Projects Viewed');
	});
  $('.welcome-button').on('click', function() {
      $('.welcome').fadeOut(500);
  });
}

$(document).ready(main);
