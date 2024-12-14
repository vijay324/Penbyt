
<img width="1188" alt="Black Gradient Minimalist Corporate Business Personal Profile New LinkedIn Banner" src="https://github.com/user-attachments/assets/943f3919-ba60-484d-8e81-147db3287cc1" />

   <div align="center">
     <h3 align="center">A study material website <a href="https://www.penbyt.com" target="_blank"><b>Go to Penbyt</b></a> Website. Join the Penbyt family!</h3>
    </div>
    
<div align="center">

  <div>
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
     <img src="https://img.shields.io/badge/-Docker-black?style=for-the-badge&logoColor=white&logo=docker&color=2496ED" alt="docker" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logoColor=white&logo=mongodb&color=47A248" alt="mongodb" />
    <img src="https://img.shields.io/badge/-ShadCN_UI-black?style=for-the-badge&logoColor=white&logo=shadcnui&color=000000" alt="shadcnui" />
    <!-- <img src="https://img.shields.io/badge/-Open_AI-black?style=for-the-badge&logoColor=white&logo=openai&color=412991" alt="openai" /> -->
  </div> 
 
 
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 📦 [Contribution Guid](#Contribution)
6. 🔗 [How to update packages](#Update)

## 🚨 Alert

This repository contains the code of <a href="https://penbyt.com/" target="_blank"><b>Penbyt Website</b></a>.

If you get a study materials, this is the perfect resource for you.

<a href="https://www.jsmastery.pro/ultimate-next-course" target="_blank">
  <img src="https://github.com/user-attachments/assets/54ef6cd0-1f00-4989-a6a5-3f77ca3f68a2" style="width: 150px; height: auto;" />
</a>

## <a name="introduction">🤖 Introduction</a>

Penbyt is a comprehensive study material platform where users can explore a wealth of resources. This project leverages Next.js to create a seamless, full-stack experience. You will master modern web development techniques while building features inspired by community-driven platforms, enhanced with AI capabilities and engaging user interactions.

The platform includes a robust MongoDB database, secure authentication via NextAuth, and a sleek user interface designed with TailwindCSS and ShadCN UI. Penbyt enables users to ask questions, share answers, and utilize AI-generated insights—all within a gamified experience that rewards participation.

Join our active community on Discord, where you can connect with over 5,000 members ready to support you!

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- MongoDB
- TypeScript
- TailwindCSS
- Clerk Auth
- Remix icons

## <a name="features">🔋 Features</a>

👉 **Authentication**: Secure sign-in with Clerk, supporting Email/Password, Google and GitHub.

👉 **content Page**: Displays questions with filters, search, and pagination for easy navigation.

👉 **AI Answer Generation**: Get AI-generated responses to your study related questions. visit <a href="https://chat.penbyt.com" target="_blank"><b>PenGPT</b></a>

👉 **Answer Filtering**: Sort by PUC and Engineering.

👉 **Community**: We have active community on Discord.

👉 **Responsive Design**: Fully optimized for a seamless experience on desktops, tablets, and mobile devices.

👉 **High Performance**: Fast loading and smooth interactions for an efficient user experience.

and many more, including code architecture and reusability

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Clerk](https://clerk.com) (Authentication Manager)
- [MongoDB](https://mongodb.com/)
- [Node.js](https://nodejs.org/en)
- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/products/docker-desktop/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/vijay324/Penbyt.git
cd Penbyt
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
# Mongodb
MONGODB_URI=

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

```

Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up on the respective websites

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="Contribution">📦 Contribution Guide :</a>

Thank you for your interest in contributing to Penbyt! This guide will help you get started with contributing to our project.

## Table of Contents

- 📐 [Setting Up for Contributors](#setting-up-for-first-time-contributors)

- 👩🏻‍💻[Development Workflow](#development-workflow)
- 🚩[Pull Request Guidelines](#pull-request-guidelines)
- 📜 [Code Style Guidelines](#code-style-guidelines)
- 🧾 [Commit Message Guidelines](#commit-message-guidelines)

## Setting Up for Contributors

1. **Install Required Tools**

   - Git ([Download](https://git-scm.com/downloads))
   - Node.js ([Download](https://nodejs.org/))
   - A code editor (We recommend VS Code)

2. **Set Up GitHub Account**

   ```bash
   # Configure your Git username and email
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

## Development Workflow

1. **Clone the Repository**

   ```bash
   # Clone via SSH
   git clone git@github.com:svk324/Penbyt.git

   # OR clone via HTTPS (recommended)
   git clone https://github.com/svk324/Penbyt.git

   # Navigate to project directory
   cd Penbyt
   ```

2. **Set Up Development Environment**

   ```bash
   # Install dependencies
   npm install

   # Create and configure .env file
   cp .env.local (or) .env
   # Edit .env with your credentials

   # Start development server
   npm run dev
   ```

3. **Create a New Branch**

   ```bash
   # Ensure you're on main and up-to-date
   git checkout main
   git pull origin main

   # Create and switch to a new branch
   git checkout -b feature/your-feature-name
   # OR
   git checkout -b fix/bug-description
   ```

4. **Make Your Changes**

   - Write your code
   - Test your changes locally

5. **Commit Your Changes**

   ```bash
   # Add changed files
   git add .

   # Commit with meaningful message
   git commit -m "feat: add new study material feature"
   ```

6. **Push Changes and Create PR**
   ```bash
   # Push your branch
   git push origin feature/your-feature-name
   ```
   - Go to GitHub and create a Pull Request
   - Fill in the PR template with necessary details

## Pull Request Guidelines

- **Title**: Use clear, descriptive titles

  - Format: `[Type] Brief description`
  - Example: `[Feature] Add PUC study materials section`

- **Description**:

  ```markdown
  ## Changes Made

  - Detailed list of changes
  - Impact on existing features

  ## Additional Notes

  - Any other relevant information
  ```

## Code Style Guidelines

1. **TypeScript**

   - Use meaningful variable names
   - Add type annotations
   - Follow ES6+ conventions

2. **React/Next.js**

   - Use functional components
   - Implement proper error handling

3. **Tailwind CSS**
   - Use utility classes consistently
   - Follow mobile-first approach
   - Use ShadCN UI components when possible

## Commit Message Guidelines

Follow the Conventional Commits specification:

```bash
# Format
type(scope): description

# Examples
feat(auth): add Google authentication
fix(ui): resolve mobile navigation issue
docs(readme): update installation steps
```

Use short-cut words:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Testing changes
- `chore`: Maintenance tasks

## <a name="Update">🔗 For update Packages :</a>

```bash
npm install -g npm-check-updates
# next
npx npm-check-updates
# next
npx npm-check-updates -u
# next
npm install
```

## Need Help?

- Join our Discord community
- Check existing issues and pull requests
- Reach out to project maintainers or mail to team@penbyt.com

#

Happy Coding 😊
