// super simple service to check for the latest blog post every 15 mins
class LatestBlogService {
  constructor() {
    this.lifeTime = 1000 * 60 * 15; // 15 mins in milliseconds
    this.lastRequest = null;

    this.latestPost = {
      url: 'https://ionicframework.com/blog',
      title: 'Get the latest from the Ionic Blog'
    };
  }

  getLatestPost() {
    const d = new Date();

    const feedURL = 'https://ionicframework.com/blog/feed/json';
    // if server was restarted or it's been a while, get new integrations
    if (
      this.lastRequest === null ||
      this.lastRequest + this.lifeTime < d.getTime()
    ) {
      // console.log('getting new!');
      try {
        fetch(feedURL).then(res => res.json()).then(response => {
          this.latestPost = {
            url: response.items[0].url,
            title: response.items[0].title
          };
        });

        this.lastRequest = d.getTime();
      } catch(e) {
        console.error(e);
      }
    }

    // either way, return what we got
    return this.latestPost;
  }

  clear() {
    this.latestPost = null;
  }
}

const lbs = new LatestBlogService();

module.exports = lbs;