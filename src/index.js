import "./styles.css";

let scores = [];

//Buttons
let fourtyScore = document.getElementById("fourtyButton");
let vertScore = document.getElementById("vertButton");
let shuttleScore = document.getElementById("shuttleButton");
let benchScore = document.getElementById("benchButton");
let squatScore = document.getElementById("squatButton");
let cleanScore = document.getElementById("cleanButton");
let averageScore = document.getElementById("calculate");
let reset = document.getElementById("reset");

// Athletic Ratings - Displays
let fourtyRate = document.getElementById("fourtyRate");
let vertRate = document.getElementById("vertRate");
let shuttleRate = document.getElementById("shuttleRate");
let benchRate = document.getElementById("benchRate");
let squatRate = document.getElementById("squatRate");
let cleanRate = document.getElementById("cleanRate");
let athleticScore = document.getElementById("rating-display");

fourtyScore.addEventListener("click", function () {
  let fourtyYardDash = parseFloat(document.getElementById("fourty").value);
  let fourtyRating;
  //Color-coding athletic ratings
  if (fourtyYardDash >= 4.8) {
    fourtyRating = 0;
    fourtyRate.style.backgroundColor = "red";
  } else if (fourtyYardDash >= 4.7 && fourtyYardDash < 4.79) {
    fourtyRating = 1;
    fourtyRate.style.backgroundColor = "orange";
  } else if (fourtyYardDash >= 4.6 && fourtyYardDash < 4.7) {
    fourtyRating = 2;
    fourtyRate.style.backgroundColor = "yellow";
  } else if (fourtyYardDash >= 4.5 && fourtyYardDash < 4.6) {
    fourtyRating = 3;
    fourtyRate.style.backgroundColor = "lightgreen";
  } else if (fourtyYardDash >= 4.41 && fourtyYardDash < 4.5) {
    fourtyRating = 4;
    fourtyRate.style.backgroundColor = "green";
  } else if (fourtyYardDash <= 4.4) {
    fourtyRating = 5;
    fourtyRate.style.backgroundColor = "darkgreen";
  }
  fourtyRate.innerHTML = `40 Score: ${fourtyRating}`;
  scores.push(fourtyRating);
});

vertScore.addEventListener("click", function () {
  let verticalJump = parseFloat(document.getElementById("vertical").value);
  let verticalRating;
  //Color-coding athletic ratings
  if (verticalJump < 24) {
    verticalRating = 0;
    vertRate.style.backgroundColor = "red";
  } else if (verticalJump >= 24 && verticalJump < 27) {
    verticalRating = 1;
    vertRate.style.backgroundColor = "orange";
  } else if (verticalJump >= 27 && verticalJump < 30) {
    verticalRating = 2;
    vertRate.style.backgroundColor = "yellow";
  } else if (verticalJump >= 30 && verticalJump < 33) {
    verticalRating = 3;
    vertRate.style.backgroundColor = "lightgreen";
  } else if (verticalJump >= 33 && verticalJump < 36) {
    verticalRating = 4;
    vertRate.style.backgroundColor = "green";
  } else if (verticalJump >= 36) {
    verticalRating = 5;
    vertRate.style.backgroundColor = "darkgreen";
  }
  vertRate.innerHTML = `Vertical Score: ${verticalRating}`;
  scores.push(verticalRating);
});

shuttleScore.addEventListener("click", function () {
  let shuttle = parseFloat(document.getElementById("shuttle").value);
  let shuttleRating;
  //Color-coding athletic ratings
  if (shuttle > 4.5) {
    shuttleRating = 0;
    shuttleRate.style.backgroundColor = "red";
  } else if (shuttle >= 4.39 && shuttle < 4.5) {
    shuttleRating = 1;
    shuttleRate.style.backgroundColor = "orange";
  } else if (shuttle >= 4.27 && shuttle < 4.39) {
    shuttleRating = 2;
    shuttleRate.style.backgroundColor = "yellow";
  } else if (shuttle >= 4.16 && shuttle < 4.27) {
    shuttleRating = 3;
    shuttleRate.style.backgroundColor = "lightgreen";
  } else if (shuttle >= 4.11 && shuttle < 4.16) {
    shuttleRating = 4;
    shuttleRate.style.backgroundColor = "green";
  } else if (shuttle <= 4.1) {
    shuttleRating = 5;
    shuttleRate.style.backgroundColor = "darkgreen";
  }
  shuttleRate.innerHTML = `Shuttle Score: ${shuttleRating}`;
  scores.push(shuttleRating);
});

benchScore.addEventListener("click", function () {
  let benchPress = parseFloat(document.getElementById("bench").value);
  let benchRating;
  if (benchPress < 225) {
    benchRating = 0;
    benchRate.style.backgroundColor = "red";
  } else if (benchPress >= 225 && benchPress <= 250) {
    benchRating = 1;
    benchRate.style.backgroundColor = "orange";
  } else if (benchPress >= 251 && benchPress <= 270) {
    benchRating = 2;
    benchRate.style.backgroundColor = "yellow";
  } else if (benchPress >= 271 && benchPress <= 290) {
    benchRating = 3;
    benchRate.style.backgroundColor = "lightgreen";
  } else if (benchPress >= 291 && benchPress <= 314) {
    benchRating = 4;
    benchRate.style.backgroundColor = "green";
  } else if (benchPress >= 315) {
    benchRating = 5;
    benchRate.style.backgroundColor = "darkgreen";
  }
  benchRate.innerHTML = `Bench Score: ${benchRating}`;
  scores.push(benchRating);
});

squatScore.addEventListener("click", function () {
  let squat = parseFloat(document.getElementById("squat").value);
  let squatRating;
  if (squat < 275) {
    squatRating = 0;
    squatRate.style.backgroundColor = "red";
  } else if (squat >= 275 && squat <= 300) {
    squatRating = 1;
    squatRate.style.backgroundColor = "orange";
  } else if (squat >= 301 && squat <= 330) {
    squatRating = 2;
    squatRate.style.backgroundColor = "yellow";
  } else if (squat >= 331 && squat <= 365) {
    squatRating = 3;
    squatRate.style.backgroundColor = "lightgreen";
  } else if (squat >= 366 && squat <= 404) {
    squatRating = 4;
    squatRate.style.backgroundColor = "green";
  } else if (squat >= 405) {
    squatRating = 5;
    squatRate.style.backgroundColor = "darkgreen";
  }
  squatRate.innerHTML = `Squat Score: ${squatRating}`;
  scores.push(squatRating);
});

cleanScore.addEventListener("click", function () {
  let clean = parseFloat(document.getElementById("clean").value);
  let cleanRating;
  if (clean < 200) {
    cleanRating = 0;
    cleanRate.style.backgroundColor = "red";
  } else if (clean >= 200 && clean <= 224) {
    cleanRating = 1;
    cleanRate.style.backgroundColor = "orange";
  } else if (clean >= 225 && clean <= 249) {
    cleanRating = 2;
    cleanRate.style.backgroundColor = "yellow";
  } else if (clean >= 250 && clean <= 274) {
    cleanRating = 3;
    cleanRate.style.backgroundColor = "lightgreen";
  } else if (clean >= 275 && clean <= 299) {
    cleanRating = 4;
    cleanRate.style.backgroundColor = "green";
  } else if (clean >= 300) {
    cleanRating = 5;
    cleanRate.style.backgroundColor = "darkgreen";
  }
  cleanRate.innerHTML = `Hang/Power Clean Score: ${cleanRating}`;
  scores.push(cleanRating);
});

console.log(scores);

//Average out the ratings for overall score
averageScore.addEventListener("click", function () {
  if (scores.length) {
    //already has score record?
    let sum = 0;
    let i;
    let average;
    for (i = 0; i < scores.length; i++) {
      sum += scores[i];
      average = sum / scores.length;
      //display the result. e.g.
      console.log(scores);
    }
    console.log(`Average score is ${average}.`);
    athleticScore.innerHTML = `Athletic Rating: ${average}/5`;
    scores = [];
  }
});

reset.addEventListener("click", function () {
  //Reset all scores back to zero
  scores = [];

  //Reset background colors to normal
  fourtyRate.style.backgroundColor = "rgb(243, 237, 237)";
  vertRate.style.backgroundColor = "rgb(243, 237, 237)";
  shuttleRate.style.backgroundColor = "rgb(243, 237, 237)";
  squatRate.style.backgroundColor = "rgb(243, 237, 237)";
  benchRate.style.backgroundColor = "rgb(243, 237, 237)";
  cleanRate.style.backgroundColor = "rgb(243, 237, 237)";

  //Reset scores to zero
  fourtyRate.innerHTML = `Fourty Score:`;
  vertRate.innerHTML = `Vertical Score:`;
  shuttleRate.innerHTML = `Shuttle Score:`;
  squatRate.innerHTML = `Squat Score:`;
  benchRate.innerHTML = `Bench Score:`;
  cleanRate.innerHTML = `Clean Score:`;
  athleticScore.innerHTML = `Athletic Rating: 0`;
});
