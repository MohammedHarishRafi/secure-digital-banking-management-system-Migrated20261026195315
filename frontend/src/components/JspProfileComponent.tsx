import React, { useEffect } from 'react';

interface JspProfileComponentData {
    name?: string;
}

type JspProfileComponentProps = {
    data?: Record<string, any>;
};

export const JspProfileComponent: React.FC<JspProfileComponentProps> = ({ data = {} }) => {
    const { Account, name, usermaster } = data;
useEffect(() => {
        // Preserved from original inline <script> with component-scoped timer/listener tracking & cleanup:
        const _activeTimers: Array<{ type: 'timeout' | 'interval'; id: any }> = [];
        const _activeListeners: Array<{ target: EventTarget; type: string; listener: any; options?: any }> = [];

        const registerTimer = (type: 'timeout' | 'interval', id: any) => {
            _activeTimers.push({ type, id });
            return id;
        };
        const registerListener = (target: EventTarget, type: string, listener: any, options?: any) => {
            _activeListeners.push({ target, type, listener, options });
            target.addEventListener(type, listener, options);
            return listener;
        };

        try {
            let sidebar = document.querySelector(".sidebar");
                    let sidebarBtn = document.querySelector(".sidebarBtn");
                    sidebarBtn.onclick = function () {
                        sidebar.classList.toggle("active");
                        if (sidebar.classList.contains("active")) {
                            sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
                        } else {
                            sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
                        }
                    }
        } catch (e) {
            console.warn(e);
        }

        return () => {
            _activeTimers.forEach(t => {
                try {
                    if (t.type === 'timeout') clearTimeout(t.id);
                    else if (t.type === 'interval') clearInterval(t.id);
                } catch (e) {}
            });
            _activeListeners.forEach(l => {
                try { l.target.removeEventListener(l.type, l.listener, l.options); } catch (e) {}
            });
        };
    }, []);

    return (
        <>
<div className="sidebar">
                <div className="logo-details">
                    <i className='bx bxs-user'></i>
                    <span className="logo_name">{name}</span>
                </div>
                <ul className="nav-links">
                    <li>
                        <a href="/customerdashboard" className="active">
                            <i className='bx bx-grid-alt'></i>
                            <span className="links_name">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="/profile">
                            <i className='bx bx-user'></i>
                            <span className="links_name">Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href="/check_account">
                            <i className='bx bx-box'></i>
                            <span className="links_name">Check Account</span>
                        </a>
                    </li>
                    <li className="dropdown">
                        <a className="dropbtn">
                            <i className='bx bx-list-ul'></i>
                            <span className="links_name">Transations</span>
                            <i className='bx bxs-chevron-down'></i>
                        </a>
                        <div className="dropdown-content">
                            <a href="/deposit">Deposite Money</a>
                            <a href="/withdraw">Fund Transfer</a>
                            <a href="/addbeneficiary">Add Beneficiary</a>
                            <a href="/ministatement">Mini Statement</a>
                        </div>
                    </li>
        
                    <li className="log_out">
                        <a href="/">
                            <i className='bx bx-log-out'></i>
                            <span className="links_name">Log out</span>
                        </a>
                    </li>
                </ul>
            </div>
        
            <section className="home-section">
                <nav>
                    <div className="sidebar-button">
                        <i className='bx bx-menu sidebarBtn'></i>
                        <span className="dashboard">Dashboard</span>
                    </div>
        
                    {usermaster && usermaster?.map((user: any, index: number) => (<>
                        <div className="profile-details">
                            <img src={`data:image/jpeg;base64,${user.photoBase64}`} alt="User Photo" className="nav-profile-img" />
                            <span className="admin_name">{name}</span>
                        </div>
                    </>))}
                </nav>
        
                <div className="home-content profile-page">
                    <div className="profile-header">
                        <div className="profile-title">
                            <h2>My Profile</h2>
                            <p>Your banking profile, personal details and identity information in one premium view.</p>
                        </div>
                        <div className="profile-badge">
                            <i className='bx bx-badge-check'></i> Verified Customer
                        </div>
                    </div>
        
                    {usermaster && usermaster?.map((user: any, index: number) => (<>
                        <div className="profile-card">
                            <div className="profile-top">
                                <div className="profile-top-content">
                                    <div className="profile-image-box">
                                        <img src={`data:image/jpeg;base64,${user.photoBase64}`} alt="User Photo" />
                                    </div>
                                    <div className="profile-main-info">
                                        <h3>{user.name}</h3>
                                        <p><i className='bx bx-envelope'></i> {user.email}</p>
                                        <p><i className='bx bx-credit-card'></i> Account No: {user.accountno}</p>
                                    </div>
                                </div>
                            </div>
        
                            <div className="profile-body">
                                <div className="section-title">Personal Details</div>
        
                                <div className="profile-grid">
                                    <div className="info-card">
                                        <div className="info-label">Account Type</div>
                                        <div className="info-value">{user.account_type}</div>
                                    </div>
        
                                    <div className="info-card">
                                        <div className="info-label">Date of Birth</div>
                                        <div className="info-value">{user.dob}</div>
                                    </div>
        
                                    <div className="info-card">
                                        <div className="info-label">Gender</div>
                                        <div className="info-value">{user.gender}</div>
                                    </div>
        
                                    <div className="info-card">
                                        <div className="info-label">Occupation</div>
                                        <div className="info-value">{user.occupation}</div>
                                    </div>
        
                                    <div className="info-card">
                                        <div className="info-label">Father's Name</div>
                                        <div className="info-value">{user.fathers_name}</div>
                                    </div>
        
                                    <div className="info-card">
                                        <div className="info-label">Mother's Name</div>
                                        <div className="info-value">{user.mothers_name}</div>
                                    </div>
        
                                    <div className="info-card">
                                        <div className="info-label">Aadhaar No</div>
                                        <div className="info-value">{user.aadhar_no}</div>
                                    </div>
        
                                    <div className="info-card">
                                        <div className="info-label">Mobile No</div>
                                        <div className="info-value">{user.mobile_no}</div>
                                    </div>
        
                                    <div className="info-card">
                                        <div className="info-label">Marital Status</div>
                                        <div className="info-value">{user.marital_status}</div>
                                    </div>
        
                                    <div className="info-card">
                                        <div className="info-label">PAN No</div>
                                        <div className="info-value">{user.pan_no}</div>
                                    </div>
        
                                    <div className="info-card">
                                        <div className="info-label">Nationality</div>
                                        <div className="info-value">{user.nationality}</div>
                                    </div>
        
                                    <div className="info-card">
                                        <div className="info-label">Religion</div>
                                        <div className="info-value">{user.religion}</div>
                                    </div>
        
                                    <div className="info-card">
                                        <div className="info-label">Qualification</div>
                                        <div className="info-value">{user.qualification}</div>
                                    </div>
        
                                    <div className="info-card">
                                        <div className="info-label">Category</div>
                                        <div className="info-value">{user.category}</div>
                                    </div>
        
                                    <div className="info-card">
                                        <div className="info-label">City</div>
                                        <div className="info-value">{user.city}</div>
                                    </div>
        
                                    <div className="info-card">
                                        <div className="info-label">State</div>
                                        <div className="info-value">{user.state}</div>
                                    </div>
        
                                    <div className="info-card">
                                        <div className="info-label">PIN</div>
                                        <div className="info-value">{user.pin}</div>
                                    </div>
        
                                    <div className="info-card full-width">
                                        <div className="info-label">Address</div>
                                        <div className="info-value">{user.address}</div>
                                    </div>
                                </div>
        
        
                                <div style={{ marginTop: '25px', textAlign: 'center' }}>
            <a href="/updateprofile">
                <button style={{ background: 'linear-gradient(135deg, #0A2558, #2d5fd3)', color: 'white', padding: '12px 30px', border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: '700', cursor: 'pointer', boxShadow: '0 8px 20px rgba(10, 37, 88, 0.2)', transition: 'all 0.3s ease' }} onMouseOver={(e: any) => { (e.currentTarget as any).style.transform='scale(1.05)'; }} onMouseOut={(e: any) => { (e.currentTarget as any).style.transform='scale(1)'; }}>
                    &#9999; Update Profile
                </button>
            </a>
        </div>
                            </div>
                        </div>
                    </>))}
                </div>
            </section>
        </>
    );
};

export default JspProfileComponent;