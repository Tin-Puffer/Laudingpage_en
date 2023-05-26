import css from "./block2.module.scss";
import cssB1 from "./block1.module.scss";
import { Col, Row } from "antd";
import Image from "next/image";
import { banner } from "../public/staticImage/index";
export function Block2() {
  return (
    <>
      <div className={css.reason}>
        <div className={cssB1.content}>
          <Row>
            <Col span={24}>
              <h2 className={css.titleh2}>
                Trải nghiệm đầy đủ các tính năng cao cấp LogisForce{" "}
              </h2>
            </Col>
            <Row
              className={css.reasonWrap}
              gutter={[40, 30]}
              style={{ margin: 0 }}
            >
              <Col xs={24} sm={24} md={12}>
                <div className={css.reasonItem}>
                  <div className={css.reasonItemImg}>
                    <Image
                      decoding="async"
                      src={banner}
                      alt="Nâng cao năng suất"
                      className={css.imgResponsive}
                      data-ll-status="loaded"
                    />
                  </div>
                  <div className={css.reasonItemContent}>
                    <div className={css.Iitle}>
                      Nâng cao{" "}
                      <span style={{ color: "#4262ef" }}>năng suất</span>
                    </div>
                    <div className={css.des}>
                      <div>Tự động hạch toán từ: Hóa đơn, Bảng Excel…</div>
                      <div>Tự động tổng hợp báo cáo thuế, BCTC chính xác, </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <div className={css.reasonItem}>
                  <div className={css.reasonItemImg}>
                    <Image
                      decoding="async"
                      src={banner}
                      alt="Nâng cao năng suất"
                      className={css.imgResponsive}
                      data-ll-status="loaded"
                    />
                  </div>
                  <div className={css.reasonItemContent}>
                    <div className={css.Iitle}>
                      Nâng cao{" "}
                      <span style={{ color: "#4262ef" }}>năng suất</span>
                    </div>
                    <div className={css.des}>
                      <div>Tự động hạch toán từ: Hóa đơn, Bảng Excel…</div>
                      <div>Tự động tổng hợp báo cáo thuế, BCTC chính xác, </div>
                    </div>
                  </div>
                </div>
              </Col><Col xs={24} sm={24} md={12}>
                <div className={css.reasonItem}>
                  <div className={css.reasonItemImg}>
                    <Image
                      decoding="async"
                      src={banner}
                      alt="Nâng cao năng suất"
                      className={css.imgResponsive}
                      data-ll-status="loaded"
                    />
                  </div>
                  <div className={css.reasonItemContent}>
                    <div className={css.Iitle}>
                      Nâng cao{" "}
                      <span style={{ color: "#4262ef" }}>năng suất</span>
                    </div>
                    <div className={css.des}>
                      <div>Tự động hạch toán từ: Hóa đơn, Bảng Excel…</div>
                      <div>Tự động tổng hợp báo cáo thuế, BCTC chính xác, </div>
                    </div>
                  </div>
                </div>
              </Col><Col xs={24} sm={24} md={12}>
                <div className={css.reasonItem}>
                  <div className={css.reasonItemImg}>
                    <Image
                      decoding="async"
                      src={banner}
                      alt="Nâng cao năng suất"
                      className={css.imgResponsive}
                      data-ll-status="loaded"
                    />
                  </div>
                  <div className={css.reasonItemContent}>
                    <div className={css.Iitle}>
                      Nâng cao{" "}
                      <span style={{ color: "#4262ef" }}>năng suất</span>
                    </div>
                    <div className={css.des}>
                      <div>Tự động hạch toán từ: Hóa đơn, Bảng Excel…</div>
                      <div>Tự động tổng hợp báo cáo thuế, BCTC chính xác, </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Col span={24} className={css.buttonTry}>
              <a href="#">Dùng thử miễn phí</a>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
