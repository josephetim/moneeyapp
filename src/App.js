import React, {useState,useEffect} from 'react';
import LoginComponent from './components/LoginComponent';
import ProfileComponent from './components/ProfileComponent';
import { UserContext } from './components/UserContext';

function App() {
  const email = 'cokitchen222@gmail.com';
  const password = 'cokitchen'
  const [ceo, setCeo] = useState("")
  const [cto, setCto] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  



  if (ceo && cto && companyName && isAuthenticated) {
    return <ProfileComponent ceoName={ceo} ctoName={cto} companyName={companyName} authenticated={setIsAuthenticated} />
  }
  return (
    <>
      <UserContext.Provider value={{email, password}} >
        <LoginComponent setCtoName={setCto} setCeoName={setCeo} setCompanyName={setCompanyName} />
      </UserContext.Provider>
    </>
  );
}

export default App;
