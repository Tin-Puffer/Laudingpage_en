import cssB2 from "./block2.module.scss";
import cssB1 from "./block1.module.scss";
import cssB3 from "./block3.module.scss";
import { Col, Form, Row } from "antd";
import Image from "next/image";

import css from "./footer.module.scss";
import { f1, f2, f3, f4, f5, logo } from "../public/staticImage";

export function Footer() {
  return (
    <>
      <div
        className={cssB2.reason}
        style={{ background: "white", padding: "0", color: "black" }}
      >
        <div className={cssB1.content} style={{ overflow: "hidden" }}>
          <Row className={css.Rowcuts} gutter={50}>
            <Col span={24}>
              <Image src={logo} className={css.imageLogo} alt="logoCty"></Image>
            </Col>
            {/* <Col span={24}></Col> */}
            <Row className={css.gridLR} gutter={[50, 30]}>
              <Col xs={24} sm={24} md={12} lg={16} className={css.Colcust}>
                <div className={css.content}>
                  <h2 style={{ margin: "10px 0" }}>AFR Cloud Computing JSC</h2>
                  <p>Việt Nam Branch:</p>
                  <p>
                    37 Huynh Tinh Cua Street, Ward 8, District 3, Ho Chi Minh
                    City, Vietnam (Emerald Building).
                  </p>
                </div>
              </Col>
              <Col xs={24} sm={24} md={12} lg={8} className={css.Colcust}>
                <div className={[css.content, css.Rit].join(" ")}>
                  <p>LContact us:</p>
                  <div className={css.FlexItem}>
                    <Image src={f4} alt="lien he" className={css.IconF}></Image>
                    <p>+84-97-540-4208 (Mr. Tâm)</p>
                  </div>
                  <div className={css.FlexItem}>
                    <Image src={f5} alt="mail" className={css.IconF}></Image>
                    <p>tam@afr-solution.com</p>
                  </div>
                  <div style={{ marginTop: "10px" }}>
                    <a
                      rel="noreferrer"
                      className={css.LinkMEdia}
                      href="https://www.facebook.com/LogisForce/"
                      target="_blank"
                    >
                      <Image src={f1} alt="mail" className={css.IconS}></Image>
                    </a>
                    <a
                      rel="noreferrer"
                      className={css.LinkMEdia}
                      href="https://www.youtube.com/channel/UC3q08W0yiKF_f8N0SaszBQA"
                      target="_blank"
                    >
                      <Image src={f2} alt="mail" className={css.IconS}></Image>
                    </a>
                    <a
                      rel="noreferrer"
                      className={css.LinkMEdia}
                      href="https://www.linkedin.com/company/afr-cloud-computing/"
                      target="_blank"
                    >
                      <Image src={f3} alt="mail" className={css.IconS}></Image>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Row>
        </div>
      </div>
    </>
  );
}
