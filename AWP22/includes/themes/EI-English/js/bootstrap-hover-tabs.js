(function ($) {
  $(function () {
    $(document).off('click.bs.tab.data-api', '[data-hover="tabs"]');
    $(document).on('mouseenter.bs.tab.data-api', '[data-toggle="tabs"], [data-hover="tabs"]', function () {
      $(this).tab('show');
    });
  });
})(jQuery);