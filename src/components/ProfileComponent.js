import React, {useEffect} from 'react'
import Avatar from '@mui/material/Avatar';
import Skeleton from '@mui/material/Skeleton';
import "../componentStylesheet/ProfileComponent.css"
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
    <div>
        <div id='top-header'>
            <img alt='logo' src='./assets/MoneeyAppLogo.svg'/>
        </div>
        <div id='main-content' className='flex-row'>
            <div id='company-info'>
                <div id='company-name-section' className='flex-row align-items-center'>
                <Avatar sx={{ bgcolor: '#fee7ea',color: '#1CC578', width:'65px', height:'65px' }}>{splitter(companyName)}</Avatar>
                    <p>{companyName}</p>
                </div>
                <div>
                    <div className='officer-designation flex-column'>
                        <p className='title-designation no-bottom-margin'>CEO</p>
                        <p className='officerName no-top-margin'>{ceoName}</p>
                    </div>
                    <div className='officer-designation'>
                        <p className='title-designation no-bottom-margin'>CTO</p>
                        <p className='officerName no-top-margin'>{ctoName}</p>
                    </div>
                </div>
            </div>
            <div id='coming-soon-and-notifications' className='flex-column'>
                <img id='coming-soon-badge' alt='coming-soon-timer' src='./assets/coming-soon.svg'/>
                <div id='new-features' className='flex-column'>
                    <div className='feature-skeleton flex-row align-items-center'>
                        <img alt='party-cap-fireworks' src='./assets/party.svg'/> 
                        <div className='flex-column'>
                        <Skeleton variant="text" width={194} sx={{ fontSize: '1rem' }} />
                        <Skeleton variant="text" width={132}  sx={{ fontSize: '1rem' }} />
                        </div>
                    </div>
                    <div className='feature-skeleton flex-row align-items-center'>
                        <img alt='3 stars' src='./assets/stars.svg'/> 
                        <div className='flex-column'>
                        <Skeleton variant="text" width={194} sx={{ fontSize: '1rem' }} />
                        <Skeleton variant="text" width={132}  sx={{ fontSize: '1rem' }} />
                        </div>
                        
                    </div>
                    <div className='feature-skeleton flex-row align-items-center'>
                        <img alt='bang' src='./assets/bang.svg'/> 
                        <div className='flex-column'>
                        <Skeleton variant="text" width={194} sx={{ fontSize: '1rem' }} />
                        <Skeleton variant="text" width={132}  sx={{ fontSize: '1rem' }} />
                        </div>
                    </div>
                </div>
                <div id='notifications' className='flex-column align-items-center'>
                    <p id='notification-header' className='no-bottom-margin'>📫 Notifications</p>
                    <p id='notification-info'>Receive notifications about your rider performance, efficiency reviews and a lot more</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileComponent