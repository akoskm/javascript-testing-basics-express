class DataStore {
  tweetsDB = [];

  addTweet(tweet) {
    this.tweetsDB.push(tweet);
  }

  get tweets() {
    return this.tweetsDB;
  }
}

export default DataStore;
