import { Col, Row } from "antd";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { B3image1, B3image4, logoDk } from "../public/staticImage";
import css from "./block1.module.scss";
import cssF from "./blockForm.module.scss";
import ReCAPTCHA from "react-google-recaptcha";
interface FormData {
  oid: string;
  retURL: string;
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  phone: string;
  field_00N0K00000LOsZ6: string;
}
export function BlockForm() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [formData, setFormData] = useState<FormData>({
    oid: "00D28000000rCfy",
    retURL: "google.com",
    first_name: "",
    last_name: "",
    email: "",
    company: "",
    phone: "",
    field_00N0K00000LOsZ6: "Managing Director (MD)",
  });

  const [capcha, Setcapcha] = useState(false);

  const [isCapcha, SetIsCapcha] = useState(false);

  const [load, setLoad] = useState(false);
  const [fname, sfname] = useState(false);
  const [lname, slname] = useState(false);
  const [emailType, setEmailType] = useState(false);
  const [emai, setEmail] = useState(false);
  const [company, setCompany] = useState(false);
  // const [title, setTitle] = useState(false);
  const [phone, setPhone] = useState(false);
  const [phoneType, setPhoneType] = useState(false);
  // console.log(capcha, "c");

  //  function timestamp() { var response = document.getElementById("g-recaptcha-response"); if (response == null || response.value.trim() == "") {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);elems["ts"] = JSON.stringify(new Date().getTime());document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } setInterval(timestamp, 500);

  useEffect(() => {
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
      if (isCapcha) SetIsCapcha(false);
    }
  }, [capcha]);
  useEffect(() => {
    if (!checkValueTosubmit() && capcha == false) {
      Setcapcha(true);
    } else if (checkValueTosubmit() && capcha != false) {
      Setcapcha(false);
    }
  }, [formData]);
  const isValidEmail = (e: any) => {
    const { name, value } = e.target;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailType(!emailRegex.test(value));
  };
  const isValidPhoneNumber = (e: any) => {
    const { name, value } = e.target;
    const phoneRegex = /^\d{10,}$/;
    setPhoneType(!phoneRegex.test(value));
  };

  const checkValueTosubmit = () => {
    return Object.values(formData).some((value) => value == "");
  };
  const checkRequired = (event: any, setValue: any) => {
    const { name, value } = event.target;

    value == 0 ? setValue(true) : setValue(false);
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  // const checkValue = (event: any) => {
  //   const { name, value } = event.target;
  //   console.log(name, value);
  // };
  const handleSubmit = (event: any) => {
    setLoad(true);
    event.preventDefault();
    const url =
      "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8";

    const params = new URLSearchParams();
    Object.keys(formData).forEach((key) => {
      const paramName = key.startsWith("field_") ? key.substr(6) : key;
      params.set(paramName, (formData as any)[key]);
    });

    if (
      !checkValueTosubmit() &&
      !load &&
      !emailType &&
      !phoneType &&
      isCapcha
    ) {
      fetch(url, {
        method: "POST",
        // body: new URLSearchParams(formData),
        body: params,
      })
        .then((response) => {
          setLoad(false);
          Setcapcha(false);
          setFormData({
            oid: "00D5i00000CIYXO",
            retURL: "google.com",
            first_name: "",
            last_name: "",
            email: "",
            company: "",
            field_00N0K00000LOsZ6: "Managing Director (MD)",
            phone: "",
          });
        })
        .catch((error) => {
          setLoad(false);
          SetIsCapcha(false);
          Setcapcha(false);
          console.log(error);
          setFormData({
            oid: "00D5i00000CIYXO",
            retURL: "google.com",
            first_name: "",
            last_name: "",
            email: "",
            company: "",
            field_00N0K00000LOsZ6: "Managing Director (MD)",
            phone: "",
          });
          // Xử lý lỗi (nếu có)
          alert("information has been saved");
        });
    } else {
      console.log("err");
      setLoad(false);
      SetIsCapcha(false);
      // Setcapcha(false);
    }
  };
  return (
    <>
      <div
        style={{ color: "black" }}
        className={[css.container, cssF.bgi].join(" ")}
        id="targetDiv"
      >
        ,
        <div className={[css.content].join(" ")}>
          <Row className={cssF.content} style={{}}>
            <Col className={css.colCustom} xs={24} md={18} lg={12}>
              <div className={[css.contentRight, cssF.conentItem].join(" ")}>
                <div style={{ textAlign: "center" }}>
                  <Image
                    className={cssF.logoDK}
                    decoding="async"
                    src={logoDk}
                    alt="cop"
                    data-ll-status="loaded"
                  ></Image>
                </div>

                <h1 className={css.title2}>
                  Register to get free trial program
                </h1>
                <div className={css.decription}>
                  ogisforce - Saving cost and enhancing your business
                  performance
                </div>
                <Col xs={0} lg={24} sm={0}>
                  <Image
                    className={cssF.iteamCop}
                    decoding="async"
                    src={B3image4}
                    alt="cop"
                    data-ll-status="loaded"
                  ></Image>
                </Col>
              </div>
            </Col>
            <Col className={css.colCustom} xs={24} md={24} lg={12}>
              <div className={[css.contentLeft, cssF.conentItem].join(" ")}>
                <form className={cssF.formClass} onSubmit={handleSubmit}>
                  <h2 style={{ margin: 0 }}>
                    Register now{" "}
                    <span style={{ color: "#4262ef" }}>
                      for 15 days free trial{" "}
                    </span>{" "}
                    of LogisForce system
                  </h2>
                  <div className={cssF.boxInput}>
                    <p>First name</p>
                    <input
                      className={[cssF.inputfield, lname && cssF.error].join(
                        " "
                      )}
                      id="last_name"
                      name="last_name"
                      type="text"
                      value={formData.last_name}
                      onChange={handleInputChange}
                      onBlur={(e) => {
                        checkRequired(e, slname);
                      }}
                      onFocus={() => slname(false)}
                    />
                    {lname && <span> * First name required </span>}
                  </div>{" "}
                  <div className={cssF.boxInput}>
                    <p>Last name</p>
                    <input
                      className={[cssF.inputfield, fname && cssF.error].join(
                        " "
                      )}
                      id="first_name"
                      name="first_name"
                      type="text"
                      value={formData.first_name}
                      onChange={handleInputChange}
                      onBlur={(e) => {
                        checkRequired(e, sfname);
                      }}
                      onFocus={() => sfname(false)}
                    />
                    {fname && <span> * Last name required </span>}
                  </div>
                  <div className={cssF.boxInput}>
                    <p>Email address</p>
                    <input
                      className={[
                        cssF.inputfield,
                        (emai || emailType) && cssF.error,
                      ].join(" ")}
                      id="email"
                      name="email"
                      type="text"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={(e) => {
                        checkRequired(e, setEmail);
                        isValidEmail(e);
                      }}
                      onFocus={() => {
                        setEmail(false);
                        setEmailType(false);
                      }}
                    />
                    {emai && <span> * Email address required </span>}
                    {!emai && emailType && (
                      <span>
                        {" "}
                        * Email must be in the format | ex: abc@gmail.com{" "}
                      </span>
                    )}
                  </div>{" "}
                  <div className={cssF.boxInput}>
                    <p>Phone number</p>
                    <input
                      className={[
                        cssF.inputfield,
                        (phoneType || phone) && cssF.error,
                      ].join(" ")}
                      id="phone"
                      name="phone"
                      maxLength={13}
                      type="text"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onBlur={(e) => {
                        isValidPhoneNumber(e);
                        checkRequired(e, setPhone);
                      }}
                      onFocus={() => {
                        setPhoneType(false);
                        setPhone(false);
                      }}
                    />
                    {phone && <span> * Phone number required </span>}
                    {!phone && phoneType && (
                      <span> * Please enter the correct phone number </span>
                    )}
                  </div>
                  <div className={cssF.boxInput}>
                    <p>Company</p>
                    <input
                      className={[cssF.inputfield, company && cssF.error].join(
                        " "
                      )}
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      onBlur={(e) => {
                        checkRequired(e, setCompany);
                      }}
                      onFocus={() => setCompany(false)}
                    />
                    {company && <span> * Company required </span>}
                  </div>
                  <div className={cssF.boxInput} style={{ color: "black" }}>
                    <p>Title</p>
                    {/* <input
                      className={[cssF.inputfield, title && cssF.error].join(
                        " "
                      )}
                      id="title"
                      name="title"
                      type="text"
                      value={formData.title}
                      onChange={handleInputChange}
                      onBlur={(e) => {
                        checkRequired(e, setTitle);
                      }}
                      onFocus={() => setTitle(false)}
                    />
                    {title && <span> * Chức vụ không được để trống </span>} */}

                    <select
                      id="field_00N0K00000LOsZ6"
                      name="field_00N0K00000LOsZ6"
                      title="Job Title"
                      onChange={handleInputChange}
                      defaultValue="Managing Director (MD)"
                      className={[cssF.inputfield].join(" ")}
                    >
                      {/* <option value="">--None--</option> */}
                      <option value="Managing Director (MD)">
                        Managing Director (MD)
                      </option>
                      <option value="Chief Executive Officer (CEO)">
                        Chief Executive Officer (CEO)
                      </option>
                      <option value="Owner">Owner</option>
                      <option value="Founder &amp; General Manager">
                        Founder &amp; General Manager
                      </option>
                      <option value="Line Manager/Supervisor">
                        Line Manager/Supervisor
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>{" "}
                  <div
                    style={{ marginTop: "20px" }}
                    className={!capcha ? cssF.noneCapcha : ""}
                  >
                    <ReCAPTCHA
                      sitekey="6LeBFl4mAAAAAJZOqlWQqGITuF64KMbVHmGVDVkA"
                      ref={recaptchaRef}
                      onChange={() => {
                        SetIsCapcha(true);
                      }}
                    />
                  </div>
                  {/* Các trường dữ liệu khác */}
                  <div className={cssF.submit}>
                    <button
                      type="submit"
                      className={[
                        cssF.inputSubmit,
                        (!isCapcha || emailType || phoneType) && cssF.loading,
                      ].join(" ")}
                    >
                      Register
                    </button>
                    {/* <input
                      className={[cssF.inputSubmit, load && cssF.loading].join(
                        " "
                      )}
                      type="submit"
                      name="submit"
                      value={"Nhận tư vấn miễn phí"}
                    /> */}
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
