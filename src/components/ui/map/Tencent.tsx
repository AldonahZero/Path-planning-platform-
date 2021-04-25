import React,{Component} from 'react';
import data from '../../../Amap_PathPlanning/test/index.js';
// import { ToolBarControl } from '@uiw/react-amap';
import {Map,MouseTool} from 'react-amap';

class Data extends Component {
    render() {
        return (
            <div style={{width: '100%', height: '500px'}}>
        <iframe
        title="resg"
        srcDoc={data}
        style={{ width: '100%', border: '0px', height: '1100px' }}
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        scrolling="auto"
      />

     {/* <Map amapkey={'788e08def03f95c670944fe2c78fa76f'}
      center={{longitude: 116.212034, latitude: 39.933657}}
      zoom={11}/> */}
    </div>
        )
    }
}
export default Data;
