const BASE_URL = "https://app.ticketmaster.com/discovery/v2/events.json";
const API_KEY = "EVDOv2DA0yM2nfxqUJW4oSne0yWf70dD";

async function getEvents(page = 0, keyword = "", countryCode = "") {
  const res = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&size=20&countryCode=${countryCode}&page=${page}&keyword=${keyword}`
  );
  return await res.json();
}

export { getEvents };