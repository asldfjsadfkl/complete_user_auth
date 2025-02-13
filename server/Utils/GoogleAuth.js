import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";
import User from "../Models/userModel.js";

export const connectPassport = async () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:5000/callback",
      },
      async function (accessToken, refreshToken, profile, done) {
        const user = await User.findOne({ googleId: profile.id });

        if (user) {
          const token = await user.createToken();
          return done(null, { user, token });
        } else if (!user) {
          const user = await User.findOne({ email: profile.emails[0].value });
          if (user) {
            const user = await User.updateOne({
              googleId: profile.id,
            });
            const token = await user.createToken();
            return done(null, { user, token });
          } else {
            const newUser = await User.create({
              name: profile.displayName,
              email: profile.emails[0].value,
              googleId: profile.id,
              password: "googlepassword",
            });
            const token = await newUser.createToken();
            return done(null, { newUser, token });
          }
        }
      }
    )
  );
};
