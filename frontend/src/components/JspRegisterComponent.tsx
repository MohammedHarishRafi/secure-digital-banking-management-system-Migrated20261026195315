import React, { useState, useEffect } from 'react';

type JspRegisterComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const JspRegisterComponent: React.FC<JspRegisterComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({
        'accountno': '',
        'name': '',
        'email': '',
        'password': '',
        'cpassword': '',
    });
    const [backendActionNotice, setBackendActionNotice] = useState("");

    const chk = (...args: any[]) => {
        try {
            if (typeof (window as any).chk === 'function') {
                return (window as any).chk(...args);
            }
        } catch (e) {
            console.warn(e);
        }
    };
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
            (window as any).chk = chk;
            function chk() {
                  let accountno = document.forms["reg"]["accountno"].value;
                  if (accountno == "") {
                    alert("Accountno must be filled out");
                    return false;
                  }
            
                  let name = document.forms["reg"]["name"].value;
                  if (name == "") {
                    alert("Name must be filled out");
                    return false;
                  }
            
                  let email = document.forms["reg"]["email"].value;
                  if (email == "") {
                    alert("Email must be filled out");
                    return false;
                  }
            
                  let password = document.forms["reg"]["password"].value;
                  if (password == "") {
                    alert("Please enter password");
                    return false;
                  }
            
                  let cpassword = document.forms["reg"]["cpassword"].value;
                  if (cpassword == "") {
                    alert("Confirm your password");
                    return false;
                  }
            
                  if (password !== cpassword) {
                    alert("Password and Confirm Password do not match");
                    return false;
                  }
            
                  return true;
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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name) setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        if (onSubmit) {
            e.preventDefault();
            await onSubmit(formData);
            return;
        }
        // Preserved native form submission: submits to original action URL with method and inputs
    
    };

    const handleBackendAction = async (
        e: React.MouseEvent<HTMLElement>,
        action: string = "",
    ) => {
        e.preventDefault();
        if (onSubmit) {
            await onSubmit(formData);
            return;
        }
        setBackendActionNotice(
            action
                ? `The original backend action '${action}' has not been migrated to an API endpoint, so the action was not sent.`
                : "This form originally submitted to '/register' using POST. That backend action has not been migrated to an API endpoint, so the form was not submitted.",
        );
    };

    return (
        <>
        {backendActionNotice && (<>
            <div className="alert alert-warning" role="alert" data-apex-backend-action="unmigrated">
                {backendActionNotice}
            </div>
        </>)}
<div className="center">
            <div className="bank-badge">
              <i className='bx bxs-bank'></i>
            </div>
        
            <h1>Registration</h1>
            <p className="subtitle">Create your Digital Bank account in a secure and premium way</p>
        
            <form method="post" action="/register" name="reg" onSubmit={(e: any) => { if (!(chk())) e.preventDefault(); }}>
        
              <div className="txt_field">
                <i className='bx bx-credit-card'></i>
                <input onChange={handleInputChange} type="number" name="accountno" id="accountno" required />
                <label>Account No</label>
              </div>
        
              <div className="txt_field">
                <i className='bx bx-user'></i>
                <input onChange={handleInputChange} type="text" id="name" name="name" required />
                <label>Name</label>
              </div>
        
              <div className="txt_field">
                <i className='bx bx-envelope'></i>
                <input onChange={handleInputChange} type="email" id="email" name="email" required />
                <label>User Id</label>
              </div>
        
              <div className="txt_field">
                <i className='bx bx-lock-alt'></i>
                <input onChange={handleInputChange} type="password" name="password" id="password" required />
                <label>Password</label>
              </div>
        
              <div className="txt_field">
                <i className='bx bx-shield-quarter'></i>
                <input onChange={handleInputChange} type="password" name="cpassword" id="cpassword" required />
                <label>Confirm Password</label>
              </div>
        
              <input onChange={handleInputChange} type="submit" value="Register" />
        
              <div className="signup_link">
                Already have an account? <a href="/login">Login</a>
              </div>
        
              
            </form>
          </div>
        </>
    );
};

export default JspRegisterComponent;