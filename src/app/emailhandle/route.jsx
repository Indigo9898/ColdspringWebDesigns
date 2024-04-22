"use client";

async function handleSubmit(e) {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  let allData = (Object.fromEntries(data).email);

  

  try {
    const response = await fetch("/api/emailsender", {
      method: "POST",
      body: data, // Convert FormData to JSON
    });
    if (!response.ok) {
      throw new Error(`Invalid response: ${response.status}`);
    }
    alert("Thanks for contacting us, we will get back to you soon!");
  } catch (err) {
    console.error(err);
    alert("We can't submit the form, try again later?");
  }
}

export default handleSubmit;
