console.log('***** Music Collection *****')
let collection = []; // declaring collection variable

// Adding addToCollection function (Including tracks)
const addToCollection = (title, artist, yearPublished, trackArray) => {
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        tracks: trackArray
    }
    collection.push(album);
    return album;
} // end addToCollection

// testing addToCollection (3 tracks per album because I'm lazy)
console.log(addToCollection('Punisher', 'Phoebe Bridgers', '2020', [['DVD Menu', '1:09'], ['Garden Song', '3:39'], ['Kyoto', '3:04']]));
console.log(addToCollection('Stranger in the Alps', 'Phoebe Bridgers', '2017', [['Smoke Signals', '5:24'], ['Motion Sickness', '3:49'], ['Funeral', '3:52']]));
console.log(addToCollection('The Money Store', 'Death Grips', '2012', [['Get Got', '2:51'], ['The Fever (Aye Aye)', '3:06'], ['Lost Boys', '3:06']]));
console.log(addToCollection('Helplessness Blues', 'Fleet Foxes', '2011', [['Montezuma', '3:36'], ['Bedouin Dress', '4:29'], ['Sim Sala Bim', '3:14']]));
console.log(addToCollection('Crack Up', 'Fleet Foxes', '2017', [['I Am All That I Need / Arroyo Seco / Thumbprint Scar', '6:24'], ['Cassiues, -', '4:49'], ['- Naiads, Cassadies', '3:10']]));
console.log(addToCollection('how i\'m feeling now', 'Charli XCX', '2020', [['pink diamond', '2:04'], ['forever', '4:03'], ['claws', '2:29']]));
console.log(collection);

// Adding showCollection function (including tracks)
const showCollection = array => {
    console.log(array.length);
    for (album of array) {
        console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}:`);
        for (track of album.tracks) {
            console.log(`${album.tracks.indexOf(track) + 1}. ${track[0]}: ${track[1]}`);
        }
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
    // if blank search criteria or no criteria passed, return full collection
    if (searchCriteria === {} || searchCriteria === undefined) { 
        results = collection;
        return results;
    } 
    else {
    for (album of collection) {
        // *all* search criteria must match to return result - search format { artist: ARTIST, year: YEAR, trackName: TRACKNAME }
        if (searchCriteria.artist === album.artist && searchCriteria.year === album.yearPublished) { 
            // Now that we checked if the artist and year match, we loop through the tracks to make sure track name matches before we push result
            for (track of album.tracks) {
                if (searchCriteria.trackName === track[0])
                results.push(album);
            }
        }
     }
    }
    console.log(results);
    return results;
} // end search

// testing search function
console.log('Testing search: Phoebe Bridgers 2020 Kyoto (expect Punisher match)', search({artist: 'Phoebe Bridgers', year: '2020', trackName: 'Kyoto'}));
console.log('Testing search: Kacey Musgraves 2018 Rainbow (expect empty array)', search({artist: 'Kacey Musgraves', year: '2018', trackName: 'Rainbow'}));
console.log('Testing search: no search criteria (expecting full collection)', search());