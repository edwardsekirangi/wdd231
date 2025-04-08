const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course provides a beginner-friendly introduction to programming concepts using a modern programming language. Students will learn how to write simple programs, solve problems through logic and algorithms, and develop a solid foundation in coding. The course is designed for those with no prior experience and prepares learners for more advanced computer science and software development courses.',
        technology: ['Python'],
        completed: true  // Update if you completed the course
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces the core concepts of website development, covering HTML, CSS, and JavaScript. You will learn how to structure content, style pages, and add interactivity to create responsive and user-friendly websites. Through hands-on projects and real-world examples, you will build a strong foundation in front-end development—perfect for beginners looking to start a career in web design or enhance their digital skillset',
        technology: ['HTML', 'CSS'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course explores the fundamentals of both web and computer programming. Students will learn how to build websites using HTML, CSS, and JavaScript, as well as develop basic software applications using a high-level programming language. The course emphasizes problem-solving, logical thinking, and real-world application, making it a great starting point for anyone interested in technology or software development.',
        technology: ['Python'],
        completed: true  // Update if you completed the course
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to object-oriented programming using classes and objects. It covers key principles such as encapsulation, inheritance, and polymorphism. Students will learn how to design and build modular, reusable, and maintainable code by applying object-oriented techniques to real-world problems. This course builds on prior programming experience and prepares learners for more advanced software development.',
        technology: ['C#'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on basic web development skills by introducing dynamic and interactive web content. Students will learn how to use JavaScript and the Document Object Model to create responsive user experiences. The course also covers best practices in client-side scripting and introduces tools for enhancing website functionality. It is ideal for learners looking to take their web development skills to the next level.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course focuses on the design and development of modern, interactive user interfaces for the web. Students will deepen their knowledge of HTML, CSS, and JavaScript while exploring front end frameworks, responsive design, and web accessibility. Through hands-on projects, learners will build professional-quality websites and gain the skills needed for entry-level front end development roles.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true  // Update if you completed the course
    }
];

// Function to display courses
function displayCourses(filter = 'all') {
    const courseContainer = document.querySelector('#courses');
    courseContainer.innerHTML = ''; // Clear previous content

    const filteredCourses = courses.filter(course => {
        if (filter === 'all') return true;
        return course.subject === filter;
    });

    filteredCourses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.classList.add('course-card');

        // Add a special class for completed courses
        if (course.completed) {
            courseElement.classList.add('completed');
        }

        courseElement.innerHTML = `
            <h3>${course.title} (${course.subject} ${course.number})</h3>
            <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
            <p><strong>Status:</strong> ${course.completed ? '✅ Completed' : '❌ Not Completed'}</p>
        `;

        courseContainer.addEventListener("click", () => {
            displayCourseDetails(course);
        });

        
        courseContainer.appendChild(courseElement);
    });
}


//function to display the modal
function displayCourseDetails(course) {
    const courseDetails = document.querySelector("#course-details");
    courseDetails.innerHTML = "";
    courseDetails.innerHTML = `
        <button id="closeModal">Close</button>
        <h3>${course.title} (${course.subject} ${course.number})</h3>
        <p><strong>Credits:</strong> ${course.credits}</p>
        <p><strong>Description:</strong> ${course.description}</p>
        <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
        <p><strong>Status:</strong> ${course.completed ? '✅ Completed' : '❌ Not Completed'}</p>
    `;
    courseDetails.showModal();

    document.getElementById("closeModal").addEventListener("click", () => {
        courseDetails.close();
    });

}

// Initial display
displayCourses();

// Event listeners for buttons
document.querySelector('#all-btn').addEventListener('click', () => displayCourses('all'));
document.querySelector('#cse-btn').addEventListener('click', () => displayCourses('CSE'));
document.querySelector('#wdd-btn').addEventListener('click', () => displayCourses('WDD'));
