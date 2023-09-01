'use client'

import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { Navigation } from "libs/navigation"
import { useRouter, usePathname } from "next/navigation"
import { FC } from "react"

export type ItemProps = Navigation & {
    key: string,
}
type ItemListProps = {
    items: ItemProps[]
}

const ItemList: FC<ItemListProps> = (props) => {
    const { items } = props;
    const router = useRouter();
    const pathname = usePathname();
    return (
        <List sx={{
            color: "white"
        }}>
            {
                items.map((item: ItemProps) =>
                    <ListItemButton key={item.key} onClick={() => router.push(item.href)}
                        sx={(theme) => ({
                            ...pathname === item.href
                                ? {
                                    backgroundColor: theme.palette.secondary.main, color: theme.palette.primary.main, borderRight: `5px solid black`
                                }
                                : {
                                }
                        })}
                    >
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText>
                            {item.label}
                        </ListItemText>
                    </ListItemButton>
                )
            }
        </List>
    )
}

export default ItemList;
