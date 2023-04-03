
window.onload = startTime;
function startTime()
{
 var today=new Date();
 var h=today.getHours();
 var m=today.getMinutes();
 var s=today.getSeconds();

 h=checkTime(h);
 m=checkTime(m);
 s=checkTime(s);
 document.getElementById('saat').innerHTML=h+":"+m+":"+s;
 t=setTimeout('startTime()',1000);
}

function checkTime(i)
{
if (i<10)
 {
  i="0" + i;
 }
return i;
}
let username = prompt("Lütfen Kullanıcı Adınızı Giriniz")
let info = document.querySelector("#info")
info.innerHTML = `${info.innerHTML}`

if (username.length > 0) {
    console.log(`kullanıcı bilginiz ${username}`)

}