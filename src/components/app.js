angular.module('video-player')
// .controller('VideoCtrl', ['$scope', function VideoCtrl($scope) {
//   $scope.data = exampleVideoData;
//   this.firstVideo = exampleVideoData[0];

//   $scope.playVideo = function(video){
//     this.firstVideo = video;
//     console.log('VIDEO OBJECT',$scope.firstVideo);
//   };
// }])
.component('app', {
  // TODO
  controller: function() {
    this.data = exampleVideoData;
    this.firstVideo = exampleVideoData[0];

    this.playVideo = (video) => {
      this.firstVideo = video;
      console.log('VIDEO OBJECT',this.firstVideo);
    }
  },
  template: `
    <div id="app container">
      <nav class="navbar">
        <div class="col-md-6 col-md-offset-3">
          <search><h5><em>search</em> component goes here</h5></search>
        </div>
      </nav>
      <div class="row">
        <div class="col-md-7">
          <video-player video="$ctrl.firstVideo"><h5><em>videoPlayer</em> component goes here</h5></video-player>
        </div>
        <div class="col-md-5">
          <video-list videos="$ctrl.data" on-click="$ctrl.playVideo"><h5><em>videoList</em> component goes here</h5></video-list>
        </div>
      <div>
    </div>
  `
});

