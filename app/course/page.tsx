export default function CousePage() {

  return (
    <div className="bg-blue-800 mt-16 h-full flex xl:justify-center">
      <div className="h-full w-187.5">
        <h1>{course.courseTitle}</h1>

        {course.modules.map((module, index) => (
          <div key={index} id={`module-${index}`} className="moduleheading">
            <h2>{module.mainTitle}</h2>

            {module.topics.map((topic, i) => (
              <div key={i}>
                <h3>{topic.subtitle}</h3>
                <p>{topic.text}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const course=
    {
        courseTitle: "Full-Stack Web Development: From Zero to Deployment",
        modules: [
            {
            mainTitle: "1. Introduction to the Web",
            topics: [
                {
                subtitle: "What is the Web?",
                text: "The Web is a global network of interconnected computers that deliver information using the HTTP protocol. Every time you visit a website, your browser sends a request to a server that returns HTML, CSS, JavaScript, or other data. Understanding how this communication works is the foundation of all web development."
                },
                {
                subtitle: "How Websites Work",
                text: "Websites are built with front-end code that runs on the user's device and back-end code that runs on servers. The browser renders HTML for structure, CSS for design, and JavaScript for interactivity. On the server side, business logic processes requests, accesses databases, and returns responses."
                },
                {
                subtitle: "Frontend vs Backend vs Full-Stack",
                text: "Frontend development focuses on the user interface and user experience. Backend development involves databases, authentication, routing, and server logic. A full-stack developer works across both ends, understanding how all parts of the application communicate."
                }
            ]
            },
            {
            mainTitle: "2. HTML Fundamentals",
            topics: [
                {
                subtitle: "HTML Structure",
                text: "HTML (HyperText Markup Language) provides the structure of every web page. A typical document contains doctype declaration, html tag, head section, and body section. Elements like headers, paragraphs, links, images, and lists define content and layout."
                },
                {
                subtitle: "Semantic HTML",
                text: "Semantic HTML uses meaningful tags such as <header>, <footer>, <section>, <article>, and <nav> to clearly describe the content. This improves accessibility, SEO, and maintainability. Screen readers and search engines rely on these semantics for understanding page structure."
                },
                {
                subtitle: "Forms and Inputs",
                text: "Forms allow users to submit information. Understanding inputs, labels, validation, and form attributes is essential because nearly every web app requires user data collection—login forms, search bars, checkout pages, and more."
                }
            ]
            },
            {
            mainTitle: "3. CSS Styling and Layout",
            topics: [
                {
                subtitle: "CSS Basics",
                text: "CSS (Cascading Style Sheets) is used to control the appearance of a website. It defines colors, fonts, spacing, borders, and more. Styles can be applied inline, internally, or via external stylesheets, with the latter being the best practice for scalability."
                },
                {
                subtitle: "Flexbox and Grid",
                text: "Modern layout systems like Flexbox and CSS Grid enable responsive design with minimal code. Flexbox controls one-dimensional layouts while Grid provides powerful two-dimensional control. These tools replace older, more complex layout methods like floats."
                },
                {
                subtitle: "Responsive Design",
                text: "Responsive design ensures the website adapts to different screen sizes (mobile, tablet, desktop). Media queries, fluid units, and mobile-first design principles help developers build accessible and user-friendly interfaces across devices."
                }
            ]
            },
            {
            mainTitle: "4. JavaScript: The Language of the Web",
            topics: [
                {
                subtitle: "JavaScript Basics",
                text: "JavaScript enables interactivity on web pages. Variables, functions, loops, and conditionals form the core building blocks. Understanding syntax and runtime behavior is essential for creating dynamic websites."
                },
                {
                subtitle: "DOM Manipulation",
                text: "The Document Object Model (DOM) is a representation of the webpage structure. JavaScript can select, modify, and animate elements using DOM APIs. This is how buttons trigger actions, animations play, or content changes dynamically."
                },
                {
                subtitle: "Asynchronous JavaScript",
                text: "Web apps frequently communicate with servers, requiring async programming. Promises, async/await, and fetch API allow developers to handle data loading, error handling, and background operations without freezing the UI."
                }
            ]
            },
            {
            mainTitle: "5. Backend Development Fundamentals",
            topics: [
                {
                subtitle: "What is a Server?",
                text: "A server is a system that handles client requests and returns responses. It processes logic such as authentication, data processing, and routing. Common backend environments include Node.js, Python’s Django, PHP, and more."
                },
                {
                subtitle: "APIs and Routing",
                text: "An API allows applications to communicate. REST APIs define endpoints like GET, POST, PUT, DELETE to interact with server data. Routing defines how URLs map to specific logic within an application."
                },
                {
                subtitle: "Databases (SQL & NoSQL)",
                text: "Databases store application data. SQL databases like MySQL and PostgreSQL use structured tables, while NoSQL databases like MongoDB store flexible JSON-like documents. Choosing the right database depends on data complexity and performance needs."
                }
            ]
            },
            {
            mainTitle: "6. Full-Stack Integration",
            topics: [
                {
                subtitle: "Connecting Frontend to Backend",
                text: "Full-stack development requires building a pipeline where the frontend makes requests to backend endpoints using fetch or Axios. The backend validates input, interacts with the database, and returns structured JSON responses."
                },
                {
                subtitle: "Authentication & Security",
                text: "Authentication involves verifying user identity—often using JWT tokens or session-based auth. Security measures like hashing passwords, preventing SQL injection, and using HTTPS are essential to protect data and users."
                },
                {
                subtitle: "State Management",
                text: "As apps grow, managing data becomes complex. Tools like Redux, React Context, or server-side state handling help track user sessions, UI data, and application logic across multiple components."
                }
            ]
            },
            {
            mainTitle: "7. Deployment & Web Hosting",
            topics: [
                {
                subtitle: "Preparing for Deployment",
                text: "Before deploying, developers bundle and optimize their files, reduce image sizes, minify code, and ensure environment variables are configured properly. Build tools like Webpack, Vite, and Parcel assist with this process."
                },
                {
                subtitle: "Hosting Options",
                text: "Hosting platforms like Vercel, Netlify, GitHub Pages, and traditional VPS servers allow websites to go live. Modern platforms offer continuous deployment, automatic builds, and scalability out of the box."
                },
                {
                subtitle: "Monitoring & Maintenance",
                text: "Once deployed, developers must monitor performance, logs, uptime, and security. Tools like Google Analytics, Sentry, and server monitoring dashboards help ensure the app stays healthy and efficient."
                }
            ]
            }
        ]
    }
