
jQuery(function($){
  $(document).foundation();

  $('.wpcf7').on('mailsent.wpcf7',function(){
    if($('.reveal').is(':visible')){
    $('.reveal:visible')
    .foundation('close')
    .on('closed.zf.reveal', function(){
      swal({
        title:"Спасибо за сообщение!",
        text: "Наш сотрудник свяжется с Вами \nв ближайшее время.",
        type: "success",
        timer: 6000,
        confirmButtonClass: 'btn-rgb',
        buttonsStyling: false,
      });
      $('.reveal').off('closed.zf.reveal');
    });
    }else{
      swal({
        title:"Заявка принята!",
        text: "Наш сотрудник перезвонит\nв ближайшее время.",
        type: "success",
        timer: 6000,
        confirmButtonClass: 'btn-rgb',
        buttonsStyling: false,
      });
    }
  });


  function scrollbarSize () {
    var div = $(
        '<div class="antiscroll-inner" style="width:50px;height:50px;overflow-y:scroll;'
      + 'position:absolute;top:-200px;left:-200px;"><div style="height:100px;width:100%"/>'
      + '</div>'
    );

    $('body').append(div);
    var w1 = $(div).innerWidth();
    var w2 = $('div', div).innerWidth();
    $(div).remove();

    return w1 - w2;
  };
  
  // List of elements which need to be padded
  var paddables = [
      { el: $('body') },
      /*{ el: $('header') },
      { el: $('footer') }*/
  ];
  $.each(paddables, function(i, e){
      e.padding = parseInt(e.el.css('padding-right'));
  });
  var scrollbarSize = scrollbarSize(); 
  $(window).on('open.zf.reveal', function(){
      $.each(paddables, function(i, e){
          e.el.css({ 'padding-right': scrollbarSize + e.padding });
      });
  });
  $(window).on('closed.zf.reveal', function(){
      $.each(paddables, function(i, e){
          e.el.css({ 'padding-right': e.padding });
      });
  });


  function isVisible( row, container ){
    var elementTop = $(row).offset().top,
        elementHeight = $(row).height(),
        containerTop = container.scrollTop(),
        containerHeight = container.height();

    return ((((elementTop - containerTop) + elementHeight) > 0) && ((elementTop - containerTop) < containerHeight));
  }
  function vivibleblocks(){
    $('.animate_me').each(function(){
      if(isVisible($(this), $(window))){
        $(this).addClass('active');
      };
    });
  }
  vivibleblocks();
  $(window).scroll(function(){
    vivibleblocks();
  });

});
