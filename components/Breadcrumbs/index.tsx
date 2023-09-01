'use client'

import { Breadcrumbs, Link, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const BreadcrumbsComponent = () => {
    const router = useRouter()
    const pathname = usePathname()
    const [breadcrumbItems, setBreadcrumbsItems] = useState([]);
    useEffect(() => {
        const pathnames = pathname!.split("/");
        let path = "";
        let items = [];
        for (let index = 1; index < pathnames.length; index++) { // ignore the first index due to certain empty string on split /
            path += "/" + pathnames[index];
            items.push({
                label: pathnames[index],
                pathname: path,
                key: `${pathnames[index]}-breadcrumb`
            });
        }
        console.log(items)
        setBreadcrumbsItems(items)
    }, [pathname])
    return (
        <Breadcrumbs aria-label="breadcrumb">
            {
                breadcrumbItems.map((item) => (
                    item.pathname === pathname ?
                        <Typography color="text.primary">{item.label}</Typography>
                        : <Link key={item.key} underline={"hover"} color="inherit" href={item.pathname}>
                            {item.label}
                        </Link>
                ))
            }
        </Breadcrumbs>
    )

}

export default BreadcrumbsComponent;