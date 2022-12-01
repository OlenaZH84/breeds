fetch('https://catfact.ninja/breeds',{
method: 'GET',
headers: {
'Accept': 'application/json',
'Content-Type': 'text/plain;charset=UTF-8'
},
})
.then((response) => {
return response.json();
})
.then((data) => {
//console.log(data);
function resultLi(data){
for (let i=0; i<10; i++) {
const entry = createListItem(data.data[i].breed);
list.appendChild(entry);
}
}    
resultLi(data);  
console.log(data);  
});
function createListItem(text) {
const listItem = document.createElement('option');
const textNode = document.createTextNode(text);
listItem.appendChild(textNode);
return listItem;
}
const list = document.getElementById('breedsId');