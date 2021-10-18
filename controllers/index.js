var axios = require('axios');
var helpers = require('../utils/helpers');

/* GET home page data */
exports.getHomepageData = async (req, res, next) => {

  let [userData, postData] =  await Promise.all([
    axios.get('https://jsonplaceholder.typicode.com/users'),
    axios.get('https://jsonplaceholder.typicode.com/posts') 
  ]);

  const users = userData.data;
  const posts = postData.data;

  res.render('index',
  {
    layout: 'layout',
    title: 'Express',
    users: users,
    posts: posts,

   }
  );
};