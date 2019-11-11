$(document).ready(function() {
  $("form#quiz").submit(function(event) {

    event.preventDefault();

    //Edited 11/10/19
    var animal = $("input:radio[name=animal]:checked").val();

    var time = $("input:radio[name=time]:checked").val();

    var problem = $("input:radio[name=problem]:checked").val();

    var frustrate = $("input:radio[name=frustrate]:checked").val();

    var color = $("input:radio[name=color]:checked").val();

    var result = [];

    if (animal === "cat" || animal === "dog") {
      result.push("Ruby")
    } else if (animal === "cat" || animal === "dog" && color === "red") {
      result.push("Swift")
    } else if (animal === "walrus" && color === "green") {
      result.push("Python")
    } else if (animal === "walrus" && color === "green" && problem === "yes") {
      result.push("React")
    } else if (animal === "cat" || animal === "dog" && color === "red" || color === "blue" && problem  === "no") {
      result.push("GO")
    } else if (animal === "walrus") {
      result.push("C++")
    } else {
      result.push("Rust")
    }

    $("#output").show();
    $("#answer").text(result);
    
  });
});
