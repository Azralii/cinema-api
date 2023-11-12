import Cinema from "../models/cinemaModel.js";

export const addCinema = async (req, res) => {
  const { title, description, actors, posterUrl, duration } = req.body;
  if (
    title === "" ||
    description === "" ||
    actors === "" ||
    posterUrl === "" ||
    duration === ""
  ) {
    res.json({ message: "Each field must not be empty" });
  }
  const cinema = await Cinema.create({
    title,
    description,
    actors,
    posterUrl,
    duration,
  });
  console.log(cinema);
  if (cinema) {
    res.json({ cinema });
  }
};

export const getAllCinema = async (req, res) => {
  const cinemas = await Cinema.find();
  if (cinemas.length !== 0) {
    res.json({ cinemas });
  }
};

export const getCinemaById = async (req, res) => {
  const cinemaId = req.params.id;
  const cinema = await Cinema.findOne({ _id: cinemaId });
  if (cinema) {
    res.json({ cinema });
  }
};



