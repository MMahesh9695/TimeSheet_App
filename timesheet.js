var openPopup = document.querySelector('#btn_add');
var addButton = document.querySelector('#btn_submit');
var closeButton = document.querySelector('#spn_close');
var popupElement = document.querySelector('.timesheet_model_container');
var timeSheetTable = document.querySelector('#tbl_timeSheet_data');

openPopup.addEventListener('click',openTimeSheet);
addButton.addEventListener('click',addTimeSheet);
closeButton.addEventListener('click',closeTimeSheet);

function openTimeSheet(){
    popupElement.style.display = "block";
}

function closeTimeSheet(){
    popupElement.style.display = "none";
}

function addTimeSheet(){
    let employeeId = document.querySelector('#txt_empID');
    let employeeName = document.querySelector('#txt_empName');
    let task = document.querySelector('#txt_task');
    let projectName = document.querySelector('#ddl_project');
    let startDate = document.querySelector('#txt_startTime');
    let EndDate = document.querySelector('#txt_endTime');
    
    let employeeId_Data = document.createElement('td');
    let employeeId_value = document.createTextNode(employeeId.value);
    employeeId_Data.appendChild(employeeId_value);
    let newDataRow = document.createElement('tr');
    newDataRow.appendChild(employeeId_Data);
    timeSheetTable.appendChild(newDataRow);
    closeTimeSheet();
}

function validation(){
    
}