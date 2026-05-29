# k6 Load Testing Workshop

## 📋 Overview

Welcome! This comprehensive guide will help you set up your environment before the workshop begins.

Please complete the prerequisites steps **before the workshop** to fully participate in the hands-on exercises.

> **💡 Tip:** If you already have some of the tools installed, you can skip those sections.

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

### IV. Demo API playground Books application repository

Clone the Books playground API application that will be used during the workshop exercises:

```bash
git clone https://github.com/razvanvancea/crud-api-express-books-rv.git
cd crud-api-express-books-rv
npm install
npm run start
```

After running the above commands, you should be able to see the Swagger documentation of the application in the browser http://localhost:3001/api-docs

### V. Workshop Repository

Clone the workshop repository and install npm packages. This will be used to create exercises during the session.

```bash
git clone https://github.com/razvanvancea/conference-k6-workshop
cd conference-k6-workshop
npm install
```

### VI. Visual Studio Code (IDE)

Download and install Visual Studio Code from: https://code.visualstudio.com/download

### VII. k6 Studio

Download and install [k6 Studio](https://grafana.com/docs/k6/latest/k6-studio/) from: https://github.com/grafana/k6-studio/releases

Note: for Windows OS, download the k6.Studio-1.13.1.Setup.exe file

### VIII. Optional: Docker

⚠️ Docker is optional and not required for the workshop exercises.

However, if you want to run Docker containers during the workshop, install Docker from: https://www.docker.com/products/docker-desktop

---

## ⚠️ Important Requirements

### System Requirements

Please use a **personal laptop without corporate network or security restrictions**.

During the workshop, we will:

- 📦 Install packages and tools locally
- 🧪 Run code and tests on your machine
- 💻 Execute commands in terminal

To ensure everything works smoothly, you will need:

- ✅ **Active internet connection**
- ✅ **Permission to install software**
- ✅ **No corporate proxies/firewalls blocking tools**

---

## Demo Application

The demo Books API playground application used during the workshop exercises is available here:
https://github.com/razvanvancea/crud-api-express-books-rv

## 💡 Optional (Nice to Have)

Not required, but helpful to have some basic knowledge about:

- 📘 JavaScript fundamentals
- 📘 General understanding of REST APIs, including HTTP methods, status codes, headers, and JSON request/response bodies.

---

## ❗ If Something Doesn't Work

Don't worry! Here are your options:

- 🙋 You can still follow the workshop
- 👥 You can pair with another participant
- 🆘 I will help troubleshoot during the session

---

## 🙌 Ready to Go?

Looking forward to seeing you at the workshop! If you have any questions before we start, feel free to reach out.

**Let's build amazing tests together!** ✨
