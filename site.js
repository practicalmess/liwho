$(document).ready(function() {
  $('.day_header').click((e) => {
    $('.sched-grids').addClass('hidden');
    $('.day_header').removeClass('active');
    $(e.target).addClass('active');
    const tableID = `#${e.target.id}_table`;
    $(tableID).removeClass('hidden');
  });
  $('#invert-button').click(() => {
  	$('body').toggleClass('inverted');
  });
});