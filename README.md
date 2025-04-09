# 🎬 Movie Player Website

A Netflix-inspired movie streaming UI built with HTML, CSS, and JavaScript. This project simulates a simple video player that plays YouTube trailers based on user selection. The design includes sections like "Continue Watching", "Latest on Netflix", and "Popular on Netflix".

## 🌟 Features

- ✅ Movie thumbnails clickable to play trailers
- ✅ Embedded YouTube player with autoplay support
- ✅ Categorized movie sections
- ✅ Dynamic content based on query parameters
- ✅ Responsive layout for better user experience

## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)

## 🧠 How It Works

1. User lands on the homepage.
2. Clicks a movie from a section.
3. Gets redirected to `player.html?section=sectionName&id=movieIndex`.
4. YouTube video is embedded and auto-plays.

```js
// Sample player logic
const urlParams = new URLSearchParams(window.location.search);
const section = urlParams.get('section');
const movieId = parseInt(urlParams.get('id'));
