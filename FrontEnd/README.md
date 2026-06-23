# Front End Technical Specification

- Create a Static Website that serves a HTML website.

## Resume Format Considerations
- Since I'm based in Malaysia, where resumes traditionally follow a format that includes  more personal information than Western standards.

- Malaysian resumes typically include:
    - Age 
    - Date of Birth
    - Marital Status
    - Gender
    - Nationality / Race
    - Photo
    - CGPA 

- I will use the [Harvard Resume Template](https://careerservices.fas.harvard.edu/resources/bullet-point-resume-template/) as the basis but will tweak it to Malaysia industry standards. And it is also ATS-Friendly.

### Harvard Resume Format Generation

Since I'm not that familiar with HTML, so I will used either ChatGPT or Claude or Gemini to convert the Harvard resume template into HTML as a starting point and will tweak it to my preferred standard.

The Prompt that will be used is this:

```text
Convert this resume format into html.
Please don't use a css framework.
Please use the least amount of css tags.
```

Below is the image provided to the LLM:

![](./Docs/Harvard%20Resume%20Template.jpg)



This is the [generated output](./Docs/19th%20May%202026%20Resume.html) which I will
tweak.

This is what the generated HTML looks like unaltered:

![](./Docs/19%20may%202025%20resume%20rendered.jpg)

## HTML Adjustments

- We be using the UTF-8 meta charshet as it can support most languages.
- Will be applying the mobile styling to our website. So we be including the: viewport meta tag =device-width so mobile styling scales normally.
- We will extract our styles into its own stylesheet after we are happy with our HTML markup.
- We will simpligy our HTML markup CSS selector to be minimal as possible.


## Serve Static Website Locally

We need to server out static website locally so we can start using stylesheets externally from our HTML page in a CDE.

This is not necessary with local development.

assuming already node install, we use the simple web-server http-server

### Install HTTP Server
```sh
npm i http-server -g
```

https://www.npmjs.com/package/http-server

### Server Website

http-server will server a pulic folder by default.
the command is run.

```sh
cd FrontEnd
http-server
```
Note: After migrating the project to React + Vite, http-server is no longer the main development server. Vite is now used for local development.

### Image Optimization

Image optimization is needed if you want the backgroud (body) from an image.
usually an image has a large size. the app that I use for it is call webpn.
I did try it and optimize it, but the backgroud seem to weird for it. so I left it out. would probably use it when using real image for myself.

https://compress-or-die.com/webp

![Website Page](./Docs/Webp.jpg)


## Frontend Framework Consideration

After creating the static version, I decided to refactor the project into a React application.

### Why React?
React was chosen because:
- Widely used in frontend development.
- allow the website to be split into resuable components.
- it makes the resume easier to maitain and update.
- suitable for builiding a portfolio project.

### Why Vite?

- The frontend project is simple.
- Vite is easier to set up.
- suitable for small to medium React projects.

### Routing

React Router was configured to support multiple pages such as:

- Home
- Projects
- Skills 
- Contacts

Note: The route structure is still being reviewed. I may decide later whether to keep separate pages or simplify the website into a single-page resume layout.

## how to run React + Vite Project

```sh
cd FrontEnd
npm install
npm run dev
```
Vite will start the local development server and provide a localhost URL.

## Frontend Refactor Progress

### Phase 1: Static HTML/CSS Resume
The first version included:

- Profile section
- Professional summary
- Work experience
- Education
- Certifications
- Skills
- Cloud project section
- Visitor counter placeholder

This phase helped me understand the basic layout and styling requirements before moving to React.


### Phase 2: Migration to React  + Vite 
The static HTML/CSS resume was then converted into a React + Vite project.

Key changes:

- Created a React project using Vite.
- Moved the resume layout into ResumePage.jsx.
- Imported the profile image through React assets.
- Added React Router for navigation.
- Created separate pages for Home, Projects, Skills, and Contact.
- Added navigation using NavLink.
- Added social links such as GitHub and LinkedIn.
- Added certification cards with icons using react-icons.


### Phase 3: Component-Based Refactor

The resume page was later refactored into smaller reusable components.

Components created:

- src/components/resume/ResumeHeader.jsx
- src/components/resume/ResumeSummary.jsx
- src/components/resume/ResumeExperience.jsx
- src/components/resume/ResumeEducation.jsx
- src/components/resume/ResumeCertifications.jsx
- src/components/resume/ResumeSkills.jsx
- src/components/resume/ResumeProjects.jsx

This makes the code easier to read and maintain.

Instead of keeping all JSX inside ResumePage.jsx, each section now has its own component.

For example:

ResumeHeader.jsx handles the profile header.
ResumeSummary.jsx handles the professional summary.
ResumeExperience.jsx handles work experience.
ResumeEducation.jsx handles education.
ResumeCertifications.jsx handles certifications and icons.
ResumeSkills.jsx handles technical skills.
ResumeProjects.jsx handles project details.

### Phase 4: Data-Driven Resume Structure

To make future updates easier, I moved the resume content into a separate data file:

src/data/ResumeData.js

This file stores structured resume information such as:

Profile details
Contact information
Professional summary
Work experience
Education
Certifications
Training
Skills
Cloud project details
Architecture description
Visitor counter placeholder

The React components now receive data through props and render repeated sections using .map().

Example:

- <ResumeHeader profile={ResumeData.profile} />
- <ResumeExperience experience={ResumeData.experience} />
- <ResumeEducation education={ResumeData.education} />
- <ResumeCertifications certifications={ResumeData.certifications} />
- <ResumeSkills skills={ResumeData.skills} />
- <ResumeProjects projects={ResumeData.projects} />


This makes the resume easier to update because most content changes can be done directly inside ResumeData.js without editing the component layout.

