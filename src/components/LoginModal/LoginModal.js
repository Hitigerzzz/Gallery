/**
 * Created by Hitigerzzz on 2017/11/18.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button, Modal } from 'antd';
import styles from './LoginModal.css';

const FormItem = Form.Item;

class LoginModal extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  gotoSignup = () => {
    this.signup.style.display = 'block';
    this.login.style.display = 'none';
  };
  gotoLogin = () => {
    this.login.style.display = 'block';
    this.signup.style.display = 'none';
  };

  render() {
    const { visible, setModalVisible, type } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <Modal
        visible={visible}
        footer={null}
        width={430}
        wrapClassName={styles.modal}
        onCancel={() => setModalVisible(false)}
      >
        <div className={styles.flip_box}>
          <div
            className={`${styles.login} ${styles.side} ${type === 'login' ? '' : styles.invisible}`}
            ref={(ref) => {
              this.login = ref;
            }}
          >
            <Form onSubmit={this.handleSubmit} className={styles.form}>
              <h3>Log in to your account</h3>
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ fontSize: 18, color: '#79589F' }} />} placeholder="Username" />,
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ fontSize: 18, color: '#79589F' }} />} type="password"
                    placeholder="Password"
                  />,
                )}
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit" className={styles.form_button}>
                  Log in
                </Button>
              </FormItem>
            </Form>
            <div className={styles.footer}>
              <a href="">Forgot password</a>
              <a onClick={this.gotoSignup}>Sign Up</a>
            </div>
          </div>
          <div
            className={`${styles.signup} ${styles.side} ${type === 'signup' ? '' : styles.invisible}`}
            ref={(ref) => {
              this.signup = ref;
            }}
          >
            <Form onSubmit={this.handleSubmit} className={styles.form}>
              <h3>Join Us!</h3>
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ fontSize: 18, color: '#79589F' }} />} placeholder="Username" />,
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ fontSize: 18, color: '#79589F' }} />} type="password"
                    placeholder="Password"
                  />,
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ fontSize: 18, color: '#79589F' }} />} type="password"
                    placeholder="Confirm Password"
                  />,
                )}
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit" className={styles.form_button}>
                  Sign up
                </Button>
              </FormItem>
            </Form>
            <div className={styles.footer}>
              <span />
              <div>
                <span>Already have an account?</span>
                <a onClick={this.gotoLogin}>Log in</a>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(LoginModal);
WrappedNormalLoginForm.propTypes = {
  visible: PropTypes.bool.isRequired,
  setModalVisible: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
export default WrappedNormalLoginForm;
