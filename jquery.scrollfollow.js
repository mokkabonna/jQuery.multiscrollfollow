/* jQuery scrollfollow plugin, inspired by gmail on android 
* By Martin Hansen http://martinhansen.no
* MIT Licensed.
*/
(function($) {
	$.fn.scrollfollow = function(options) {
		var self = this,
			offsets = [],
			win = $(window),
			cloneclass = 'placeholder',
			defaultOptions = {
				marginTop: 0,
				zIndexStart: 1,
				speed: 100,
				activeClass : 'active',
				fixedClass : 'fixed',
				absoluteClass : 'absolute'
			};

		var opts = $.extend({}, defaultOptions, options);

		this.each(function() {
			offsets.push($(this).offset().top)
		});

		var container = opts.container || $(this).parent();
		if(!container instanceof jQuery) container = $(opts.container); //make container a jquery object
		offsets.push(container.offset().top + container.height())

		win.on('scroll', function() {
			var scrolltop = win.scrollTop();
			self.each(function(i, element) {
				var $this = $(this);

				//If we have scrolled 
				if (scrolltop + self.eq(i).outerHeight(true) + opts.marginTop > offsets[i + 1]) {

					$this.css({
						top: offsets[i + 1] - self.eq(i).outerHeight(true),
						width: $this.width(),
						zIndex: opts.zIndexStart + i,
						position: 'absolute'
					}).addClass([opts.absoluteClass, opts.activeClass].join(' '));

				} else if (scrolltop > offsets[i] - opts.marginTop) {
					$this.before($this.clone().addClass(cloneclass).addClass('clone-' + i));
					var inplace = $this.data('inplace');
					var animating = $this.data('animating');
					if (animating) return;

					$this.css({
						top: inplace ? opts.marginTop : 0,
						width: $this.width(),
						zIndex: opts.zIndexStart + i,
						position: 'fixed'
					}).addClass([opts.fixedClass, opts.activeClass].join(' '))


					if (!inplace) {
						$this.data('animating', true);
						$this.animate({
							top: opts.marginTop
						}, opts.speed, function() {
							$this.data('inplace', true);
							$this.data('animating', false);
						});
					}
				} else {
					$('.clone-' + i).remove();
					$this.data('inplace', false);
					$this.css({
						position: 'static'
					}).removeClass([opts.fixedClass, opts.absoluteClass, opts.activeClass].join(' '));
				}
			})
		});

		return this;
	};

})(jQuery);
