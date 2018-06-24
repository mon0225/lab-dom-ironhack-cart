function deleteItem(){
    var elem = document.getElementById('listaGeneral');
    elem.removeChild(elem.childNodes[0]);
  

   }


function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var listaPrecios = document.getElementsByClassName('Prices');
  var listaCantidades = document.getElementsByClassName('ClaseCantidades');  
  var listaTotalRenglon = document.getElementsByClassName('Totales');
  var elementoTotal = document.getElementById('TotalPrice');

  var cantidad;
  var precio;
  var totalRenglon;
  var totalGeneral=0;

  for(var i = 0; i<listaCantidades.length ; i++){
    cantidad = listaCantidades[i].value;
    precio = listaPrecios[i].textContent;
    totalRenglon = cantidad * precio;
    listaTotalRenglon[i].textContent=totalRenglon;
    totalGeneral=totalGeneral+totalRenglon;
    console.log("TOtal:" + totalGeneral);
  }

  elementoTotal.textContent=totalGeneral;
}


function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){
 var newItem= document.createElement(NodeList);
 return newItem;
}

function createNewItemRow(itemName, itemUnitPrice){
  document.createElement(tagName);

  var parent = document.getElementsByTagName("body")[0];
     parent.appendChild(rowElement);


}

function createNewItem(){

var parent1 = document.getElementById('listaGeneral');

var renglon = document.createElement('DIV');

var element1 = document.createElement('LABEL');
element1.textContent="New Product";
var element2 = document.createElement('SPAN');
element2.className='Prices';
element2.textContent='40.00';
renglon.appendChild(element1);
renglon.appendChild(element2);


parent1.appendChild(renglon);


}

window.onload = function(){
  console.log("Inicio la funcion");
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');


  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
