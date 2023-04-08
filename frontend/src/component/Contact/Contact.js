import React, { useState } from "react";
import { contactToAdmin } from "../../service/service";
import './Contact.css'
export default function Footer() {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    textarea: "",
  });
  console.log(input);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((previousValue) => ({
      ...previousValue,
      [name]: value,
    }));
  };

  const Contact = async () => {
    const res = await contactToAdmin(input.fullname, input.email, input.textarea);
    console.log(res.data.result, "res");
    if (res.data.status === true) {
      alert("message sent");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      <footer className="text-center text-white" id="contact--page">
        {/* <!-- Grid container --> */}
        <div className="container p-4 pb-2">
          {/* <!-- Section: Social media --> */}
          <section className="mb-4">
            {/* <!-- Facebook --> */}
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#3b5998" }}
              href="https://www.facebook.com/profile.php?id=100062573145421"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            {/* <!-- Twitter --> */}
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#55acee" }}
              href="https://twitter.com/_Sid_d_hant?t=G0M65bYtSIZqPGbRw5h8vw&s=09"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>

            {/* <!-- Google --> */}
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#dd4b39" }}
              href="https://google.com/azmsiddhant1@gmail.com"
              role="button"
            >
              <i className="fab fa-google"></i>
            </a>

            {/* <!-- Instagram --> */}
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#ac2bac" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>

            {/* <!-- Linkedin --> */}
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#0082ca" }}
              href="https://www.linkedin.com/in/siddhant-singh-9a47051a2"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            {/* <!-- Github --> */}
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#333333" }}
              href="https://github.com/siddhantsingh7"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
          {/* <!-- Section: Social media --> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* Contact Us */}
        <div className="contacts--container">
        <h1>Contacts</h1>
        <div className='contacts-body '>

          {/* <div className="col-md-3 "></div> */}
          <div className="contacts-form">
            <form className="form-control" onSubmit={(e) => handleSubmit(e)} style={{backgroundColor: '#89ABE3FF'}}>
              <input
                className="form-control"
                placeholder="Name"
                name="fullname"
                onChange={(e) => handleChange(e)}
              />
              <br />
              <input
                className="form-control"
                placeholder="Email"
                name="email"
                onChange={(e) => handleChange(e)}
              />
              <br />
              <textarea
                className="form-control"
                placeholder="Enter Your text here..."
                name="textarea"
                onChange={(e) => handleChange(e)}
              />
              <br />
              <button className="btn btn-outline-success" onClick={Contact}>
                Submit
              </button>
            </form>
          </div>
          <div></div>
          <div className="contacts-details " style={{ color: "black" }}>
            <h5>About Me</h5>
            <p>
              Siddhant Singh Rajpoot <br /> MEARN Full Stack Developer at <br /> SmartData Enterprises Limited,(CMMI level3) <br /> Nagpur,Mihan,441108
            </p>
          </div>
          </div>
          
          {/* <div className="col-md-3"></div> */}
        </div>
      </footer>
    </div>
  );
}
