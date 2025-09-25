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

export function getRandomQuestions(count: number): Question[] {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export function getQuestionsByCategory(category: string): Question[] {
  return questions.filter(q => q.category === category);
}

export function getQuestionsByDifficulty(difficulty: 'easy' | 'medium' | 'hard'): Question[] {
  return questions.filter(q => q.difficulty === difficulty);
}