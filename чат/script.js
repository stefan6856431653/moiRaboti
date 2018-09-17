       
       rrr.onclick = function eee(){
            function checkTime(i)
{
if (i<10) 
{
i="0" + i;
}
return i;
}
var t = new Date();
var time = checkTime(t.getHours()) + ":" + checkTime(t.getMinutes()) + ":" + checkTime(t.getSeconds());
         if(document.getElementById('pismo1').value == ""){alert("Введите сообщение")}
           else {
        var text = document.getElementById('pismo1').value;
        var newDiv = document.createElement('p');
        newDiv.className="soobchenie";
        newDiv.innerHTML = "Пользователь 1" + "<br/>" + "<br/>"  + text + "<br/>" + "<br/>" + time;
        left.appendChild(newDiv); 
        qaz.innerHTML += ("<p class='soobchenie'> Пользователь 1 <br> <br> "  + text + "<br>" + "<br>" + time + "<p>");
        delite();
        } function delite(){
        document.getElementById('pismo1').value = "";
        } }
       
       
        
ttt.onclick = function eee(){
            function checkTime(i)
{
if (i<10) 
{
i="0" + i;
}
return i;
}
var t = new Date();
var time = checkTime(t.getHours()) + ":" + checkTime(t.getMinutes()) + ":" + checkTime(t.getSeconds());
         if(document.getElementById('pismo2').value == ""){alert("Введите сообщение")}
           else {
        var text = document.getElementById('pismo2').value;
        var newDiv = document.createElement('p');
        newDiv.className="soobchenie";
        newDiv.innerHTML = "Пользователь 2" + "<br/>" + "<br/>"  + text + "<br/>" + "<br/>" + time;
        left.appendChild(newDiv); 
        qaz.innerHTML += ("<p class='soobchenie'> Пользователь 2<br> <br> "  + text + "<br>" + "<br>" + time + "<p>");
        delite();
        } function delite(){
        document.getElementById('pismo2').value = "";
        } }
       


