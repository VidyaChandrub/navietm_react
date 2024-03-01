import React from 'react'
import { Card } from 'antd';
import '../components/Navigation.css'
import { Input } from 'antd';
import { Button,message, Upload, Flex } from 'antd';
import { LuImagePlus } from "react-icons/lu";


const props = {
  name: 'file',
  action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

function Exportpdf() {
  return (
    <div className='container p-4'>
        <div className="row">
            <div className="col-lg-8 col-sm-12 col-12">
            <Card style={{height:350, backgroundColor:'rgba(241, 242, 241, 0.5)'}}>
              <div className='d-flex justify-content-between mobile_view'>
              <Input placeholder="File Location" style={{backgroundColor: 'rgba(239, 239, 239, 1)'}}/> 
              <Button type="primary" className='add-btn fw-medium'>Add New +</Button>
              </div>
           
            <ul className='list-type'>
            <li>Demo xml
              <ul className='list-type'>
                <li>Demo1 xml</li>
                <li>Demo2 xml</li>
                <li>Demo3 xml</li>
              </ul>
            </li>
            <li>Demo second xml
              <ul className='list-type'>
                <li>Demo1 xml</li>
                <li>Demo2 xml</li>
                <li>Demo3 xml</li>
              </ul>
            </li>
            </ul>
            </Card>
            </div>
            <div className="col-lg-4 col-sm-12 col-12">
            {/* <Card style={{height:350}}>
                <p className=' m-5 p-5'>Preview Here</p>
            </Card> */}
            <Upload {...props} className='upload_btn'>
              <Button className=' pt-4 pb-5'> Upload cover page  {<LuImagePlus />}</Button>
            </Upload>
            </div>
        </div>
        <div className="row">
          <div className="col-lg-8 col-sm-12 col-12">
         
          </div>
          <div className="col-lg-4 col-sm-12 col-12">
          <Button type="primary" className='add-btn float-end'> ExportPDF </Button>
          </div>
        </div>
    </div>
  )
}

export default Exportpdf