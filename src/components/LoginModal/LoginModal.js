/**
 * Created by Hitigerzzz on 2017/11/18.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button, Checkbox, Modal } from 'antd';
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
  render() {
    const { visible, setModalVisible } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <Modal
        visible={visible}
        footer={null}
        width={430}
        wrapClassName={styles.modal}
        onCancel={() => setModalVisible(false)}
      >
        <Form onSubmit={this.handleSubmit} className={styles.login_form}>
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
              <Input prefix={<Icon type="lock" style={{ fontSize: 18, color: '#79589F' }} />} type="password" placeholder="Password" />,
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className={styles.login_form_button}>
              Log in
            </Button>
          </FormItem>
        </Form>
        <div className={styles.footer}>
          <a href="">Forgot password</a>
          <a href="">Sign Up</a>
        </div>
      </Modal>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(LoginModal);
WrappedNormalLoginForm.propTypes = {
  visible: PropTypes.bool.isRequired,
  setModalVisible: PropTypes.func.isRequired,
};
export default WrappedNormalLoginForm;
