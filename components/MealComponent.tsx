import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

type MealComponentProps = {
    meal: Meal;
};

export default function MealComponent({ meal }: MealComponentProps) {
    return (
        <Card sx={{}}>
            <CardMedia
                sx={{ height: 340 }}
                image={meal.strMealThumb}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {meal.strMeal}
                </Typography>
                {meal.strInstructions && (
                    <Typography variant="body2" color="text.secondary">
                        {meal.strInstructions}
                    </Typography>
                )}
                {meal.dateModified}
                <Button></Button>
                {/* meal.straarea */}
                <p>
                    <span className="font-semibold">Area:</span> {meal.strArea}
                </p>
                <div>{/* ingredients list */}</div>
                <p>Ingredients:</p>
                <ul className="pl-5">
                    <li>{meal.strIngredient1}</li>
                    <li>{meal.strIngredient2}</li>
                    <li>{meal.strIngredient3}</li>
                    <li>{meal.strIngredient4}</li>
                    <li>{meal.strIngredient5}</li>
                    <li>{meal.strIngredient6}</li>
                    <li>{meal.strIngredient7}</li>
                    <li>{meal.strIngredient8}</li>
                    <li>{meal.strIngredient9}</li>
                    <li>{meal.strIngredient10}</li>
                </ul>
            </CardContent>
            <CardActions>
                {/* <Button size="small">Share</Button> */}
                <Link href={`/search?category=${meal.strCategory}`}>
                    <Button size="small">{meal.strCategory}</Button>
                </Link>
            </CardActions>
        </Card>
    );
}
