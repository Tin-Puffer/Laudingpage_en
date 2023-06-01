import css from "./block1.module.scss";
import { Col, Row } from "antd";
import Image from "next/image";
import { B1L, banner } from "../public/staticImage/index";
export function scrollToDiv() {
  var targetDiv = document.getElementById("targetDiv");
  targetDiv?.scrollIntoView({ behavior: "smooth" });
}
export function Block1() {
  return (
    <>
      <div className={css.container} style={{padding:"15px 0"}}>
        <div className={css.content}>
          <Row className={css.RowFix}>
            <Col className={css.colCustom} xs={24} md={18} lg={12}>
              <div className={css.contentRight}>
                <div className={css.title}>HỆ THỐNG LOGISFORCE</div>
                <h1 className={css.title2}>
                  Dễ dàng kết nối các phòng ban và làm việc trên một nền tảng
                  duy nhất
                </h1>
                <div className={css.decription}>
                  Được xây dựng trên nền tảng Salesforce. <br />
                  LogisForce với phân hệ đa dạng và tích hợp nhiều nền tảng,{" "}
                  <br />
                  giúp nâng cao hiệu quả{" "}
                  <span className="nowrap">quản lý doanh nghiệp.</span>
                </div>
                <div className={css.grBtn}>
                  <a className={css.bntFree} href="#targetDiv">
                    Dùng thử miễn phí
                  </a>
                  <a className={css.bntTv}  href="#targetDiv">
                    Đăng ký tư vấn
                  </a>
                  <a className={css.btnBuy}  href="#targetDiv">
                    Mua ngay
                  </a>
                </div>
              </div>
            </Col>
            <Col className={css.colCustom} xs={24} md={24} lg={12}>
              <div className={css.contentLeft}>
                <Image
                  loading="lazy"
                  src={B1L}
                  alt=" Kế toán"
                  className={css.imageright}
                  data-ll-status="loaded"
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
