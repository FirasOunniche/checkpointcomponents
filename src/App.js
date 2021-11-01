
import  './App.css';
import Address from './Component/Profile/Address';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import Me from "./Me.jpg"

function App() {
  return (
    <div>

      <Address/>
      <FullName/>
      <ProfilePhoto/>
      <img src={Me} alt=""width='400' />
     
    
    </div>
  );
}

export default App;
