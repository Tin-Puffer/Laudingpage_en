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
      <div className={css.container} style={{ padding: "15px 0" }}>
        <div className={css.content}>
          <Row className={css.RowFix}>
            <Col className={css.colCustom} xs={24} md={18} lg={14}>
              <div className={css.contentRight}>
                <div className={css.title}>LOGISFORCE SYSTEM</div>
                <h1 className={css.title2}>
                  Connect departments quickly and easily
                </h1>
                <div className={css.decription}>
                  Built on the Salesforce platform,
                  <br />
                  LogisForce with diverse modules and integrated multiple
                  platforms helps enhance. business management efficiency.{" "}
                  <br />
                </div>
                <div className={css.grBtn}>
                  <a className={css.bntFree} href="#targetDiv">
                    Get started for free
                  </a>
                  <a className={css.bntTv} href="#targetDiv">
                    Sign up for a consultation
                  </a>
                  <a className={css.btnBuy} href="#targetDiv">
                    Buy Now
                  </a>
                </div>
              </div>
            </Col>
            <Col className={css.colCustom} xs={24} md={24} lg={10}>
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
