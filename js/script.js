$(document).ready(function() {
	$("#dark_mod").hide();
	$('#call').click(function(e) {
		e.preventDefault();
		$("#dark_mod").fadeIn();
		$('#close_c').click(function(e) {
			$("#dark_mod").hide();
		});
	});
	
	$('.topmenu ul li').each(function () {if (this.getElementsByTagName("a")[0].href == location.href) this.className = "active";});
	
	jQuery(function($){

		$(".phone").mask("+7 (999) 999-9999");

		$(".mask_phone").mask("+7 (999) 999-9999");

		$(".rdate").mask("99.99.9999");

		$(".vdate").mask("99.99.9999");

	 });

})();