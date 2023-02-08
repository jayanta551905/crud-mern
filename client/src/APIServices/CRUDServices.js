import axios from "axios";

export function Create(courseName,courseCode,coursePrice,qty,totalPrice){
    let URL="/api/v1/create";
    let postBody={
        courseName: courseName,
        courseCode: courseCode,
        coursePrice: coursePrice,
        qty: qty,
        totalPrice: totalPrice
    }
   return axios.post(URL,postBody).then((res)=>{
        if(res.status===200){
           return true;
        }
        else{
           return  false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;
    });
}

export function Read(){
    let URL="/api/v1/read";
  return axios.get(URL).then((res)=>{
        if(res.status===200){
            return res.data['data'];
        }
        else{
            return false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;
    });
}

export function ReadByID(id){
    let URL="/api/v1/readByID/"+id;
    return axios.get(URL).then((res)=>{
        if(res.status===200){
            return res.data['data'];
        }
        else{
            return false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;
    });
}



export function Delete(id){
    let URL="/api/v1/delete/"+id;
    return  axios.get(URL).then((res)=>{
        if(res.status===200){
            return true;
        }
        else{
            return  false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;
    });
}

export function Update(id,courseName,courseCode,coursePrice,qty,totalPrice){
    let URL="/api/v1/update/"+id;
    let postBody={
        courseName: courseName,
        courseCode: courseCode,
        coursePrice: coursePrice,
        qty: qty,
        totalPrice: totalPrice
    }
    return axios.post(URL,postBody).then((res)=>{
        if(res.status===200){
            return true;
        }
        else{
            return  false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;
    });
}

