// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBPs87Whfw80_c7D9av47wgnbwI5B4PjPM',
  authDomain: 'about-me-e5b44.firebaseapp.com',
  projectId: 'about-me-e5b44',
  storageBucket: 'about-me-e5b44.firebasestorage.app',
  messagingSenderId: '704779086999',
  appId: '1:704779086999:web:7a08644d14fc8bcda24dd2',
  measurementId: 'G-LK2TMDYDNF',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
