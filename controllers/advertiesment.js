import { sendRespons } from "../utility/index.js";

let ads = [
  {
    id: "223",
    title: "Technical Lead Engineer - C#/ .NET (1)",
    companyName: "George Bernard (Pvt) Ltd",
    location: "Colombo",
    date: {
      start: "20-03-2022",
      end: "20-04-2022",
    },
  },
];

export const getAdvertiesment = (req, res) => {
  res.json(sendRespons(200, "All ads send", ads));
};
