const Contact = () => {
  return (
    <>
      <section className="my-5">
        <div className="container">
            <h1>Contact Us</h1>
          <div className="row g-4">
            <div className="col-md-6">
              <form className="row g-3 needs-validation" noValidate>
                <div className="col-md-4">
                  <label htmlFor="validationCustom01" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom01"
                    defaultValue="Mark"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4">
                  <label htmlFor="validationCustom02" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom02"
                    defaultValue="Otto"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4">
                  <label htmlFor="validationCustomUsername" className="form-label">
                    Username
                  </label>
                  <div className="input-group has-validation">
                    <span className="input-group-text" id="inputGroupPrepend">
                      @
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustomUsername"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <div className="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="validationCustom03" className="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom03"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="validationCustom04" className="form-label">
                    State
                  </label>
                  <select
                    className="form-select"
                    id="validationCustom04"
                    defaultValue=""
                    required
                  >
                    <option disabled value="">
                      Choose...
                    </option>
                    <option value="MH">Maharashtra</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="validationCustom05" className="form-label">
                    Zip
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom05"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid zip.
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="invalidCheck"
                      required
                    />
                    <label className="form-check-label" htmlFor="invalidCheck">
                      Agree to terms and conditions
                    </label>
                    <div className="invalid-feedback">
                      You must agree before submitting.
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary" type="submit">
                    Submit form
                  </button>
                </div>
              </form>
            </div>

            <div className="col-md-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.8243579202694!2d73.80199007372345!3d18.62696826591854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9424b44386f%3A0x7bcf6e817a60a636!2sFortune%20Cloud%20Technologies%20Pimpri!5e0!3m2!1sen!2sin!4v1795679394288!5m2!1sen!2sin"
                className="w-100 h-100"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
