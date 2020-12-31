class Media {
    constructor(title) {
      this._title = title
      this._ratings = []
      this._isCheckedOut = false
    }
    get title(){
      return this._title
    }
    get isCheckedOut(){
      return this._isCheckedOut
    }
    get ratings(){
      return this._ratings
      }
    toggleCheckOutStatus(){
      if (this._isCheckedOut === true){
        this._isCheckedOut = false
      } else {
        this._isCheckedOut = true
      }
    }
    getAverageRating(){
      return this.ratings.reduce((currentSum, rating) => currentSum + rating, 0) / this.ratings.length;
    }
    addRating(rating){
      this._ratings.push(rating)
    }
  }
  
  class Book extends Media {
    constructor(title, author, pages){
      super(title)
      this._author = author
      this._pages = pages
    }
    get author() {
      return this._author
    }
    get pages() {
      return `${this._pages} pages`
    }
  }
  
  class Movie extends Media {
    constructor(title, director, runTime){
      super(title)
      this._director = director
      this._runTime = runTime
    }
    get director(){
      return this._director
    }
    get runTime(){
      return `${this._runTime / 60} hours`
    }
  }
  
  //TEST CODE MEDIA:
  //const media1 = new Media('Test');
  //media1.addRating(10);
  //media1.addRating(5);
  //console.log(media1.ratings);
  //console.log(media1.getAverageRating());
  //console.log(media1.isCheckedOut);
  //media1.toggleCheckOutStatus();
  //console.log(media1.isCheckedOut);
  
  //TEST CODE BOOK:
  //const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
  //console.log(historyOfEverything.isCheckedOut);
  //historyOfEverything.toggleCheckOutStatus();
  //console.log(historyOfEverything.isCheckedOut);
  //historyOfEverything.addRating(5);
  //historyOfEverything.addRating(5);
  //historyOfEverything.addRating(4);
  //console.log(historyOfEverything.getAverageRating());
  //console.log(historyOfEverything.title)
  //console.log(historyOfEverything.author)
  //console.log(historyOfEverything.pages)
  
  //TEST CODE MOVIE:
  //const speed = new Movie('Speed', 'Jan de Bont', 116)
  //console.log(speed.isCheckedOut)
  //speed.toggleCheckOutStatus()
  //console.log(speed.isCheckedOut)
  //speed.addRating(1)
  //speed.addRating(1)
  //speed.addRating(5)
  //console.log(speed.getAverageRating())
  //console.log(speed.title)
  //console.log(speed.director)
  //console.log(speed.runTime)
  //console.log(speed.ratings)