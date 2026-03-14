function AboutMe() {
  return (
    <section
      className="about-section"
      id="about"
      style={{
        backgroundImage: "url('/assets/img/bg-masthead.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container-fluid">
        <div className="row align-items-center">

          {/* ซ้ายสุด : ข้อความ */}
          <div className="col-md-4 text-white ps-5">
            <h2 className="mb-4">About Me</h2>
            <p>
              สวัสดีครับ ผมนายสรชัช เขียวคำรพ นักศึกษามหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ ชั้นปีที่่ 2 กำลังพัฒนา Portfolio ด้วย React และ Bootstrap
            </p>
          </div>

          

          {/* ขวาสุด : รูปเรา */}
          <div className="col-md-7 text-end pe-0">
            <img
              src="/assets/img/mefull.png"
              alt="profile"
              style={{
                height: "100vh",
                objectFit: "contain"
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutMe;