import axios from "axios";

// Funciton to post the user's location to local server
export const Postuserslocation = async (coordinates) => {
  try {
    const res = await axios.post("http://localhost:4000/postlocation", {
      coordinates,
    });
    console.log(res.data);
  } catch (error) {
    console.log(error.response);
  }
};

// Function to get the user's location from the local server\
export const Getuserslocation = async () => {
  let location;
  try {
    await axios.get("http://localhost:4000/getlocation").then((res) => {
      location = res.data;
    });
  } catch (error) {
    console.log(error.response);
  }
  console.log(location);
  return location;
};

//Places API Search
export const GetNearbyPlaces = async (service) => {
  if (service === "Oilchange" || service === "Fluidflush") {
    let results_oilchange = [];
    let Api_result_1;
    await axios
      .get("http://localhost:4000/oilchange")
      .then((res) => {
        Api_result_1 = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
    for (const key of Object.keys(Api_result_1)) {
      results_oilchange.push({
        name: Api_result_1[key].name,
        formatted_address: Api_result_1[key].formatted_address,
        lat: Api_result_1[key].lat,
        lng: Api_result_1[key].lng,
        rating: Api_result_1[key].rating,
        review_count: Api_result_1[key].review_count,
        recommend: Api_result_1[key].recommend,
      });
    }
    return results_oilchange;
  } else if (service === "Brakes") {
    let results_brakes = [];
    let Api_result_2;
    await axios
      .get("http://localhost:4000/brakes")
      .then((res) => {
        Api_result_2 = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
    for (const key of Object.keys(Api_result_2)) {
      if (key > 0) {
        results_brakes.push({
          name: Api_result_2[key].name,
          formatted_address: Api_result_2[key].formatted_address,
          rating: Api_result_2[key].rating,
          review_count: Api_result_2[key].review_count,
        });
      }
    }

    return results_brakes;
  } else if (service === "Tires" || service === "Alignment") {
    let results_tires = [];
    let Api_result_3;
    await axios
      .get("http://localhost:4000/tires")
      .then((res) => {
        Api_result_3 = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
    for (const key of Object.keys(Api_result_3)) {
      results_tires.push({
        name: Api_result_3[key].name,
        formatted_address: Api_result_3[key].formatted_address,
        rating: Api_result_3[key].rating,
        review_count: Api_result_3[key].review_count,
        lat: Api_result_3[key].lat,
        lng: Api_result_3[key].lng,
        recommend: Api_result_3[key].recommend,
      });
    }

    return results_tires;
  }
};
