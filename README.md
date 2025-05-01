# wdioTask

## Summary of Repo

This repository contains a WebdriverIO test suite configured to run end-to-end browser tests against the Telnyx website (or any target you set). It includes:

* **WebdriverIO** configuration files for Chrome, Firefox, and headless runs
* **Allure** reporting integration
* A **GitHub Actions** pipeline that builds a Docker image, runs tests inside Docker, generates the Allure report, and deploys it to GitHub Pages
* A **Dockerfile** and **.dockerignore** for containerizing the test environment

## Requirements

Before you begin, ensure you have the following installed on your local machine:

* [Node.js v20+](https://nodejs.org/)
* [Docker](https://www.docker.com/products/docker-desktop)
* [Git](https://git-scm.com/)

## Steps to Install

1. **Clone the repository**

   ```bash
   git clone https://github.com/<your-org>/wdioTask.git
   cd wdioTask
   ```

2. **Install Node.js dependencies**

   ```bash
   npm install --force
   ```

3. **Build the Docker image**

   ```bash
   docker build -t wdio-project .
   ```

## Steps to Launch Tests Locally

You have two options: run tests directly on your host machine or inside Docker.

### 1. Run on Host Machine

```bash
# Chrome headless
npm run test:headless

# Chrome (non-headless window)
npm run test:chrome

# Firefox
npm run test:firefox
```

### 2. Run Inside Docker

```bash
# Simple run (uses bundled node_modules)
docker run --rm wdio-project

# If you want to mount your code but preserve container modules:
docker run --rm \
  -v "$(pwd)":/app \
  -v /app/node_modules \
  wdio-project
```

## Steps to Create the Allure Report

### Locally

1. Run tests and generate results:

   ```bash
   npm run test:headless
   ```
2. Generate the Allure report:

   ```bash
   npm run allure:gen
   ```
3. Open the report in your browser:

   ```bash
   npm run allure:open
   ```

## GitHub Actions Pipeline

On every push or pull request to `master`, the workflow will:

1. Build the Docker image
2. Run tests inside Docker with up to 10 retries
3. Generate the Allure report
4. Upload the report as an artifact
5. Deploy the report to the `gh-pages` branch via GitHub Pages

Check the file at `.github/workflows/docker-test-and-report.yml` for full details.

---

*Happy testing!*
