$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();


    var animal = $("input:radio[name=animal]:checked").val();

    var time = $("input:radio[name=time]:checked").val();

    var problem = $("input:radio[name=problem]:checked").val();

    var frustrate = $("input:radio[name=frustrate]:checked").val();

    var color = $("input:radio[name=color]:checked").val();

    var result = [];

    if (animal === "cat" || animal === "dog") {
      result.push("Ruby, ")
    } if (animal === "walrus") {
      result.push("C++, ")
    } if (color === "red" || color === "blue") {
      result.push("Swift, ")
    } if (color === "green") {
      result.push("Python, ")
    } if (problem === "yes") {
      result.push("React")
    } if (problem === "no") {
      result.push("GO")
    } else {

    }


    $("#output").append(result);

  });
});
