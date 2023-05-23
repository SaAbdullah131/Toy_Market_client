import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(()=>{
        document.title = `ToddlerShop | ${title}`;
    },[title]);
}

export default useTitle;