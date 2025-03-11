const shortentext= (text) => {
    return text.split(" ").slice(0,3).join("")

}

const searchproducts= (products , search) => {
    if (!search) return products;
    const searchedproducts= products.filter((p) => p.title.toLowerCase().includes(search));
    return searchedproducts;
}

export {shortentext,searchproducts}