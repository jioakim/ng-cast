angular.module('video-player')
.component('videoList', {
  template: `
  <ul class="video-list">
    Jay jhgjhgjhgjhgjhg
    <video-list-entry ng-repeat="video in $ctrl.videos" video="video" on-click="$ctrl.onClick"></video-list-entry>
  </ul>
  `,
  bindings: {
    videos: '=',
    onClick: '='
  }
});
