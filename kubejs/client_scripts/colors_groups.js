const colors = [
    "red", "green", "blue", "yellow", "purple", "cyan", "white",
    "orange", "magenta", "light_blue", "lime", "pink", "gray",
    "light_gray", "black", "brown"
];

const woodRoots = [
    "plank", "log", "wood", "stripped_log", "stripped_wood"
];

const bambooRoots = [
    "bamboo", "stripped_bamboo"
];

const stoneRoots = [
    "stone", "braid", "polished", "tile", "prismarine", "dark_prismarine",
    "cracked_stone", "brick", "cobblestone", "marble", "chaotic", "mosaic",
    "triple", "encased", "road", "asteroid"
];

const typeGroups = {
    "dirt": "Dirt",
    "grass_block": "Grass Blocks",
    "crafting_table": "Crafting Tables",
    "tall_grass": "Tall Grass",
    "short_grass": "Short Grass",
    "poppy": "Poppies",
    "dandelion": "Dandelions",
    "leaves": "Leaves",
    "sapling": "Saplings",
    "apple": "Apples",
    "spray_can": "Spray Cans"
};

function formatName(str) {
    return str.split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

RecipeViewerEvents.groupEntries('item', event => {

    // 1. Group by Colors
    colors.forEach(color => {

        let woodFilters = woodRoots.map(root => {
            return { itemNamespace: 'colors', itemPathStartsWith: `${color}_${root}` };
        });
        event.group(woodFilters, `contained:colors_${color}_wood`, `Colors: ${formatName(color)} Wood`);

        let bambooFilters = bambooRoots.map(root => {
            return { itemNamespace: 'colors', itemPathStartsWith: `${color}_${root}` };
        });
        event.group(bambooFilters, `contained:colors_${color}_bamboo`, `Colors: ${formatName(color)} Bamboo`);

        let stoneFilters = stoneRoots.map(root => {
            return { itemNamespace: 'colors', itemPathStartsWith: `${color}_${root}` };
        });
        event.group(stoneFilters, `contained:colors_${color}_stone`, `Colors: ${formatName(color)} Stone`);

    });

    // 2. Group by Types
    Object.keys(typeGroups).forEach(typeSuffix => {
        event.group(
            { itemNamespace: 'colors', itemPathEndsWith: typeSuffix },

            `contained:colors_type_${typeSuffix}`,

            `Colors: ${typeGroups[typeSuffix]}`
        );
    });

});
