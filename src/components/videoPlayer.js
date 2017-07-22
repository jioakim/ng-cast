angular.module('video-player')

.component('videoPlayer', {
  // TODO
  template:`

  <div class="video-player">
    <div class="embed-responsive embed-responsive-16by9">
      <p ng-if="!$ctrl.video">Please wait</p>
      <iframe ng-if="$ctrl.video" class="embed-responsive-item" ng-src="{{'https://www.youtube.com/embed/' + $ctrl.video.id.videoId}}" allowFullScreen></iframe>
    </div>
    <div class="video-player-details">
      <h3>{{$ctrl.video.snippet.title}}</h3>
      <div>{{$ctrl.video.snippet.description}}</div>
    </div>
  </div>
  `,
  bindings: {
    video: '='
  }
});
