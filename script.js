// var timeDisplayEl = $('#currentDay');
var nineInputEl = $('#9amText')
var tenInputEl = $('#10amText')
var elevenInputEl = $('#11amText')
var twelveInputEl = $('#12pmText')
var oneInputEl = $('#1pmText')
var twoInputEl = $('#2pmText')
var threeInputEl = $('#3pmText')
var fourInputEl = $('#4pmText')
var fiveInputEl = $('#5pmText')
var nineInput = nineInputEl.val();
var tenInput = tenInputEl.val();
var elevenInput = elevenInputEl.val();
var twelveInput = twelveInputEl.val();
var oneInput = oneInputEl.val();
var twoInput = twoInputEl.val();
var threeInput = threeInputEl.val();
var fourInput = fourInputEl.val();
var fiveInput = fiveInputEl.val();
var event;

// function displayTime() {
//     var rightNow = moment().format('MMM DD, YYYY');
//     timeDisplayEl.text(rightNow);
//   }



function displayCurrentDate(){
    var currentDay = document.getElementById("currentDay");
    currentDay.innerHTML = moment().format('MMMM DD YYYY');
}

displayCurrentDate();


document.getElementById("9save").addEventListener("click", LogIt);


function LogIt(){
    console.log("it worked!")
}


function colorPicker() {
    
    if (moment().format('H') < 9) {
        document.getElementById("9box").style.backgroundColor = "green";
    } else if (moment().format('H') > 9) {
        document.getElementById("9box").style.backgroundColor = "grey";
    }
    else {
        document.getElementById("9box").style.backgroundColor = "red";
    }


    if (moment().format('H') < 10) {
        document.getElementById("10box").style.backgroundColor = "green";
    } else if (moment().format('H') > 10) {
        document.getElementById("10box").style.backgroundColor = "grey";
    }
    else {
        document.getElementById("10box").style.backgroundColor = "red";
    }

    if (moment().format('H') < 11) {
        document.getElementById("11box").style.backgroundColor = "green";
    } else if (moment().format('H') > 11) {
        document.getElementById("11box").style.backgroundColor = "grey";
    }
    else {
        document.getElementById("11box").style.backgroundColor = "red";
    }

    if (moment().format('H') < 12) {
        document.getElementById("12box").style.backgroundColor = "green";
    } else if (moment().format('H') > 12) {
        document.getElementById("12box").style.backgroundColor = "grey";
    }
    else {
        document.getElementById("12box").style.backgroundColor = "red";
    }


    if (moment().format('H')  < 13) {
        document.getElementById("1box").style.backgroundColor = "green";
    } else if (moment().format('H') > 13) {
        document.getElementById("1box").style.backgroundColor = "grey";
    }
    else {
        document.getElementById("1box").style.backgroundColor = "red";
    }

    if (moment().format('H') < 14) {
        document.getElementById("2box").style.backgroundColor = "green";
    } else if (moment().format('H') > 14) {
        document.getElementById("2box").style.backgroundColor = "grey";
    }
    else {
        document.getElementById("2box").style.backgroundColor = "red";
    }

    if (moment().format('H') < 15) {
        document.getElementById("3box").style.backgroundColor = "green";
    } else if (moment().format('H') > 15) {
        document.getElementById("3box").style.backgroundColor = "grey";
    }
    else {
        document.getElementById("3box").style.backgroundColor = "red";
    }

    if (moment().format('H') < 16) {
        document.getElementById("4box").style.backgroundColor = "green";
    } else if (moment().format('H') > 16) {
        document.getElementById("4box").style.backgroundColor = "grey";
    }
    else {
        document.getElementById("4box").style.backgroundColor = "red";
    }

    if (moment().format('H') < 17) {
        document.getElementById("5box").style.backgroundColor = "green";
    } else if (moment().format('H') > 17) {
        document.getElementById("5box").style.backgroundColor = "grey";
    }
    else {
        document.getElementById("5box").style.backgroundColor = "red";
    }
}

        
colorPicker();
