// config.js
module.exports = {
    github: {
        username: 'sofyanmahmoud0000', // Your GitHub org/user name. (Required)
        sortBy: 'updated', // stars | updated
        limit: 1e2, // How many projects to display.
        exclude: {
            forks: true, // Forked projects will not be displayed if set to true.
            projects: [
                'sofyanmahmoud0000.github.io',
                'sofyanmahmoud0000',
                'portfolio',
                'JScalculator'
            ] // These projects will not be displayed. example: ['my-project1', 'my-project2']
        }
    },
    
    social: {
        linkedin: 'sofyan-mahmoud-b1aa70138',
        twitter: '',
        facebook: 'sofyanmahmoud0000',
        dribbble: '',
        behance: '',
        medium: '',
        devto: '',
        website: /*"https://sofyanmahmoud0000.github.io/portfolio"*/'',
        phone: '+201158025968',
        email: 'sofyan1020@gmail.com',
        leetcode: `sofyan1020/`,
        codeforces: /*'Sofyan_Mahmoud'*/'',
    },

    skills: [
        'Algorithms',
        'Data structure',
        'Problem solving',
        'OOP',
        'OOD',
        'Design patterns',
        'C++',
        'Python',
        'PHP',
        'Laravel',
        'JavaScript',
        'React.js',
        'MySQL',
        'MongoDB',
        'Git',
        'Docker',
        'HTML',
        'CSS',
        'Linux',
        'Machine learning',
        'Deep learning',
        'CNN',
        'Touch typing'
    ],

    experiences: [
        {
            company: 'Egyptain armed forces',
            position: 'React software engineer - soldier',
            from: 'December 2021',
            to: 'December 2022'
        },
        {
            company: 'NajahNow Company',
            position: 'Team leader',
            from: 'July 2021',
            to: 'Auguts 2021'
        },
        {
            company: 'NajahNow Company',
            position: 'Software Engineer - Part time',
            from: 'September 2020',
            to: 'March 2021'
        },
        {
            company: 'NajahNow Company via ITIDA internship program',
            position: 'Software Engineer - Intern',
            from: 'July 2020',
            to: 'September 2020'
        }
    ],

    education: [
        {
            institution: 'Cairo University Faculty of Engineering Computer Engineering Department.',
            degree: 'Bachelor of Computer Engineering - (Very good)',
            from: '2016',
            to: '2021',
            grade: 'Very Good'
        },
        {
            institution: 'Bortus El-Thanaweya El-Moshtaraka',
            degree: 'General Secondary Education Certificate',
            from: '2013',
            to: '2016',
            grade: '99%'
        },
    ],

    extra_projects: [
        {
            name: "Najahnow",
            html_url: "https://najahnow.net",
            description: `A website for online education help teacher and student to meet.
            I have worked on this project when I was a software engineer at najahnow company and it\'s the main website \
            for the company`,

            stack: ['laravel', 'php', 'mysql', 'js', 'css', 'html']
        },
        {
            name: "GP - Car awarness system and weather enhacement",
            html_url: "https://drive.google.com/file/d/11GYtO8znR4oq7MEnZ1taFSAtn_udwmGb/view?usp=sharing",
            description: `This is my graduation project, it's to detect the weather condition for autonomus car and \
            enhance the adverse weather to improve object detection and improve the sensor fusion.
            I got excellent in this project and you can click to see the demo`,

            stack: ['CNN', 'Machine Learning', 'Deep Learning', 'Python', 'Tensorflow', 'Colab']
        }
    ],

    aboutMe: [
        `I'm Sofyan Mahmoud, software engineer graduated from Cairo university, faculty of engineering, \ 
        computer engineering department with overall grade - Very good, Excellent for graduation project, 
        for more information about graduation project, you can check my projects.\n
        I\'m interested in software engineering, and here it is my portfolio to see in details \
        all my project and my tech stack. Enjoy 💜`
    ],

    resume: 'resume.pdf',
    under_bio: 'Open to work',
    work: '',

    blog: {
        // Display blog posts from your medium or dev.to account. (Optional)
        source: '', // medium | dev.to
        username: '',
        limit: 2 // How many posts to display. Max is 10.
    },
    googleAnalytics: {
        // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
        id: '' // Please remove this and use your own tag id
    },
    themeConfig: {
        default: 'dark',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded default
        respectPrefersColorScheme: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'dark',
            'light',
            'corporate',
            'halloween',
            'cupcake',
            'bumblebee',
            'emerald',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula'
        ]
    }
}