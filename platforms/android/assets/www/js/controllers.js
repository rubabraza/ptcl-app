var hub = angular.module('starter.controllers', ['ionic','tabSlideBox']);

hub.controller('AppCtrl', ['$scope', '$ionicModal', '$timeout', '$state', '$ionicPlatform', 'data', '$ionicHistory','$ionicModal','$http','$ionicPopup','$sce','$window','$cordovaCamera', '$cordovaFile', '$cordovaFileTransfer', '$cordovaDevice','$cordovaActionSheet','$ionicActionSheet',
  function($scope, $ionicModal, $timeout, $state, $ionicPlatform, data, $ionicHistory,$ionicModal,$http,$ionicPopup,$sce,$window,$cordovaCamera, $cordovaFile, $cordovaFileTransfer, $cordovaDevice,$cordovaActionSheet,$ionicActionSheet) {





   $scope.names = [
    {
      1: 'Ayesha A'
     
    },
    {
      2: 'Azfar Khan'
    
    },
     {
      3: 'Ali Inam'
    
    },
     {
      4: 'Hassan'

    },
     {
      5: 'Asad Ali'
    
    } ,
    {
      6: 'Huma Zafar'
    
    },
     {
      7: 'Mateen'
    
    },
     {
      8: 'Zaid'
    
    }
    ];




     $scope.position = ['1st', '2nd', '3rd', '4th', '5th','6th','7th','8th'];

     $scope.recog_list = data.recog_list;
$scope.notifytext = [
    {
      1: 'Ayesha reached level 8'
     
    },
    {
      2: 'Asad gave you peer recognition'
    
    },
     {
      3: 'Ali gave you peer recognition'
    
    },
     {
      4: 'Zaid scroll now'

    },
     {
      5: 'Stop scrolling'
    
    } ,
    {
      6: 'WTF?'
    
    }
    ];
     $scope.notify = ['2 mins ago', '5 min ago', '30 mins ago', '1 hr ago', '12 hr agp','1 day ago'];

$scope.range = function(n) {
        return new Array(n+1);
        //return names;
    };


$scope.counter = 60;
 
    var mytimeout = null; // the current timeoutID
 
    // actual timer method, counts down every second, stops on zero
    $scope.onTimeout = function() {
        if($scope.counter ===  0) {
            $scope.$broadcast('timer-stopped', 0);
            $timeout.cancel(mytimeout);
            return;
        }
        $scope.counter--;
        mytimeout = $timeout($scope.onTimeout, 1000);
    };
 
    $scope.startTimer = function() {
        mytimeout = $timeout($scope.onTimeout, 1000);
    };
 
    // stops and resets the current timer
    $scope.stopTimer = function() {
        $scope.$broadcast('timer-stopped', $scope.counter);
        $scope.counter = 30;
        $timeout.cancel(mytimeout);
    };

    


  

  



 $scope.recognize= function(value)
 {
 $scope.recog_emp_info(value);

  
  
 }


 $scope.nextlevel= function()
 {
  //$scope.nextlevel_info();
  $state.go('app.level');
  console.log('nextlevel');
 }

$scope.home= function()
 {
  $state.go('app.home');
  console.log('home');
 }
$scope.recognizelist= function()
 {
  $state.go('app.recognize_list');
  console.log('home');
 }
 $scope.report= function()
 {
  $state.go('app.breach');
  console.log('home');
 }

  $scope.topteam= function()
 {
  $state.go('app.topteam');
  console.log('topteam');
 }

 $scope.halloffame= function()
 {
  $state.go('app.halloffame');
  //console.log('topteam');
 }

 $scope.notifications= function()
 {
  $state.go('app.notifications');
  //console.log('topteam');
 }

  $scope.activity= function()
 {
  $state.go('app.activity');
  //console.log('topteam');
 }

   $scope.share= function()
 {
  $state.go('app.share');
  //console.log('topteam');
 }

   $scope.signout= function()
 {
            $ionicHistory.clearCache().then(function(){ $state.go('sign-in', null, {reload : true}); });

         // $state.go('sign-in', null, {reload : true});
         //  $window.location.reload(true);
 }

   $scope.signin_screen= function()
 {
  $state.go('app.home');
  console.log('topteam');
 }



$scope.signin = function () {
 
var empid = $scope.empid;
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }

            $http.post('http://127.0.0.1:5000/postdata/empid='+empid, config)
            .success(function (data) {
                  if(data=='1')
                      {
                  console.log('The value: '+data);
    $ionicHistory.clearCache().then(function(){ $state.go('app.home', null, {reload : true}); });
 
                //  $state.go('app.home');
                 
                       }
         else if(data=='0')
              {
                
     var confirmPopup = $ionicPopup.confirm({

       title: 'Login Failed!',
       template: "Are you sure you're registered?",
       buttons: [
       { text: 'Try Again' },
       {
         text: '<b>Sign Up</b>',
         type: 'button-positive',
         onTap: function(e) {
        $state.go('sign-up-one');
         }
       },
     ]
     });
    
     //      console.log('The value: '+data);
     // var alertPopup = $ionicPopup.alert({
     //   title: 'Login Failed',
     //   template: 'You Are Not Registered',
     //    okText: 'Sign Up'
     //    }); 
     // alertPopup.then(function(res) {
     //   $state.go('sign-up-one');

     // });
      }
            }).error(function (data, status, header, config) {
                var ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
                    console.log(ResponseDetails);
            });
$scope.emp_info(empid);
$scope.nextlevel_info(empid);
$scope.videos();
$scope.all_emp_info();
$scope.hall_of_fame(empid);
$scope.all_notification();
}

$scope.email = '';
$scope.empid = '';
$scope.depart = '';
$scope.location = '';
$scope.managername = '';
$scope.time = '';
$scope.pic  = 'picture.png';
$scope.tagline = '';
$scope.desc = '';
$scope.hobbies = '';
$scope.aspir = '';



$scope.signupone = function()
{
 $state.go('sign-up-one');
console.log('Sign Up');
}

$scope.signuptwo = function()
{
  data.email = $scope.email;
  $state.go('sign-up-two');

}

$scope.signupthree = function()
{
data.empid  =  $scope.empid;
data.depart = $scope.depart;
data.location = $scope.location;
data.managername = $scope.managername;
data.time = $scope.time;

  $state.go('sign-up-three');


}



$scope.adding_data = function()
{
data.pic =   $scope.pic;
data.tagline = $scope.tagline;
data.desc = $scope.desc;
data.hobbies = $scope.hobbies;
data.aspir = $scope.aspir;
  
  console.log(data.email+data.empid+data.depart+data.location+data.managername+data.time+data.pic+data.tagline+data.desc+data.hobbies+data.aspir);
}


$scope.back = function()
{
  console.log($ionicHistory.backView());
  $ionicHistory.goBack();
}

$scope.viewCalendar = function()
{
  console.log('calendar');
  $state.go('app.calendar');
}

 $scope.ourstory= function()
 {
  $state.go('app.ourstory');
  console.log('ourstory');
 }

 $scope.vision= function()
 {
  $state.go('app.vision');
  console.log('vision');
 }
$scope.viewQuizzes = function()
{
  console.log('quiz list');
  $state.go('app.quizList');
}

$scope.quiz = function(key)
{
  console.log('This is the quiz key: '+key);
 // $state.go('quiz');
}

$scope.history_hide = false;
$scope.video_hide = true;


$scope.history = function(){
   $scope.history_hide = false;
   $scope.video_hide = true;
   var color = "";
   $scope.history_style = { 'background-color': '#3a4264' };
   $scope.video_style = { 'background-color': '#505a7c' };
      
}


$scope.video = function(){
   $scope.history_hide = true;
   $scope.video_hide = false;

    $scope.history_style = { 'background-color': '#505a7c' };
   $scope.video_style = { 'background-color': '#3a4264' };
      
}

$scope.codeofconduct = function() {
   



     $scope.modelname=data.codeofconduct_name;
    $scope.modeltext=data.codeofconduct_text;
     $scope.modelurl= $sce.trustAsResourceUrl(data.codeofconduct_url);

    $scope.class="ion-ios-checkmark-outline class";
      $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
     $scope.modal.show();
  });

  };


 $scope.professionalism = function() {
     $scope.modelname=data.professionalism_name;
    $scope.modeltext=data.professionalism_text;
     $scope.modelurl=$sce.trustAsResourceUrl(data.professionalism_url);

    $scope.class="professionalism";
      $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
     $scope.modal.show();
  });

  };


 $scope.teamwork = function() {
     $scope.modelname=data.teamwork_name;
    $scope.modeltext=data.teamwork_text;
     $scope.modelurl=$sce.trustAsResourceUrl(data.teamwork_url);

    $scope.class="teamwork";
      $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
     $scope.modal.show();
  });

  };


   $scope.communication = function() {
     $scope.modelname=data.communication_name;
    $scope.modeltext=data.communication_text;
     $scope.modelurl=$sce.trustAsResourceUrl(data.communication_url);


    $scope.class="ion-android-chat class";
      $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
     $scope.modal.show();
  });

  };


 $scope.improvement = function() {
   $scope.modelname=data.improvement_name;
    $scope.modeltext=data.improvement_text;
     $scope.modelurl=$sce.trustAsResourceUrl(data.improvement_url);


console.log(data.improvement_name);
    $scope.class="improve";
      $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
     $scope.modal.show();
  });

  };




 $scope.leadership = function() {
    $scope.modelname=data.leadership_name;
    $scope.modeltext=data.leadership_text;
     $scope.modelurl=$sce.trustAsResourceUrl(data.leadership_url);

    $scope.class="leadership";
      $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
     $scope.modal.show();
  });

  };




 $scope.safety = function() {
    
    $scope.modelname=data.safety_name;
    $scope.modeltext=data.safety_text;
    $scope.modelurl=$sce.trustAsResourceUrl(data.safety_url);

    $scope.class="ion-locked class";
      $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
     $scope.modal.show();
  });

  };






$scope.closemodal = function() {

  $scope.modal.hide(); 
 

  };



$scope.level = data.emp_level;
$scope.emp_name = data.emp_name;
$scope.emp_desig = data.emp_desig;

 $scope.emp_info = function (empid) {
 
 $http.get("http://127.0.0.1:5000/emp_info/empid="+empid)
          .success(function(response){
 
        var emp_name = response[0][2];
        var emp_level = response[0][1];
        var emp_desig = response[0][3];
        //var empid = response[0][4];
         data.emp_info(emp_name,emp_level,emp_desig,empid);
      
         }).error(function(data, status, headers, config){
           console.log('oops error occurred while retrieving data');
         
         });

};





$scope.recog_emp_level = data.recog_emp_level;
$scope.recog_emp_name = data.recog_emp_name;
$scope.recog_emp_desig = data.recog_emp_desig;

 $scope.recog_emp_info = function (name) {
 
       

 $http.get("http://127.0.0.1:5000/recog_emp_info/empname="+name)
          .success(function(response){
        var recog_emp_id = response[0][0];
       var recog_emp_name = response[0][3];
       var  recog_emp_level = response[0][2];
       var recog_emp_desig = response[0][4];
      
       data.recog_emp_info(recog_emp_id,recog_emp_name,recog_emp_level,recog_emp_desig);
      
       $ionicHistory.clearCache().then(function(){ $state.go('recognize');});

         }).error(function(data, status, headers, config){
           console.log('oops error occurred while retrieving data');
         
         });

};







$scope.level_quiz = data.level_quiz; 
$scope.level_likes = data.level_likes;
$scope.level_activity = data.level_activity;
$scope.level_share = data.level_share;


$scope.nextlevel_info = function (empid) {
 
 $http.get("http://127.0.0.1:5000/nextlevel_info/empid="+empid)
          .success(function(response){
 
        var level_quiz = response[0][1];
        var level_likes = response[0][2];
        var level_activity = response[0][3];
        var level_share = response[0][4];
         data.nextlevel_info(level_quiz,level_likes,level_activity,level_share);
 
         }).error(function(data, status, headers, config){
           console.log('oops error occurred while retrieving data');
         
         });

};

$scope.videos = function () {
 
 $http.get("http://127.0.0.1:5000/video_all")
          .success(function(response){
 
        var codeofconduct = response[0];
        var professionalism = response[1];
        var teamwork = response[2];
        var opencomm = response[3];
        var conimpro = response[4];
        var leadership = response[5];
        var safety = response[6];
        
       data.codeofconduct(codeofconduct);
       data.professionalism(professionalism);
       data.teamwork(teamwork);
       data.opencomm(opencomm);
       data.conimpro(conimpro);
       console.log(conimpro);
       data.leadership(leadership);
       data.safety(safety);

        
        // data.nextlevel_info(level_quiz,level_likes,level_activity,level_share);
 
         }).error(function(data, status, headers, config){
           console.log('oops error occurred while retrieving data');
         
         });

};


$scope.all_emp_info = function () {
 
 $http.get("http://127.0.0.1:5000/listofemployee")
          .success(function(response){
        var recog_list = {};
        for (var i = 0; i < response.length; i++) {
          recog_list[i]=response[i][1];

        }
          data.recogn_list(recog_list);


        }).error(function(data, status, headers, config){
           console.log('oops error occurred while retrieving data');
         
         });

};

$scope.halloffame_name = data.halloffame_name;
$scope.halloffame_level = data.halloffame_level;


$scope.hall_of_fame = function (empid) {
 
 $http.get("http://127.0.0.1:5000/halloffame/empid="+empid)
          .success(function(response){
        var halloffame_name = {};
        var halloffame_level = {};
       
        for (var i = 0; i < response.length; i++) {
         
         halloffame_name[i]=response[i][0];
           
             for (var j = 0; j < 2; j++) {
           
                halloffame_level[i]=response[i][j];
       
               };
        };
       
          data.halloffame(halloffame_name,halloffame_level);
          

        }).error(function(data, status, headers, config){
           console.log('oops error occurred while retrieving data');
         
         });

};


  $scope.changecolor= function(id,text)
 {
 // var str =id.toString();
  var div = angular.element( document.querySelector('#'+id));
    var div_text = angular.element( document.querySelector('#'+text ) );

 //var div = document.getElementById(id);
 div.css({'background-color':'#eaeaea'});
 div_text.css({'color':'#3A4264'});
     console.log(text); 

 // if (id==)   
 }


 $scope.recog_atrr= function(text)
 {
 // var str =id.toString();
  
  data.str(text);
     console.log(text); 

 // if (id==)   
 }

$scope.submit_recog= function()
 {
  
     var text = data.text;
     var recog_emp = data.recog_emp_id;
     var recog_by_emp = data.empid;


$http.get("http://127.0.0.1:5000/recog_emp/recog_emp="+recog_emp+"&recogby_emp="+recog_by_emp+"&text="+text)
          .success(function(response){
    console.log(response);


        }).error(function(data, status, headers, config){
           console.log('oops error occurred while retrieving data');
         
         });

 }


$scope.notification_text = data.notification_text;
$scope.notification_time = data.notification_time;

$scope.all_notification= function()
 {
  
$http.get("http://127.0.0.1:5000/notifications")
          .success(function(response){
    


           var notification_text = {};
        var notification_time = {};
       
        for (var i = 0; i < response.length; i++) {
         
         notification_text[i]=response[i][1];
        notification_time[i]=$scope.minutes_convert(response[i][4]);
            
        };
       
          data.notifications(notification_text,notification_time);
         
    
    //console.log($scope.minutes_convert(time));

        }).error(function(data, status, headers, config){
           console.log('oops error occurred while retrieving data');
         
         });

 }


$scope.minutes_convert = function(time)
{
      if(time<60)
      {
        return time+" minutes ago";

      }
      else (time>=60)
      {
          if(time>60 && time<=1440)
          {
            time = Math.floor(time/60);
            return time+" hr ago";
          }
          else (time>1440)
          {
            time = Math.floor(time/1440);
            return time+" day ago";
          }

      }
}


 $scope.breach= function()
 {
 // var str =id.toString();

    var yesname = angular.element( document.querySelector('#yesname').checked);
    var noname = angular.element( document.querySelector('#noname').checked);
 
    var text = $scope.breach_text; 
     var id = data.empid; 
     if(yesname[0]==true)
     {
        var count = 1;

          $http.get("http://127.0.0.1:5000/breach/breach_emp="+id+"&breach_text="+text+"&count="+count)
          .success(function(response){
    
            // console.log(response.data);
    var alertPopup = $ionicPopup.alert({
       title: 'Breach Reported Successfully',
       template: 'Thank you for reporting',
        okText: 'Okay'
        }); 
     alertPopup.then(function(res) {
       $state.go('app.home');

     });



        }).error(function(data, status, headers, config){
           console.log('oops error occurred while retrieving data');
         
         });


     }

      if(noname[0]==true)
     {

      var count = 0;

          $http.get("http://127.0.0.1:5000/breach/breach_emp=<>&breach_text="+text+"&count="+count)
          .success(function(response){
    
 var alertPopup = $ionicPopup.alert({
       title: 'Breach Reported Successfully',
       template: 'Thank you for reporting',
        okText: 'Okay'
        }); 
     alertPopup.then(function(res) {
       $state.go('app.home');

     });

        }).error(function(data, status, headers, config){
           console.log('oops error occurred while retrieving data');
         
         });

     }
     
     
 // if (id==)   
 }



   $scope.dptwo = true;


 $scope.loadImage = function() {
   $scope.dp = true;
   $scope.dptwo = false;

  var options = {
    title: 'Select Image Source',
    buttonLabels: ['Load from Library', 'Use Camera'],
    addCancelButtonWithLabel: 'Cancel',
    androidEnableCancelButton : true,
  };
  $cordovaActionSheet.show(options).then(function(btnIndex) {
    var type = null;
    if (btnIndex === 1) {
      type = Camera.PictureSourceType.PHOTOLIBRARY;
      $scope.selectPicture(type);
    } else if (btnIndex === 2) {
      type = Camera.PictureSourceType.CAMERA;
            $scope.selectPicture(type);
    }
    // if (type !== null) {
    //   $scope.selectPicture(type);
    // }
  });
};
$scope.dp = false;

$scope.selectPicture = function(sourceType) {
  $scope.goCats = true;
  var options = {
    quality: 100,
    destinationType: Camera.DestinationType.FILE_URI,
    sourceType: sourceType,
    saveToPhotoAlbum: true
  };
 
  $cordovaCamera.getPicture(options).then(function(imagePath) {
    // Grab the file name of the photo in the temporary directory
    var currentName = imagePath.replace(/^.*[\\\/]/, '');
 
    //Create a new name for the photo
    var d = new Date(),
    n = d.getTime(),
    newFileName =  n + ".jpg";
 
    // If you are trying to load image from the gallery on Android we need special treatment!
    if ($cordovaDevice.getPlatform() == 'Android' && sourceType === Camera.PictureSourceType.PHOTOLIBRARY) {
      window.FilePath.resolveNativePath(imagePath, function(entry) {
        window.resolveLocalFileSystemURL(entry, success, fail);
        function fail(e) {
          console.error('Error: ', e);
        }
 
        function success(fileEntry) {
          var namePath = fileEntry.nativeURL.substr(0, fileEntry.nativeURL.lastIndexOf('/') + 1);
          // Only copy because of access rights
          $cordovaFile.copyFile(namePath, fileEntry.name, cordova.file.dataDirectory, newFileName).then(function(success){
            $scope.image = newFileName;
            $state.go('app.home');
          }, function(error){
            $scope.showAlert('Error', error.exception);
          });
        };
      }
    );
    } else {
      var namePath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
      // Move the file to permanent storage
      $cordovaFile.moveFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function(success){
        $scope.image = newFileName;
      }, function(error){
        $scope.showAlert('Error', error.exception);
      });
    }
  },
  function(err){
    // Not always an error, maybe cancel was pressed...
  })
};



$scope.pathForImage = function(image) {
  if (image === null) {
    return '';
  } else {
    return cordova.file.dataDirectory + image;
  }
};
 // fpic1.removeClass('bdown').addClass('up').css({'z-index':data.plusplus()});
// Calendar controls region start

  // $cordovaCalendar.createCalendar({
  //   calendarName: 'Cordova Calendar',
  //   calendarColor: '#FF0000'
  // }).then(function (result) {
  //   // success
  // }, function (err) {
  //   // error
  // });

  // Calendar control region end

}]);



hub.controller('CalCtrl', ['$scope', '$ionicPlatform', '$filter',
  function($scope, $ionicPlatform, $filter) {

    $scope.eventSource = [];
    $scope.currentMonth = '';

    $scope.loadEvents = function (){
      var events = [];
      for (var i = 0; i < 50; i += 1) {
        var date = new Date(),
          startDay = Math.floor(Math.random() * 90) - 45,
          startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
          events.push(startTime);
      }
      $scope.eventSource = events;
    };

    $scope.changeMonth = function (direction){
      $scope.$broadcast('changeMonth', direction);
    };
    $scope.onMonthChanged = function (startTime, endTime, display){
      $scope.currentMonth = display;
      console.log('Changed month : ' + display);
    };

}]);



hub.controller('QuizListCtrl', ['$scope','data','$http', function($scope,$data,$http) {
 $scope.item = [
    {
      title: 'Company Profile'
     
    },
    {
      title: 'Code of Ethics'
    
    },
     {
      title: 'Soft Skills'
    
    },
     {
      title: 'Vision'

    },
     {
      title: 'VVIP Quiz'  
    
    } ,
    {
      title: 'Quiz # 6'
    
    }
    ];
    console.log(data.emp_level);
 $scope.shouldShowDelete = false;
 $scope.shouldShowReorder = false;
 $scope.listCanSwipe = false;

$scope.items = {};
//$scope.items = data.quizlist;

// console.log('Nope: '+$scope.items[1]);
// console.log('Nope no nahi : '+data.quizlist[1][1]);


 var level = data.emp_level+1;
 $http.get("http://127.0.0.1:5000/quiz_list/level="+level)
          .success(function(response){
        $scope.items = response;
       

        }).error(function(data, status, headers, config){
           console.log('oops error occurred while retrieving data');
         
         });
        
}]);

// List of available quizzes region end

// Quiz questions

hub.controller('QuizCtrl', ['$scope', '$interval', '$timeout', '$state', '$window','$http', function($scope, $interval, $timeout, $state, $window,$http) {
 var time = 60;
 var stop = false;
 $scope.questionNumber = 0;
 $scope.score = "00";
 $scope.timeElapsed = $interval(function(){
  if(!stop)
  {
    $scope.timer = time;
    time--;
  }
 }, 1000, 61);


$scope.items = {};
//$scope.items = data.quizlist;

// console.log('Nope: '+$scope.items[1]);
// console.log('Nope no nahi : '+data.quizlist[1][1]);


 var level = data.emp_level+1;
 $http.get("http://127.0.0.1:5000/quiz_list/level="+level)
          .success(function(response){
        $scope.items = response;
        

        }).error(function(data, status, headers, config){
           console.log('oops error occurred while retrieving data');
         
         });



 $scope.question = [
    {
      text: "Which of the following statement is the 'Vision statement' of Descon?",
        options: [
          {
            value: 1, 
            option: "We work to create a better future every day"
          },
          {
            value: 2, 
            option: "We build prosperity by partnering in progress"
          },
          {
            value: 3, 
            option: "Our actions speak louder than words"
          },
          {
            value: 4, 
            option: "To deliver the world's most innovative solutions"
          }],
      correctOption: 2
    },
    {
      text: "Which of the following behaviours in your opinion demonstrate effective 'teamwork'?",
        options: [
        {
          value: 1, 
          option: "Respect"
        },
        {
          value: 2, 
          option: "Awareness"
        },
        {
          value: 3, 
          option: "Communication"
        },
        {
          value: 4, 
          option: "All of the above"
        }],
      correctOption: 4
    },
    {
      text: "The following is an example of open Communication:",
        options: [
        {
          value: 1, 
          option: "Avoids conflict in situation with people"
        },
        {
          value: 2, 
          option: "Hold back information"
        },
        {
          value: 3, 
          option: "Shares relevant information in time with all stakeholders"
        },
        {
          value: 4, 
          option: "Shares inconsistent information"
        }],
      correctOption: 3
    },
    {
      text: "Open Communication is important because:",
        options: [
        {
          value: 1, 
          option: "It allows for all stakeholders to take more informed decisions"
        },
        {
          value: 2, 
          option: "It is the best solution to keep conflicts at bay"
        },
        {
          value: 3, 
          option: "It helps with increasing my popularity"
        },
        {
          value: 4, 
          option: "Is the best way to engage in office gossip"
        }],
      correctOption: 1
    },
    {
      text: "You know your supervisor is a good leader if he/she",
      options: [
      {
        value: 1, 
        option: "Is very engaging and motivating towards your success"
      },
      {
        value: 2, 
        option: "Doesn't delegate his work to you"
      },
      {
        value: 3, 
        option: "Always gives good feedback about you"
      },
      {
        value: 4, option: "Avoids getting into a conflict with you"
      }],
      correctOption: 1
    }
    ];

$scope.questions = {};
$scope.random = ['1',"2","3","4"];
$scope.questions = data.questions;

 $scope.quiz = function(num)
 {

  $http.get("http://127.0.0.1:5000/quiz_ques_and_ans/quizid="+num)
          .success(function(response){
        // $scope.questions = response;
        data.questions_ans(response);
        console.log(response);        
         $state.go('quiz');

        }).error(function(data, status, headers, config){
           console.log('oops error occurred while retrieving data');
         
         });

}



    $scope.nextQuestion = function(e)
    {
      console.log("Here");
      var group1 = document.quiz.group1;
      if(group1.value == $scope.questions[$scope.questionNumber][5])
      {

     // var quiz = angular.element( document.querySelector( '.quiz' ) );
     //  quiz.removeClass('quiz').addClass('correct');

        e.target.parentElement.parentElement.parentElement.className += "correct";
        stop = true;
        $timeout(function()
          {
            time = 60;
            $scope.questionNumber++;
            $scope.score = parseInt($scope.score) + 10;
            console.log(e.target);
            if($scope.questionNumber == $scope.questions.length)
            {
              e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.className += " hidden";
              // var padding = angular.element( document.querySelector( '.hello' ) );
              //  padding.css({'display':'none'});

              var score = document.getElementById("score");
              score.className = "scorecard";
            }
            else
            {
              stop = false;
              time = 60;
        var quiz = angular.element( document.querySelector( '.quiz' ) );
      quiz.removeClass('correct');
      e.target.parentElement.parentElement.parentElement.className += "quiz";
            }
          }, 3000);  
      }
      else
      {
         // var quiz = angular.element( document.querySelector( '.quiz' ) );
         // quiz.removeClass('quiz').addClass('wrong');
        e.target.parentElement.parentElement.parentElement.className += "wrong";
        stop = true;

        $timeout(function()
          {
            time = 60;
            $scope.questionNumber++;
            console.log(e.target);
            if($scope.questionNumber == $scope.questions.length)
            {
              e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.className += " hidden";
              var score = document.getElementById("score");
              score.className = "scorecard";
            }
            else
            {
              time = 60;
              stop = false;
              var quiz = angular.element( document.querySelector( '.quiz' ) );
             quiz.removeClass('wrong');
             e.target.parentElement.parentElement.parentElement.className += "quiz";
            }
          }, 3000);  
      }
    }

    $scope.returnToMenu = function()
    {
        
     $ionicHistory.clearCache().then(function(){ $state.go('app.level');});
        $timeout(function()
          {
     time = 60;
  stop = false;
 $scope.questionNumber = 0;
 $scope.score = "00";
 e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.className += " quiz";
          }, 1000);
    
    }

}]);


hub.factory('data', function() {
 
  data = {};
  data.tabname= true;

  data.email = "";
  data.empid  = '';
data.depart = '';
data.location ='';
data.managername ='';
data.time ='';
data.pic = '';
data.tagline ='';
data.desc ='';
data.hobbies ='';
data.aspir ='';



data.emp_name = "Talal";
data.emp_level = "2";
data.emp_desig = "Full Stack Developer";

data.emp_info = function (name,level,desig,id)
  {
   this.emp_name = name;
   this.emp_level = level;
   this.emp_desig = desig;
   this.empid = id;
  }

data.recog_emp_id = "";
data.recog_emp_name = "R";
data.recog_emp_level = "4";
data.recog_emp_desig = "N";

data.recog_emp_info = function (id,name,level,desig)
  {
   this.recog_emp_id = id; 
   this.recog_emp_name = name;
   this.recog_emp_level = level;
   this.recog_emp_desig = desig;
    
  }




data.level_quiz = ''; 
data.level_likes = '';
data.level_activity = '';
data.level_share = '';


  data.nextlevel_info = function (quiz,likes,activity,share)
  {
   this.level_quiz = quiz;
   this.level_likes = likes;
   this.level_activity = activity;
   this.level_share = share;
  }

data.codeofconduct_name = '';
data.codeofconduct_text = '';
data.codeofconduct_url= '';


      data.codeofconduct = function (arr)
        {
          this.codeofconduct_url = arr[1];
          this.codeofconduct_text = arr[2];
          this.codeofconduct_name = arr[3];

            };
      

data.professionalism_name = '';
data.professionalism_text = '';
data.professionalism_url  = '';

       data.professionalism = function (arr)
        {
            this.professionalism_url = arr[1];
            this.professionalism_text = arr[2];
            this.professionalism_name = arr[3];

            };


data.teamwork_name = '';
data.teamwork_text = '';
data.teamwork_url  = '';


       data.teamwork = function (arr)
        {
          this.teamwork_name = arr[3];
          this.teamwork_text = arr[2];
          this.teamwork_url  = arr[1];

              };

data.communication_name = '';
data.communication_text = '';
data.communication_url  = '';


       data.opencomm = function (arr)
        {
          this.communication_name = arr[3];
          this.communication_text = arr[2];
          this.communication_url  = arr[1];
          
                };

data.improvement_name = '';
data.improvement_text = '';
data.improvement_url  = '';
      
       data.conimpro = function (arr)
        {
               
          data.improvement_name = arr[3];
          data.improvement_text = arr[2];
          data.improvement_url  = arr[1]; 
          
          console.log('This '+ arr[3]);  
                };

data.leadership_name = '';
data.leadership_text = '';
data.leadership_url  = '';

       data.leadership = function (arr)
         {
        data.leadership_name = arr[3];
        data.leadership_text = arr[2];
        data.leadership_url  = arr[1];
          
                };


data.safety_name = '';
data.safety_text = '';
data.safety_url  = '';


       data.safety = function (arr)
         {
          data.safety_name = arr[3];
          data.safety_text = arr[2];
          data.safety_url  = arr[1]; 

               };

data.recog_list = {};

 data.recogn_list = function (arr)
         {
          this.recog_list = arr;

               };

data.halloffame_name= {};
data.halloffame_level= {};


data.halloffame = function (arr,arr1)
         {
          this.halloffame_name = arr;
          this.halloffame_level = arr1;
               };
data.text = "and qualities are ";
data.str = function (text)
         {
         this.text = this.text+text+", "
      };

data.notification_time= {};
data.notification_text={};

 data.notifications = function (arr,arr1)
  {
    this.notification_text = arr;
    this.notification_time = arr1;
  }

data.quizlist = {};

 data.quiz_list = function (arr)
  {
    // for (var i =0; i<arr.length; i++) {
    //   this.quizlist[i] = arr[i][0];
    // }
    this.quizlist = arr;
    console.log("That is down");
    console.log(this.quizlist[1][1]);    
   
  }

data.questions = {};
data.questions_ans = function (arr)
  {
   this.questions = arr;
  }


  data.change = function (str)
  {
    data.tabname = str;
    console.log(data.tabname);
  }



 return data;
});


