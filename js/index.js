$(document).ready(function(){

 $.ajax({
          url: "https://zaka.nouveta.co.ke/api/index.php?function=getEntrepreneur",
          type: 'GET',
          dataType: 'json',
          success: function(res) {
            console.log("I am not working");
            console.log(res);
            // $('#result').html(res)
          }
      });

})
