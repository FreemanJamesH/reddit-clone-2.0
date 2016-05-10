app.controller("MainController", ['$scope', 'dataService', function($scope, dataService) {

  $scope.view = {};

  $scope.$watch(function(){
    return dataService.posts()
  },
  function(newValue){
    console.log(newValue);
    $scope.posts = newValue
  }, true)




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
}])
