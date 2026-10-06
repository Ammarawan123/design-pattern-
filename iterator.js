const playlist=['a','b','c','d'];
function createIterator(items){
    let index=0;
    return{
        hasNext: ()=> index <items.length,
        next : ()=> items[index++]
    };
}
const iterator =createIterator(playlist);
while(iterator.hasNext()){
    console.log(iterator.next());
}