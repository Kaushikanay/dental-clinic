Dental Clinic - Local Setup Documentation

1. Project Overview
   Dental Clinic is a full-stack MERN-based dental clinic website.
   Frontend
   - React
   - Vite
   - Tailwind CSS
   - Framer Motion
   - React Router
   - Lucide React
     Backend
   - Node.js
   - Express.js
   - MongoDB Atlas
   - Mongoose
   - Helmet
   - CORS
   - Express Rate Limit
     The current implementation includes a responsive clinic website,
     treatment detail pages, professional results, testimonials, clinic/video
     content, contact form integration, legal pages, and a working Express +
     MongoDB contact API.

2. Prerequisites
   Before running the project locally, install:

- Node.js 18+
- npm
- Git
- MongoDB Atlas account
- VS Code or another preferred code editor
  Check installations:
  node -v
  npm -v
  git --version

3. Clone the Repository
   git clone https://github.com/Kaushikanay/dental-clinic.git
   cd dental-clinic
4. Project Structure
   dental-clinic/
   │
   ├── client/
   │ ├── public/
   │ │ └── images/
   │ │
   │ ├── src/
   │ │ ├── components/
   │ │ │ ├── home/
   │ │ │ │ ├── ProfessionalResults.jsx
   │ │ │ │ ├── Testimonials.jsx
   │ │ │ │ ├── YoutubeSection.jsx
   │ │ │ │ └── ...
   │ │ │ ├── Navbar.jsx
   │ │ │ ├── Footer.jsx
   │ │ │ ├── ScrollToTop.jsx
   │ │ │ └── ...
   │ │ │
   │ │ ├── context/
   │ │ │ └── ThemeContext.jsx
   │ │ │
   │ │ ├── data/
   │ │ │
   │ │ ├── pages/
   │ │ │ ├── Home.jsx
   │ │ │ ├── AboutPage.jsx
   │ │ │ ├── ContactPage.jsx
   │ │ │ ├── TreatmentDetails.jsx
   │ │ │ ├── DocumentationPage.jsx
   │ │ │ ├── PrivacyPolicyPage.jsx
   │ │ │ └── TermsConditionsPage.jsx
   │ │ │
   │ │ ├── App.jsx
   │ │ ├── index.css
   │ │ └── main.jsx
   │ │
   │ ├── package.json
   │ └── vercel.json
   │
   ├── server/
   │ ├── config/
   │ │ └── db.js
   │ │
   │ ├── controllers/
   │ │ └── contactController.js
   │ │
   │ ├── models/
   │ │ └── Contact.js
   │ │
   │ ├── routes/
   │ │ └── contactRoutes.js
   │ │
   │ ├── server.js
   │ └── package.json
   │
   ├── Document/
   │ └── LOCAL_SETUP.md
   │
   ├── .gitignore
   └── README.md
5. Frontend Setup
   Open a terminal and navigate to the frontend:
   cd client
   Install frontend dependencies:
   npm install
   5.1 Frontend Environment Variables
   Create:
   client/.env
   Add:
   VITE_API_URL=http://localhost:5000
   This variable tells the React frontend where the Express backend is
   running.
   5.2 Start Frontend
   Run:
   npm run dev
   The frontend will normally be available at:
   http://localhost:5173
6. Backend Setup
   Open a second terminal.
   From the project root:
   cd server
   Install backend dependencies:
   npm install
7. Backend Environment Variables
   Create:
   server/.env
   Add:
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   Example:
   PORT=5000
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dental_clinic
   Replace the example connection string with your actual MongoDB Atlas
   connection string.
   Important
   Never commit .env files or database credentials to GitHub.
   Make sure .gitignore contains:
   .env
   .env.\*
   If a MongoDB password contains special characters such as @, encode
   the character before using it in the MongoDB URI.
8. MongoDB Atlas Setup
   The backend uses MongoDB Atlas for persistent contact form data.
   8.1 Create MongoDB Atlas Account
   Create a MongoDB Atlas account and create a cluster.
   8.2 Create Database User
   Create a MongoDB database user with:
   - Username
   - Password
     Use these credentials in your MongoDB connection string.
     8.3 Configure Network Access
     In MongoDB Atlas:
     Network Access
     Add your development machine IP address.
     For local development, ensure your Atlas network rules allow the machine
     running the backend to connect.
     8.4 Database Information
     The application uses:
     Database:
     dental_clinic
     Collection:
     contacts
     The contacts collection stores submitted contact form data.

9. Start Backend
   Inside the server directory:
   npm run dev
   The backend should run on:
   http://localhost:5000
   You should see messages similar to:
   MongoDB connected
   Server running on port 5000
10. Test Backend Health
    Open:
    http://localhost:5000/api/health
    Expected response:
    {
    "success": true,
    "message": "Dental Clinic API is running"
    }
    If this response appears, the backend is running correctly.
11. Run Frontend and Backend Together
    The application requires two terminals during local development.
    Terminal 1 --- Backend
    cd dental-clinic/server
    npm run dev
    Backend:
    http://localhost:5000
    Terminal 2 --- Frontend
    cd dental-clinic/client
    npm run dev
    Frontend:
    http://localhost:5173
    Open:
    http://localhost:5173
    The frontend communicates with the backend through:
    VITE_API_URL=http://localhost:5000
12. Contact Form API
    The contact/appointment form communicates with the Express backend.
    API Endpoint
    POST /api/contact
    Local endpoint:
    http://localhost:5000/api/contact
    Request Body
    Example:
    {
    "name": "Anay Kumar",
    "phone": "9876543210",
    "email": "anay@example.com",
    "subject": "Dental Appointment",
    "message": "I would like to book a dental appointment."
    }
    The backend validates the submitted data and stores the contact
    information in MongoDB Atlas.
    Contact Form Flow
    User
    ↓
    React Contact Form
    ↓
    POST /api/contact
    ↓
    Express.js
    ↓
    Validation
    ↓
    Mongoose
    ↓
    MongoDB Atlas
    ↓
    contacts collection
    The contact submission flow has been tested successfully.
13. Frontend Routes
    The application currently contains the following routes.
    Home
    /
    About
    /about
    Contact
    /contact
    Documentation
    /documentation
    Privacy Policy
    /privacy-policy
    Terms & Conditions
    /terms-and-conditions
    Treatment Details
    /services/orthodontics
    /services/pedodontics
    /services/periodontics
    /services/root-canal-treatment
    /services/dental-implants
    /services/teeth-whitening
14. Route Navigation and Scroll Behavior
    The application uses React Router for internal navigation.
    A reusable ScrollToTop.jsx component is used to handle route changes.
    Expected behavior:

- Opening a normal route starts at the top of the page.
- Homepage hash links can target specific sections.
- Existing scroll position does not remain unexpectedly when
  navigating to another page.
  Example component:
  import { useEffect } from "react";
  import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
const { pathname, hash } = useLocation();

useEffect(() => {
if (hash) {
const element = document.getElementById(hash.substring(1));

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);

        return;
      }
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

}, [pathname, hash]);

return null;
} 15. Available Dental Treatments
The website currently includes:

1.  Orthodontics
2.  Pedodontics
3.  Periodontics
4.  Root Canal Treatment
5.  Dental Implants
6.  Teeth Whitening
    Each treatment has its own detail page.
    Treatment route mapping:
    orthodontics
    pedodontics
    periodontics
    root-canal-treatment
    dental-implants
    teeth-whitening
7.  Homepage Sections
    The homepage currently includes:
    - Hero
    - About
    - Doctor
    - Features
    - Treatments
    - Professional Results
    - Testimonials
    - Inside Our Clinic / YouTube
    - Call to Action
    - Footer
      Professional Results
      The Professional Results section contains multiple before/after
      treatment pairs.
      Current image naming:
      professional-before.png
      professional-after.png
      professional-before-2.png
      professional-after-2.png
      professional-before-3.png
      professional-after-3.png
      The section includes:
    - Before treatment
    - After treatment
    - Visual separator
    - Pair navigation
    - Previous / Next controls
    - Result counter
    - Responsive layout
      Testimonials
      The Testimonials section provides patient feedback in a responsive
      presentation with patient imagery and navigation.
      Inside Our Clinic
      The homepage also includes a dedicated clinic/video section for
      presenting the clinic environment and video content.

8.  Theme System
    The application supports:
    Light Theme
    Dark Theme
    Theme state is handled through:
    client/src/context/ThemeContext.jsx
    Theme preference is persisted through browser local storage.
    The application uses CSS variables for consistent theme colors across:
    - Navbar
    - Hero
    - Sections
    - Cards
    - Doctor section
    - Documentation
    - Legal pages
    - Footer

9.  Legal Pages
    The project includes dedicated legal pages.
    Privacy Policy
    Route:
    /privacy-policy
    File:
    client/src/pages/PrivacyPolicyPage.jsx
    The page includes topics such as:
    - Introduction
    - Information We Collect
    - How Information Is Used
    - Medical & Sensitive Information
    - Data Security
    - Sharing of Information
    - Cookies & Website Usage
    - Data Storage & Retention
    - Privacy Choices
    - Policy Updates
    - Contact Information
    - FAQ
      Terms & Conditions
      Route:
      /terms-and-conditions
      File:
      client/src/pages/TermsConditionsPage.jsx
      The page includes topics such as:
    - Acceptance of Terms
    - Website Use
    - Appointments & Enquiries
    - Medical Information & Treatment
    - Treatment Fees & Payments
    - Website Content
    - Intellectual Property
    - Third-Party Links & Services
    - Website Availability
    - Limitation of Liability
    - Changes to Terms
    - Contact Information
    - FAQ
      Legal Notice
      The legal pages are website-level informational pages. Actual clinic
      details, policies, applicable jurisdiction and final legal wording
      should be reviewed before production use.

10. Production Frontend Build
    Navigate to the frontend:
    cd client
    Create a production build:
    npm run build
    Production files are generated inside:
    client/dist/
    Preview Production Build
    Run:
    npm run preview
11. Server / Backend Commands
    Navigate to:
    cd server
    Install dependencies:
    npm install
    Start development server:
    npm run dev
12. Client / Frontend Commands
    Navigate to:
    cd client
    Install dependencies:
    npm install
    Start development server:
    npm run dev
    Create production build:
    npm run build
    Preview production build:
    npm run preview
13. Environment Variables Summary
    Frontend
    File:
    client/.env
    Configuration:
    VITE_API_URL=http://localhost:5000
    Backend
    File:
    server/.env
    Configuration:
    PORT=5000
    MONGODB_URI=your_mongodb_connection_string
    Do not commit either .env file.
14. Troubleshooting
    MongoDB Connection Failed
    Check:
    server/.env
    Make sure:
    MONGODB_URI=your_mongodb_connection_string
    is correctly configured.
    Also verify:
    - MongoDB Atlas cluster is running
    - Database username is correct
    - Database password is correct
    - Network Access allows your IP
    - Connection string is correct
    - Special characters in the password are URL encoded
      Frontend Cannot Connect to Backend
      Check:
      client/.env
      Make sure it contains:
      VITE_API_URL=http://localhost:5000
      After changing .env, restart Vite:
      npm run dev
      Port 5000 Already in Use
      Change:
      PORT=5001
      Then update frontend:
      VITE_API_URL=http://localhost:5001
      Restart both frontend and backend.
      Port 5173 Already in Use
      Vite may automatically select another available port.
      Check the terminal output for the actual frontend URL.
      Documentation Page Does Not Open Directly on Vercel
      The frontend uses SPA routing.
      Make sure client/vercel.json contains:
      {
      "$schema": "https://openapi.vercel.sh/vercel.json",
      "rewrites": [
      {
      "source": "/(.*)",
      "destination": "/index.html"
      }
      ]
      }
      The documentation route is:
      /documentation
      Do not create a separate documentation.html page for the React route.

15. Security Notes
    Never commit sensitive information to GitHub.
    Do not expose:
    - MongoDB passwords
    - Database credentials
    - API keys
    - Email credentials
    - Authentication secrets
    - Private tokens
      Sensitive values must be stored in environment variables.
      Example:
      server/.env
      client/.env
      These files should remain local and should not be committed to the
      repository.
      The backend currently uses:
    - Helmet
    - CORS
    - Express Rate Limit
    - Request validation
    - Environment variables

16. Current Project Status
    Completed

        - Responsive React frontend
        - React Router navigation
        - Dark / Light theme
        - Hero section
        - About section
        - Doctor section
        - Features section
        - Treatments section
        - Treatment detail pages
        - Professional Results section
        - Testimonials section
        - Inside Our Clinic / YouTube section
        - Contact page
        - Contact / Appointment form
        - Express REST API
        - MongoDB Atlas integration
        - Contact data storage
        - Mongoose integration
        - Helmet security
        - CORS configuration
        - API rate limiting
        - Vercel frontend deployment
        - Online project documentation
        - Privacy Policy page
        - Terms & Conditions page
        - FAQ sections
        - Route scroll-to-top behavior
        - Updated project documentation
        Pending
        - Email notifications
        - Admin dashboard
        - Admin authentication
        - Contact management panel

17. Email Notification Status
    Email notification is not yet configured as a completed production
    feature.
    Current status:
    Contact Form
    ↓
    Express API
    ↓
    MongoDB Atlas
    ↓
    Contact Saved
    Future flow:
    Contact Form
    ↓
    Express API
    ↓
    Validation
    ↓
    MongoDB Atlas
    ↓
    Email Notification
    ↓
    Clinic Email Inbox
    A transactional email provider can be integrated in the next backend
    phase.
    Do not place email passwords, SMTP passwords or API keys directly inside
    source code.
18. Admin Dashboard Roadmap
    The next major backend phase is an admin dashboard.
    Planned functionality:
    - Admin login
    - Authentication
    - Protected admin routes
    - View contact submissions
    - View appointment enquiries
    - Update contact status
    - Mark enquiry as read
    - Mark enquiry as contacted
    - Close enquiry
    - Delete or archive submissions
    - Dashboard statistics
    - Secure session/token handling
      Suggested contact statuses already supported by the contact model:
      new
      read
      contacted
      closed

19. Live Website
    The frontend is deployed on Vercel:
    https://dental-clinic-eight-teal.vercel.app
20. Online Documentation
    Project documentation is available at:
    https://dental-clinic-eight-teal.vercel.app/documentation
    Legal pages:
    https://dental-clinic-eight-teal.vercel.app/privacy-policy
    https://dental-clinic-eight-teal.vercel.app/terms-and-conditions
21. Development Workflow
    Use the following workflow for local development:
22. Clone repository
    ↓
23. Install client dependencies
    ↓
24. Install server dependencies
    ↓
25. Create client/.env
    ↓
26. Create server/.env
    ↓
27. Configure MongoDB Atlas
    ↓
28. Start backend
    ↓
29. Start frontend
    ↓
30. Open localhost:5173
    ↓
31. Test contact form
    ↓
32. Verify data in MongoDB
    ↓
33. Test documentation route
    ↓
34. Test legal routes
    ↓
35. Build frontend
    ↓
36. Deploy
37. Quick Start
    For an experienced developer:
    Terminal 1 --- Backend
    git clone https://github.com/Kaushikanay/dental-clinic.git
    cd dental-clinic/server
    npm install
    Create:
    server/.env
    Configure:
    PORT=5000
    MONGODB_URI=your_mongodb_connection_string
    Then:
    npm run dev
    Terminal 2 --- Frontend
    cd dental-clinic/client
    npm install
    Create:
    client/.env
    Configure:
    VITE_API_URL=http://localhost:5000
    Then:
    npm run dev
    Open:
    http://localhost:5173
    Test:
    http://localhost:5000/api/health
38. Important Production Checklist
    Before production release:
    - [ ] Replace development API URL with production API URL
    - [ ] Configure production MongoDB connection
    - [ ] Verify MongoDB Atlas network/security settings
    - [ ] Verify Vercel SPA rewrite
    - [ ] Test all React routes
    - [ ] Test treatment detail pages
    - [ ] Test contact form
    - [ ] Verify contact documents in MongoDB
    - [ ] Test Privacy Policy
    - [ ] Test Terms & Conditions
    - [ ] Test dark/light theme
    - [ ] Test mobile navigation
    - [ ] Test Professional Results
    - [ ] Test Testimonials
    - [ ] Test Inside Our Clinic section
    - [ ] Run npm run build
    - [ ] Verify no console errors
    - [ ] Configure transactional email
    - [ ] Implement admin authentication
    - [ ] Implement admin dashboard
    - [ ] Review final legal content
    - [ ] Confirm production secrets are not committed

39. Conclusion
    The Dental Clinic project is a full-stack web application consisting of:
    - React/Vite frontend
    - Tailwind CSS
    - Framer Motion
    - React Router
    - Express.js backend
    - MongoDB Atlas
    - Mongoose
      The current implementation supports the complete contact form flow from
      the frontend to the Express API and MongoDB database.
      The project also includes:
    - Responsive clinic website
    - Dental treatment modules
    - Treatment detail pages
    - Professional Results
    - Testimonials
    - Inside Our Clinic
    - Dark/Light theme
    - Privacy Policy
    - Terms & Conditions
    - FAQ content
    - Online documentation
    - Vercel frontend deployment
    - Security middleware
    - API rate limiting
      The next major development phase is:
      Email Notifications
      ↓
      Admin Authentication
      ↓
      Admin Dashboard
      ↓
      Contact Management
      This document should be kept updated whenever a major frontend, backend,
      database, authentication, deployment or administrative feature is added.
