import bread from './images/bread.jpg'
import butter from './images/butter.png'
import milk from './images/milk.png'

const products = [
    {
        id : 1,
        name : "Whole french bread",
        description : "made in paris and destinated to the whole world",
        price : 1,
        image : bread
    },
    {
        id: 2,
        name : "French Swiss milk",
        description : "semi skimmed milk that comes straight from the alpes farmers",
        price : 1.15,
        image : milk
    },
    {
        id: 3,
        name : "Butter",
        description : "produced by us to ensure a high quality butter",
        price : 0.80,
        image : butter
    }
]

const getItemByID = (uniqueID) => {
    if (!uniqueID) console.error("You forgot to pass an ID to getItemByID() !");
    return products.filter(item => item.id === uniqueID)[0];
}

export {getItemByID};
export default products;