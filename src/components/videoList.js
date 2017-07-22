angular.module('video-player')
.component('videoList', {
  template: `
  <ul class="video-list">
    Jay
    <video-list-entry ng-repeat="video in $ctrl.videos" video="video" on-click="$ctrl.onClick"><h5>Jay</h5></video-list-entry>
  </ul>
  `,
  bindings: {
    videos: '=',
    onClick: '='
  }
});
