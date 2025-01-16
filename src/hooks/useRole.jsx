import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useRole = () => {
        const {user} = useAuth()
        const axiosSecure = useAxiosSecure()
        const {data: role, isLoading} = useQuery({
                queryKey: ['role', user?.email],
                queryFn : async () => {
                        const {data} = await axiosSecure(`/users/role/${user?.email}`)
                        return data.role
                }
        })
        return [role, isLoading]
};

export default useRole;