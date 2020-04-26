const employeesService = new EmployeesService();
const newhire = new Newhire(employeesService);

describe('Newhire App', () => {
  it('should initialize some HTML', () => {
    spyOn(newhire, 'init');
    newhire.init();

    expect(newhire.init).toHaveBeenCalled();
  });

  it('should add an employee', async () => {
    const newEmployee = {
      employee_id: 0,
      employee_name: 'Employee Bob',
      position: 'Captain',
      supervisor: 'Superman',
    };
    const addEmployeeServiceSpy = spyOn(employeesService, 'addEmployee');

    expect(newhire.employees.length).toBe(0);

    await newhire.addEmployee(newEmployee);

    expect(addEmployeeServiceSpy).toHaveBeenCalled();
    expect(newhire.employees.length).toBe(1);
  });

  it('should delete an employee', async () => {
    const existingEmployee = {
      employee_id: 0,
      employee_name: 'Employee Bob',
      position: 'Captain',
      supervisor: 'Superman',
    };
    const deleteEmployeeServiceSpy = spyOn(employeesService, 'deleteEmployee');

    expect(newhire.employees.length).toBe(1);

    await newhire.deleteEmployee(existingEmployee.employee_id);

    expect(deleteEmployeeServiceSpy).toHaveBeenCalled();
    expect(newhire.employees.length).toBe(0);
  });

  xit('should update an individual employee', () => {
    // ..
  });
});