FROM node:20-slim

# Install dependencies for Chrome and Allure
RUN apt-get update && apt-get install -y \
    curl unzip default-jre \
    wget gnupg ca-certificates \
    fonts-liberation libappindicator3-1 libasound2 libnspr4 libnss3 libxss1 xdg-utils \
    && rm -rf /var/lib/apt/lists/*

# Install Chrome
RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \
    apt-get update && apt-get install -y ./google-chrome-stable_current_amd64.deb && \
    rm google-chrome-stable_current_amd64.deb

# Add Chrome to PATH
ENV CHROME_BIN=/usr/bin/google-chrome

# Install Allure CLI
RUN wget https://github.com/allure-framework/allure2/releases/download/2.33.0/allure-2.33.0.tgz && \
    tar -zxvf allure-2.33.0.tgz -C /opt && \
    ln -s /opt/allure-2.33.0/bin/allure /usr/bin/allure && \
    rm allure-2.33.0.tgz

# Set working directory
WORKDIR /app

# Copy project files
COPY . .

# Install node modules
RUN npm install --force

# Run on container start (optional)
CMD ["npm", "run", "test:chrome"]