const NAMESPACE = 'cabletiers';

const coloredTiers = ['elite', 'mega', 'ultra'];

const taggedTiers = ['creative'];

const deviceTypes = {
  autocrafters: ['autocrafter', 'Autocrafters'],
  disk_interfaces: ['disk_interface', 'Disk Interfaces'],
  constructors: ['constructor', 'Constructors'],
  exporters: ['exporter', 'Exporters'],
  destructors: ['destructor', 'Destructors'],
  importers: ['importer', 'Importers']
};

function formatName(str) {
  return str.split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

RecipeViewerEvents.groupEntries('item', event => {

  taggedTiers.forEach(tier => {
    Object.keys(deviceTypes).forEach(typeKey => {
      event.group(
        `#${NAMESPACE}:${tier}_${typeKey}`,
        `contained:cable_tiers_${tier}_${typeKey}`,
        `Cable Tiers: ${formatName(tier)} ${deviceTypes[typeKey][1]}`
      );
    });
  });

  coloredTiers.forEach(tier => {
    Object.keys(deviceTypes).forEach(typeKey => {
      const singular = deviceTypes[typeKey][0];
      event.group(
        { itemNamespace: NAMESPACE, itemPathEndsWith: `_${tier}_${singular}` },
        `contained:cable_tiers_${tier}_${typeKey}`,
        `Cable Tiers: ${formatName(tier)} ${deviceTypes[typeKey][1]}`
      );
    });
  });

});
