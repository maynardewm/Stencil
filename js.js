// -----------------------------------------------------------
// -----------------------------------------------------------
//
// Stencil JS Core
//
// Version: 0.1
// Created: 08/27/13
//
// Copyright (c) 2013 Electronic Methods. All rights reserved.
//
// -----------------------------------------------------------
// -----------------------------------------------------------

var jq=jQuery.noConflict();
	
// -----------------------------------------------------------
// -----------------------------------------------------------
//
// Module Title: Equal Span Heights
//
// Version: 1.0
// Created: 08/27/13
//
// Purpose: This module takes each span in a row and makes 
// them all have the same height unless there is only one span 
// per line.
//
// Details: This module is useful when you want to have 
// background colors and or borders on your spans. If you 
// don't make all of the spans in a row have the same height 
// and the have background colors and or borders and the spans 
// have a different amount of content the background color and 
// or border will stop at different points.
//
// -----------------------------------------------------------
// -----------------------------------------------------------

function equalSpanHeights() {
	// For each row needed so you only make the spans on that
	// row equal to eachother's heights not every span on 
	// the page
	jq('.row').each(function() {
		var tallestHeight = 0;
		jq(this).children('[class*="span"]').each(function() {
			// Clear the current style if it exists
			if(jq(this).attr('style', 'height')) {
				jq(this).removeAttr('style', 'height');
			}
			var curHeight = jq(this).outerHeight();
			if(curHeight > tallestHeight) {
				tallestHeight = curHeight;
			}
		});
		jq(this).children('[class*="span"]').each(function() {
			// If the span is floated (ie on it's own line and
			// not shared with another span) make all the spans
			// on that line of equal height.
			if(jq(this).css('float') == 'left' || jq(this).css('float') == 'right') {
				jq(this).css('height', tallestHeight);
			}
		});
	});
}

// -----------------------------------------------------------
// ------------------------ End Module -----------------------
	
// -------------------- Doc Ready Function -------------------

jq(document).ready(function(){ 
	equalSpanHeights();
});
	
// ----------------- Window Resize Function ------------------

jq(window).resize(function() {
	equalSpanHeights();
});