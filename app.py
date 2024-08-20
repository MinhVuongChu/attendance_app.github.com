from flask import Flask, request, jsonify

app = Flask(__name__)

# Biến lưu trữ danh sách học sinh
attendance_list = []

@app.route('/add_student', methods=['POST'])
def add_student():
    data = request.get_json()
    student_name = data.get('name')
    if student_name:
        attendance_list.append(student_name)
        return jsonify({"status": "success", "student": student_name}), 200
    return jsonify({"status": "error"}), 400

@app.route('/get_attendance_list', methods=['GET'])
def get_attendance_list():
    return jsonify(attendance_list), 200

if __name__ == '__main__':
    app.run(debug=True)
