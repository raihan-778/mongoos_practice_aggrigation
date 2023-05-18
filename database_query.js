// **Task 1:** Find all users who are located in New York.
db.practice_class.find({
  "address.city": "New York",
});

// **Task 2:** Find the user(s) with the email "**[johndoe@example.com](mailto:johndoe@example.com)**" and retrieve their favorite movie.
db.practice_class
  .find({
    email: "johndoe@example.com",
  })
  .project({ "favorites.movie": 1 });

// **Task 3:** Find all users with "pizza" as their favorite food and sort them according to age.
db.practice_class
  .find({
    "favorites.food": "pizza",
  })
  .sort({ age: 1 });

// **Task 4**: Find all users over 30 whose favorite color is "green".

db.practice_class.find({
  $and: [{ age: { $gt: 30 }, "favorites.color": "green" }],
});
// **Task 5:** Count the number of users whose favorite movie is "The Shawshank Redemption."
