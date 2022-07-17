
//display current date on top of the page 
let timeEl = $('#currentDay');
let date = moment().format('MMMM Do YYYY, h:mm:ss a');
timeEl.append(date);

//display timeblocks for working hours of the day 
let container = $('.container');
let timeBlock = $('#timeBlock');


let t = 1;
let times = [
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm'
   
]
for (let i = 0; i < times.length; i++) {
    let blocks = $(`#${times[i]}`);
    blocks.attr('class', 'time-block');
    blocks.text(times[i]);
    timeBlock.append(blocks);
    
//gets  current time in correct syntax from moment
    let current = moment().format('ha');

//color code time blocks for past present and future
    if ('12pm' == times[i]) {
    blocks.attr('class','green')
}
else if ('12pm' == times[i-t]) {
    blocks.attr('class','yellow')
    t++;
    }
//     let inputTodo = $('<span>');
    
//     blocks.append(inputTodo);
}

//enter info into each timeblock 




//save timeblock info into local storage 
// when page is refreshed, saved events persist 
