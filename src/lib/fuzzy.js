import Fuse from 'fuse.js'

function findClosestMatch(list, pattern, keys) {
    const options = {
        keys: keys,
        includeScore: true
    }

    const fuse = new Fuse(list, options);
    const result = fuse.search(pattern, { limit: 50 }); 
    return result[0]; // return best match
}

/*const list = [
    {"title": "wtf lol"}, 
    {"title": "wtf"}
]
const test = () => console.log(findClosestMatch(list, "wtf", ['title']));*/

export default findClosestMatch;