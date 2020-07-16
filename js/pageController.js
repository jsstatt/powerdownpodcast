angular
  .module('ngPage')
  .controller('pageController', function($scope) {
    $scope.str = '';
    $scope.pos1 = '';
    $scope.pos2 = '';
    $scope.charArray = [{pos1: '5', pos2: '1', out: 'A'},
    {pos1: '5', pos2: '2', out: 'B'},
    {pos1: '5', pos2: '3', out: 'a'},
    {pos1: '5', pos2: '4', out: 'b'},
    {pos1: '6', pos2: '1', out: 'C'},
    {pos1: '6', pos2: '2', out: 'D'},
    {pos1: '6', pos2: '3', out: 'c'},
    {pos1: '6', pos2: '4', out: 'd'},
    {pos1: '7', pos2: '1', out: 'E'},
    {pos1: '7', pos2: '2', out: 'F'},
    {pos1: '7', pos2: '3', out: 'e'},
    {pos1: '7', pos2: '4', out: 'f'},
    {pos1: '8', pos2: '1', out: 'G'},
    {pos1: '8', pos2: '2', out: 'H'},
    {pos1: '8', pos2: '3', out: 'g'},
    {pos1: '8', pos2: '4', out: 'h'},
    {pos1: '9', pos2: '1', out: 'I'},
    {pos1: '9', pos2: '2', out: 'J'},
    {pos1: '9', pos2: '3', out: 'i'},
    {pos1: '9', pos2: '4', out: 'j'},
    {pos1: '.', pos2: '1', out: 'K'},
    {pos1: '.', pos2: '2', out: 'L'},
    {pos1: '.', pos2: '3', out: 'k'},
    {pos1: '.', pos2: '4', out: 'l'},
    {pos1: ',', pos2: '1', out: 'm'},
    {pos1: ',', pos2: '2', out: 'n'},
    {pos1: ',', pos2: '3', out: 'm'},
    {pos1: ',', pos2: '4', out: 'n'},
    {pos1: '_', pos2: '1', out: 'O'},
    {pos1: '_', pos2: '2', out: 'P'},
    {pos1: '_', pos2: '3', out: 'o'},
    {pos1: '_', pos2: '4', out: 'p'},
    {pos1: '\u201D', pos2: '1', out: 'Q'},
    {pos1: '\u201D', pos2: '2', out: 'R'},
    {pos1: '\u201D', pos2: '3', out: 'q'},
    {pos1: '\u201D', pos2: '4', out: 'r'},
    {pos1: '0', pos2: '1', out: 'S'},
    {pos1: '0', pos2: '2', out: 'T'},
    {pos1: '0', pos2: '3', out: 's'},
    {pos1: '0', pos2: '4', out: 't'},
    {pos1: '*', pos2: '1', out: 'U'},
    {pos1: '*', pos2: '2', out: 'V'},
    {pos1: '*', pos2: '3', out: 'u'},
    {pos1: '*', pos2: '4', out: 'v'},
    {pos1: '@', pos2: '1', out: 'W'},
    {pos1: '@', pos2: '2', out: 'X'},
    {pos1: '@', pos2: '3', out: 'w'},
    {pos1: '@', pos2: '4', out: 'x'},
    {pos1: '#', pos2: '1', out: 'Y'},
    {pos1: '#', pos2: '2', out: 'Z'},
    {pos1: '#', pos2: '3', out: 'y'},
    {pos1: '#', pos2: '4', out: 'z'},
    {pos1: '$', pos2: '1', out: '%'},
    {pos1: '$', pos2: '2', out: '&'},
    {pos1: '$', pos2: '3', out: '('},
    {pos1: '$', pos2: '4', out: ')'},
    {pos1: '+', pos2: '1', out: '-'},
    {pos1: '+', pos2: '2', out: '/'},
    {pos1: '+', pos2: '3', out: ':'},
    {pos1: '+', pos2: '4', out: ';'},
    {pos1: '<', pos2: '1', out: '='},
    {pos1: '<', pos2: '2', out: '>'},
    {pos1: '<', pos2: '3', out: '['},
    {pos1: '<', pos2: '4', out: '/'},
    {pos1: ']', pos2: '1', out: '^'},
    {pos1: ']', pos2: '2', out: '`'},
    {pos1: ']', pos2: '3', out: '{'},
    {pos1: ']', pos2: '4', out: '|'},
    {pos1: 'Ā', pos2: '1', out: 'ā'},
    {pos1: 'Ā', pos2: '2', out: 'Ă'},
    {pos1: 'Ā', pos2: '3', out: 'ă'},
    {pos1: 'Ā', pos2: '4', out: 'Ą'},
    {pos1: 'ą', pos2: '1', out: 'Ć'},
    {pos1: 'ą', pos2: '2', out: 'ć'},
    {pos1: 'ą', pos2: '3', out: 'Ĉ'},
    {pos1: 'ą', pos2: '4', out: 'ĉ'},



  ];

    $scope.addToString = function(strIn) {
      if ($scope.pos1 == "") {
        if (strIn == 1 || strIn == 2 || strIn == 3 || strIn == 4) {
            $scope.str += strIn;
            $scope.pos1 = '';
            $scope.pos2 = '';
        } else {
          $scope.pos1 = strIn;
          if ($scope.pos2 == "") {
              $scope.str += $scope.pos1;
          }
        }
      } else if ($scope.pos2 == "") {
        if (strIn == 1 || strIn == 2 || strIn == 3 || strIn == 4) {
            $scope.pos2 = strIn;
        } else {
          $scope.str += strIn;
          $scope.pos1 = '';
          $scope.pos2 = '';
        }
      } else {
        $scope.pos1 = strIn;
        $scope.str += $scope.pos1;
        $scope.pos2 = '';
      }

      if ($scope.pos1 != '' && $scope.pos2 != '') {
        for(var i = 0; i < $scope.charArray.length; i++){
          if ($scope.pos1 == $scope.charArray[i].pos1 && $scope.pos2 == $scope.charArray[i].pos2) {
            $scope.str = $scope.str.slice(0, -1);
            $scope.str += $scope.charArray[i].out;
            $scope.pos1 = '';
            $scope.pos2 = '';
          }
        }
      }
    }

    $scope.backSpace = function() {
      $scope.str = $scope.str.slice(0, -1);
      $scope.pos1 = '';
      $scope.pos2 = '';
    }

  });
