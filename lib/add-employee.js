/**
 * AJAX add new employees to employee list on save.
 */
const doAddEmployee = async (e) => {
    e.preventDefault();
  
    const employeeInput = document.getElementById('formInputEmployeeName');
    const employee_name = employeeInput.value;

    const positionInput = document.getElementById('formInputEmployeePosition');
    const position = positionInput.value

    const supervisorInput = document.getElementById('formInputEmployeeSupervisor');
    const supervisor = supervisorInput.value;

   if (!employee_name) {
      alert('Please enter an employee name.');
      return;
    }

    if (!position) {
        alert('Please enter employee position.');
        return;
      }

      if (!supervisor) {
        alert('Please enter employee supervisor.');
        return;
      }
  
    const res = await addEmployee({ 
        employee_name,
        position,
        supervisor
    });
  
    if (res !== null) {
      inst.generateEmployees();
    }
    employeeInput.value = '';


};