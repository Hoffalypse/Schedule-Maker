//display current date on top of the page
let timeEl = $("#currentDay");
let date = moment().format("dddd MMMM Do YYYY");
timeEl.append(date);

//display timeblocks for working hours of the day

let timeBlock = $(".timeBlock");
let text1 = $('#8am');



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

//8am code
$("#butt").on("click", function (event) {
  let dataInput = $('input[name="text"').val();
  localStorage.setItem('todo', dataInput);
});
function getText8am() {
  let storedText = localStorage.getItem('todo');
     $("#8am").val(storedText);
}

//9am code 
$("#butt1").on("click", function (event) {
    let dataInput = $('input[name="text1"]').val();
    localStorage.setItem('todo1', dataInput);
  });
  function getText9am() {
    let storedText = localStorage.getItem('todo1');
       $("#9am").val(storedText);
  }
 
  //10am code 
  $("#butt2").on("click", function (event) {
  
    let dataInput = $('input[name="text2"]').val();
    localStorage.setItem('todo2', dataInput);
  });
  function getText10am() {
    let storedText = localStorage.getItem('todo2');
       $("#10am").val(storedText);
  }

  //11am code 
  $("#butt3").on("click", function (event) {
    let dataInput = $('input[name="text3"]').val();
    localStorage.setItem('todo3', dataInput);
  });
  function getText11am() {
    let storedText = localStorage.getItem('todo3');
       $("#11am").val(storedText);
  }
 
   //12pm code 
   $("#butt4").on("click", function (event) {
    let dataInput = $('input[name="text4"]').val();
    localStorage.setItem('todo4', dataInput);
  });
  function getText12pm() {
    let storedText = localStorage.getItem('todo4');
       $("#12pm").val(storedText);
  }

    //1pm code 
    $("#butt5").on("click", function (event) {
        let dataInput = $('input[name="text5"]').val();
        localStorage.setItem('todo5', dataInput);
      });
      function getText1pm() {
        let storedText = localStorage.getItem('todo5');
           $("#1pm").val(storedText);
      }

       //2pm code 
    $("#butt6").on("click", function (event) {
        let dataInput = $('input[name="text6"]').val();
        localStorage.setItem('todo6', dataInput);
      });
      function getText2pm() {
        let storedText = localStorage.getItem('todo6');
           $("#2pm").val(storedText);
      }
  
         //3pm code 
    $("#butt7").on("click", function (event) {
        let dataInput = $('input[name="text7"]').val();
        localStorage.setItem('todo7', dataInput);
      });
      function getText3pm() {
        let storedText = localStorage.getItem('todo7');
           $("#3pm").val(storedText);
      }
           //4pm code 
    $("#butt8").on("click", function (event) {
        let dataInput = $('input[name="text8"]').val();
        localStorage.setItem('todo8', dataInput);
      });
      function getText4pm() {
        let storedText = localStorage.getItem('todo8');
           $("#4pm").val(storedText);
      }

      //5pm code 
      $("#butt9").on("click", function (event) {
        let dataInput = $('input[name="text9"]').val();
        localStorage.setItem('todo9', dataInput);
      });
      function getText5pm() {
        let storedText = localStorage.getItem('todo9');
           $("#5pm").val(storedText);
      }
  
  
  
  getText8am();
  getText9am();
  getText10am();
  getText11am();
  getText12pm();
  getText1pm();
  getText2pm();
  getText3pm();
  getText4pm();
  getText5pm();