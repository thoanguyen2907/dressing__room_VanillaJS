import dataArray from './../data/Data.json'; 
export  class CallData{
    callData = () =>{
        return JSON.parse(dataArray); 
    }
}