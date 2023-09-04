import useStore from "hooks/useStore"
import { useRouter } from "next/navigation";

const WithAuth = (props: any) => {
    const { children } = props;
    const {
        accessToken
    } = useStore();
    const router = useRouter();
    if (!accessToken) router.replace("/login");

    return (
        <>
            {children}
        </>
    )
}

export default WithAuth;