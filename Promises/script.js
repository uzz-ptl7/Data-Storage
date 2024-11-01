document.getElementById('fetchData').addEventListener('click', fetchEmployeeData);

function fetchEmployeeData() {
    let employeePromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                let employeeData = {
                    name: 'John Doe',
                    age: 30,
                    designation: 'Software Developer'
                }
                resolve(employeeData);
            } else {
                reject('Failed to fetch employee data');
            }
        }, 500)
    });

    employeePromise
    .then((employeeData) => {
        console.log(employeeData);
        document.getElementById('employeeData').innerHTML = `
            <ul>
                <li>Name: ${employeeData.name}</li>
                <li>Age: ${employeeData.age}</li>
                <li>Designation: ${employeeData.designation}</li>
            </ul>
        `;
    })
    .catch((error) => {
        console.error(error);
    })

}