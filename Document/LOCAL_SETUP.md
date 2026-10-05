# Dental Clinic - Local Setup Documentation

## Project Overview

Dental Clinic is a full-stack MERN-based dental clinic website.

### Frontend

- React
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- Lucide React

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Helmet
- CORS
- Express Rate Limit

---

# Prerequisites

Before running the project locally, install:

- Node.js 18+
- npm
- Git
- MongoDB Atlas account
- VS Code or any preferred code editor

Check installations:

````bash
node -v
npm -v
git --version

Check npm: npm -v

Check Git: git --version

3. Clone the GitHub repository: git clone https://github.com/Kaushikanay/dental-clinic.git

Navigate into the project: cd dental-clinic

4. Project Structure:

dental-clinic/
│
├── client/
│   ├── public/
│   │   └── images/
│   │
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── data/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vercel.json
│
├── server/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   └── contactController.js
│   │
│   ├── models/
│   │   └── Contact.js
│   │
│   ├── routes/
│   │   └── contactRoutes.js
│   │
│   ├── server.js
│   └── package.json
│
├── Document/
│   └── LOCAL_SETUP.md
│
├── .gitignore
└── README.md


5. Frontend Setup:

   Open a terminal and navigate to the frontend: cd client
   Install frontend dependencies: npm install

5.1 Frontend Environment Variables

    Create the following file:
    client/.env

    Add:
``` VITE_API_URL=http://localhost:5000
    This variable tells the React frontend where the Express backend is running

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

    Replace the example MongoDB connection string with your actual MongoDB Atlas connection string.
    Important
    Never commit .env files or database credentials to GitHub.
    Make sure .gitignore contains:
    .env
    .env.*

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
    Open MongoDB Atlas:
    Network Access

    Add your development machine IP address.
    This allows your local backend to connect to MongoDB Atlas.
8.4 Database Information
    The application uses:
    Database:
    dental_clinic

    Collection:
    contacts

    The contacts collection stores submitted contact form data.
9. Start Backend
    Inside the server directory run:
    npm run dev

    The backend should run on:
    http://localhost:5000

    You should see messages similar to:
    MongoDB connected
    Server running on port 5000

10. Test Backend Health
    Open the following URL in your browser:
    http://localhost:5000/api/health

    Expected response:
    {
    "success": true,
    "message": "Dental Clinic API is running"
    }

    If this response appears, the backend is running correctly.
11. Run Frontend and Backend Together
    The application requires two terminals during local development.
    Terminal 1 — Backend
    cd dental-clinic/server
    npm run dev

    Backend:
    http://localhost:5000

Terminal 2 — Frontend
    cd dental-clinic/client
    npm run dev

    Frontend:
    http://localhost:5173

    Open:
    http://localhost:5173

    The frontend will communicate with the backend through:
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

    The backend validates the submitted data and stores the contact information in MongoDB Atlas.
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

    Treatment Details
    /services/orthodontics
    /services/pedodontics
    /services/periodontics
    /services/root-canal-treatment
    /services/dental-implants
    /services/teeth-whitening

14. Available Dental Treatments
    The website currently includes:
    1. Orthodontics
    2. Pedodontics
    3. Periodontics
    4. Root Canal Treatment
    5. Dental Implants
    6. Teeth Whitening
    Each treatment has its own detail page.
15. Homepage Sections
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
16. Production Frontend Build
    Navigate to the frontend:
    cd client

    Create a production build:
    npm run build

    The production files will be generated inside:
    client/dist/

    Preview Production Build
    Run:
    npm run preview

17. Server / Backend Commands
    Navigate to:
    cd server

    Install dependencies:
    npm install

    Start development server:
    npm run dev

18. Client / Frontend Commands
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

19. Environment Variables Summary
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

20. Troubleshooting
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
    Frontend Cannot Connect to Backend
    Check:
    client/.env

    Make sure it contains:
    VITE_API_URL=http://localhost:5000

    After changing .env, restart the Vite development server:
    npm run dev

    Port 5000 Already in Use
    If port 5000 is already being used, change the backend port:
    PORT=5001

    Then update the frontend:
    VITE_API_URL=http://localhost:5001

    Restart both frontend and backend.
    Port 5173 Already in Use
    Vite may automatically select another available port.
    Check the terminal output for the actual frontend URL.
21. Security Notes
    Never commit sensitive information to GitHub.
    Do not expose:
    - MongoDB passwords
    - Database credentials
    - API keys
    - Email credentials
    - Authentication secrets
    Sensitive values must be stored in environment variables.
    Example:
    server/.env
    client/.env

    These files should remain local and should not be committed to the repository.
22. Current Project Status
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
    Pending
    - Email notifications
    - Admin dashboard
    - Admin authentication
    - Contact management panel
23. Live Website
    The frontend is deployed on Vercel:
    https://dental-clinic-eight-teal.vercel.app

24. Online Documentation
    Project documentation is available at:
    https://dental-clinic-eight-teal.vercel.app/documentation

25. Development Workflow
    Use the following workflow for local development:
    1. Clone repository
            ↓
    2. Install client dependencies
            ↓
    3. Install server dependencies
            ↓
    4. Create client/.env
            ↓
    5. Create server/.env
            ↓
    6. Configure MongoDB Atlas
            ↓
    7. Start backend
            ↓
    8. Start frontend
            ↓
    9. Open localhost:5173
            ↓
    10. Test contact form
            ↓
    11. Verify data in MongoDB
            ↓
    12. Build frontend
            ↓
    13. Deploy

26. Quick Start
    For an experienced developer, the complete local setup is:
    Terminal 1
    git clone https://github.com/Kaushikanay/dental-clinic.git
    cd dental-clinic/server
    npm install
    npm run dev

    Terminal 2
    cd dental-clinic/client
    npm install
    npm run dev

    Configure the required .env files before starting the application.
    Then open:
    http://localhost:5173

    Conclusion
    The Dental Clinic project is a full-stack web application consisting of a React/Vite frontend, Express.js backend and MongoDB Atlas database.
    The current implementation supports the complete contact form flow from the frontend to the Express API and MongoDB database.
    The project is also deployed on Vercel with online documentation available.
    Email notification and the admin dashboard are planned for the next development phase.

````
