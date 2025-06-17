import axios from "axios"

const data = {
  email: "e032201u7@sret.edu.in",
  name: "S KISHAN",
  rollNo: "E0322017",
  accessCode: "CdRGMV",
  clientID: "a1d457e4-3805-42ec-ae18-bc1888b6d627",
  clientSecret: "gFqXBukHYpZhDSmB"
}

axios.post("http://20.244.56.144/evaluation-service/auth", data)
  .then(res => {
    console.log("Token Fetched")
    console.log(res.data)
  })
  .catch(err => {
    console.error("Failed to fetch token")
    console.error(err.response?.data || err.message)
  })
