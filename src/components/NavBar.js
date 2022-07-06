import React, { useState } from 'react';
import { Button,Modal,Form, Checkbox,Input} from "antd";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "antd/dist/antd.css";

 function NavBar() {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
    return (
      <>
        <Navbar collapseOnSelect expand='lg' bg="dark" variant="dark">
          <Container>
          <Navbar.Brand>Web sity</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
            <Nav.Link><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link><Link to='/gallery'>Gallery</Link></Nav.Link>
            <Nav.Link><Link to='/about'>About</Link></Nav.Link>
            
          </Nav>
          <Nav>
            <Button type='primary' style ={{marginRight: 10}} onClick ={showModal}>Login</Button>
            <Button type='primary'onClick ={showModal}>Logout</Button>
          </Nav>
          </Navbar.Collapse> 
          </Container>
        </Navbar>
       <Modal title ="Log in" visible ={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        
       <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
        

       </Modal>
      </>
    );}
    export default NavBar;