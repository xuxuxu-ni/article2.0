$(function () {
    let i = 0;
    setInterval(function () {
        $(document.body).css({
            "background":"url('images/bg"+ i%2 +".jpg')",
            "background-size": "cover",
            "background-position": "center"
        })
        i++;
    },8000)
});
