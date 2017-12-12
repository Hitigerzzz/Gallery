/**
 * Created by Hitigerzzz on 2017/12/9.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, Modal } from 'antd';
import { connect } from 'dva';
import styles from './GalleryEditModal.css';

const FormItem = Form.Item;

class GalleryEditModal extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const data = {
          title: values.title,
          description: values.description,
        };
        this.props.dispatch({
          type: 'user/createGallery',
          payload: data,
        });
        // 清空表单数据
        this.props.form.resetFields();
      }
    });
  };

  render() {
    const { visible, setModalVisible, mode } = this.props;
    const { getFieldDecorator } = this.props.form;
    const isCreate = mode === 'create';
    return (
      <Modal
        visible={visible}
        footer={null}
        width={430}
        wrapClassName={styles.modal}
        onCancel={() => setModalVisible(false)}
      >
        <Form onSubmit={this.handleSubmit} className={styles.form}>
          <h1>{isCreate ? 'Create Gallery' : 'Edit Gallery'}</h1>
          <h3>Title</h3>
          <FormItem>
            {getFieldDecorator('title', {
              rules: [{ required: true, message: 'Please input gallery title!' }],
            })(
              <Input />,
            )}
          </FormItem>
          <h3>Description</h3>
          <FormItem>
            {getFieldDecorator('description', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input.TextArea rows={10} />,
            )}
          </FormItem>
          <div className={styles.form_actions}>
            {
              isCreate ?
                <div>
                  <Button id={styles.cancel_button} onClick={() => { setModalVisible(false); }}>
                    Cancel
                  </Button>
                  <Button type="primary" htmlType="submit" className={styles.form_button}>
                    Create
                  </Button>
                </div>
                :
                <div>
                  <Button id={styles.delete_button}>
                    Delete this Gallery
                  </Button>
                  <Button type="primary" htmlType="submit" className={styles.form_button}>
                    Save
                  </Button>
                </div>
            }
          </div>
        </Form>
      </Modal>
    );
  }
}

const WrappedNormalForm = Form.create()(GalleryEditModal);
WrappedNormalForm.propTypes = {
  visible: PropTypes.bool.isRequired,
  setModalVisible: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};
export default connect()(WrappedNormalForm);
