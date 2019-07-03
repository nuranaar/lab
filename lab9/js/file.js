$(document).ready(function () {

    $(".addBtn").click(function () {
        var barWidth = Number($(this).parent().prev().find(".progress-bar").attr("aria-valuenow"));
        if (barWidth < 100) {
            barWidth += 10;
            $(this).parent().prev().find(".progress-bar").css("width", barWidth + "%");
            $(this).parent().prev().find(".progress-bar").attr("aria-valuenow", barWidth);
            var type = $(this).parent().prev().find(".progress-bar").attr("data-type");
            if (type == "opacity"){
                $(".box").css(type, barWidth/100)
            }
            else if(type == "width" || type == "height"){
                $(".box").css(type, barWidth+"px")
            }
          
        }
    })

    $(".remBtn").click(function () {
        var barWidth = Number($(this).parent().prev().find(".progress-bar").attr("aria-valuenow"));
        if (barWidth > 0) {
            barWidth -= 10;
            $(this).parent().prev().find(".progress-bar").css("width", barWidth + "%");
            $(this).parent().prev().find(".progress-bar").attr("aria-valuenow", barWidth);

        }
    })


});