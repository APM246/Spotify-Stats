import Fuse from 'fuse.js'

function findClosestMatch(list, pattern, keys) {
    const options = {
        keys: keys,
        includeScore: true
    }
    
    const fuse = new Fuse(list, options);
    const result = fuse.search(pattern, { limit: 50 }); 
    
    console.log(`Search for ${pattern}:`)
    let i = 0;
    for (const res of result) {
        console.log(`${i}. ${res.item.name}, score: ${res.score}`)
        i++;
    }

    return result[0];
}

/*const list = [
    {"title": "wtf lol"}, 
    {"title": "wtf"}
]
const test = () => console.log(findClosestMatch(list, "wtf", ['title']));*/

export default findClosestMatch;