import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyChiXxZPfJTiEHcxISinzruUHRpjDrAvAE",
  authDomain: "project-4595193127886690506.firebaseapp.com",
  databaseURL: "https://project-4595193127886690506-default-rtdb.firebaseio.com",
  projectId: "project-4595193127886690506",
  storageBucket: "project-4595193127886690506.appspot.com",
  messagingSenderId: "367773839258",
  appId: "1:367773839258:web:57a670a2b63d6fc9919423"
  
};

// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export default app.database();
