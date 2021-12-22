fetch("../dataall.json")
  .then((app) => {
    return app.json();
  })
  .then((actualdata) => {
    const dataone = actualdata.data[0];
    const datatwo = actualdata.data[1];
    document.querySelector(".box").innerHTML = ` 
           <h1>${dataone.name}</h1> 
      <div class="box-Cosmetics">
        <div class="item">
          <h3 class='h3'>Name :${dataone.productList[0].name} </h3>
          <h4 class='h4'> Price :${dataone.productList[0].price}</h4>
       
            <button value="item1" class='add' data-action="add"  onclick="myfun(this,event)">Add To Cart</button>
      
        </div>
        <div class='item'>
          <h3 class='h3'>Name :${dataone.productList[1].name}</h3>
          <h4 class='h4'>Price :${dataone.productList[1].price}</h4>
            <button value="item2" class='add' data-action="add"  onclick="myfun(this,event)">Add To Cart</button>
        </div>
      </div>
      <h1>${datatwo.name}</h1>
      <div class="box-Household">
        <div  class='item'>
          <h3 class='h3'>Name :${datatwo.productList[0].name}</h3>
          <h4 class='h4'>Price :${datatwo.productList[0].price}</h4>
    
            <button value="item3" class='add' data-action="add"  onclick="myfun(this,event)">Add To Cart</button>
       
        </div>
        <div  class='item'>
          <h3 class='h3'>Name :${datatwo.productList[1].name}</h3>
          <h4 class='h4'>Price :${datatwo.productList[1].price}</h4>
          
            <button  value="item4" class='add' data-action="add" onclick="myfun(this,event)">Add To Cart</button>
          
        </div>
      </div>`;
  })
  .catch((error) => {
    console.log(error);
  });

  function myfun(that , e){
    if(!(that.getAttribute("data-action") != "add")){
      addItem(that);
      that.setAttribute("data-action","remove");
      that.innerText="remove this from cart";
    }
    else if(!(that.getAttribute("data-action") != "remove")){
      removeItem(that);
      that.setAttribute("data-action","add");
      that.innerText="add this from cart";
    }
  }
  
  function addItem(btElement){
  
    var selectedElement = document.getElementsByClassName("item")[(btElement.value.charAt(( btElement.value.length )- 1) -1)];
    var selectedItem = selectedElement.getElementsByTagName("h3")[0].innerText;
    var selectedItemPrice = selectedElement.getElementsByTagName("h4")[0].innerText;
    let getarr1 = [selectedItem,selectedItemPrice]
    console.log(getarr1);
  }
  
  function removeItem(btElement){
  
  
    var selectedElement = document.getElementsByClassName("item")[(btElement.value.charAt(( btElement.value.length )- 1) -1)];
  
    var selectedItem = selectedElement.getElementsByTagName("h3")[0].innerText;
    var selectedItemPrice = selectedElement.getElementsByTagName("h4")[0].innerText;
    let getarr2 = [selectedItem,selectedItemPrice]
    console.log(getarr2);
  }

