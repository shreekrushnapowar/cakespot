import React from 'react';
import PDFFile from '../Pdffolder/PDFfile';
import { PDFDownloadLink } from '@react-pdf/renderer';
const Renderpdf = (props) => {
    console.log(props);
    console.log(props.customername);
    const onClick=()=>{
      props.setwp(1);
    }
    if(props.pdf===1)
    {
       return <PDFDownloadLink document={<PDFFile name={props.customername} Number={props.customernumber} Amount={props.cakeamount} Amountpaid={props.cakeamount} cakename={props.cakename}/>} fileName="form">
        {({loading})=>((loading)?<div class="spinner-border my-3" role="status">
         <span class="sr-only">Loading...</span>
        </div>:<button className="btn btn-success my-3" onClick={onClick}><i class="fas fa-file-download">download</i></button>)}
      </PDFDownloadLink>
    }
  return <div>

  </div>;
};

export default Renderpdf;
