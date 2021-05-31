import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDpiQjZt8BeVy-nAk54i7OGTJ4-1NxAbKc",
    authDomain: "haulfreepre.firebaseapp.com",
    projectId: "haulfreepre",
    storageBucket: "haulfreepre.appspot.com",
    messagingSenderId: "306406466390",
    appId: "1:306406466390:web:ba13e8fec621c339ceacf7",
    measurementId: "G-J5H5D4G6XL"
  };

  firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };