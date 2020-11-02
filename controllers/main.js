  import {CallData} from './../utils/CallData.js'; 
  import {ListChosenItem} from './../models/ListChosenItem.js'; 
  let returnData = new CallData();
  let listChosenItem = new ListChosenItem();
  let navPills = [];
  let tabPanes = [];
  let dataAray = returnData.callData();
  console.log(dataAray)