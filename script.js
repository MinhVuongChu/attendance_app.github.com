document.getElementById('attendance-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const studentName = document.getElementById('student-name').value;
    const attendanceList = document.getElementById('attendance-list');
    
    if (studentName) {
        const li = document.createElement('li');
        li.textContent = studentName;
        attendanceList.appendChild(li);
        
        // Gửi tên học sinh đến server
        fetch('/add_student', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: studentName })
        });

        document.getElementById('student-name').value = '';
    }
});
