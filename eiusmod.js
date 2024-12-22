function createBundle(data) {
    // Assuming `data` is an object or some input to process

    let bundle = {};  // Initialize an empty bundle object

    // Process the data and populate the bundle
    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            // Example processing: just copying data properties to the bundle
            bundle[key] = data[key];
        }
    }

    // You can add more logic here to further manipulate the bundle

    return bundle;  // Return the final bundle
}

// Example usage:
const inputData = {
    name: 'John Doe',
    age: 30,
    occupation: 'Engineer'
};

const resultBundle = createBundle(inputData);
console.log(resultBundle);
