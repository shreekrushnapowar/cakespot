import React from 'react';

const Downloadpdf = (props) => {
const myCurrentDate = new Date('d/m/y');
var today = new Date(),
date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

const  medicineDetails= [
    {
      sr_no: 1,
      id: 0,
      medicine_name: "",
      qty: "1",
      qty_type: "-",
      unit_price: props.cakeamount,
      c_gst: "",
      s_gst: "",
      amount: props.cakeamount,
    },
  ]
 const billGeneratePrint=(customer_name, cakename, phone, medicineDetails)=> {
  var  billDetails="<style> h1{text-align:center;color:red;font-family:Franklin Gothic Medium}</style><h1>CAKE<style> span{color:blue}</style><span>SPOT</span><h1>";
  billDetails+="<style> h2{text-align:center;font-family:Lucida Sans;color:green;text-decoration: underline;border:solid}</style><h2>Make Your Special Day More Special</h2>";
  billDetails+="<style> </style><h3>Address:Sankeshwar<h3>";
  billDetails+="<style> </style><h3>Owner:Vidya Gurav<h3>";
  billDetails+="<style> </style><h3>Contact:8088485604<h3>";
  billDetails+="<style> </style><h3>Instagram Page:cakespot_19<h3>"; 
  
  billDetails+="<h3>BillId:"+props.billid+"</h3>";
  billDetails+="<hr>";
  billDetails +=
      "<style> table{ width:100%;border-collapse:collapse; } td{ padding:5px } th { padding:5px } </style><div>";
    billDetails += "<table border='1'>";
    billDetails += "<tr>";
    billDetails += "<td style='text-align:center' colspan='7'>";
    billDetails += "Bill For Customer";
    billDetails += "</td>";
    billDetails += "</tr>";
    billDetails += "<tr>";
    billDetails += "<td colspan='2'>";
    billDetails += "Customer Name : " + customer_name;
    billDetails += "</td>";
    billDetails += "<td colspan='3'>";
    billDetails += "Cake Name : " + cakename;
    billDetails += "</td>";
    billDetails += "<td colspan='2'>";
    billDetails += "Phone : " + phone;
    billDetails += "</td>";
    billDetails += "</tr>";
    billDetails += "<tr>";
    billDetails += "<th>";
    billDetails += "SR NO .";
    billDetails += "</th>";
    billDetails += "<th>";
    billDetails += "Cake Name .";
    billDetails += "</th>";
    billDetails += "<th>";
    billDetails += "QTY .";
    billDetails += "</th>";
    billDetails += "<th>";
    billDetails += "QTY TYPE .";
    billDetails += "</th>";
    billDetails += "<th>";
    billDetails += "UNIT PRICE .";
    billDetails += "</th>";
    billDetails += "<th>";
    billDetails += "GST .";
    billDetails += "</th>";
    billDetails += "<th>";
    billDetails += "AMOUNT .";
    billDetails += "</th>";
    billDetails += "</tr>";
    var totalamt = 0;

    for (var i = 0; i < medicineDetails.length; i++) {
      billDetails += "<tr>";
      billDetails += "<td>";
      billDetails += "" + medicineDetails[i].sr_no;
      billDetails += "</td>";
      billDetails += "<td>";
      billDetails += "" + cakename;
      billDetails += "</td>";
      billDetails += "<td>";
      billDetails += "" + medicineDetails[i].qty;
      billDetails += "</td>";
      billDetails += "<td>";
      billDetails += "" + medicineDetails[i].qty_type;
      billDetails += "</td>";
      billDetails += "<td>";
      billDetails += "" + medicineDetails[i].unit_price;
      billDetails += "</td>";
      billDetails += "<td>";
      billDetails +=
        "" + medicineDetails[i].c_gst + " " + medicineDetails[i].s_gst;
      billDetails += "</td>";
      billDetails += "<td>";
      billDetails += "" + medicineDetails[i].amount;
      billDetails += "</td>";
      billDetails += "</tr>";

      totalamt += parseInt(medicineDetails[i].amount);
    }

    billDetails += "<tr>";
    billDetails +=
      "<td colspan='6' style='text-align:right;font-weight:bold;background:green;color:white'>";
    billDetails += "Total : " + totalamt;
    billDetails += "<td>";
    billDetails += "</tr>";
    billDetails += "</table>";
    billDetails += "</div>";
    
    billDetails+="<style>h{text-align:center;color:red;}</style><h1>Thank You</h1>";
    billDetails+="<style>p{text-align:center;color:purple;font-family: cursive;;font-size:30px}</style><p>Visit Again</p>";
    billDetails+="<style>h{text-align:center;color:red;}</style><h>Date-"+date+"</h>";
    var mywindow = window.open(
      "",
      "Bill Print",
      "height=650&width=900&top=100&left=100"
    );

    mywindow.document.write(billDetails);
    mywindow.print();
    props.setwp(1);
  }
  return <div className="my-3">
          <button disabled={props.pdf===0} className="btn btn-primary" onClick={()=>{billGeneratePrint(props.customername,props.cakename,props.customernumber,medicineDetails)}}>
              Downloadpdf
          </button>
  </div>;
};

export default Downloadpdf;
