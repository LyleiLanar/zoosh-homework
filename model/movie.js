export default class {
  constructor(id, title, category, score) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.score = score;
  }

  static getMoviesByName() {
    return [
      { id: 1, title: "Kis kacsa fürdik", category: "Horror", score: 0.8 },
      { id: 2, title: "Nagy kacsa fürdik", category: "Thriller", score: 0.79 },
    ];
  }
}
