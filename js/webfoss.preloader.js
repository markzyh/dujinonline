(function($){
  if ($.fn.preloader) return;
  $.fn.preloader=function(tconfig){
    var pl=$.fn.preloader;
    var config=$.extend({},pl.defaults,tconfig);
    var imglist=config.imglist;
    var onload=function(event){
	var obj=event.data.obj,count=obj.data(pl.d.unloaded)-1,e={},config=event.data.config;
	e[pl.event.percent]=1-(count/obj.data(pl.d.count));
	obj.triggerHandler($.Event(pl.event.update,e));
       (count>0) && obj.data(pl.d.unloaded,count) || finish(obj);
      }
    var finish=function(obj){
      obj.one(pl.event.prefinish,onfinish);
      obj.triggerHandler($.Event(pl.event.prefinish));
    }
    var onfinish=function(){
      config=$(this).data(pl.d.config);
      var obj=$(this);
/*      if (config.cleancontent){obj.html(obj.data(pl.d.content));obj.removeData(pl.d.content)}*/
	obj.removeData(pl.d.imglist);
	obj.trigger($.Event(pl.event.finish));
    }
    var load=function(){
      var tempimgs=[],imgcount=0,imglist=$.extend({},config.imglist),imgs;
      $(this).data(pl.d.config,config)
      imgs=$("a."+config.hrefclass,$(this)).get();
      for (img in (imgs)){
	    aImage=$(imgs[img]);
	    newimg=$("<img alt='' src='"+aImage.attr("href")+"'>").addClass(aImage.attr("class")).removeClass(config.hrefclass);
	    if (aImage.attr("id")){newimg.attr("id",aImage.attr("id"))}
	    newimg.insertAfter(aImage);
	    aImage.remove();
      };
      $('img[src]',this).each(function(){
        var imageurl=$(this).attr("src");
        imglist[imageurl]=imglist[imageurl] || {};
      });
      for (var img in imglist){imgcount++}
	if (imgcount==0){
	  finish($(this));
	}else{
	  $(this).data(pl.d.unloaded,imgcount).data(pl.d.count,imgcount);      
	  for (var img in imglist){
	    tempimgs.push($("<img/>").bind("error load",{obj:$(this),config:imglist[img]},onload).attr("src",img));
	  }
	  $(this).data(pl.d.imglist,tempimgs);
	  var e={};
	  e[pl.event.percent]=0;
	  $(this).trigger($.Event(pl.event.update,e));
	}
    }
    return this.each(load)
  }
  var pl=$.fn.preloader;
  pl.d={
    config:"__pl_data_config",
    count:"__pl_data_count",
    unloaded:"__pl_data_unloaded",
    imglist:"__pl_data_imglist",
    content:"__pl_data_content"
  };
  pl.event={
    finish:"preloadfinish",
    update:"preloadupdate",
    percent:"percent",
    prefinish:"__preload_pre_finish"
  };
  pl.defaults={
    imglist:{},
    hrefclass:"image"
  };
})(jQuery) 
