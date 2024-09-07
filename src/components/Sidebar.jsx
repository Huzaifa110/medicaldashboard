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
import SidebarItem from './SidebarItem';

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

            <SidebarItem
                icon={dashboardIcon}
                text="Dashboard"
                arrow={{ direction: 'down' }}
                backgroundColor="#F4F6F9"
                textColor="#4680FF"
                arrowColor="#4680FF"
            />

            <SidebarItem
                icon={emailIcon}
                text="Email"
                arrow={{ direction: 'right' }}
                count={{ text: '3', backgroundColor: '#E91E63' }}
            />

            <SidebarItem
                icon={calenderIcon}
                text="Calender"
            />

            <SidebarItem
                icon={appointmentIcon}
                text="Appointment"
                arrow={{ direction: 'right' }}
            />

            <SidebarItem
                icon={doctorsIcon}
                text="Doctors"
                arrow={{ direction: 'right' }}
            />

            <SidebarItem
                icon={otherIcon}
                text="Other Staff"
                arrow={{ direction: 'right' }}
            />

            <SidebarItem
                icon={patientsIcon}
                text="Patients"
                arrow={{ direction: 'right' }}
            />

            <SidebarItem
                icon={roomIcon}
                text="Room Allotment"
                arrow={{ direction: 'right' }}
            />

            <SidebarItem
                icon={paymentsIcon}
                text="Payments"
                arrow={{ direction: 'right' }}
            />

            <SidebarItem
                icon={widgetIcon}
                text="Widget"
            />

            <SidebarItem
                icon={uiIcon}
                text="UI Elements"
                arrow={{ direction: 'right' }}
                count={{ text: '10', backgroundColor: '#1EBDCC' }}
            />

            <SidebarItem
                icon={materialIcon}
                text="Material Elements"
                arrow={{ direction: 'right' }}
            />
        </div>
    );
};

export default Sidebar;

