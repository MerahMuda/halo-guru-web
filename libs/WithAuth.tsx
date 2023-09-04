import useStore from "hooks/useStore"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const WithAuth = (props: any) => {
    const { children } = props;
    const {
        accessToken
    } = useStore();
    const router = useRouter();
    useEffect(() => {
        if (!accessToken) router.replace("/login");
    }, [accessToken])


    return (
        <>
            {children}
        </>
    )
}

export default WithAuth;