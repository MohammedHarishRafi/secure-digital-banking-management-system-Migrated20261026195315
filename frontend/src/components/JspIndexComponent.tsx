import React, { useState, useEffect } from 'react';

interface JspIndexComponentData {
    sms?: string;
}

type JspIndexComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const JspIndexComponent: React.FC<JspIndexComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({
        'name': '',
        'email': '',
        'subject': '',
        'message': '',
    });
    const [backendActionNotice, setBackendActionNotice] = useState("");
    const { sms } = data;
    const chk = (...args: any[]) => {
        try {
            if (typeof (window as any).chk === 'function') {
                return (window as any).chk(...args);
            }
        } catch (e) {
            console.warn(e);
        }
    };
    const validName = (...args: any[]) => {
        try {
            if (typeof (window as any).validName === 'function') {
                return (window as any).validName(...args);
            }
        } catch (e) {
            console.warn(e);
        }
    };
    const validEmail = (...args: any[]) => {
        try {
            if (typeof (window as any).validEmail === 'function') {
                return (window as any).validEmail(...args);
            }
        } catch (e) {
            console.warn(e);
        }
    };
    const validSubject = (...args: any[]) => {
        try {
            if (typeof (window as any).validSubject === 'function') {
                return (window as any).validSubject(...args);
            }
        } catch (e) {
            console.warn(e);
        }
    };
    const validMessage = (...args: any[]) => {
        try {
            if (typeof (window as any).validMessage === 'function') {
                return (window as any).validMessage(...args);
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
            (window as any).validName = validName;
            (window as any).validEmail = validEmail;
            (window as any).validSubject = validSubject;
            (window as any).validMessage = validMessage;
            msg = "${sms}";
                        if (msg) {
                          alert(msg);
                        }
            function chk() {
                  let nameError = validName();
                  let emailError = validEmail();
                  let subjectError = validSubject();
                  let messageError = validMessage();
            
                  if (nameError && emailError && subjectError && messageError) {
                    return true;
                  } else {
                    return false;
                  }
                }
            
                function validName() {
                  let name = $("#name").val();
                  if (name == "") {
                    $("#nsms").html("Name should not be blank");
                    return false;
                  } else {
                    $("#nsms").html("");
                    return true;
                  }
                }
            
                function validEmail() {
                  let email = $("#email").val();
                  if (email == "") {
                    $("#esms").html("Email should not be blank");
                    return false;
                  } else {
                    $("#esms").html("");
                    return true;
                  }
                }
            
                function validSubject() {
                  let subject = $("#subject").val();
                  if (subject == "") {
                    $("#ssms").html("Subject should not be blank");
                    return false;
                  } else {
                    $("#ssms").html("");
                    return true;
                  }
                }
            
                function validMessage() {
                  let message = $("#message").val();
                  if (message == "") {
                    $("#msms").html("Message should not be blank");
                    return false;
                  } else {
                    $("#msms").html("");
                    return true;
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
                : "This form originally submitted to '/contact' using POST. That backend action has not been migrated to an API endpoint, so the form was not submitted.",
        );
    };

    return (
        <>
        {backendActionNotice && (<>
            <div className="alert alert-warning" role="alert" data-apex-backend-action="unmigrated">
                {backendActionNotice}
            </div>
        </>)}
<div id="overlayer"></div>
          <div className="loader">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        
          <div className="site-wrap">
            <div className="site-mobile-menu site-navbar-target">
              <div className="site-mobile-menu-header">
                <div className="site-mobile-menu-close mt-3">
                  <span className="icon-close2 js-menu-toggle"></span>
                </div>
              </div>
              <div className="site-mobile-menu-body"></div>
            </div>
        
            <header className="site-navbar js-sticky-header site-navbar-target" role="banner">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-6 col-xl-2">
                    <h1 className="mb-0 site-logo">
                      <a href="/" className="h2 mb-0">DIGITAL<span className="text-primary">BANK</span></a>
                    </h1>
                  </div>
        
                  <div className="col-12 col-md-10 d-none d-xl-block">
                    <nav className="site-navigation position-relative text-right" role="navigation">
                      <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                        <li><a href="/" className="nav-link">Home</a></li>
                        <li><a href="#services-section" className="nav-link">Services</a></li>
                        <li className="has-children">
                          <a href="#" className="nav-link">Apply Now</a>
                          <ul className="dropdown">
                            <li><a href="/create_account" className="nav-link">New Account</a></li>
                            <li><a href="/register" className="nav-link">Register Account</a></li>
                          </ul>
                        </li>
                        <li><a href="#faq" className="nav-link">FAQs</a></li>
                        <li><a href="#about-section" className="nav-link">About Us</a></li>
                        <li><a href="#contact-section" className="nav-link">Contact Us</a></li>
                        <li><a href="/login"><button className="btn btn-primary">Login</button></a></li>
                      </ul>
                    </nav>
                  </div>
        
                  <div className="col-6 d-inline-block d-xl-none ml-md-0 py-3" style={{ position: 'relative', top: '3px' }}>
                    <a href="#" className="site-menu-toggle js-menu-toggle float-right">
                      <span className="icon-menu h3"></span>
                    </a>
                  </div>
                </div>
              </div>
            </header>
        
            <div className="site-blocks-cover overlay" style={{ backgroundImage: 'url(images/hero_2.jpg)' }} data-aos="fade" id="home-section">
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-10 mt-lg-5 text-center">
                    <div className="single-text owl-carousel">
        
                      <div className="slide">
                        <span className="glass-badge">SMART & SECURE & MODERN BANKING</span>
                        <h1 className="text-uppercase" data-aos="fade-up">Banking Solutions</h1>
                        <p className="mb-5 desc" data-aos="fade-up" data-aos-delay="100">
                          At DIGITALBANK We empower your financial journey with secure digital services, fast account access,
                          easy fund transfers, and a smooth online banking experience built for modern users.
                        </p>
                        <div className="hero-actions" data-aos="fade-up" data-aos-delay="100">
                          <a href="/create_account" className="btn btn-primary mr-2 mb-2">Open Account</a>
                          <a href="#contact-section" className="btn btn-primary mr-2 mb-2">Get In Touch</a>
                        </div>
                      </div>
        
                      <div className="slide">
                        <span className="glass-badge">FAST APPROVAL & EASY ACCESS</span>
                        <h1 className="text-uppercase" data-aos="fade-up">Financing Solutions</h1>
                        <p className="mb-5 desc" data-aos="fade-up" data-aos-delay="100">
                          Explore digital banking made simple with flexible accounts, modern transaction tools, responsive support,
                          and features that help you manage money with confidence and convenience.
                        </p>
                        <div data-aos="fade-up" data-aos-delay="100">
                          <a href="/login" className="btn btn-primary mr-2 mb-2">Login Now</a>
                        </div>
                      </div>
        
                      <div className="slide">
                        <span className="glass-badge">SAVE MORE & STRESS LESS</span>
                        <h1 className="text-uppercase" data-aos="fade-up">Savings Accounts</h1>
                        <p className="mb-5 desc" data-aos="fade-up" data-aos-delay="100">
                          Join DIGITALBANK today and experience a polished, secure, and customer-friendly banking platform
                          designed to support your goals from account opening to everyday transactions.
                        </p>
                        <div data-aos="fade-up" data-aos-delay="100">
                          <a href="/register" className="btn btn-primary mr-2 mb-2">Register</a>
                        </div>
                      </div>
        
                    </div>
                  </div>
                </div>
              </div>
        
              <a href="#next" className="mouse smoothscroll">
                <span className="mouse-icon">
                  <span className="mouse-wheel"></span>
                </span>
              </a>
            </div>
        
            <div className="site-section cta-big-image" id="about-section">
              <div className="container">
                <div className="row mb-5 justify-content-center">
                  <div className="col-md-8 text-center">
                    <h2 className="section-title mb-3" data-aos="fade-up">About Us</h2>
                    <p className="lead" data-aos="fade-up" data-aos-delay="100">
                      At DIGITALBANK, we believe in simple, secure, and reliable digital banking for everyone.
                      Our mission is to provide modern financial services with trust, speed, and convenience.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 mb-5" data-aos="fade-up">
                    <figure className="circle-bg">
                      <img src="images/img_2.jpg" alt="About DigitalBank" className="img-fluid" />
                    </figure>
                  </div>
                  <div className="col-lg-5 ml-auto" data-aos="fade-up" data-aos-delay="100">
                    <h3 className="text-black mb-4">We Solve Your Financial Problem</h3>
                    <p>
                      Our platform is built to make account opening, registration, profile access, transactions,
                      and balance checking smooth and convenient for every user.
                    </p>
                    <p>
                      Join DIGITALBANK and experience a better way to manage your money with confidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
        
            <div className="site-section" id="next">
              <div className="container">
                <div className="row mb-5">
                  <div className="col-md-4 text-center" data-aos="fade-up">
                    <div className="feature-box p-4">
                      <img src="images/flaticon-svg/svg/001-wallet.svg" className="img-fluid w-25 mb-4" alt="" />
                      <h3 className="card-title">Money Savings</h3>
                      <p>Smart saving options to help you secure your future and manage your income wisely.</p>
                    </div>
                  </div>
                  <div className="col-md-4 text-center" data-aos="fade-up" data-aos-delay="100">
                    <div className="feature-box p-4">
                      <img src="images/flaticon-svg/svg/004-cart.svg" className="img-fluid w-25 mb-4" alt="" />
                      <h3 className="card-title">Digital Banking</h3>
                      <p>Access your banking services online anytime with a convenient and secure digital platform.</p>
                    </div>
                  </div>
                  <div className="col-md-4 text-center" data-aos="fade-up" data-aos-delay="200">
                    <div className="feature-box p-4">
                      <img src="images/flaticon-svg/svg/006-credit-card.svg" className="img-fluid w-25 mb-4" alt="" />
                      <h3 className="card-title">Credit / Debit Cards</h3>
                      <p>Enjoy seamless payments, secure transactions, and easy access to your money everywhere.</p>
                    </div>
                  </div>
                </div>
        
                <div className="row">
                  <div className="col-lg-6 mb-5" data-aos="fade-up">
                    <figure className="circle-bg">
                      <img src="images/about_2.jpg" alt="Priority Banking" className="img-fluid" />
                    </figure>
                  </div>
                  <div className="col-lg-5 ml-auto" data-aos="fade-up" data-aos-delay="100">
                    <div className="mb-4">
                      <h3 className="h3 mb-4 text-black">Banking Solutions Are Our Priority</h3>
                      <p>
                        At DIGITALBANK, integrity, transparency, and trust are the pillars of our service.
                      </p>
                    </div>
                    <div className="mb-4">
                      <ul className="list-unstyled ul-check success">
                        <li>Current Accounts</li>
                        <li>Savings Accounts</li>
                        <li>Deposit Accounts</li>
                        <li>Recurring Deposit</li>
                        <li>Loan Approval</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
            <section className="site-section">
              <div className="container">
                <div className="row mb-5 justify-content-center">
                  <div className="col-md-7 text-center">
                    <h2 className="section-title mb-3" data-aos="fade-up">How It Works</h2>
                    <p className="lead" data-aos="fade-up" data-aos-delay="100">
                      Open your account, get approval, and start using banking services quickly through our easy online workflow.
                    </p>
                  </div>
                </div>
        
                <div className="row align-items-lg-center">
                  <div className="col-lg-6 mb-5" data-aos="fade-up">
                    <div className="owl-carousel slide-one-item-alt">
                      <img src="images/img2.jpg" alt="Image" className="img-fluid" />
                      <img src="images/img_2.jpg" alt="Image" className="img-fluid" />
                      <img src="images/img3.jpg" alt="Image" className="img-fluid" />
                    </div>
                    <div className="custom-direction">
                      <a href="#" className="custom-prev"><span><span className="icon-keyboard_backspace"></span></span></a>
                      <a href="#" className="custom-next"><span><span className="icon-keyboard_backspace"></span></span></a>
                    </div>
                  </div>
        
                  <div className="col-lg-5 ml-auto" data-aos="fade-up" data-aos-delay="100">
                    <div className="owl-carousel slide-one-item-alt-text">
                      <div>
                        <h2 className="section-title mb-3">01. Online Applications</h2>
                        <p>Submit your account application through our digital platform with simple and secure steps.</p>
                        <p><a href="/create_account" className="btn btn-primary mr-2 mb-2">Learn More</a></p>
                      </div>
                      <div>
                        <h2 className="section-title mb-3">02. Get Approval</h2>
                        <p>Your request is verified and approved so you can continue your banking registration smoothly.</p>
                        <p><a href="/register" className="btn btn-primary mr-2 mb-2">Learn More</a></p>
                      </div>
                      <div>
                        <h2 className="section-title mb-3">03. Start Banking</h2>
                        <p>Log in to your account, manage funds, check balance, and enjoy quick digital banking services.</p>
                        <p><a href="/login" className="btn btn-primary mr-2 mb-2">Learn More</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        
            <section className="site-section border-bottom bg-light" id="services-section">
              <div className="container">
                <div className="row mb-5">
                  <div className="col-12 text-center" data-aos="fade">
                    <h2 className="section-title mb-3">Our Services</h2>
                  </div>
                </div>
        
                <div className="row align-items-stretch">
                  <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up">
                    <div className="unit-4 service-glass">
                      <div className="unit-4-icon">
                        <img src="images/flaticon-svg/svg/001-wallet.svg" className="img-fluid w-25 mb-4" alt="" />
                      </div>
                      <div>
                        <h3>Business Consulting</h3>
                        <p>Professional guidance and support to help customers and businesses manage finance better.</p>
                        <p><a href="#">Learn More</a></p>
                      </div>
                    </div>
                  </div>
        
                  <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="100">
                    <div className="unit-4 service-glass">
                      <div className="unit-4-icon">
                        <img src="images/flaticon-svg/svg/006-credit-card.svg" className="img-fluid w-25 mb-4" alt="" />
                      </div>
                      <div>
                        <h3>Credit Card</h3>
                        <p>Flexible card-based banking with secure usage, digital convenience, and fast transactions.</p>
                        <p><a href="#">Learn More</a></p>
                      </div>
                    </div>
                  </div>
        
                  <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="200">
                    <div className="unit-4 service-glass">
                      <div className="unit-4-icon">
                        <img src="images/flaticon-svg/svg/002-rich.svg" className="img-fluid w-25 mb-4" alt="" />
                      </div>
                      <div>
                        <h3>Income Monitoring</h3>
                        <p>Track your financial activity and manage money flow more effectively with digital tools.</p>
                        <p><a href="#">Learn More</a></p>
                      </div>
                    </div>
                  </div>
        
                  <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up">
                    <div className="unit-4 service-glass">
                      <div className="unit-4-icon">
                        <img src="images/flaticon-svg/svg/003-notes.svg" className="img-fluid w-25 mb-4" alt="" />
                      </div>
                      <div>
                        <h3>Insurance Consulting</h3>
                        <p>Helpful support and advice for choosing suitable financial protection plans and services.</p>
                        <p><a href="#">Learn More</a></p>
                      </div>
                    </div>
                  </div>
        
                  <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="100">
                    <div className="unit-4 service-glass">
                      <div className="unit-4-icon">
                        <img src="images/flaticon-svg/svg/004-cart.svg" className="img-fluid w-25 mb-4" alt="" />
                      </div>
                      <div>
                        <h3>Financial Investment</h3>
                        <p>Grow your money wisely with smart financial planning and digital banking convenience.</p>
                        <p><a href="#">Learn More</a></p>
                      </div>
                    </div>
                  </div>
        
                  <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="200">
                    <div className="unit-4 service-glass">
                      <div className="unit-4-icon">
                        <img src="images/flaticon-svg/svg/005-megaphone.svg" className="img-fluid w-25 mb-4" alt="" />
                      </div>
                      <div>
                        <h3>Financial Management</h3>
                        <p>Manage transactions, balances, payments, and financial records through one clean platform.</p>
                        <p><a href="#">Learn More</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        
            <div className="faq_area section_padding_130" id="faq">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-sm-8 col-lg-6">
                    <div className="section_heading text-center">
                      <h1 className="faq"><span>Frequently</span> Asked Questions</h1>
                      <p className="faq">Find quick answers about account opening, transfers, online banking, and account access.</p>
                      <div className="line"></div>
                    </div>
                  </div>
                </div>
        
                <div className="row justify-content-center">
                  <div className="col-12 col-sm-10 col-lg-8">
                    <div className="accordion faq-accordian" id="faqAccordion">
        
                      <div className="card border-0">
                        <div className="card-header" id="headingOne">
                          <h6 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            How do I open an account with your bank?
                          </h6>
                        </div>
                        <div className="collapse" id="collapseOne" aria-labelledby="headingOne" data-parent="#faqAccordion">
                          <div className="card-body">
                            <p>You can open an account by filling out the account creation form online and waiting for admin approval.</p>
                          </div>
                        </div>
                      </div>
        
                      <div className="card border-0">
                        <div className="card-header" id="headingTwo">
                          <h6 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            Can I transfer money between accounts?
                          </h6>
                        </div>
                        <div className="collapse" id="collapseTwo" aria-labelledby="headingTwo" data-parent="#faqAccordion">
                          <div className="card-body">
                            <p>Yes, after login you can transfer money, add beneficiaries, and check mini statements easily.</p>
                          </div>
                        </div>
                      </div>
        
                      <div className="card border-0">
                        <div className="card-header" id="headingThree">
                          <h6 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                            How can I access my account online?
                          </h6>
                        </div>
                        <div className="collapse" id="collapseThree" aria-labelledby="headingThree" data-parent="#faqAccordion">
                          <div className="card-body">
                            <p>You can access your account online by registering after approval and logging in using your email and password.</p>
                          </div>
                        </div>
                      </div>
        
                      <div className="card border-0">
                        <div className="card-header" id="headingFour">
                          <h6 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                            Can I check my balance online?
                          </h6>
                        </div>
                        <div className="collapse" id="collapseFour" aria-labelledby="headingFour" data-parent="#faqAccordion">
                          <div className="card-body">
                            <p>Yes, your balance can be checked from the customer dashboard through the check account section.</p>
                          </div>
                        </div>
                      </div>
        
                      <div className="card border-0">
                        <div className="card-header" id="headingFive">
                          <h6 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                            Is DIGITALBANK secure?
                          </h6>
                        </div>
                        <div className="collapse" id="collapseFive" aria-labelledby="headingFive" data-parent="#faqAccordion">
                          <div className="card-body">
                            <p>Yes, DIGITALBANK is designed with secure login, controlled approval, and protected banking operations.</p>
                          </div>
                        </div>
                      </div>
        
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
            <section className="site-section bg-light" id="contact-section" data-aos="fade">
              <div className="container">
                <div className="row mb-5">
                  <div className="col-12 text-center">
                    <h2 className="section-title mb-3">Contact Us</h2>
                  </div>
                </div>
        
                <div className="row mb-5">
                  <div className="col-md-4 text-center">
                    <p className="mb-4">
                      <span className="icon-room d-block h2 text-primary"></span>
                      <span>MYBANK, ODISHA, INDIA.</span>
                    </p>
                  </div>
                  <div className="col-md-4 text-center">
                    <p className="mb-4">
                      <span className="icon-phone d-block h2 text-primary"></span>
                      <a href="#">7752033508</a>
                    </p>
                  </div>
                  <div className="col-md-4 text-center">
                    <p className="mb-0">
                      <span className="icon-mail_outline d-block h2 text-primary"></span>
                      <a href="#">debubehera168@gmail.com</a>
                    </p>
                  </div>
                </div>
        
                
        
                <div className="row">
                  <div className="col-md-6 mb-5">
                    <form action="/contact" className="p-5 bg-white" method="post" onSubmit={(e: any) => { if (!(chk())) e.preventDefault(); }}>
                      <h2 className="h4 text-black mb-5">Contact Form</h2>
        
                      <div className="row form-group">
                        <div className="col-md-12">
                          <label className="text-black" htmlFor="name">Full Name</label>
                          <input onChange={handleInputChange} type="text" id="name" name="name" className="form-control" placeholder="Enter your full name" />
                          <span id="nsms"></span>
                        </div>
                      </div>
        
                      <div className="row form-group">
                        <div className="col-md-12">
                          <label className="text-black" htmlFor="email">Email</label>
                          <input onChange={handleInputChange} type="email" id="email" name="email" className="form-control" placeholder="Enter your email" />
                          <span id="esms"></span>
                        </div>
                      </div>
        
                      <div className="row form-group">
                        <div className="col-md-12">
                          <label className="text-black" htmlFor="subject">Subject</label>
                          <input onChange={handleInputChange} type="text" id="subject" name="subject" className="form-control" placeholder="Enter subject" />
                          <span id="ssms"></span>
                        </div>
                      </div>
        
                      <div className="row form-group">
                        <div className="col-md-12">
                          <label className="text-black" htmlFor="message">Message</label>
                          <textarea onChange={handleInputChange} name="message" id="message" cols="30" rows="4" className="form-control" placeholder="Write your message here..."></textarea>
                          <span id="msms"></span>
                        </div>
                      </div>
        
                      <div className="row form-group">
                        <div className="col-md-12">
                          <input onChange={handleInputChange} type="submit" value="Send Message" className="btn btn-primary btn-md text-white" />
                        </div>
                      </div>
        
                      {sms}
                    </form>
                  </div>
        
                  <div className="col-md-6 mb-5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.6250100469983!2d83.88225447472662!3d21.483225472015423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a213c368309af57%3A0xdcd4d19c95624841!2sSambalpur%20University%20Institute%20of%20Information%20Technology%20(SUIIT)%2C%20Burla!5e0!3m2!1sen!2sin!4v1715923889743!5m2!1sen!2sin" width="600" height="550" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </div>
              </div>
            </section>
        
            <footer className="site-footer">
              <div className="container">
                <div className="row">
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-5">
                        <h2 className="footer-heading mb-4">About Us</h2>
                        <h4>Registered Office</h4>
                        <address className="address">
                          MYBANK, ODISHA, INDIA.
                        </address>
                        <h4>Head Office</h4>
                        <address className="address">
                          MYBANK, ODISHA, INDIA.
                        </address>
                      </div>
        
                      <div className="col-md-3 ml-auto">
                        <h2 className="footer-heading mb-4">Quick Links</h2>
                        <ul className="list-unstyled">
                          <li><a href="#" className="smoothscroll">Terms</a></li>
                          <li><a href="#" className="smoothscroll">Policy</a></li>
                          <li><a href="#about-section" className="smoothscroll">About Us</a></li>
                          <li><a href="#services-section" className="smoothscroll">Services</a></li>
                          <li><a href="#faq" className="smoothscroll">FAQs</a></li>
                          <li><a href="#contact-section" className="smoothscroll">Contact Us</a></li>
                        </ul>
                      </div>
        
                      <div className="col-md-3 footer-social">
                        <h2 className="footer-heading mb-4">Follow Us</h2>
                        <a href="#" className="pl-0 pr-3"><span className="icon-facebook"></span></a>
                        <a href="#" className="pl-3 pr-3"><span className="icon-twitter"></span></a>
                        <a href="#" className="pl-3 pr-3"><span className="icon-instagram"></span></a>
                        <a href="#" className="pl-3 pr-3"><span className="icon-linkedin"></span></a>
                      </div>
                    </div>
                  </div>
        
                  <div className="col-md-3">
                    <h2 className="footer-heading mb-4">Download the App</h2>
                    <a href="#" className="app-logo">
                      <div className="image1">
                        <img src="images/a12.png" alt="play store" />
                      </div>
                      <br />
                      <div className="image2">
                        <img src="images/aa1.png" alt="app store" />
                      </div>
                    </a><br />
                    <p style={{ color: 'white' }}>Main Jahan Meri Bank Wahan</p>
                    <p style={{ color: 'white' }}>Download The App Now</p>
                    <p style={{ color: 'white', fontSize: '10px' }}>MADE BY - Seeree</p>
                  </div>
                </div>
              </div>
        
              <p className="copyright" style={{ textAlign: 'center' }}>
                &copy; 2026 <a href="#" style={{ textDecoration: 'none' }}>MYBANK</a> Ltd. All Rights Reserved
              </p>
            </footer>
          </div>
        </>
    );
};

export default JspIndexComponent;