import cssB2 from "./block2.module.scss";
import cssB1 from "./block1.module.scss";
import cssB3 from "./block3.module.scss";
import { Col, Form, Row } from "antd";
import Image from "next/image";

import css from "./footer.module.scss";
import { logo } from "../public/staticImage";

export function Footer() {
  return (
    <>
      <div className={cssB2.reason} style={{ background: "white",padding:'0'}}>
        <div className={cssB1.content}>
        <Row>
          <Col span={24}>
            <Image src={logo} className={css.imageLogo} alt='logoCty'></Image>
            <h2 style={{margin:0}}>CÔNG TY CỔ PHẦN AFR CLOUD COMPUTING</h2>
          </Col>
          <Col xs={24} sm={12} className={css.Colcust}>
            <div className={css.content}>

            </div>
          </Col>
          <Col xs={24} sm={12} className={css.Colcust}></Col>
        </Row>
        </div>
      </div>
    </>
  );
}
