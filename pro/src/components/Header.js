function Header() {
  return (
    <header className="masthead d-flex align-items-center justify-content-center text-center"
  style={{
    backgroundImage: "url('/assets/img/bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh"
  }}>
      
      <div className="container">

        {/* รูปโปรไฟล์ */}
        <img
          src="/assets/img/me.png"
          alt="profile"
          className="profile-img mb-4"
          style={{ width: "140px", height: "130px", borderRadius: " 90%" }}
        />

        {/* ชื่อ */}
        <h1 className="name-title">
  Sorachat
</h1>

        {/* คำอธิบาย */}
        <p className="subtitle" style={{color:"white"}}>
          Student | Frontend Developer | React & Bootstrap
        </p>

        {/* icon social */}
        <div className="social-icons mt-3">
          <a href="#contact" style={{textDecoration:"none", color:"white"}}>
            <i className="bi bi-github" href="#contact">    </i>
            <i className="bi bi-instagram" href="#contact">    </i>
            <i className="bi bi-facebook" href="#contact">    </i>
            <i className="bi bi-envelope" href="#contact">    </i>
          </a>
          
        </div>

        <a className="btn btn-secondary mt-4" href="#about">
          About Me
        </a>

      </div>
    </header>
  );
}

export default Header;