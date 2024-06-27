import React from "react";

const ContactForm5 = () => {
  return (
    <form action="#" className="rv-22-form">
      <div className="row rv8c-cap">
        <div className="col ">
          <input type="text" className="form-control" placeholder="Your Name" />
        </div>
        <div className="col ">
          <input
            type="email"
            className="form-control"
            placeholder="Email Address"
          />
        </div>
      </div>
      <div className="row rv8c-cap">
        <div className="col ">
          <input
            type="text"
            className="form-control"
            placeholder="Phone Number"
          />
        </div>
        <div className="col ">
          <input type="text" className="form-control" placeholder="Date" />
        </div>
      </div>
      <div className="row rv8c-cap">
        <div className="col  select_box ">
          <select>
            <option>Selects Services</option>
            <option>Hair Cutting</option>
            <option>Hair Color</option>
            <option>Shave Style</option>
          </select>
          <div className="select_icon">
            <i className="fas fa-caret-down"></i>
          </div>
        </div>
        <div className="col ">
          <div className="col select_box">
            <select>
              <option>Selects Barbers</option>
              <option>Parsley Montana</option>
              <option>Sams Jon</option>
              <option>Jony jems</option>
            </select>
            <div className="select_icon">
              <i className="fas fa-caret-down"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="rv-22-contact_form_button">
        <button>
          Send Message <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </form>
  );
};

export default ContactForm5;
