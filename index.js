// Write your solution in this file!

    const employee = {
        name: "value1",
        streetAddress: "value2",
    };

    function updateEmployeeWithKeyAndValue(obj, key, value){
        const newEmployee = {...employee };
        return {
            ...employee,
            ["name"]: "Sam",
            ["streetAddress"]: "11 Broadway",
        }
    }

    function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
        employee["streetAddress"] = '12 Broadway';
        return employee;
    }
    
    function deleteFromEmployeeByKey(employee, key){
        const newEmployee = {...employee };
        delete newEmployee.name;
        return newEmployee;
    }

    function destructivelyDeleteFromEmployeeByKey(employee, key){
        delete employee.name;
        return employee;
    }

