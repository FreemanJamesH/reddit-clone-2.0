app.directive('postForm', function(){
  return {
    replace: 'true',
    templateUrl: 'templates/postForm.html'
  }
})

app.directive('commentForm', function(){
  return {
    replace:'true',
    templateUrl: 'templates/commentForm.html'
  }
})

app.directive('postInfo', function(){
  return {
    replace: 'true',
    templateUrl: 'templates/postInfo'
  }
})

app.directive('mediaBody', function(){
  return {
    replace: 'true',
    templateUrl: 'templates/mediaBody'
  }
})

app.directive('mediaContainer', function(){
  return {
    replace: 'true',
    templateUrl: 'templates/mediaContainer'
  }
})
