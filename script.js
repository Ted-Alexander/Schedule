function displayCurrentDate
    var currentDay = document.getElementById(“currentDay”);
    currentDay.innerHTML = moment().format('MMMM Do YYYY');
