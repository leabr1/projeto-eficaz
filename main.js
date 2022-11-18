/*cfc2b8f078561a7d5230a60aceda3488*/

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  


  function getExcuse() {
    
      var container = document.querySelector(".resultadoDesculpa");
      container.innerHTML = ``


    let qtndDesculpas = document.getElementById("qtndDesculpas").value
    let tipoDesculpa = document.getElementById("tipoDesculpa").value

    



    if (!qtndDesculpas && !tipoDesculpa) {
        
        fetch("https://excuser.herokuapp.com/v1/excuse/", requestOptions)
          .then(response => response.json())
          .then(
              function (json) {
                  json.map( function (val){
                    
                       container.innerHTML = `<div class="desculpa"><div class="titulo">`+val.excuse+`</div><div class="idDesculpa">Excuse ID: ` +val.id+`</div><div> Type of excuse: ` + val.category+ `</div></div>`;
                  })
              }
          )
          .catch(error => console.log('error', error));
    }else if (qtndDesculpas && !tipoDesculpa) {
        fetch("https://excuser.herokuapp.com/v1/excuse/"+qtndDesculpas, requestOptions)
          .then(response => response.json())
          .then(
              function (json) {
                 
                  json.map( function (val){
                      
                     
                       container.innerHTML += `<div class="desculpa"><div class="titulo">`+val.excuse+`</div><div class="idDesculpa">Excuse ID: ` +val.id+`</div><div> Type of excuse: ` + val.category+ `</div></div>`;
                  })
              }
          )
    }else if (!qtndDesculpas && tipoDesculpa) {
        fetch("https://excuser.herokuapp.com/v1/excuse/"+tipoDesculpa, requestOptions)
          .then(response => response.json())
          .then(
              function (json) {
                 
                  json.map( function (val){
                      
                     
                       container.innerHTML += `<div class="desculpa"><div class="titulo">`+val.excuse+`</div><div class="idDesculpa">Excuse ID: ` +val.id+`</div></div>`;
                  })
              }
          )
    }else if(qtndDesculpas && tipoDesculpa){
        fetch("https://excuser.herokuapp.com/v1/excuse/"+tipoDesculpa+"/"+qtndDesculpas, requestOptions)
          .then(response => response.json())
          .then(
              function (json) {
                 
                  json.map( function (val){
                      
                     
                       container.innerHTML += `<div class="desculpa"><div class="titulo">`+val.excuse+`</div><div class="idDesculpa">Excuse ID: ` +val.id+`</div></div>`;
                  })
              }
          )
    }



  }



    