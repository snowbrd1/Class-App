/**
 * @class EmployeeList
 *
 * Creates a list of employees and updates a list
 */

class EmployeeList {
  employees = [];

  constructor() {}

  /**
   * Build employee list parent.
   * Uses bootstrap classes with some custom overrides.
   */
  createEmployeeListParent = () => {
    const ul = document.createElement('ul');
    ul.id = 'employees-list';
    ul.className = 'list-group list-group-flush checked-list-box';
    return ul;
  };

  _deleteEventHandler = (employeeId) => async () => {
    if (employeeId) {
      const res = await deleteEmployee(employeeId);

      if (res !== null) {
        this.employees = this.employees.filter((employee) => employee.employee_id !== employeeId);
        const employee = document.getElementById(`employee-${employeeId}`);
        employee.remove();

        if (!this.employees.length) {
          const div = document.getElementById('employees');
          const loadingDiv = div.childNodes[1];
          const errDiv = this.generateErrorMsg('Create new employees!');
          div.replaceChild(errDiv, loadingDiv);
        }
      }
    }
  };

  /**
   * Builds the list item.
   * Uses bootstrap classes with some custom overrides.
   *
   * {@link https://getbootstrap.com/docs/4.4/components/list-group/}
   * @example
   * <li class="list-group-item">
   *   <button class="btn btn-secondary" onclick="deleteEmployee(e, index)">X</button>
   *   <span>Employee name</span>
   *   <span>Position</span>
   *   <span>Supervisor</span>
   * </li>
   */
  buildEmployeeListRowItem = (employee) => {
    const listGroupItem = document.createElement('li');
    listGroupItem.id = `employee-${employee.employee_id}`; // employee-1
    listGroupItem.className = 'list-group-item';

    const deleteBtn = document.createElement('button');
    const deleteBtnTxt = document.createTextNode('X');
    deleteBtn.className = 'btn btn-secondary';
    deleteBtn.addEventListener('click', this._deleteEventHandler(employee.employee_id));
    deleteBtn.appendChild(deleteBtnTxt);
  
    const employeeNameSpan = document.createElement('span');
    const employeeName = document.createTextNode(employee.employee_name);
    employeeNameSpan.appendChild(employeeName);
  
    const employeePositionSpan = document.createElement('span');
    const employeePosition = document.createTextNode(employee.position);
    employeePositionSpan.appendChild(employeePosition);
  
    const employeeSupervisorSpan = document.createElement('span');
    const employeeSupervisor = document.createTextNode(employee.supervisor);
    employeeSupervisorSpan.appendChild(employeeSupervisor);
  
    // add list item's details
    listGroupItem.append(deleteBtn);
    listGroupItem.append(employeeNameSpan);
    listGroupItem.append(employeePositionSpan);
    listGroupItem.append(employeeSupervisorSpan);

    return listGroupItem;
  };

  /**
   * Assembles the list items then mounts them to a parent node.
   * Uses bootstrap classes with some custom overrides.
   */
  buildEmployeesList = (mount, employees) =>
    employees.map((employee) => {
      const listGroupRowItem = this.buildEmployeeListRowItem(employee);

      // add entire list item
      mount.append(listGroupRowItem);
    });

  generateErrorMsg = (msg) => {
    const div = document.createElement('div');
    const text = document.createTextNode(msg);
    div.id = 'user-message';
    div.className = 'center';
    div.appendChild(text);
    return div;
  };

  generateEmployees = async () => {
    const res = await getEmployees();
    const div = document.getElementById('employees');
    const loadingDiv = div.childNodes[1];

    if (res.length) {
      this.employees = res;
      const employeesDiv = this.createEmployeeListParent();
      this.buildEmployeesList(employeesDiv, res);
      div.replaceChild(employeesDiv, loadingDiv);
    } else {
      const errDiv = this.generateErrorMsg(res.msg);
      div.replaceChild(errDiv, loadingDiv);
    }
  };
}

const inst = new EmployeeList();

// This is an IIFE (Immediately Invoked Function Expression).
(async () => {
  inst.generateEmployees();
})();