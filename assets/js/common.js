// ハンバーガー
$(".btn-open").click(function () {
    $(this).toggleClass('active');
    $(".nav__h").toggleClass('active');
});

//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 200){//上から200pxスクロールしたら
		$('#btn-up').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
		$('#btn-up').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
	}else{
		if($('#btn-up').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
		$('#btn-up').removeClass('UpMove');//UpMoveというクラス名を除き
		$('#btn-up').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
		}
	}
}
	
	// 画面をスクロールをしたら動かしたい場合の記述
	$(window).scroll(function () {
		PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
	});

// #btn-upをクリックした際の設定
$('#btn-up a').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 300);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});

$(window).scroll(function() {
	let scrollTop = $(window).scrollTop();
	let areaTop =   $(".concept").offset().top / 3;
	if (scrollTop > areaTop) {
		$(".white").addClass("is-in");
	}else {
        $(".white").removeClass("is-in");
    }
});


//スクロールアクション
function fadeAnime(){

$('.blurTrigger').each(function(){ //blurTriggerというクラス名が
    var elemPos = $(this).offset().top+50;//要素より
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('blur');// 画面内に入ったらblurというクラス名を追記
    }else{
    $(this).removeClass('blur');// 画面外に出たらblurというクラス名を外す
    }
});

$('.fadeInTrigger').each(function(){ //fadeInTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeIn');// 画面内に入ったらfadeInというクラス名を追記
    }else{
    $(this).removeClass('fadeIn');// 画面外に出たらfadeInというクラス名を外す
    }
});

$('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
    }else{
    $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
    }
});

$('.zoomInTrigger').each(function(){ //zoomInTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('zoomIn');// 画面内に入ったらzoomInというクラス名を追記
    }else{
    $(this).removeClass('zoomIn');// 画面外に出たらzoomInというクラス名を外す
    }
});

$('.fadeRightTrigger').each(function(){ //fadeRightTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeRight');// 画面内に入ったらfadeRightというクラス名を追記
    }else{
    $(this).removeClass('fadeRight');// 画面外に出たらfadeRightというクラス名を外す
    }
});

$('.fadeLeftTrigger').each(function(){ //fadeLeftTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeLeft');// 画面内に入ったらfadeLeftというクラス名を追記
    }else{
    $(this).removeClass('fadeLeft');// 画面外に出たらfadeLeftというクラス名を外す
    }
});

}

$(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述



//その場でアクション
function topAnime(){

    $('.blurTrigger-t').each(function(){ //blurTriggerというクラス名が
        var elemPos = $(this).offset().top+50;//要素より
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('blur');// 画面内に入ったらblurというクラス名を追記
        }else{
        $(this).removeClass('blur');// 画面外に出たらblurというクラス名を外す
        }
    });

}

$(window).on('load', function(){
    topAnime();/* アニメーション用の関数を呼ぶ*/
});


//タイトル固定
//スクロールすると上部に固定させるための設定を関数でまとめる

if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
    //ここに書いた処理はPCの時


}

if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
    //ここに書いた処理はスマホの時

}