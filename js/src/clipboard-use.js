/*页面载入完成后，创建复制按钮*/
!function (e, t, a) {
  /* code */
  var initCopyCode = function(){
    var copyHtml = '';
    copyHtml += '<button class="btn-copy" data-clipboard-snippet="">';
    copyHtml += '  <i class="fa fa-globe"></i><span>copy</span>';
    copyHtml += '</button>';
    // $(".highlight").before(copyHtml);
    $(".highlight").wrap($('<div class="highlight-wrap"></div>'));
    $('.highlight-wrap').prepend(copyHtml);
    var clipboard = new ClipboardJS('.btn-copy', {
        target: function(trigger) {
            return trigger.nextElementSibling;
        }
    });
    clipboard.on('success', function(e) {
      toastPlug('复制成功!', 2000)
    });
  }
  initCopyCode();
  $('.highlight-wrap').each(function(){
    $(this).on('touchstart',function(){
      $(this).find('.btn-copy').css({'opacity':1});
    })
  })
  $('body').on('touchmove',function(){
    $('.btn-copy').css({'opacity':0});
  })
}(window, document);
