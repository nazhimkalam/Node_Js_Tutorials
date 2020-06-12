// User Input Validation Part II
// Validating arrays with objects and strings

// In this example we will only do concept but not the web page it self, you can make of your own later onwards.

const joi = require("joi");

const arrayString = ["apple", "banana", "orange"];
const arrayObject = [
  { example: "example01" },
  { example: "example02" },
  { example: "example03" },
];

const userInput = {
  personalInfo: {
    streetAddress: "32a Sri Sumangala Road Rathmalana",
    city: "Colombo",
    province: "Western",
  },
  preferences: arrayString,
  preferencesObject: arrayObject,
};

// we have to create schemas for validations

// lets create schema for each key in the userInput info then add all of them into one schema

// personalInfoSchema
const personalInfoSchema = joi.object().keys({
  streetAddress: joi.string().trim().required(),
  city: joi.string().trim().required(),
  province: joi.string().trim().required(),
});

// preferencesSchema
const preferencesSchema = joi.array().items(joi.string().required());

// preferencesSchemaObject
const preferencesSchemaObject = joi.array().items(
  joi.object().keys({
    example: joi.string().required(),
  })
);

// Combining all the schema
const schema = joi.object().keys({
  personalInfo: personalInfoSchema,
  preferences: preferencesSchema,
  preferencesObject: preferencesSchemaObject,
});

// Displaying the output
joi.validate(userInput, schema, (err, results) => {
  if (err) {
    console.log(err);
  } else {
    console.log(results);
  }
});
