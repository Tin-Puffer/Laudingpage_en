import cssB2 from "./block2.module.scss";
import cssB1 from "./block1.module.scss";
import cssB3 from "./block3.module.scss";
import { Col, Form, Row } from "antd";
import Image from "next/image";
import {
  v1,
  v2,
  v3,
  v4,
  v5,
  v6,
  v7,
  v8,
  v9,
  v10,
  v11,
  v12,
  c1,
  c2,
  c3,
  c4,
  l1,
  l2,
  l3,
  l4,
  d1,
  d3,
  d2,
  v13,
} from "../public/staticImage/index";
import css from "./block4.module.scss";
const itemvt = [v1, v2, v3, v4, v5, v6, v12, v11, v13];
export function Block4() {
  return (
    <>
      <div className={cssB2.reason} style={{ background: "white" }}>
        <div className={cssB1.content}>
          <Row style={{ width: "100%" }}>
            <Col span={24} style={{ marginBottom: "30px" }}>
              <h2 className={cssB2.titleh2}>
                LogisForce is proud to be the optimal solution for many
                <p style={{ margin: "0" }}>logistics businesses</p>
              </h2>
            </Col>
            <Row style={{ margin: 0, width: "100%" }}>
              <Col
                xs={24}
                md={24}
                lg={11}
                className={[css.box, css.boxLef].join(" ")}
              >
                <div>
                  <div className={css.includeTitle}>
                    <p className={css.title}> Retail & Trading</p>

                    <Row className={cssB2.reasonItem} style={{ width: "100%" }}>
                      <Col span={24}>
                        <Row style={{ margin: 0, width: "100%" }}>
                          <Col className={css.center} xs={24} sm={12}>
                            <Image
                              className={css.imageItem}
                              src={l1}
                              alt="cop"
                            ></Image>
                          </Col>
                          <Col className={css.center} xs={24} sm={12}>
                            <Image
                              className={css.imageItem}
                              src={l2}
                              alt="cop"
                            ></Image>
                          </Col>
                        </Row>
                      </Col>
                      <Col span={24}>
                        <Row style={{ margin: 0, width: "100%" }}>
                          <Col className={css.center} xs={24} sm={12}>
                            <Image
                              className={css.imageItem}
                              src={l3}
                              alt="cop"
                            ></Image>
                          </Col>
                          <Col className={css.center} xs={24} sm={12}>
                            <Image
                              className={css.imageItem}
                              src={l4}
                              alt="cop"
                            ></Image>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                  <div
                    className={css.includeTitle}
                    style={{ marginTop: "30px" }}
                  >
                    <p className={css.title}>Hi-tech</p>
                    <Row className={cssB2.reasonItem} style={{ width: "100%" }}>
                      <Col span={24}>
                        <Row style={{ margin: 0, width: "100%" }}>
                          <Col className={css.center} xs={24} sm={12}>
                            <Image
                              className={css.imageItem}
                              src={c1}
                              alt="cop"
                            ></Image>
                          </Col>
                          <Col className={css.center} xs={24} sm={12}>
                            <Image
                              className={css.imageItem}
                              src={c2}
                              alt="cop"
                            ></Image>
                          </Col>
                        </Row>
                      </Col>
                      <Col span={24}>
                        <Row style={{ margin: 0, width: "100%" }}>
                          <Col className={css.center} xs={24} sm={12}>
                            <Image
                              className={css.imageItem}
                              src={c3}
                              alt="cop"
                            ></Image>
                          </Col>
                          <Col className={css.center} xs={24} sm={12}>
                            <Image
                              className={css.imageItem}
                              src={c4}
                              alt="cop"
                            ></Image>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col
                xs={24}
                md={24}
                lg={13}
                className={[css.box, css.boxRight].join(" ")}
              >
                <div className={css.includeTitle}>
                  <p className={css.title}> Logistics & Forwarder</p>
                  <div
                    className={[cssB2.reasonItem, css.CoplistVT].join(" ")}
                    style={{ width: "100%" }}
                  >
                    {itemvt.map((e, i) => (
                      <div key={i} className={css.BoxItem}>
                        <Image
                          className={css.CopItem}
                          src={e}
                          alt="cop"
                        ></Image>
                      </div>
                    ))}
                    {/* <Image
                      decoding="async"
                   
                      src={banner}
                      alt="Nâng cao năng suất"
                      className={css.imgResponsive}
                      data-ll-status="loaded"
                    /> */}
                  </div>
                </div>
              </Col>
            </Row>
            <Row gutter={60} className={css.MGr}>
              <Col xs={24} md={8} className={[css.box].join(" ")}>
                <div className={css.includeTitle}>
                  <p className={css.title}>Consulting</p>
                  <div
                    className={cssB2.reasonItem}
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    <Image className={css.imageD} src={d1} alt="cop"></Image>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={8} className={[css.box].join(" ")}>
                <div className={css.includeTitle}>
                  <p className={css.title}> Manufacture</p>
                  <div
                    className={cssB2.reasonItem}
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    <Image className={css.imageD} src={d2} alt="cop"></Image>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={8} className={[css.box].join(" ")}>
                <div className={css.includeTitle}>
                  <p className={css.title}>Finance</p>
                  <div
                    className={cssB2.reasonItem}
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    <Image className={css.imageD} src={d3} alt="cop"></Image>
                  </div>
                </div>
              </Col>
            </Row>
          </Row>
          <Form></Form>
        </div>
      </div>
    </>
  );
}
