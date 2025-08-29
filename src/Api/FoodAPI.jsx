import axios from "axios";

export async function fetchFoods() {
    try {
        const response = await axios.get(
            "https://fahim5120.github.io/food-ordering-api/react.json"
        )
        console.log(response)
        return response.data.foods
    } catch (error) {
        console.log("Error occured")
        return []
    }
}
