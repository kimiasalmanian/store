const shortentext= (text) => {
    return text.split(" ").slice(0,3).join("")
}

export {shortentext}