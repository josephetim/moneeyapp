import React, {useEffect} from 'react'
import "../componentStylesheet/ProfileComponent.css"
import ProfilePresentational from './ProfilePresentational';
const ProfileComponent = ({ceoName, ctoName, companyName, authenticated}) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            authenticated(false)
          console.log('Authentication expired')
        }, 120000);
        return () => clearTimeout(timer);
      }, []);

    function splitter (word){
        let arr = []
        console.log(word)
        let y = word.split(" ")
        for(let i=0; i<y.length; i++) {
            arr.push(y[i][0])
        }
        return arr.join('')
    }
  return (
    <ProfilePresentational ceoName={ceoName} ctoName={ctoName} companyName={companyName} splitter={splitter}/>
  )
}

export default ProfileComponent