/*
* Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should create a function named flattenPlaylists that accepts an array of playlists where each playlist is an array of objects with the following properties: trackId, artist, title, votes, bpm. If the input is not an array, flattenPlaylists should return an empty array. An example playlist has been provided for you. You can use this example to test out your function.

flattenPlaylists should return a flat array of track objects, where each object includes all the original track properties plus a source property set to an array with the playlist index and the track index indicating where the track originated.

You should create a function named scoreTracks that accepts an array of track objects as returned by flattenPlaylists (each with trackId, artist, title, votes, bpm, and source properties) and returns a new array of track objects, each with a score property added using the formula: votes * 10 - Math.abs(bpm - 120).

You should create a function named dedupeTracks that accepts an array of track objects as returned by scoreTracks and returns a new array with duplicate trackId entries removed, keeping only the first occurrence of each.

You should create a function named enforceArtistQuota that accepts an array of track objects as returned by dedupeTracks and a number representing the maximum allowed occurrences per artist. The function should return a new array where no artist appears more times than the given number, keeping the earliest occurrences.

You should create a function named buildSchedule that accepts an array of track objects as
* returned by enforceArtistQuota and returns a new array of { slot, trackId } objects, where slot is a 1-based index representing each track's position in the broadcast
* order.

You should create a function named remixPlaylist that accepts an array of playlists and the maximum number of allowed occurrences per artist. The function should return the final broadcast schedule as an array of { slot, trackId } objects, by calling flattenPlaylists, scoreTracks, dedupeTracks, enforceArtistQuota, and buildSchedule in order.

Tests:
Waiting:1. You should have a function named flattenPlaylists.
Waiting:2. You should return an empty array from flattenPlaylists when the input is not an array.
Waiting:3. Each track returned by flattenPlaylists should include a source field that is an array containing the playlist index and the track index.
Waiting:4. You should have a function named scoreTracks.
Waiting:5. Each track returned by scoreTracks should include a numeric score field.
Waiting:6. You should calculate score using a target BPM of 120 and this formula: votes * 10 - Math.abs(bpm - 120).
Waiting:7. You should have a function named dedupeTracks.
Waiting:8. When duplicate trackId values exist, dedupeTracks should keep only the first occurrence of the track.
Waiting:9. You should have a function named enforceArtistQuota.
Waiting:10. enforceArtistQuota should ensure no artist appears more than maxPerArtist times by removing extra tracks while keeping the earliest ones.
Waiting:11. You should have a function named buildSchedule.
Waiting:12. buildSchedule should return an array of objects with the shape { slot, trackId }, where slot starts at 1.
Waiting:13. You should have a function named remixPlaylist.
Waiting:14. remixPlaylist should call the helper functions in order to produce the final schedule.
* */

const playlists = [
    [
        {
            trackId: "trk101",
            artist: "Velvet Comet",
            title: "Crimson Afterglow",
            votes: 5,
            bpm: 122
        },
        {
            trackId: "trk102",
            artist: "Neon Harbor",
            title: "Static Horizon",
            votes: 2,
            bpm: 108
        },
        {
            trackId: "trk103",
            artist: "Lunar Arcade",
            title: "Midnight Frequency",
            votes: 4,
            bpm: 128
        }
    ],
    [
        {
            trackId: "trk201",
            artist: "Solar Echo",
            title: "Glass Skyline",
            votes: 3,
            bpm: 115
        },
        {
            trackId: "trk202",
            artist: "Velvet Comet",
            title: "Satellite Hearts",
            votes: 6,
            bpm: 124
        }
    ]
];

function flattenPlaylists(playlists) {
    if (!Array.isArray(playlists)) {
        return [];
    }

    let tracks = [];
    for (let i = 0; i < playlists.length; i++) {
        const playlist = playlists[i];
        for (let j = 0; j < playlist.length; j++) {
            const track = playlist[j];
            tracks.push({
                ...track,
                source: [i, j]
            });
        }
    }
    return tracks;
}



function scoreTracks(tracks) {
    return tracks.map(track => ({
        ...track,
        score: track.votes * 10 - Math.abs(track.bpm - 120)
    }));
}



function dedupeTracks(tracks) {
     return tracks.filter((track, index, self) =>
        index === self.findIndex(t => t.trackId === track.trackId)
    );
}



function enforceArtistQuota(tracks, quota) {
    const artistCounts = {};
    return tracks.filter(track => {
        const artist = track.artist;
        artistCounts[artist] = (artistCounts[artist] || 0) + 1;
        return artistCounts[artist] <= quota;
    });
}



function buildSchedule(tracks) {
    return tracks.map((track, index) => ({
        slot: index + 1,
        trackId: track.trackId,
    }))
}



function remixPlaylist(playlists, quota) {
    const flatTracks = flattenPlaylists(playlists);
    const trackScores = scoreTracks(flatTracks);
    const uniqueTracks = dedupeTracks(trackScores);
    const artistQuotaTracks = enforceArtistQuota(uniqueTracks, 1);
    return buildSchedule(artistQuotaTracks);
}

function trackTotal(initialValue) {
    let total = initialValue;
    return function(increment) {
        total += increment;
        return total;
    };
}

