var res = fetch("https://api.openbrewerydb.org/v1/breweries?by_city=san_diego&per_page=3");
res.then((data)=>data.json()).then((data1)=>{
    for(var i=0; i<data1.length; i++){
        console.log(data1[i].name);
        var div = document.createElement("div");
        div.innerHTML= 

        `
      <div class="card">
  <h5 class="card-header">Name: ${data1[i].name}</h5>
  <div class="card-body">
    <h5 class="card-title">Country: ${data1[i].country}</h5>
    <h6 class="card-text">Pno: ${data1[i].phone}.</h6>
    <a href="https://imaginative-speculoos-389af5.netlify.app/" class="btn btn-primary">More</a>
  </div>
</div>`
      document.body.append(div);
    
    }
    
});

      
