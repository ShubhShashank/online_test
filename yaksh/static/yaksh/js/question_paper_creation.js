$(document).ready(function(){
    $question_type = $('#id_question_type');
    $qpaper_id = $('#qpaper_id');
    $marks = $('#id_marks');
    $show = $('#show');
    /* ajax requsts on selectors change */
    $question_type.change(function() {
        this.form.submit();
    });

    $marks.change(function() {
        this.form.submit();
    });

    /* showing/hiding selectors on tab click */
    $(".tabs li").click(function() {
        if($(this).attr("id") == "finish-tab") {
            $("#selectors").hide();
            $('#is_active').val("finish");
        } else {
            if($(this).attr("id") == "fixed-tab") {
                $('#is_active').val("fixed");
            }
            if($(this).attr("id") == "random-tab") {
            $('#is_active').val("random");
            }
                $question_type.val('select');
                $marks.val('select')
                $("#selectors").show();
        }
    });

    /* tab change on next or previous button click */
    $("#fixed-next").click(function(){
        $("#random").click();
    });
    $("#random-next").click(function(){
        $("#finished").click();
    });

    $("#random-prev").click(function(){
        $("#fixed").click();
    });

    $("#finish-prev").click(function(){
        $("#random").click();
    });

});//document
