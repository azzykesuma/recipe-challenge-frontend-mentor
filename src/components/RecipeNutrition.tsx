function RecipeNutrition() {
  return (
    <section className="pl-5">
      <h2 className="text-2xl text-nutmeg mb-3">Nutritions</h2>
      <p>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <div className="mt-3">
        <div className="py-3 border-b-2 border-bottom-nutmeg">
          <p className="pl-10 text-nutmeg relative">Calories <span className="font-semibold text-nutmeg  absolute left-40">277kcal</span></p>
        </div>
        <div className="py-3 border-b-2 border-bottom-nutmeg">
          <p className="pl-10 text-nutmeg relative"> Carbs <span className="font-semibold text-nutmeg absolute left-40">0g</span></p>
        </div>
        <div className="py-3 border-b-2 border-bottom-nutmeg">
          <p className="pl-10 text-nutmeg relative"> Protein <span className="font-semibold text-nutmeg absolute left-40">20g</span></p>
        </div>
        <div className="py-3">
          <p className="pl-10 text-nutmeg relative"> Fat <span className="font-semibold text-nutmeg  absolute left-40">22g</span></p>
        </div>
      </div>
    </section>
  );
}

export default RecipeNutrition;
