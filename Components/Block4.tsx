import cssB2 from "./block2.module.scss";
import cssB1 from "./block1.module.scss";
import cssB3 from "./block3.module.scss";
import { Col, Form, Row } from "antd";
import Image from "next/image";
import { B3, banner } from "../public/staticImage/index";
import css from "./block4.module.scss";
export function Block4() {
  return (
    <>
      <div className={cssB2.reason} style={{ background: "white" }}>
        <div className={cssB1.content}>
          <Row style={{ width: "100%" }}>
            <Col span={24} style={{ marginBottom: "30px" }}>
              <h2 className={cssB2.titleh2}>
                LogisForce tự hào là giải pháp tối ưu hoạt động cho nhiều
                <p style={{ margin: "0" }}>doanh nghiệp Logistics</p>
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
                  <p className={css.title}>Bán lẻ</p>
                 
                  <Row
                    className={cssB2.reasonItem}
                    style={{ marginBottom: "20px", width: "100%" }}
                  >
                    <Col span={24}>
                      <Row style={{ margin: 0, width: "100%" }}>
                        <Col
                          span={12}
                          style={{ height: "50px", backgroundColor: "gray" }}
                        ></Col>
                        <Col
                          span={12}
                          style={{
                            height: "50px",
                            backgroundColor: "blanchedalmond",
                          }}
                        ></Col>
                      </Row>
                    </Col>
                    <Col span={24}>
                      <Row style={{ margin: 0, width: "100%" }}>
                        <Col
                          span={12}
                          style={{ height: "50px", backgroundColor: "blue" }}
                        ></Col>
                        <Col
                          span={12}
                          style={{
                            height: "50px",
                            backgroundColor: "silver",
                          }}
                        ></Col>
                      </Row>
                    </Col>
                  </Row>
                  </div>
                  <div className={css.includeTitle}>
                  <p className={css.title}>Công nghệ</p>
                  <Row
                    className={cssB2.reasonItem}
                    style={{ width: "100%" }}
                  >
                    <Col span={24}>
                      <Row style={{ margin: 0, width: "100%" }}>
                        <Col
                          span={12}
                          style={{ height: "50px", backgroundColor: "gray" }}
                        ></Col>
                        <Col
                          span={12}
                          style={{
                            height: "50px",
                            backgroundColor: "blanchedalmond",
                          }}
                        ></Col>
                      </Row>
                    </Col>
                    <Col span={24}>
                      <Row style={{ margin: 0, width: "100%" }}>
                        <Col
                          span={12}
                          style={{ height: "50px", backgroundColor: "blue" }}
                        ></Col>
                        <Col
                          span={12}
                          style={{
                            height: "50px",
                            backgroundColor: "silver",
                          }}
                        ></Col>
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
                  <p className={css.title}>Vận tải giao nhận</p>
                  <div className={cssB2.reasonItem} style={{ width: "100%" }}>
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
            <Row style={{ margin: 0, width: "100%" }}>
              <Col xs={24} md={8} className={[css.box].join(" ")}>
              <div className={css.includeTitle}>
                  <p className={css.title}>Tư vấn</p>
                <div className={cssB2.reasonItem} style={{width:"100%"}}></div>
                </div>
              </Col>
              <Col xs={24} md={8} className={[css.box].join(" ")}>
              <div className={css.includeTitle}>
                  <p className={css.title}>Sản xuất</p>
                <div className={cssB2.reasonItem} style={{width:"100%"}}></div>
                </div>
              </Col><Col xs={24} md={8} className={[css.box].join(" ")}>
              <div className={css.includeTitle}>
                  <p className={css.title}>Tài chính</p>
                <div className={cssB2.reasonItem} style={{width:"100%"}}></div>
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
