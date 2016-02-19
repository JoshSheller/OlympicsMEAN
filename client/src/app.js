import angular from 'angular'

var app = angular.module('app', [])

app.controller('sportsController', function() {
  this.sports = ["Weightlifting", "Cycling"];
})