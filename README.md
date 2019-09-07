When firebase, react, redux, react-router and socket.io are BFF :)




for running on your local-machine -
  

   1. clone this repo


   2. add a firestore credentials to src/config/FBConfig.
      open firebase console, register a new web-app ("spark" plan is totally free! :) ) and copy the credentials, its should look something like that:

      {
      
      
        var firebaseConfig = {
           apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
           authDomain: "quizit.firebaseapp.com",
           databaseURL: "https://quizit.firebaseio.com",
           projectId: "quizit",
           storageBucket: "quizit.appspot.com",
           messagingSenderId: "1234567890",
           appId: "1:123456789:web:not123to456be"
           };
           
           
      } 

      default fire-store bucket that used for saving imgs (quizzes logos and inside questions photos) not always clarify, if adding "storeageBucket" value manually isnt solve your problem, check:

      https://stackoverflow.com/questions/41352150/typeerror-firebase-storage-is-not-a-function


   3. {
       $ cd quizit/server

       $ npm install

       $ npm start
      }


    4. on new terminal
       {
       	$ cd quizit

       	$ npm install

       	$ npm start
       }


