interface AudioPlayer {
	audioVolume: number;
	songDuration: number;
	song: string;
	details: Details;
}

interface Details {
	author: string;
	year: number;
}

const audioPlayer: AudioPlayer = {
	audioVolume: 90,
	songDuration: 3,
	song: 'Survival',
	details: {
		author: 'Muse',
		year: 2012,
	},
};

const { audioVolume, song, details } = audioPlayer;
const { author } = details;

console.log({ audioVolume, song, author });

// Array destructuring
const [p1, p2, p3]: string[] = ['Williams', 'Sauber Petronas', 'Lotus'];

console.log({ p1, p2, p3 });
export {};
