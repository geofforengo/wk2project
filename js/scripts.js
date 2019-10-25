$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();

    var animal = $("input:radio[name=animal]:checked").val();

    var time = $("input:radio[name=time]:checked").val();

    var problem = $("input:radio[name=problem]:checked").val();

    var frustrate = $("input:radio[name=frustrate]:checked").val();

    var color = $("input:radio[name=color]:checked").val();

    if (animal === cat || animal === dog) {
      
    }

  });
});
