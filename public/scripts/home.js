document.addEventListener("DOMContentLoaded", async (e) => {
  e.preventDefault();
  const rsp = await fetch(`http://localhost:8080/url/analytics/all`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });

  const dataS = await rsp.json();
  console.log(dataS);
});
