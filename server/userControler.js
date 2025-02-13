import express from "express";
import User from "./Models/userModel.js";
import isAuthenticated from "./Authentication/Auth.js";
import passport from "passport";
const router = express.Router();

// signup router is here

router.post("/api/v1/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.create({
      name,
      email,
      password,
    });
    if (user) {
      const token = await user.createToken();
      res
        .status(201)
        .cookie("token", token, {
          expires: new Date(Date.now() + 100000000),
          httpOnly: true,
          secure: false,
          //  sameSite: "none",
        })
        .json({
          success: true,
          messege: "Registerd Successfully!",
        });
    }
    res.status(401);
  } catch (error) {
    console.log(error);
    // if (error.code === 11000) {
    //   res.status(409).json({ message: "user already registerd" });
    // } else {
    //   res.status(500).json({ message: error.message });
    // }
  }
});

// signin router is here
router.post("/api/v1/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne(req.email).select("+password");
    if (!user) {
      res.status(402).json({ message: "user not found" });
    }

    const token = await user.createToken();
    const options = {
      expires: new Date(Date.now() + 10000000),
      httpOnly: true,
      secure: true,
      //  sameSite: "none",
    };
    res.status(200).cookie("token", token, options).json({
      success: true,
      messege: "Login Successfully!",
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/api/v1/logout", isAuthenticated, async (req, res) => {
  try {
    const user = await User.findById(req.user);
    if (user) {
      res
        .status(200)
        .cookie("token", null, {
          expires: new Date(Date.now()),
          httpOnly: true,
          secure: true,
          // sameSite: "none",
        })
        .json({
          success: true,
          message: "Logout Successfully!",
        });
    }
  } catch (error) {}
});

router.get("/api/v1/getuser", isAuthenticated, async (req, res) => {
  try {
    const user = await User.findById(req.user);
    console.log(user);
    if (user) {
      res.status(200).json({
        success: true,
        user,
      });
    }
  } catch (error) {}
});

router.get(
  "/googlelogin",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
  }),
  (req, res) => {}
);
router.get(
  "/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    res
      .status(200)
      .cookie("token", req.user.token, {
        expires: new Date(Date.now() + 1000000000),
        httpOnly: true,
      })
      .redirect("http://localhost:3000");
  }
);

export default router;
