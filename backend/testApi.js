import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

async function runTests() {
  try {
    // 1. Логин
    const loginRes = await axios.post(`${BASE_URL}/auth/login`, {
      email: "test@test.com",
      password: "123456",
    });
    console.log("✅ Login OK:", loginRes.data);

    // 2. Participants
    const participantsRes = await axios.get(`${BASE_URL}/participants`);
    console.log("✅ Participants OK:", participantsRes.data);

    // 3. Gala
    const galaRes = await axios.get(`${BASE_URL}/gala`);
    console.log("✅ Gala OK:", galaRes.data);

    // 4. Thesis
    const thesisRes = await axios.get(`${BASE_URL}/thesis`);
    console.log("✅ Thesis OK:", thesisRes.data);

    // 5. Schedule
    const scheduleRes = await axios.get(`${BASE_URL}/schedule`);
    console.log("✅ Schedule OK:", scheduleRes.data);

  } catch (err) {
    console.error("❌ Test failed:", err.response?.data || err.message);
  }
}

runTests();
