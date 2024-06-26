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


var num=[];
var char=[];
var name=[];
var orign=[];
var umdok=[];
var hundok=[];
var memo=[];

function dateSet(_num, _char, _name, _orign, _mean, _umdok, _hundok, _memo) {  //1020,'安',"편안할 안","편안 사람의 형태","편하다는뜻",[dd,dd],[dddd,dd],"여기는주석"
  
}

//======================================================================================================================================================

dateSet();
