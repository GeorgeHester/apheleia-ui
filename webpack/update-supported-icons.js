const updateSupportedIcons = () => {
    
    let fs = require('fs');

    let files = fs.readdirSync('./src-files/icons');

    let json = {
        "names": [],
        "svg": {}
    };

    for (let i = 0; i < files.length; i++) {

        let iconData = fs.readFileSync(`./src-files/icons/${files[i]}`, 'utf8');
        let iconName = files[i].split('.')[0];

        json.names.push(iconName);
        json.svg[iconName] = iconData;
    };

    fs.writeFileSync('./src/components/icon/supported-icons.json', JSON.stringify(json, null, 4));
};

module.exports = {
    updateSupportedIcons: updateSupportedIcons
};