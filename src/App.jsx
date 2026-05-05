import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import img1 from './assets/images/img1.jpg';
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

  const services = [
    { 
      title: "Community Service & Social Welfare", 
      intro: "We actively organize and support programs that uplift underprivileged communities.",
      points: ["Medical camps and health awareness drives", "Educational support for students", "Assistance for differently-abled individuals", "Disaster relief and rehabilitation efforts"], 
      icon: "bi-heart-pulse",
      direction: "animate-left"
    },
    { 
      title: "Education & Skill Development", 
      intro: "We promote education as a foundation for national growth.",
      points: ["Providing scholarships and learning resources", "Supporting schools and educational institutions", "Conducting personality development and skill-building programs"], 
      icon: "bi-mortarboard",
      direction: "animate-right"
    },
    { 
      title: "Cultural & Value-Based Programs", 
      intro: "We preserve and promote Indian culture and values.",
      points: ["Cultural events, competitions, and celebrations", "Youth engagement programs", "Moral and value-based education initiatives"], 
      icon: "bi-bank",
      direction: "animate-left"
    },
    { 
      title: "Networking & Collaboration", 
      intro: "We create strong community connections (Sampark & Sahyog).",
      points: ["Bringing together like-minded individuals", "Encouraging collaboration for social causes", "Building a network of dedicated volunteers"], 
      icon: "bi-people",
      direction: "animate-right"
    },
    { 
      title: "Volunteer Engagement & Leadership", 
      intro: "We empower individuals to contribute to society.",
      points: ["Providing opportunities for active participation", "Developing leadership qualities", "Encouraging a spirit of service and commitment"], 
      icon: "bi-star",
      direction: "animate-left"
    },
    { 
      title: "Nation-Building Initiatives", 
      intro: "All our efforts are directed toward national growth.",
      points: ["Strengthening social harmony", "Promoting unity and patriotism", "Contributing to holistic national development"], 
      icon: "bi-flag",
      direction: "animate-right"
    }
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
              <div className="hero-slide-bg" style={{backgroundImage: `url(${img4})`}}></div>
            </div>
            <div className="carousel-item h-100">
              <div className="hero-slide-bg" style={{backgroundImage: `url(${img3})`}}></div>
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
            <div className="d-flex justify-content-center gap-3 animate-up delay-4">
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
              <h2 className="section-title">Who We Are</h2>
              <p className="lead fw-bold text-dark mb-4">We are not just a networking group — we are a mission-driven community.</p>
              <p className="text-muted mb-4">
                Bharat Vikas Parishad is a non-political, socio-cultural voluntary organization. 
                Our community is a vibrant tapestry of retired IPS and IAS officers, top-ranking government officials, and distinguished business leaders 
                who bring together their collective expertise for national development.
              </p>
              <p className="text-muted mb-4 small lh-base">
                We believe in creating a legacy of service. By leveraging our deep-rooted values and modern methodologies, we 
                address complex social challenges. Whether it's through our expansive rooftop solar initiatives or our 
                nationwide EV charging network, we are at the forefront of India's sustainable transformation.
              </p>
              
              <div className="row g-4 mt-2">
                <div className="col-md-6">
                  <div className="glass-card h-100 border-primary-subtle shadow-sm hover-shadow-lg transition-all" style={{cursor: 'default'}}>
                    <h5 className="fw-bold text-primary">Our Mission</h5>
                    <p className="small text-muted mb-0">To empower individuals and communities by promoting social service, cultural values, and collective growth through ethical leadership and collaboration.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="glass-card h-100 border-secondary-subtle shadow-sm hover-shadow-lg transition-all" style={{cursor: 'default'}}>
                    <h5 className="fw-bold text-secondary">Our Vision</h5>
                    <p className="small text-muted mb-0">To build a strong, value-based society where individuals grow together through service, collaboration, and an unwavering commitment to national integrity.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ps-lg-5">
                <h4 className="fw-bold mb-4">Our 5 Core Sutras</h4>
                <div className="list-group list-group-flush sutras-container">
                  {[
                    { s: "Sampark (Connection)", d: "Building meaningful relationships across boundaries", info: "We believe in establishing deep connections that last lifetimes. Every handshake is a promise of mutual respect and social growth." },
                    { s: "Sahyog (Support)", d: "Helping each other grow in every dimension", info: "Collaboration is our strength. We provide a platform where resources and knowledge are shared freely to uplift every member." },
                    { s: "Sanskar (Values)", d: "Promoting ethics and Indian culture", info: "Rooted in tradition, we instill values that define character. We celebrate our rich heritage while embracing modern progress." },
                    { s: "Sewa (Service)", d: "Giving back to society with pure intent", info: "Service is not a task, but a way of life. Our projects reach the grassroots level to bring about tangible changes in society." },
                    { s: "Samarpan (Commitment)", d: "Dedication to a greater national cause", info: "Total dedication to the nation's progress. We work with a sense of purpose that transcends individual ambitions." }
                  ].map((item, i) => (
                    <div className={`list-group-item bg-transparent px-0 py-4 border-light animate-right sutra-delay-${i}`} key={i}>
                      <div className="d-flex align-items-center mb-2">
                        <div className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '35px', height: '35px', flexShrink: 0}}>
                          <span className="fw-bold">{i+1}</span>
                        </div>
                        <h5 className="fw-bold mb-0 text-primary">{item.s}</h5>
                      </div>
                      <p className="fw-bold small text-dark mb-2 ms-5">{item.d}</p>
                      <p className="small text-muted mb-0 ms-5 lh-base" style={{fontSize: '0.85rem'}}>{item.info}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax - Services Intro */}
      <section className="parallax-section" style={{backgroundImage: `url(${img2})`}}>
        <div className="parallax-overlay"></div>
        <div className="container-fluid px-lg-5 parallax-content text-center py-5">
          <h2 className="section-title text-white">What We Do</h2>
          <p className="lead text-white mx-auto small" style={{maxWidth: '850px'}}>
            At Bharat Vikas Parishad, we are committed to building a strong, value-driven society through service, culture, and community engagement. 
            Our initiatives are guided by our core principles and aim to create meaningful impact at every level.
          </p>
        </div>
      </section>

      {/* Services Grid Section with Scroll-Triggered Slide-In Effect */}
      <section id="services" className="py-5 bg-light overflow-hidden">
        <div className="container-fluid px-lg-5 py-5">
          <div className="text-center mb-5 animate-up">
            <h2 className="section-title">Our Initiatives & Impact</h2>
            <p className="text-muted mx-auto small" style={{maxWidth: '700px'}}>Empowering growth through comprehensive social, cultural, and professional support systems.</p>
          </div>
          
          <div className="row g-4 overflow-hidden">
            {services.map((service, index) => (
              <div className={`col-xl-4 col-md-6 scroll-animate ${service.direction}`} key={index}>
                <div className="glass-card h-100 bg-white shadow-sm border-0 hover-shadow-lg transition-all p-4">
                  <i className={`bi ${service.icon} service-icon mb-3 d-block`}></i>
                  <h6 className="fw-bold mb-3 text-dark" style={{fontSize: '1rem'}}>{service.title}</h6>
                  <p className="text-muted mb-3" style={{fontSize: '0.8rem', lineHeight: '1.5'}}>{service.intro}</p>
                  <ul className="service-list mb-0">
                    {service.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 p-5 glass-card border-0 shadow-lg text-center animate-up delay-3 bg-white mx-auto" style={{maxWidth: '900px'}}>
             <h5 className="fw-bold mb-4 text-primary">Our Approach</h5>
             <p className="text-muted small mb-0 lh-lg">
                Our work is guided by our five core principles: <br />
                <span className="fw-bold text-dark">Sampark (Contact), Sahyog (Cooperation), Sanskar (Values), Sewa (Service), and Samarpan (Dedication).</span>
             </p>
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
                    <span><strong>Pan-India Validity:</strong> Any member paying at least ₹2,000 is automatically eligible for all-India subscription validity.</span>
                  </li>
                  <li className="mb-3 d-flex align-items-start" style={{fontSize: '0.85rem'}}>
                    <i className="bi bi-check-circle-fill text-primary me-3 mt-1"></i>
                    <span><strong>Compulsory Meetings:</strong> One monthly meeting is mandatory (Offline/Online) after subscription to stay active.</span>
                  </li>
                  <li className="mb-3 d-flex align-items-start" style={{fontSize: '0.85rem'}}>
                    <i className="bi bi-check-circle-fill text-primary me-3 mt-1"></i>
                    <span><strong>Exclusive Networking:</strong> Direct access to retired IAS/IPS officers and top business tycoons.</span>
                  </li>
                </ul>
                
                <button className="btn btn-primary btn-lg w-100 py-3 fw-bold shadow-lg" style={{fontSize: '0.9rem'}}>BECOME AN ELITE MEMBER</button>
              </div>
            </div>
            
            <div className="col-lg-7">
              <div className="ps-lg-5">
                <div className="glass-card bg-light border-0 p-5 rounded-4 animate-up">
                  <h4 className="fw-bold mb-4" style={{fontSize: '1.4rem'}}>Joining BVP Community</h4>
                  <p className="text-muted mb-4 small">
                    Our elite circle is designed for entrepreneurs, top-ranking officials, and individuals who share our vision of a stronger India. 
                    Membership at BVP is not just about a fee; it's about a commitment to our 5 Core Sutras and national integrity.
                  </p>
                  
                  <div className="row g-4 mt-2">
                    <div className="col-md-6">
                      <div className="d-flex align-items-center mb-3">
                        <div className="bg-white p-2 rounded-3 shadow-sm me-3"><i className="bi bi-shield-check text-primary"></i></div>
                        <h6 className="fw-bold mb-0 small">Verified Network</h6>
                      </div>
                      <p className="small text-muted" style={{fontSize: '0.75rem'}}>Join a trusted environment of vetted professionals.</p>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center mb-3">
                        <div className="bg-white p-2 rounded-3 shadow-sm me-3"><i className="bi bi-globe text-primary"></i></div>
                        <h6 className="fw-bold mb-0 small">Global Vision</h6>
                      </div>
                      <p className="small text-muted" style={{fontSize: '0.75rem'}}>A local community with a nationwide impact.</p>
                    </div>
                  </div>

                  <div className="mt-5 p-4 bg-primary text-white rounded-4 shadow-lg hover-shadow-lg transition-all">
                    <h5 className="fw-bold mb-2 text-white" style={{fontSize: '1.1rem'}}>Already paid ₹2,000 elsewhere?</h5>
                    <p className="small mb-0 opacity-75">Your subscription is already valid nationwide! Contact your local branch for onboarding.</p>
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
              <h2 className="section-title">Get in Touch</h2>
              <div className="mb-4 d-flex align-items-center">
                <div className="bg-white shadow-sm p-3 rounded-3 me-3"><i className="bi bi-geo-alt text-primary fs-4"></i></div>
                <div><h6 className="fw-bold mb-0">Address</h6><p className="small text-muted mb-0">New Delhi, India</p></div>
              </div>
              <div className="mb-4 d-flex align-items-center">
                <div className="bg-white shadow-sm p-3 rounded-3 me-3"><i className="bi bi-telephone text-primary fs-4"></i></div>
                <div><h6 className="fw-bold mb-0">Phone</h6><p className="small text-muted mb-0">+91 11 2345 6789</p></div>
              </div>
              <div className="d-flex align-items-center">
                <div className="bg-white shadow-sm p-3 rounded-3 me-3"><i className="bi bi-envelope text-primary fs-4"></i></div>
                <div><h6 className="fw-bold mb-0">Email</h6><p className="small text-muted mb-0">contact@bvpindia.org</p></div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="glass-card bg-white border-0 shadow-lg p-4 p-lg-5 rounded-4">
                <form><div className="row g-3">
                  <div className="col-md-6"><label className="form-label small fw-bold">Full Name</label><input type="text" className="form-control form-control-sm border-light py-2 bg-light shadow-none" /></div>
                  <div className="col-md-6"><label className="form-label small fw-bold">Phone</label><input type="tel" className="form-control form-control-sm border-light py-2 bg-light shadow-none" /></div>
                  <div className="col-12"><label className="form-label small fw-bold">Email</label><input type="email" className="form-control form-control-sm border-light py-2 bg-light shadow-none" /></div>
                  <div className="col-12"><label className="form-label small fw-bold">Message</label><textarea className="form-control form-control-sm border-light py-2 bg-light shadow-none" rows="4"></textarea></div>
                  <div className="col-12 mt-4"><button className="btn btn-primary w-100 py-3 fw-bold shadow-lg">SEND ENQUIRY</button></div>
                </div></form>
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
