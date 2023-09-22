const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3030;

const Pictures = [
  {
    id: 1,
    name: "Flamingo",
    taxonomy: {
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Aves",
      order: "Phoenicopteriformes",
      family: "Phoenicopteridae",
      genus: "Phoenicopterus",
    },
    locations: [
      "Africa",
      "Asia",
      "Central-America",
      "Eurasia",
      "Europe",
      "North-America",
      "South-America",
    ],
    characteristics: {
      prey: "Algae, Fish, Insects",
      distinctive_feature: "Long, curved beak and sleep standing on one leg",
      wingspan: "100cm - 180cm (59in - 71in)",
      habitat: "Large lakes and plant less lagoons",
      predators: "Human, Eagles, Wild dogs",
      diet: "Omnivore",
      lifestyle: "Flock",
      favorite_food: "Algae",
      type: "Bird",
      average_clutch_size: "1",
      slogan: "Sleeps on just one leg!",
      color: "BlueWhiteOrangePink",
      skin_type: "Feathers",
      top_speed: "31 mph",
      lifespan: "15 - 30 years",
      weight: "2kg - 4kg (4.4lbs - 8.8lbs)",
      height: "100cm - 150cm (39in - 59in)",
    },
  },
  {
    id: 2,
    name: "Flamingo",
    taxonomy: {
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Aves",
      order: "Phoenicopteriformes",
      family: "Phoenicopteridae",
      genus: "Phoenicopterus",
    },
    locations: [
      "Africa",
      "Asia",
      "Central-America",
      "Eurasia",
      "Europe",
      "North-America",
      "South-America",
    ],
    characteristics: {
      prey: "Algae, Fish, Insects",
      distinctive_feature: "Long, curved beak and sleep standing on one leg",
      wingspan: "100cm - 180cm (59in - 71in)",
      habitat: "Large lakes and plant less lagoons",
      predators: "Human, Eagles, Wild dogs",
      diet: "Omnivore",
      lifestyle: "Flock",
      favorite_food: "Algae",
      type: "Bird",
      average_clutch_size: "1",
      slogan: "Sleeps on just one leg!",
      color: "BlueWhiteOrangePink",
      skin_type: "Feathers",
      top_speed: "31 mph",
      lifespan: "15 - 30 years",
      weight: "2kg - 4kg (4.4lbs - 8.8lbs)",
      height: "100cm - 150cm (39in - 59in)",
    },
  },
  {
    id: 3,
    name: "Flamingo",
    taxonomy: {
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Aves",
      order: "Phoenicopteriformes",
      family: "Phoenicopteridae",
      genus: "Phoenicopterus",
    },
    locations: [
      "Africa",
      "Asia",
      "Central-America",
      "Eurasia",
      "Europe",
      "North-America",
      "South-America",
    ],
    characteristics: {
      prey: "Algae, Fish, Insects",
      distinctive_feature: "Long, curved beak and sleep standing on one leg",
      wingspan: "100cm - 180cm (59in - 71in)",
      habitat: "Large lakes and plant less lagoons",
      predators: "Human, Eagles, Wild dogs",
      diet: "Omnivore",
      lifestyle: "Flock",
      favorite_food: "Algae",
      type: "Bird",
      average_clutch_size: "1",
      slogan: "Sleeps on just one leg!",
      color: "BlueWhiteOrangePink",
      skin_type: "Feathers",
      top_speed: "31 mph",
      lifespan: "15 - 30 years",
      weight: "2kg - 4kg (4.4lbs - 8.8lbs)",
      height: "100cm - 150cm (39in - 59in)",
    },
  },
  {
    id: 4,
    name: "Flamingo",
    taxonomy: {
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Aves",
      order: "Phoenicopteriformes",
      family: "Phoenicopteridae",
      genus: "Phoenicopterus",
    },
    locations: [
      "Africa",
      "Asia",
      "Central-America",
      "Eurasia",
      "Europe",
      "North-America",
      "South-America",
    ],
    characteristics: {
      prey: "Algae, Fish, Insects",
      distinctive_feature: "Long, curved beak and sleep standing on one leg",
      wingspan: "100cm - 180cm (59in - 71in)",
      habitat: "Large lakes and plant less lagoons",
      predators: "Human, Eagles, Wild dogs",
      diet: "Omnivore",
      lifestyle: "Flock",
      favorite_food: "Algae",
      type: "Bird",
      average_clutch_size: "1",
      slogan: "Sleeps on just one leg!",
      color: "BlueWhiteOrangePink",
      skin_type: "Feathers",
      top_speed: "31 mph",
      lifespan: "15 - 30 years",
      weight: "2kg - 4kg (4.4lbs - 8.8lbs)",
      height: "100cm - 150cm (39in - 59in)",
    },
  },
  {
    id: 5,
    name: "Lemur",
    taxonomy: {
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Mammalia",
      order: "Primates",
      family: "Lemuridae",
      scientific_name: "Lemur Catta",
    },
    locations: ["Africa"],
    characteristics: {
      prey: "Fruit, Leaves, Insects",
      habitat: "Dry forest and tropical jungle",
      predators: "Hawk, Fossa, Wild dogs",
      diet: "Omnivore",
      average_litter_size: "3",
      lifestyle: "Group",
      favorite_food: "Fruit",
      type: "Mammal",
      slogan: "Natively found on the island of Madagascar!",
      color: "BrownGreyBlackWhite",
      skin_type: "Fur",
      top_speed: "12 mph",
      lifespan: "10-14 years",
      weight: "0.03-10kg (0.06-22lbs)",
    },
  },
  {
    id: 6,
    name: "Flamingo",
    taxonomy: {
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Aves",
      order: "Phoenicopteriformes",
      family: "Phoenicopteridae",
      genus: "Phoenicopterus",
    },
    locations: [
      "Africa",
      "Asia",
      "Central-America",
      "Eurasia",
      "Europe",
      "North-America",
      "South-America",
    ],
    characteristics: {
      prey: "Algae, Fish, Insects",
      distinctive_feature: "Long, curved beak and sleep standing on one leg",
      wingspan: "100cm - 180cm (59in - 71in)",
      habitat: "Large lakes and plant less lagoons",
      predators: "Human, Eagles, Wild dogs",
      diet: "Omnivore",
      lifestyle: "Flock",
      favorite_food: "Algae",
      type: "Bird",
      average_clutch_size: "1",
      slogan: "Sleeps on just one leg!",
      color: "BlueWhiteOrangePink",
      skin_type: "Feathers",
      top_speed: "31 mph",
      lifespan: "15 - 30 years",
      weight: "2kg - 4kg (4.4lbs - 8.8lbs)",
      height: "100cm - 150cm (39in - 59in)",
    },
  },
  {
    id: 7,
    "name": "Spider Monkey",
    "taxonomy": {
      "kingdom": "Animalia",
      "phylum": "Chordata",
      "class": "Mammalia",
      "order": "Primates",
      "family": "Atelidae",
      "genus": "Ateles",
      "scientific_name": "Simia Paniscus"
    },
    "locations": [
      "Central-America",
      "South-America"
    ],
    "characteristics": {
      "prey": "Fruit, Nuts, Leaves",
      "habitat": "Tropical jungle and rainforest",
      "predators": "Human, Eagles, Jaguar",
      "diet": "Omnivore",
      "average_litter_size": "1",
      "lifestyle": "Troop",
      "favorite_food": "Fruit",
      "type": "Mammal",
      "slogan": "Found in the tropical jungles of South America!",
      "color": "BrownGreyBlackWhite",
      "skin_type": "Hair",
      "top_speed": "35 mph",
      "lifespan": "15-27 years",
      "weight": "6.4-12kg (14-26lbs)"
    }
  },
  {
    id: 8,
    "name": "African Penguin",
    "taxonomy": {
      "kingdom": "Animalia",
      "phylum": "Chordata",
      "class": "Aves",
      "order": "Sphenisciformes",
      "family": "Spheniscidae",
      "genus": "Spheniscus",
      "scientific_name": "Spheniscus demersus"
    },
    "locations": [
      "Africa",
      "Ocean"
    ],
    "characteristics": {
      "prey": "Fish, Squid, Crustaceans",
      "name_of_young": "Chick",
      "group_behavior": "Colony",
      "estimated_population_size": "140,000",
      "biggest_threat": "Habitat disruption",
      "most_distinctive_feature": "Pink glands above their eyes",
      "other_name(s)": "Jackass Penguin",
      "water_type": "Salt",
      "incubation_period": "40 days",
      "age_of_fledgling": "3 - 5 months",
      "habitat": "Rocky Ocean Islands",
      "predators": "Sharks, Fur Seals, Gulls",
      "diet": "Carnivore",
      "lifestyle": "Diurnal",
      "common_name": "African Penguin",
      "number_of_species": "1",
      "location": "south-west African coast",
      "average_clutch_size": "2",
      "slogan": "The only penguin species in Africa!",
      "group": "Bird",
      "color": "GreyBlackWhite",
      "skin_type": "Feathers",
      "top_speed": "12.4 mph",
      "lifespan": "10 - 15 years",
      "weight": "2kg - 5kg (4.4lbs - 11lbs)",
      "height": "60cm - 68cm (24in - 27in)",
      "age_of_sexual_maturity": "3 - 4 years"
    }
  },
  {
    id: 9,
    name: "Cheetah",
    taxonomy: {
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Mammalia",
      order: "Carnivora",
      family: "Felidae",
      genus: "Acinonyx",
      scientific_name: "Acinonyx jubatus",
    },
    locations: ["Africa", "Asia", "Eurasia"],
    characteristics: {
      prey: "Gazelle, Wildebeest, Hare",
      name_of_young: "Cub",
      group_behavior: "Solitary/Pairs",
      estimated_population_size: "8,500",
      biggest_threat: "Habitat loss",
      most_distinctive_feature: "Yellowish fur covered in small black spots",
      gestation_period: "90 days",
      habitat: "Open grassland",
      diet: "Carnivore",
      average_litter_size: "3",
      lifestyle: "Diurnal",
      common_name: "Cheetah",
      number_of_species: "5",
      location: "Asia and Africa",
      slogan: "The fastest land mammal in the world!",
      group: "Mammal",
      color: "BrownYellowBlackTan",
      skin_type: "Fur",
      top_speed: "70 mph",
      lifespan: "10 - 12 years",
      weight: "40kg - 65kg (88lbs - 140lbs)",
      height: "115cm - 136cm (45in - 53in)",
      age_of_sexual_maturity: "20 - 24 months",
      age_of_weaning: "3 months",
    },
  },
  {
    id: 10,
    name: "Kestrel",
    taxonomy: {
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Aves",
      order: "Falconiformes",
      family: "Falconidae",
      genus: "Falco",
      scientific_name: "Falco sparverius",
    },
    locations: ["Africa", "Asia", "Europe", "North-America", "South-America"],
    characteristics: {
      prey: "Small rodents, lizards, insects, birds, and eggs",
      estimated_population_size: "9.2 million",
      biggest_threat: "Starvation",
      most_distinctive_feature: "Hunting behavior of hovering and diving",
      "other_name(s)":
        "Grasshopper hawk, killy hawk, short-winged hawk, windhover, house hawk, and rusty-crowned falcon",
      wingspan: "20-31in",
      incubation_period: "30 days",
      habitat: "Open countryside",
      predators: "Larger birds of prey, snakes, fire ants, and cats",
      diet: "Carnivore",
      average_litter_size: "3-7",
      type: "Bird",
      common_name: "Sparrowhawk",
      number_of_species: "15",
      location: "North America, most of South America, Europe, Asia, Africa",
      nesting_location: "Natural cavities, other birds' nests, nesting boxes",
      age_of_molting: "The next spring (adults molt in the fall)",
      migratory: "1",
      color: "BrownBlack",
      top_speed: "39 mph",
      lifespan: "5 years in the wild, 17 years in captivity",
      weight: "2.8-6.5oz",
      height: "Unknown",
      length: "8.7-15in",
    },
  },
  {
	id: 11,
    "name": "Squirrel Monkey",
    "taxonomy": {
      "kingdom": "Animalia",
      "phylum": "Chordata",
      "class": "Mammalia",
      "order": "Primates",
      "family": "Cebidae",
      "genus": "Saimiri",
      "scientific_name": "Saimiri"
    },
    "locations": [
      "Central-America",
      "South-America"
    ],
    "characteristics": {
      "prey": "Fruit, Insects, Flowers",
      "name_of_young": "Infant",
      "group_behavior": "Troop",
      "estimated_population_size": "Not Known",
      "biggest_threat": "Habitat loss",
      "most_distinctive_feature": "Longer tail than body used for balance",
      "other_name(s)": "Deaths Head Monkey",
      "gestation_period": "170 days",
      "habitat": "Dense, tropical jungle close to a stream",
      "predators": "Birds of Prey, Snakes, Humans",
      "diet": "Omnivore",
      "average_litter_size": "1",
      "lifestyle": "Diurnal",
      "common_name": "Squirrel Monkey",
      "number_of_species": "5",
      "location": "Central and South America",
      "slogan": "Lives in groups of up to 500 individuals!",
      "group": "Mammal",
      "color": "GreyYellowBlackOlive",
      "skin_type": "Fur",
      "top_speed": "22 mph",
      "lifespan": "15 - 20 years",
      "weight": "0.75kg -1.1k g (1.7lbs - 2.4lbs)",
      "height": "25cm - 36cm (9.8in - 14in)",
      "age_of_sexual_maturity": "3 - 5 years",
      "age_of_weaning": "4 months"
    }
  },
  {
	id: 12,
    "name": "Sumatran Tiger",
    "taxonomy": {
      "kingdom": "Animalia",
      "phylum": "Chordata",
      "class": "Mammalia",
      "order": "Carnivora",
      "family": "Felidae",
      "genus": "Panthera",
      "scientific_name": "Panthera Tigris Sumatrae"
    },
    "locations": [
      "Asia"
    ],
    "characteristics": {
      "prey": "Deer, Cattle, Wild Boar",
      "habitat": "Dense tropical forest",
      "predators": "Human",
      "diet": "Carnivore",
      "average_litter_size": "3",
      "lifestyle": "Solitary",
      "favorite_food": "Deer",
      "type": "Mammal",
      "slogan": "The smallest species of tiger!",
      "color": "BlackWhiteOrange",
      "skin_type": "Fur",
      "top_speed": "60 mph",
      "lifespan": "18 - 25 years",
      "weight": "80kg - 150kg (176lbs - 330lbs)"
    }
  },
{
	id:13,
    "name": "Muntjac",
    "taxonomy": {
      "kingdom": "Animalia",
      "phylum": "Chordata",
      "class": "Mammalia",
      "order": "Artiodactyla",
      "family": "Cervidae",
      "genus": "Muntiacus"
    },
    "locations": [
      "Asia",
      "Europe"
    ],
    "characteristics": {
      "prey": "Fruits, foliage, seeds, bark, eggs, and meat",
      "name_of_young": "Fawn",
      "group_behavior": "Solitary",
      "estimated_population_size": "Unknown",
      "biggest_threat": "Habitat loss",
      "most_distinctive_feature": "The tusk-like teeth projecting from the mouth",
      "other_name(s)": "Barking deer and rib-faced deer",
      "gestation_period": "6-8 months",
      "litter_size": "1 or 2 fawns",
      "habitat": "Forests, scrublands, savannas, and grasslands",
      "predators": "Humans, tigers, leopards, jackals, dholes, crocodiles, foxes, and pythons",
      "diet": "Omnivore",
      "type": "Mammal",
      "common_name": "Muntjac",
      "number_of_species": "12",
      "location": "South and Southeastern Asia",
      "color": "BrownBlackWhite",
      "skin_type": "Hair",
      "lifespan": "10-20 years",
      "weight": "15-35kg (33-77lbs)",
      "height": "40-65cm (15-25in)",
      "length": "70-115cm (27-45in)",
      "age_of_sexual_maturity": "1 year",
      "age_of_weaning": "2 months"
    }
  },
{
	id:15, 
    "name": "Bearded Dragon",
    "taxonomy": {
      "kingdom": "Animalia",
      "phylum": "Chordata",
      "class": "Reptilia",
      "order": "Squamata",
      "family": "Agamidae",
      "genus": "Pogona",
      "scientific_name": "Pogona Vitticeps"
    },
    "locations": [
      "Oceania"
    ],
    "characteristics": {
      "prey": "Insects, Mice, Leaves",
      "distinctive_feature": "Pronounced beard when scared and morphs skin colour",
      "habitat": "Arid forest and desert",
      "predators": "Birds, Snakes, Crocodiles",
      "diet": "Omnivore",
      "average_litter_size": "15",
      "lifestyle": "Solitary",
      "favorite_food": "Insects",
      "type": "Reptile",
      "slogan": "Can grow to up 24 inches long!",
      "color": "BrownGreyYellowGreen",
      "skin_type": "Scales",
      "top_speed": "25 mph",
      "lifespan": "6 - 15 years",
      "weight": "250g - 510g (9oz - 18oz)",
      "length": "50cm - 61cm (20in - 24in)"
    }
  },
  {
	id: 16,
    "name": "Tawny Owl",
    "taxonomy": {
      "kingdom": "Animalia",
      "phylum": "Chordata",
      "class": "Aves",
      "order": "Strigiformes",
      "family": "Strigidae",
      "genus": "Strix",
      "scientific_name": "Strix aluco"
    },
    "locations": [
      "Asia",
      "Eurasia",
      "Europe"
    ],
    "characteristics": {
      "prey": "Mice, Vole, Insects",
      "distinctive_feature": "Large eyes and fantastic hearing",
      "wingspan": "81cm - 105cm (32in - 41in)",
      "habitat": "Dense forest and open woodland",
      "predators": "Hawks, Eagles, Buzzards",
      "diet": "Omnivore",
      "lifestyle": "Solitary",
      "favorite_food": "Mice",
      "type": "Bird",
      "average_clutch_size": "3",
      "slogan": "The most widespread owl in Europe!",
      "color": "BrownGreyBlackWhiteTan",
      "skin_type": "Feathers",
      "top_speed": "50 mph",
      "lifespan": "4 - 6 years",
      "weight": "350g - 650g (12oz - 23oz)",
      "height": "38cm - 43cm (15in - 17in)"
    }
  },
  {
	id:17,
    "name": "Fruit Bat",
    "taxonomy": {
      "kingdom": "Animalia",
      "phylum": "Chordata",
      "class": "Mammalia",
      "order": "Chiroptera",
      "family": "Pteropodidae"
    },
    "locations": [
      "Africa",
      "Asia",
      "Oceania",
      "South-America"
    ],
    "characteristics": {
      "name_of_young": "Pups",
      "group_behavior": "Colony",
      "estimated_population_size": "Unknown",
      "biggest_threat": "Habitat Loss",
      "most_distinctive_feature": "Wings",
      "other_name(s)": "Flying Foxes",
      "gestation_period": "4-6 months",
      "litter_size": "1-4 pups",
      "habitat": "Forests and savannas",
      "predators": "Snakes, lizards, birds, and mammals",
      "diet": "Herbivore",
      "favorite_food": "Fruits, pollen, nectar, and more",
      "type": "Mammal",
      "common_name": "Fruit Bat",
      "location": "Africa, Asia, and Australia",
      "color": "BrownGreyBlack",
      "skin_type": "Hair",
      "lifespan": "30years",
      "weight": "Up to 1.4kg (3.1lbs)",
      "length": "Up to 32cm (13in)",
      "age_of_sexual_maturity": "2 years",
      "age_of_weaning": "A few months"
    }
  },
 {
	id: 18,
    "name": "Cockatoo",
    "taxonomy": {
      "kingdom": "Animalia",
      "phylum": "Chordata",
      "class": "Aves",
      "order": "Psittaciformes",
      "family": "Cacatuidae"
    },
    "locations": [
      "Asia",
      "Oceania"
    ],
    "characteristics": {
      "name_of_young": "Chicks or hatchlings",
      "group_behavior": "Flock",
      "most_distinctive_feature": "Crest of feathers on the head",
      "wingspan": "Varies",
      "habitat": "Forests, groves, and plains",
      "predators": "Falcons, eagles, owls, snakes, and cats",
      "diet": "Omnivore",
      "favorite_food": "Fruits, seeds, and tubers",
      "common_name": "Cockatoo",
      "location": "Australia, New Guinea, Philippines, Indonesia, and Pacific islands",
      "slogan": "Highly social, smart, and chatty bird.",
      "group": "Birds",
      "skin_type": "Feathers",
      "lifespan": "20 to 70 years in the wild",
      "weight": "300g – 1,200g (0.66lbs – 2.65lbs)",
      "length": "30cm - 76cm (12in - 30in)",
      "age_of_sexual_maturity": "3 to 7 years"
    }
  },
{
	id:19,
    "name": "Cassowary",
    "taxonomy": {
      "kingdom": "Animalia",
      "phylum": "Chordata",
      "class": "Aves",
      "order": "Casuariiformes",
      "family": "Casuariidae",
      "genus": "Casuarius"
    },
    "locations": [
      "Oceania"
    ],
    "characteristics": {
      "prey": "Insects, Grass, Fungi",
      "distinctive_feature": "Sharp claws and horn-like crest",
      "wingspan": "Wings are tiny",
      "incubation_period": "49 to 52 days",
      "habitat": "Wet tropical forests",
      "predators": "Dingo, Crocodile, Humans",
      "diet": "Omnivore",
      "lifestyle": "Solitary",
      "type": "Bird",
      "average_clutch_size": "5",
      "slogan": "Can reach speeds of 30mph!",
      "nesting_location": "The ground",
      "age_of_molting": "9 months",
      "color": "YellowBlueBlackTan",
      "skin_type": "Feathers",
      "top_speed": "31 mph",
      "lifespan": "40 - 60 years",
      "weight": "25kg - 58.5kg (55lbs - 129lbs)",
      "height": "1.5m - 2m (59in - 79in)"
    }
  },
{
	id:20,
    "name": "Kangaroo",
    "taxonomy": {
      "kingdom": "Animalia",
      "phylum": "Chordata",
      "class": "Mammalia",
      "order": "Diprotodontia",
      "family": "Macropodidae"
    },
    "locations": [
      "Oceania"
    ],
    "characteristics": {
      "prey": "Grass, Seeds, Flowers",
      "habitat": "Dry forests, desert and grassland",
      "predators": "Human, Dingo",
      "diet": "Omnivore",
      "average_litter_size": "2",
      "lifestyle": "Sociable",
      "favorite_food": "Grass",
      "type": "Mammal",
      "slogan": "Females have a deep pouch on their front!",
      "color": "BrownGreyTan",
      "skin_type": "Fur",
      "top_speed": "35 mph",
      "lifespan": "4-10 years",
      "weight": "18-95kg (40-200lbs)"
    }
  },
{
	id:24,
    "name": "Gazelle",
    "taxonomy": {
      "kingdom": "Animalia",
      "phylum": "Chordata",
      "class": "Mammalia",
      "order": "Artiodactyla",
      "family": "Bovidae",
      "genus": "Gazella",
      "scientific_name": "Gazella gazella"
    },
    "locations": [
      "Africa",
      "Asia"
    ],
    "characteristics": {
      "name_of_young": "fawns",
      "group_behavior": "Herd",
      "estimated_population_size": "<500",
      "biggest_threat": "hunting",
      "most_distinctive_feature": "Long curved horns",
      "gestation_period": "5-6 months",
      "litter_size": "1-2",
      "habitat": "Grasslands, savannas, shrubby steppes",
      "predators": "Lions, leopards, cheetahs, hyenas, wolves",
      "diet": "Herbivore",
      "type": "mammal",
      "common_name": "gazelle",
      "number_of_species": "16",
      "location": "Africa, Asia",
      "group": "herd",
      "color": "BrownYellowBlackWhite",
      "skin_type": "Fur",
      "top_speed": "60 mph",
      "lifespan": "10-12 years",
      "weight": "26 to 165 lbs.",
      "height": "2.0 to 3.6 feet",
      "length": "42.0 to 49.0 feet",
      "age_of_sexual_maturity": "1 year (males) to 1.5 years (females)",
      "age_of_weaning": "2-3 months"
    }
  },
{
	id:25,
    "name": "Red Panda",
    "taxonomy": {
      "kingdom": "Animalia",
      "phylum": "Chordata",
      "class": "Mammalia",
      "order": "Carnivora",
      "family": "Ailuridae",
      "genus": "Ailurus",
      "scientific_name": "Ailurus fulgens"
    },
    "locations": [
      "Asia"
    ],
    "characteristics": {
      "prey": "Bamboo, Berries, Eggs",
      "name_of_young": "Cub",
      "group_behavior": "Solitary",
      "estimated_population_size": "less than 3,000",
      "biggest_threat": "Habitat loss",
      "most_distinctive_feature": "Rusty coloured thick fur and striped face",
      "other_name(s)": "Lesser Panda, Fire Fox",
      "gestation_period": "4 months",
      "habitat": "High-altitude mountain forest",
      "predators": "Snow Leopard, Marten, Human",
      "diet": "Omnivore",
      "average_litter_size": "3",
      "lifestyle": "Nocturnal",
      "common_name": "Red Panda",
      "number_of_species": "1",
      "location": "Himalayas",
      "slogan": "There are less than 3,000 left in the wild!",
      "group": "Mammal",
      "color": "BrownRedWhite",
      "skin_type": "Fur",
      "top_speed": "24 mph",
      "lifespan": "8 - 12 years",
      "weight": "3kg - 6.2kg (7lbs - 14lbs)",
      "length": "60cm - 120cm (24in - 47in)",
      "age_of_sexual_maturity": "18 months",
      "age_of_weaning": "5 months"
    }
  },
  {
	id:26,
    "name": "Otter",
    "taxonomy": {
      "kingdom": "Animalia",
      "phylum": "Chordata",
      "class": "Mammalia",
      "order": "Carnivora",
      "family": "Mustelidae",
      "genus": "Lutra",
      "scientific_name": "Lutra Canadensis"
    },
    "locations": [
      "Africa",
      "Asia",
      "Central-America",
      "Eurasia",
      "Europe",
      "North-America",
      "Oceania",
      "South-America"
    ],
    "characteristics": {
      "prey": "Fish, Crabs, Frogs",
      "habitat": "River banks, lakes and streams",
      "predators": "Birds, Fox, Wolves",
      "diet": "Carnivore",
      "average_litter_size": "3",
      "lifestyle": "Solitary",
      "favorite_food": "Fish",
      "type": "Mammal",
      "slogan": "There are 13 different species worldwide",
      "color": "BrownWhiteTan",
      "skin_type": "Fur",
      "top_speed": "7 mph",
      "lifespan": "15-25 years",
      "weight": "5-15kg (10-30lbs)"
    }
  },
   {
	id:27,
    "name": "Indian Palm Squirrel",
    "taxonomy": {
      "kingdom": "Animalia",
      "phylum": "Chordata",
      "class": "Mammalia",
      "order": "Rodentia",
      "family": "Sciuridae",
      "genus": "Funambulus",
      "scientific_name": "Funambulus Palmarum"
    },
    "locations": [
      "Asia",
      "Ocean"
    ],
    "characteristics": {
      "prey": "Eggs, Fruit, Insects",
      "habitat": "Thick forest and tropical jungles",
      "predators": "Human, Snakes, Wildcats",
      "diet": "Omnivore",
      "average_litter_size": "3",
      "lifestyle": "Solitary",
      "favorite_food": "Eggs",
      "type": "Mammal",
      "slogan": "Natively found in parts of India and Sri Lanka!",
      "color": "BrownYellowTan",
      "skin_type": "Fur",
      "top_speed": "10 mph",
      "lifespan": "2-4 years",
      "weight": "100-120g (3.5-4.2oz)"
    }
  },
{
	id:29,
    "name": "Brown Bear",
    "taxonomy": {
      "kingdom": "Animalia",
      "phylum": "Chordata",
      "class": "Mammalia",
      "order": "Carnivora",
      "family": "Ursidae",
      "genus": "Ursus",
      "scientific_name": "Ursus arctos"
    },
    "locations": [
      "Asia",
      "Eurasia",
      "Europe",
      "North-America"
    ],
    "characteristics": {
      "prey": "Fish, Fruit, Insects",
      "distinctive_feature": "Powerful forearms and hibernate in the winter",
      "habitat": "Forest and mountainous regions",
      "predators": "Human, Wolf, Cougar",
      "diet": "Omnivore",
      "average_litter_size": "3",
      "lifestyle": "Solitary",
      "favorite_food": "Fish",
      "type": "Mammal",
      "slogan": "A dominant predator in it's environment!",
      "color": "BrownBlackTan",
      "skin_type": "Fur",
      "top_speed": "35 mph",
      "lifespan": "20 - 30 years",
      "weight": "136kg - 390kg (300lbs - 860lbs)",
      "height": "1.5m - 2.8m (5ft - 9.2ft)"
    }
  },
  {
	id:31,
    "name": "Lion",
    "taxonomy": {
      "kingdom": "Animalia",
      "phylum": "Chordata",
      "class": "Mammalia",
      "order": "Carnivora",
      "family": "Felidae",
      "genus": "Panthera",
      "scientific_name": "Panthera leo"
    },
    "locations": [
      "Africa",
      "Asia"
    ],
    "characteristics": {
      "prey": "Antelope, Warthog, Zebra",
      "name_of_young": "Cub",
      "group_behavior": "Pride",
      "estimated_population_size": "23,000",
      "biggest_threat": "Habitat loss",
      "most_distinctive_feature": "Long and thick hairy mane of the male around the face",
      "other_name(s)": "African Lion",
      "gestation_period": "110 days",
      "habitat": "open woodland, scrub, grassland",
      "diet": "Carnivore",
      "average_litter_size": "3",
      "lifestyle": "Diurnal/Nocturnal",
      "common_name": "Lion",
      "number_of_species": "2",
      "location": "sub-Saharan Africa",
      "slogan": "Lives in small groups called prides!",
      "group": "Mammal",
      "color": "BrownGoldTawnyBlonde",
      "skin_type": "Fur",
      "top_speed": "35 mph",
      "lifespan": "8 - 15 years",
      "weight": "120kg - 249kg (264lbs - 550lbs)",
      "length": "1.4m - 2.5m (4.7ft - 8.2ft)",
      "age_of_sexual_maturity": "2 - 3 years",
      "age_of_weaning": "6 months"
    }
  },
{
	id:32,
    "name": "Howler Monkey",
    "taxonomy": {
      "kingdom": "Animalia",
      "phylum": "Chordata",
      "class": "Mammalia",
      "order": "Primates",
      "family": "Atelidae",
      "genus": "Alouatta",
      "scientific_name": "Alouatta"
    },
    "locations": [
      "Central-America",
      "South-America"
    ],
    "characteristics": {
      "prey": "Fruit, Nuts, Seeds",
      "habitat": "Rainforest and dense jungle",
      "predators": "Jaguar, Snakes, Birds",
      "diet": "Omnivore",
      "average_litter_size": "1",
      "lifestyle": "Troop",
      "favorite_food": "Fruit",
      "type": "Mammal",
      "slogan": "Spends 80% of it's time resting!",
      "color": "BrownBlackTan",
      "skin_type": "Hair",
      "top_speed": "18 mph",
      "lifespan": "15-20 years",
      "weight": "3-9kg (6.6-20lbs)"
    }
  },
  {
	id:33,
    "name": "Leopard",
    "taxonomy": {
      "kingdom": "Animalia",
      "phylum": "Chordata",
      "class": "Mammalia",
      "order": "Carnivora",
      "family": "Felidae",
      "genus": "Panthera",
      "scientific_name": "Panthera pardus"
    },
    "locations": [
      "Africa",
      "Asia"
    ],
    "characteristics": {
      "prey": "Deer, Warthog, Rodents",
      "name_of_young": "Cub",
      "group_behavior": "Solitary",
      "estimated_population_size": "Stable",
      "biggest_threat": "Trophy hunting and habitat loss",
      "most_distinctive_feature": "Dense patterned fur and long, sharp teeth",
      "other_name(s)": "Panther",
      "gestation_period": "90 - 105 days",
      "habitat": "Rainforest, grassland and mountainous regions",
      "diet": "Carnivore",
      "average_litter_size": "3",
      "lifestyle": "Nocturnal",
      "common_name": "Leopard",
      "number_of_species": "7",
      "location": "Sub-Saharan Africa and southern Asia",
      "slogan": "Spends much of the time high in the trees!",
      "group": "Mammal",
      "color": "YellowBlackDark BrownGolden",
      "skin_type": "Fur",
      "top_speed": "6 mph",
      "lifespan": "10 - 15 years",
      "weight": "30kg - 90kg (66lbs - 198lbs)",
      "length": "100cm - 190cm (40in - 75in)",
      "age_of_sexual_maturity": "2 - 2.5 years",
      "age_of_weaning": "3 months"
    }
  },
  {
	id:34,
    "name": "Pine Marten",
    "taxonomy": {
      "kingdom": "Animalia",
      "phylum": "Chordata",
      "class": "Mammalia",
      "order": "Carnivora",
      "family": "Mustelidae",
      "genus": "Martes"
    },
    "locations": [
      "Asia",
      "Eurasia",
      "Europe",
      "North-America"
    ],
    "characteristics": {
      "prey": "Birds, insects, bird eggs, fruit, voles",
      "name_of_young": "Kit",
      "group_behavior": "Solitary",
      "estimated_population_size": "Unknown",
      "biggest_threat": "Trapping",
      "most_distinctive_feature": "Splash of cream fur on its neck",
      "other_name(s)": "European marten",
      "gestation_period": "28 days (After delayed implantation)",
      "litter_size": "2-5",
      "habitat": "Pine forests, scrubs, rocky hills",
      "predators": "Red foxes, eagles, owls, humans",
      "diet": "Omnivore",
      "type": "Mammal",
      "common_name": "Pine marten",
      "number_of_species": "8",
      "location": "Eurasia",
      "color": "BrownCream",
      "skin_type": "Fur",
      "lifespan": "8-10 years",
      "weight": "1lbs - 3lbs",
      "length": "1.5ft - 2.2 ft",
      "age_of_sexual_maturity": "2-3 years old",
      "age_of_weaning": "40 days"
    }
  },
{
	id:35,
    "name": "Mandrill",
    "taxonomy": {
      "kingdom": "Animalia",
      "phylum": "Chordata",
      "class": "Mammalia",
      "order": "Primates",
      "family": "Cercopithecidae",
      "genus": "Mandrillus",
      "scientific_name": "Mandrillus Sphinx"
    },
    "locations": [
      "Africa"
    ],
    "characteristics": {
      "prey": "Fruit, Roots, Insects",
      "habitat": "Dense and coastal tropical forests",
      "predators": "Leopard, Eagles, Snakes",
      "diet": "Omnivore",
      "average_litter_size": "1",
      "lifestyle": "Troop",
      "favorite_food": "Fruit",
      "type": "Mammal",
      "slogan": "Distinctively coloured noses and rumps!",
      "color": "BrownGreyBlackWhiteTan",
      "skin_type": "Fur",
      "top_speed": "25 mph",
      "lifespan": "20-28 years",
      "weight": "11.5-30kg (25-60lbs)"
    }
  },
{
	id:36,
    "name": "Iguana",
    "taxonomy": {
      "kingdom": "Animalia",
      "phylum": "Chordata",
      "class": "Reptilia",
      "order": "Squamata",
      "family": "Iguanidae"
    },
    "locations": [
      "Central-America",
      "South-America"
    ],
    "characteristics": {
      "prey": "Insects, Fruit, Leaves",
      "habitat": "Lowland tropical rainforest near water",
      "predators": "Hawk, Eagle, Snakes",
      "diet": "Omnivore",
      "average_litter_size": "3",
      "lifestyle": "Solitary",
      "favorite_food": "Insects",
      "type": "Reptile",
      "slogan": "Uses visual signals to communicate!",
      "color": "BrownYellowGreen",
      "skin_type": "Scales",
      "top_speed": "21 mph",
      "lifespan": "15-20 years",
      "weight": "4-8kg (8.8-17.6lbs)"
    }
  },
 {
	id:37,
    "name": "Chimpanzee",
    "taxonomy": {
      "kingdom": "Animalia",
      "phylum": "Chordata",
      "class": "Mammalia",
      "order": "Primates",
      "family": "Hominidae",
      "genus": "Pan",
      "scientific_name": "Pan troglodytes"
    },
    "locations": [
      "Africa"
    ],
    "characteristics": {
      "prey": "Fruits, Seeds, Insects",
      "name_of_young": "Infant",
      "group_behavior": "Group",
      "estimated_population_size": "100,000 - 200,000",
      "biggest_threat": "Habitat loss",
      "most_distinctive_feature": "Dexterous hands and feet and complex communication",
      "other_name(s)": "Common Chimpanzee",
      "gestation_period": "8 months",
      "habitat": "Tropical forest and woody savanna",
      "predators": "Leopards, Snakes, Humans",
      "diet": "Omnivore",
      "average_litter_size": "1",
      "lifestyle": "Diurnal",
      "common_name": "Chimpanzee",
      "number_of_species": "2",
      "location": "Western and Central Africa",
      "slogan": "Has 32 teeth including fang-like canines!",
      "group": "Mammal",
      "color": "BrownBlack",
      "skin_type": "Hair",
      "top_speed": "25 mph",
      "lifespan": "50 - 60 years",
      "weight": "26kg - 70kg (57lbs - 154lbs)",
      "height": "1m - 1.7m (3.25ft - 5.5ft)",
      "age_of_sexual_maturity": "13 - 16 years",
      "age_of_weaning": "5 - 6 years"
    }
  },
  {
	id:40,
    "name": "Asian Elephant",
    "taxonomy": {
      "kingdom": "Animalia",
      "phylum": "Chordata",
      "class": "Mammalia",
      "order": "Proboscidea",
      "family": "Elephantidae",
      "genus": "Elephas",
      "scientific_name": "Elephas maximus"
    },
    "locations": [
      "Asia"
    ],
    "characteristics": {
      "prey": "Grass, Fruit, Roots",
      "distinctive_feature": "Long trunk and large feet",
      "habitat": "Rainforest and tropical woodland",
      "predators": "Human, Tiger",
      "diet": "Herbivore",
      "average_litter_size": "1",
      "lifestyle": "Herd",
      "favorite_food": "Grass",
      "type": "Mammal",
      "slogan": "Domesticated for hundreds of years!",
      "color": "BrownGreyBlack",
      "skin_type": "Leather",
      "top_speed": "27 mph",
      "lifespan": "55 - 70 years",
      "weight": "3,000kg - 5,000kg (6,500lbs - 11,000lbs)",
      "height": "2m - 3m (7ft - 10ft)"
    }
  },


];

app.get("/api", (req, res) => {
  res.json(Pictures);
});

app.get("/api/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const picture = Pictures.find((picture) => picture.id === id);

  if (picture) {
    res.json(picture);
  } else {
    res.status(404).json({ message: "Image not found" });
  }
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
