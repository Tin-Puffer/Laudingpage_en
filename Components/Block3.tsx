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
  B3image1,
  B3image2,
  B3image3,
  B3image4,
  B3image5,
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
                        src={B3icon1}
                        alt="Amis Kế toán"
                        className={css.imageRepon}
                        data-ll-status="loaded"
                      />
                    </div>
                    <h3 className={css.itemTitle}>
                      Dễ dàng <span className=" blue-text">tùy biến</span>
                    </h3>
                  </div>
                  <div className={css.itemContent}>
                    Với các công cụ sẵn có, bạn dễ dàng tùy biến hệ thống chỉ
                    trong thời gian ngắn.
                    <br />
                    Từ thay đổi các quy trình, thêm các mô-đun quản lý, hay xây
                    dựng ứng dụng mới… tất cả đều có thể thực hiện chỉ với một
                    cú nhấp chuột.
                  </div>
                  <div className={css.SlBtn}>
                    <a className="scroll" href="#targetDiv">
                      Đặt lịch tư vấn
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
            <div
              style={{
                padding: "30px",
                width: "100%",
                backgroundColor: "white",
              }}
            ></div>

            <Row gutter={[60, 50]} className={css.content}>
              <Col xs={24} md={24} lg={12}>
                <div className={[css.solutionText,css.solutionTextR].join(' ')}>
                  <div className={css.itemHead}>
                    <div style={{ width: "80px" }}>
                      <Image
                        decoding="async"
                        src={B3icon2}
                        alt="Amis Kế toán"
                        className={css.imageRepon}
                        data-ll-status="loaded"
                      />
                    </div>
                    <h3 className={css.itemTitle}>
                      Nền tảng <span className=" blue-text">thống nhất</span>
                    </h3>
                  </div>
                  <div className={css.itemContent}>
                    Sử dụng một nền tảng cùng cơ sở hạ tầng đồng nhất mang đến
                    nhiều lợi ích cho mọi doanh nghiệp.
                    <br />
                    Thiết kế đa khách hàng của Salesforce mang đến sự an toàn và
                    bảo mật cho dữ liệu khách hàng của doanh nghiệp, không còn
                    lệ thuộc vào sự tham gia trực tiếp của khách.
                  </div>
                  <div className={css.SlBtn}>
                    <a className="scroll" href="#targetDiv">
                      Đặt lịch tư vấn
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
            <div
              style={{
                padding: "30px",
                width: "100%",
                backgroundColor: "white",
              }}
            ></div>

            <Row gutter={[60, 50]} className={css.content}>
              <Col xs={24} md={24} lg={12} className={css.od1}>
                <div className={css.solutionText}>
                  <div className={css.itemHead}>
                    <div style={{ width: "80px" }}>
                      <Image
                        decoding="async"
                        src={B3icon3}
                        alt="Amis Kế toán"
                        className={css.imageRepon}
                        data-ll-status="loaded"
                      />
                    </div>
                    <h3 className={css.itemTitle}>
                      Tương thích{" "}
                      <span className=" blue-text"> đa nền tảng</span>
                    </h3>
                  </div>
                  <div className={css.itemContent}>
                    LogisForce có khả năng tích hợp với các ứng dụng bên thứ ba
                    khác.
                    <br />
                    Nhờ vào định danh mở (API), việc tích hợp giờ đây đã trở nên
                    khả thi hơn khi LogisForce có thể tích hợp với các nền tảng
                    như Google Cloud, Dropbox, Mailchimp,…
                  </div>
                  <div className={css.SlBtn}>
                    <a className="scroll" href="#targetDiv">
                      Đặt lịch tư vấn
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
            <div
              style={{
                padding: "30px",
                width: "100%",
                backgroundColor: "white",
              }}
            ></div>

            <Row gutter={[60, 50]} className={css.content}>
              <Col xs={24} md={24} lg={12}>
                <div className={[css.solutionText,css.solutionTextR].join(' ')}>
                  <div className={css.itemHead}>
                    <div style={{ width: "80px" }}>
                      <Image
                        decoding="async"
                        src={B3icon4}
                        alt="Amis Kế toán"
                        className={css.imageRepon}
                        data-ll-status="loaded"
                      />
                    </div>
                    <h3 className={css.itemTitle}>
                      Công cụ báo cáo{" "}
                      <span className=" blue-text">vượt trội</span>
                    </h3>
                  </div>
                  <div className={css.itemContent}>
                    LogisForce cung cấp nhiều lựa chọn báo cáo giúp người dùng
                    tiết kiệm thời gian và chi phí phân tích dữ liệu.
                    <br />
                    Doanh nghiệp có thể sử dụng công cụ sẵn có của LogisForce để
                    cải thiện vận hành qua các báo cáo chi tiết về các bộ phận
                    như Sales, Cus, Docs, Op, Accounting….
                  </div>
                  <div className={css.SlBtn}>
                    <a className="scroll" href="#targetDiv">
                      Đặt lịch tư vấn
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
            <div
              style={{
                padding: "30px",
                width: "100%",
                backgroundColor: "white",
              }}
            ></div>

            <Row gutter={[60, 50]} className={css.content}>
              <Col xs={24} md={24} lg={12} className={css.od1}>
                <div className={css.solutionText}>
                  <div className={css.itemHead}>
                    <div style={{ width: "80px" }}>
                      <Image
                        decoding="async"
                        src={B3icon5}
                        alt="Amis Kế toán"
                        className={css.imageRepon}
                        data-ll-status="loaded"
                      />
                    </div>
                    <h3 className={css.itemTitle}>
                      <span className=" blue-text"> An toàn </span> và{" "}
                      <span className=" blue-text"> bảo mật</span>
                    </h3>
                  </div>
                  <div className={css.itemContent}>
                    Được xây dựng trên nền tảng Salesforce, LogisForce là phần
                    mềm dạng dịch vụ cung cấp chiến lược bảo mật dữ liệu linh
                    hoạt và dễ dàng.
                    <br />
                    Với các tính năng bảo mặt có sẵn, các chủ doanh nghiệp và
                    quản lý có thể chỉ định những ai có quyền truy cập thông tin
                    mật của công ty.
                  </div>
                  <div className={css.SlBtn}>
                    <a className="scroll" href="#targetDiv">
                      Đặt lịch tư vấn
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
          </Row>
        </div>
      </div>
    </>
  );
}
