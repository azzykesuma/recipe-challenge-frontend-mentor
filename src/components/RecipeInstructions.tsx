function RecipeInstructions() {
  return (
    <section className="pl-5">
      <h2 className="text-2xl text-nutmeg mb-3">Instructions</h2>
      <ol>
        <li className="md:mb-2 text-nutmeg">
          <span className="font-semibold text-nutmeg">Beat the eggs:</span> In a
          bowl, beat the eggs with a pinch of salt and pepper until they are
          well mixed. You can add a tablespoon of water or milk for a fluffier
          texture.
        </li>
        <li className="md:mb-2 text-nutmeg">
          <span className="font-semibold text-nutmeg"> Heat the pan: </span>{" "}
          Place a non-stick frying pan over medium heat and add butter or oil.
        </li>
        <li className="md:mb-2 text-nutmeg">
          <span className="font-semibold text-nutmeg">
            {" "}
            Cook the omelette:{" "}
          </span>{" "}
          Once the butter is melted and bubbling, pour in the eggs. Tilt the pan
          to ensure the eggs evenly coat the surface.
        </li>
        <li className="md:mb-2 text-nutmeg">
          <span className="font-semibold text-nutmeg">
            {" "}
            Add fillings (optional):
          </span>{" "}
          When the eggs begin to set at the edges but are still slightly runny
          in the middle, sprinkle your chosen fillings over one half of the
          omelette.
        </li>
        <li className="md:mb-2 text-nutmeg">
          <span className="font-semibold text-nutmeg"> Fold and serve:</span> As
          the omelette continues to cook, carefully lift one edge and fold it
          over the fillings. Let it cook for another minute, then slide it onto
          a plate.
        </li>
        <li className="text-nutmeg">
          <span className="font-semibold text-nutmeg">Enjoy: </span> As Serve
          hot, with additional salt and pepper if needed.
        </li>
      </ol>
    </section>
  );
}

export default RecipeInstructions;
