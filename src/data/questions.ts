export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // index of correct answer
  explanation: string;
  wrongAnswerExplanations: string[];
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const questions: Question[] = [
  {
    id: 1,
    question: "A biological community is best defined as:",
    options: [
      "A group of individuals of the same species living in the same area.",
      "All the biotic and abiotic factors in a given area.",
      "A group of populations of different species living close enough to interact.",
      "The dominant life form that defines a specific spatial area.",
      "The study of the distribution and abundance of a single species."
    ],
    correctAnswer: 2,
    explanation: "A biological community is specifically defined as a group of populations of different species that live close enough together to potentially interact. This definition focuses on the assemblage of different species and their potential for interaction, which is the foundation of community ecology.",
    wrongAnswerExplanations: [
      "This describes a population, not a community. A population consists of individuals of the same species.",
      "This describes an ecosystem, which includes both living (biotic) and non-living (abiotic) components.",
      "This describes a biome or habitat type, defined by dominant physical or biological characteristics.",
      "This describes the field of population ecology, which focuses on single species rather than multi-species assemblages."
    ],
    category: "Community Structure",
    difficulty: "easy"
  },
  {
    id: 2,
    question: "Match the species interaction with its corresponding symbolic representation (+ for benefit, - for harm, 0 for no effect). 1. Mutualism 2. Competition 3. Commensalism 4. Predation",
    options: [
      "1: (+/0), 2: (+/+), 3: (-/-), 4: (+/-)",
      "1: (+/+), 2: (-/-), 3: (+/0), 4: (+/-)",
      "1: (+/-), 2: (-/-), 3: (+/+), 4: (+/0)",
      "1: (-/-), 2: (+/0), 3: (+/-), 4: (+/+)",
      "1: (+/+), 2: (+/0), 3: (-/-), 4: (+/-)"
    ],
    correctAnswer: 1,
    explanation: "The correct symbolic representations are: Mutualism (+/+) - both species benefit; Competition (-/-) - both species are harmed; Commensalism (+/0) - one benefits, other unaffected; Predation (+/-) - predator benefits, prey is harmed. These symbols are fundamental to understanding ecological interactions.",
    wrongAnswerExplanations: [
      "This incorrectly assigns commensalism as (+/0) to mutualism and mutualism as (+/+) to competition.",
      "This confuses predation (+/-) with mutualism and gets the other relationships wrong.",
      "This reverses several relationships and incorrectly assigns symbols.",
      "This completely misassigns all the interaction types."
    ],
    category: "Species Interactions",
    difficulty: "easy"
  },
  {
    id: 3,
    question: "The phenomenon where two species cannot coexist indefinitely on the same limiting resource is known as:",
    options: [
      "Resource Partitioning",
      "The Niche Concept",
      "Competitive Exclusion Principle",
      "Intraspecific Competition",
      "Predator-mediated Coexistence"
    ],
    correctAnswer: 2,
    explanation: "The Competitive Exclusion Principle, formulated by G.F. Gause, states that two species competing for the exact same limiting resource cannot coexist indefinitely - one will eventually outcompete and exclude the other. This principle is fundamental to understanding community structure and species coexistence.",
    wrongAnswerExplanations: [
      "Resource partitioning is actually a mechanism that allows species to avoid competitive exclusion by using resources differently.",
      "The niche concept describes the role and resource requirements of a species, but not the exclusion principle itself.",
      "Intraspecific competition occurs within species, not between different species.",
      "Predator-mediated coexistence is a mechanism that can prevent competitive exclusion, not the exclusion principle itself."
    ],
    category: "Competition",
    difficulty: "medium"
  },
  {
    id: 4,
    question: "Caribbean anole species are able to coexist in the same tree primarily through:",
    options: [
      "Competitive exclusion.",
      "Predator-mediated coexistence.",
      "Occupying different microhabitats, such as different perch heights or sun/shade conditions (resource partitioning).",
      "Having identical fundamental niches.",
      "A commensal relationship with the tree."
    ],
    correctAnswer: 2,
    explanation: "Caribbean anoles demonstrate classic resource partitioning by occupying different microhabitats within the same tree. Different species prefer different perch heights, branch thicknesses, and light conditions, allowing them to coexist by reducing direct competition for the same resources.",
    wrongAnswerExplanations: [
      "Competitive exclusion would prevent coexistence, not enable it.",
      "While predators may play a role, the primary mechanism is habitat partitioning, not predator-mediated coexistence.",
      "Identical fundamental niches would lead to competitive exclusion, not coexistence.",
      "The relationship with the tree is not commensal - the anoles are using the tree as habitat for their own interactions."
    ],
    category: "Competition",
    difficulty: "medium"
  },
  {
    id: 5,
    question: "Which of the following scenarios describes **intraspecific competition**?",
    options: [
      "Lions and hyenas fighting over a carcass.",
      "Two oak seedlings growing close together and competing for light and water.",
      "A praying mantis capturing and eating a grasshopper.",
      "Barnacles and mussels competing for space on a rock.",
      "Bees pollinating flowers in exchange for nectar."
    ],
    correctAnswer: 1,
    explanation: "Intraspecific competition occurs between individuals of the same species. Two oak seedlings (same species) competing for limited light and water resources is a perfect example of intraspecific competition, where members of the same species compete for the same resources.",
    wrongAnswerExplanations: [
      "This is interspecific competition between different species (lions vs. hyenas).",
      "This is predation, not competition - one organism consuming another.",
      "This is interspecific competition between different species (barnacles vs. mussels).",
      "This is mutualism, a mutually beneficial interaction, not competition."
    ],
    category: "Competition",
    difficulty: "easy"
  },
  {
    id: 6,
    question: "Which term describes the total number of different species in a community?",
    options: [
      "Species evenness",
      "Species diversity",
      "Species richness",
      "Alpha diversity",
      "Gamma diversity"
    ],
    correctAnswer: 2,
    explanation: "Species richness specifically refers to the total number of different species present in a community, regardless of their abundance. It's the simplest measure of diversity, focusing only on counting species without considering how evenly distributed they are.",
    wrongAnswerExplanations: [
      "Species evenness measures how equally abundant the species are, not the total number of species.",
      "Species diversity combines both richness and evenness into a single measure.",
      "Alpha diversity is the mean species diversity within habitats, not just the number of species.",
      "Gamma diversity is the total diversity across multiple habitats in a landscape."
    ],
    category: "Diversity Patterns",
    difficulty: "easy"
  },
  {
    id: 7,
    question: "The relative abundance of each species within a community is referred to as:",
    options: [
      "Species richness",
      "Species evenness",
      "Species diversity",
      "Beta diversity",
      "Trophic structure"
    ],
    correctAnswer: 1,
    explanation: "Species evenness describes how evenly distributed individuals are among the different species in a community. High evenness means species have similar abundances, while low evenness means some species dominate numerically.",
    wrongAnswerExplanations: [
      "Species richness only counts the number of species, not their relative abundances.",
      "Species diversity is a composite measure that includes both richness and evenness.",
      "Beta diversity compares species composition between different sites.",
      "Trophic structure describes feeding relationships, not abundance patterns."
    ],
    category: "Diversity Patterns",
    difficulty: "easy"
  },
  {
    id: 8,
    question: "An interaction where one species is harmed and the other is unaffected (-/0) is called:",
    options: [
      "Competition",
      "Commensalism",
      "Predation",
      "Mutualism",
      "Amensalism"
    ],
    correctAnswer: 4,
    explanation: "Amensalism is a type of interaction where one species is negatively affected while the other species is unaffected. Classic examples include large trees shading smaller plants or antibiotics produced by fungi harming bacteria without the fungi being affected.",
    wrongAnswerExplanations: [
      "Competition affects both species negatively (-/-).",
      "Commensalism benefits one species while leaving the other unaffected (+/0).",
      "Predation benefits the predator while harming the prey (+/-).",
      "Mutualism benefits both species (+/+)."
    ],
    category: "Species Interactions",
    difficulty: "medium"
  },
  {
    id: 9,
    question: "The evolutionary divergence in beak size among Galápagos finches on islands where multiple species coexist is an example of natural selection driven by:",
    options: [
      "Mutualism",
      "Predation",
      "Interspecific competition",
      "Commensalism",
      "Random genetic drift"
    ],
    correctAnswer: 2,
    explanation: "Character displacement in Galápagos finch beak sizes results from interspecific competition for food resources. When species coexist, natural selection favors individuals with beak sizes that minimize competition by specializing on different food sources, leading to evolutionary divergence.",
    wrongAnswerExplanations: [
      "Mutualism involves beneficial interactions, not competitive divergence.",
      "Predation would affect survival but wouldn't cause this specific pattern of morphological divergence.",
      "Commensalism doesn't create selective pressure for character displacement.",
      "Random genetic drift wouldn't produce the systematic pattern of divergence observed when species coexist."
    ],
    category: "Competition",
    difficulty: "medium"
  },
  {
    id: 10,
    question: "According to the provided lectures, all of the following are considered limiting resources *except*:",
    options: [
      "Food",
      "Water",
      "Space",
      "Nutrients",
      "Temperature"
    ],
    correctAnswer: 4,
    explanation: "Temperature is an abiotic environmental factor that affects organisms but is not a 'resource' that organisms consume or deplete. Limiting resources are materials or space that organisms use and can become depleted, creating competition.",
    wrongAnswerExplanations: [
      "Food is consumed by organisms and can be depleted, making it a limiting resource.",
      "Water is consumed and can be limited, especially in arid environments.",
      "Space (territory, nesting sites, etc.) is a finite resource that organisms compete for.",
      "Nutrients like nitrogen and phosphorus are consumed and can become limiting factors."
    ],
    category: "Competition",
    difficulty: "medium"
  },
  {
    id: 11,
    question: "A community with high species diversity would have:",
    options: [
      "Many species, with one species being highly dominant.",
      "Few species, but all with equal abundance.",
      "Many species, all with relatively equal abundance.",
      "Few species, with one being extremely rare.",
      "Only one or two species."
    ],
    correctAnswer: 2,
    explanation: "High species diversity requires both high species richness (many species) and high evenness (relatively equal abundances). This combination maximizes the diversity index and indicates a well-balanced community structure.",
    wrongAnswerExplanations: [
      "This has high richness but low evenness due to dominance, resulting in lower diversity.",
      "This has high evenness but low richness, limiting overall diversity.",
      "This has very low richness and evenness, resulting in very low diversity.",
      "This represents the lowest possible diversity - minimal richness."
    ],
    category: "Diversity Patterns",
    difficulty: "medium"
  },
  {
    id: 12,
    question: "The relationship between mycorrhizal fungi and plant roots, where fungi provide nutrients in exchange for carbon, is an example of which type of mutualism?",
    options: [
      "Transport",
      "Protection",
      "Nutrition",
      "Competition",
      "Commensalism"
    ],
    correctAnswer: 2,
    explanation: "Mycorrhizal relationships are nutritional mutualisms where both partners exchange essential resources - fungi provide plants with water and nutrients (especially phosphorus) while plants provide fungi with carbohydrates from photosynthesis.",
    wrongAnswerExplanations: [
      "Transport mutualism typically involves seed dispersal or pollination services.",
      "Protection mutualism involves one species defending another from enemies.",
      "This is not competition since both species benefit rather than being harmed.",
      "This is not commensalism because both species benefit, not just one."
    ],
    category: "Species Interactions",
    difficulty: "medium"
  },
  // Food Webs & Energy Flow questions
  {
    id: 13,
    question: "In a typical energy pyramid, approximately what percentage of energy is transferred from one trophic level to the next?",
    options: [
      "50%",
      "25%", 
      "10%",
      "1%",
      "90%"
    ],
    correctAnswer: 2,
    explanation: "The 10% rule states that typically only about 10% of energy is transferred from one trophic level to the next. The remaining 90% is lost as heat through metabolic processes, making energy flow unidirectional and limiting the number of trophic levels.",
    wrongAnswerExplanations: [
      "50% is too high - most energy is lost as heat during metabolic processes.",
      "25% overestimates energy transfer efficiency in most ecosystems.",
      "1% is too low - this would make food webs unsustainable.",
      "90% would be retained, not transferred - this is actually what's lost as heat."
    ],
    category: "Food Webs & Energy Flow",
    difficulty: "easy"
  },
  {
    id: 14,
    question: "Primary producers in an ecosystem are organisms that:",
    options: [
      "Consume other organisms for energy",
      "Convert inorganic compounds into organic matter using energy",
      "Decompose dead organic matter",
      "Transfer energy between trophic levels",
      "Regulate population sizes of herbivores"
    ],
    correctAnswer: 1,
    explanation: "Primary producers (autotrophs) convert inorganic compounds into organic matter using energy from sunlight (photosynthesis) or chemical reactions (chemosynthesis). They form the base of all food webs by creating organic compounds from inorganic materials.",
    wrongAnswerExplanations: [
      "This describes consumers (heterotrophs), not producers.",
      "This describes decomposers, which break down rather than create organic matter.",
      "This describes the ecological function of energy transfer, not the definition of producers.",
      "This describes predators or other top-level consumers, not primary producers."
    ],
    category: "Food Webs & Energy Flow",
    difficulty: "easy"
  },
  {
    id: 15,
    question: "A keystone species is one that:",
    options: [
      "Is the most abundant species in the ecosystem",
      "Has a disproportionately large effect on community structure relative to its abundance",
      "Is always a top predator",
      "Provides the most biomass in the ecosystem",
      "Is found at every trophic level"
    ],
    correctAnswer: 1,
    explanation: "A keystone species has an effect on community structure that is disproportionately large relative to its abundance. Removing a keystone species causes dramatic changes in the ecosystem, even though the species may be relatively uncommon.",
    wrongAnswerExplanations: [
      "Keystone species are often not the most abundant - their impact exceeds their numbers.",
      "Keystone species can be found at any trophic level, not just as top predators.",
      "The species providing the most biomass is typically a dominant species, not necessarily a keystone.",
      "No single species is found at every trophic level in an ecosystem."
    ],
    category: "Food Webs & Energy Flow",
    difficulty: "medium"
  },
  {
    id: 16,
    question: "Bioaccumulation of toxins is most pronounced in:",
    options: [
      "Primary producers",
      "Primary consumers", 
      "Secondary consumers",
      "Top predators",
      "Decomposers"
    ],
    correctAnswer: 3,
    explanation: "Bioaccumulation increases with trophic level, so top predators show the highest concentrations of toxins. Each time a predator consumes prey, toxins concentrate in fatty tissues and are not easily eliminated, leading to biomagnification up the food chain.",
    wrongAnswerExplanations: [
      "Primary producers have the lowest toxin concentrations as they're at the base of the food web.",
      "Primary consumers have higher concentrations than producers but lower than higher trophic levels.",
      "Secondary consumers have high concentrations but not as high as top predators.",
      "Decomposers process dead material but don't bioaccumulate toxins like living predators do."
    ],
    category: "Food Webs & Energy Flow",
    difficulty: "medium"
  },
  {
    id: 17,
    question: "In a food web, omnivores:",
    options: [
      "Only consume plants",
      "Only consume other animals",
      "Feed at multiple trophic levels",
      "Are always keystone species",
      "Cannot exist in stable ecosystems"
    ],
    correctAnswer: 2,
    explanation: "Omnivores feed at multiple trophic levels by consuming both plants (primary producers) and animals (primary and secondary consumers). This makes food webs more complex than simple linear food chains.",
    wrongAnswerExplanations: [
      "This describes herbivores, not omnivores.",
      "This describes carnivores, not omnivores.",
      "Omnivores can be keystone species but are not always keystone species.",
      "Omnivores are common in stable ecosystems and can increase ecosystem stability."
    ],
    category: "Food Webs & Energy Flow",
    difficulty: "easy"
  },
  {
    id: 18,
    question: "The removal of wolves from Yellowstone National Park led to:",
    options: [
      "Increased biodiversity throughout the ecosystem",
      "Overgrazing by elk and subsequent vegetation changes",
      "Improved fish populations in streams",
      "No significant ecological changes",
      "Increased populations of primary producers"
    ],
    correctAnswer: 1,
    explanation: "The removal of wolves led to overgrazing by elk populations, which caused significant vegetation changes including reduced willow and aspen growth. This demonstrates the keystone role of wolves and trophic cascades in ecosystem structure.",
    wrongAnswerExplanations: [
      "Biodiversity actually decreased due to overgrazing and habitat changes.",
      "Fish populations were negatively affected due to streambank erosion from overgrazing.",
      "There were very significant ecological changes throughout the ecosystem.",
      "Primary producers decreased due to overgrazing by ungulates."
    ],
    category: "Food Webs & Energy Flow",
    difficulty: "medium"
  },
  // Island Biogeography questions
  {
    id: 19,
    question: "According to the Theory of Island Biogeography, the number of species on an island is determined by:",
    options: [
      "Only the size of the island",
      "Only the distance from the mainland",
      "The balance between immigration and extinction rates",
      "The age of the island",
      "The climate of the island"
    ],
    correctAnswer: 2,
    explanation: "The Theory of Island Biogeography states that species richness on an island represents an equilibrium between immigration of new species and extinction of existing species. This balance determines the final number of species.",
    wrongAnswerExplanations: [
      "Island size affects species richness but is not the only factor - distance also matters.",
      "Distance affects immigration rates but extinction rates are also crucial.",
      "Island age can influence species richness but is not the primary factor in the equilibrium model.",
      "Climate affects what species can survive but doesn't determine the equilibrium process."
    ],
    category: "Island Biogeography",
    difficulty: "medium"
  },
  {
    id: 20,
    question: "Larger islands typically support more species than smaller islands because:",
    options: [
      "They have higher immigration rates",
      "They have lower extinction rates",
      "They are closer to the mainland",
      "They have more diverse climates",
      "They are older"
    ],
    correctAnswer: 1,
    explanation: "Larger islands have lower extinction rates because they can support larger populations of each species, reducing the probability of random extinction events. They also typically have more diverse habitats.",
    wrongAnswerExplanations: [
      "Immigration rates are more affected by distance than island size.",
      "Island size and distance to mainland are independent factors.",
      "While larger islands may have more climate diversity, the primary factor is reduced extinction rates.",
      "Island age is not necessarily correlated with island size."
    ],
    category: "Island Biogeography",
    difficulty: "medium"
  },
  {
    id: 21,
    question: "Islands closer to the mainland typically have:",
    options: [
      "Lower species richness due to competition",
      "Higher species richness due to higher immigration rates",
      "The same species richness regardless of distance",
      "Higher extinction rates",
      "Smaller population sizes"
    ],
    correctAnswer: 1,
    explanation: "Islands closer to the mainland have higher immigration rates because it's easier for organisms to reach them. This leads to higher species richness at equilibrium, as more species arrive to balance extinction.",
    wrongAnswerExplanations: [
      "Competition doesn't reduce richness in this context - proximity increases immigration.",
      "Distance significantly affects species richness through immigration rates.",
      "Extinction rates are more related to island size than distance from mainland.",
      "Population sizes are more affected by island size and resources than distance."
    ],
    category: "Island Biogeography",
    difficulty: "easy"
  },
  {
    id: 22,
    question: "The species-area relationship typically follows:",
    options: [
      "A linear relationship",
      "An exponential relationship", 
      "A logarithmic relationship",
      "A power law relationship",
      "No predictable relationship"
    ],
    correctAnswer: 3,
    explanation: "The species-area relationship typically follows a power law: S = cA^z, where S is species number, A is area, c is a constant, and z is typically 0.2-0.3. This creates a curved relationship when plotted on normal scales.",
    wrongAnswerExplanations: [
      "The relationship is curved, not linear.",
      "Exponential relationships grow much faster than observed species-area patterns.",
      "Logarithmic relationships level off too quickly compared to observed patterns.",
      "The species-area relationship is one of the most predictable patterns in ecology."
    ],
    category: "Island Biogeography",
    difficulty: "hard"
  },
  {
    id: 23,
    question: "Habitat fragmentation creates 'islands' of habitat that typically experience:",
    options: [
      "Higher species richness than continuous habitat",
      "The same species richness as continuous habitat",
      "Lower species richness due to edge effects and isolation",
      "Unpredictable changes in species richness",
      "Only changes in species composition, not richness"
    ],
    correctAnswer: 2,
    explanation: "Habitat fragmentation creates isolated patches that follow island biogeography principles. Smaller fragments support fewer species due to higher extinction rates, edge effects, and reduced immigration between patches.",
    wrongAnswerExplanations: [
      "Fragmented habitats typically have lower, not higher, species richness.",
      "Fragmentation consistently reduces species richness compared to continuous habitat.",
      "Changes in species richness due to fragmentation are quite predictable based on fragment size and isolation.",
      "Fragmentation affects both species composition and richness."
    ],
    category: "Island Biogeography",
    difficulty: "medium"
  },
  // Population Models questions
  {
    id: 24,
    question: "Exponential population growth occurs when:",
    options: [
      "Resources are unlimited and there is no environmental resistance",
      "The population reaches carrying capacity",
      "Competition for resources is intense",
      "The death rate exceeds the birth rate",
      "Population density is at its maximum"
    ],
    correctAnswer: 0,
    explanation: "Exponential growth occurs when resources are unlimited and there are no limiting factors (environmental resistance). The population grows at a constant rate proportional to its current size, creating a J-shaped curve.",
    wrongAnswerExplanations: [
      "At carrying capacity, population growth stops (zero growth rate).",
      "Intense competition limits growth and prevents exponential increase.",
      "When death rate exceeds birth rate, the population declines.",
      "Maximum population density would limit growth, not allow exponential increase."
    ],
    category: "Population Models",
    difficulty: "easy"
  },
  {
    id: 25,
    question: "The logistic growth model produces:",
    options: [
      "A J-shaped curve",
      "A straight line",
      "An S-shaped (sigmoid) curve", 
      "A U-shaped curve",
      "A bell-shaped curve"
    ],
    correctAnswer: 2,
    explanation: "The logistic growth model produces an S-shaped (sigmoid) curve that starts with exponential growth when population is small, then slows as it approaches carrying capacity, eventually leveling off at equilibrium.",
    wrongAnswerExplanations: [
      "J-shaped curves represent exponential, not logistic growth.",
      "Population growth is not linear in the logistic model.",
      "U-shaped curves don't represent typical population growth patterns.",
      "Bell-shaped curves represent normal distributions, not population growth over time."
    ],
    category: "Population Models",
    difficulty: "easy"
  },
  {
    id: 26,
    question: "Carrying capacity (K) is:",
    options: [
      "The maximum growth rate of a population",
      "The maximum population size that an environment can sustain indefinitely",
      "The time it takes for a population to double",
      "The number of offspring produced per individual",
      "The minimum viable population size"
    ],
    correctAnswer: 1,
    explanation: "Carrying capacity (K) is the maximum population size that an environment can support indefinitely given the available resources. At carrying capacity, birth rates equal death rates and population growth is zero.",
    wrongAnswerExplanations: [
      "This describes the intrinsic growth rate (r), not carrying capacity.",
      "This describes doubling time, not carrying capacity.",
      "This describes fecundity or reproductive rate, not carrying capacity.",
      "This describes the minimum population needed for long-term survival, not maximum sustainable size."
    ],
    category: "Population Models",
    difficulty: "easy"
  },
  {
    id: 27,
    question: "r-selected species typically have:",
    options: [
      "Large body size and long lifespans",
      "Small clutch sizes and extensive parental care",
      "High reproductive rates and short generation times",
      "Stable population sizes near carrying capacity",
      "Strong competitive ability in crowded environments"
    ],
    correctAnswer: 2,
    explanation: "r-selected species are adapted for rapid population growth with high reproductive rates, short generation times, small body size, and minimal parental care. They exploit unstable or unpredictable environments.",
    wrongAnswerExplanations: [
      "These traits describe K-selected species adapted for competitive environments.",
      "Small clutch sizes and extensive care are K-selected traits.",
      "Stable populations near K are characteristic of K-selected species.",
      "Strong competitive ability in crowded conditions describes K-selected species."
    ],
    category: "Population Models",
    difficulty: "medium"
  },
  {
    id: 28,
    question: "Density-dependent factors:",
    options: [
      "Affect populations regardless of population size",
      "Have stronger effects when population density is higher",
      "Only affect small populations",
      "Are always abiotic factors",
      "Never limit population growth"
    ],
    correctAnswer: 1,
    explanation: "Density-dependent factors have effects that vary with population density - their impact becomes stronger as population density increases. Examples include competition, predation, and disease transmission.",
    wrongAnswerExplanations: [
      "This describes density-independent factors, not density-dependent ones.",
      "Density-dependent factors affect populations of all sizes, with effects varying by density.",
      "Density-dependent factors can be biotic (competition, predation) or abiotic (resource depletion).",
      "Density-dependent factors are key mechanisms that limit population growth."
    ],
    category: "Population Models",
    difficulty: "medium"
  },
  {
    id: 29,
    question: "A life table is used to:",
    options: [
      "Predict future population sizes",
      "Calculate survival and reproduction rates for different age classes",
      "Determine carrying capacity",
      "Measure population density",
      "Identify keystone species"
    ],
    correctAnswer: 1,
    explanation: "Life tables track survival and reproduction rates across different age classes in a population. They provide detailed demographic information used to understand population structure and predict future changes.",
    wrongAnswerExplanations: [
      "While life tables help predict changes, their primary purpose is to track demographic rates.",
      "Life tables don't directly determine carrying capacity.",
      "Life tables track demographic rates, not current population density.",
      "Life tables are demographic tools, not used for identifying keystone species."
    ],
    category: "Population Models",
    difficulty: "medium"
  },
  // Conservation Biology questions
  {
    id: 30,
    question: "The minimum viable population (MVP) is:",
    options: [
      "The smallest population that can survive one year",
      "The largest population an area can support",
      "The smallest population that can persist long-term with low probability of extinction",
      "The average population size over time",
      "The population size needed for maximum reproduction"
    ],
    correctAnswer: 2,
    explanation: "MVP is the smallest population size that has a high probability of persisting for a long time (typically 95% probability of surviving 100 years). It accounts for genetic diversity, demographic stochasticity, and environmental variation.",
    wrongAnswerExplanations: [
      "One-year survival is too short-term for MVP calculations.",
      "This describes carrying capacity, not minimum viable population.",
      "MVP is about minimum, not average population size.",
      "MVP focuses on long-term persistence, not maximizing reproduction."
    ],
    category: "Conservation Biology",
    difficulty: "medium"
  },
  {
    id: 31,
    question: "Habitat fragmentation primarily threatens species by:",
    options: [
      "Increasing gene flow between populations",
      "Creating larger habitat patches",
      "Reducing habitat area and increasing isolation",
      "Eliminating edge effects",
      "Improving connectivity between populations"
    ],
    correctAnswer: 2,
    explanation: "Habitat fragmentation breaks continuous habitat into smaller, isolated patches. This reduces total habitat area, increases isolation between populations, creates edge effects, and reduces gene flow - all threatening species persistence.",
    wrongAnswerExplanations: [
      "Fragmentation decreases, not increases, gene flow between populations.",
      "Fragmentation creates smaller, not larger habitat patches.",
      "Fragmentation creates edge effects rather than eliminating them.",
      "Fragmentation reduces, not improves, connectivity between populations."
    ],
    category: "Conservation Biology",
    difficulty: "easy"
  },
  {
    id: 32,
    question: "An endangered species is one that:",
    options: [
      "Has already become extinct",
      "Is likely to become extinct in the near future",
      "Has stable population numbers",
      "Is common but declining slowly",
      "Exists only in captivity"
    ],
    correctAnswer: 1,
    explanation: "An endangered species is one that faces a high risk of extinction in the wild in the near future. This classification is based on population size, rate of decline, and threats to survival.",
    wrongAnswerExplanations: [
      "Extinct species are already gone, not endangered.",
      "Stable populations are not endangered.",
      "Common but slowly declining species might be classified as 'vulnerable' or 'near threatened.'",
      "Species existing only in captivity are classified as 'extinct in the wild.'"
    ],
    category: "Conservation Biology",
    difficulty: "easy"
  },
  {
    id: 33,
    question: "Corridors between habitat patches help conservation by:",
    options: [
      "Preventing all animal movement",
      "Increasing habitat fragmentation",
      "Facilitating gene flow and movement between populations",
      "Eliminating the need for large protected areas",
      "Reducing biodiversity"
    ],
    correctAnswer: 2,
    explanation: "Habitat corridors connect fragmented patches, allowing animal movement and gene flow between isolated populations. This helps maintain genetic diversity and allows recolonization of patches where local extinctions occur.",
    wrongAnswerExplanations: [
      "Corridors facilitate, not prevent, animal movement.",
      "Corridors reduce fragmentation effects rather than increase fragmentation.",
      "Corridors complement but don't eliminate the need for large protected areas.",
      "Corridors help maintain, not reduce, biodiversity."
    ],
    category: "Conservation Biology",
    difficulty: "medium"
  },
  {
    id: 34,
    question: "The main cause of current species extinctions is:",
    options: [
      "Climate change",
      "Habitat loss and degradation",
      "Pollution",
      "Overexploitation",
      "Invasive species"
    ],
    correctAnswer: 1,
    explanation: "Habitat loss and degradation is currently the leading cause of species extinctions globally. While other factors are important, the destruction and fragmentation of natural habitats affects the greatest number of species.",
    wrongAnswerExplanations: [
      "Climate change is increasingly important but currently secondary to habitat loss.",
      "Pollution affects many species but is not the primary extinction driver globally.",
      "Overexploitation is important for some species but affects fewer species than habitat loss.",
      "Invasive species cause extinctions but are not the primary global driver."
    ],
    category: "Conservation Biology",
    difficulty: "medium"
  },
  {
    id: 35,
    question: "Restoration ecology focuses on:",
    options: [
      "Preventing habitat destruction",
      "Breeding endangered species in captivity",
      "Returning degraded ecosystems to a more natural state",
      "Studying pristine ecosystems",
      "Creating new species through genetic engineering"
    ],
    correctAnswer: 2,
    explanation: "Restoration ecology is the scientific study and practice of returning degraded, damaged, or destroyed ecosystems to a more natural, functional state. It involves active intervention to accelerate recovery.",
    wrongAnswerExplanations: [
      "Prevention of destruction is conservation, not restoration.",
      "Captive breeding is ex-situ conservation, not ecosystem restoration.",
      "Studying pristine systems is basic ecology, not restoration ecology.",
      "Creating new species is genetic engineering, not ecosystem restoration."
    ],
    category: "Conservation Biology",
    difficulty: "easy"
  },
  // Additional questions from practice test (13-80)
  {
    id: 36,
    question: "Which of the following statements about niches is **FALSE**?",
    options: [
      "A niche includes a species' requirements for all resources and physical conditions.",
      "The realized niche is always larger than or equal to the fundamental niche.",
      "Biotic interactions like competition can cause a species' realized niche to be smaller than its fundamental niche.",
      "The niche concept can be visualized as an n-dimensional hypervolume.",
      "Two species cannot occupy the exact same niche indefinitely."
    ],
    correctAnswer: 1,
    explanation: "The realized niche is always smaller than or equal to the fundamental niche, not larger. The fundamental niche represents the full range of conditions a species could occupy in the absence of competitors, while the realized niche is what the species actually occupies in the presence of biotic interactions.",
    wrongAnswerExplanations: [
      "This is true - a niche encompasses all resource and environmental requirements.",
      "This is true - competition and other interactions reduce the realized niche size.",
      "This is true - the niche concept is often described as a multidimensional hypervolume.",
      "This is true - this is the competitive exclusion principle."
    ],
    category: "Competition",
    difficulty: "medium"
  },
  {
    id: 37,
    question: "Community ecology is the study of:",
    options: [
      "The distribution and abundance of a single population.",
      "The interactions between organisms and their physical environment.",
      "The global distribution of ecosystems.",
      "The distribution, abundance, and interactions of coexisting species.",
      "The flow of energy and nutrients through an ecosystem."
    ],
    correctAnswer: 3,
    explanation: "Community ecology specifically focuses on the distribution, abundance, and interactions among coexisting species within communities. It examines how species interact with each other and how these interactions shape community structure and dynamics.",
    wrongAnswerExplanations: [
      "This describes population ecology, which focuses on single species.",
      "This describes organismal/physiological ecology or environmental biology.",
      "This describes biogeography or global ecology.",
      "This describes ecosystem ecology, which focuses on energy and nutrient flows."
    ],
    category: "Community Structure",
    difficulty: "easy"
  },
  {
    id: 38,
    question: "Which interaction is represented by the graph on page 12 of the 'Introduction and Competition' lecture, where species B's growth rate increases when with A, but A's growth rate is unchanged?",
    options: [
      "Mutualism",
      "Predation",
      "Commensalism",
      "Competition",
      "Amensalism"
    ],
    correctAnswer: 2,
    explanation: "Commensalism is characterized by one species benefiting (B's growth rate increases) while the other is unaffected (A's growth rate unchanged). This represents a (+/0) interaction where only one partner gains from the relationship.",
    wrongAnswerExplanations: [
      "Mutualism would show both species benefiting (+/+).",
      "Predation would show one benefiting at the expense of the other (+/-).",
      "Competition would show both species negatively affected (-/-).",
      "Amensalism would show one species harmed while the other is unaffected (-/0)."
    ],
    category: "Species Interactions",
    difficulty: "medium"
  },
  {
    id: 39,
    question: "A clownfish living within the stinging tentacles of a sea anemone, where both species benefit, is an example of:",
    options: [
      "Competition (-/-)",
      "Commensalism (+/0)",
      "Mutualism (+/+)",
      "Parasitism (+/-)",
      "Amensalism (-/0)"
    ],
    correctAnswer: 2,
    explanation: "The clownfish-anemone relationship is mutualistic because both species benefit. The clownfish gains protection from predators, while the anemone benefits from the clownfish's waste products (nutrients) and protection from anemone-eating fish.",
    wrongAnswerExplanations: [
      "Competition harms both species, but here both benefit.",
      "Commensalism benefits only one species, but both clownfish and anemone benefit.",
      "Parasitism benefits one at the expense of the other, but both benefit here.",
      "Amensalism harms one while leaving the other unaffected."
    ],
    category: "Species Interactions",
    difficulty: "easy"
  },
  {
    id: 40,
    question: "The 'Goldilocks principle' applied to Galapagos finches suggests that:",
    options: [
      "The largest beak size is always the most advantageous.",
      "The smallest beak size allows for the most diverse diet.",
      "Natural selection favors an optimal beak size that is 'just right' for the most available resources.",
      "Beak size is unrelated to feeding efficiency.",
      "Finches will choose the food that is intermediate in size, regardless of their beak morphology."
    ],
    correctAnswer: 2,
    explanation: "The Goldilocks principle suggests that there's an optimal beak size that maximizes feeding efficiency for the most abundant or accessible food resources. Too large or too small beaks are less efficient, so natural selection favors the 'just right' intermediate size.",
    wrongAnswerExplanations: [
      "Larger isn't always better - it depends on available food resources.",
      "Smaller beaks may limit access to larger food items.",
      "Beak size is strongly related to feeding efficiency and food choice.",
      "Finches are constrained by their beak morphology when choosing food items."
    ],
    category: "Competition",
    difficulty: "medium"
  },
  {
    id: 41,
    question: "A limiting resource is best defined as:",
    options: [
      "Any factor that is abundant in the environment.",
      "Any factor used by an organism that affects its population growth rate.",
      "A resource that is only used by one species.",
      "A resource that is toxic in high concentrations.",
      "Any abiotic factor, such as temperature or salinity."
    ],
    correctAnswer: 1,
    explanation: "A limiting resource is any factor that organisms use for survival and reproduction, and when it becomes scarce, it limits population growth. These resources can be depleted by consumption and create competition between organisms.",
    wrongAnswerExplanations: [
      "Abundant factors are not limiting - scarcity creates the limitation.",
      "Many resources are used by multiple species, creating interspecific competition.",
      "Toxicity at high concentrations doesn't define a limiting resource.",
      "Abiotic factors like temperature aren't consumed/depleted like resources."
    ],
    category: "Competition",
    difficulty: "medium"
  },
  {
    id: 42,
    question: "When grown together, *P. aurelia* drives *P. caudatum* to extinction. This is a classic example of:",
    options: [
      "Stable coexistence",
      "Resource partitioning",
      "Competitive exclusion",
      "A realized niche",
      "A fundamental niche"
    ],
    correctAnswer: 2,
    explanation: "Gause's experiments with Paramecium species demonstrated competitive exclusion - when two species compete for the same limited resource, one will eventually exclude the other. P. aurelia consistently outcompeted P. caudatum for the same food source.",
    wrongAnswerExplanations: [
      "Stable coexistence would mean both species persist together.",
      "Resource partitioning would allow both species to coexist by using different resources.",
      "A realized niche is the actual niche occupied, not the competitive outcome.",
      "A fundamental niche is the potential niche in absence of competitors."
    ],
    category: "Competition",
    difficulty: "medium"
  },
  {
    id: 43,
    question: "Based on the interactions table, which of the following is a (+/-) interaction?",
    options: [
      "Mutualism",
      "Competition",
      "Commensalism",
      "Herbivory",
      "Amensalism"
    ],
    correctAnswer: 3,
    explanation: "Herbivory (and predation in general) represents a (+/-) interaction where the consumer/predator benefits (+) while the consumed organism is harmed (-). The herbivore gains nutrition while the plant loses tissue or dies.",
    wrongAnswerExplanations: [
      "Mutualism is (+/+) where both species benefit.",
      "Competition is (-/-) where both species are harmed.",
      "Commensalism is (+/0) where one benefits and the other is unaffected.",
      "Amensalism is (-/0) where one is harmed and the other is unaffected."
    ],
    category: "Species Interactions",
    difficulty: "easy"
  },
  {
    id: 44,
    question: "Higher species diversity is generally thought to contribute to:",
    options: [
      "Lower ecosystem stability and resilience.",
      "Simplified food webs.",
      "Greater ecosystem stability and resilience.",
      "Decreased genetic diversity within populations.",
      "Increased rates of competitive exclusion."
    ],
    correctAnswer: 2,
    explanation: "Higher species diversity generally increases ecosystem stability and resilience through multiple mechanisms including functional redundancy, more complex food webs, and insurance effects where diverse communities are better buffered against disturbances.",
    wrongAnswerExplanations: [
      "Diversity typically increases, not decreases, stability and resilience.",
      "Higher diversity creates more complex, not simplified, food webs.",
      "Diversity generally increases genetic diversity through larger, more connected populations.",
      "Diverse communities often show less competitive exclusion due to niche partitioning."
    ],
    category: "Diversity Patterns",
    difficulty: "medium"
  },
  {
    id: 45,
    question: "An organism that creates its own food from inorganic sources, typically using solar radiation, is called a(n):",
    options: [
      "Heterotroph",
      "Primary consumer",
      "Carnivore",
      "Autotroph",
      "Decomposer"
    ],
    correctAnswer: 3,
    explanation: "Autotrophs are organisms that produce their own organic compounds from inorganic sources, typically using sunlight (photosynthesis) or chemical energy (chemosynthesis). They form the base of food webs as primary producers.",
    wrongAnswerExplanations: [
      "Heterotrophs consume other organisms rather than producing their own food.",
      "Primary consumers eat autotrophs but don't produce their own food.",
      "Carnivores eat other animals and are a type of heterotroph.",
      "Decomposers break down dead material but don't create food from inorganic sources."
    ],
    category: "Food Webs & Energy Flow",
    difficulty: "easy"
  },
  {
    id: 46,
    question: "A food web differs from a food chain because:",
    options: [
      "A food web only shows the flow of energy to the top predator.",
      "A food chain is a more complex representation of feeding relationships.",
      "A food web represents the complex, interconnected feeding relationships in a community, while a food chain is a linear sequence.",
      "A food web does not include primary producers.",
      "A food chain includes decomposers, while a food web does not."
    ],
    correctAnswer: 2,
    explanation: "A food web shows the complex, interconnected feeding relationships among all species in a community, while a food chain shows a single, linear pathway of energy transfer from producers to top predators. Food webs better represent the complexity of real ecosystems.",
    wrongAnswerExplanations: [
      "Food webs show energy flow to all consumers, not just top predators.",
      "Food chains are simpler and more linear than food webs.",
      "Food webs include primary producers at their base.",
      "Both food webs and food chains can include decomposers."
    ],
    category: "Food Webs & Energy Flow",
    difficulty: "easy"
  },
  {
    id: 47,
    question: "In a trophic cascade, an indirect effect would be:",
    options: [
      "A lion eating a zebra.",
      "A wolf preying on an elk.",
      "A piscivorous fish eating a zooplanktivorous fish.",
      "An increase in algae abundance resulting from the addition of piscivorous fish that prey on zooplanktivores.",
      "A grasshopper consuming grass."
    ],
    correctAnswer: 3,
    explanation: "A trophic cascade involves indirect effects across multiple trophic levels. Adding piscivorous fish reduces zooplanktivorous fish, which allows zooplankton to increase, which then reduces algae. The effect on algae is indirect, mediated through the intermediate trophic level.",
    wrongAnswerExplanations: [
      "This is a direct predator-prey interaction, not an indirect effect.",
      "This is a direct predator-prey interaction.",
      "This is a direct predator-prey interaction at one trophic level.",
      "This is a direct herbivore-plant interaction."
    ],
    category: "Food Webs & Energy Flow",
    difficulty: "hard"
  },
  {
    id: 48,
    question: "The collapse of Atlantic cod stocks led to an increase in their prey, such as small fish. This is an example of:",
    options: [
      "Bottom-up control, where the loss of prey caused the predator to decline.",
      "A trophic cascade, where removing a top predator caused an imbalance in the food chain.",
      "Apparent competition between cod and smaller fish.",
      "A shift from an aquatic to a terrestrial food web.",
      "An increase in Lindeman's efficiency."
    ],
    correctAnswer: 1,
    explanation: "This is a classic trophic cascade where the removal of a top predator (cod) led to an increase in their prey (small fish). This top-down effect demonstrates how predators can control prey populations and structure food webs.",
    wrongAnswerExplanations: [
      "This is top-down control (predator loss affecting prey), not bottom-up control.",
      "Apparent competition involves shared predators, not the direct predator-prey relationship described.",
      "The food web remains aquatic - there's no shift to terrestrial systems.",
      "Lindeman's efficiency refers to energy transfer rates, not predator removal effects."
    ],
    category: "Food Webs & Energy Flow",
    difficulty: "medium"
  },
  {
    id: 49,
    question: "In an ecological network diagram, species are represented by _______ and their interactions are represented by _______.",
    options: [
      "lines; nodes",
      "arrows; circles",
      "nodes; lines",
      "trophic levels; arrows",
      "pyramids; webs"
    ],
    correctAnswer: 2,
    explanation: "In ecological network diagrams, species are represented by nodes (points or circles) and their interactions are represented by lines or edges connecting the nodes. This is standard network representation used across many fields.",
    wrongAnswerExplanations: [
      "This reverses the correct representation - lines show interactions, nodes show species.",
      "Arrows and circles aren't the standard terminology for network diagrams.",
      "Trophic levels are functional groups, not individual species representations.",
      "Pyramids and webs are different types of ecological diagrams, not network elements."
    ],
    category: "Food Webs & Energy Flow",
    difficulty: "easy"
  },
  {
    id: 50,
    question: "Which of the following represents a **direct** trophic effect?",
    options: [
      "The increase of willow trees after wolf reintroduction.",
      "The recovery of bird populations in Yellowstone.",
      "The consumption of elk by wolves.",
      "The stabilization of stream banks.",
      "The increase in beaver populations."
    ],
    correctAnswer: 2,
    explanation: "Direct trophic effects involve immediate predator-prey interactions. Wolves consuming elk is a direct effect - the predator directly impacts its prey through consumption. All other options are indirect effects that occur through intermediate steps.",
    wrongAnswerExplanations: [
      "Willow increase is indirect - wolves reduce elk, which reduces browsing pressure on willows.",
      "Bird recovery is indirect, likely through habitat changes caused by the wolf-elk interaction.",
      "Stream bank stabilization is indirect, occurring through vegetation recovery.",
      "Beaver population increase is indirect, likely through improved habitat from vegetation recovery."
    ],
    category: "Food Webs & Energy Flow",
    difficulty: "medium"
  },
  {
    id: 51,
    question: "An organism that feeds on organisms from multiple trophic levels (e.g., a bear that eats berries and fish) is called a(n):",
    options: [
      "Autotroph",
      "Herbivore",
      "Carnivore",
      "Omnivore",
      "Detritivore"
    ],
    correctAnswer: 3,
    explanation: "Omnivores feed on organisms from multiple trophic levels, consuming both plant material (primary producers) and animal material (consumers). Bears are classic omnivores, eating berries, fish, and other varied foods.",
    wrongAnswerExplanations: [
      "Autotrophs produce their own food rather than consuming others.",
      "Herbivores only consume plant material from one trophic level.",
      "Carnivores only consume animal material.",
      "Detritivores specialize in consuming dead organic matter."
    ],
    category: "Food Webs & Energy Flow",
    difficulty: "easy"
  },
  {
    id: 52,
    question: "Which statement about energy flow in ecosystems is **TRUE**?",
    options: [
      "Approximately 90% of the energy from one trophic level is transferred to the next.",
      "Energy is efficiently recycled from top predators back to producers.",
      "Most of the energy at a trophic level is lost as heat during metabolic processes.",
      "Tertiary consumers have the largest amount of available energy in an ecosystem.",
      "Biomass pyramids are always upright, with producers at the base having the most biomass."
    ],
    correctAnswer: 2,
    explanation: "Most energy (about 90%) at each trophic level is lost as heat during metabolic processes like respiration, movement, and maintaining body temperature. Only about 10% is incorporated into biomass and available to the next level.",
    wrongAnswerExplanations: [
      "Only about 10% is transferred - 90% is lost as heat.",
      "Energy flow is unidirectional - energy is not recycled back to producers.",
      "Primary producers have the most energy - it decreases at higher trophic levels.",
      "Inverted pyramids can occur, especially in aquatic systems where fast-reproducing phytoplankton support larger zooplankton."
    ],
    category: "Food Webs & Energy Flow",
    difficulty: "medium"
  },
  {
    id: 53,
    question: "In the zebra management problem, if the ecosystem is primarily **bottom-up** regulated, what is the best strategy to increase the zebra population?",
    options: [
      "Reduce the lion population.",
      "Introduce a competing herbivore.",
      "Increase the availability or quality of grass.",
      "Build fences to protect zebras from predators.",
      "Introduce a disease that affects lions."
    ],
    correctAnswer: 2,
    explanation: "In bottom-up regulated systems, population sizes are primarily limited by resource availability rather than predation. Increasing grass availability or quality would directly address the limiting factor for zebra populations in such a system.",
    wrongAnswerExplanations: [
      "Reducing predators addresses top-down control, not bottom-up limitation.",
      "Adding competitors would worsen bottom-up limitation by increasing resource competition.",
      "Fences address predation (top-down control), not resource limitation.",
      "Disease introduction addresses predation pressure, not resource availability."
    ],
    category: "Food Webs & Energy Flow",
    difficulty: "hard"
  },
  {
    id: 54,
    question: "Restoration projects often fail due to intense herbivory. Based on the studies presented, which restoration strategy was shown to be most effective for increasing vegetation abundance?",
    options: [
      "Adding more fertilizer.",
      "Removing competing plant species.",
      "Excluding herbivores with fences.",
      "Reintroducing predators to control herbivores.",
      "Planting more seeds."
    ],
    correctAnswer: 3,
    explanation: "Studies have shown that reintroducing predators to control herbivore populations is often more effective than simply excluding herbivores with fences. Predators provide natural, self-sustaining control that can restore natural browsing patterns and allow vegetation recovery.",
    wrongAnswerExplanations: [
      "Fertilizer doesn't address the root cause of herbivory pressure.",
      "Removing competitors may help but doesn't address herbivory pressure.",
      "While fencing can help, predator reintroduction provides more natural and sustainable control.",
      "Planting more seeds doesn't address the herbivory that kills seedlings."
    ],
    category: "Food Webs & Energy Flow",
    difficulty: "hard"
  },
  {
    id: 55,
    question: "The arrows in a food web diagram show the:",
    options: [
      "Direction of competition.",
      "Direction of energy flow.",
      "Relative biomass of each trophic level.",
      "Path of nutrient cycling.",
      "Strength of species interactions."
    ],
    correctAnswer: 1,
    explanation: "Arrows in food web diagrams indicate the direction of energy flow from prey to predator, or from consumed organism to consumer. The arrow points toward the organism receiving the energy.",
    wrongAnswerExplanations: [
      "Competition isn't typically shown with arrows in food web diagrams.",
      "Biomass is shown by the size of boxes or symbols, not arrows.",
      "Nutrient cycling is often shown separately from food web energy flow.",
      "Arrow thickness might indicate interaction strength, but the arrows themselves show energy flow direction."
    ],
    category: "Food Webs & Energy Flow",
    difficulty: "easy"
  },
  {
    id: 56,
    question: "Which of the following trophic levels is NOT a heterotroph?",
    options: [
      "Secondary consumers",
      "Primary consumers",
      "Tertiary consumers",
      "Omnivores",
      "Primary producers"
    ],
    correctAnswer: 4,
    explanation: "Primary producers are autotrophs that make their own food from inorganic sources. All other options (secondary consumers, primary consumers, tertiary consumers, and omnivores) are heterotrophs that consume other organisms for energy.",
    wrongAnswerExplanations: [
      "Secondary consumers eat other consumers and are heterotrophs.",
      "Primary consumers eat producers and are heterotrophs.",
      "Tertiary consumers eat secondary consumers and are heterotrophs.",
      "Omnivores eat both plants and animals and are heterotrophs."
    ],
    category: "Food Webs & Energy Flow",
    difficulty: "easy"
  },
  {
    id: 57,
    question: "The study on large herbivore exclusion and pollination webs suggested that:",
    options: [
      "Large herbivores have no effect on plant-pollinator interactions.",
      "The presence of large herbivores makes plant communities more resistant to the extinction of a pollinator.",
      "The exclusion of large herbivores leads to more specialized pollination networks.",
      "The presence of large herbivores can make a plant community less resistant to the extinction of a pollinator by favoring less-connected plant species.",
      "Pollinators are the primary drivers of large herbivore population dynamics."
    ],
    correctAnswer: 3,
    explanation: "Large herbivores can alter plant community composition in ways that make pollination networks less robust. By selectively grazing certain plants, they can favor species that are less well-connected in the pollination network, making the community more vulnerable to pollinator extinctions.",
    wrongAnswerExplanations: [
      "Large herbivores do affect plant-pollinator interactions by changing plant community structure.",
      "The study showed herbivores can make communities less, not more, resistant.",
      "Herbivore exclusion tends to lead to more generalized, not specialized, networks.",
      "The direction of causation is from herbivores affecting plants, which then affects pollinators."
    ],
    category: "Food Webs & Energy Flow",
    difficulty: "hard"
  },
  {
    id: 58,
    question: "A hawk that eats a snake, which ate a mouse, which ate a grasshopper, which ate grass, is a:",
    options: [
      "Primary producer",
      "Primary consumer",
      "Secondary consumer",
      "Tertiary consumer",
      "Quaternary consumer"
    ],
    correctAnswer: 4,
    explanation: "Counting trophic levels: grass (primary producer) → grasshopper (primary consumer) → mouse (secondary consumer) → snake (tertiary consumer) → hawk (quaternary consumer). The hawk is at the fourth consumer level.",
    wrongAnswerExplanations: [
      "Primary producers make their own food (grass in this chain).",
      "Primary consumers eat producers (grasshopper eating grass).",
      "Secondary consumers eat primary consumers (mouse eating grasshopper).",
      "Tertiary consumers eat secondary consumers (snake eating mouse)."
    ],
    category: "Food Webs & Energy Flow",
    difficulty: "medium"
  },
  {
    id: 59,
    question: "An example of apparent competition would be:",
    options: [
      "Two species of barnacles competing for space.",
      "An increase in lions (who prefer zebras) leading to a decline in eland, even though zebras and eland eat different foods.",
      "A predator preferring to eat the most abundant prey species.",
      "Two bird species partitioning resources in a tree.",
      "An increase in grass leading to an increase in zebras."
    ],
    correctAnswer: 1,
    explanation: "Apparent competition occurs when two prey species negatively affect each other through their shared predator, even if they don't directly compete for resources. Increased lions (due to zebras) can suppress eland populations even though eland and zebras don't compete directly.",
    wrongAnswerExplanations: [
      "This is direct competition for space, not apparent competition.",
      "This is prey switching behavior, not apparent competition.",
      "This is resource partitioning, which reduces direct competition.",
      "This is bottom-up control, showing resource limitation effects."
    ],
    category: "Food Webs & Energy Flow",
    difficulty: "hard"
  },
  {
    id: 60,
    question: "The complex and sometimes counterintuitive results of predator reintroduction in complex food webs highlight the importance of understanding:",
    options: [
      "Only direct trophic effects.",
      "The entire ecological network, including indirect effects and feedbacks.",
      "Only bottom-up control mechanisms.",
      "The genetics of the reintroduced population.",
      "The physical climate of the ecosystem."
    ],
    correctAnswer: 1,
    explanation: "Predator reintroductions often have unexpected consequences because ecosystems are complex networks with indirect effects, feedbacks, and cascading impacts. Understanding the entire ecological network is crucial for predicting and managing these effects.",
    wrongAnswerExplanations: [
      "Direct effects alone are insufficient - indirect effects often dominate in complex systems.",
      "Both top-down and bottom-up controls interact in complex ways.",
      "While genetics matter, the ecological network structure is more critical for understanding ecosystem-wide effects.",
      "Climate is important but secondary to understanding the network of species interactions."
    ],
    category: "Food Webs & Energy Flow",
    difficulty: "hard"
  },
  {
    id: 61,
    question: "The general pattern that species richness increases as one moves from the poles towards the equator is known as the:",
    options: [
      "Island Biogeography Theory",
      "Species-Area Curve",
      "Latitudinal Diversity Gradient",
      "Historical Perturbation Hypothesis",
      "Competitive Exclusion Principle"
    ],
    correctAnswer: 2,
    explanation: "The Latitudinal Diversity Gradient describes the well-documented pattern where species richness generally increases from polar regions toward the tropics. This is one of the most consistent patterns in ecology.",
    wrongAnswerExplanations: [
      "Island Biogeography Theory explains species richness on islands, not latitudinal patterns.",
      "Species-Area Curves show the relationship between area size and species richness.",
      "Historical Perturbation Hypothesis is one explanation for the latitudinal gradient, not the pattern itself.",
      "Competitive Exclusion Principle explains why species can't occupy identical niches."
    ],
    category: "Diversity Patterns",
    difficulty: "easy"
  },
  {
    id: 62,
    question: "The Theory of Island Biogeography, proposed by MacArthur and Wilson, states that the number of species on an island represents a dynamic equilibrium between:",
    options: [
      "Speciation and extinction.",
      "Immigration and speciation.",
      "Immigration and extinction.",
      "Competition and predation.",
      "Birth rate and death rate."
    ],
    correctAnswer: 2,
    explanation: "MacArthur and Wilson's Theory of Island Biogeography proposes that island species richness represents a dynamic equilibrium between immigration of new species from the mainland and extinction of existing species on the island.",
    wrongAnswerExplanations: [
      "Speciation is typically too slow to be a major factor in the theory's time frame.",
      "The theory focuses on immigration vs extinction, not speciation.",
      "Competition and predation are processes that might affect extinction, but aren't the two main forces in the theory.",
      "Birth and death rates refer to individuals, not species colonization/extinction."
    ],
    category: "Island Biogeography",
    difficulty: "medium"
  },
  {
    id: 63,
    question: "The 'rescue effect' refers to:",
    options: [
      "The increase in extinction rates on isolated islands.",
      "The decrease in immigration rates on large islands.",
      "The reduction in the risk of extinction for a population on an island due to the arrival of new individuals from the mainland.",
      "The process of speciation occurring on an island.",
      "The colonization of a brand new, empty island."
    ],
    correctAnswer: 2,
    explanation: "The rescue effect occurs when immigration of individuals from the mainland reduces the probability of local extinction by supplementing small populations, providing genetic diversity, or reestablishing extinct populations.",
    wrongAnswerExplanations: [
      "The rescue effect decreases, not increases, extinction rates.",
      "The rescue effect is about immigration helping populations, not decreasing immigration rates.",
      "The rescue effect prevents extinction rather than promoting speciation.",
      "The rescue effect helps existing populations, not initial colonization events."
    ],
    category: "Island Biogeography",
    difficulty: "medium"
  },
  {
    id: 64,
    question: "The Biological Dynamics of Forest Fragments Project showed that:",
    options: [
      "All forest fragments lose species at the same rate, regardless of size.",
      "Smaller fragments lose species more slowly than larger fragments.",
      "Larger fragments lose species more slowly than smaller fragments.",
      "Habitat fragmentation has no effect on species richness.",
      "Wildlife corridors are ineffective at connecting fragments."
    ],
    correctAnswer: 2,
    explanation: "The BDFFP demonstrated that larger forest fragments retain more species over time and lose species more slowly than smaller fragments, supporting island biogeography theory predictions about the relationship between area and extinction rates.",
    wrongAnswerExplanations: [
      "Fragment size significantly affects species loss rates - larger fragments lose species more slowly.",
      "Smaller fragments actually lose species faster due to higher extinction rates.",
      "The project clearly showed fragmentation reduces species richness over time.",
      "The project has demonstrated the value of corridors for maintaining connectivity."
    ],
    category: "Island Biogeography",
    difficulty: "medium"
  },
  {
    id: 65,
    question: "A wildlife corridor is designed to:",
    options: [
      "Increase the intensity of edge effects.",
      "Isolate habitat fragments to promote unique speciation.",
      "Increase landscape connectivity between fragmented habitats to facilitate movement and gene flow.",
      "Serve as a barrier to prevent the spread of invasive species.",
      "Create small, isolated nature preserves."
    ],
    correctAnswer: 2,
    explanation: "Wildlife corridors are designed to increase connectivity between fragmented habitats, allowing animals to move between patches, maintain gene flow, access different resources, and recolonize areas where local extinctions have occurred.",
    wrongAnswerExplanations: [
      "Corridors are designed to reduce, not increase, the negative effects of fragmentation.",
      "Corridors prevent isolation by connecting fragments rather than isolating them.",
      "Corridors facilitate movement and may actually help native species compete with invasives.",
      "Corridors connect rather than create isolated preserves."
    ],
    category: "Island Biogeography",
    difficulty: "easy"
  },
  {
    id: 66,
    question: "The mean species diversity found within a single site or habitat is referred to as:",
    options: [
      "Alpha Diversity",
      "Beta Diversity",
      "Gamma Diversity",
      "Species Evenness",
      "Latitudinal Diversity"
    ],
    correctAnswer: 0,
    explanation: "Alpha diversity measures the species diversity within a single site, habitat, or local community. It represents the local-scale diversity and is the most commonly measured type of diversity.",
    wrongAnswerExplanations: [
      "Beta diversity measures the change in species composition between sites.",
      "Gamma diversity measures the total diversity across a landscape or region.",
      "Species evenness is a component of diversity, not a spatial scale measure.",
      "Latitudinal diversity refers to patterns across latitude, not within single sites."
    ],
    category: "Diversity Patterns",
    difficulty: "easy"
  },
  {
    id: 67,
    question: "The experiment by Simberloff and Wilson, where they fumigated small mangrove islands and monitored arthropod recolonization, provided a key test of:",
    options: [
      "The Latitudinal Diversity Gradient",
      "The Competitive Exclusion Principle",
      "The Theory of Island Biogeography",
      "The concept of trophic cascades",
      "The Historical Perturbation Hypothesis"
    ],
    correctAnswer: 2,
    explanation: "Simberloff and Wilson's classic experiment provided direct experimental evidence for island biogeography theory by showing that species richness on defaunated islands returned to equilibrium levels through recolonization, supporting predictions about immigration and extinction dynamics.",
    wrongAnswerExplanations: [
      "The experiment was about island recolonization, not latitudinal patterns.",
      "The experiment didn't test competitive exclusion between species.",
      "The experiment wasn't designed to test trophic interactions.",
      "The experiment didn't address historical climate perturbations."
    ],
    category: "Island Biogeography",
    difficulty: "medium"
  },
  {
    id: 68,
    question: "The Evolutionary Rate Hypothesis suggests that higher temperatures in the tropics lead to:",
    options: [
      "Slower mutation rates and longer generation times.",
      "Increased glaciation events.",
      "Lower overall productivity.",
      "Increased mutation rates, shorter generation times, and faster physiological rates, potentially increasing speciation.",
      "A decrease in the total land area."
    ],
    correctAnswer: 3,
    explanation: "The Evolutionary Rate Hypothesis proposes that higher tropical temperatures increase mutation rates, decrease generation times, and accelerate physiological processes, potentially leading to faster rates of evolution and speciation, contributing to higher diversity.",
    wrongAnswerExplanations: [
      "Higher temperatures are hypothesized to increase, not decrease, mutation and metabolic rates.",
      "Glaciation is more likely at higher latitudes, not in warm tropical regions.",
      "Tropical regions typically have higher, not lower, primary productivity.",
      "Temperature doesn't directly affect land area availability."
    ],
    category: "Diversity Patterns",
    difficulty: "medium"
  },
  {
    id: 69,
    question: "A conservation organization has limited funds to create a nature reserve. According to the principles of island biogeography applied to habitat fragments, which design would likely preserve the most species over the long term?",
    options: [
      "Several small, isolated fragments.",
      "One large, contiguous fragment.",
      "Several small fragments connected by narrow corridors.",
      "A long, linear fragment far from other habitats.",
      "Both B and C are considered good strategies, with B generally being superior."
    ],
    correctAnswer: 4,
    explanation: "Island biogeography theory suggests that larger areas support more species and have lower extinction rates. However, connected smaller fragments can also be effective. Generally, one large fragment is optimal, but connected smaller fragments can be nearly as good and may be more feasible.",
    wrongAnswerExplanations: [
      "Small isolated fragments have high extinction rates and low immigration.",
      "While large fragments are good, connected smaller fragments can also be effective.",
      "Connected fragments are good but may not be superior to one large fragment.",
      "Linear fragments have high edge-to-area ratios and isolation is problematic."
    ],
    category: "Island Biogeography",
    difficulty: "hard"
  },
  {
    id: 70,
    question: "The total species diversity across a large region, which is a product of both alpha and beta diversity, is called:",
    options: [
      "Regional Richness",
      "Landscape Diversity",
      "Delta Diversity",
      "Gamma Diversity",
      "Epsilon Diversity"
    ],
    correctAnswer: 3,
    explanation: "Gamma diversity represents the total species diversity across a landscape or region. It incorporates both alpha diversity (local diversity) and beta diversity (turnover between sites), representing the full species pool of the region.",
    wrongAnswerExplanations: [
      "Regional richness is descriptive but not the standard term for this concept.",
      "Landscape diversity is not a standard term for this measure.",
      "Delta diversity is not a recognized diversity measure in this context.",
      "Epsilon diversity is not a standard term in diversity measurement."
    ],
    category: "Diversity Patterns",
    difficulty: "medium"
  },
  {
    id: 71,
    question: "On the island biogeography graph, the equilibrium number of species (Ŝ) is found where:",
    options: [
      "The immigration rate is at its maximum.",
      "The extinction rate is at its maximum.",
      "The immigration rate equals the extinction rate.",
      "The immigration curve is at its lowest point.",
      "The extinction curve is at its lowest point."
    ],
    correctAnswer: 2,
    explanation: "Equilibrium species number occurs where the immigration rate of new species equals the extinction rate of existing species. At this point, species are being added and lost at equal rates, maintaining a stable total species number.",
    wrongAnswerExplanations: [
      "Maximum immigration occurs when no species are present, not at equilibrium.",
      "Maximum extinction would occur with maximum species number, beyond equilibrium.",
      "The immigration curve is highest when species number is zero.",
      "The extinction curve is lowest when species number is zero."
    ],
    category: "Island Biogeography",
    difficulty: "medium"
  },
  {
    id: 72,
    question: "The Species-Area Curve shows that, all else being equal:",
    options: [
      "More area equals fewer species.",
      "More area equals more species.",
      "Area has no relationship with the number of species.",
      "The relationship between area and species is linear.",
      "Only island habitats show a species-area relationship."
    ],
    correctAnswer: 1,
    explanation: "The species-area relationship is one of the most consistent patterns in ecology: larger areas support more species. This occurs due to more habitats, larger population sizes, lower extinction rates, and higher immigration rates in larger areas.",
    wrongAnswerExplanations: [
      "Larger areas consistently support more, not fewer, species.",
      "There is a strong, positive relationship between area and species richness.",
      "The relationship is typically logarithmic or power law, not linear.",
      "Species-area relationships are found in all types of habitats, not just islands."
    ],
    category: "Island Biogeography",
    difficulty: "easy"
  },
  {
    id: 73,
    question: "In the island biogeography model, why does the immigration rate of *new* species decrease as the number of species on the island increases?",
    options: [
      "There are fewer predators on more diverse islands.",
      "The island physically shrinks as more species arrive.",
      "The probability of an arriving individual belonging to a species already present increases.",
      "The extinction rate decreases, blocking new immigrants.",
      "The mainland source population becomes depleted."
    ],
    correctAnswer: 2,
    explanation: "As more species colonize an island, the probability that any new arrival represents a species already present increases. Therefore, the rate of arrival of truly 'new' species decreases, even if total immigration remains constant.",
    wrongAnswerExplanations: [
      "Predator density doesn't directly affect the immigration rate of new species in this model.",
      "Islands don't change size based on species number in this model.",
      "Extinction rates don't block immigration in this model framework.",
      "The mainland source pool is assumed to be effectively infinite in this model."
    ],
    category: "Island Biogeography",
    difficulty: "medium"
  },
  {
    id: 74,
    question: "Which of the following is NOT one of the primary hypotheses discussed to explain the latitudinal diversity gradient?",
    options: [
      "Species-Energy Hypothesis",
      "Geographic Area Hypothesis",
      "Historical Perturbation Hypothesis",
      "Niche Overlap Hypothesis",
      "Evolutionary Rate Hypothesis"
    ],
    correctAnswer: 3,
    explanation: "The Niche Overlap Hypothesis is not one of the primary hypotheses for the latitudinal diversity gradient. The main hypotheses include Species-Energy, Geographic Area, Historical Perturbation, and Evolutionary Rate hypotheses.",
    wrongAnswerExplanations: [
      "Species-Energy Hypothesis is a major explanation linking productivity to diversity.",
      "Geographic Area Hypothesis suggests tropics have more area available for species.",
      "Historical Perturbation Hypothesis links climatic stability to diversity patterns.",
      "Evolutionary Rate Hypothesis suggests faster evolution in warmer climates."
    ],
    category: "Diversity Patterns",
    difficulty: "medium"
  },
  {
    id: 75,
    question: "A study on marine fishes found that the fastest rates of speciation occurred in polar latitudes, which contradicts the simple prediction of the:",
    options: [
      "Geographic Area Hypothesis",
      "Evolutionary Rate Hypothesis",
      "Historical Perturbation Hypothesis",
      "Species-Energy Hypothesis",
      "Island Biogeography Theory"
    ],
    correctAnswer: 1,
    explanation: "The Evolutionary Rate Hypothesis predicts that higher temperatures in tropical regions should lead to faster speciation rates. Finding faster speciation in cold polar regions contradicts this temperature-based prediction.",
    wrongAnswerExplanations: [
      "Geographic Area Hypothesis focuses on available area, not speciation rates directly.",
      "Historical Perturbation Hypothesis focuses on stability, not temperature effects on speciation.",
      "Species-Energy Hypothesis focuses on productivity supporting more species, not speciation rates.",
      "Island Biogeography Theory deals with colonization and extinction, not latitudinal patterns."
    ],
    category: "Diversity Patterns",
    difficulty: "hard"
  },
  {
    id: 76,
    question: "'Habitat islands,' such as mountain tops or lakes, can be analyzed using the Theory of Island Biogeography because:",
    options: [
      "They are always surrounded by water.",
      "They are isolated patches of a specific habitat surrounded by a 'sea' of unsuitable habitat.",
      "They have no immigration or extinction.",
      "They are only found at high latitudes.",
      "They have higher species richness than the surrounding areas."
    ],
    correctAnswer: 1,
    explanation: "Habitat islands are isolated patches of suitable habitat surrounded by unsuitable habitat, creating the same isolation dynamics as oceanic islands. The 'matrix' of unsuitable habitat acts like water in preventing easy movement between patches.",
    wrongAnswerExplanations: [
      "Habitat islands can be surrounded by any type of unsuitable habitat, not just water.",
      "Habitat islands do experience immigration and extinction, which is why the theory applies.",
      "Habitat islands are found at all latitudes where suitable habitat is fragmented.",
      "Habitat islands may have lower richness due to their smaller size and isolation."
    ],
    category: "Island Biogeography",
    difficulty: "medium"
  },
  {
    id: 77,
    question: "The turnover rate at equilibrium on an island refers to:",
    options: [
      "The rate at which the island's area changes.",
      "The rate at which species are replaced by new immigrant species, while the total number of species remains stable.",
      "The rate of speciation on the island.",
      "The complete extinction of all species followed by recolonization.",
      "The speed at which individuals move from the mainland to the island."
    ],
    correctAnswer: 1,
    explanation: "At equilibrium, species richness remains constant but species composition continues to change through extinction and immigration. Turnover rate measures how quickly species are replaced while maintaining the same total number.",
    wrongAnswerExplanations: [
      "Turnover refers to species replacement, not physical changes to the island.",
      "Turnover involves immigration/extinction of existing species, not evolution of new ones.",
      "Turnover is ongoing replacement at equilibrium, not complete community collapse.",
      "Turnover measures species replacement, not individual movement rates."
    ],
    category: "Island Biogeography",
    difficulty: "hard"
  },
  {
    id: 78,
    question: "A key goal of implementing wildlife corridors for a species like the golden lion tamarin is to:",
    options: [
      "Isolate the population to prevent disease spread.",
      "Increase the habitat available to the population and connect previously isolated groups.",
      "Create a tourist attraction.",
      "Study the effects of habitat fragmentation.",
      "Introduce new predators into the ecosystem."
    ],
    correctAnswer: 1,
    explanation: "Wildlife corridors for golden lion tamarins aim to connect fragmented forest patches, effectively increasing available habitat and allowing gene flow between isolated populations, reducing extinction risk and maintaining genetic diversity.",
    wrongAnswerExplanations: [
      "Corridors connect rather than isolate populations.",
      "While corridors may attract tourists, conservation is the primary goal.",
      "Corridors are a solution to fragmentation, not a tool to study its effects.",
      "Corridors are designed to help existing species, not introduce new predators."
    ],
    category: "Conservation Biology",
    difficulty: "easy"
  },
  {
    id: 79,
    question: "Beta diversity is a measure of:",
    options: [
      "The number of species in one location.",
      "The evenness of species in one location.",
      "The comparison of species composition between two or more sites.",
      "The total number of species in a large region.",
      "The genetic diversity within a single species."
    ],
    correctAnswer: 2,
    explanation: "Beta diversity measures the change or difference in species composition between different sites, habitats, or communities. It quantifies how species composition varies across space or environmental gradients.",
    wrongAnswerExplanations: [
      "This describes alpha diversity, which measures local species richness.",
      "This describes species evenness, a component of alpha diversity.",
      "This describes gamma diversity, which measures regional species totals.",
      "This describes genetic diversity, which is below the species level of organization."
    ],
    category: "Diversity Patterns",
    difficulty: "medium"
  },
  {
    id: 80,
    question: "In the Lotka-Volterra predator-prey equations, what does the term `rV` represent in the prey equation `(dV/dt = rV - cVP)`?",
    options: [
      "The rate at which prey are killed by predators.",
      "The carrying capacity of the prey.",
      "The exponential growth of the prey population in the absence of predators.",
      "The conversion of prey into predator offspring.",
      "The natural mortality rate of the prey."
    ],
    correctAnswer: 2,
    explanation: "The term rV represents the exponential growth rate of the prey population when predators are absent. 'r' is the intrinsic growth rate and 'V' is the prey population size, so rV gives the growth rate in the absence of predation.",
    wrongAnswerExplanations: [
      "Predation is represented by the term cVP, not rV.",
      "The basic Lotka-Volterra model doesn't include carrying capacity.",
      "Conversion efficiency is represented by 'a' in the predator equation, not in rV.",
      "The term rV represents growth, not mortality."
    ],
    category: "Population Models",
    difficulty: "medium"
  },
  {
    id: 81,
    question: "In the predator equation `(dP/dt = acVP - mP)`, the term `acVP` represents:",
    options: [
      "The natural death rate of the predator population.",
      "The growth of the predator population from consuming prey.",
      "The carrying capacity of the predator.",
      "The intrinsic growth rate of the prey.",
      "The rate at which predators are hunted."
    ],
    correctAnswer: 1,
    explanation: "The term acVP represents the growth of the predator population resulting from consuming prey. 'a' is conversion efficiency, 'c' is capture rate, 'V' is prey density, and 'P' is predator density.",
    wrongAnswerExplanations: [
      "Natural death rate of predators is represented by mP.",
      "The Lotka-Volterra model doesn't include carrying capacity terms.",
      "Prey growth rate is rV in the prey equation, not in the predator equation.",
      "Hunting pressure isn't included in the basic Lotka-Volterra model."
    ],
    category: "Population Models",
    difficulty: "medium"
  },
  {
    id: 82,
    question: "The prey zero-growth isocline `(P = r/c)` is a horizontal line on the phase plane. If the predator population is **below** this line, the prey population will:",
    options: [
      "Decrease",
      "Increase",
      "Remain stable",
      "Go extinct immediately",
      "Fluctuate randomly"
    ],
    correctAnswer: 1,
    explanation: "When the predator population is below the prey zero-growth isocline (P < r/c), predation pressure is low relative to the prey's growth rate, so the prey population increases. The prey growth rate (rV - cVP) is positive when P < r/c.",
    wrongAnswerExplanations: [
      "Prey decreases when predator density is above the isocline, not below.",
      "Stability only occurs exactly on the isocline.",
      "Immediate extinction doesn't occur in this model.",
      "The model is deterministic, not random."
    ],
    category: "Population Models",
    difficulty: "medium"
  },
  {
    id: 83,
    question: "Which of the following is a key limitation of the basic Lotka-Volterra predator-prey model?",
    options: [
      "It accurately predicts that populations will reach a stable equilibrium.",
      "It assumes that prey population growth is limited by a carrying capacity.",
      "It predicts that predator and prey populations will cycle endlessly without damping.",
      "It accounts for time lags in predator response to prey abundance.",
      "It incorporates the concept of resource partitioning."
    ],
    correctAnswer: 2,
    explanation: "A major limitation of the basic Lotka-Volterra model is that it predicts neutral cycles that continue indefinitely without damping. Real populations often show damped oscillations that settle to equilibrium or cycles that grow in amplitude.",
    wrongAnswerExplanations: [
      "The model predicts cycles, not stable equilibrium, which is actually unrealistic.",
      "The basic model lacks carrying capacity - this would actually improve its realism.",
      "The model doesn't include time lags, which is another limitation.",
      "The model doesn't address resource partitioning between species."
    ],
    category: "Population Models",
    difficulty: "hard"
  },
  {
    id: 84,
    question: "Gause's experiments with *P. aurelia* and *P. caudatum*, where *P. aurelia* always won, is a real-world example corresponding to which outcome of the Lotka-Volterra competition model?",
    options: [
      "Stable coexistence",
      "Unstable equilibrium",
      "Species A wins (competitive exclusion)",
      "Species B wins",
      "Predator-prey cycling"
    ],
    correctAnswer: 2,
    explanation: "Gause's experiments demonstrated competitive exclusion where P. aurelia consistently outcompeted P. caudatum, corresponding to the 'Species A wins' outcome in Lotka-Volterra competition models where one species drives the other to extinction.",
    wrongAnswerExplanations: [
      "The species didn't coexist - one always excluded the other.",
      "There was no equilibrium - one species consistently won.",
      "P. aurelia won, not the other species.",
      "This was competition, not predator-prey dynamics."
    ],
    category: "Population Models",
    difficulty: "medium"
  },
  {
    id: 85,
    question: "Werner and Hall's studies on sunfish in experimental ponds demonstrated that when different species were housed together, they segregated their diets. When housed alone, their diets converged. This phenomenon is known as:",
    options: [
      "Competitive exclusion",
      "A priority effect",
      "Niche shift and competitive release",
      "A trophic cascade",
      "Apparent competition"
    ],
    correctAnswer: 2,
    explanation: "This demonstrates niche shift (diet segregation when together) and competitive release (diet convergence when alone). When competitors are present, species shift their niches to avoid competition; when alone, they expand their niche use.",
    wrongAnswerExplanations: [
      "Competitive exclusion would eliminate one species, not cause diet shifts.",
      "Priority effects involve order of arrival, not diet shifts in coexistence.",
      "Trophic cascades involve indirect effects across trophic levels.",
      "Apparent competition involves shared predators, not dietary segregation."
    ],
    category: "Population Models",
    difficulty: "hard"
  },
  {
    id: 86,
    question: "Which of the following equations represents the zero-growth isocline for the **predator** in the Lotka-Volterra predator-prey model?",
    options: [
      "`P = r/c`",
      "`V = r/c`",
      "`P = m/ac`",
      "`V = m/ac`",
      "`dV/dt = 0`"
    ],
    correctAnswer: 3,
    explanation: "The predator zero-growth isocline occurs when dP/dt = 0, which means acVP - mP = 0. Solving for V gives V = m/ac. This is a vertical line on the phase plane showing the prey density needed for predator population stability.",
    wrongAnswerExplanations: [
      "P = r/c is the prey zero-growth isocline (horizontal line).",
      "V = r/c is not correct - this doesn't balance the predator equation.",
      "P = m/ac would be solving for predator density, but the isocline shows prey density needed.",
      "dV/dt = 0 is the condition for prey zero-growth, not the isocline equation."
    ],
    category: "Population Models",
    difficulty: "hard"
  },
  {
    id: 87,
    question: "A manager wants to maintain populations of two competing species of deer in a reserve. According to the Lotka-Volterra competition model, what is the 'golden rule' for stable coexistence?",
    options: [
      "Ensure that the carrying capacity for both species is exactly the same.",
      "Ensure that interspecific competition is very strong to keep numbers low.",
      "Ensure that intraspecific competition is stronger than interspecific competition.",
      "Introduce a predator that prefers the more abundant deer species.",
      "Provide supplemental food to eliminate all competition."
    ],
    correctAnswer: 2,
    explanation: "The golden rule for coexistence in Lotka-Volterra competition is that intraspecific competition must be stronger than interspecific competition for both species. This ensures that each species limits itself more than it limits the other species.",
    wrongAnswerExplanations: [
      "Carrying capacities can differ as long as competition coefficients allow coexistence.",
      "Strong interspecific competition promotes exclusion, not coexistence.",
      "Predators change the system beyond the basic competition model framework.",
      "Eliminating competition doesn't address the fundamental competitive dynamics."
    ],
    category: "Population Models",
    difficulty: "hard"
  },
  {
    id: 88,
    question: "The phase plane diagram for the Lotka-Volterra predator-prey model shows:",
    options: [
      "Population sizes changing over time.",
      "A trajectory that spirals into a stable equilibrium point.",
      "A trajectory that shows the predator population density plotted against the prey population density, often resulting in a cycle.",
      "Two straight lines that determine which species wins.",
      "The carrying capacity for both the predator and the prey."
    ],
    correctAnswer: 2,
    explanation: "The phase plane diagram plots predator density against prey density, showing closed circular or elliptical trajectories that represent the cyclical dynamics of both populations. It shows the state space of the system, not time series.",
    wrongAnswerExplanations: [
      "Time series plots show population vs. time; phase planes show predator vs. prey density.",
      "Lotka-Volterra cycles are neutral, not spiraling into equilibrium.",
      "Straight lines would represent isoclines in competition models, not predator-prey phase planes.",
      "The basic model doesn't include carrying capacities."
    ],
    category: "Population Models",
    difficulty: "medium"
  },
  {
    id: 89,
    question: "The Lotka-Volterra models are best viewed as:",
    options: [
      "Perfect, exact representations of all real-world species interactions.",
      "Foundational theoretical frameworks that provide key insights into the dynamics of predation and competition.",
      "Models that are only applicable to single-celled organisms in laboratory settings.",
      "A set of rules for managing wildlife populations without any limitations.",
      "A way to prove that coexistence is impossible in nature."
    ],
    correctAnswer: 1,
    explanation: "Lotka-Volterra models are foundational theoretical frameworks that provide fundamental insights into predator-prey and competition dynamics. While simplified, they help us understand basic principles that can be elaborated in more complex models.",
    wrongAnswerExplanations: [
      "The models are simplified and don't capture all real-world complexity.",
      "The models apply to many organisms and provide general insights beyond laboratory settings.",
      "The models have limitations and shouldn't be used for management without considering their assumptions.",
      "The models actually show conditions under which coexistence is possible."
    ],
    category: "Population Models",
    difficulty: "medium"
  },
  {
    id: 90,
    question: "In the competition model, what does it mean if the competition coefficient `α_AB` = 0.5?",
    options: [
      "An individual of Species B has half the competitive effect on Species A as an individual of Species A has on its own species.",
      "Species B consumes Species A.",
      "An individual of Species A has half the competitive effect on Species B as an individual of Species B has on its own species.",
      "The two species have a mutualistic relationship.",
      "Species B increases the carrying capacity for Species A."
    ],
    correctAnswer: 0,
    explanation: "The competition coefficient α_AB measures the competitive effect of species B on species A. If α_AB = 0.5, then one individual of species B has half the competitive impact on species A as one individual of species A has on itself.",
    wrongAnswerExplanations: [
      "This describes predation, not competition.",
      "This reverses the subscript notation - α_AB measures B's effect on A.",
      "Competition coefficients measure harmful effects, not mutualistic ones.",
      "Competition coefficients represent competitive effects, not increases in carrying capacity."
    ],
    category: "Population Models",
    difficulty: "medium"
  },
  {
    id: 91,
    question: "If we modify the Lotka-Volterra predator-prey equations to include a carrying capacity (K) for the prey, how would this change the prey isocline?",
    options: [
      "It would remain a horizontal line.",
      "It would become a vertical line.",
      "It would become a 'humped' or downward-sloping line.",
      "It would no longer exist.",
      "It would cause the predator population to go extinct."
    ],
    correctAnswer: 2,
    explanation: "Adding a carrying capacity to the prey equation creates a humped or inverted-U shaped prey isocline. At low predator densities, prey can increase, but as predator density increases, the sustainable prey density decreases, eventually reaching zero.",
    wrongAnswerExplanations: [
      "The horizontal line occurs only in the basic model without carrying capacity.",
      "Vertical lines are typically predator isoclines, not prey isoclines.",
      "The isocline still exists, but its shape changes.",
      "Adding carrying capacity doesn't necessarily cause predator extinction."
    ],
    category: "Population Models",
    difficulty: "hard"
  },
  {
    id: 92,
    question: "Which of the following is an assumption of the basic Lotka-Volterra predator-prey model that is often violated in nature?",
    options: [
      "Predators and prey respond instantly to changes in each other's populations (no time lags).",
      "Prey population growth is limited by density-dependent factors.",
      "Predators have a varied diet and can switch to other prey.",
      "The environment is not constant.",
      "All of the above are assumptions that are often violated."
    ],
    correctAnswer: 4,
    explanation: "All listed factors are assumptions of the basic Lotka-Volterra model that are commonly violated in nature: the model assumes instant responses (no time lags), unlimited prey growth, specialized predators, and constant environment.",
    wrongAnswerExplanations: [
      "While this is a violated assumption, it's not the only one listed.",
      "This is also a commonly violated assumption, but not the only one.",
      "This assumption is also frequently violated in nature.",
      "Environmental variation is common in nature, violating the model's assumption."
    ],
    category: "Population Models",
    difficulty: "hard"
  },
  {
    id: 93,
    question: "In the four outcomes of competition, which scenarios result in the extinction of one species? (Select all that apply) I. Species A wins II. Species B wins III. Stable coexistence IV. Unstable Equilibrium",
    options: [
      "I and II only",
      "III and IV only", 
      "I, II, and IV",
      "All four scenarios",
      "None of the scenarios"
    ],
    correctAnswer: 2,
    explanation: "Species extinction occurs in: I (Species A wins - B goes extinct), II (Species B wins - A goes extinct), and IV (Unstable equilibrium - which species goes extinct depends on initial conditions). Only stable coexistence (III) allows both species to persist.",
    wrongAnswerExplanations: [
      "Unstable equilibrium also leads to extinction, depending on initial conditions.",
      "Both stable coexistence and unstable equilibrium can maintain species, but unstable equilibrium typically leads to extinction.",
      "Stable coexistence allows both species to persist indefinitely.",
      "Stable coexistence prevents extinction of both species."
    ],
    category: "Population Models", 
    difficulty: "hard"
  },
  {
    id: 94,
    question: "Stephen Hubbell's Neutral Theory offers an alternative to the niche-based view of community structure (like that described by Lotka-Volterra competition) by suggesting that community composition can be driven by:",
    options: [
      "Intense, deterministic competition for niches.",
      "The predictable outcomes of predator-prey cycles.",
      "Random chance, dispersal, and speciation events.",
      "Abiotic factors only.",
      "The strength of mutualistic interactions."
    ],
    correctAnswer: 2,
    explanation: "Neutral Theory proposes that community composition is largely determined by stochastic processes like random birth, death, immigration, and speciation rather than deterministic niche-based competition. Species are considered functionally equivalent.",
    wrongAnswerExplanations: [
      "Neutral theory de-emphasizes deterministic competition in favor of random processes.",
      "Neutral theory doesn't focus on predator-prey cycles as the main driver.",
      "Neutral theory considers biotic factors but emphasizes their random rather than deterministic effects.",
      "Neutral theory doesn't focus specifically on mutualistic interactions."
    ],
    category: "Population Models",
    difficulty: "hard"
  },
  {
    id: 95,
    question: "A key insight from the Lotka-Volterra competition model is that the outcome of competition depends on:",
    options: [
      "Only the intrinsic growth rates (`r`) of the species.",
      "Only the initial population sizes of the species.",
      "The relative strengths of intraspecific and interspecific competition, as reflected by `K` and `α` values.",
      "The presence or absence of predators.",
      "The geographic location of the interaction."
    ],
    correctAnswer: 2,
    explanation: "The outcome of Lotka-Volterra competition depends on the relative magnitudes of carrying capacities (K) and competition coefficients (α), which determine whether intraspecific or interspecific competition is stronger for each species.",
    wrongAnswerExplanations: [
      "Growth rates affect dynamics but the α and K values determine outcomes.",
      "Initial conditions may affect which equilibrium is reached but don't determine the possible outcomes.",
      "The basic competition model doesn't include predators.",
      "The model's outcomes depend on competitive parameters, not geographic factors."
    ],
    category: "Population Models",
    difficulty: "medium"
  },
  {
    id: 96,
    question: "In the Lotka-Volterra predator-prey equations, the parameter 'c' (capture efficiency) directly influences the:",
    options: [
      "Predator's death rate.",
      "Prey's zero-growth isocline.",
      "Prey's intrinsic growth rate.", 
      "Predator's conversion efficiency.",
      "Predator's carrying capacity."
    ],
    correctAnswer: 1,
    explanation: "The capture efficiency 'c' appears in both the prey equation (cVP term) and determines the prey's zero-growth isocline (P = r/c). Higher capture efficiency means predators need lower density to balance prey growth.",
    wrongAnswerExplanations: [
      "Predator death rate is parameter 'm', not 'c'.",
      "Prey intrinsic growth rate is parameter 'r', independent of capture efficiency.",
      "Predator conversion efficiency is parameter 'a', not 'c'.",
      "The basic Lotka-Volterra model doesn't include carrying capacity."
    ],
    category: "Population Models",
    difficulty: "hard"
  },
  {
    id: 97,
    question: "An integrative conservation scenario: A manager reintroduces a top predator (a wolf) into an ecosystem containing two competing deer species (A and B). Species A is the superior competitor and is slowly driving Species B to local extinction, matching the 'Species A Wins' Lotka-Volterra outcome. If the newly introduced wolf preferentially preys on Species A, this could lead to:",
    options: [
      "An acceleration of Species B's extinction.",
      "The extinction of both deer species.",
      "A switch to bottom-up control for the entire ecosystem.",
      "Predator-mediated coexistence, where the predation pressure on the dominant competitor allows the weaker competitor to persist.",
      "The extinction of the wolf due to insufficient prey."
    ],
    correctAnswer: 3,
    explanation: "Predator-mediated coexistence can occur when a predator preferentially targets the superior competitor, reducing its competitive advantage and allowing the inferior competitor to persist. This shifts the competitive balance.",
    wrongAnswerExplanations: [
      "Preferential predation on the dominant species should help, not harm, Species B.",
      "Selective predation on one species shouldn't cause extinction of both.",
      "Adding a predator increases top-down control rather than switching to bottom-up.",
      "Preferential predation on the abundant species should provide sufficient prey for wolves."
    ],
    category: "Population Models",
    difficulty: "hard"
  },
  {
    id: 98,
    question: "In the Yellowstone ecosystem, the reintroduction of wolves (an apex predator) led to a decrease in the coyote (mesopredator) population. This change likely benefited smaller carnivores like foxes. This is an example of a trophic cascade that reduced the intensity of:",
    options: [
      "Intraspecific competition among wolves.",
      "Exploitative and interference competition between coyotes and foxes for shared prey like small mammals.",
      "Mutualism between elk and aspen trees.",
      "Bottom-up control in the ecosystem.",
      "Resource partitioning between wolves and coyotes."
    ],
    correctAnswer: 1,
    explanation: "This describes a trophic cascade where wolves suppress coyotes, reducing competition between coyotes and foxes for shared prey (small mammals). This is an example of exploitative and interference competition being reduced through predation pressure.",
    wrongAnswerExplanations: [
      "This isn't about wolves competing with each other, but their effect on coyotes.",
      "Elk and aspen have a herbivore-plant relationship, not mutualism.",
      "Wolf reintroduction increases top-down control rather than reducing it.",
      "Wolves and coyotes have different primary prey, so resource partitioning isn't the main issue."
    ],
    category: "Population Models",
    difficulty: "hard"
  },
  {
    id: 99,
    question: "How does **Lindeman's 10% rule** of energy transfer help explain why ecosystems with higher primary productivity (as described in the **Species-Energy Hypothesis**) can support more species?",
    options: [
      "Inefficient energy transfer means that only ecosystems with a very large energy base (high productivity) can support enough energy flow to sustain the higher trophic levels necessary for complex food webs and high diversity.",
      "It suggests that energy transfer is more efficient in the tropics, exceeding 10%.",
      "It proves that all ecosystems are limited to three trophic levels.",
      "It shows that energy is recycled efficiently, so the initial amount of primary productivity is unimportant.",
      "The 10% rule is unrelated to the amount of energy at the base of the food web."
    ],
    correctAnswer: 0,
    explanation: "The 10% rule explains that because energy transfer is inefficient (only ~10% passes between levels), ecosystems need very high primary productivity to support multiple trophic levels. Higher productivity can support more species and more complex food webs with additional trophic levels.",
    wrongAnswerExplanations: [
      "The 10% rule is approximately constant across ecosystems, not more efficient in tropics.",
      "Most ecosystems can support more than three trophic levels if productivity is high enough.",
      "Energy is not recycled - it flows unidirectionally and is lost as heat.",
      "The 10% rule directly relates to how much energy is available from primary productivity."
    ],
    category: "Conservation Biology",
    difficulty: "hard"
  },
  {
    id: 100,
    question: "Imagine two herbivore species that do not share any food resources but are both preyed upon by the same lion population. If an ecologist unfamiliar with the shared predator were to model their interaction using the Lotka-Volterra competition equations, they might incorrectly conclude:",
    options: [
      "The two species have a mutualistic relationship.",
      "The two species are in a state of stable coexistence due to resource partitioning.",
      "The negative correlation in their populations is due to direct competition (a non-zero `α`), when in fact it is due to **apparent competition** mediated by the predator.",
      "There is no interaction between the two species.",
      "The populations are controlled solely by bottom-up forces."
    ],
    correctAnswer: 2,
    explanation: "Apparent competition can create negative correlations between prey species through their shared predator, even when they don't compete directly. An ecologist seeing this pattern might incorrectly attribute it to direct competition if they're unaware of the shared predator.",
    wrongAnswerExplanations: [
      "Apparent competition creates negative, not positive, correlations between species.",
      "The species don't coexist due to resource partitioning if they already use different resources.",
      "If unaware of the predator, an ecologist would see population fluctuations and might assume some interaction exists.",
      "The presence of a shared predator means top-down forces are important, not just bottom-up."
    ],
    category: "Conservation Biology",
    difficulty: "hard"
  },
  {
    id: 101,
    question: "How might the greater climatic stability of the tropics, as proposed by the **Historical Perturbation Hypothesis**, facilitate the high **alpha diversity** seen there?",
    options: [
      "Stability leads to frequent disturbances that create new niches.",
      "Long periods of stability may allow for more specialized adaptations and finer **niche partitioning**, enabling more species to coexist in a given habitat without competitively excluding one another.",
      "Stability increases the geographic area of the tropics.",
      "Stability increases the efficiency of energy transfer beyond 10%.",
      "Stability prevents evolution and speciation from occurring."
    ],
    correctAnswer: 1,
    explanation: "Long-term climatic stability allows species time to evolve specialized adaptations and develop finer niche partitioning. This reduces competitive exclusion and enables more species to coexist in the same local area (higher alpha diversity).",
    wrongAnswerExplanations: [
      "Stability reduces disturbances, it doesn't create frequent disturbances.",
      "Climatic stability doesn't directly change geographic area.",
      "Energy transfer efficiency is largely governed by thermodynamic constraints, not climatic stability.",
      "Stability can actually facilitate evolution by providing consistent selective pressures."
    ],
    category: "Conservation Biology",
    difficulty: "hard"
  },
  {
    id: 102,
    question: "In the lake biomanipulation example, adding piscivorous fish is a top-down measure to control algae. How does this action alter the parameters of the Lotka-Volterra predator-prey interaction between zooplankton (prey) and zooplanktivorous fish (predator)?",
    options: [
      "It increases the intrinsic growth rate (`r`) of the zooplankton.",
      "It effectively increases the 'mortality rate' (`m`) of the zooplanktivorous fish by adding a new source of predation, which in turn benefits the zooplankton.",
      "It decreases the capture efficiency (`c`) of the zooplanktivorous fish.",
      "It increases the carrying capacity of the algae.",
      "It has no effect on the model's parameters."
    ],
    correctAnswer: 1,
    explanation: "Adding piscivorous fish effectively increases the mortality rate (m) of zooplanktivorous fish by adding predation pressure. This reduces the zooplanktivorous fish population, allowing zooplankton to increase and control algae more effectively.",
    wrongAnswerExplanations: [
      "Adding piscivorous fish doesn't directly change zooplankton reproductive rate.",
      "The piscivorous fish don't directly affect how efficiently zooplanktivorous fish capture zooplankton.",
      "The intervention targets fish populations, not algae carrying capacity directly.",
      "Adding another trophic level significantly alters the predator-prey dynamics."
    ],
    category: "Conservation Biology",
    difficulty: "hard"
  },
  {
    id: 103,
    question: "A community with high **species evenness** (from Lecture 1) is likely more resilient to environmental change than a community dominated by one species. How does this relate to **food web stability** (from Lecture 2)?",
    options: [
      "High evenness means the food web is simpler and less stable.",
      "In an even community, consumers have multiple, relatively abundant food sources. The loss of one prey species is less likely to cause the collapse of a predator population because the food web has more redundant pathways.",
      "High evenness only occurs in communities with low species richness.",
      "Evenness is a measure of bottom-up control, while food web stability is a measure of top-down control.",
      "A dominant species is required to stabilize a complex food web."
    ],
    correctAnswer: 1,
    explanation: "High species evenness provides functional redundancy in food webs. When multiple prey species are relatively abundant, predators have alternative food sources if one prey species declines, creating more stable food webs with redundant pathways.",
    wrongAnswerExplanations: [
      "High evenness typically correlates with more complex, stable food webs, not simpler ones.",
      "High evenness can occur with either high or low species richness.",
      "Evenness relates to abundance patterns, not specifically to top-down vs. bottom-up control.",
      "Dominance by one species often creates instability because the system depends heavily on that single species."
    ],
    category: "Conservation Biology",
    difficulty: "hard"
  },
  {
    id: 104,
    question: "What is the key difference between species richness and species diversity?",
    options: [
      "Species richness includes abundance while species diversity only counts species.",
      "Species richness only counts the number of species, while species diversity considers both the number of species and their relative abundances (evenness).",
      "Species richness measures rare species while species diversity measures common species.",
      "There is no difference - they are the same measure.",
      "Species richness is measured at the ecosystem level while species diversity is measured at the population level."
    ],
    correctAnswer: 1,
    explanation: "Species richness is simply the count of different species present in a community. Species diversity, however, is a more comprehensive measure that considers both species richness (how many species) and species evenness (how equally distributed their abundances are). A community can have high richness but low diversity if one species dominates.",
    wrongAnswerExplanations: [
      "This reverses the definitions - richness counts species while diversity includes abundance patterns.",
      "Both measures can include rare and common species; the difference is in how abundance is considered.",
      "These are distinct measures with species diversity being more comprehensive than richness alone.",
      "Species richness and diversity can both be measured at various scales, not restricted to specific organizational levels."
    ],
    category: "Community Structure",
    difficulty: "easy"
  },
  {
    id: 105,
    question: "The Shannon Diversity Index (H') is highest when a community has:",
    options: [
      "Many species with one highly dominant species.",
      "Few species with equal abundances.",
      "Many species with relatively equal abundances.",
      "One species that makes up 90% of all individuals.",
      "Only rare species with very low abundances."
    ],
    correctAnswer: 2,
    explanation: "The Shannon Diversity Index reaches its maximum value when a community has both high species richness (many species) and high evenness (all species have similar abundances). This combination maximizes uncertainty in predicting which species a randomly selected individual will belong to.",
    wrongAnswerExplanations: [
      "Dominance by one species reduces evenness and lowers the Shannon index despite high richness.",
      "Few species limits the maximum possible Shannon value even with perfect evenness.",
      "Extreme dominance by one species minimizes both evenness and the Shannon index value.",
      "Very low abundances don't necessarily create high diversity; it's the relative equality that matters."
    ],
    category: "Community Structure",
    difficulty: "medium"
  },
  {
    id: 106,
    question: "Simpson's Diversity Index differs from Shannon's Index in that Simpson's Index:",
    options: [
      "Only measures species richness, not evenness.",
      "Gives more weight to abundant species and measures the probability that two randomly selected individuals are the same species.",
      "Can only be used for plant communities.",
      "Measures genetic diversity within species rather than species diversity.",
      "Is always higher than the Shannon Index for the same community."
    ],
    correctAnswer: 1,
    explanation: "Simpson's Index measures the probability that two randomly selected individuals from a community belong to the same species. It gives more weight to abundant species than Shannon's Index, making it more sensitive to dominance patterns and less sensitive to rare species.",
    wrongAnswerExplanations: [
      "Simpson's Index incorporates both richness and evenness, like Shannon's Index.",
      "Simpson's Index can be applied to any community type, not just plants.",
      "Simpson's Index measures species diversity, not genetic diversity within species.",
      "The relationship between Simpson's and Shannon's values depends on community structure and cannot be generalized."
    ],
    category: "Community Structure",
    difficulty: "medium"
  },
  {
    id: 107,
    question: "In a rank-abundance curve, a steep slope indicates:",
    options: [
      "High species evenness with similar abundances across species.",
      "Low species diversity with high dominance by a few species.",
      "High species richness with many rare species.",
      "Equal abundance of all species in the community.",
      "Random distribution of individuals among species."
    ],
    correctAnswer: 1,
    explanation: "A steep slope in a rank-abundance curve indicates high dominance inequality, where a few species are very abundant while most are rare. This pattern reflects low evenness and suggests that the community is dominated by relatively few species.",
    wrongAnswerExplanations: [
      "High evenness would produce a shallow, flat slope, not a steep one.",
      "While there may be many rare species, the steep slope primarily indicates dominance patterns rather than richness.",
      "Equal abundance would create a perfectly horizontal line, not a steep slope.",
      "Random distribution would typically produce a moderate slope following a log-normal pattern."
    ],
    category: "Community Structure",
    difficulty: "hard"
  },
  {
    id: 108,
    question: "Community composition refers to _____ while community structure refers to _____:",
    options: [
      "The number of species; the abundance of each species.",
      "Which species are present; how those species are organized and interact within the community.",
      "Rare species; common species.",
      "Producer species; consumer species.",
      "Native species; invasive species."
    ],
    correctAnswer: 1,
    explanation: "Community composition is the identity or list of species present in a community (who is there), while community structure encompasses the organization, relationships, abundance patterns, and interactions among those species (how they are arranged and relate to each other).",
    wrongAnswerExplanations: [
      "This confuses composition with richness and structure with abundance; both aspects contribute to structure.",
      "Both composition and structure can include rare and common species; this isn't the distinguishing factor.",
      "Both composition and structure encompass all trophic levels, not just producers or consumers.",
      "The native vs. invasive distinction relates to biogeography and invasion biology, not the composition-structure distinction."
    ],
    category: "Community Structure",
    difficulty: "easy"
  },
  {
    id: 109,
    question: "In community ecology, rare species are often considered important because they:",
    options: [
      "Always become dominant over time through competitive exclusion.",
      "Have no ecological impact and can be ignored in community studies.",
      "May contribute disproportionately to community function, provide insurance against environmental change, and represent potential keystone species.",
      "Only exist in disturbed habitats and indicate ecosystem damage.",
      "Prevent dominant species from reproducing successfully."
    ],
    correctAnswer: 2,
    explanation: "Rare species can have disproportionate ecological importance despite low abundance. They may perform unique ecosystem functions, provide biological insurance against environmental changes, serve as potential keystone species, or represent genetic reservoirs for future adaptation.",
    wrongAnswerExplanations: [
      "Most rare species remain rare; competitive exclusion often works against them, not in their favor.",
      "Rare species can have significant ecological impacts despite low abundance - rarity doesn't equal irrelevance.",
      "Rare species can occur in both pristine and disturbed habitats; their presence doesn't necessarily indicate damage.",
      "Rare species typically don't prevent dominant species reproduction; they often coexist through niche differentiation."
    ],
    category: "Community Structure",
    difficulty: "medium"
  }
];

export const categories = [
  "Community Structure",
  "Species Interactions", 
  "Competition",
  "Food Webs & Energy Flow",
  "Diversity Patterns",
  "Island Biogeography",
  "Population Models",
  "Conservation Biology"
];

// Improved Fisher-Yates shuffle algorithm for better randomization
export function getRandomQuestions(count: number): Question[] {
  const shuffled = [...questions];
  
  // Fisher-Yates shuffle algorithm
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled.slice(0, count);
}

export function getQuestionsByCategory(category: string): Question[] {
  return questions.filter(q => q.category === category);
}

export function getQuestionsByDifficulty(difficulty: 'easy' | 'medium' | 'hard'): Question[] {
  return questions.filter(q => q.difficulty === difficulty);
}