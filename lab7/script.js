// Student data
const students = [
    { srno: 1, id: '001', name: 'Minahal', grade: 'A+', attendance: 95, status: 'Active' },
    { srno: 2, id: '002', name: 'Sumbal', grade: 'A-', attendance: 90, status: 'Active' },
    { srno: 3, id: '003', name: 'Kalsoom', grade: 'A', attendance: 88, status: 'Active' },
    { srno: 4, id: '004', name: 'Hamna', grade: 'B+', attendance: 85, status: 'Active' },
    { srno: 5, id: '005', name: 'Ali', grade: 'D', attendance: 65, status: 'Inactive' },
    { srno: 6, id: '006', name: 'Maham', grade: 'B', attendance: 82, status: 'Active' },
    { srno: 7, id: '007', name: 'Saim', grade: 'C', attendance: 75, status: 'Inactive' },
    { srno: 8, id: '008', name: 'Maryam', grade: 'A', attendance: 93, status: 'Active' },
    { srno: 9, id: '009', name: 'Abdullah', grade: 'B+', attendance: 87, status: 'Active' },
    { srno: 10, id: '010', name: 'Mudasir', grade: 'A', attendance: 94, status: 'Active' }
];


function createTable() {
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';
    
    const table = document.createElement('table');
    
    
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    
    ['Sr.no', 'Student ID', 'Name', 'Grade', 'Attendance(%)', 'Status'].forEach(text => {
        const th = document.createElement('th');
        th.textContent = text;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
   table.appendChild(thead);
    const tbody = document.createElement('tbody');
    
    students.forEach(student => {
        const row = document.createElement('tr');
        
        Object.values(student).forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            row.appendChild(td);
        });
        
        tbody.appendChild(row);
    });
    
    table.appendChild(tbody);
    tableContainer.appendChild(table);
}


function calculateAverages() {
    const attendances = students.map(student => student.attendance);
    const averageAttendance = attendances.reduce((sum, val) => sum + val, 0) / attendances.length;
    
    const table = document.querySelector('table');
    const tbody = table.querySelector('tbody');
    
    const existingAverageRow = table.querySelector('.average-row');
    if (existingAverageRow) {
        existingAverageRow.remove();
    }
    
    const averageRow = document.createElement('tr');
    averageRow.className = 'average-row';
    
    ['Average', '', '', '', averageAttendance.toFixed(2), ''].forEach(text => {
        const td = document.createElement('td');
        td.textContent = text;
        averageRow.appendChild(td);
    });
    
    tbody.appendChild(averageRow);
}


document.addEventListener('DOMContentLoaded',() => {
    createTable();
    document.getElementById('calculateAverage').addEventListener('click',calculateAverages);
});
