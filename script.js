// ================= HOME PAGE =================

const enrollmentForm = document.getElementById("enrollmentForm");

if (enrollmentForm) {
  enrollmentForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("studentName").value;
    const age = document.getElementById("studentAge").value;
    const grade = document.getElementById("gradeLevel").value;
    const email = document.getElementById("studentEmail").value;
    const phone = document.getElementById("studentPhone").value;
    const profilePhoto = document.getElementById("studentPhoto").files[0];

    const message = document.getElementById("message");
    const summary = document.getElementById("studentSummary");

    if (!name || !age || !grade || !email || !phone || !profilePhoto) {
      message.textContent = "Please fill all fields!";
      return;
    }

    const student = {
      name,
      age,
      grade,
      email,
      phone,
      profilePhoto,
    };

    message.textContent = `Welcome ${name} to Bright Future School!`;

    summary.textContent = `
      <h3>Student Summary</h3>
      <p>Name: ${student.name}</p>
      <p>Age: ${student.age}</p>
      <p>Grade: ${student.grade}</p>
      <p>Email: ${student.email}</p>
      <p>Phone: ${student.phone}</p>
    `;
  });
}

// ================= PROFILE PAGE =================

const contactInfo = document.getElementById("contactInfo");

if (document.getElementById("showEmail")) {
  document.getElementById("showEmail").addEventListener("click", function () {
    contactInfo.textContent = "Email: amina@gmail.com";
  });

  document.getElementById("showPhone").addEventListener("click", function () {
    contactInfo.textContent = "Phone: +93 700000000";
  });

  document.getElementById("hideInfo").addEventListener("click", function () {
    contactInfo.textContent = "";
  });

  document
    .getElementById("updateStatus")
    .addEventListener("click", function () {
      const newStatus = document.getElementById("newStatus").value;

      if (newStatus) {
        document.getElementById("status").textContent = `Status: ${newStatus}`;
      }
    });
}

// ================= COURSES PAGE =================

const coursesContainer = document.getElementById("coursesContainer");

if (coursesContainer) {
  let courses = [
    {
      name: "Mathematics",
      instructor: "Mr. Ali",
      grade: "10",
      description: "Learn algebra and geometry.",
      image: "https://via.placeholder.com/250",
    },

    {
      name: "Physics",
      instructor: "Mrs. Sara",
      grade: "11",
      description: "Introduction to mechanics.",
      image: "https://via.placeholder.com/250",
    },
  ];

  function renderCourses(courseArray) {
    coursesContainer.innerHTML = "";

    courseArray.forEach((course) => {
      coursesContainer.innerHTML += `
        <div class="course-card">

          <img src="${course.image}">

          <h3>${course.name}</h3>

          <p>${course.instructor}</p>

          <button 
            class="detailsBtn"
            data-name="${course.name}"
            data-instructor="${course.instructor}"
            data-grade="${course.grade}"
            data-description="${course.description}">
            View Course Details
          </button>

        </div>
      `;
    });

    addDetailsEvents();
  }

  renderCourses(courses);

  function addDetailsEvents() {
    const buttons = document.querySelectorAll(".detailsBtn");

    buttons.forEach((btn) => {
      btn.addEventListener("click", function () {
        const details = document.getElementById("courseDetails");

        details.innerHTML = `
          <h2>${this.dataset.name}</h2>
          <p>Instructor: ${this.dataset.instructor}</p>
          <p>Grade: ${this.dataset.grade}</p>
          <p>${this.dataset.description}</p>
        `;
      });
    });
  }

  const courseForm = document.getElementById("courseForm");

  courseForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const newCourse = {
      name: document.getElementById("courseName").value,
      instructor: document.getElementById("instructor").value,
      grade: document.getElementById("courseGrade").value,
      description: document.getElementById("description").value,
      image: document.getElementById("image").value,
    };

    if (
      !newCourse.name ||
      !newCourse.instructor ||
      !newCourse.grade ||
      !newCourse.description ||
      !newCourse.image
    ) {
      alert("Please fill all fields");
      return;
    }

    courses.push(newCourse);

    renderCourses(courses);

    courseForm.reset();
  });

  const filterButtons = document.querySelectorAll(".filter-buttons button");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const grade = this.dataset.grade;

      if (grade === "all") {
        renderCourses(courses);
      } else {
        const filtered = courses.filter((course) => course.grade === grade);

        renderCourses(filtered);
      }
    });
  });
}

// ================= CONTACT PAGE =================

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("contactName").value;
    const email = document.getElementById("contactEmail").value;
    const message = document.getElementById("contactMessage").value;

    const result = document.getElementById("contactResult");

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    result.textContent = "Message sent successfully!";

    contactForm.reset();
  });
}
