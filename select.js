$(document).ready(function() {
    // 監聽 id 為 group-non 的元素的點擊事件
    $('#group-non').on('click', function() {
        // 先將 #group-wrap-no 進行淡出
        if (!$('#group-wrap-no').hasClass('group-wrap-no')) {
            $('#group-wrap-no').fadeOut(200, function() {
                // 淡出後添加 class 'group-wrap-no'
                $(this).addClass('group-wrap-no');
                $(this).removeClass('group-wrap-non-selected');
                // 再淡入
                $(this).fadeIn(200);
            });

            // 先將 #non-group 進行淡出
            $('#non-group').fadeOut(200, function() {
                // 淡出後添加 class 'non-group'
                $(this).addClass('non-group');
                $(this).removeClass('non-selected-group');
                // 再淡入
                $(this).fadeIn(200);
            });

            $('#group-wrap-yes').removeClass().addClass('group-wrap-non-selected');
            $('#group-wrap-yes').fadeIn(300);
            $('#yes-group').removeClass().addClass('non-selected-group');
            $('#yes-group').fadeIn(300);
        }
    });

    $('#group-yes').on('click', function() {
        // 先將 #group-wrap-no 進行淡出
        $('#group-wrap-yes').fadeOut(200, function() {
            // 淡出後添加 class 'group-wrap-no'
            $(this).addClass('group-wrap-yes');
            $(this).removeClass('group-wrap-non-selected');
            // 再淡入
            $(this).fadeIn(200);
        });

        // 先將 #non-group 進行淡出
        $('#yes-group').fadeOut(200, function() {
            // 淡出後添加 class 'non-group'
            $(this).addClass('yes-group');
            $(this).removeClass('non-selected-group');
            // 再淡入
            $(this).fadeIn(200);
        });

        $('#group-wrap-no').removeClass().addClass('group-wrap-non-selected');
        $('#group-wrap-no').fadeIn(300);
        $('#non-group').removeClass().addClass('non-selected-group');
        $('#non-group').fadeIn(300);
    });


    $('#group-non-car').on('click', function() {
        // 先將 #group-wrap-no 進行淡出
        if (!$('#group-wrap-no-car').hasClass('group-wrap-no')) {
            $('#group-wrap-no-car').fadeOut(200, function() {
                // 淡出後添加 class 'group-wrap-no'
                $(this).addClass('group-wrap-no');
                $(this).removeClass('group-wrap-non-selected');
                // 再淡入
                $(this).fadeIn(200);
            });

            // 先將 #non-group 進行淡出
            $('#no-car').fadeOut(200, function() {
                // 淡出後添加 class 'non-group'
                $(this).addClass('non-group');
                $(this).removeClass('non-selected-group');
                // 再淡入
                $(this).fadeIn(200);
            });

            $('#group-wrap-yes-car').removeClass().addClass('group-wrap-non-selected');
            $('#group-wrap-yes-car').fadeIn(300);
            $('#yes-car').removeClass().addClass('non-selected-group');
            $('#yes-car').fadeIn(300);
        }
    });

    $('#group-yes-car').on('click', function() {
        // 先將 #group-wrap-no 進行淡出
        if (!$('#group-wrap-yes-car').hasClass('group-wrap-no')) {
            $('#group-wrap-yes-car').fadeOut(200, function() {
                // 淡出後添加 class 'group-wrap-no'
                $(this).addClass('group-wrap-yes');
                $(this).removeClass('group-wrap-non-selected');
                // 再淡入
                $(this).fadeIn(200);
            });

            // 先將 #non-group 進行淡出
            $('#yes-car').fadeOut(200, function() {
                // 淡出後添加 class 'non-group'
                $(this).addClass('yes-group');
                $(this).removeClass('non-selected-group');
                // 再淡入
                $(this).fadeIn(200);
            });

            $('#group-wrap-no-car').removeClass().addClass('group-wrap-non-selected');
            $('#group-wrap-no-car').fadeIn(300);
            $('#no-car').removeClass().addClass('non-selected-group');
            $('#no-car').fadeIn(300);
        }
    });

});
