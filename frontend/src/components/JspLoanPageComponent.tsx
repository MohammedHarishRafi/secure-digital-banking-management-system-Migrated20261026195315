import React, { useState, useEffect } from 'react';

interface JspLoanPageComponentData {
    error?: string;
    msg?: string;
}

type JspLoanPageComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const JspLoanPageComponent: React.FC<JspLoanPageComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({
        'amount': '',
        'tenure': '',
        'agree': '',
    });
    const [backendActionNotice, setBackendActionNotice] = useState("");
    const { error, msg, seconds, updateLoan, validateLoan } = data;
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
            let time = 3;
            
                let timer = registerTimer('interval', window.setInterval(function() {
                    time--;
                    document.getElementById("count") /* TODO: useRef */.innerText = time;
            
                    if(time <= 0){
                        clearInterval(timer);
                        window.location.href = "/customerdashboard";
                    }
                }, 1000));
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
                : "This form originally submitted to '/applyLoan' using POST. That backend action has not been migrated to an API endpoint, so the form was not submitted.",
        );
    };

    return (
        <>
        {backendActionNotice && (<>
            <div className="alert alert-warning" role="alert" data-apex-backend-action="unmigrated">
                {backendActionNotice}
            </div>
        </>)}
<div className="wrapper">
        
        <form action="/applyLoan" method="post" onSubmit={(e: any) => { if (!(validateLoan())) e.preventDefault(); }}>
        
        <input type="hidden" name="amount" id="hiddenAmount" />
        
        
        <div className="header">
            <h2>💰 Personal Loan</h2>
            <p>Instant • Smart • Paperless</p>
        </div>
        
        
        <div className="card">
            <div className="label">Loan Amount</div>
            <div className="amount" id="amountText"></div>
        
        <input onChange={handleInputChange} type="range" id="amount" min="1000" max="10000" value="1000" step="500" onInput={() => updateLoan()} />
        </div>
        
        
        <div className="card">
            <div className="label">Loan Tenure</div>
        
            <input onChange={handleInputChange} type="range" id="tenure" min="3" max="24" value="6" onInput={() => updateLoan()} />
        
            <div id="tenureText" style={{ color: '#a78bfa' }}></div>
        </div>
        
        <div className="card emi">
        
            <p className="emi-label">Monthly EMI</p>
            <h2 id="emi">₹ 0</h2>
        
            <div className="divider"></div>
        
            <div className="row">
                <span className="sub-label">Total Payable</span>
                <b id="total" className="total-value"></b>
            </div>
        
            <div className="row">
                <span className="sub-label">Interest Rate</span>
                <b className="interest-value">10% fixed</b>
            </div>
        
        </div>
        
        
        <div className="card">
            <b style={{ color: '#a78bfa' }}>Eligibility</b>
            <ul>
                <li>Account older than 3 months</li>
                <li>No active loans</li>
                <li>Balance below ₹100</li>
            </ul>
        </div>
        
        
        <div className="checkbox">
            <input onChange={handleInputChange} type="checkbox" id="agree" /> Accept Terms & Conditions
        </div>
        
        <p className="error">{error}</p>
        <p className="success">{msg}</p>
        {(!!(msg)) && (<>
          
          <p className="success">
            {msg} <br />
            ⏳ Redirecting to dashboard in <span id="count">5</span> seconds?...
          </p>
        
          
        
        </>)}
        
        
        <button className="apply-btn">Apply Loan</button>
        
        </form>
        
        </div>
        </>
    );
};

export default JspLoanPageComponent;