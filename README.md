# k6 Load Testing Workshop

## Prerequisites Setup Guide

This guide will help you prepare your environment before the workshop so you can start coding right away.

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


### IV. API Application Repository

Clone the API application that will be used during the workshop exercises:

```bash
git clone https://github.com/razvanvancea/crud-api-express-books-rv.git
npm install
cd crud-api-express-books-rv
npm run start
```

After running above commands, you should be able to see the Swagger documentation of the application in the browser http://localhost:3001/api-docs

### IV. Workshop Repository

Clone the workshop repository and install npm packages. This will be used to create exercises during the session.

the last command will run a simple test to check that your setup is complete.

```bash
git clone https://github.com/razvanvancea/conference-k6-workshop
cd conference-k6-workshop
npm install
npm run sanity:test
```


### VII. Visual Studio Code (IDE)

Download and install Visual Studio Code from: https://code.visualstudio.com/download


### IX. Optional: Docker

If you want to run Docker containers during the workshop, install Docker from: https://www.docker.com/products/docker-desktop

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
