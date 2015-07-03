$(document).ready(function(){

	var tab = Array;
	tab[1] = '#accueil';
	tab[2] = '#entreprise';
	tab[3] = '#projet';
	tab[4] = '#magento';
	tab[5] = '#bilan';
	tab[6] = '#credits';
	var active = 1;
	$('.list-group-item').bind('click', function(){
		var elem = $(this);
		var id = elem.attr('id');
		if(tab[id] != tab[active]) {
			$(tab[active]).slideToggle('slow');
			active = id;
			$(tab[active]).slideToggle('slow');
		}
	});
});