/**
 * Created by Hitigerzzz on 2017/12/8.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Form, Button, Modal, Upload, Input, Icon, Select } from 'antd';
import styles from './PictureUploadModal.css';

const TextArea = Input.TextArea;
const Option = Select.Option;
const FormItem = Form.Item;

class PictureUploadModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previewVisible: false,
      previewImage: '',
      fileList: '',
      pictureUrl: '',
    };
  }
  handleCancel = () => this.setState({ previewVisible: false });
  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };
  handleChange = ({ fileList }) => {
    this.setState({ fileList });
    if (this.state.fileList[0]) {
      const response = this.state.fileList[0].response;
      if (fileList.length === 1 && response) {
        console.log('handleChange/url', response.data.pictureUrl);
        this.setState({
          pictureUrl: response.data.pictureUrl,
        });
      }
    } else { // 删除图片
      this.setState({
        pictureUrl: '',
      });
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const data = {
          title: values.title,
          category: values.category,
          description: values.description,
          pictureUrl: this.state.pictureUrl,
        };
        this.props.dispatch({
          type: 'picture/uploadPicture',
          payload: data,
        });
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const { visible, setModalVisible } = this.props;
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div className={styles.upload_button}>
        <Icon type="plus" style={{ fontSize: 50, color: '#79589f' }} />
        <div className={styles.upload_text}>
          <span>Click</span> or <span>drag file</span>
          <br />to this area to upload
        </div>
      </div>
    );
    return (
      <Modal
        style={{ top: 50 }}
        visible={visible}
        footer={null}
        width={'50%'}
        onCancel={() => {
          this.setState({
            previewVisible: false,
            previewImage: '',
            fileList: '',
            pictureUrl: '',
          });
          setModalVisible(false);
        }}
      >
        <Form onSubmit={this.handleSubmit} className={styles.container}>
          <div className={styles.left}>
            {getFieldDecorator('upload', {
              rules: [{ required: true, message: 'Please upload photo!' }],
            })(
              <Upload
                action="/api/img/preUpload"
                listType="picture-card"
                fileList={fileList}
                onPreview={this.handlePreview}
                onChange={this.handleChange}
                className={styles.picture}
              >
                {fileList.length >= 1 ? null : uploadButton}
              </Upload>,
              )}
            <Modal
              visible={previewVisible}
              footer={null}
              onCancel={this.handleCancel}
              wrapClassName={styles.center_modal}
            >
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </div>
          <div className={styles.right}>
            <div className={styles.input_area}>
              <h3>Title</h3>
              <FormItem>
                {getFieldDecorator('title', {
                  rules: [{ required: true, message: 'Please input photo title!' }],
                })(
                  <Input />,
                )}
              </FormItem>
              <h3>Category</h3>
              <FormItem>
                {getFieldDecorator('category', {
                  initialValue: 'other',
                  rules: [{ required: true, message: 'Please choose photo category!' }],
                })(
                  <Select style={{ width: '100%' }} size={'large'}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>,
                )}
              </FormItem>
              <h3>Description</h3>
              <FormItem>
                {getFieldDecorator('description')(
                  <TextArea rows={4} />,
                )}
              </FormItem>
            </div>
            <Button type="primary" htmlType="submit" className={styles.submit_button}>Submit</Button>
          </div>
        </Form>
      </Modal>
    );
  }
}
const WrappedNormalForm = Form.create()(PictureUploadModal);
WrappedNormalForm.propTypes = {
  visible: PropTypes.bool.isRequired,
  setModalVisible: PropTypes.func.isRequired,
};

export default connect()(WrappedNormalForm);
