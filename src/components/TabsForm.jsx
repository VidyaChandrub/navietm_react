
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './TabsForm.css'
import '../index.css'
import React, { useState } from 'react';
import { BsDiagram3 } from "react-icons/bs";
import { TbSettingsStar } from "react-icons/tb";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { RiFilePdf2Fill } from "react-icons/ri";
import Settings from './Settings';
import Navigation from './Navigation';
import Publish from './Publish';
import Button from 'react-bootstrap/Button';
import Exportpdf from './Exportpdf';
function TabsForm() {
    const [activeTab, setActiveTab] = useState('tab1');

    const handletabChange = (tab) =>{
        setActiveTab(tab);
    }
    

  return (
   <div className="tab-container" >
    <div className="tabs">
        <button className={activeTab === 'tab1'? 'active-tab': ''} 
        onClick={()=>handletabChange('tab1')}
        >
            <TbSettingsStar size={20}/> SETTING
        </button>
        <button className={activeTab === 'tab2'? 'active-tab2': 'navigation_btn'}
        onClick={()=>handletabChange('tab2')}
        >
            <BsDiagram3 size={20}/> NAVIGATION
        </button>
        <button className={activeTab === 'tab3'? 'active-tab3': 'publish_btn'}
        onClick={()=>handletabChange('tab3')}
        >
            <MdOutlinePublishedWithChanges size={20}/> PUBLISH
        </button>
        <button className={activeTab === 'tab4'? 'active-tab4': 'export_pdf'}
        onClick={()=>handletabChange('tab4')}
        >
            <RiFilePdf2Fill size={20}/> EXPORT PDF
        </button>
    </div>
    <div className="card-container">
        <div className={activeTab ? 'card' : ''}>
        {activeTab === 'tab1' && (
            <div className='card-one'>
                <Settings />
            </div>
        )}

        {activeTab === 'tab2' && (
            <div className='card-nav'>
                <Navigation/>
            </div>
        )}

        {activeTab === 'tab3' && (
            <div className='card-publish'>
                <Publish />

            </div>
        )}

        {activeTab === 'tab4' && (
            <div className='card-pdf'>
                <Exportpdf />
            </div>
        )}
        </div>
        
    </div>
   </div>
  );
}

export default TabsForm;

