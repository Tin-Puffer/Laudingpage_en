import cssB2 from "./block2.module.scss";
import cssB1 from "./block1.module.scss";
import css from "./block3.module.scss";
import { Col, Row } from "antd";
import Image from "next/image";
import {
  B3,
  B3icon1,
  B3icon2,
  B3icon3,
  B3icon4,
  B3icon5,
  B3icon6,
  B3image1,
  B3image2,
  B3image3,
  B3image4,
  B3image5,
  B3image6,
} from "../public/staticImage/index";
export function Block3() {
  return (
    <>
      <div
        className={cssB2.reason}
        style={{ background: "white", color: "black" }}
      >
        <div className={cssB1.content}>
          <Row>
            <Col span={24} className={cssB1.colMg}>
              <h2 className={cssB2.titleh2}>
                LogisForce - Provide low-cost services and help enhance
                <p style={{ margin: "0" }}>Logistics business performance </p>
              </h2>
            </Col>
            <Row gutter={[60, 50]} className={css.content}>
              <Col xs={24} md={24} lg={12} className={css.od1}>
                <div className={css.solutionText}>
                  <div className={css.itemHead}>
                    <div style={{ width: "55px" }}>
                      <Image
                        decoding="async"
                        src={B3icon5}
                        alt="Amis Kế toán"
                        className={css.imageRepon}
                        data-ll-status="loaded"
                      />
                    </div>
                    <h3 className={css.itemTitle}>
                      Conveniently{" "}
                      <span className=" blue-text">Customizable</span>
                    </h3>
                  </div>
                  <div className={css.itemContent}>
                    Using the available tools, you can quickly personalize your
                    system. For example, changing processes, adding modules for
                    <br />
                    management, or building new app... all of them will be done
                    with just click in LogisForce.
                  </div>
                  <div className={css.SlBtn}>
                    <a className="scroll" href="#targetDiv">
                      Register Now
                    </a>
                  </div>
                </div>
              </Col>
              <Col
                xs={24}
                md={24}
                lg={12}
                className={css.ColItem}
                // style={{ textAlign: "center", padding: "30px" }}
              >
                <Image
                  decoding="async"
                  src={B3image1}
                  alt="Đáp ứng đầy đủ các nghiệp vụ kế toán"
                  className={css.ImageB3}
                  data-ll-status="loaded"
                />
              </Col>
            </Row>
            {/* <div
              style={{
                padding: "30px",
                width: "100%",
                backgroundColor: "white",
              }}
            ></div> */}

            <Row gutter={[60, 50]} className={css.content}>
              <Col xs={24} md={24} lg={12}>
                <div
                  className={[css.solutionText, css.solutionTextR].join(" ")}
                >
                  <div className={css.itemHead}>
                    <div style={{ width: "55px" }}>
                      <Image
                        decoding="async"
                        src={B3icon1}
                        alt="Amis Kế toán"
                        className={css.imageRepon}
                        data-ll-status="loaded"
                      />
                    </div>
                    <h3 className={css.itemTitle}>
                      Universal
                      <span className=" blue-text"> Platform</span>
                    </h3>
                  </div>
                  <div className={css.itemContent}>
                    Using a single platform and infrastructure has advantages
                    for business of all sizes. Customer data is safe and secure
                    .
                    <br />
                    because of the multi-tenant design of Salesforce
                    development. Customer no longer have to get involved.
                  </div>
                  <div className={css.SlBtn}>
                    <a className="scroll" href="#targetDiv">
                      Register Now
                    </a>
                  </div>
                </div>
              </Col>
              <Col
                xs={24}
                md={24}
                lg={12}
                className={css.ColItem}
                // style={{ textAlign: "center", padding: "30px" }}
              >
                <Image
                  decoding="async"
                  src={B3image2}
                  alt="Đáp ứng đầy đủ các nghiệp vụ kế toán"
                  className={css.ImageB3}
                  data-ll-status="loaded"
                />
              </Col>
            </Row>
            {/* <div
              style={{
                padding: "30px",
                width: "100%",
                backgroundColor: "white",
              }}
            ></div> */}

            <Row gutter={[60, 50]} className={css.content}>
              <Col xs={24} md={24} lg={12} className={css.od1}>
                <div className={css.solutionText}>
                  <div className={css.itemHead}>
                    <div style={{ width: "55px" }}>
                      <Image
                        decoding="async"
                        src={B3icon2}
                        alt="Amis Kế toán"
                        className={css.imageRepon}
                        data-ll-status="loaded"
                      />
                    </div>
                    <h3 className={css.itemTitle}>
                      Suitable for a Wide
                      <span className=" blue-text"> range of platform </span>
                    </h3>
                  </div>
                  <div className={css.itemContent}>
                    LogisForce is capable of integrating with a variety of
                    third-party applications.
                    <br />
                    Fortunately, it&apos;s all made possible through an open API
                    to connect with other platform like: Google cloud, dropbox,
                    mailchimp....
                  </div>
                  <div className={css.SlBtn}>
                    <a className="scroll" href="#targetDiv">
                      Register Now
                    </a>
                  </div>
                </div>
              </Col>
              <Col
                xs={24}
                md={24}
                lg={12}
                className={css.ColItem}
                // style={{ textAlign: "center", padding: "30px" }}
              >
                <Image
                  decoding="async"
                  src={B3image3}
                  alt="Đáp ứng đầy đủ các nghiệp vụ kế toán"
                  className={css.ImageB3}
                  data-ll-status="loaded"
                />
              </Col>
            </Row>
            {/* <div
              style={{
                padding: "30px",
                width: "100%",
                backgroundColor: "white",
              }}
            ></div> */}

            <Row gutter={[60, 50]} className={css.content}>
              <Col xs={24} md={24} lg={12}>
                <div
                  className={[css.solutionText, css.solutionTextR].join(" ")}
                >
                  <div className={css.itemHead}>
                    <div style={{ width: "55px" }}>
                      <Image
                        decoding="async"
                        src={B3icon3}
                        alt="Amis Kế toán"
                        className={css.imageRepon}
                        data-ll-status="loaded"
                      />
                    </div>
                    <h3 className={css.itemTitle}>
                      Excellent
                      <span className=" blue-text"> Reporting Tools</span>
                    </h3>
                  </div>
                  <div className={css.itemContent}>
                    LogisForce provide a variety of reporting options that may
                    save you both time and money when it comes to analyzing
                    data.
                    <br />
                    You may use LogisForce tool to improve your firm by getting
                    a clearer picture of Sales, Cus, Docs, Op, Accounting….
                  </div>
                  <div className={css.SlBtn}>
                    <a className="scroll" href="#targetDiv">
                      Register Now
                    </a>
                  </div>
                </div>
              </Col>
              <Col
                xs={24}
                md={24}
                lg={12}
                className={css.ColItem}
                // style={{ textAlign: "center", padding: "30px" }}
              >
                <Image
                  decoding="async"
                  src={B3image4}
                  alt="Đáp ứng đầy đủ các nghiệp vụ kế toán"
                  className={css.ImageB3}
                  data-ll-status="loaded"
                />
              </Col>
            </Row>
            {/* <div
              style={{
                padding: "30px",
                width: "100%",
                backgroundColor: "white",
              }}
            ></div> */}

            <Row gutter={[60, 50]} className={css.content}>
              <Col xs={24} md={24} lg={12} className={css.od1}>
                <div className={css.solutionText}>
                  <div className={css.itemHead}>
                    <div style={{ width: "55px" }}>
                      <Image
                        decoding="async"
                        src={B3icon4}
                        alt="Amis Kế toán"
                        className={css.imageRepon}
                        data-ll-status="loaded"
                      />
                    </div>
                    <h3 className={css.itemTitle}>
                      <span className=" blue-text">Security</span> and{" "}
                      <span className=" blue-text"> Safety</span>
                    </h3>
                  </div>
                  <div className={css.itemContent}>
                    LogisForce is built on Salesforce platform, is a SaaS that
                    provides a flexible and easy data security strategy. Using
                    it&apos;s pre-installed .
                    <br />
                    security features, business owner and manager may select the
                    individuals who can access company information.
                  </div>
                  <div className={css.SlBtn}>
                    <a className="scroll" href="#targetDiv">
                      Register Now
                    </a>
                  </div>
                </div>
              </Col>
              <Col
                xs={24}
                md={24}
                lg={12}
                className={css.ColItem}
                // style={{ textAlign: "center", padding: "30px" }}
              >
                <Image
                  decoding="async"
                  src={B3image5}
                  alt="Đáp ứng đầy đủ các nghiệp vụ kế toán"
                  className={css.ImageB3}
                  data-ll-status="loaded"
                />
              </Col>
            </Row>

            <Row gutter={[60, 50]} className={css.content}>
              <Col xs={24} md={24} lg={12}>
                <div
                  className={[css.solutionText, css.solutionTextR].join(" ")}
                >
                  <div className={css.itemHead}>
                    <div style={{ width: "55px" }}>
                      <Image
                        decoding="async"
                        src={B3icon6}
                        alt="Amis Kế toán"
                        className={css.imageRepon}
                        data-ll-status="loaded"
                      />
                    </div>
                    <h3 className={css.itemTitle}>
                      Vast {" "}
                      <span className=" blue-text">Ecosystem</span>
                    </h3>
                  </div>
                  <div className={css.itemContent}>
                    A wide range of communities, including partner, developers,
                    and end-users, are all part of the salesforce eco-system.
                    <br />
                    It&apos;s easy for your company if one day you want to expand
                    your business, we are here to accompany.
                  </div>
                  <div className={css.SlBtn}>
                    <a className="scroll" href="#targetDiv">
                      Register Now
                    </a>
                  </div>
                </div>
              </Col>
              <Col
                xs={24}
                md={24}
                lg={12}
                className={css.ColItem}
                // style={{ textAlign: "center", padding: "30px" }}
              >
                <Image
                  decoding="async"
                  src={B3image6}
                  alt="Đáp ứng đầy đủ các nghiệp vụ kế toán"
                  className={css.ImageB3}
                  data-ll-status="loaded"
                />
              </Col>
            </Row>
          </Row>
        </div>
      </div>
    </>
  );
}
