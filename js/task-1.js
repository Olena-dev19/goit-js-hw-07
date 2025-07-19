const ulElem = document.querySelector('#categories');
const liElems = document.querySelectorAll('.item');

console.log(`Number of categories: ${liElems.length}`);


liElems.forEach(item => {
    const categoryTitle = item.querySelector('h2').textContent;
    const categoryElements = item.querySelectorAll('ul li').length;
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryElements}`);
    
})

