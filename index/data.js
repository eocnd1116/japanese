function cookieGet(_key) {
    var result = null;
    var cookie = document.cookie.split(';');
    cookie.some(function (item) {
        item = item.replace(' ', '');

        var dic = item.split('=');

        if (_key === dic[0]) {
            result = dic[1];
            return '';
        }
    });
    return result;
}
function cookieSet(_key, _value) {
    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + 1);
    document.cookie = _key + "=" + escape(_value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

function cookieReset(_key, _value) {
    if ( cookieGet(_key) == null ) {
        cookieSet(_key, _value)
    }
    return cookieGet(_key);
}

function Mobile() {return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);}


var data=[];
function dateSet(_num, _char, _name, _orign, _mean, _umdok, _hundok, _memo) {  //1020,'安',"편안할 안","편안 사람의 형태","편하다는뜻",[dd,dd],[dddd,dd],"여기는주석"
  data.push(_num,_char,_name,_orign,_mean,_umdok,_hundok,_memo);
}

//======================================================================================================================================================

dateSet(0014,'天',"하늘 천","사람 위의 제일(一) 커다란(大) 자연은 '하늘'이니","하늘 천",["てん","天 하늘 (てん)"],[],"단독으로 하늘을 지시할 때는 회화체에선 空（そら)를 사용하고 문어체에선 天을 쓴다.");
