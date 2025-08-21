document.getElementById("saveBtn").onclick = function () {

  let food = document.getElementById("foodInput").value;
  let foods = JSON.parse(localStorage.getItem("foods"));
  foods.push(food);
  localStorage.setItem("foods", JSON.stringify(foods));

  document.getElementById("foodList").innerHTML = foods.join("<br>");
};
