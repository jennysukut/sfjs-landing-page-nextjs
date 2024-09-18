import {
  ButtonColorOption,
  buttonColorOptions,
} from "@/lib/stylingData/buttonColors";
import {
  SmallShadowColorOption,
  smallShadowColorOptions,
} from "@/lib/stylingData/smallShadowColors";

type CurrentSchemeType = ButtonColorOption | SmallShadowColorOption;

function getRandomColorScheme(
  currentScheme: CurrentSchemeType,
): CurrentSchemeType {
  // Determine which color options to use based on the type of currentScheme
  const colorOptions =
    currentScheme in buttonColorOptions
      ? buttonColorOptions
      : smallShadowColorOptions;

  // Get the total number of color schemes
  const totalSchemes = colorOptions.length;

  // Generate a random index, excluding the current scheme
  let randomIndex: number;
  do {
    randomIndex = Math.floor(Math.random() * totalSchemes);
  } while (colorOptions[randomIndex] === currentScheme);

  // Return the new random color scheme
  return colorOptions[randomIndex];
}

export default getRandomColorScheme;

//let's write another colorscheme generator that just comes up with a random one despite the one that's entered? That way we can use it and set it once?
