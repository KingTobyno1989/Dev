import React from 'react';
import "./Topbar.css"
import {NotificationsNone, Language, Settings} from '@mui/icons-material';
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topleft">
        <span className="logo">lamaadmin</span>
        </div>
        <div className="topright">
          <div className="topbarIconContainer">
<NotificationsNone/>
<span className="topIconBadge">2</span>
           </div>
           <div className="topbarIconContainer">
<Language/>
<span className="topIconBadge">2</span>
           </div>
           <div className="topbarIconContainer">
<Settings/>
<span className="topIconBadge1"></span>
           </div>
           <img src="https://th.bing.com/th/id/R.6f00bc2da032e927f4a8550959f640f5?rik=fIVfYUj8oY%2fqLQ&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f28700000%2fElephant-elephants-28788752-1024-768.jpg&ehk=DEvOUk98RcOYKW5b7BuC2a6GX1hOQS6d5FVKtT1pfOA%3d&risl=&pid=ImgRaw&r=0" alt="A African Elephant" className="topAvatar" />
          </div>
      </div>
    
    </div>
  );
} 
