
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Form, Input, Radio, Upload } from 'antd';
import { useState } from 'react';
import template from "../components/assets/template.png"
import Button from 'react-bootstrap/Button';
import '../index.css'
import '../components/Navigation.css'

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const MyFormItemContext = React.createContext([]);
function toArr(str) {
  return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);
  return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};
const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...props} />;
};
const Publish = ({ onNext, onPrev }) => {
  const onFinish = (value) => {
    console.log(value);
  };

  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6 col-sm-12 col-12'>
          <Form name="form_item_path" layout="vertical" onFinish={onFinish} className='p-4'>
            <MyFormItemGroup prefix={['user']}>
              <MyFormItemGroup prefix={['name']}>
                <MyFormItem name="file" label="Homepage Template" className='fw-bold'>
                  <Input placeholder='html file' className='mb-3 input-container ' />
                  <Input placeholder='images folder' className='input-container' width={351} />
                  <p className='text-secondary pt-2 '>(video, pdf, 3D file accepted *)</p>

                  <p>Or</p>
                </MyFormItem>
               
                <MyFormItem name="file" label="Standard Template" className='fw-bold '>
                  <div className='d-flex justify-content-start gap-1'>
                  <Form.Item label="" valuePropName="fileList" getValueFromEvent={normFile} className='fw-bold'>
                    <Upload action="/upload.do" listType="picture-card">
                      <button
                        style={{
                          border: 0,
                          background: 'none',
                          alignItems: 'center'
                        }}
                        type="button"
                      >
                        <img src={template} alt="template" className=''/>
                       
                      </button>
                    </Upload>
                  </Form.Item>
                  <Form.Item label="" valuePropName="fileList" getValueFromEvent={normFile} className='fw-bold'>
                    <Upload action="/upload.do" listType="picture-card">
                      <button
                        style={{
                          border: 0,
                          background: 'none',
                          alignItems: 'center'
                        }}
                        type="button"
                      >
                        <img src={template} alt="template" className=''/>
                       
                      </button>
                    </Upload>
                  </Form.Item> 
                  </div>   
                </MyFormItem>
                
              </MyFormItemGroup>
            </MyFormItemGroup>
          </Form>
        </div>
        <div className='col-lg-6 col-sm-12 col-12'>
          <Form name="form_item_path" layout="vertical" onFinish={onFinish} className='p-4'>
            <MyFormItemGroup>
              <MyFormItem name="navigation" label="File Security" className='fw-bold pt-2'>
                <Radio.Group onChange={onChange} value={value} className=''>
                  <Radio value={1} className='fs-small'>Secured</Radio>
                  <Radio value={2}>Unsecured</Radio>
                </Radio.Group>
              </MyFormItem>

              <MyFormItem name="navigate" label="Type of delivery" className='fw-bold pt-2'>
                <Radio.Group onChange={onChange} value={value} className=''>
                  <Radio value={1}>Draft</Radio>
                  <Radio value={2}>Final</Radio>
                </Radio.Group>
              </MyFormItem>
            </MyFormItemGroup>
          </Form>

        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-sm-12 col-12"></div>
        <div className="col-lg-6 col-sm-12 col-12 p-4">
          <div className="d-flex justify-content-end gap-2 mobile_view_btns">
            <Button as="input" variant="outline-primary" type="reset" value="Reset" className='text-dark'  onClick={onPrev}/>{' '}
            <Button as="input" type="submit" value="Submit" className='text-white'  onClick={onNext}/>
          </div>


        </div>
      </div>
    </div>


  );
};
export default Publish;