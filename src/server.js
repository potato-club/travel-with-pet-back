import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";

const app = express();

dotenv.config();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.header("Cross-Origin-Embedder-Policy", "credentialless");
  res.header("Cross-Origin-Opener-Policy", "same-origin");
  next();
});

app.listen(4000, () => console.log(`Example app listening on port ${4000}!`));
