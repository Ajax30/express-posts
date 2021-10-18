var axios = require('axios');
var helpers = require('../utils/helpers');

/* GET home page data */
exports.getHomepageData = async (req, res, next) => {

  let [userData, postData] =  await Promise.all([
    axios.get(`${base_url}/users`),
    axios.get(`${base_url}/posts`) 
  ]);

  const users = userData.data;
  const posts = postData.data;

  res.render('index',
  {
    layout: 'layout',
    title: 'Express Magazine',
    pageTitle: 'All posts',
    users: users,
    currentUser: null,
    posts: posts,

   }
  );
};

/* GET posts by user */
exports.getPostsByUser = async (req, res, next) => {

  let uid = req.params.uid;

  let [userData, currentUserData, postData] =  await Promise.all([
    axios.get(`${base_url}/users`),
    axios.get(`${base_url}/users/${uid}`),
    axios.get(`${base_url}/posts?userId=${uid}`) 
  ]);

  const users = userData.data;
  const currentUser = currentUserData.data;
  const posts = postData.data;

  res.render('index',
  {
    layout: 'layout',
    title: 'Express Magazine',
    users: users,
    posts: posts,
    currentUser: currentUser,
    pageTitle: `Posts by ${currentUser.name}`,
  });
};