const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 5000;

const cities = {
    hyderabad: {
        places: [
            "Charminar",
            "Golconda Fort",
            "Ramoji Film City"
        ],
        food: [
            "Biryani",
            "Haleem"
        ]
    },

    delhi: {
        places: [
            "India Gate",
            "Red Fort",
            "Qutub Minar"
        ],
        food: [
            "Chaat",
            "Butter Chicken"
        ]
    }
};

app.get("/search", (req, res) => {

    const city = req.query.city?.toLowerCase();

    if (!city || !cities[city]) {
        return res.status(404).json({
            error: "City not found"
        });
    }

    res.json(cities[city]);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});