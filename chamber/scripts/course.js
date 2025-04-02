const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming...',
        technology: ['Python'],
        completed: true  // Update if you completed the course
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web...',
        technology: ['HTML', 'CSS'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized...',
        technology: ['Python'],
        completed: true  // Update if you completed the course
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes...',
        technology: ['C#'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals...',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience...',
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
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p><strong>Description:</strong> ${course.description}</p>
            <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
            <p><strong>Status:</strong> ${course.completed ? '✅ Completed' : '❌ Not Completed'}</p>
        `;

        courseContainer.appendChild(courseElement);
    });
}

// Initial display
displayCourses();

// Event listeners for buttons
document.querySelector('#all-btn').addEventListener('click', () => displayCourses('all'));
document.querySelector('#cse-btn').addEventListener('click', () => displayCourses('CSE'));
document.querySelector('#wdd-btn').addEventListener('click', () => displayCourses('WDD'));
