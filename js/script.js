let item=document.querySelector('ol');
let items=document.querySelector('#items');
let removeAll=document.querySelector('#removeAll');
item.addEventListener('click',addItem);
items.addEventListener('click',removeItem);
removeAll.addEventListener('click',clearALL);
function addItem(e){
     if(e.target.className=='btn'){
        //  console.log(`btn is clicekd`);
         let li=document.createElement('li');
         let product=e.target.parentElement.firstChild.textContent+"  "+e.target.parentElement.firstChild.nextSibling.textContent
        //  console.log(e.target.parentElement.firstChild.textContent);
        let link=document.createElement('a');
        link.setAttribute('href','#')
        link.className='btnR';
        link.appendChild(document.createTextNode('Remove'));
         li.appendChild(document.createTextNode(product));
         li.appendChild(link);
         console.log(li);
         items.appendChild(li);
         console.log(e.target.parentElement.firstChild.nextSibling.textContent);
     }
    // console.log(e.target.className);
}

function removeItem(e){
    if(e.target.hasAttribute('href')){
        let ele=e.target.parentElement;
        ele.remove();
        console.log(ele);
    }
    // console.log(e.target);
}
function clearALL(){
    items.innerHTML="";
}

// e.target.parentElement.lastChild.previousSibling.previousSibling.textContent;