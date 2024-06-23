function displayTime() {
  var date = new Date();
  var time = date.toLocaleTimeString("th-TH");
  document.getElementById("time").innerHTML = time;
}
setInterval(displayTime, 1000);

let toggleMode = document.getElementById("btn");

toggleMode.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    toggleMode.innerHTML = "โหมดกลางวัน";
  } else {
    toggleMode.innerHTML = "โหมดกลางคืน";
  }
});

function add() {
  let input = document.getElementById("input").value;
  let task = document.querySelector(".task");
  task.innerHTML += `<div><h4>${input}</h4><button type="button" >Delete</button></div>`;
  document.getElementById("input").value = "";
}

document.querySelector(".task").addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
  }
});
