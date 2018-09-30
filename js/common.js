$(function () {
    let i = 0;
    setInterval(function () {
        $(document.body).css({
            "background":"url('images/bg"+ i%43 +".jpg')",
            "background-size": "cover",
            "background-position": "center"
        })
        i++;
    },8000)
    $(".upDown i").click(function () {
        let $content = $(this).parents(".upDown").siblings(".content")
        $content.addClass("downList")

        setTimeout(function () {
            $("li", $content).css("position","unset")
            $("li:first,li:last",$content).css("transform","rotate(0deg)")
        },300)
        $("ul", $content).css("margin-bottom","0")
        $(this).parent().css("display","none")

    })
});
