console.log('***** Music Collection *****')
let collection = []; // declaring collection variable

// Adding addToCollection function
const addToCollection = (title, artist, yearPublished) => {
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push(album);
    return album;
} // end addToCollection

// testing addToCollection
console.log(addToCollection('Punisher', 'Phoebe Bridgers', '2020'));
console.log(addToCollection('Stranger in the Alps', 'Phoebe Bridgers', '2017'));
console.log(addToCollection('The Money Store', 'Death Grips', '2012'));
console.log(addToCollection('Helplessness Blues', 'Fleet Foxes', '2011'));
console.log(addToCollection('Crack Up', 'Fleet Foxes', '2017'));
console.log(addToCollection('How I\'m Feeling Now', 'Charli XCX', '2020'));
console.log(collection);

// Adding showCollection function
const showCollection = array => {
    console.log(array.length);
    for (album of array) {
        console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
    }
} // end showCollection

// Testing showCollection function
showCollection(collection);

// Adding findByArtist function
const findByArtist = artistToFind => {
    let matches = [];
    for (album of collection) {
        if (artistToFind === album.artist) {
            matches.push(album);
        }
    }
    return matches;
}

// Testing findByArtist function
console.log(findByArtist('Fleet Foxes'));
console.log(findByArtist('King Gizzard & The Lizard Wizard'));
console.log(findByArtist('Charli XCX'));


// **** STRETCH GOALS ****

// Adding search function
const search = searchCriteria => {
    let results = [];
    for (album of collection) {
        if (searchCriteria.artist === album.artist && searchCriteria.year === album.yearPublished) { // search criteria is artist and year, both need to match to return result
            results.push(album);
        }
    }
    if (searchCriteria === "" || searchCriteria === undefined) { // if blank search criteria or no criteria passed, return full collection
        results = collection;
    }
    console.log(results);
    return results;
} // end search