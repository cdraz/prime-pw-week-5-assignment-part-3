console.log('***** Music Collection *****')
let collection = []; // declaring collection variable

const addToCollection = (title, artist, yearPublished) => {
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push(album);
    return album;
}