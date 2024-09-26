function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

// show dates
function showDates(dateSelect) {
  // array times
  var listTime = [];
  for (var i = 6; i <= 16; i++) {
      var time = i < 10 ? "0" + i + ":00" : i + ":00";
      listTime.push(time);
  }
  
  console.log(listTime);  // 輸出 ['06:00', '07:00', ..., '16:00']
  var el = $('#list-time-select');
  el.html('');
  listTime.forEach(function(item) {
    var itemDate = dateSelect + ' ' + item;
    el.append('<li class="item-time" data-date="' + itemDate + '">'+ item +'</li>');
  });

  // init event
  var itemTime = $('.item-time');
  itemTime.click(function() {
    itemTime.removeClass('active');
    $(this).addClass('active');
    
    var timeSelect = document.getElementsByName("time-select")[0];
    timeSelect.value = $(this).data('date');
  })
}

// new date
var today = new Date();

// get date, month, year
var day = pad(today.getDate(), 2);
var month = pad(today.getMonth(), 2);
var year = today.getFullYear();

// join string date
var stringDate = [day, month, year].join('/');
showDates(stringDate);

// init date picker
var datePicker = $("#datepicker");
datePicker.val(stringDate);

datePicker.datepicker({
  dateFormat: 'dd/mm/yy',
  minDate: today,
});

datePicker.on('change', function() {
  showDates(this.value);
});


//   var listItem = document.getElementsByClassName('item-time');
//   var prevItem = null;
//   Array.prototype.forEach.call(listItem, function(item) {
//     item.addEventListener('click', function() {
//       if (prevItem) {
//         prevItem.classList.remove('active');
//       }
//       prevItem = item;
//       var time = item.getAttribute('data-date');
//       item.classList.add('active')
//       [0];
//       timeSelect.value = time;
//     });
//   });  