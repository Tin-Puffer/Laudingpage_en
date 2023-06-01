import { Col, Row } from "antd";
import Image from "next/image";
import { useState } from "react";
import css from "./block1.module.scss";
import cssF from "./blockForm.module.scss";

export function BlockForm() {
  const [formData, setFormData] = useState({
    oid: "00D5i00000CIYXO",
    retURL: "google.com",
    first_name: "",
    last_name: "",
    email: "",
    company: "",
    title: "",
    phone: "",
  });

  const [load, setLoad] = useState(false);
  const [fname, sfname] = useState(false);
  const [lname, slname] = useState(false);
  const [emailType, setEmailType] = useState(false);
  const [emai, setEmail] = useState(false);
  const [company, setCompany] = useState(false);
  const [title, setTitle] = useState(false);
  const [phone, setPhone] = useState(false);
  const [phoneType, setPhoneType] = useState(false);
  {
    /* <script src="https://www.google.com/recaptcha/api.js"></script> */
  }

  //  function timestamp() { var response = document.getElementById("g-recaptcha-response"); if (response == null || response.value.trim() == "") {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);elems["ts"] = JSON.stringify(new Date().getTime());document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } setInterval(timestamp, 500);

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

    if (!checkValueTosubmit() && !load && !emailType && !phoneType) {
      fetch(url, {
        method: "POST",
        body: new URLSearchParams(formData),
      })
        .then((response) => {
          console.log(response);
          setLoad(false);
          setFormData({
            oid: "00D5i00000CIYXO",
            retURL: "google.com",
            first_name: "",
            last_name: "",
            email: "",
            company: "",
            title: "",
            phone: "",
          });
        })
        .catch((error) => {
          setLoad(false);
          console.log(error);
          setFormData({
            oid: "00D5i00000CIYXO",
            retURL: "google.com",
            first_name: "",
            last_name: "",
            email: "",
            company: "",
            title: "",
            phone: "",
          });
          // Xử lý lỗi (nếu có)
          alert("thông tin đã được ghi nhận");
        });
    } else {
      console.log("err");
      setLoad(false);

    }
  };
  return (
    <>
      <div
        style={{ color: "black" }}
        className={[css.container, cssF.bgi].join(" ")}
        id="targetDiv"
      >
        <div className={[css.content].join(" ")}>
          <Row className={cssF.content} style={{}}>
            <Col className={css.colCustom} xs={24} md={18} lg={12}>
              <div className={[css.contentRight, cssF.conentItem].join(" ")}>
                <h1 className={css.title2}>
                  Đăng ký trải nghiệm, khám phá sức mạnh đột phá của Hệ thống
                  LogisForce
                </h1>
                <div className={css.decription}>
                  LogisForce - Tối ưu chi phí, nâng cao hiệu quả vận hành doanh
                  nghiệp Logistics
                </div>
              </div>
            </Col>
            <Col className={css.colCustom} xs={24} md={24} lg={12}>
              <div className={[css.contentLeft, cssF.conentItem].join(" ")}>
                <form className={cssF.formClass} onSubmit={handleSubmit}>
                  <h2 style={{ margin: 0 }}>
                    <span style={{ color: "#4262ef" }}> </span>
                    Đăng ký ngay 15 ngày dùng thử miễn phí hệ thống{" "}
                    <span style={{ color: "#4262ef" }}> LogisForce</span>
                  </h2>
                  <div className={cssF.boxInput}>
                    <p>Tên</p>
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
                    {fname && <span> * Tên không được để trống </span>}
                  </div>
                  <div className={cssF.boxInput}>
                    <p>Họ</p>
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
                    {lname && <span> * Họ không được để trống </span>}
                  </div>{" "}
                  <div className={cssF.boxInput}>
                    <p>Chức vụ</p>
                    <input
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
                    {title && <span> * Chức vụ không được để trống </span>}
                  </div>{" "}
                  <div className={cssF.boxInput}>
                    <p>Email</p>
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
                    {emai && <span> * Email không được để trống </span>}
                    {!emai && emailType && (
                      <span> * Email phải có định dạng | ex: abc@gmail.com </span>
                    )}
                  </div>{" "}
                  <div className={cssF.boxInput}>
                    <p>Điện thoại</p>
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
                    {phone && <span> * SĐT không được để trống </span>}
                    {!phone && phoneType && (
                      <span> * Vui lòng nhập đúng định dạng SĐT </span>
                    )}
                  </div>
                  <div className={cssF.boxInput}>
                    <p>Tên công ty</p>
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
                    {company && <span> * Tên công ty không được để trống </span>}
                  </div>
                  {/* Các trường dữ liệu khác */}
                  <div className={cssF.submit}>
                    <button
                      type="submit"
                      className={[cssF.inputSubmit, load && cssF.loading].join(
                        " "
                      )}
                    >
                      Nhận tư vấn miễn phí
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
