import cssB2 from "./block2.module.scss";
import cssB1 from "./block1.module.scss";
import cssB3 from "./block3.module.scss";
import { Col, Form, Row } from "antd";
import Image from "next/image";
import {
  B3,
  banner,
  dt1,
  dt2,
  dt3,
  dt4,
  dt5,
  dt6,
  dt7,
  dt8,
  dt9,
} from "../public/staticImage/index";
import css from "./block5.module.scss";
const dt = [dt1, dt2, dt3, dt4, dt5, dt6, dt7, dt8, dt9];
export function Block5() {
  return (
    <>
      <div
        className={cssB2.reason}
        style={{ background: "white", paddingBottom: "80px" }}
      >
        <div className={cssB1.content}>
          <Row style={{ width: "100%" }}>
            <Col span={24} style={{ marginBottom: "30px" }}>
              <h2 className={cssB2.titleh2}>Our Partner Network</h2>
            </Col>
            <Row gutter={50} style={{ margin: "0", width: "100%" }}>
              {dt.map((e, i) => (
                <Col key={i} xs={24} md={8} lg={8} className={css.listCop}>
                  <Image className={css.iteamCop} src={e} alt="cop"></Image>
                </Col>
              ))}
            </Row>
          </Row>
        </div>
      </div>
    </>
  );
}
