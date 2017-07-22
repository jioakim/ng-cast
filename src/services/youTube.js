angular.module('video-player')
.service('youTube', function($http){
  // TODO


  this.search = function(query, successCallback) {
    var params = {
      key: window.YOUTUBE_API_KEY,
      q: query || 'cats',
      type: 'video',
      part: 'snippet',
      maxResults: 5
    };

    const URL = 'https://www.googleapis.com/youtube/v3/search';

    $http({
      url: URL,
      method: "GET",
      params: params
    }).then((res) => {
      successCallback(res.data.items);
      console.log('success!');
    }, (err) => {
      console.error('Error found',err);
    })
  }
});
