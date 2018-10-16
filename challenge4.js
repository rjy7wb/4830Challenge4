angular.module("studentManager", []).controller("studentController", function() {
    var controller = this;

    controller.students = JSON.parse(localStorage.getItem("students"));
    if (controller.students == null) {
        controller.students = [];
    }

    controller.possibleStudentStatuses = ["Active", "Inactive"];
    controller.selectedStudentStatus = "Active";

    function clearStudentForm() {
        controller.studentNumberText = "";
        controller.nameText = "";
        controller.addressText = "";
        controller.phoneNumberText = "";
        controller.gpaText = "";
        controller.academicPlanText = "";
        controller.levelText = "";
        controller.selectedStudentStatus = "Active"
    }

    clearStudentForm();

    controller.addStudent = function() {
        controller.students.push({
            studentNumber: controller.studentNumberText,
            name: controller.nameText,
            address: controller.addressText,
            phoneNumber: controller.phoneNumberText,
            gpa: controller.gpaText,
            academicPlan: controller.academicPlanText,
            level: controller.levelText,
            status: controller.selectedStudentStatus
        });

        localStorage.setItem("students", JSON.stringify(controller.students));

        clearStudentForm();
    };


    controller.deleteStudent = function(index) {
        controller.students.splice(index, 1);

        localStorage.setItem("students", JSON.stringify(controller.students));
    }


    controller.getActiveStudents = function() {
        var count = 0;

        angular.forEach(controller.students, function(student) {
            if (angular.equals(student.status, "Active")) {
                count++;
            }
        });

        return count;
    }

    controller.getInactiveStudents = function() {
        var count = 0;

        angular.forEach(controller.students, function(student) {
            if (angular.equals(student.status, "Inactive")) {
                count++;
            }
        });

        return count;
    }

});