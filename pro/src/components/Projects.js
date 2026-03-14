function Projects() {
  return (
    <section
      className="projects-section"
      id="projects"
      style={{
        backgroundImage: "url('/assets/img/bg-signup.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        paddingTop: "100px",
        paddingBottom: "100px"
      }}
    >
      <div className="container px-4 px-lg-5">

        <h2 className="text-center mb-5 text-white">My Grade</h2>

        <div className="row align-items-center">

          {/* ซ้าย : ประวัติการศึกษา */}
          <div className="col-md-6 text-black">
            <h3>ประวัติการศึกษา</h3>
            <p>
              <strong>ปวช.</strong><br/>
              วิทยาลัยเทคนิคสุพรรณบุรี<br/>
              สาขา เทคนิคคอมพิวเตอร์
            </p>

            <p>
              <strong>ปวส.</strong><br/>
              วิทยาลัยเทคนิคสุพรรณบุรี<br/>
              สาขา คอมพิวเตอร์ฮาร์ดแวร์
            </p>

            <p>
              <strong>ปริญญาตรี</strong><br/>
              มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ<br/>
              KING MONGKUT'S UNIVERSITY OF TECHNOLOGY NORTH BANGKOK
            </p>
          </div>

          {/* ขวา : รูปใบเกรด */}
          <div className="col-md-6 text-center">
            <img
              src="/assets/img/grade.jpg"
              alt="grade"
              className="img-fluid shadow"
              style={{ maxHeight: "600px" }}
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;