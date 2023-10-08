"use client";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Paper } from "@mui/material";
import { CategorySharp, SearchOffRounded } from "@mui/icons-material";
import { usePathname, useRouter } from "next/navigation";
import SearchIcon from "@mui/icons-material/Search";

export default function Navigation() {
    const path = usePathname();
    const router = useRouter();

    return (
        <Paper
            sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
            elevation={3}
        >
            <BottomNavigation
                showLabels
                value={path.split("/")[1] || "/"}
                onChange={(event, newValue) => {
                    router.push(newValue);
                }}
            >
                <BottomNavigationAction
                    label="Categories"
                    value={"/"}
                    icon={<CategorySharp />}
                />
                <BottomNavigationAction
                    label="Search"
                    value={"search"}
                    icon={<SearchIcon />}
                />
                {/* <BottomNavigationAction
                    label="Nearby"
                    value={"nearby"}
                    icon={<LocationOnIcon />}
                /> */}
            </BottomNavigation>
        </Paper>
    );
}
