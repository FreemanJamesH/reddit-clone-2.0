app.controller("MainController", function($scope) {

  var seedPosts = [

    {
    title: 'Middle Aligned Media',
    author: 'James Freeman',
    image: 'https://image.freepik.com/free-icon/image-square_318-76047.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt velit eveniet nemo quod, vel at commodi in sint itaque quam consequatur eligendi numquam ducimus ipsa mollitia molestias saepe laudantium perferendis.',
    voteCount: 1,
    date: Date.now(),
    commentsBool: false,
    commentFormBool: false,
    comments: [{
      author: 'James Freeman',
      comment: "Here's a comment!"
    }, {
      author: 'Sasha Dunbar',
      comment: "Here's another comment!"
    }]
  },
  {
    title: 'Check out this Witch Doctor',
    author: 'James Freeman',
    image: 'http://dota2walls.com/wp-content/uploads/2014/10/witch-doctor-look-at-it-go-wallpaper.png',
    description: 'The dance of the Witch Doctor, channeling immense power drawn from the invisible reserves of Throg\'gorak.',
    voteCount: 1,
    date: Date.now(),
    commentsBool: false,
    commentFormBool: false,
    comments: [{
      author: 'Bro James Freeman',
      comment: "Bro ur description is stupid."
    }, {
      author: 'Sasha Dunbar',
      comment: "Leave him alone! He's trying to be poetic! At least he's trying!"
    }]
  },
  {
    title: 'Canine Terrorbeast',
    author: 'Sasha Dunbar',
    image: 'https://i.ytimg.com/vi/To8oesttqc4/hqdefault.jpg',
    description: 'Dogs are evil. Dogs are scary. Behold, the gaze of the Soulless One. Hide yours kids. Hide your wife.',
    voteCount: 1,
    date: Date.now(),
    commentsBool: false,
    commentFormBool: false,
    comments: [{
      author: 'Corgi',
      comment: "Are you fucking kidding me? I'm adorable!"
    }, {
      author: 'Sasha Dunbar',
      comment: "AHHHHHHHHHHHHHHHHHHHHHHHHHH!!!!!!!!!!!!!!!!!!!!!"
    }]
  }]




  $scope.view = {};


  $scope.posts = seedPosts;

  $scope.sortBy = function(input){
    $scope.sortType = input;
    if (input == '-voteCount') {
      $scope.sortDisplay = 'votes'
    } else if (input == '-date') {
      $scope.sortDisplay = 'date'
    } else {
      $scope.sortDisplay = 'title'
    }
  }

  $scope.sortType = '-voteCount';
  $scope.sortDisplay = 'votes'


  $scope.view.postFormBool = false;

  $scope.changeBool = function() {
    if ($scope.view.postFormBool == false) {
      $scope.view.postFormBool = true;
    } else {
      $scope.view.postFormBool = false;
    }
  }

  $scope.incrementUp = function(post) {
    post.voteCount += 1;
  };

  $scope.incrementDown = function(post) {
    post.voteCount -= 1;
  };

  $scope.showHideComments = function(post) {
    if (post.commentsBool == false){
      post.commentsBool = true
    } else {
      post.commentsBool = false;
    }
  }

  $scope.showHideCommentForm = function(post) {
    if (post.commentFormBool == false){
      post.commentFormBool = true
    } else {
      post.commentFormBool = false;
    }
  }


  $scope.submit = function() {
    var postData = {};
    postData.title = $scope.title;
    postData.author = $scope.author;
    postData.image = $scope.image;
    postData.description = $scope.description;
    postData.voteCount = 1;
    postData.comments = [];
    postData.date = Date.now()
    $scope.posts.push(postData);
    $scope.title = '';
    $scope.author = '';
    $scope.image = '';
    $scope.description = ''
    $scope.postForm.$setPristine();
    $scope.view.postFormBool = false

  }

  $scope.newComment = {};

  $scope.submitComment = function(post, newComment, index, commentForm){
    console.log(newComment);
    post.comments.push(newComment);
      $scope.newComment[index] = null;
      post.commentFormBool = false;
      post.commentsBool = true;
      commentForm.$setPristine();

  }
})
