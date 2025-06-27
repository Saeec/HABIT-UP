
import './App.css';
import Header from './Header';
import UserProfileCard from './ProfileCard';

function App() {
   const user = {
    name: 'Saee Tushar Chavan',
    email: 'saee20102005@gmail.com',
    dob: 'DD/MM/YYYY',
    joinDate: 'DD/MM/YYYY',
    phone: '+917559125944',
    gender: 'Female'
  };

  return (
    <div className="app">
      <Header />
      <main className="main-content">
       
        <UserProfileCard user={user} />
      </main>
    </div>
  );
}

export default App;
