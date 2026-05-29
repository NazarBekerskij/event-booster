const BASE_URL = "https://app.ticketmaster.com/discovery/v2/events.json";
const API_KEY = "EVDOv2DA0yM2nfxqUJW4oSne0yWf70dD";

async function getEvents(page = 0) {
  const res = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&size=20&countryCode=US&page=${page}`
  );

  return await res.json();
}

export { getEvents };