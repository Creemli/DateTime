/**
 * Created by lixiaoxi on 15/10/29.
 * @description
 */
(function($) {
  $.mobiscroll.i18n.en = $.extend($.mobiscroll.i18n.en, {
    setText : '确定',
    cancelText : '取消'
  });
  var curr = new Date().getFullYear();
  var opt = {};

  opt.date = {
    preset : 'date'
  };
  opt.datetime = {
    preset : 'datetime',
    minDate : new Date(2015, 3, 10, 9, 22),
    maxDate : new Date(2017, 7, 30, 15, 44),
    stepMinute : 1,
    height: 30,
    width: 60
  };
  opt.time = {
    preset : 'time'
  };

  window.bindTimeEvents = function() {
    $('#test').val('').scroller('destroy').scroller($.extend(opt['datetime'], {
      theme : 'ios',
      mode : 'scroller',
      display : 'modal',
      lang : 'en',
      showLabel : true,
      dateOrder : 'yymmD dd'
    }));
  }
})(jQuery);