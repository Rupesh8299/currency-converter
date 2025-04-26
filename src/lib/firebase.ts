
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAj3gcSUKErNAFNLsiAo2tf_tsS_pHNLEs",
  authDomain: "snapbuy2-dc021.firebaseapp.com",
  projectId: "snapbuy2-dc021",
  storageBucket: "snapbuy2-dc021.firebasestorage.app",
  messagingSenderId: "99838728461",
  appId: "1:99838728461:web:da25ddc7eec0561f25944c",
  measurementId: "G-9VX38DZX1D"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
