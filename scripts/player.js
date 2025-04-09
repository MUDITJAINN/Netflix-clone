const urlParams = new URLSearchParams(window.location.search);
const movieId = parseInt(urlParams.get('id'));
const section = urlParams.get('section');

const movieSections = {
    continueWatching: [
      '3Ld05Om2UWs', // Hi Nanna
      'BmllggGO4pM', // The Gray Man
      'Yxe-mIVIwM4', // Shaitaan
      's_76M4c4LTo', // Madame Web
      'k5jfRCNVF1Q', // Lost
      '7bfS6seiLhk'  // The Kissing Booth
    ],
    latestNetflix: [
      'Otcr-vRuaQs', // Maharaja
      'dlC1tNsr-n8', // Dream Girl 2
      '6WW2qwoWZH0', // Anything
      'cMVBi_e8o-Y', // Leave the World Behind
      'MSrUHoc9LIE', // Godzilla
      'ReIJ1lbL-Q8'  // Good Will Hunting
    ],
    popularNetflix: [
      'GN_IwBptKi4', // Day Shift
      '19ikl8vy4zs', // The Equalizer 3
      'IJBnK2wNQSo', // Gods of Egypt
      'u5r77-OQwa8', // Sooryavanshi
      '4D7HSXZTh6U', // Mili
      'v0BVwskYlWk'  // Mrs. Chatterjee vs Norway
    ]
  };
  

const iframe = document.getElementById('youtubePlayer');
const title = document.getElementById('movieTitle');

if (section && movieSections[section] && movieId >= 0) {
  const videoId = movieSections[section][movieId];
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  title.innerText = `Now Playing: Movie ${movieId + 1}`;
} else {
  title.innerText = "Movie not found!";
}
