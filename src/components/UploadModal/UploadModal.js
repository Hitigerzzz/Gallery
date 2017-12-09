/**
 * Created by Hitigerzzz on 2017/12/8.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Upload, Input, Icon, Select } from 'antd';
import styles from './UploadModal.css';

const { TextArea } = Input;
const Option = Select.Option;

class UploadModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDraggerVisible: true,
      previewVisible: false,
      previewImage: '',
      fileList: [{
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: '/api/img/user/jj.jpg',
      }, {
        uid: -2,
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }, {
        uid: -3,
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }, {
        uid: -4,
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }, {
        uid: -5,
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }, {
        uid: -6,
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }, {
        uid: -7,
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }, {
        uid: -8,
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }, {
        uid: -9,
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }, {
        uid: -10,
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }, {
        uid: -11,
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }],
    };
  }

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });

  render() {
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
        width={'90%'}
        onCancel={() => setModalVisible(false)}
      >
        <div className={styles.container}>
          <div className={styles.left}>
            <Upload
              action="//jsonplaceholder.typicode.com/posts/"
              listType="picture-card"
              fileList={fileList}
              onPreview={this.handlePreview}
              onChange={this.handleChange}
              className={styles.picture_wall}
            >
              {uploadButton}
            </Upload>
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
              <Input />
              <h3>Category</h3>
              <Select defaultValue="lucy" style={{ width: '100%' }} size={'large'}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
              <h3>Description</h3>
              <TextArea rows={4} />
            </div>
            <Button type="primary" className={styles.submit_button}>Submit</Button>
          </div>
        </div>
      </Modal>
    );
  }
}

UploadModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  setModalVisible: PropTypes.func.isRequired,
};

export default UploadModal;
