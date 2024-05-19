const { formatArrayStrings, } = require('./arrayManipulation.js');
function createUserProfiles() {
    let personNames = formatArrayStrings();
    let personProfile = [];
    

    personNames.forEach((name, i) => {
        let originalName = name;
        let modifiedName = name;
        let id = i + 1;

        personProfile.push({
            'originalName': originalName, 'modifiedName': modifiedName, 'id': id
        });
    });

    return personProfile;
}
console.log('The person profiles are ' + JSON.stringify(createUserProfiles()));
