import RecipeImage from "../assets/images/image-omelette.jpeg";

function HeaderRecipe() {
  return (
    <div className="p-0 md:p-7">
      <img src={RecipeImage} alt="omelete recipe" className="mb-2 lg:rounded-2xl"  />
      <div className="p-5">
        <h1 className="text-3xl mb-3 text-dark-charcoal">Simple Omelette Recipe</h1>
        <p className="text-nutmeg">
            {" "}
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with your
            choice of cheese, vegetables, or meats.
        </p>
      </div>
    </div>
  );
}

export default HeaderRecipe;
