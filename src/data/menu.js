import food1 from "../assets/food1.png";
import food2 from "../assets/food2.png";
import food3 from "../assets/food3.png";
import food4 from "../assets/food4.png";
import food5 from "../assets/food5.png";
import food6 from "../assets/food6.png";
export const categories = ["All", "Starters", "Mains", "Desserts", "Drinks",];

export const menuItems = [
    {
        id: 1,
        name: "Smoked Paneer Tikka",
        category: "Starters",
        price: 320,
        description:
            "Charred paneer, smoked peppers, mint chutney and house spices.",
        image: food1,
        badge: "Popular",
    },

    {
        id: 2,
        name: "Truffle Burrata",
        category: "Starters",
        price: 680,
        description:
            "Creamy burrata, heirloom tomato, basil oil and black truffle.",
        image: food2,
        badge: "Chef's Pick",
    },

    {
        id: 3,
        name: "Wild Mushroom Risotto",
        category: "Mains",
        price: 540,
        description:
            "Arborio rice, porcini, parmesan cream and crisp sage.",
        image: food3,
        badge: "Vegetarian",
    },

    {
        id: 4,
        name: "Charred Lamb Chops",
        category: "Mains",
        price: 890,
        description:
            "Rosemary lamb, smoked aubergine, herbs and pomegranate glaze.",
        image: food4,
        badge: "Signature",
    },

    {
        id: 5,
        name: "Saffron Panna Cotta",
        category: "Desserts",
        price: 360,
        description:
            "Silky saffron custard, pistachio praline and seasonal berries.",
        image: food5,
        badge: "New",
    },

    {
        id: 6,
        name: "Rose & Lychee Cooler",
        category: "Drinks",
        price: 260,
        description:
            "Rose, lychee, citrus and sparkling water served over ice.",
        image: food6,
        badge: "Refreshing",
    },
];