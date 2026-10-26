import React, { useEffect } from 'react';

type JspSuccessComponentProps = {
    data?: Record<string, any>;
};

export const JspSuccessComponent: React.FC<JspSuccessComponentProps> = ({ data = {} }) => {
    const { type } = data;
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
            registerTimer('timeout', window.setTimeout(() => {
                    window.location.href = "/customerdashboard";
                }, 4000));
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
<div className="success-card">
            <div className="icon">&#9989;</div>
        
            
            <div className="title">
                {
                    (type == 'profile') ? (<>
                        Profile Updated Successfully
                    </>) :
                    (<>
                        Transaction Successful
                    </>)
                }
            </div>
        
            
            <div className="subtitle">
                {
                    (type == 'profile') ? (<>
                        Your profile has been updated successfully
                    </>) :
                    (<>
                        Your money has been transferred securely
                    </>)
                }
            </div>
        
            
            <a href="/customerdashboard" className="btn">Go to Dashboard</a>
        
            
            <div className="details">
                Thank you for banking with us &#128153;
            </div>
        </div>
        </>
    );
};

export default JspSuccessComponent;