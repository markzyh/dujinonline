$(function(){

    hHeigh();
    mmdiv();
    newlih();
    $(".casenav-swip").css({
        visibility: 'visible',
        opacity: '1'
    });

    windoww = $(window).width();
    $(".img_load").each(function(){
        var _this = $(this);
        var _thisPc = _this.data("pc");
        var _thisIph = _this.data("iph");

        if( windoww < 769 ){
            _this.attr({
                src: _thisIph
            });
        }else{
            _this.attr({
                src: _thisPc
            });
        }
    })
    
// 底部免费电话接通
    $(".inpdivinp").on("input", function() {
        var v = $(this).find('input');
        var vN = $(this).find('input').val();
        v.focus(function(){
            v.siblings('label').css("display", "none");
        });
        v.blur(function(){
            if (vN == null ||vN == "") {
                v.siblings('label').css("display", "block");
            } else {
                v.siblings('label').css("display", "none");
            }
        });
    }).trigger("input");
    $(".inpdivinp input").each(function() {
        var vN = $(this).val();
        if (vN == null ||vN == "") {
            $(this).siblings('label').css("display", "block");
        } else {
            $(this).siblings('label').css("display", "none");
        }
    })

// 地图
    /*$(".map_sh").click(function(){
        $(".maptan1div").addClass("vis");
    })*/
    $(".maptanbut").click(function(){
        $(".maptan1div").removeClass("vis");
    })

//导航按钮
    $('.navToggle').click(function () {
        if($(".telnav").hasClass("vis")){
            $(this).removeClass("vis");
            $(".telnav").removeClass("vis");
            $(".telbg").removeClass("vis");
        }else{
            $(this).addClass("vis");
            $(".telnav").addClass("vis");
            $(".telbg").addClass("vis");
        }
    });
    $(".telbg").click(function(){
        if($(".telnav").hasClass("vis")){
            $(".telnav").removeClass("vis");
            $(this).removeClass("vis");
        }else if($(".telseach").hasClass("vis")){
            $(".telseach").removeClass("vis");
            $(this).removeClass("vis");
        }
    })


// tab切换
    function tab(tab_list,tab_div,tab_on){
        $(tab_list).on(tab_on,function(){
            $(this).addClass('active').siblings().removeClass('active');
            $(tab_div).eq($(this).index()).addClass('vis').siblings().removeClass('vis');
        })
    }
    tab(".maplist li",".mapcontul","click");
    tab(".maplist li",".map li","click");

    if($(window).width()<769){
        setTimeout(function(){
            $(".casenavs").css({
                visibility: 'visible'
            });
        },100);
    }

// 加入我们
    $('.joinlist').delegate('.joinlitit', 'click', function(){
        if($(this).siblings(".joinlitxt").is(":hidden")){
            $(this).addClass("active");
            $(this).siblings(".joinlitxt").slideDown();
            $(this).parent(".joinlist li").siblings(".joinlist li").find(".joinlitxt").slideUp();
            $(this).parent(".joinlist li").siblings(".joinlist li").find(".joinlitit").removeClass("active");
        }else{
            $(this).removeClass("active");
            $(this).siblings(".joinlitxt").slideUp();
        }
    })
    $(".joinlitit").each(function(){
        if($(this).hasClass("active")){
            $(this).siblings(".joinlitxt").show();
        }else{
            $(this).siblings(".joinlitxt").hide();
        }
    });
    setTimeout(function(){
        $(".casediv").css({
            visibility: 'visible'
        });
    },100);

// 新闻详情
    $(window).scroll(function(){
        var hHeight = $(window).height();
        var top = $(window).scrollTop();
        if(top>hHeight/2){
            $(".casetxt-ml").css({
                bottom:"-80%"
            })
            $(".ml-prev").css({
                left:"0"
            })
            $(".ml-next").css({
                right:"0"
            })
            $(".ml-but").addClass("ml-buts");
        }else{
            $(".casetxt-ml").css({
                bottom:"0px"
            })
            $(".ml-prev").css({
                left:"8%"
            })
            $(".ml-next").css({
                right:"8%"
            })
            $(".ml-but").removeClass("ml-buts");
        }
        if(top>0&&!$(".fotxfdiv_zhan").hasClass("vis")){
            $(".head-container").addClass("scrollh");
            $(".fotxfdiv").addClass("vis");
        }else{
            $(".head-container").removeClass("scrollh");
            $(".fotxfdiv").removeClass("vis");
        }
    });
    $(".xfxxico").click(function(){
        $(".fotxfdiv").removeClass("vis");
        $(".fotxfdiv_zhan").addClass("vis");
    })
    $(".fotxfdiv_zhan .i_img").click(function(){
        $(".fotxfdiv").addClass("vis");
        $(".fotxfdiv_zhan").removeClass("vis");
    })
    $(".tanxx").click(function(){
        $(".tandiv").removeClass("vis");
        setTimeout(function(){
            $(".tandiv").removeClass("block");
        },500)
    })
    setTimeout(function(){
        $(".tandiv").addClass("vis");
        $(".tandiv").addClass("block");
    },500)

    $(".like-img").click(function(){
        $(".like small img").css({
            opacity: '0',
            transform: 'scale(0.2)'
        });
        $(".like").addClass("active");
        setTimeout(function(){
            $(".like small img").eq(1).css({
                opacity: '1',
                transform: 'scale(1)'
            });
        },100);
    })

    $(".contfm select").on("change",function(){
        $(this).css({
            color: '#333'
        })
    })
    


// 服务企业-logo展开收起
    fwlogo();

})

$(window).resize(function(){
    hHeigh();
    mmdiv();
    newlih();
    windoww = $(window).width();
    $(".img_load").each(function(){
        var _this = $(this);
        var _thisPc = _this.data("pc");
        var _thisIph = _this.data("iph");

        if( windoww < 769 ){
            _this.attr({
                src: _thisIph
            });
        }else{
            _this.attr({
                src: _thisPc
            });
        }
    })
})

function mmdiv(){
    setTimeout(function(){
        if($(window).width()>768){
            $(".hm1flbox").height($(".hm1frbox").height());
            $(".item.slick-slide").height($(".hm1frbox").height());
            $(".home1").css({
                visibility: "visible"
            });
            $(".zl2-txt .hm1fldiv").css({
                visibility:"visible"
            })
        }else if($(window).width()<=768&&$(window).width()>480){
            $(".hm1flbox").height(450);
            $(".item.slick-slide").height(450);
            $(".home1").css({
                visibility: "visible"
            });
        }else{
            $(".hm1flbox").height(272);
            $(".item.slick-slide").height(272);
            $(".home1").css({
                visibility: "visible"
            });
        }
    },100);
}

// 屏幕高度
function hHeigh(){
    var hHeight = $(window).height();
    $(".banner").height(hHeight);
    if(hHeight>580){
        $(".banner-casetxt").height(hHeight);
    }
    $(".caseban-img").height(hHeight);
}
// 服务企业-logo展开收起
function fwlogo(){
    $(".serveul").show();
    var hee = $(".servelidiv small img").height();
    $(".serveul").height(hee);
    setTimeout(function(){
        $(".serveul").each(function(){
            var serveulh = $(this).find(".servelidiv:eq(0)").height();
            $(this).height(serveulh);
        })
    },5000);
    $(".fwmore a").click(function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            var servedivh1 = $(this).parent(".fwmore").siblings(".serveul").find(".servelidiv:eq(0)").height();
            $(this).parent(".fwmore").siblings(".serveul").height(servedivh1);
            $(this).text("展开更多");
        }else{
            $(this).addClass("active");
            var servedivh2 = $(this).parent(".fwmore").siblings(".serveul").find("div").height();
            $(this).parent(".fwmore").siblings(".serveul").height(servedivh2);
            $(this).text("收起");
        }
    })
}
// 点赞
function like(){
    if($(".like").hasClass("active")){
        $(".like").removeClass("active");
    }else{
        $(".like").addClass("active");
    }
}
function newlih(){
    setTimeout(function(){
        $(".newli dd").height($(".newli dt img").height());
        $(".newli dd").show();
    },300);
}
// 页面搜索悬浮弹框
function seach(){
    var windoww = $(window).width();
    if(windoww>768){
        $(".seachdiv").addClass("vis");
        $(".telbg").addClass("vis");
    }else{
        $(".telseach").addClass("vis");
        $(".telbg").addClass("vis");
    }
}
// 手机端搜索
function seachxx(){
    $(".seachdiv").removeClass("vis");
    $(".telbg").removeClass("vis");
}
// 手机端导航
function seachtelxx(){
    $(".telseach").removeClass("vis");
    $(".telbg").removeClass("vis");
}
function navtelxx(){
    $(".telnav").removeClass("vis");
    $(".telbg").removeClass("vis");
}
function initScrollToTop(){
    $("html,body").animate({scrollTop: 0},1000);
}