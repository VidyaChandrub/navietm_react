import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './TabsForm.css'
import { useState } from 'react';
import { BsDiagram3 } from "react-icons/bs";
import { TbSettingsStar } from "react-icons/tb";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { RiFilePdf2Fill } from "react-icons/ri";

function TabsForm() {
    const [activeTab, setActiveTab] = useState('tab1');

    const handletabChange = (tab) =>{
        setActiveTab(tab);
    }
  return (
   <div className="tab-container">
    <div className="tabs">
        <button className={activeTab === 'tab1'? 'active-tab': ''}
        onClick={()=>handletabChange('tab1')}
        >
            <TbSettingsStar size={20}/> Setting
        </button>
        <button className={activeTab === 'tab2'? 'active-tab': ''}
        onClick={()=>handletabChange('tab2')}
        >
            <BsDiagram3 size={20}/> Navigation
        </button>
        <button className={activeTab === 'tab3'? 'active-tab': ''}
        onClick={()=>handletabChange('tab3')}
        >
            <MdOutlinePublishedWithChanges size={20}/> Publish
        </button>
        <button className={activeTab === 'tab4'? 'active-tab': ''}
        onClick={()=>handletabChange('tab4')}
        >
            <RiFilePdf2Fill size={20}/> Export PDF
        </button>
    </div>
    <div className="card-container">
        <div className="card">
        {activeTab === 'tab1' && (
            <div>
                <h2>Setting</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste tempore veniam expedita debitis id! Nihil cum exercitationem fugiat nesciunt facere dolores quasi, eum consequatur, perferendis doloribus natus modi ipsa dicta.
                </p>
            </div>
        )}

        {activeTab === 'tab2' && (
            <div>
                <h2>Setting</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste tempore veniam expedita debitis id! Nihil cum exercitationem fugiat nesciunt facere dolores quasi, eum consequatur, perferendis doloribus natus modi ipsa dicta.
                </p>
            </div>
        )}

        {activeTab === 'tab3' && (
            <div>
                <h2>Setting</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste tempore veniam expedita debitis id! Nihil cum exercitationem fugiat nesciunt facere dolores quasi, eum consequatur, perferendis doloribus natus modi ipsa dicta.
                </p>
            </div>
        )}

        {activeTab === 'tab4' && (
            <div>
                <h2>Pdf</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste tempore veniam expedita debitis id! Nihil cum exercitationem fugiat nesciunt facere dolores quasi, eum consequatur, perferendis doloribus natus modi ipsa dicta.
                </p>
            </div>
        )}
        </div>
        
    </div>
   </div>
  );
}

export default TabsForm;

{/* <Tabs
defaultActiveKey="Setting"
id="justify-tab-example"
className="mb-3"
justify
>
<Tab className='setting' eventKey="setting" title="Setting">
  Tab content for Home
</Tab>
<Tab eventKey="navigation" title="Navigation">
  Tab content for Profile
</Tab>
<Tab eventKey="publish" title="Publish">
  Tab content for Loooonger Tab
</Tab>
<Tab eventKey="export" title="Export Pdf">
  Tab content for Contact
</Tab>
</Tabs> */}