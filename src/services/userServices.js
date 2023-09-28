import { httpAxios } from "@/helper/httpHelper";

export async function singUp(user) {
  const result = await httpAxios
    .post("/api/users", user)
    .then((response) => response.data);

    return result
}

export async function login(LoginData){
  const result = await httpAxios
  .post("/api/login", LoginData)
  .then((response) => response.data);

  return result
}