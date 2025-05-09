const shortentext= (text) => {
    return text.split(" ").slice(0,3).join("")

}

const searchproducts= (products , search) => {
    if (!search) return products;
    const searchedproducts= products.filter((p) => p.title.toLowerCase().includes(search));
    return searchedproducts;
}

const filterproducts= (products , category) => {
    if (!category) return products
    const filteredproducts = products.filter((p) => p.category ===category);
    return filteredproducts
}  

const createqueryobject=(currentQuery , newQuery) =>{
    if (newQuery.category ==="all"){
        const {category, ...rest }=currentQuery;
        return rest;
    }
    if (newQuery.search === ""){
        const { search, ...rest} =currentQuery;
        return rest
    }
    return {...currentQuery , ...newQuery}
}

const getinitialquery=(searchparams) =>{
    const query={}
const category = searchparams.get("category");
const search = searchparams.get("search");
if (category) query.category = category;
if (search) query.search = search;
return query ;

}

const sumproducts=(products) =>{
const itemcounter= products.reduce((counter , products) => counter + products.quantity ,0
)
const total=products.reduce((total , products) => total + products.price * products.quantity ,0 ).toFixed(2)
 
return {itemcounter , total }
};

const productsquantity= (state, id) => {
    const index=state.selecteditem.findIndex((item) => item.id===id )
    if(index=== -1) {return 0;}
    else {return state.selecteditem[index].quantity}
    
    
    }


export {shortentext,searchproducts , filterproducts ,createqueryobject ,getinitialquery ,sumproducts, productsquantity}