const fs = require('fs');
const crypto = require('crypto');

const changes = {
    devDependencies: {},
    scripts: {},
    ntl: {}
};

const pluginPackageJSON = JSON.parse(fs.readFileSync('./package.json'));

function checkAndUpdate(json, field) {
    if (pluginPackageJSON[field] === undefined) {
        pluginPackageJSON[field] = {};
    }

    for (const [key, value] of Object.entries(json)) {
        if (typeof pluginPackageJSON[field][key] === 'undefined') {
            pluginPackageJSON[field][key] = value;
        } else if (JSON.stringify(value) !== JSON.stringify(pluginPackageJSON[field][key])) {
            if (typeof value === 'object') {
                pluginPackageJSON[field] = {};
                pluginPackageJSON[field][key] = value;
            } else {
                pluginPackageJSON[field][key] = value;
            }
        }
    }
}

function deleteProperty(obj, match) {
    delete obj[match];
    for (const v of Object.values(obj)) {
        if (v instanceof Object) {
            deleteProperty(v, match);
        }
    }
}

function compareFile(file1, file2) {
    const file1Content = fs.readFileSync(file1);
    const file2Content = fs.readFileSync(file2);

    const hash1 = crypto.createHash('md5').update(file1Content).digest('hex');
    const hash2 = crypto.createHash('md5').update(file2Content).digest('hex');

    return hash1 === hash2;
}

fs.readdirSync('./tools/common').forEach((file) => {
    if (!fs.existsSync(`./${file}`)) {
        console.log('Copying common file over.');
        fs.copyFileSync(`./tools/common/${file}`, `./${file}`);
    } else if (!compareFile(`./${file}`, `./tools/common/${file}`)) {
        console.log(`File: ${file} is different from common version.`);
        console.log('Copying common file over.');
        fs.copyFileSync(`./tools/common/${file}`, `./${file}`);
    }
});

const pluginConfig = fs.readFileSync('config.json');
const pluginConfigJson = JSON.parse(pluginConfig);

const pluginAngular = pluginConfigJson['angular'];
const pluginDemos = pluginConfigJson['demos'];

const commonPackageJSON = JSON.parse(fs.readFileSync('./tools/package.json'));
checkAndUpdate(commonPackageJSON['scripts'], 'scripts');
checkAndUpdate(commonPackageJSON['ntl'], 'ntl');
checkAndUpdate(commonPackageJSON['dependenciesMeta'], 'dependenciesMeta');

if (!pluginAngular) {
    deleteProperty(pluginPackageJSON, 'build.angular');
    pluginPackageJSON['scripts']['build.all'] = 'npm run build';
}

if (!pluginDemos.includes('ng')) {
    deleteProperty(pluginPackageJSON, 'demo.ng.android');
    deleteProperty(pluginPackageJSON, 'demo.ng.ios');
    deleteProperty(pluginPackageJSON, 'demo.ng.clean');
}

if (!pluginDemos.includes('react')) {
    deleteProperty(pluginPackageJSON, 'demo.react.android');
    deleteProperty(pluginPackageJSON, 'demo.react.ios');
    deleteProperty(pluginPackageJSON, 'demo.react.clean');
}

if (!pluginDemos.includes('svelte')) {
    deleteProperty(pluginPackageJSON, 'demo.svelte.android');
    deleteProperty(pluginPackageJSON, 'demo.svelte.ios');
    deleteProperty(pluginPackageJSON, 'demo.svelte.clean');
}

if (!pluginDemos.includes('vue')) {
    deleteProperty(pluginPackageJSON, 'demo.vue.android');
    deleteProperty(pluginPackageJSON, 'demo.vue.ios');
    deleteProperty(pluginPackageJSON, 'demo.vue.clean');
}

console.log('Common files and package.json have been synced.');
fs.writeFileSync('./package.json', JSON.stringify(pluginPackageJSON, 0, 4) + '\n');
