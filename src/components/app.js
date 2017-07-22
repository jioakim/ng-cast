angular.module('video-player')
.component('app', {
  // TODO
  controller: function(youTube) {
    //this.data = exampleVideoData;
    //this.firstVideo = exampleVideoData[0];

    this.selectVideo = (video) => {
      this.currentVideo = video;
    }

    youTube.search('React js',(data) => {
      this.videos = data;
      this.currentVideo = data[0];
    });

    this.searchResults = (query) => {
      youTube.search(query, (data) => {
        this.videos = data;
        this.currentVideo = data[0];
      });
    }

  },
  template: `
    <div id="app container">
      <nav class="navbar">
        <div class="col-md-6 col-md-offset-3">
          <search result="$ctrl.searchResults"><h5><em>search</em> component goes here</h5></search>
        </div>
      </nav>
      <div class="row">
        <div class="col-md-7">
          <video-player video="$ctrl.currentVideo"><h5><em>videoPlayer</em> component goes here</h5></video-player>
        </div>
        <div class="col-md-5">
          <video-list videos="$ctrl.videos" on-click="$ctrl.selectVideo"><h5><em>videoList</em> component goes here</h5></video-list>
        </div>
      <div>
    </div>
  `
});

