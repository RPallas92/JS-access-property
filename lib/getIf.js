/**
 * @param obj - The object to access the property
 * @param propertyPathStr - the path of the property. E.g 'client.address.streetName'
 * @param defaultValue - Value to return If the property does not exist
 *
 * @returns The property of [obj] specified by [propertyPathStr]. If it does not exist,
 * it will return [defaultValue]
 */
function getIf(obj, propertyPathStr, defaultValue) {
    var result = null;
    var propertyPath = propertyPathStr.split('.');

    result = propertyPath.reduce(function(currentObj, property) {
        if (currentObj === null) {
            return null;
        }
        var tmpObj = getChildObj(currentObj, property);
        return (typeof tmpObj !== 'undefined') ?
            tmpObj :
            null;
    }, obj);

    if (typeof result === 'undefined' || result === null) {
        if (typeof defaultValue != 'undefined') {
            result = defaultValue;
        } else {
            result = null;
        }
    }
    return result;
}

function getChildObj(parentObject, property) {
    var obj = null;
    var subTokens = property.split('[');
    if (subTokens.length > 1) {
        var arrayName = subTokens[0];
        var arrayPos = parseInt(subTokens[1].replace(']', ''));
        obj = parentObject[arrayName][arrayPos];

    } else {
        obj = parentObject[property];
    }
    return obj;
}

module.exports = getIf;