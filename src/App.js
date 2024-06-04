
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Profile from './Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profiles from './Profiles';
import data from './Data';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main data={data.PostPage.posts}/>}></Route> 
        <Route path='/profile' element={<Profiles users={data.ProfilePage.users} />}></Route> 
      </Routes>

      
      
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
