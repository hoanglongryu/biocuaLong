//adu
function playSound() {
  var sound = document.getElementById("mySound");
   sound.play();
}

//music
var audio = new Audio('audio/25.mp3');
var button = document.querySelector('button');
audio.loop = true;
function playAudioOnce() {
  if(audio.paused) {
       audio.play();
       button.textContent ='Tắt nhạc';
       document.body.onclick = null; 
   }
}
function toggleAudio(event) {
   event.stopPropagation();
   if(audio.paused) {
       audio.play();
       button.textContent ='Tắt nhạc';
   } else {
       audio.pause();
       button.textContent ='Bật nhạc';
   }
}

    // text 7 color
    $('.text').html(function(i, html) {
        var chars = $.trim(html).split("");
      
        return '<span>' + chars.join('</span><span>') + '</span>';
      });

//thong bao
$(document).ready(function() {
    // process bar
    setTimeout(function() {
        firstQuestion();
        $('.spinner').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    }, 600);
})

    const CONFIG = {
    introTitle: 'Welcome',
    introDesc: `Hãy truy cập bằng điện thoại di động(nếu có thể).`,
    btnIntro: 'OK',
    }

function firstQuestion(){
    $('.content').hide();
    Swal.fire({
        title: CONFIG.introTitle,
        text: CONFIG.introDesc,
        imageUrl: 'img/catcute.jpg',
        imageWidth: 300,
        imageHeight: 300,
        background: '#fff url("img/252525.png")',
        imageAlt: 'Custom image',
        confirmButtonText: CONFIG.btnIntro,
        customClass: {
            confirmButton: 'confirm-button-class'
        }
    }).then(function(){
        $('.content').show(200);
    })
}

// Anti right click anh Block ctrl+u
document.oncontextmenu = new Function("return false");
document.onkeydown = function(e) {
    if (e.ctrlKey && 
       (e.keyCode === 85)) {// Ctrl+U
        return false;
    }
};
//title
        document.addEventListener("visibilitychange", function() {
            if (document.hidden) {
                document.title = "Quay lại đi mà 😭";
            } else {
                document.title = "Yee,bạn đã quay lại 😁";
                setTimeout(function() {
                    document.title = "Bio của Long";
                }, 1200);
            }
        });

//time
        function dongho(){
            var today = new Date();
            var gio = today.getHours();
            var phut = today.getMinutes();
            var giay = today.getSeconds();

            if(gio<10){
                gio = "0" + gio;
            }
            if(phut<10){
                phut = "0" + phut;
            }
            if(giay<10){
                giay = "0" + giay;
            }
            document.getElementById("time").innerHTML = gio + ":" + phut + ":" + giay;
            setTimeout("dongho()",1000);
        }
        dongho();


        console.log('Vietnamese')
        console.log('%cÊY NÀY','color:green; background-color:black; font-size:98px; text-align:center;')
        console.log('%cBạn đang cố tình sao chép các mã nguồn ư ?','color:yellow;')
        console.log('%cThật may cho bạn, tôi cũng thế !','color:yellow;')
        console.log('%c:3','font-size:200px; text-align:center;')
        console.log('English')
        console.log('%cHEY THIS','color:green; background-color:black; font-size:98px; text-align:center;')
        console.log('%cAre you intentionally copying the source code?','color:yellow;')
        console.log('%cLucky for you, me too!','color:yellow;')
        console.log('%c:3','font-size:200px; text-align:center;')