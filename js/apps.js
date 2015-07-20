pioneer = {} || pioneer;

(function(doc,$,undefined){

  "use strict";
  var fnav = $(".footer-nav-group h4>a"),
      country = $("#country"),
      dp_menu_select = $(".dp_menu_select"),
      dp_menu_option = $(".dp_menu_option"),
      dp_menu_option_list = $("li",dp_menu_option),
      cname =$(".cname"),
      cfilter = $("#country option");

  pioneer = {
    getDevice: function(){

      var envs = ['xs', 'sm', 'md', 'lg'],
      $el = $('<div>');
      $el.appendTo($('body'));

      for (var i = envs.length - 1; i >= 0; i--) {
        var env = envs[i];
        $el.addClass('hidden-'+env);
        if ($el.is(':hidden')) {
            $el.remove();
            return env;
        }
      }
    },
    init:function(){
      this.collapse();
      this.dp_custom();
    },
    dp_custom:function(){

      $(doc).click(function(e){
        if(e.target.className == "dp_menu_target"){
          dp_menu_option.show();
        }else{
          dp_menu_option.hide();
        }
      });

      dp_menu_option_list.on("click",function(e){
         cname.text(e.currentTarget.innerHTML);
         cfilter.val($(this).data("code"));
         cfilter.trigger("change");
      });
    },
    collapse:function(){
      if(this.getDevice() =="xs"){
          fnav.attr("data-toggle","collapse")
      }else{
        fnav.attr("href","javascript:return false;")
      }
    }
  };
})(document,jQuery);
$(function(){
  pioneer.init();
});
