$(function () {
    let i = 0;
    setInterval(function () {
        $(body).css("background","url('../images/bg"+ i%2 +")")
        i++;
    },8000)
});
