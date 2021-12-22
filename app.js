

function action(that , e){
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
  //  console.log(selectedElement);
	var selectedItem = selectedElement.getElementsByTagName("h1")[0].innerText;
	var selectedItemPrice = selectedElement.getElementsByTagName("p")[0].innerText;
  let getarr = [selectedItem,selectedItemPrice]
  console.log(getarr);
}

function removeItem(btElement){


	var selectedElement = document.getElementsByClassName("item")[(btElement.value.charAt(( btElement.value.length )- 1) -1)];

	var selectedItem = selectedElement.getElementsByTagName("h1")[0].innerText;
	var selectedItemPrice = selectedElement.getElementsByTagName("p")[0].innerText;;
  
  let getarr = [selectedItem,selectedItemPrice]
}