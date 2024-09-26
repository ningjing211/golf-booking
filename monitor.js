$(document).ready(function() {
    // 初始化一個空的陣列，用來存放所有的選擇值
    var bookingSelections = {
        holes: "18洞",          // 18洞或9洞
        people: "4",         // 人數
        acceptGrouping: "接受併組", // 接受併組與否
        rentCart: "租借球車",       // 是否租借球車
        date: "25 September, 2024",           // 選擇日期
        time: "16:00"            // 選擇時段
    };

    // 定義一個函數來生成HTML並插入到 #calender-panel 內
    function updateCalenderPanel(bookingSelections) {
        var summaryHtml = `
            <div class="detail-item">${bookingSelections.holes}, </div>
            <div class="detail-item">${bookingSelections.people} 人, </div>
            <div class="detail-item">${bookingSelections.acceptGrouping}, </div>
            <div class="detail-item">${bookingSelections.rentCart}, </div>
            <div class="detail-item">日期: ${bookingSelections.date}, </div>
            <div class="detail-item">時段: ${bookingSelections.time}</div>
        `;
        
        // 將生成的HTML插入到 #calender-panel 內
        $('#calender-panel').html(summaryHtml);
    }


    // 1. 監聽選擇 18 洞或 9 洞的變化，並將結果存入陣列
    $("input[name='options']").change(function() {
        var selectedHoles = $("input[name='options']:checked").next('label').text().trim();
        bookingSelections.holes = selectedHoles;
        console.log("Selected Holes: " + selectedHoles);

        // 顯示當前的選項
        console.log("Current Booking Selections: ", bookingSelections);
        updateCalenderPanel(bookingSelections);
    });

    // 2. 監聽人數滑桿的變化，並將人數值存入陣列
    $('.slider2').on('slidechange', function(event, ui) {
        bookingSelections.people = ui.value; // 取得當前滑桿的值
        console.log("Number of People: " + ui.value);

        // 顯示當前的選項
        console.log("Current Booking Selections: ", bookingSelections);
        updateCalenderPanel(bookingSelections);
    });

    // 3. 監聽是否接受併組的選擇
    $('#group-yes').click(function() {
        bookingSelections.acceptGrouping = "接受併組";  // 用戶選擇接受併組
        console.log("Accept Grouping: 是");

        // 顯示當前的選項
        console.log("Current Booking Selections: ", bookingSelections);
        updateCalenderPanel(bookingSelections);
    });

    $('#group-non').click(function() {
        bookingSelections.acceptGrouping = "不用併組";  // 用戶選擇不併組
        console.log("Accept Grouping: 否");

        // 顯示當前的選項
        console.log("Current Booking Selections: ", bookingSelections);
        updateCalenderPanel(bookingSelections);
    });

    // 4. 監聽是否租借球車的選擇
    $('#group-yes-car').click(function() {
        bookingSelections.rentCart = "租借球車";  // 用戶選擇租借球車
        console.log("Rent Golf Cart: 是");

        // 顯示當前的選項
        console.log("Current Booking Selections: ", bookingSelections);
        updateCalenderPanel(bookingSelections);
    });

    $('#group-non-car').click(function() {
        bookingSelections.rentCart = "不用球車";  // 用戶選擇不用球車
        console.log("Rent Golf Cart: 否");

        // 顯示當前的選項
        console.log("Current Booking Selections: ", bookingSelections);
        updateCalenderPanel(bookingSelections);
    });

    // 5. 監聽日期選擇，並將日期存入陣列
    $(document).on('click', '.month-selector', function() {
        // 從日曆的 DOM 結構中取得日期
        var selectedDate = $(this).attr('id').split('-'); 
        var formattedDate = selectedDate[1] + " " + selectedDate[2] + ", " + selectedDate[3]; // 例如: 26 September, 2024

        // 更新 bookingSelections 的日期屬性
        bookingSelections.date = formattedDate;
        console.log("Selected Date: " + formattedDate);

        // 顯示當前的選項
        console.log("Current Booking Selections: ", bookingSelections);
        updateCalenderPanel(bookingSelections);
    });

    // 6. 監聽時間選擇，並將時間存入陣列
    $('#list-time-select').on('click', 'li', function() {
        var selectedTime = $(this).text().trim();  // 假設時間以文本形式顯示在 <li> 內
        bookingSelections.time = selectedTime;

        console.log("Selected Time: " + selectedTime);
        console.log("Current Booking Selections: ", bookingSelections);
        updateCalenderPanel(bookingSelections);
        
    });

    // 初始化滑桿
    $('.slider2').slider({
        min: 1,  // 最小人數
        max: 10, // 最大人數，根據需求調整
        value: 4, // 預設值
        animate: true
    }).slider('pips', { rest: 'number' });

     // 左右箭頭來回切換月份
     $("#left").on("click", function() {
        if (currentMonth > 0)
            currentMonth -= 1;
        else {
            currentMonth = 11;
            currentYear -= 1;
        }
        displayCalender();
    });

    $("#right").on("click", function() {
        if (currentMonth < 11)
            currentMonth += 1;
        else {
            currentMonth = 0;
            currentYear += 1;
        }
        displayCalender();
    });

    

});
