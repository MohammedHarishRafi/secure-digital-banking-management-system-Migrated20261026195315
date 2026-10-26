import React, { useEffect } from 'react';

interface JspActiveusersComponentData {
    name?: string;
}

type JspActiveusersComponentProps = {
    data?: Record<string, any>;
};

export const JspActiveusersComponent: React.FC<JspActiveusersComponentProps> = ({ data = {} }) => {
    const { Active, li, name } = data;
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
                <a href="/admindashboard" className="active">
                  <i className='bx bx-grid-alt'></i>
                  <span className="links_name">Dashboard</span>
                </a>
              </li>
              <li>
                <a href="/customeraccounts">
                  <i className='bx bx-box'></i>
                  <span className="links_name">Customer Accounts</span>
                </a>
              </li>
              <li>
                <a href="/activeusers">
                  <i className='bx bx-list-ul'></i>
                  <span className="links_name">Active Users</span>
                </a>
              </li>
        
              <li>
                <a href="/customer">
                  <i className='bx bx-user'></i>
                  <span className="links_name">Customers</span>
                </a>
              </li>
              <li>
                <a href="/message">
                  <i className='bx bx-message'></i>
                  <span className="links_name">Messages</span>
                </a>
              </li>
              <li>
                <a href="/faq_admin">
                  <i className='bx bx-list-ul'></i>
                  <span className="links_name">FAQ</span>
                </a>
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
            </nav>
        
            <div className="home-content active-users-page">
              <div className="page-header">
                <div className="page-header-text">
                  <h2>Active Users</h2>
                  <p>View all currently active registered users in a clean and organized dashboard.</p>
                </div>
                <div className="header-badge">
                  Admin Monitoring Panel
                </div>
              </div>
        
              <div className="users-card">
                <div className="users-card-top">
                  <div>
                    <h3>Users List</h3>
                    <p>All active users are displayed below.</p>
                  </div>
                  <div className="live-status">
                    <span className="live-dot"></span>
                    Active Records
                  </div>
                </div>
        
                <div className="table-wrap">
                  {
                    (!!(li)) ? (<>
                      <table className="styled-table">
                        <thead>
                          <tr>
                            <th>Account Number</th>
                            <th>Customer Name</th>
                            <th>Email Address</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {li && li?.map((user: any, index: number) => (<>
                            <tr>
                              <td>{user.accountno}</td>
                              <td>
                                <div className="user-name">
                                  <div className="avatar">
                                    <i className='bx bx-user'></i>
                                  </div>
                                  <span>{user.name}</span>
                                </div>
                              </td>
                              <td>
                                <span className="email-pill">{user.email}</span>
                              </td>
                              <td>
                                <span className="active-pill">
                                  <i className='bx bx-check-circle'></i>
                                  Active
                                </span>
                              </td>
                            </tr>
                          </>))}
                        </tbody>
                      </table>
                    </>) :
        
                    (<>
                      <div className="empty-box">
                        <i className='bx bx-user-x'></i>
                        <h4>No Active Users Found</h4>
                        <p>There are currently no active users to display.</p>
                      </div>
                    </>)
                  }
                </div>
              </div>
            </div>
          </section>
        </>
    );
};

export default JspActiveusersComponent;