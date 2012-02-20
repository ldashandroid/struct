(function( $ ) {
  $.fn.Struct = function(options) {
    var settings = $.extend( {
       'prefix'  : 'struct_',
       'key'     : 'key',
       'value'   : 'value'
    }, options);
    
    return this.each(function() {
        var $this = $(this);
        $this.append(inputBoxes(settings));
        $this.append(tables(settings));
    });
    // Do your awesome plugin stuff here

  };
})( jQuery );

// First Thing Create Input Boxes Label
function inputBoxes(settings) {
    elements = "<label>" + settings['key'] + "</label>";
    elements = elements + "<input type='text' id='" + settings['prefix'] + "Key'></input>";
    elements = elements + "<label>" + settings['value'] + "</label>";
    elements = elements + "<input type='text' id='" + settings['prefix'] + "Value'></input>";
    return elements;
}

function tables(settings) {
    elements = "<table id='" + settings['prefix'] + "Table'>";
    elements = elements + "<thead><th>" + settings['key'] + "</th><th>" + settings['value'] + "</th></thead>";
    elements = "<tbody></tbody></table>";
    return elements;
}
