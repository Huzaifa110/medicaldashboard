import React from 'react';
import './MainContent.css';
import LineGraph from './LineGraph';
import BiggerLineGraph from './BiggerLineGraph';
import StackedBarGraph from './StackedBarGraph';
import visitorsGraphImage from '../assets/images/visitors-graph-image.png';
import opdGraphImage from '../assets/images/opdgraph.png';
import todaysOperationsGraphImage from '../assets/images/todaysoperationsgraph.png';
import newPatientGraphImage from '../assets/images/newpatientsgraph.png'
import PointyLineGraph from './PointyLineGraph';

const MainContent = () => {
    return (
        <div className="main-content">
            <div className="dashboard-header">
                <span className="dashboard-text">Dashboard</span>
                <span className='right-portion'>
                    <span className='home-icon'></span>
                    <span className="home-heading">Home</span>
                    <span className="arrow"></span>
                    <span className="right-dashboard">Dashboard</span>
                </span>
            </div>
            <div className="grid-container-1">
                <div className="left-grid">
                    <div className="grid-item new-patient-container">
                        <div className="new-patient-heading-container">
                            <h2 className="new-patient-heading-text">New Patients</h2>
                            <div className="heading-and-graph-container">
                                <div className="heading-and-graph-container-text">
                                    <p className='number'>125</p>
                                </div>
                                <div className="heading-and-graph-container-image">
                                    <img src={newPatientGraphImage} alt="image" />
                                </div>
                            </div>
                            <div className="bar-container">
                                <div className="line-gradient-newpatient"></div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item opd-patients-container">
                        <div className="new-patient-heading-container">
                            <h2 className="new-patient-heading-text">OPD Patients</h2>
                            <div className="heading-and-graph-container">
                                <div className="heading-and-graph-container-text">
                                    <p className='number'>218</p>
                                </div>
                                <div className="heading-and-graph-container-image">
                                    <img src={opdGraphImage} alt="image" />
                                </div>
                            </div>
                            <div className="bar-container">
                                <div className="line-gradient-opdsection"></div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item todays-operations-container">
                        <div className="new-patient-heading-container">
                            <h2 className="new-patient-heading-text">Today's Operations</h2>
                            <div className="heading-and-graph-container">
                                <div className="heading-and-graph-container-text">
                                    <p className='number'>25</p>
                                </div>
                                <div className="heading-and-graph-container-image">
                                    <img src={todaysOperationsGraphImage} alt="image" />
                                </div>
                            </div>
                            <div className="bar-container">
                                <div className="line-gradient-todaysoperation"></div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item visitors-container">
                        <div className="new-patient-heading-container">
                            <h2 className="new-patient-heading-text">Visitors</h2>
                            <div className="heading-and-graph-container">
                                <div className="heading-and-graph-container-text">
                                    <p className='number'>2,479</p>
                                </div>
                                <div className="heading-and-graph-container-image">
                                    <img src={visitorsGraphImage} alt="image" />
                                </div>
                            </div>
                            <div className="bar-container">
                                <div className="line-gradient-visitors"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hospital-survey">
                    <div className="hospital-survey-header">
                        <div className="hospital-survey-header-left">
                            <p className="hospital-survey-header-left-text">HOSPITAL SURVEY</p>
                        </div>
                        <div className="hospital-survey-header-right">
                            <span className="down-button-admit"></span>
                            <span className="cross-button-admit"></span>
                        </div>
                    </div>
                    <BiggerLineGraph />
                </div>
            </div>
            <div className="grid-container-2">
                <div className="new-patient">
                    <div className='new-patient-header'>
                        <div className="left-new-patient-header">
                            <h2 className="new-patient-heading">New Patient</h2>
                        </div>
                        <div className="right-new-patient-header"><span className='twenty-five-percent'></span>25% High then last month</div>
                    </div>
                    <div className="new-patient-summary-container">
                        <div className="overall-growth-container" style={{ marginRight: '20px' }}>
                            <div className="overall-growth-heading">Overall Growth</div>
                            <div className="overall-growth-percentage">35.80%</div>
                        </div>
                        <div className="monthly-container">
                            <div className="monthly-heading">Monthly</div>
                            <div className="monthly-percentage">45.20%</div>
                        </div>
                        <div className="day-container">
                            <div className="day-heading">Day</div>
                            <div className="day-percentage">5.5%</div>
                        </div>
                    </div>
                    <LineGraph />
                </div>
                <div className="new-patient">
                    <div className='new-patient-header'>
                        <div className="left-new-patient-header">
                            <h2 className="new-patient-heading">Heart Surgeries</h2>
                        </div>
                        <div className="right-heart-surgeries-header"><span className='thirty-percent'></span>30% Low then last month</div>
                    </div>
                    <div className="new-patient-summary-container">
                        <div className="overall-growth-container" style={{ marginRight: '20px' }}>
                            <div className="overall-growth-heading">Overall Growth</div>
                            <div className="overall-growth-percentage">20.60%</div>
                        </div>
                        <div className="monthly-container">
                            <div className="monthly-heading">Monthly</div>
                            <div className="monthly-percentage">65.30%</div>
                        </div>
                        <div className="day-container">
                            <div className="day-heading">Day</div>
                            <div className="day-percentage">4.90%</div>
                        </div>
                    </div>
                    <StackedBarGraph />
                </div>
                <div className="new-patient">
                    <div className='new-patient-header'>
                        <div className="left-new-patient-header">
                            <h2 className="new-patient-heading">Medical Treatment</h2>
                        </div>
                        <div className="right-new-patient-header"><span className='twenty-five-percent'></span>20% High then last month</div>
                    </div>
                    <div className="new-patient-summary-container">
                        <div className="overall-growth-container" style={{ marginRight: '20px' }}>
                            <div className="overall-growth-heading">Overall Growth</div>
                            <div className="overall-growth-percentage">35.80%</div>
                        </div>
                        <div className="monthly-container">
                            <div className="monthly-heading">Monthly</div>
                            <div className="monthly-percentage">45.20%</div>
                        </div>
                        <div className="day-container">
                            <div className="day-heading">Day</div>
                            <div className="day-percentage">5.5%</div>
                        </div>
                    </div>
                    <PointyLineGraph />
                </div>
            </div>
            <div className='admit-patient-list-container'>
                <div className="header-section-admit">
                    <div className='admit-patient-list-heading-container'>
                        <h2 className='admit-patient-list-heading-text'>ADMIT PATIENT LIST</h2>
                    </div>
                    <div className="right-header-admit">
                        <span className="down-button-admit"></span>
                        <span className="cross-button-admit"></span>
                    </div>
                </div>
                <div className='admit-patient-list-table-container'>
                    <table className='admit-patient-list-table'>
                        <thead>
                            <tr>
                                <th className='table-head' style={{ width: '82.94px' }}>No</th>
                                <th className='table-head' style={{ width: '293.28px' }}>Name</th>
                                <th className='table-head' style={{ width: '392.67px' }}>Assigned Doctor</th>
                                <th className='table-head' style={{ width: '272.17px' }}>Date of Admit</th>
                                <th className='table-head' style={{ width: '251.38px' }}>Diseases</th>
                                <th className='table-head' style={{ width: '188.52px' }}>Room No</th>
                                <th className='table-head' style={{ width: '194.05px' }}>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='table-data'>1</td>
                                <td className='table-data'>Janes Brincker</td>
                                <td className='table-data'>Dr.Kenny Josh</td>
                                <td className='table-data'>27/05/2016</td>
                                <td>
                                    <p className='disease-1'>Influenza</p>
                                </td>
                                <td className='table-data'>101</td>
                                <td>
                                    <div className='edit-button-container'>
                                        <span className='edit-pencil-button'>
                                            <p className="edit-pencil"></p>
                                        </span>
                                        <span className='edit-empty-buton'></span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='table-data'>2</td>
                                <td className='table-data'>Mark Hay</td>
                                <td className='table-data'>Dr. Mark</td>
                                <td className='table-data'>26/05/2017</td>
                                <td>
                                    <p className='disease-2'>Chlorea</p>
                                </td>
                                <td className='table-data'>105</td>
                                <td>
                                    <div className='edit-button-container'>
                                        <span className='edit-pencil-button'>
                                            <p className="edit-pencil"></p>
                                        </span>
                                        <span className='edit-empty-buton'></span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='table-data'>3</td>
                                <td className='table-data'>Anthony Davie</td>
                                <td className='table-data'>Dr. Cinnabar</td>
                                <td className='table-data'>21/05/2016</td>
                                <td>
                                    <p className="disease-3">Amoebiasis</p>
                                </td>
                                <td className='table-data'>106</td>
                                <td>
                                    <div className='edit-button-container'>
                                        <span className='edit-pencil-button'>
                                            <p className="edit-pencil"></p>
                                        </span>
                                        <span className='edit-empty-buton'></span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='table-data'>4</td>
                                <td className='table-data'>David Perry</td>
                                <td className='table-data'>Dr. Felix</td>
                                <td className='table-data'>20/04/2016</td>
                                <td>
                                    <p className="disease-4">Jaundice</p>
                                </td>
                                <td className='table-data'>105</td>
                                <td>
                                    <div className='edit-button-container'>
                                        <span className='edit-pencil-button'>
                                            <p className="edit-pencil"></p>
                                        </span>
                                        <span className='edit-empty-buton'></span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='table-data'>5</td>
                                <td className='table-data'>Anthony Davie</td>
                                <td className='table-data'>Dr. Beryl</td>
                                <td className='table-data'>24/05/2016</td>
                                <td>
                                    <p className="disease-5">Leptospirosis</p>
                                </td>
                                <td className='table-data'>102</td>
                                <td>
                                    <div className='edit-button-container'>
                                        <span className='edit-pencil-button'>
                                            <p className="edit-pencil"></p>
                                        </span>
                                        <span className='edit-empty-buton'></span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='table-data'>6</td>
                                <td className='table-data'>Alan Gilchrist</td>
                                <td className='table-data'>Dr. Joshep</td>
                                <td className='table-data'>22/05/2016</td>
                                <td>
                                    <p className="disease-6">Hepatitis</p>
                                </td>
                                <td className='table-data'>103</td>
                                <td>
                                    <div className='edit-button-container'>
                                        <span className='edit-pencil-button'>
                                            <p className="edit-pencil"></p>
                                        </span>
                                        <span className='edit-empty-buton'></span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='table-data'>7</td>
                                <td className='table-data'>Mark Hay</td>
                                <td className='table-data'>Dr. Jayesh</td>
                                <td className='table-data'>18/06/2016</td>
                                <td>
                                    <p className="disease-7">Typhoid</p>
                                </td>
                                <td className='table-data'>107</td>
                                <td>
                                    <div className='edit-button-container'>
                                        <span className='edit-pencil-button'>
                                            <p className="edit-pencil"></p>
                                        </span>
                                        <span className='edit-empty-buton'></span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='table-data'>8</td>
                                <td className='table-data'>Sue Woodger</td>
                                <td className='table-data'>Dr. Sharma</td>
                                <td className='table-data'>17/05/2016</td>
                                <td>
                                    <p className="disease-8">Malaria</p>
                                </td>
                                <td className='table-data'>108</td>
                                <td>
                                    <div className='edit-button-container'>
                                        <span className='edit-pencil-button'>
                                            <p className="edit-pencil"></p>
                                        </span>
                                        <span className='edit-empty-buton'></span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
