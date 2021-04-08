const router = require('express').Router();
const { Post } = require('../models/');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    console.log(req.session);
    const postData = await Post.findAll({
      where: {
        // TODO: SET USERID TO THE LOGGED-IN USER ID
        userId: req.session.id,
      },
    });
    console.log({postData});
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);

    res.render('all-posts-admin', {
      layout: 'dashboard',
      posts,
    });
  } catch (err) {
    console.log(err);
    res.redirect('login');
  }
});

router.get('/new', withAuth, (req, res) => {
  res.render('new-post', {
    layout: 'dashboard',
  });
});

router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (postData) {
      const post = postData.get({ plain: true });

      res.render('edit-post', {
        layout: 'dashboard',
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('login');
  }
});

module.exports = router;
