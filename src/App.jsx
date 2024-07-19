
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Site from "./components/Site";
// import {About, Contact, Experience, Feedbacks, Hero, Tech ,Works, StarsCanvas, Navbar} from './components'
import Terminal from "./components/terminal/Terminal";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path ="/" element={<Site />}></Route>
      <Route path="/cli" element={<Terminal />}></Route>
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
