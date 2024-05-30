import HeaderRecipe from './components/HeaderRecipe'
import RecipePreparation from './components/RecipePreparation'
import RecipeIngredients from './components/RecipeIngredients'
import RecipeInstructions from './components/RecipeInstructions'
import RecipeNutrition from './components/RecipeNutrition'

function App() {

  return (
    <main className=' md:py-5  bg-eggshell'>
      <div className='max-w-[800px] rounded-3xl mx-auto bg-white'>
        <HeaderRecipe />
        <div className='p-5'>
          <RecipePreparation />
        </div>
        <div className="px-5 pt-5">
          <RecipeIngredients />
        </div>
        <div className="p-5">
          <hr className='text-nutmeg my-5' />
          <RecipeInstructions />
        </div>
        <div className="p-5 pb-8">
        <hr className='text-nutmeg my-5' />
          <RecipeNutrition />
        </div>
      </div>
    </main>
  )
}

export default App
