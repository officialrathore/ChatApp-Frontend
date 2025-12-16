import React, { useEffect, useState } from 'react'
import cookies from 'js-cookie';
import api from '../utils/axios';

function GetAllUsers() {
     const [allUsers, setAllUsers] = useState([]);
     const [loading, setLoading] = useState(false);

     useEffect(() => {
        const getAllUsers = async () => {
            setLoading(true);
            try {
                let token = cookies.get("jwt");
                console.log("JWT Token:", token);
                const response = await api.get("/api/user/getAllUsers",{
                    withCredentials: true,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setAllUsers(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching users:", error);
                setLoading(false);
            }
        };
        getAllUsers();
     }, []);

  return [allUsers, loading];
}

export default GetAllUsers
