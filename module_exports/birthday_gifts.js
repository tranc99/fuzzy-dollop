// birthday_gifts.js

// import the book recommendations module
var books = require('./book_recommendations');

// gets some music recommendations as well
var musicAlbums = [
  {"artist": "The Killers", "title": "Live From The Royal Albert Hall"},
  {"artist": "Eminem", "title": "The Marshall Mathers LP"}
];

// the two best items from each category
var topIdeas = function() {
  return [musicAlbums[0], books.favoriteBook()];
}

// outputs a message specifying the customer's recommended gifting items
var gifts = function() {
  console.log("Your recommended gifts are:\n");
  console.log("######MUSIC######");
  for (let i = 0, len = musicAlbums.length; i < len; i++) {
    console.log(musicAlbums[i].title + " by " + musicAlbums[i].artist);
  }
  console.log("######BOOKS######");
  var recommendedBooks = books.getBookRecommendations();
  for (let i = 0, len = recommendedBooks.length; i < len; i++) {
    console.log(recommendedBooks[i].title + " by " + recommendedBooks[i].author);
  }
  console.log("\n\nYours");
  console.log("Shop Staff\n*************");
  console.log("P.S. If you have a limited budget, you should just get the music album " + topIdeas()[0].title + " and the book " + topIdeas()[1].title + ".");
}

console.log("Welcome to our gift shop.\n");

// get the gifts
gifts();
