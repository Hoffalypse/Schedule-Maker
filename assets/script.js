//display current date on top of the page
let timeEl = $("#currentDay");
let date = moment().format("MMMM Do YYYY, h:mm:ss a");
timeEl.append(date);

//display timeblocks for working hours of the day

let timeBlock = $(".timeBlock");
let text1 = $('#text1');



let t = 1;
let times = [
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
];

for (let i = 0; i < times.length; i++) {
  let blocks = $(`#${times[i]}`);
  blocks.attr("class", "time-block");
  blocks.text(times[i]);
  timeBlock.append(blocks);

  //gets  current time in correct syntax from moment
  let current = moment().format("ha");

  //color code time blocks for past present and future
  if (current == times[i]) {
    blocks.attr("class", "green");
  } else if (current == times[i - t]) {
    blocks.attr("class", "yellow");
    t++;
  }
}
$("#butt").on("click", function (event) {
  event.preventDefault;

  let dataInput = $('input[name="text"]').val();
  localStorage.setItem('todo', dataInput);
});
function getText() {
  let storedText = localStorage.getItem('todo');



  //   console.log(storedText);
//   text1.setAttribute('type', 'text');
// text1.attr('value','hello');


  // //   if (storedText !== null) {
    // timeBlock.text(storedText);
    // timeBlock.append(storedText);
//     // storedText.value = localStorage.getItem('todo');
//     // textcontent(localStorage);

//   }
}
getText();

//save timeblock info into local storage
// when page is refreshed, saved events persist
