import { useState } from "react";
import css from "./blockForm.module.scss";

import { Form, Input, Row, Col, Select, Checkbox, Result, Button } from "antd";

export const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};
export const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
export function BlockForm() {
  const [form] = Form.useForm();

  const [formData, setFormData] = useState({
    oid: "00D5i00000CIYXO",
    retURL: "google.com",
    first_name: "tin113",
    last_name: "nguyen",
    email: "akumaraito1",
    company: "locl",
    city: "human",
    state: "sss",
  });
  const [load, setLoad] = useState(false);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: any) => {
    setLoad(true);
    event.preventDefault();

    const url =
      "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8";

    fetch(url, {
      method: "POST",
      body: new URLSearchParams(formData),
    })
      .then((response) => {
        console.log(response);
        setLoad(false);
      })
      .catch((error) => {
        setLoad(false);
        console.log(error);

        // Xử lý lỗi (nếu có)
      });
  };
  const onFinish = (values: any) => {
    values.oid="00D5i00000CIYXO"
    values.retURL="#"

    const url =
      "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8";
      fetch(url, {
        method: "POST",
        body: new URLSearchParams(formData),
      }).then((response) => {
        console.log(response);
        setLoad(false);
      })
      .catch((error) => {
        setLoad(false);
        console.log(error);
      });

    console.log(values);
  };
  return (
    <>
    <div className="" style={{width:"50%"}}>
      <Form onFinish={onFinish} form={form} layout="vertical" id="myform">
        <Form.Item
          className={css.nameInput}
          name={"first_name"}
          label="first name"
          rules={[{ required: true }]}
        >
          <Input className={[css.inputDiscount, css.boxInput].join(" ")} />
        </Form.Item>
        <Form.Item
          className={css.nameInput}
          name={"last_name"}
          label="last name"
          rules={[{ required: true }]}
        >
          <Input className={[css.inputDiscount, css.boxInput].join(" ")} />
        </Form.Item>
        <Button
          className={[css.button, css.Submit].join(" ")}
          form="myform"
          htmlType="submit"
        >
          Đâng Nhập
        </Button>
      </Form>
      </div>
    </>
  );
}
