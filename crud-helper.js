require('./config/database');

/*--- Require the app's Mongoose models ---*/
const Post = require('./models/post');
const User = require('./models/user');

/*--- Define Variables to Hold Documents ---*/
let post, posts;
let user, users;

/*--- Example ---*/

// console.log all movie documents
// Preview of promise syntax - coming SOON!
post.find({}).then(console.log);

console.log('Time to CRUD!');