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


