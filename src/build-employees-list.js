/**
 * html structure
 *
 * @example
 * <ul class="employees-list">
 *  <li class="employees-item">
 *    <div class="employees-item-block">
 *      <span class="employees-checkbox"><input type="checkbox"></span>
 *      <span class="employee-name">Employee name</span>
 *      <span class="employee-position">pending</span>
 *      <span class="employee-supervisor">date create</span>
 *    </div>
 *  </li>
 * </ul>
 */

// This is an IIFE (Immediately Invoked Function Expression).
// What it does is in the name.
(async () => {
    const employees = await getEmployees();
    console.log(employees);
  
    if (employee.length) {
      const div = document.getElementById('employee');
      const loadingDiv = div.childNodes[1];
  
      const ul = document.createElement('ul');
  
      // replace 'loading...' with list
      div.replaceChild(ul, loadingDiv); // <- order is important here!
  
      // create the list
      employees.map((employees) => {
        // building blocks
        const li = document.createElement('li');
        li.className = 'employees-item';
        const block = document.createElement('div');
        block.className = 'employees-item-block';
  
        //   content
        const checkboxSpan = document.createElement('span');
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkboxSpan.className = 'employees-checkbox';
        checkboxSpan.appendChild(checkbox);
  
        const nameSpan = document.createElement('span');
        nameSpan.className = 'employee-name';
        nameSpan.innerText = employee.name;
  
        const positionSpan = document.createElement('span');
        positionSpan.className = 'employee-position';
        positionSpan.innerText = employee.position;
  
        const supervisorSpan = document.createElement('span');
        supervisorSpan.className = 'employee-supervisor';
        supervisorSpan.innerText = employee.supervisor;
  
        // add list item
        block.appendChild(checkboxSpan);
        block.appendChild(nameSpan);
        block.appendChild(positionSpan);
        block.appendChild(supervisorSpan);
  
        li.appendChild(block);
        ul.appendChild(li);
      });
    }
  })();