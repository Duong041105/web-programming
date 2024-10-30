class Student {
    constructor(id, code, name, gender, dob, hometown) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.gender = gender;
        this.dob = dob;
        this.hometown = hometown;
    }
}

class StudentManager {
    constructor() {
        this.students = JSON.parse(localStorage.getItem('students')) || [];
        this.updateTable();
    }

    addStudent(student) {
        this.students.push(student);
        this.saveToLocalStorage();
        this.updateTable();
    }

    editStudent(student) {
        const index = this.students.findIndex(stu => stu.id === student.id);
        if (index !== -1) {
            this.students[index] = student;
            this.saveToLocalStorage();
            this.updateTable();
        }
    }

    deleteStudent(id) {
        this.students = this.students.filter(student => student.id !== id);
        this.saveToLocalStorage();
        this.updateTable();
    }

    saveToLocalStorage() {
        localStorage.setItem('students', JSON.stringify(this.students));
    }

    updateTable() {
        const tbody = document.getElementById('studentTableBody');
        tbody.innerHTML = '';

        this.students.forEach(student => {
            const tr = document.createElement('tr');

            tr.innerHTML = `
                <td>${student.code}</td>
                <td>${student.name}</td>
                <td>${student.gender}</td>
                <td>${student.dob}</td>
                <td>${student.hometown}</td>
                <td>
                    <div class="action-buttons">
                        <button class="edit-btn" onclick="studentManager.loadStudentToForm('${student.id}')">Sửa</button>
                        <button class="delete-btn" onclick="studentManager.deleteStudent('${student.id}')">Xóa</button>
                    </div>
                </td>
            `;

            tbody.appendChild(tr);
        });
    }

    loadStudentToForm(id) {
        const student = this.students.find(stu => stu.id === id);
        if (student) {
            document.getElementById('studentId').value = student.id;
            document.getElementById('studentCode').value = student.code;
            document.getElementById('studentName').value = student.name;
            document.getElementById('studentGender').value = student.gender;
            document.getElementById('studentDOB').value = student.dob;
            document.getElementById('studentHometown').value = student.hometown;
        }
    }

    resetForm() {
        document.getElementById('studentForm').reset();
        document.getElementById('studentId').value = '';
    }
}

const studentManager = new StudentManager();

document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const id = document.getElementById('studentId').value || Date.now().toString();
    const code = document.getElementById('studentCode').value;
    const name = document.getElementById('studentName').value;
    const gender = document.getElementById('studentGender').value;
    const dob = document.getElementById('studentDOB').value;
    const hometown = document.getElementById('studentHometown').value;

    const student = new Student(id, code, name, gender, dob, hometown);

    if (document.getElementById('studentId').value) {
        studentManager.editStudent(student);
    } else {
        studentManager.addStudent(student);
    }

    studentManager.resetForm();
});

document.getElementById('resetButton').addEventListener('click', function() {
    studentManager.resetForm();
});
