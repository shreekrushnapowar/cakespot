import React from "react";
import {Page,Text,Image,Document,StyleSheet,View,Line,Svg,Table} from '@react-pdf/renderer';
// import cake from '../images/pdficon.jpg'
import cake from '../../src/images/pdficon.jpeg'
import cake1 from '../../src/images/cake1.jpeg'
import cake4 from '../../src/images/cake5.jpeg'
import cake3 from '../../src/images/cake3.jpeg'

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
        border: '1px solid rgba(0,0,0,0.05)',
       
      },
      section: {
        margin: 0,
        flexGrow: 1,
        padding:10
      },
      section3: {
        margin: 0,
        padding: 10,
        flexGrow: 1
      },
      section4: {
        // marginTop:"100",
        // padding: 10,   
      },
      image:{
        width: 70,
        height: 80,
        borderRadius: 50,
        float: "right",
        position: 'absolute',
        top: 0,
        left: 220,
     },
     image1:{
      width: 70,
      height: 80,
      // borderRadius: 50,
      float: "right",
      position: 'absolute',
       top: 300,
      left: 10,
   },
   image2:{
    width: 70,
    height: 80,
    // borderRadius: 50,
    float: "right",
    position: 'absolute',
     top: 300,
    left: 110,
 },
 image3:{
  width: 70,
  height: 80,
  // borderRadius: 50,
  float: "right",
  position: 'absolute',
   top: 300,
  left: 210,
},
image4:{
  width: 70,
  height: 80,
  borderRadius: 50,
  float: "right",
  position: 'absolute',
   top: 300,
  left: 300,
},
      fontcheck:{
       fontFamily:'roboto',
        fontWeight:'bold'
      }
      ,body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
      },
      title: {
        fontSize: 10,
        padding:0,
        marginLeft:10,
        fontFamily: "Times-Roman",
        color:'green',

      },
      title2: {
        fontSize: 10,
        marginLeft:10,
        marginTop:10,
        color:'mediumvioletred'
      },
      customername: {    
        position: 'absolute',
        top: 120,
        fontSize: 10,
        left: 5,       
        color:'orange',
      }, 
       customernumber: {    
        position: 'absolute',
        top: 140,
        fontSize: 10,
        left: 5,
        color:'green',
       
      },
      text: {
        margin: 12,
        fontSize: 30,
        fontFamily: "Times-Roman",
        background:"pink",
        fontWeight:"bold"
      },
      visit:{
        top: 300,
        fontSize: 30,
        fontFamily: "Times-Roman",
        background:"pink",
        fontWeight:"bold"
      },
      customercake:{
        position: 'absolute',
        top: 180,
        fontSize: 15,
        left: 70,
        color:'deeppink',
      },
      customeramount:{
        position: 'absolute',
        top: 200,
        fontSize: 15,
        left: 70,
        color:'black',
      },
      customerpaid:{
        position: 'absolute',
        top: 220,
        fontSize: 15,
        left: 70,
        color:'red',
      },
      thankyou: {
        margin: 15,
        fontSize: 30,
        fontFamily: "Times-Roman",
        background:"pink",
        fontWeight:"bold",
        left: 70,
      },
      header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: "center",
        color: "grey",
      },
    
});

const PDFFile=(props)=>{
  
    return (
        <Document>
        <Page size="A6" style={styles.page} >       
          <View style={styles.section4}>
          
          <Text style={styles.text}><span style={{color:'blue',fontWeight:'bold'}}>Cake</span><span style={{color:'red'}}>Spot</span>  </Text>
          <Text style={styles.title}>Make Your Special Moments More Special</Text>
          <Text style={styles.title2}>Contact.No:8618342758   <span style={{color:'deeppink'}}>insta:cakespot_19</span></Text> 
          <Text style={styles.title2}></Text>
          {/* <Text ><i className="fa fa-instagram ft60 clr-blue">cakespot_19</i></Text> */}
          <Image style={styles.image} src={cake}/> 
          <Svg viewBox="0 0 220 100">  
            <Svg height="500" width="10000" >
                  <Line x1="0" y1="0" x2="5000" y2="0" strokeWidth={2}  stroke="rgb(0,0,0)" />
            </Svg>
          </Svg>
          <Table>
            hellooooooo
          </Table>
          <Text style={styles.customername}>Customer Name :- {props.name}</Text>
          <Text style={styles.customernumber}>Mobile Number :- {props.Number}</Text>
          <Text style={styles.customercake}>Cake :- {props.cakename}</Text>
          <Text style={styles.customeramount}>Amount :- {props.Amountpaid}</Text>
          <Text style={styles.customerpaid}>Paid :- {props.Amountpaid}</Text>
          <Text style={styles.thankyou}><span style={{color:'rgb(255, 0, 255)',fontWeight:'bold'}}>Thank</span><span style={{color:'rgb(255,165,0)'}}>You</span>  </Text>
          <Image style={styles.image1} src={cake1}/>
          <Image style={styles.image2} src={cake4}/>
          <Image style={styles.image3} src={cake3}/>
          <Text style={styles.visit}>Visit Again </Text>
          </View>
        
        </Page>
      </Document>
    )
};
export default PDFFile