async function apiCall(url, data, isFile = false, method = "POST") {
    const formData = new FormData();
    if (isFile && data) {
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
        console.log(formData);
      });
    }
    const headers = new Headers();
  
    if (!isFile) headers.append("Content-Type", "application/json");
  
    if (localStorage.getItem("token"))
      headers.append("x-access-tokens", localStorage.getItem("token"));
  
    const response = await fetch("http://192.168.1.42:5000/academy" + url, {
      method,
      headers,
      body: isFile ? formData : data ? JSON.stringify(data) : undefined,
    });
    return response.json();
  }
  export default apiCall;