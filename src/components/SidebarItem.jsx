import React from 'react';
import './Sidebar.css';

const SidebarItem = ({ icon, text, arrow, count, backgroundColor, textColor, arrowColor }) => {
    return (
        <div className="sidebar-item" style={{ backgroundColor }}>
            <img src={icon} alt={`${text} Icon`} className="sidebar-icon" />
            <span className="sidebar-text" style={{ color: textColor }}>{text}</span>
            {count && <span className="sidebar-count" style={{ backgroundColor: count.backgroundColor }}>{count.text}</span>}
            {arrow && <span className={`fas fa-chevron-${arrow.direction} sidebar-arrow`} style={{ color: arrowColor }}></span>}
        </div>
    );
};

export default SidebarItem;