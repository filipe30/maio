/* 1. Crie uma função que retorne um objeto json referente a essa regra de negócio.
Na página
https://new-ella-demo.myshopify.com/products/hentum-tosmois-de-laptop-hamo-dinci
dunts, capture os seguintes dados:
- Id do produto
- Título da página
- Nome do produto
- Preço do produto
- Número de reviews
- Valor das reviews
- Quantidade no estoque
- Tempo de entrega
- Se está em oferta? */

var titlePage = document.getElementsByTagName("title")[0].innerHTML;
var titlePoduct = document.getElementsByClassName("productView-title")[0].innerText;
var idProduct = document.getElementsByClassName("productView-info-value")[0].innerText;
var precoPoduct = document.getElementsByClassName("price-item")[0].innerText;
var view = document.getElementsByClassName("productView-ViewingProduct")[0].innerText;
var stock = document.getElementsByClassName("hotStock-text")[0].innerText;
var timeshiping = document.getElementsByClassName("product__text des")[0].innerText;
var sale = document.getElementsByClassName("price__sale")[0].innerText;
if(sale){
   printSale = 'Sim'
}else{
    printSale = 'Não'

}
var array = {
'title_page': titlePage, 
'title_product': titlePoduct, 
'product_id': idProduct,
'product_price': precoPoduct, 
'product_view': view,
'product_stock': stock,
'time_shiping': timeshiping,
'sale': sale
};
var objeto = JSON.stringify(array);
console.log(objeto)

/*
2. Crie uma função que capture o carrinho de compras do site
https://new-ella-demo.myshopify.com e retorne um json com a lista de objetos, com
os seguintes atributos:
- Id do produto
- Nome do produto
- Preço
*/

var cart = document.getElementsByClassName("previewCart")[0].innerText;
var objeto = JSON.stringify(titlePoduct);
console.log(objeto)
