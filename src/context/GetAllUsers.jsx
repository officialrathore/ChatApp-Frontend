import React, { useEffect, useState } from 'react'
import cookies from 'js-cookie';
import axios from 'axios';

function GetAllUsers() {
     const [allUsers, setAllUsers] = useState([]);
     const [loading, setLoading] = useState(false);

     useEffect(() => {
        const getAllUsers = async () => {
            setLoading(true);
            try {
                let token = cookies.get("jwt");
                console.log("JWT Token:", token);
                const response = await axios.get("/api/user/getAllUsers",{
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