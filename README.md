# Vulnerable React.js Application

This repository contains a vulnerable React.js application intentionally designed for educational and security testing purposes. The application includes common web vulnerabilities such as **NoSQL Injection**, **Cross-Site Scripting (XSS)**, **Open Redirect**, and **Session Management Issues**.

> **Disclaimer:** This project is for learning and demonstration purposes only. Do not deploy this application on public servers or use it in production environments.

---

## **Vulnerabilities Overview**

### 1. **NoSQL Injection**
- **Description:** The application allows malicious queries in API endpoints, enabling NoSQL injection attacks.
- **Example Exploit:**
  ```json
  {
    "username": { "$ne": null },
    "password": { "$ne": null }
  }
  ```

### 2. **Cross-Site Scripting (XSS)**
- **Description:** User input is directly rendered into the DOM without sanitization.
- **Example Exploit:**
  ```html
  <script>alert('XSS Exploit');</script>
  ```

### 3. **Open Redirect**
- **Description:** Redirect logic accepts unvalidated URLs, allowing attackers to redirect users to malicious websites.
- **Example Exploit:**
  ```plaintext
  https://example.com/redirect?redirect=http://malicious.com
  ```

### 4. **Session Management Issues**
- **Description:** Sessions are managed using insecure methods such as localStorage without expiration or secure flags.
- **Example Exploit:**
  - Lack of token expiration.

---

## **Installation Instructions**

1. **Clone the Repository:**
   ```bash
   cd vulnerable-react-app
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the Application:**
   ```bash
   npm start
   ```

4. **Access the Application:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---
4. **For nosql:**
```bash
   cd /backend
   node server.js
   ```
## **How to Use for Security Testing**

- Use common penetration testing tools like **Burp Suite**, **OWASP ZAP**, or **Postman**.
- Perform manual tests to identify vulnerabilities.
- Inject payloads in input fields to test for XSS, NoSQL Injection, and Open Redirects.

---

## **Educational Goals**
- Understand common web application vulnerabilities.
- Learn about secure development practices.
- Practice using security testing tools.

---

## **Security Best Practices Recommendations**

1. **NoSQL Injection Prevention:**
   - Use parameterized queries.
   - Validate and sanitize all input.

2. **XSS Prevention:**
   - Use libraries like `DOMPurify`.
   - Escape user-generated content.

3. **Open Redirect Prevention:**
   - Validate and restrict redirect URLs.
   - Use a whitelist of allowed domains.

4. **Session Management Security:**
   - Use `httpOnly` and `secure` flags for cookies.
   - Implement token expiration and refresh mechanisms.

---

## **Contributions and Support**
- Feel free to open issues or submit pull requests for improvements.

---

## **License**
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

> **Important Notice:** Use this project responsibly. Do not use the code or knowledge gained from this repository for malicious activities. The authors are not responsible for any misuse of this application.

