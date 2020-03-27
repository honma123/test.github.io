'use strict';

{
    var btn = document.getElementById('omikuji-btn');
    var img = document.getElementById('omikuji-img');
    btn.addEventListener('click', function(){
        var n = Math.floor(Math.random()*3);
        //btn.textContent = n;
        switch(n){
            case 0:
                btn.textContent = '大吉';
                img.src = "images/daikichi.jpg"
                break;
            case 1:
                btn.textContent = '中吉';
                img.src = "images/chukichi.jpg"
                break;
            case 2:
                btn.textContent = '凶';
                img.src = "images/kyou.jpg"
                break;
        }
    });
}