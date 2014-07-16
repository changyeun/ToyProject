function getDom() {
  function returnIntVal(val) {
    if(typeof val == 'string') {
      return parseInt(val.replace(/[^-\d\.]/g, ''));
    } else {
      return val;
    }
  }

  $(document).mouseup(function(event) {
    var target = jQuery(event.target);

    var offset = {
      top: returnIntVal(target.offset().top) + returnIntVal(target.css('padding-top')),
      left: returnIntVal(target.offset().left) + returnIntVal(target.css('padding-left')),
      width: returnIntVal(target.innerWidth()) - returnIntVal(target.css('padding-left')) - returnIntVal(target.css('padding-right')),
      height: returnIntVal(target.innerHeight()) - returnIntVal(target.css('padding-top')) - returnIntVal(target.css('padding-bottom')),
    }
  });

  return;
}