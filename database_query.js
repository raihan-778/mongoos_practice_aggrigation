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
db.practice_class
  .find({
    "favorites.movie": "The Shawshank Redemption",
  })
  .count();
// **Task 6:** Update the zipcode of the user with the email "**[johndoe@example.com](mailto:johndoe@example.com)**" to "10002".
db.practice_class.updateOne(
  { email: "johndoe@example.com" },
  { $set: { "address.zipcode": "10002" } }
);

// **Task 7:** Delete the user with the email "**[alicewilliams@example.com](mailto:alicewilliams@example.com)**" from the user data.
db.practice_class.deleteOne({ email: "alicewilliams@example.com" });

// **Task 8**: Group users by their favorite movie and retrieve the average age in each movie group.
db.practice_class.aggregate([
  {
    $group: {
      _id: "$favorites.movie",
      avgAge: { $avg: { $toInt: "$age" } },
    },
  },
  {
    $project: {
      groupCountByMovie: "$_id",
      avgAge: 1,
      groupCount: { $sum: 1 },
      _id: 0,
    },
  },
]);
