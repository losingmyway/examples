(function($){
	var defaultOption = {
		debug: false,
		stylekey: ''
	};

	$.fn.removeStyleValue = function(options) {
		var settings = $.extend(defaultOption, options );
		if ( !settings.stylekey ) return false;
		var styleStr = $(this).attr('style');
		if ( defaultOption.debug ) {
			console.log('styleStr = ' + styleStr);
		}
		var items = styleStr.split(";");
		var newResult = '';
		for ( var i = 0; i < items.length; i++ )
		{
			if ( items[i] && items[i].indexOf(settings.stylekey) === -1 ) {
				newResult += items[i] + ';';
			}
		}
		if ( defaultOption.debug ) {
			console.log(items);
			console.log('new styleStr = ' + newResult);
		}
		$(this).attr('style', newResult);
	};

}(jQuery));