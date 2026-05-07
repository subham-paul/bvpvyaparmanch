import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import hero from './assets/images/hero.jpeg';
import cultural_program from './assets/images/cultural_program.png';
import img2 from './assets/images/img2.jpg';
import img3 from './assets/images/img3.jpg';
import img4 from './assets/images/img4.jpg';

function App() {
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    // Scroll Animation Observer
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const testimonials = [
    { name: "S.K. Sharma", role: "Retired IPS Officer", text: "BVP has provided an incredible platform for post-retirement service. Their solar initiatives are truly revolutionary for sustainable growth.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" },
    { name: "Ramesh Iyer", role: "Retired IAS Officer", text: "The values of Sampark and Sahyog are deeply ingrained in every activity. It's a privilege to be part of such a dedicated community.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" },
    { name: "Anita Desai", role: "Business Entrepreneur", text: "Networking with top officials and business leaders has opened new doors for collaboration while allowing me to give back to society.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" },
    { name: "Dr. Vikram Seth", role: "Government Official", text: "BVP's focus on cultural values combined with modern technology is exactly what our nation needs for a balanced transformation.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" },
    { name: "Sunil Gupta", role: "Business Tycoon", text: "The trust and integrity within this community are unmatched. It's the most professional socio-cultural organization I've encountered.", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200" }
  ];

  const benefits = [
    { title: "Value-based Networking", desc: "Build relationships based on trust and ethics rather than just profit motives.", img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=600" },
    { title: "Strong Community Bonding", desc: "Experience the warmth of a family-like environment with fellow professionals.", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600" },
    { title: "Social Impact Opportunities", desc: "Directly contribute to grassroots level social service and national development.", img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600" },
    { title: "Family Participation", desc: "Engage your entire family in cultural events and social responsibility programs.", img: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=600" },
    { title: "Ethics & Integrity", desc: "Promoting lifelong values and professional integrity in every endeavor.", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600" }
  ];

  return (
    <div className="App">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="hero-section-full p-0 position-relative">
        <div id="heroBgCarousel" className="carousel slide carousel-fade h-100 position-absolute w-100" data-bs-ride="carousel" data-bs-interval="4000" style={{zIndex: 0}}>
          <div className="carousel-inner h-100">
            <div className="carousel-item active h-100">
              <div className="hero-slide-bg" style={{backgroundImage: `url(${img2})`}}></div>
            </div>
            <div className="carousel-item h-100">
              <div className="hero-slide-bg" style={{backgroundImage: `url(${hero})`}}></div>
            </div>
            <div className="carousel-item h-100">
              <div className="hero-slide-bg" style={{backgroundImage: `url(${cultural_program})`}}></div>
            </div>
          </div>
        </div>

        <div className="hero-overlay-dark"></div>
        
        <div className="container-fluid h-100 position-relative d-flex align-items-center justify-content-center text-center" style={{zIndex: 2}}>
          <div className="hero-static-content">
            <span className="badge bg-primary mb-3 px-3 py-2 rounded-pill fw-bold tracking-widest animate-up delay-1">ESTABLISHED 1963</span>
            <h1 className="display-1 fw-black text-white mb-3 animate-up delay-2" style={{ letterSpacing: '-2px' }}>
              <span className="text-white">BVP</span>
              <span className="fw-light text-white opacity-75 ms-2">Vyapar</span>
              <span className="text-primary italic ms-1">Manch</span>
            </h1>
            <p className="lead text-white-50 mb-5 fs-4 mx-auto animate-up delay-3" style={{maxWidth: '850px', letterSpacing: '0.5px', lineHeight: '1.6'}}>
              A value-driven socio-cultural organization dedicated to strengthening communities through <span className="text-white fw-bold">Service, Culture, and Meaningful Connections</span>. Join a mission-driven community of professionals and visionaries.
            </p>
            <div className="hero-action-group animate-up delay-4">
              <a href="#join" className="btn btn-primary btn-lg px-5 shadow-lg fw-bold">JOIN THE MISSION</a>
              <a href="#about" className="btn btn-outline-light btn-lg px-5 fw-bold">EXPLORE VALUES</a>
            </div>
          </div>
        </div>

        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4 animate-bounce" style={{zIndex: 2}}>
          <a href="#about" className="text-white opacity-50"><i className="bi bi-chevron-double-down fs-2"></i></a>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-5 bg-white overflow-hidden">
        <div className="container-fluid px-lg-5 py-5">
          <div className="row g-5">
            <div className="col-lg-6 animate-left">
              <h2 className="section-title">About Us</h2>
              <p className="lead fw-bold text-dark mb-4">We are not just a networking group — we are a mission-driven community.</p>
              <p className="text-muted mb-4">
                Bharat Vikas Parishad (BVP) has long been a pillar of social upliftment and national development across 
                India. The BVP Business Network extends this legacy into the commercial arena — a structured, 
                value-driven platform where entrepreneurs, professionals, and business owners grow together.
              </p>
              <p className="text-muted mb-4 lh-base">
                Unlike conventional networking groups, we combine the discipline of structured referral systems with 
                the warmth of community belonging — rooted in BVP's trusted national presence.
              </p>
              
              <button 
                className="btn btn-primary btn-lg mt-4 start-journey-btn" 
                style={{background: 'linear-gradient(to right, #007bff, #6610f2)', border: 'none', color: 'white'}}
                onClick={() => document.getElementById('join').scrollIntoView({behavior: 'smooth'})}
              >
                Start Your Journey
              </button>
              
            </div>
            <div className="col-lg-6">
              <div className="ps-lg-5">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="glass-card bg-white shadow-sm hover-shadow-lg transition-all h-100">
                      <h5 className="fw-bold text-primary">National Credibility</h5>
                      <p className="text-muted mb-0">Backed by BVP's decades-long legacy of integrity and national presence across thousands of branches in India.</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="glass-card bg-white shadow-sm hover-shadow-lg transition-all h-100">
                      <h5 className="fw-bold text-primary">Elite Membership</h5>
                      <p className="text-muted mb-0">Curated community of serious business owners committed to mutual growth, ethical dealings, and collaborative success.</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="glass-card bg-white shadow-sm hover-shadow-lg transition-all h-100">
                      <h5 className="fw-bold text-primary">Structured Yet Flexible</h5>
                      <p className="text-muted mb-0">One mandatory monthly meeting designed for maximum impact — focused, productive sessions that respect your time.</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="glass-card bg-white shadow-sm hover-shadow-lg transition-all h-100">
                      <h5 className="fw-bold text-primary">Exceptional Value</h5>
                      <p className="text-muted mb-0">At just ₹5,000 annually, access a complete networking ecosystem plus complimentary BVP branch membership.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax - Services Intro */}
      <section className="parallax-section" style={{backgroundImage: `url(${cultural_program})`}}>
        <div className="parallax-overlay"></div>
        <div className="container-fluid px-lg-5 parallax-content text-center py-5">
          <h2 className="section-title text-white border-white">What We Do</h2>
          <div className="row g-4 mt-5 justify-content-center">
            <div className="col-lg-3 col-md-6 animate-up delay-1">
              <div className="text-center mb-4">
                <div className="bg-white bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                  <span className="text-white fw-bold fs-4">01</span>
                </div>
                <h5 className="text-white fw-bold mb-3">Structured Referral Exchange</h5>
                <p className="text-white-50 small">Members actively introduce, recommend, and refer each other — creating a trusted pipeline of qualified business leads every month.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 animate-up delay-2">
              <div className="text-center mb-4">
                <div className="bg-white bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                  <span className="text-white fw-bold fs-4">02</span>
                </div>
                <h5 className="text-white fw-bold mb-3">Monthly Power Meetings</h5>
                <p className="text-white-50 small">One high-impact monthly gathering to present your business, share opportunities, and track collective progress. Quality over frequency.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 animate-up delay-3">
              <div className="text-center mb-4">
                <div className="bg-white bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                  <span className="text-white fw-bold fs-4">03</span>
                </div>
                <h5 className="text-white fw-bold mb-3">Category Exclusivity</h5>
                <p className="text-white-50 small">Only one business per category per chapter — your seat is protected, ensuring all referrals in your field come directly to you.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 animate-up delay-4">
              <div className="text-center mb-4">
                <div className="bg-white bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                  <span className="text-white fw-bold fs-4">04</span>
                </div>
                <h5 className="text-white fw-bold mb-3">BVP Network Access</h5>
                <p className="text-white-50 small">Tap into the vast BVP ecosystem across India — events, national chapters, and a community bound by shared values.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits-section" className="py-5 bg-light overflow-hidden">
        <div className="container-fluid px-lg-5 py-5">
          <div className="text-center mb-5 animate-up">
            <h2 className="section-title">Benefits</h2>
            <p className="text-muted mx-auto small" style={{maxWidth: '700px'}}>Why Elite Members Choose Us. Every element of BVP Business Network is designed to deliver real, measurable value — not just social connections.</p>
          </div>
          
          <div className="row g-4 overflow-hidden">
            <div className="col-xl-4 col-md-6 scroll-animate animate-left">
              <div className="glass-card h-100 bg-white shadow-sm border-0 hover-shadow-lg transition-all p-4">
                <i className="bi bi-people service-icon mb-3 d-block text-primary" style={{fontSize: '2rem'}}></i>
                <h6 className="fw-bold mb-3 text-dark" style={{fontSize: '1rem'}}>Trusted Referrals</h6>
                <p className="text-muted mb-0" style={{fontSize: '0.8rem', lineHeight: '1.5'}}>Receive warm, pre-qualified business leads from fellow members who vouch for your expertise — far more effective than cold outreach.</p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 scroll-animate animate-right">
              <div className="glass-card h-100 bg-white shadow-sm border-0 hover-shadow-lg transition-all p-4">
                <i className="bi bi-shield-check service-icon mb-3 d-block text-primary" style={{fontSize: '2rem'}}></i>
                <h6 className="fw-bold mb-3 text-dark" style={{fontSize: '1rem'}}>Category Protection</h6>
                <p className="text-muted mb-0" style={{fontSize: '0.8rem', lineHeight: '1.5'}}>Your business category is exclusively yours within the chapter. Every referral in your field flows directly to you — zero internal competition.</p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 scroll-animate animate-left">
              <div className="glass-card h-100 bg-white shadow-sm border-0 hover-shadow-lg transition-all p-4">
                <i className="bi bi-building service-icon mb-3 d-block text-primary" style={{fontSize: '2rem'}}></i>
                <h6 className="fw-bold mb-3 text-dark" style={{fontSize: '1rem'}}>BVP Branch Membership</h6>
                <p className="text-muted mb-0" style={{fontSize: '0.8rem', lineHeight: '1.5'}}>Complimentary membership at any BVP branch — access their events, social network, and the credibility of India's trusted national institution.</p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 scroll-animate animate-right">
              <div className="glass-card h-100 bg-white shadow-sm border-0 hover-shadow-lg transition-all p-4">
                <i className="bi bi-graph-up service-icon mb-3 d-block text-primary" style={{fontSize: '2rem'}}></i>
                <h6 className="fw-bold mb-3 text-dark" style={{fontSize: '1rem'}}>High-Impact Meetings</h6>
                <p className="text-muted mb-0" style={{fontSize: '0.8rem', lineHeight: '1.5'}}>One focused monthly meeting structured to deliver maximum business value without consuming your schedule. Every minute is purposeful.</p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 scroll-animate animate-left">
              <div className="glass-card h-100 bg-white shadow-sm border-0 hover-shadow-lg transition-all p-4">
                <i className="bi bi-bar-chart service-icon mb-3 d-block text-primary" style={{fontSize: '2rem'}}></i>
                <h6 className="fw-bold mb-3 text-dark" style={{fontSize: '1rem'}}>Measurable Growth</h6>
                <p className="text-muted mb-0" style={{fontSize: '0.8rem', lineHeight: '1.5'}}>Track the business you give and receive. Our transparent system ensures accountability and shows clear ROI on your membership investment.</p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 scroll-animate animate-right">
              <div className="glass-card h-100 bg-white shadow-sm border-0 hover-shadow-lg transition-all p-4">
                <i className="bi bi-book service-icon mb-3 d-block text-primary" style={{fontSize: '2rem'}}></i>
                <h6 className="fw-bold mb-3 text-dark" style={{fontSize: '1rem'}}>Skill Development</h6>
                <p className="text-muted mb-0" style={{fontSize: '0.8rem', lineHeight: '1.5'}}>Regular exposure to business presentations and insights from diverse members accelerates your personal and professional growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose BVP - Infinite Carousel */}
      <section id="benefits" className="py-5 bg-white overflow-hidden">
        <div className="container-fluid py-5">
          <div className="text-center mb-5">
            <h2 className="section-title">Why Choose BVP</h2>
            <p className="text-muted mx-auto" style={{maxWidth: '600px'}}>Experience the difference of value-driven leadership and community excellence.</p>
          </div>
          
          <div className="infinite-track">
            {[...benefits, ...benefits].map((b, i) => (
              <div className="carousel-card glass-card bg-white border-0 shadow-sm hover-shadow-lg p-0" key={i}>
                <img src={b.img} alt={b.title} className="benefit-img" />
                <div className="p-4">
                  <h5 className="fw-bold text-dark mb-2">{b.title}</h5>
                  <p className="small text-muted mb-0 lh-base">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-5 bg-light overflow-hidden">
        <div className="container-fluid py-5">
          <h2 className="section-title text-center mb-5">Voices of Our Community</h2>
          <div className="infinite-track" style={{animationDuration: '40s'}}>
            {[...testimonials, ...testimonials].map((t, i) => (
              <div className="carousel-card glass-card bg-white border-0 shadow-sm p-4" style={{width: '350px'}} key={i}>
                <div className="d-flex align-items-center mb-3">
                  <img src={t.img} alt={t.name} className="rounded-circle me-3 border border-2 border-primary-subtle" style={{width: '60px', height: '60px', objectFit: 'cover'}} />
                  <div>
                    <h6 className="fw-bold mb-0 text-dark">{t.name}</h6>
                    <small className="text-primary fw-semibold">{t.role}</small>
                  </div>
                </div>
                <p className="text-muted small mb-0 lh-base italic">"{t.text}"</p>
                <div className="mt-3 text-warning">
                  {[...Array(5)].map((_, star) => <i className="bi bi-star-fill me-1 small" key={star}></i>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership & Join */}
      <section id="join" className="py-5 bg-white" style={{borderTop: '1px solid #eee'}}>
        <div className="container-fluid px-lg-5 py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5" id="members">
              <h2 className="section-title" style={{fontSize: '2rem'}}>Elite Membership</h2>
              <p className="text-muted mb-5 small fw-semibold text-uppercase tracking-wider">Invest in a community that invests in you and the nation.</p>
              
              <div className="glass-card text-center bg-white shadow-lg border-0 hover-shadow-lg transition-all p-4 p-lg-5 rounded-4" style={{borderTop: '5px solid var(--primary-color) !important'}}>
                <span className="badge bg-primary-subtle text-primary mb-3 px-3 py-2 rounded-pill fw-bold" style={{fontSize: '0.65rem'}}>PREMIUM ACCESS</span>
                <h3 className="gradient-text-impact mb-1" style={{fontSize: '2.5rem'}}>₹5,000</h3>
                <p className="text-muted fw-bold mb-4 small tracking-widest">ANNUAL SUBSCRIPTION</p>
                
                <hr className="my-4 opacity-25" />
                
                <ul className="list-unstyled text-start mb-5 lh-base">
                  <li className="mb-3 d-flex align-items-start" style={{fontSize: '0.85rem'}}>
                    <i className="bi bi-check-circle-fill text-primary me-3 mt-1"></i>
                    <span><strong>Monthly chapter meeting access</strong></span>
                  </li>
                  <li className="mb-3 d-flex align-items-start" style={{fontSize: '0.85rem'}}>
                    <i className="bi bi-check-circle-fill text-primary me-3 mt-1"></i>
                    <span><strong>Exclusive business category protection</strong></span>
                  </li>
                  <li className="mb-3 d-flex align-items-start" style={{fontSize: '0.85rem'}}>
                    <i className="bi bi-check-circle-fill text-primary me-3 mt-1"></i>
                    <span><strong>Free membership of any BVP Branch</strong></span>
                  </li>
                  <li className="mb-3 d-flex align-items-start" style={{fontSize: '0.85rem'}}>
                    <i className="bi bi-check-circle-fill text-primary me-3 mt-1"></i>
                    <span><strong>Member directory & referral network</strong></span>
                  </li>
                  <li className="mb-3 d-flex align-items-start" style={{fontSize: '0.85rem'}}>
                    <i className="bi bi-check-circle-fill text-primary me-3 mt-1"></i>
                    <span><strong>Business presentation platform</strong></span>
                  </li>
                  <li className="mb-3 d-flex align-items-start" style={{fontSize: '0.85rem'}}>
                    <i className="bi bi-check-circle-fill text-primary me-3 mt-1"></i>
                    <span><strong>Referral tracking & accountability</strong></span>
                  </li>
                  <li className="mb-3 d-flex align-items-start" style={{fontSize: '0.85rem'}}>
                    <i className="bi bi-check-circle-fill text-primary me-3 mt-1"></i>
                    <span><strong>Skill development sessions</strong></span>
                  </li>
                  <li className="mb-3 d-flex align-items-start" style={{fontSize: '0.85rem'}}>
                    <i className="bi bi-check-circle-fill text-primary me-3 mt-1"></i>
                    <span><strong>National BVP community access</strong></span>
                  </li>
                </ul>
                
                <button className="btn btn-primary btn-lg w-100 py-3 fw-bold shadow-lg" style={{fontSize: '0.9rem'}}>BECOME AN ELITE MEMBER</button>
              </div>
            </div>
            
            <div className="col-lg-7">
              <div className="ps-lg-5">
                <div className="glass-card bg-light border-0 p-5 rounded-4 animate-up">
                  <h4 className="fw-bold mb-4" style={{fontSize: '1.4rem'}}>How to Join</h4>
                  <p className="text-muted mb-4 small">
                    Your Path to Elite Membership. Joining BVP Business Network is transparent and straightforward — designed to ensure every member is serious, committed, and aligned with our values of mutual growth.
                  </p>
                  
                  <div className="row g-4">
                    <div className="col-12">
                      <div className="d-flex align-items-start mb-4">
                        <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{width: '40px', height: '40px', fontSize: '1.2rem', fontWeight: 'bold'}}>01</div>
                        <div>
                          <h6 className="fw-bold mb-2">Express Your Interest</h6>
                          <p className="small text-muted mb-0">Fill out the enquiry form or reach out to us. Tell us about your business and what you're looking to achieve through the network.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-flex align-items-start mb-4">
                        <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{width: '40px', height: '40px', fontSize: '1.2rem', fontWeight: 'bold'}}>02</div>
                        <div>
                          <h6 className="fw-bold mb-2">Attend as a Guest</h6>
                          <p className="small text-muted mb-0">Visit one of our monthly chapter meetings as a guest — at no cost — to experience the culture, meet members, and see the value firsthand.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-flex align-items-start mb-4">
                        <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{width: '40px', height: '40px', fontSize: '1.2rem', fontWeight: 'bold'}}>03</div>
                        <div>
                          <h6 className="fw-bold mb-2">Category Verification</h6>
                          <p className="small text-muted mb-0">We verify your business category is available in the chapter. If open, your seat is exclusively reserved — no competitor can join in your field.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-flex align-items-start mb-4">
                        <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{width: '40px', height: '40px', fontSize: '1.2rem', fontWeight: 'bold'}}>04</div>
                        <div>
                          <h6 className="fw-bold mb-2">Complete Membership — ₹5,000/year</h6>
                          <p className="small text-muted mb-0">Submit your annual fee. This includes BVP branch membership of your choice, chapter access, and all network benefits.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-flex align-items-start mb-4">
                        <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{width: '40px', height: '40px', fontSize: '1.2rem', fontWeight: 'bold'}}>05</div>
                        <div>
                          <h6 className="fw-bold mb-2">Welcome to the Elite Network</h6>
                          <p className="small text-muted mb-0">Attend your first official meeting, introduce your business, and begin giving and receiving referrals within a trusted growth community.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & Contact */}
      <section id="faq" className="py-5 bg-light">
        <div className="container-fluid px-lg-5 py-5">
          <h2 className="section-title text-center">Frequently Asked Questions</h2>
          <div className="row justify-content-center mt-5">
            <div className="col-lg-9">
              <div className="accordion accordion-flush" id="faqAccordion">
                {[
                  { q: "What is Bharat Vikas Parishad (BVP)?", a: "BVP is a socio-cultural organization focused on community service, cultural development, and value-based networking." },
                  { q: "Is BVP a business networking group like BNI?", a: "No. BVP focuses on service and community building rather than structured business referrals." },
                  { q: "Who can join BVP?", a: "Entrepreneurs, professionals, families, and individuals who believe in social service and community growth." },
                  { q: "What is the membership fee?", a: "Membership typically starts around ₹5,000 annually, though national membership options are also available." },
                  { q: "Are meetings compulsory?", a: "Yes, monthly meetings are important for engagement and participation." },
                  { q: "How does BVP help in personal growth?", a: "By building strong relationships, encouraging values, and providing opportunities to contribute and lead." }
                ].map((faq, i) => (
                  <div className="accordion-item border-bottom mb-2 bg-transparent" key={i}>
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed fw-bold text-dark py-3 px-0 bg-transparent shadow-none" type="button" data-bs-toggle="collapse" data-bs-target={`#faq${i}`} style={{fontSize: '0.95rem'}}>
                        {faq.q}
                      </button>
                    </h2>
                    <div id={`faq${i}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body px-0 text-muted small">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-5 bg-white">
        <div className="container-fluid px-lg-5 py-5">
          <div className="row g-5">
            <div className="col-lg-5">
              <h2 className="section-title" style={{fontSize: '2rem'}}>Get in <span className="text-primary">Touch</span></h2>
              <p className="text-muted mb-5 small">Questions about membership, chapter availability, or want to visit a meeting? We're here to help.</p>
              
              <div className="mb-4">
                <div className="d-flex align-items-start">
                  <div className="bg-primary-light rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{width: '45px', height: '45px', background: '#e7f0ff'}}>
                    <i className="bi bi-geo-alt text-primary"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-2 small text-uppercase tracking-widest" style={{fontSize: '0.7rem', color: '#0d6efd'}}>Location</h6>
                    <p className="text-dark mb-1" style={{fontSize: '0.95rem'}}>Newtown, India</p>
                    <p className="text-muted mb-0 small">Multiple chapters available</p>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="d-flex align-items-start">
                  <div className="bg-primary-light rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{width: '45px', height: '45px', background: '#e7f0ff'}}>
                    <i className="bi bi-telephone text-primary"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-2 small text-uppercase tracking-widest" style={{fontSize: '0.7rem', color: '#0d6efd'}}>Phone</h6>
                    <p className="text-dark mb-0" style={{fontSize: '0.95rem'}}>+91 XXXXX XXXXX</p>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="d-flex align-items-start">
                  <div className="bg-primary-light rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{width: '45px', height: '45px', background: '#e7f0ff'}}>
                    <i className="bi bi-envelope text-primary"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-2 small text-uppercase tracking-widest" style={{fontSize: '0.7rem', color: '#0d6efd'}}>Email</h6>
                    <p className="text-dark mb-0" style={{fontSize: '0.95rem'}}>network@bvp.org.in</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="d-flex align-items-start">
                  <div className="bg-primary-light rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{width: '45px', height: '45px', background: '#e7f0ff'}}>
                    <i className="bi bi-calendar-event text-primary"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-2 small text-uppercase tracking-widest" style={{fontSize: '0.7rem', color: '#0d6efd'}}>Meetings</h6>
                    <p className="text-dark mb-1" style={{fontSize: '0.95rem'}}>Monthly — 1st Sunday</p>
                    <p className="text-muted mb-0 small">Time confirmed on joining</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="bg-white border-0 p-4 p-lg-5 rounded-4">
                <h4 className="fw-bold mb-4" style={{fontSize: '1.5rem'}}>Send an <span className="text-primary">Enquiry</span></h4>
                
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-bold small text-uppercase tracking-widest" style={{fontSize: '0.65rem', color: '#0d6efd'}}>Full Name</label>
                      <input type="text" className="form-control border-0 py-2 px-3" style={{background: '#f8f9fa', fontSize: '0.9rem'}} placeholder="Your full name" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-bold small text-uppercase tracking-widest" style={{fontSize: '0.65rem', color: '#0d6efd'}}>Phone Number</label>
                      <input type="tel" className="form-control border-0 py-2 px-3" style={{background: '#f8f9fa', fontSize: '0.9rem'}} placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-bold small text-uppercase tracking-widest" style={{fontSize: '0.65rem', color: '#0d6efd'}}>Email Address</label>
                      <input type="email" className="form-control border-0 py-2 px-3" style={{background: '#f8f9fa', fontSize: '0.9rem'}} placeholder="your@email.com" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-bold small text-uppercase tracking-widest" style={{fontSize: '0.65rem', color: '#0d6efd'}}>Business / Profession</label>
                      <input type="text" className="form-control border-0 py-2 px-3" style={{background: '#f8f9fa', fontSize: '0.9rem'}} placeholder="e.g. Real Estate, CA, IT" />
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-bold small text-uppercase tracking-widest" style={{fontSize: '0.65rem', color: '#0d6efd'}}>City / Location</label>
                      <input type="text" className="form-control border-0 py-2 px-3" style={{background: '#f8f9fa', fontSize: '0.9rem'}} placeholder="Newtown, India" />
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-bold small text-uppercase tracking-widest" style={{fontSize: '0.65rem', color: '#0d6efd'}}>Your Message</label>
                      <textarea className="form-control border-0 py-2 px-3" style={{background: '#f8f9fa', fontSize: '0.9rem', minHeight: '120px'}} placeholder="Tell us about yourself and what you're looking to achieve..." rows="4"></textarea>
                    </div>
                    <div className="col-12 mt-4">
                      <button type="submit" className="btn btn-primary btn-lg w-100 py-3 fw-bold shadow-lg" style={{fontSize: '0.85rem', textTransform: 'uppercase'}}>
                        Submit Enquiry <i className="bi bi-arrow-right ms-2"></i>
                      </button>
                    </div>
                    <div className="col-12">
                      <p className="text-muted small d-flex align-items-center" style={{fontSize: '0.8rem'}}>
                        <i className="bi bi-lock-fill me-2 text-primary"></i>
                        Your information is confidential
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Professional Footer */}
      <footer className="bg-dark text-white pt-5 pb-4 mt-5">
        <div className="container-fluid px-lg-5">
          <div className="row g-5">
            {/* Branding & Mission */}
            <div className="col-lg-4 col-md-12">
              <h4 className="fw-black text-white mb-3">BHARAT VIKAS PARISHAD</h4>
              <p className="text-secondary small pe-lg-5 lh-lg">
                Building a strong, value-based society where individuals grow together through service and collaboration. 
                A non-political, socio-cultural voluntary organization dedicated to national development since 1963.
              </p>
              <div className="mt-4">
                <h6 className="text-primary fw-bold mb-3 small tracking-widest text-uppercase">Follow Our Impact</h6>
                <div className="d-flex gap-3 fs-5">
                  <a href="#" className="text-secondary hover-text-primary transition-all"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="text-secondary hover-text-primary transition-all"><i className="bi bi-twitter-x"></i></a>
                  <a href="#" className="text-secondary hover-text-primary transition-all"><i className="bi bi-instagram"></i></a>
                  <a href="#" className="text-secondary hover-text-primary transition-all"><i className="bi bi-linkedin"></i></a>
                  <a href="#" className="text-secondary hover-text-primary transition-all"><i className="bi bi-youtube"></i></a>
                </div>
              </div>
            </div>

            {/* Quick Links & Services Split */}
            <div className="col-lg-4 col-md-6">
              <div className="row">
                <div className="col-6">
                  <h6 className="fw-bold mb-4 small text-uppercase tracking-wider">Navigation</h6>
                  <ul className="list-unstyled text-secondary small lh-lg">
                    <li><a href="#home" className="text-reset text-decoration-none hover-text-primary transition-all">Home</a></li>
                    <li><a href="#about" className="text-reset text-decoration-none hover-text-primary transition-all">About BVP</a></li>
                    <li><a href="#services" className="text-reset text-decoration-none hover-text-primary transition-all">What We Do</a></li>
                    <li><a href="#benefits" className="text-reset text-decoration-none hover-text-primary transition-all">Benefits</a></li>
                    <li><a href="#join" className="text-reset text-decoration-none hover-text-primary transition-all">Membership</a></li>
                    <li><a href="#faq" className="text-reset text-decoration-none hover-text-primary transition-all">FAQs</a></li>
                  </ul>
                </div>
                <div className="col-6">
                  <h6 className="fw-bold mb-4 small text-uppercase tracking-wider">Key Programs</h6>
                  <ul className="list-unstyled text-secondary small lh-lg">
                    <li><a href="#" className="text-reset text-decoration-none hover-text-primary transition-all">Health Camps</a></li>
                    <li><a href="#" className="text-reset text-decoration-none hover-text-primary transition-all">Social Service</a></li>
                    <li><a href="#" className="text-reset text-decoration-none hover-text-primary transition-all">Cultural Events</a></li>
                    <li><a href="#" className="text-reset text-decoration-none hover-text-primary transition-all">Networking</a></li>
                    <li><a href="#" className="text-reset text-decoration-none hover-text-primary transition-all">Business Support</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* National Office & Contact */}
            <div className="col-lg-4 col-md-6">
              <h6 className="fw-bold mb-4 small text-uppercase tracking-wider">National Office</h6>
              <div className="text-secondary small">
                <p className="mb-3 d-flex align-items-start">
                  <i className="bi bi-geo-alt-fill text-primary me-3 mt-1"></i>
                  <span>B-1, Vikas Bhawan, New Delhi - 110001, India</span>
                </p>
                <p className="mb-3 d-flex align-items-center">
                  <i className="bi bi-telephone-fill text-primary me-3"></i>
                  <span>+91 11 2345 6789 / 2345 6790</span>
                </p>
                <p className="mb-3 d-flex align-items-center">
                  <i className="bi bi-envelope-fill text-primary me-3"></i>
                  <span>contact@bvpindia.org</span>
                </p>
                <p className="mb-0 d-flex align-items-center">
                  <i className="bi bi-clock-fill text-primary me-3"></i>
                  <span>Mon - Sat: 10:00 AM - 6:00 PM</span>
                </p>
              </div>
              
              <div className="mt-4 pt-2">
                <button className="btn btn-outline-primary btn-sm px-4 fw-bold">Find a Branch</button>
              </div>
            </div>
          </div>

          <hr className="border-secondary opacity-25 my-4" />
          
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0 small text-secondary">
                &copy; 2024 Bharat Vikas Parishad (BVP). Growth through Service. 
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
              <ul className="list-inline mb-0 small text-secondary">
                <li className="list-inline-item me-3"><a href="#" className="text-reset text-decoration-none hover-text-primary">Privacy Policy</a></li>
                <li className="list-inline-item me-3"><a href="#" className="text-reset text-decoration-none hover-text-primary">Terms of Use</a></li>
                <li className="list-inline-item"><a href="#" className="text-reset text-decoration-none hover-text-primary">Donation Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
