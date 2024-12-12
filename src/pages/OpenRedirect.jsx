import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function OpenRedirectVulnerable() {
  const { search } = useLocation();
  const [redirectUrl, setRedirectUrl] = useState("https://www.google.com");

  useEffect(() => {
    const params = new URLSearchParams(search);
    const url = params.get("redirect");

    // If the attacker supplies a URL like:
    // https://your-site.com?redirect=https://malicious-website.com
    // then the app will redirect the user to that malicious site after the button is clicked.
    if (url) {
      setRedirectUrl(url);
    }
  }, [search]);

  const handleRedirect = () => {
    // No validation is performed here.
    // This allows an attacker to control where the user is redirected.
    window.location.href = redirectUrl;
  };

  return (
    <div>
      <h1>Click the button to continue</h1>
      <p>
        If the URL contains a parameter like{" "}
        <code>?redirect=https://malicious-website.com</code>, you will be sent
        to that site.
      </p>
      <button onClick={handleRedirect}>Continue</button>
    </div>
  );
}
