
function update_lp_links() {
	var el = document.getElementById('lp-links');
	if (!el) {
		return;
	}

	var load_from = el.getAttribute('data-load');
	if (!load_from) {
		return;
	}

    var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if (this.readyState != 4) {
			return;
		}

		if (this.status != 200) {
			return;
		}

		var result = this.responseText;

		try {
			var links = JSON.parse(result);
			for (var i=0; i<links.length; i++) {
				var anchor = document.createElement("a");
				anchor.setAttribute("href", links[i].link);
				anchor.className = "btn";
				anchor.appendChild(document.createTextNode(links[i].label));
				el.appendChild(anchor);
			}
		} catch(err) {}
	};

	try {
    	xhttp.open("GET", load_from, true);
		xhttp.send();
	} catch (err) {}

}

$(document).ready(function(){

	var vpWidth = $(window).width();

	//iCHECK
	$('input').iCheck({
		checkboxClass: 'icheckbox_flat-blue',
		radioClass: 'iradio_flat-blue'
	});

	//CUSTOM SELECT MASTER
	$('select').customSelect();

	//ACCORDION
	$('.accordion .header').click(function(){
		$(this).toggleClass('active');
		$(this).next('.content').slideToggle();
	});

	//MODAL OPEN
	$('.modal-trigger').click(function(e){
		e.preventDefault();
		var thisData = $(this).attr('data-modal-trigger');
		$('.overlay[data-modal="'+thisData+'"]').addClass('show');
		$('body').addClass('no-scroll');
	});

	//MODAL CLOSE
	$('.modal-close').click(function(e){
		e.preventDefault();
		$('.overlay').removeClass('show');
		$('body').removeClass('no-scroll');
	});

	//MENU TOGGLE
	$('.menu-toggle').click(function(e){
		e.preventDefault();
		$('.navigation-container').toggleClass('show');
	});

	//RESPONSIVE
	if(vpWidth >= 769){
		
	}

	if(vpWidth <= 768 && vpWidth >= 481){
		
	}

	if(vpWidth <= 480){
		
	}

	update_lp_links();
});

