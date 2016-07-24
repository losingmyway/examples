(function($){ //required
	var defaultOption = {
		debug: false,
		stylekey: ''
	};

	//removeStyleValue: name of plugin
	$.fn.removeStyleValue = function(options) {

		var settings = $.extend(defaultOption, options ); //extend default value, if options is passed to settings will get values from options

		//add your code process your business
		
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

		return this;
	};

}(jQuery));//required