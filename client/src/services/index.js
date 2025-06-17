import axiosInstance from "@/api/authApiInstance";

const registerService = async (formData) => {
  const { data } = await axiosInstance.post("/auth/signup", {
    ...formData,
  });

  return data;
};

const loginService = async (formData) => {
  const { data } = await axiosInstance.post("/auth/signin", {
    ...formData,
  });

  return data;
};

export { registerService, loginService };
