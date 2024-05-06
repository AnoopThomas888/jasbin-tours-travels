let cartQuantity = 0;
console.log(cartQuantity+1);
let z = document.getElementById('myOrder');
function order() {
    cartQuantity++;
    alert('you ordered' + cartQuantity);
    

if (cartQuantity>=1) {
    z.innerText='YOU ORDERED 1';
    
}else{
    z.innerText= 'order';
}}