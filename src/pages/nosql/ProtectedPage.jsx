import React, { useEffect, useState } from "react";
import axios from "axios";

function ProtectedPage() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5000/protected", {
          headers: {
            Authorization: token,
          },
        });
        setUsername(response.data.username);
      } catch (error) {
        alert("Erişim reddedildi! Lütfen giriş yapın.");
      }
    };
    fetchUserData();
  }, []);

  return (
    <div>
      <h1>Korunan Sayfaya Hoşgeldiniz!</h1>
      {username && <h2>Kullanıcı: {username}</h2>}
    </div>
  );
}

export default ProtectedPage;
