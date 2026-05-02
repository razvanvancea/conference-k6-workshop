# k6 Load Testing Workshop

## Prerequisites Setup Guide

Please complete these steps before the workshop so you can follow the hands-on exercises.

**Please follow the steps below to install the required tools.** If you already have something installed, you can skip that section.

---

## What You Will Set Up

### I. Git

Download and install Git from: https://git-scm.com/install

### II. Node.js

Download and install Node.js from: https://nodejs.org/en/download

### III. k6 Tool

Install the k6 load testing tool:

- **Windows**: Download the k6 .exe installer from https://dl.k6.io/msi/k6-latest-amd64.msi
- **macOS / Linux**: Follow the installation steps at https://grafana.com/docs/k6/latest/set-up/install-k6/


### IV. Verify your setup
Run the following commands:
```
node -v
npm -v
git --version
k6 version
```
Each command should return a version number.

### V. API Application Repository

Clone the API application that will be used during the workshop exercises:

```bash
git clone https://github.com/razvanvancea/crud-api-express-books-rv.git
cd crud-api-express-books-rv
npm install
npm run start
```

After running the above commands, you should be able to see the Swagger documentation of the application in the browser http://localhost:3001/api-docs

### VI. Workshop Repository

Clone the workshop repository and install npm packages. This will be used to create exercises during the session.

```bash
git clone https://github.com/razvanvancea/conference-k6-workshop
cd conference-k6-workshop
npm install
```

#### VII. Run a simple k6 test
In the workshop repository folder, run:
```
npm run sanity:test
```
This command runs a simple k6 test to verify that everything is working correctly.


### VIII. Visual Studio Code (IDE)

Download and install Visual Studio Code from: https://code.visualstudio.com/download


### IX. Optional: Docker
⚠️ Docker is optional and not required for the workshop exercises.

However, if you want to run Docker containers during the workshop, install Docker from: https://www.docker.com/products/docker-desktop

---

## ⚠️ Important Notice

**Please use a personal laptop without corporate network or security restrictions.** 

During the workshop, we will:
- Install packages and tools locally
- Run code and tests on your machine
- Download dependencies from the internet

To ensure a smooth experience, you'll need:
- ✅ Active internet connection
- ✅ Admin/installation permissions
- ✅ No corporate network restrictions or proxies

---

## Demo Application

The API application used during the workshop exercises is available here:
https://github.com/razvanvancea/crud-api-express-books-rv

### ❗ If something doesn’t work

- Don’t worry — you can still follow the workshop  
- You can pair with another participant  
- I will help troubleshoot during the session  
