import axios from "axios";
import { useSession } from "next-auth/react";

export const useAxios = (url, options = {}) => {
  const { data } = useSession();

  const httpClient = axios.create(
    {
      baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      headers: {
        Authorization: `Bearer ${data.user?._id}`,
      },
    },
    options
  );

  return { httpClient };
};
