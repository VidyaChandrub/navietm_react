
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Form, Input, Radio } from 'antd';
import { LuImagePlus } from "react-icons/lu";
import { Upload } from 'antd';
import { useState } from 'react';
import '../index.css'
import Button from 'react-bootstrap/Button';
import Navigation from './Navigation';



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
const Settings = ({onPrev, onNext }) => {
  
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
                <MyFormItem name="companyname" label="Company Name" className='fw-bold'>
                  <Input placeholder='Enter company name' className='' />
                </MyFormItem>
                <MyFormItem name="Name" label="Name" className='fw-bold'>
                  <Input placeholder='Enter name' className='' />
                </MyFormItem>
              </MyFormItemGroup>
              <MyFormItem name="email" label="Email" className='fw-bold'>
                <Input placeholder='Enter Email' className='' />
              </MyFormItem>
              <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile} className='fw-bold'>
                <Upload action="/upload.do" listType="picture-card">
                  <button
                    style={{
                      border: 0,
                      background: 'none',
                      alignItems: 'center'
                    }}
                    type="button"
                  >
                    <LuImagePlus />
                    <div
                      style={{
                        marginTop: -50,
                      }}
                    >
                    </div>
                  </button>
                </Upload>
              </Form.Item>
            </MyFormItemGroup>
          </Form>
        </div>
        <div className='col-lg-6 col-sm-12 col-12'>
          <Form name="form_item_path" layout="vertical" onFinish={onFinish} className='p-4'>
            <MyFormItemGroup>
              <MyFormItem name="file" label="File Location" className='fw-bold'>
                <Input type='file' placeholder='xml file path' className='mb-3 ' />
                <Input type='file' placeholder='xml file path' className='' />
                <p className='text-secondary pt-2 '>(video, pdf, 3D file accepted *)</p>
              </MyFormItem>
              <MyFormItem name="navigation" label="Auto Navigation" className='fw-bold pt-2'>
                <Radio.Group onChange={onChange} value={value} className=''>
                  <Radio value={1}>Enable</Radio>
                  <Radio value={2}>Disable</Radio>
                </Radio.Group>
              </MyFormItem>
            </MyFormItemGroup>
          </Form>

        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-sm-12 col-12"></div>
        <div className="col-lg-6 col-sm-12 col-12 ">
          <div className="d-flex justify-content-end gap-2">
            <Button as="input" variant="outline-primary" type="reset" value="Reset" className='text-dark' onClick={onPrev}/>{' '}
            <Button as="input" type="submit" value="Next" className='text-white' onClick={onNext}/>
            
          </div>
        </div>
      </div>
    </div>


  );
};
export default Settings;