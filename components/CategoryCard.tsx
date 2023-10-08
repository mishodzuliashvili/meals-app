"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button } from "@mui/material";
import Link from "next/link";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

type CategoryCardProps = {
    category: Category;
};

export default function CategoryCard({ category }: CategoryCardProps) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader title={category.strCategory} />
            <CardMedia
                component="img"
                height="194"
                image={category.strCategoryThumb}
                alt="Meal"
            />
            <CardActions disableSpacing>
                <Link href={`/search?category=${category.strCategory}`}>
                    <Button size="small">See All</Button>
                </Link>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse
                className="max-w-xs"
                in={expanded}
                timeout="auto"
                unmountOnExit
            >
                <CardContent>
                    <Typography paragraph>
                        {category.strCategoryDescription}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
