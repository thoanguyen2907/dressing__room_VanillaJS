import dataArray from './../data/Data.js'; 
export  class CallData{
    callData = () =>{
        return JSON.parse(JSON.stringify(dataArray)); 
    }
}