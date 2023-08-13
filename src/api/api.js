const LINK = "127.0.0.1";
const PORT = "5000";
const url = `http://${LINK}:${PORT}`;

class Api {
  static async getTickets(params) {
    const queryParams = new URLSearchParams(params);

    try {
      const response = await fetch(`${url}/tickets?${queryParams}`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }

      const data = await response.json();

      return data;
    } catch (error) {
      throw new Error(
        `An error occurred while fetching tickets: ${error.message}`
      );
    }
  }
}

export default Api;
