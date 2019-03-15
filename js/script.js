var paperMenu = {
	$window: $('#paper-window'),
	$paperFront: $('#paper-front'),
	$hamburger: $('.hamburger'),
	offset: 1800,
	pageHeight: $('#paper-front').outerHeight(),

	open: function() {
		this.$window.addClass('tilt');
		this.$hamburger.off('click');
		$('#container, .hamburger').on('click', this.close.bind(this));
		this.hamburgerFix(true);
		console.log('opening...');
	},
	close: function() {
		this.$window.removeClass('tilt');
		$('#container, .hamburger').off('click');
		this.$hamburger.on('click', this.open.bind(this));
		this.hamburgerFix(false);
		console.log('closing...');
	},
	updateTransformOrigin: function() {
		scrollTop = this.$window.scrollTop();
		equation = (scrollTop + this.offset) / this.pageHeight * 100;
		this.$paperFront.css('transform-origin', 'center ' + equation + '%');
	},
	//hamburger icon fix to keep its position
	hamburgerFix: function(opening) {
			if(opening) {
				$('.hamburger').css({
					position: 'absolute',
					top: this.$window.scrollTop() + 30 + 'px'
				});
			} else {
				setTimeout(function() {
					$('.hamburger').css({
						position: 'fixed',
						top: '30px'
					});
				}, 300);
			}
		},
	bindEvents: function() {
		this.$hamburger.on('click', this.open.bind(this));
		$('.close').on('click', this.close.bind(this));
		this.$window.on('scroll', this.updateTransformOrigin.bind(this));
	},
	init: function() {
		this.bindEvents();
		this.updateTransformOrigin();
	},
};

paperMenu.init();

// Tabs
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

var $tabs = $('.tabs > div'), _currhash, $currTab;

function showTab() {
   if($currTab.length>0) {
     $tabs.removeClass('active');
     $currTab.addClass('active');
   }
}
/* find the tabs and 'unlink' the id to prevent page jump */
$tabs.each(function() {
   var _id = $(this).attr('id');
   $(this).attr('id',_id+'_tab');
   /* eg we have given the tab an id of 'tab1_tab' */
});

/* set up an anchor 'watch' for the panels */
function anchorWatch() {
  if(document.location.hash.length>0) {
    /* only run if 'hash' has changed */
    if(_currhash!==document.location.hash) {
       _currhash = document.location.hash;
       /* we only want to match the 'unlinked' id's */
       $currTab = $(_currhash+'_tab');
       showTab();
   }
  }
}
setInterval(anchorWatch,300);
