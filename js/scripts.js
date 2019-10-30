$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();


    var animal = $("input:radio[name=animal]:checked").val();

    var time = $("input:radio[name=time]:checked").val();

    var problem = $("input:radio[name=problem]:checked").val();

    var frustrate = $("input:radio[name=frustrate]:checked").val();

    var color = $("input:radio[name=color]:checked").val();

    var result = [];
    var result1 = [];
    var result2 = [];


    if (animal === "cat" || animal === "dog") {
      result = ("Ruby")
    } else if (animal === "walrus") {
      result = ("C++")
    } else if (color === "red" || color === "blue") {
      result1 = ("Swift")
    } else if (color === "green") {
      result1 = ("Python")
    } else if (problem === "yes") {
      result2 = ("React")
    } else if (problem === "no") {
      result2 = ("GO")
    } else {
      $("basic").show();
    }

    var results = [result, result1, result2];
    console.log(animal, time, problem, frustrate, color);
    $("#output").append(results);

  });
});
