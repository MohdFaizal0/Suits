const { origin } = require("../../../login/server/config/coreOptions");
const allowedOrigins = require(`./allowedOrigin`);

const corsOptions = {
  origin: (origin, cb) => {
    if (allowedOrigins.indexOf(origin) != -1 || !origin) {
      console.log("origin sucessfull");
      cd(null, true);
    } else {
      console.log(origin, "error");
      cb(new Error("not allowed origins"));
    }
  },
};

module.export = corsOptions;
