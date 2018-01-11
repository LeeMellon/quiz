$(function() {
  var kk = 0; //Kim Kardashian = 0
  var ll = 0; //Lorenzo Lamas = 0
  var bb = 0; //Bill Bixby = 0


  var iceCream = function(ourIce) {

    var kk1 = "chocolate";
    var ll1 = "vanilla";
    var bb1 = "bubblegum"

    if (ourIce === kk1) {
      kk += 1;
    }
    if (ourIce === ll1) {
      ll += 1;
    }
    if (ourIce === bb1) {
      bb ++ ;
    }
  }


  var pets = function(ourPet) {
    var kk1 = "dogs";
    var ll1 = "dogs";
    var bb1 = "fish"
    //ourIce = form value;
    if (ourPet === kk1) {
      kk += 1;
    }
    if (ourPet === ll1) {
      ll += 1;
    }
    if (ourPet === bb1) {
      bb += 1;
    }
  }

  var vacation = function(ourVacation) {
    var kk1 = "beach";
    var ll1 = "museums";
    var bb1 = "snow"
    //ourIce = form value;
    if (ourVacation === kk1) {
      kk += 1;
    }
    if (ourVacation === ll1) {
      ll += 1;
    }
    if (ourVacation === bb1) {
      bb += 1;
    }
  }

  var processForm = function() {
    $("#iceCream").change(function(event) {
      var ourIce = $("input:radio[name=iceCream]:checked").val();
      event.preventDefault();
      console.log(ourIce);
      iceCream(ourIce);
      $("#iceDiv").hide();
      $("#petDiv").show();
    })
    $("#pets").change(function(event) {
      var ourPet = $("input:radio[name=pets]:checked").val();
      event.preventDefault();
      console.log(ourPet);
      pets(ourPet);
      $("#petDiv").hide();
      $("#vacDiv").show();
    })
    $("#vacation").change(function(event) {
      var ourVacation = $("input:radio[name=vacation]:checked").val();
      event.preventDefault();
      console.log(ourVacation);
      vacation(ourVacation);
      $("#vacDiv").hide();
      $("#resultDiv").show();
      results(kk, ll, bb)
    })
  }

  var results = function(kk, ll, bb) {
    if (kk > ll && kk > bb) {
      var name = "Kim Kardashian";
    } else if (ll > kk && ll > bb) {
      var name = "Lorenzo Lamas";
    } else if (bb > kk && bb > ll) {
      var name = "Bill Bixby";
    } else {
      var name = "no one";
    }
    console.log("kk: " + kk + "\n" + "ll: " + ll + "\n" + "bb: " + bb);
    $(".date").append(name);
  }

  processForm();


});
