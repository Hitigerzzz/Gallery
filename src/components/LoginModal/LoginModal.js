/**
 * Created by Hitigerzzz on 2017/11/18.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import styles from './LoginModal.css';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    const isLoginVisible = this.props.mode === 'login';
    this.state = {
      isLoginVisible,
      isRegisterVisible: !isLoginVisible,
    };
  }
  gotoRegister = () => {
    this.setState({
      isLoginVisible: false,
      isRegisterVisible: true,
    });
  };
  gotoLogin = () => {
    this.setState({
      isLoginVisible: true,
      isRegisterVisible: false,
    });
  };

  render() {
    const { visible, setModalVisible } = this.props;
    const isLoginVisible = this.state.isLoginVisible;
    const isRegisterVisible = this.state.isRegisterVisible;
    return (
      <Modal
        visible={visible}
        footer={null}
        width={430}
        wrapClassName={styles.modal}
        onCancel={() => setModalVisible(false)}
      >
        <div className={styles.flip_box}>
          <LoginForm visible={isLoginVisible} goTo={this.gotoRegister} />
          <RegisterForm visible={isRegisterVisible} goTo={this.gotoLogin} />
        </div>
      </Modal>
    );
  }
}

LoginModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  setModalVisible: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};
export default LoginModal;
