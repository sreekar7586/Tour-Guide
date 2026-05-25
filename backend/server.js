const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());

const PORT = 5000;

const API_KEY =
    "83eb4ce64f53480eb3d1c98766b092af";


// SEARCH ROUTE
app.get("/search", async (req, res) => {

    try {

        const city =
            req.query.city
                ?.trim();

        if (!city) {

            return res.status(400).json({

                error:
                    "Please enter a city"
            });
        }


        // STEP 1: GET LOCATION
        const geoUrl =
            `https://api.geoapify.com/v1/geocode/search?text=${city}&apiKey=${API_KEY}`;

        console.log("Geo URL:", geoUrl);

        const geoResponse =
            await axios.get(geoUrl);

        if (
            !geoResponse.data.features ||
            geoResponse.data.features.length === 0
        ) {

            return res.status(404).json({

                error:
                    "City not found"
            });
        }

        const placeData =
            geoResponse.data.features[0];

        const lat =
            placeData.properties.lat;

        const lon =
            placeData.properties.lon;


        // STEP 2: GET TOURIST PLACES
        // FIX 1: Better categories (museums, restaurants, entertainment, etc)
        // FIX 2: Add proximity bias to prioritize nearby famous places
        // FIX 3: Sort results by distance
        // FIX 6: Smaller radius (10000m = 10km instead of 15km)
        const placesUrl =
    `https://api.geoapify.com/v2/places?categories=tourism.sights,tourism.attraction,heritage,historic,museum,park,entertainment,catering.restaurant&filter=circle:${lon},${lat},10000&bias=proximity:${lon},${lat}&limit=15&sort=distance&apiKey=${API_KEY}`;

        console.log("Places URL:", placesUrl);

        const placesResponse =
            await axios.get(placesUrl);

        const features =
            placesResponse.data.features || [];

        const places =
            features

                .filter(place =>
                    place.properties.name
                )

                .map(place => ({

                    name:
                        place.properties.name,

                    address:
                        place.properties.formatted
                        || "Address unavailable",

                    lat:
                        place.properties.lat,

                    lon:
                        place.properties.lon
                }));

        // FIX 4: Remove duplicate places
        const uniquePlaces = [];
        const seen = new Set();

        places.forEach(place => {
            if (!seen.has(place.name)) {
                seen.add(place.name);
                uniquePlaces.push(place);
            }
        });


        // IF NO PLACES FOUND
        if (uniquePlaces.length === 0) {

            uniquePlaces.push({

                name:
                    `${city} City Center`,

                address:
                    `Explore local attractions in ${city}`,

                lat,

                lon
            });
        }


        // SEND RESPONSE
        res.json({

            city,

            places: uniquePlaces
        });

    }

    catch (error) {

        console.log(
            "FULL ERROR:",
            error.response?.data || error.message
        );

        res.status(500).json({

            error:
                "Server error"
        });
    }
});


// START SERVER
app.listen(PORT, () => {

    console.log(
        `Server running on port ${PORT}`
    );
});