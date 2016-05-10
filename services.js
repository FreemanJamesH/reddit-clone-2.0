app.service('dataService', [function(){

  this.posts = function(){
    return [

      {
      title: 'Middle Aligned Media',
      author: 'James Freeman',
      image: 'https://image.freepik.com/free-icon/image-square_318-76047.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt velit eveniet nemo quod, vel at commodi in sint itaque quam consequatur eligendi numquam ducimus ipsa mollitia molestias saepe laudantium perferendis.',
      voteCount: 1,
      date: 1462847830755,
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
      date: 1462847830755,
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
      date: 1462847830755,
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
  }

}])
