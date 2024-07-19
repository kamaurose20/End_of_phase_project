document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('leaveForm');
    const employeesList = document.querySelector('.employees__names--list');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const formData = new FormData(form);
        const employee = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            contactNumber: formData.get('contactNumber'),
            leaveType: formData.get('leaveType'),
            leaveDate: formData.get('leaveDate')
        };
        
        const employeeDiv = document.createElement('div');
        employeeDiv.classList.add('employee');
        employeeDiv.innerHTML = `
            <p><strong>Name:</strong> ${employee.firstName} ${employee.lastName}</p>
            <p><strong>Email:</strong> ${employee.email}</p>
            <p><strong>Contact Number:</strong> ${employee.contactNumber}</p>
            <p><strong>Leave Type:</strong> ${employee.leaveType}</p>
            <p><strong>Leave Date:</strong> ${employee.leaveDate}</p>
        `;
        
        employeesList.appendChild(employeeDiv);
        
        form.reset();
    });
});
