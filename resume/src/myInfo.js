var myInfo = {
    name: 'Anderson David',
    phoneNum: '317-900-6111',
    email: 'david25@purdue.edu',
    campusAddress: '1016 W Stadium Ave, West Lafayette, IN 47907, Rm. SW419',
    homeAddress: '3437 Wexley Ct., Carmel, IN 46032',
    linkedIn: 'www.linkedin.com/in/anderson-david',
    github: 'www.github.com/andersondav',
    education: {
        school: 'Purdue University',
        location: 'West Lafayette, IN',
        degree: 'Bachelor of Science in Computer Science',
        degree2: 'Minor in Mathematics',
        gpa: '4.0/4.0',
        gradDate: 'Expected Spring 2022'
    },
    technicalSkills: {
        proficient: ['Java', 'C', 'Swift/iOS Development', 'ReactJS', 'Github', 'HTML/CSS', 'Javascript', 'NodeJS'],
        basic: ['Linux', 'Flutter/Dart', 'Python', 'Firebase', 'C++']  
    },
    softSkills: [
        'Team player', 'Communicator', 'Problem-solver', 'Decision-maker'
    ],
    workExperience: {
        company: 'DK Dwellings, LLC',
        location: 'Carmel, IN',
        title: 'General Contracting Worker',
        date: 'Jun-Aug 2018 & 2019',
        desc: 'Worked on a team to complete various assignments for company\'s work with clients.'
    },
    objective: "CS student with great attention to detail, communication skills, and desire to learn seeking " +
                "an internship to gain experience working in a professional production environment while " +
                "contributing to meaningful and enriching projects.",
    coursework: "Problem Solving and Object-Oriented Programming (Java), Programming in C, Data Structures " +
                "and Algorithms, Computer Architecture, Foundations of Computer Science, " +
                "Codepath iOS Development Course",
    projects: [
        {
            title: 'Logic Central',
            link: 'https://tinyurl.com/y77nm95o',
            github: 'http://bit.ly/2oEvOjZ',
            type: 'Personal Project',
            date: '2018',
            info: [
                'Website about the musician Bobby Hall that explores his music and fanbase.',
                'Created using GatsbyJS, a static site generator built on NodeJS and ReactJS.',
                'Utilized Firebase to authenticate users, to store user-sent data, and to read data from a database.',
                'Project involved quickly learning and adapting to new frameworks and technologies.'
            ],
            keywords: [
                'GatsbyJS', 'NodeJS', 'ReactJS', 'Firebase'
            ]
        },
        {
            title: 'Purdue Nutrition Calculator',
            link: null,
            github: 'https://bit.ly/2Mtulrh',
            type: 'Team Project',
            date: 'Mar-May 2019',
            info: [
                'iOS Application for Purdue students to track daily nutritional intake from Purdue dining courts.',
                'Built using Swift and Xcode and utilizes a RESTful API to retrieve food item data.',
                'Stores user information on device using Xcode UserDefaults and Core Data.',
                'Project involved applying skills regarding team collaboration and the product development cycle.'
            ],
            keywords: [
                'Xcode', 'Swift', 'RESTful', 'API', 'Core Data'
            ]
        }
    ],
    activities: [
        {
            name: "iOS Dev Club",
            dates: "Sep 2018 - Present"
        },
        {
            name: "Hello World Hackathon 2019 Executive Team",
            dates: "Mar - Sep 2019"
        },
        {
            name: "Purdue EPICS EVEI Team",
            dates: "Aug - Dec 2018"
        }
    ]
}

export default myInfo