interface AudioPlayer {
    audioVolume: number,
    songDuration: number,
    song: string,
    details: Details;
}

interface Details {
    author: string,
    year: number
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'Mess',
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

// const { song } = audioPlayer;

const { author } = audioPlayer.details;

// const { author } = details;

// console.log(details);
// console.log({author});
// console.log('Song: ', song);
// console.log('Duration: ', audioPlayer.songDuration);
// console.log('Author: ', audioPlayer.details.author);
console.log(author);

const dbz: string[] = ['Goku', 'Vegeta'];

const [, , trunks = 'Not Found']: string[] = dbz;

console.error('Personaje 3:', trunks);


export{};