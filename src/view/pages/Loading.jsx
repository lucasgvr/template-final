import toast, { Toaster } from "react-hot-toast";
import { Loader } from "../components/Loader"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Loading = () => {
    const navigate = useNavigate()

    useEffect(() => {
        toast.remove()
        
        setTimeout(() => {
            navigate('/')
        }, 1000)
    }, [])

    return (
        <>
            <Toaster />
            <Loader />
        </>
    )
}

export default Loading