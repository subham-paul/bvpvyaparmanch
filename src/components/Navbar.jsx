import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-light-custom sticky-top py-2">
      <div className="container-fluid px-lg-5">
        <a className="navbar-brand text-dark d-flex align-items-center" href="#home" style={{ letterSpacing: '-0.5px' }}>
          <span className="fw-black text-primary">BVP</span>
          <span className="fw-light text-dark ms-1">Vyapar</span>
          <span className="fw-bold text-dark italic" style={{ fontSize: '1.1rem', opacity: 0.85 }}>Manch</span>
        </a>
        <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-uppercase fw-bold" style={{fontSize: '0.75rem', letterSpacing: '0.5px'}}>
            <li className="nav-item"><a className="nav-link px-3" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link px-3" href="#about">About Us</a></li>
            <li className="nav-item"><a className="nav-link px-3" href="#services">What We Do</a></li>
            <li className="nav-item"><a className="nav-link px-3" href="#benefits">Benefits</a></li>
            <li className="nav-item"><a className="nav-link px-3" href="#join">How to Join</a></li>
            <li className="nav-item"><a className="nav-link px-3" href="#members">Members</a></li>
            <li className="nav-item"><a className="nav-link px-3" href="#faq">FAQ</a></li>
            <li className="nav-item"><a className="nav-link px-3" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
