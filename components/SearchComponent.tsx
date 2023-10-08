"use client";

import { useRef, useTransition } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function SearchComponent() {
    const ref = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        startTransition(() => {
            router.push(`/search?name=${ref.current?.value}`);
        });
    };
    return (
        <>
            <Box sx={{ width: "100%" }}>
                <form
                    onSubmit={handleSubmit}
                    className="flex items-center gap-3 mb-3 justify-center"
                >
                    <TextField className="" label="Search" inputRef={ref} />
                    <Button type="submit" variant="outlined" className="p-3">
                        Search
                    </Button>
                </form>
                {isPending && <LinearProgress />}
            </Box>
        </>
    );
}
