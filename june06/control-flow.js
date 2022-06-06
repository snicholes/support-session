// if the cereal i want is there, i'll buy it, otherwise i'm just moving on
if (condition) {
    // if true, do this
}

// if the cereal i want is there, i'll buy it, otherwise, i'll buy oatmeal instead
// if-else: two paths we want to go down
if (condition) {
    // if true, we'll do this
} else {
    // otherwise, we'll do this
}

// if the cereal i want is there, i'll buy it, otherwise, if the oatmeal i like is there,
// i'll buy that, and if neither one is there, i'll move on
if (condition) {
    // if true, we'll do this
} else if (otherCondition) {
    // otherwise, and something else is true, we'll do this
}

// if the cereal i want is there, buy it
// otherwise, if the oatmeal i like is there, i'll buy that instead,
// if neither one is there, i'll buy eggs and bacon
if (condition) {

} else if (otherCondition) {

} else {

}

// if the cereal is there, i'll buy it,
// otherwise if the oatmeal is there, i'll buy that, AND
// if i'm buying the oatmeal, and there is also bacon, i'll buy that too
if (condition) { // if cereal

} else if (otherCondition) { // if no cereal, but oatmeal
    if (anotherCondition) { // if oatmeal and also bacon

    }
    //ifThereIsBacon(baconCondition); // if oatmeal and also bacon (using a function instead)
}

// function ifThereIsBacon(condition) {
//     if (condition) {
//         buyBacon();
//     }
// }