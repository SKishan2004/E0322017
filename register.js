import axios from "axios";

const data = {
  name: "S KISHAN",
  email: "e032201u7@sret.edu.in",
  rollNo: "E0322017",
  mobileNo: "7708929865",
  githubUsername: "SKishan2004",
  collegeName: "Sri Ramachandra Faculty Of Engineering And Technology",
  accessCode: "CdRGMV"
};

axios
  .post("http://20.244.56.144/evaluation-service/register", data)
  .then((res) => {
    console.log("Registered Successfully:");
    console.log(res.data);
  })
  .catch((err) => {
    console.error("Registration Failed:");
    console.error(err.response?.data || err.message);
  });
