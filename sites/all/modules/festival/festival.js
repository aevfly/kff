(function ($) {

Drupal.behaviors.festival = {
  attach: function (context){

    $('.text-format-wrapper', context).css('display', 'none');
    
    $('.form-item-sendemail input', context).click(function () {
        if (this.checked) {
          $('.text-format-wrapper', context).css('display', 'block');
        }else{
          $('.text-format-wrapper', context).css('display', 'none');
        }  
    });

  }
}

})(jQuery);