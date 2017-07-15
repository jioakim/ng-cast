angular.module('video-player')
.component('videoListEntry', {
  template: `
  <div>
    <li class="video-list-entry media" ng-repeat="video in $ctrl.videos">
      <div class="media-left">
        <img class="media-object" ng-src={{video.snippet.thumbnails.default.url}} />
      </div>
      <div class="media-body">
        <div
          class="video-list-entry-title"
          ng-click="$ctrl.onClick(video)">
            {{video.snippet.title}}
        </div>
        <div class="video-list-entry-detail">{{video.snippet.description}}</div>
      </div>
    </li>
  </div>

  `,
  bindings: {
    videos: '=',
    onClick: '='
  }
});
