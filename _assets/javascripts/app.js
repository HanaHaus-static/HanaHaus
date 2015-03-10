//= require vendor/jquery.min
//= require vendor/bootstrap.min

// animate scroll to anchor
$('a[href^=#]').click(function(e) {
    e.preventDefault(); 
    var dest = $(this).attr('href'); 
    $('html,body').animate({ scrollTop: $(dest).offset().top }, 300); 
});

// hide the "more" link 
$('a[href*=#more]').click(function(e) {
    $(e.target.parentElement).hide();
});
