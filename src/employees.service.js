const EMPLOYEES_API = `${BASE_API_URL}/employees`; // http://localhost:3001/api/employees

const getEmployees = () => _get(EMPLOYEES_API,  OPTIONS_WITH_AUTH);

const addEmployee = (formData) =>
    _post(EMPLOYEES_API, formData, DEFAULT_OPTIONS_WITH_AUTH);

const deleteEmployee = (employeeId) =>
    _delete(`${EMPLOYEES_API}/${employeeId}`, OPTIONS_WITH_AUTH);