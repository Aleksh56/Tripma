const LINK = "127.0.0.1";
const PORT = "5000";
const url = `http://${LINK}:${PORT}`;

class Api {
  static async getTickets(params) {
    const queryParams = new URLSearchParams(params);
    const response = await fetch(`${url}/tickets?${queryParams}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  }
}

export default Api;
