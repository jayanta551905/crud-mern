import React, {Fragment, useEffect, useRef} from 'react';
import FullScreenLoader from "../Common/FullScreenLoader";
import {ErrorToast, isEmpty, SuccessToast} from "../../Helper/ValidationHelper";
import {ReadByID, Update} from "../../APIServices/CRUDServices";
import {withRouter} from "react-router";
const UpdateForm = (props) => {
    let courseName,courseCode,coursePrice,qty,totalPrice, Loader=useRef();
    const UpdateData = () => {
        let _courseName = courseName.value;
        let _courseCode = courseCode.value;
        let _coursePrice = coursePrice.value;
        let _qty = qty.value;
        let _totalPrice = totalPrice.value;

      if(isEmpty(_courseName)){
          ErrorToast("Course Name Required");
      }
      else if(isEmpty(_courseCode)){
          ErrorToast("Course Code Required");
      }
      else if(isEmpty(_coursePrice)){
          ErrorToast("Course Price Required");
      }
      else if(isEmpty(_qty)){
          ErrorToast("Qty Required");
      }
      else if(isEmpty(_totalPrice)){
          ErrorToast("Course Total Price Required");
      }
      else{

        // data insert code here
          Loader.classList.remove("d-none")
          Update(props.id,_courseName,_courseCode,_coursePrice,_qty,_totalPrice)
              .then((Result)=>{
                  Loader.classList.add("d-none")
                  if(Result===true){
                      SuccessToast("Data Update Success")
                      props.history.push("/");
                  }
                  else {
                      ErrorToast("Request Fail Try Again");
                  }
              })
      }
    }

    useEffect(()=>{
        ReadByID(props.id).then((Result)=>{
            courseName.value=Result[0]['courseName']
            courseCode.value=Result[0]['courseCode']
            coursePrice.value=Result[0]['coursePrice']
            qty.value=Result[0]['qty']
            totalPrice.value=Result[0]['totalPrice']
        })
    })


    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-header pb-0">
                                <h4 className="animated fadeInUp">Update Course</h4>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-4  p-2">
                                        <label className="animated fadeInUp">Course Name</label>
                                        <input ref={(input)=>courseName=input} type="text" className="form-control animated fadeInUp"/>
                                    </div>
                                    <div className="col-md-4  p-2">
                                        <label className="animated fadeInUp">Course Code</label>
                                        <input ref={(input)=>courseCode=input} type="text" className="form-control animated fadeInUp"/>
                                    </div>
                                    <div className="col-md-4  p-2">
                                        <label className="animated fadeInUp"> Course Price</label>
                                        <input ref={(input)=>coursePrice=input}  type="text" className="form-control animated fadeInUp"/>
                                    </div>
                                    <div className="col-md-4  p-2">
                                        <label className="animated fadeInUp"> Qty</label>
                                        <input ref={(input)=>qty=input} type="text" className="form-control animated fadeInUp"/>
                                    </div>
                                    <div className="col-md-4  p-2">
                                        <label className="animated fadeInUp"> Total Price</label>
                                        <input  ref={(input)=>totalPrice=input} type="text" className="form-control animated fadeInUp"/>
                                    </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="col-md-4  p-2">
                                        <button onClick={UpdateData} className="btn btn-primary  animated fadeInUp w-100">Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-none" ref={(div)=>Loader=div}>
                <FullScreenLoader/>
            </div>
        </Fragment>
    );
};
export default withRouter(UpdateForm);