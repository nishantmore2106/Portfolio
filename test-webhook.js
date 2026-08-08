async function testWebhook() {
  const url = "https://script.google.com/macros/s/AKfycbyB4-zqJ84beoorQVAsBY_goB8mXdzJb6N3W09MqggPrckFs8h7tQFoVUcSHjVmRfMQ/exec";
  const data = {
    firstName: "Test",
    lastName: "User",
    email: "test@example.com",
    requirements: "Testing the webhook",
    plan: "N/A"
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain", // simulating the no-cors fallback
      },
      body: JSON.stringify(data),
    });
    
    const text = await response.text();
    console.log("Status:", response.status);
    console.log("Response:", text);
  } catch (err) {
    console.error("Error:", err);
  }
}

testWebhook();
