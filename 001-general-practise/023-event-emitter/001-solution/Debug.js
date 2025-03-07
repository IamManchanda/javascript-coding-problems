import CustomEventEmitter from "./CustomEventEmitter.js";

const e = new CustomEventEmitter();

const startUserSignup = (username) => {
  console.log(`User Signup for ${username}`);
};

const sendEmailUserSignup = (username) => {
  console.log(`Sending email to ${username}`);
};

const sendWhatsappUserSignup = (username) => {
  console.log(`Whatsapp to ${username}`);
};

const startUserLogout = (username) => {
  console.log(`Logging out ${username}`);
};

e.on("user:signup", startUserSignup);
e.once("user:signup", sendEmailUserSignup);
e.on("user:signup", sendWhatsappUserSignup);
e.on("user:logout", startUserLogout);

e.emit("user:signup", "@IamManchanda");
e.emit("user:signup", "@HarryManchanda");

e.off("user:signup", sendWhatsappUserSignup);

e.emit("user:signup", "@HarmanManchanda");
e.emit("user:logout", "@HarmanManchanda");
