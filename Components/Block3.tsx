import cssB2 from "./block2.module.scss";
import cssB1 from "./block1.module.scss";
import css from "./block3.module.scss";
import { Col, Row } from "antd";
import Image from "next/image";
import { B3, banner } from "../public/staticImage/index";
export function Block3() {
  return (
    <>
      <div className={cssB2.reason} style={{ background: "white" }}>
        <div className={cssB1.content}>
          <Row>
            <Col span={24} className={cssB1.colMg}>
              <h2 className={cssB2.titleh2}>
                LogisForce - Tối ưu hóa chi phí và quy trình vận hành
                <p style={{ margin: "0" }}>cho doanh nghiệp Logistics </p>
              </h2>
            </Col>
            <Row gutter={[60, 50]} className={css.content}>
              <Col xs={24} md={24} lg={12} className={css.od1}>
                <div className={css.solutionText}>
                  <div className={css.itemHead}>
                    <div style={{ width: "80px" }}>
                      <Image
                        decoding="async"
                        src={banner}
                        alt="Amis Kế toán"
                        className={css.imageRepon}
                        data-ll-status="loaded"
                      />
                    </div>
                    <h3 className={css.itemTitle}>
                      Đầy đủ các{" "}
                      <span className=" blue-text">nghiệp vụ kế toán</span>, đáp
                      ứng <span className=" blue-text">30+ ngành nghề</span>
                    </h3>
                  </div>
                  <div className={css.itemContent}>
                    Đầy đủ 20 nghiệp vụ kế toán theo từ Quỹ, Ngân hàng, Mua
                    hàng, Bán hàng, Kho, Hóa đơn, Thuế, Giá thành,…
                    <br />
                    Đáp ứng 30+ ngành nghề, tất cả các lĩnh vực từ thương mại,
                    dịch vụ, sản xuất, xây lắp
                  </div>
                  <div className={css.SlBtn}>
                    <a className="scroll">Đặt lịch tư vấn</a>
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
                  src={B3}
                  alt="Đáp ứng đầy đủ các nghiệp vụ kế toán"
                  className={css.ImageB3}
                  data-ll-status="loaded"
                />
              </Col>
            </Row>
            <div style={{ padding: "30px", width: "100%" }}></div>
            <Row gutter={[60, 50]} className={css.content}>
              <Col xs={24} md={24} lg={12}>
                <div className={css.solutionText}>
                  <div className={css.itemHead}>
                    <div style={{ width: "80px" }}>
                      <Image
                        decoding="async"
                        src={banner}
                        alt="Amis Kế toán"
                        className={css.imageRepon}
                        data-ll-status="loaded"
                      />
                    </div>
                    <h3 className={css.itemTitle}>
                      Đầy đủ các{" "}
                      <span className=" blue-text">nghiệp vụ kế toán</span>, đáp
                      ứng <span className=" blue-text">30+ ngành nghề</span>
                    </h3>
                  </div>
                  <div className={css.itemContent}>
                    Đầy đủ 20 nghiệp vụ kế toán theo từ Quỹ, Ngân hàng, Mua
                    hàng, Bán hàng, Kho, Hóa đơn, Thuế, Giá thành,…
                    <br />
                    Đáp ứng 30+ ngành nghề, tất cả các lĩnh vực từ thương mại,
                    dịch vụ, sản xuất, xây lắp
                  </div>
                  <div className={css.SlBtn}>
                    <a className="scroll">Đặt lịch tư vấn</a>
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
                  src={B3}
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
