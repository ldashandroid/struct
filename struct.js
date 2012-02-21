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
        $('#' + settings['prefix'] + "Button").click(function() {
            var key, value;
            key = $('#' + settings['prefix'] + 'Key').val();
            value = $('#' + settings['prefix'] + 'Value').val();
            
        });
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
    elements = elements + "<span id='"+ settings['prefix']  +"Button'>Add</span>"
    return elements;
}

function tables(settings) {
    elements = "<table id='" + settings['prefix'] + "Table'>";
    elements = elements + "<thead><th>" + settings['key'] + "</th><th>" + settings['value'] + "</th><th>&nbsp;</th></thead>";
    elements = "<tbody></tbody></table>";
    return elements;
}

function addRecord(settings, key, value) {
    elements = "<tr><td>" + key + "</td><td>" + value + "</td>";
    elements = elements + "<td><span></span></td></tr>";
    return elements;
}
