// import React from 'react';
// import './Sidebar.css';
// import kiran from '../assets/images/kiran.png';
// import dashboardIcon from '../assets/images/dashboard.png';
// import emailIcon from '../assets/images/email.png';
// import calenderIcon from '../assets/images/calender.png';
// import appointmentIcon from '../assets/images/appointment.png';
// import doctorsIcon from '../assets/images/doctors.png';
// import otherIcon from '../assets/images/other.png';
// import patientsIcon from '../assets/images/patients.png';
// import roomIcon from '../assets/images/room.png';
// import paymentsIcon from '../assets/images/payments.png';
// import widgetIcon from '../assets/images/widget.png';
// import uiIcon from '../assets/images/ui.png';
// import materialIcon from '../assets/images/material.png';

// const Sidebar = () => {
//     return (
//         <div className="sidebar">
//             <div className="profile-card">
//                 <div className="profile-image">
//                     <img src={kiran} alt="Profile" />
//                 </div>
//                 <div className="profile-data">
//                     <h2 className="heading">Dr. Kiran Patel</h2>
//                     <p className="designation">Administrator</p>
//                 </div>
//             </div>
//             <div className="dashboard">
//                 <img src={dashboardIcon} alt="Dashboard Icon" className="dashboard-icon" />
//                 <span className="dashboard-text">Dashboard</span>
//                 <span className='dashboard-arrow'>^</span>
//             </div>
//             <div className="email">
//                 <img src={emailIcon} alt="Email Icon" className="email-icon" />
//                 <span className="email-text">Email</span>
//                 <span className='email-count'>3</span>
//                 <span className='email-arrow'>&gt;</span>
//             </div>
//             <div className="email">
//                 <img src={calenderIcon} alt="Email Icon" className="email-icon" />
//                 <span className="email-text">Calender</span>
//             </div>
//             <div className="email">
//                 <img src={appointmentIcon} alt="Email Icon" className="email-icon" />
//                 <span className="email-text">Appointment</span>
//                 <span className='email-arrow'>&gt;</span>
//             </div>
//             <div className="email">
//                 <img src={doctorsIcon} alt="Email Icon" className="email-icon" />
//                 <span className="email-text">Doctors</span>
//                 <span className='email-arrow'>&gt;</span>
//             </div>
//             <div className="email">
//                 <img src={otherIcon} alt="Email Icon" className="email-icon" />
//                 <span className="email-text">Other Staff</span>
//                 <span className='email-arrow'>&gt;</span>
//             </div>
//             <div className="email">
//                 <img src={patientsIcon} alt="Email Icon" className="email-icon" />
//                 <span className="email-text">Patients</span>
//                 <span className='email-arrow'>&gt;</span>
//             </div>
//             <div className="email">
//                 <img src={roomIcon} alt="Email Icon" className="email-icon" />
//                 <span className="email-text">Room Allotment</span>
//                 <span className='email-arrow'>&gt;</span>
//             </div>
//             <div className="email">
//                 <img src={patientsIcon} alt="Email Icon" className="email-icon" />
//                 <span className="email-text">Payments</span>
//                 <span className='email-arrow'>&gt;</span>
//             </div>
//             <div className="email">
//                 <img src={widgetIcon} alt="Email Icon" className="email-icon" />
//                 <span className="email-text">Widget</span>
//             </div>
//             <div className="email">
//                 <img src={uiIcon} alt="Email Icon" className="email-icon" />
//                 <span className="email-text">UI Elements</span>
//                 <span className='ui-count'>10</span>
//                 <span className='email-arrow'>&gt;</span>
//             </div>
//             <div className="email">
//                 <img src={materialIcon} alt="Email Icon" className="email-icon" />
//                 <span className="email-text">Material Elements</span>
//                 <span className='email-arrow'>&gt;</span>
//             </div>
//         </div>
//     );
// };

// export default Sidebar;

// import React from 'react';
// import './Sidebar.css';
// import kiran from '../assets/images/kiran.png';
// import dashboardIcon from '../assets/images/dashboard.png';
// import emailIcon from '../assets/images/email.png';
// import calenderIcon from '../assets/images/calender.png';
// import appointmentIcon from '../assets/images/appointment.png';
// import doctorsIcon from '../assets/images/doctors.png';
// import otherIcon from '../assets/images/other.png';
// import patientsIcon from '../assets/images/patients.png';
// import roomIcon from '../assets/images/room.png';
// import paymentsIcon from '../assets/images/payments.png';
// import widgetIcon from '../assets/images/widget.png';
// import uiIcon from '../assets/images/ui.png';
// import materialIcon from '../assets/images/material.png';

// const menuItems = [
//     { src: dashboardIcon, text: 'Dashboard', arrow: true },
//     { src: emailIcon, text: 'Email', count: 3, arrow: true },
//     { src: calenderIcon, text: 'Calendar' },
//     { src: appointmentIcon, text: 'Appointment', arrow: true },
//     { src: doctorsIcon, text: 'Doctors', arrow: true },
//     { src: otherIcon, text: 'Other Staff', arrow: true },
//     { src: patientsIcon, text: 'Patients', arrow: true },
//     { src: roomIcon, text: 'Room Allotment', arrow: true },
//     { src: paymentsIcon, text: 'Payments', arrow: true },
//     { src: widgetIcon, text: 'Widget' },
//     { src: uiIcon, text: 'UI Elements', count: 10, arrow: true, bgColor: '#1EBDCC' },
//     { src: materialIcon, text: 'Material Elements', arrow: true }
// ];

// const Sidebar = () => {
//     return (
//         <div className="sidebar">
//             <div className="profile-card">
//                 <div className="profile-image">
//                     <img src={kiran} alt="Profile" />
//                 </div>
//                 <div className="profile-data">
//                     <h2 className="heading">Dr. Kiran Patel</h2>
//                     <p className="designation">Administrator</p>
//                 </div>
//             </div>
//             {menuItems.map((item, index) => (
//                 <div className={`menu-item ${item.arrow ? 'has-arrow' : ''}`} key={index}>
//                     <img src={item.src} alt={`${item.text} Icon`} className="menu-icon" />
//                     <span className="menu-text">{item.text}</span>
//                     {item.count !== undefined && (
//                         <span className={`count ${item.bgColor ? 'custom-bg' : ''}`}>
//                             {item.count}
//                         </span>
//                     )}
//                     {item.arrow && <span className="menu-arrow">&gt;</span>}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Sidebar;


// import React from 'react';
// import './Sidebar.css';
// import kiran from '../assets/images/kiran.png';
// import dashboardIcon from '../assets/images/dashboard.png';
// import emailIcon from '../assets/images/email.png';
// import calenderIcon from '../assets/images/calender.png';
// import appointmentIcon from '../assets/images/appointment.png';
// import doctorsIcon from '../assets/images/doctors.png';
// import otherIcon from '../assets/images/other.png';
// import patientsIcon from '../assets/images/patients.png';
// import roomIcon from '../assets/images/room.png';
// import paymentsIcon from '../assets/images/payments.png';
// import widgetIcon from '../assets/images/widget.png';
// import uiIcon from '../assets/images/ui.png';
// import materialIcon from '../assets/images/material.png';

// const menuItems = [
//     { src: dashboardIcon, text: 'Dashboard', arrow: true, bgColor: '#F4F6F9', arrowDirection: 'down' },
//     { src: emailIcon, text: 'Email', count: 3, arrow: true },
//     { src: calenderIcon, text: 'Calendar' },
//     { src: appointmentIcon, text: 'Appointment', arrow: true },
//     { src: doctorsIcon, text: 'Doctors', arrow: true },
//     { src: otherIcon, text: 'Other Staff', arrow: true },
//     { src: patientsIcon, text: 'Patients', arrow: true },
//     { src: roomIcon, text: 'Room Allotment', arrow: true },
//     { src: paymentsIcon, text: 'Payments', arrow: true },
//     { src: widgetIcon, text: 'Widget' },
//     { src: uiIcon, text: 'UI Elements', count: 10, arrow: true, bgColor: '#1EBDCC' },
//     { src: materialIcon, text: 'Material Elements', arrow: true }
// ];

// const Sidebar = () => {
//     return (
//         <div className="sidebar">
//             <div className="profile-card">
//                 <div className="profile-image">
//                     <img src={kiran} alt="Profile" />
//                 </div>
//                 <div className="profile-data">
//                     <h2 className="heading">Dr. Kiran Patel</h2>
//                     <p className="designation">Administrator</p>
//                 </div>
//             </div>
//             {menuItems.map((item, index) => (
//                 <div
//                     className={`menu-item ${item.arrow ? 'has-arrow' : ''}`}
//                     key={index}
//                     style={{ backgroundColor: item.bgColor }}
//                 >
//                     <img src={item.src} alt={`${item.text} Icon`} className="menu-icon" />
//                     <span className="menu-text">{item.text}</span>
//                     {item.count !== undefined && (
//                         <span className={`count ${item.bgColor ? 'custom-bg' : ''}`}>
//                             {item.count}
//                         </span>
//                     )}
//                     {item.arrow && (
//                         <span
//                             className={`menu-arrow ${item.arrowDirection === 'down' ? 'down-arrow' : ''}`}
//                         >
//                             &gt;
//                         </span>
//                     )}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Sidebar;



// import React from 'react';
// import './Sidebar.css';
// import kiran from '../assets/images/kiran.png';
// import dashboardIcon from '../assets/images/dashboard.png';
// import emailIcon from '../assets/images/email.png';
// import calenderIcon from '../assets/images/calender.png';
// import appointmentIcon from '../assets/images/appointment.png';
// import doctorsIcon from '../assets/images/doctors.png';
// import otherIcon from '../assets/images/other.png';
// import patientsIcon from '../assets/images/patients.png';
// import roomIcon from '../assets/images/room.png';
// import paymentsIcon from '../assets/images/payments.png';
// import widgetIcon from '../assets/images/widget.png';
// import uiIcon from '../assets/images/ui.png';
// import materialIcon from '../assets/images/material.png';

// const menuItems = [
//     { src: dashboardIcon, text: 'Dashboard', arrow: true, bgColor: '#F4F6F9', textColor: '#007BFF', arrowDirection: 'down' },
//     { src: emailIcon, text: 'Email', count: 3, arrow: true },
//     { src: calenderIcon, text: 'Calendar' },
//     { src: appointmentIcon, text: 'Appointment', arrow: true },
//     { src: doctorsIcon, text: 'Doctors', arrow: true },
//     { src: otherIcon, text: 'Other Staff', arrow: true },
//     { src: patientsIcon, text: 'Patients', arrow: true },
//     { src: roomIcon, text: 'Room Allotment', arrow: true },
//     { src: paymentsIcon, text: 'Payments', arrow: true },
//     { src: widgetIcon, text: 'Widget' },
//     { src: uiIcon, text: 'UI Elements', count: 10, arrow: true, },
//     { src: materialIcon, text: 'Material Elements', arrow: true }
// ];

// const Sidebar = () => {
//     return (
//         <div className="sidebar">
//             <div className="profile-card">
//                 <div className="profile-image">
//                     <img src={kiran} alt="Profile" />
//                 </div>
//                 <div className="profile-data">
//                     <h2 className="heading">Dr. Kiran Patel</h2>
//                     <p className="designation">Administrator</p>
//                 </div>
//             </div>
//             {menuItems.map((item, index) => (
//                 <div
//                     className={`menu-item ${item.arrow ? 'has-arrow' : ''}`}
//                     key={index}
//                     style={{ backgroundColor: item.bgColor }}
//                 >
//                     <img src={item.src} alt={`${item.text} Icon`} className="menu-icon" />
//                     <span
//                         className="menu-text"
//                         style={{ color: item.textColor }}
//                     >
//                         {item.text}
//                     </span>
//                     {item.count !== undefined && (
//                         <span className={`count ${item.bgColor ? 'custom-bg' : ''}`}>
//                             {item.count}
//                         </span>
//                     )}
//                     {item.arrow && (
//                         <span
//                             className={`menu-arrow ${item.arrowDirection === 'down' ? 'down-arrow' : 'right-arrow'}`}
//                         >
//                             &gt;
//                         </span>
//                     )}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Sidebar;



import React from 'react';
import './Sidebar.css';
import kiran from '../assets/images/kiran.png';
import dashboardIcon from '../assets/images/dashboard.png';
import emailIcon from '../assets/images/email.png';
import calenderIcon from '../assets/images/calender.png';
import appointmentIcon from '../assets/images/appointment.png';
import doctorsIcon from '../assets/images/doctors.png';
import otherIcon from '../assets/images/other.png';
import patientsIcon from '../assets/images/patients.png';
import roomIcon from '../assets/images/room.png';
import paymentsIcon from '../assets/images/payments.png';
import widgetIcon from '../assets/images/widget.png';
import uiIcon from '../assets/images/ui.png';
import materialIcon from '../assets/images/material.png';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="profile-card">
                <div className="profile-image">
                    <img src={kiran} alt="Profile" />
                </div>
                <div className="profile-data">
                    <h2 className="heading">Dr. Kiran Patel</h2>
                    <p className="designation">Administrator</p>
                </div>
            </div>
            <div className="dashboard">
                <img src={dashboardIcon} alt="Dashboard Icon" className="dashboard-icon" />
                <span className="dashboard-text">Dashboard</span>
                <span className='dashboard-arrow'>^</span>
            </div>
            <div className="email">
                <img src={emailIcon} alt="Email Icon" className="email-icon" />
                <span className="email-text">Email</span>
                <span className='email-count'>3</span>
                <span className='email-arrow'>&gt;</span>
            </div>
            <div className="email">
                <img src={calenderIcon} alt="Calender Icon" className="email-icon" />
                <span className="email-text">Calender</span>
            </div>
            <div className="email">
                <img src={appointmentIcon} alt="Appointment Icon" className="email-icon" />
                <span className="email-text">Appointment</span>
                <span className='email-arrow'>&gt;</span>
            </div>
            <div className="email">
                <img src={doctorsIcon} alt="Doctors Icon" className="email-icon" />
                <span className="email-text">Doctors</span>
                <span className='email-arrow'>&gt;</span>
            </div>
            <div className="email">
                <img src={otherIcon} alt="Other Staff Icon" className="email-icon" />
                <span className="email-text">Other Staff</span>
                <span className='email-arrow'>&gt;</span>
            </div>
            <div className="email">
                <img src={patientsIcon} alt="Patients Icon" className="email-icon" />
                <span className="email-text">Patients</span>
                <span className='email-arrow'>&gt;</span>
            </div>
            <div className="email">
                <img src={roomIcon} alt="Room Allotment Icon" className="email-icon" />
                <span className="email-text">Room Allotment</span>
                <span className='email-arrow'>&gt;</span>
            </div>
            <div className="email">
                <img src={paymentsIcon} alt="Payments Icon" className="email-icon" />
                <span className="email-text">Payments</span>
                <span className='email-arrow'>&gt;</span>
            </div>
            <div className="email">
                <img src={widgetIcon} alt="Widget Icon" className="email-icon" />
                <span className="email-text">Widget</span>
            </div>
            <div className="email">
                <img src={uiIcon} alt="UI Elements Icon" className="email-icon" />
                <span className="email-text">UI Elements</span>
                <span className='ui-count'>10</span>
                <span className='email-arrow'>&gt;</span>
            </div>
            <div className="email">
                <img src={materialIcon} alt="Material Elements Icon" className="email-icon" />
                <span className="email-text">Material Elements</span>
                <span className='email-arrow'>&gt;</span>
            </div>
        </div>
    );
};

export default Sidebar;
