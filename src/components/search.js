angular.module('video-player')
.component('search', {
  // TODO
  template: `
  <div class="search-bar form-inline">
    <input class="form-control" type="text" ng-model="query"/>
    <button class="btn" ng-click="$ctrl.result(query)">
      <span class="glyphicon glyphicon-search"></span>
    </button>
  </div>
  `,
  bindings: {
    "result": '='
  }
});
