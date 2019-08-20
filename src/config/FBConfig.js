import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'; 
import 'firebase/storage'; 

 var firebaseConfig = {
   // your firebase credentials goes here, dont forget to declare a default bucket :) 
    };

  firebase.initializeApp(firebaseConfig);

  export default firebase;