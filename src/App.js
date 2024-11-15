import React from "react";
import { Row, Col, Form, Input, Button, Card, Select, Image } from "antd";
import './App.css';

const { TextArea } = Input;

function App() {
  return (
    <div className="container">
      <Row gutter={[24, 24]} className="form-testimonial-row">
        {/* Form Section */}
        <Col xs={24} md={10}>
          <Card>
            <h2>Let's work together</h2>
            <p>
              We're a full-service agency dedicated to helping you go from MVP to industry leader. Let our team bring your goals to life.
            </p>
            <Form layout="vertical" name="contact-form" initialValues={{ remember: true }}>
              <Row gutter={[12, 12]}>
                <Col span={12}>
                  <Form.Item
                    label="Full name"
                    name="first_name"
                    rules={[{ required: true, message: "Please enter your Full name" }]}
                    
                  >
                    <Input placeholder="Full name" style={{borderRadius: "5px"}} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Last name"
                    name="last_name"
                    rules={[{ required: true, message: "Please enter your last name" }]}
                  >
                    <Input placeholder="Last name" style={{borderRadius: "5px"}} />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: "Please enter your email" }]}
              >
                <Input placeholder="Email address" style={{borderRadius: "5px"}}/>
              </Form.Item>
              <Form.Item label="Website" name="website">
                <Input placeholder="Website" style={{borderRadius: "5px"}} />
              </Form.Item>
              <Form.Item label="Phone number" name="phone">
                <Input  style={{borderRadius: "5px"}} addonBefore={<Select defaultValue="US" style={{ width: 60 }}><Select.Option value="US">+1</Select.Option></Select>} placeholder="(555) 000-0000" />
              </Form.Item>
              <Form.Item label="How can we help?" name="help">
                <TextArea  style={{borderRadius: "5px"}}placeholder="A brief summary of what you need help with, expected timelines, preferred communication method, etc." />
              </Form.Item>
              <Button type="primary" htmlType="submit" block>
                Continue
              </Button>
            </Form>
          </Card>
        </Col>

        {/* Testimonial Section */}
        <Col xs={24} md={14} >
          
              <Image preview={false} width="100%" height="100%"
              src="https://static8.depositphotos.com/1518767/1028/i/450/depositphotos_10288449-stock-photo-young-businesswoman-using-headset.jpg" alt="Testimonial" />
          
        </Col>
      </Row>
    </div>
  );
}

export default App;
