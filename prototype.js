

const createFormFieldPrototype = (defaultConfig) => {
  const baseField = {
    type: defaultConfig.type,
    label: defaultConfig.label,
    placeholder: defaultConfig.placeholder || "",
    required: defaultConfig.required || false,
    validation: Object.freeze({ ...defaultConfig.validation }), // Deep configuration
    options: defaultConfig.options ? Object.freeze([...defaultConfig.options]) : null,
    clone(overrides = {}) {
      const instance = Object.create(this);
      return Object.assign(instance, {
        id: `field_\({Date.now()}_\){Math.floor(Math.random() * 1000)}`, // Fresh unique ID
        label: `${this.label} (Copy)`,
        ...overrides
      });
    }
  };

  return baseField;
};const textInputPrototype = createFormFieldPrototype({
  type: "text",
  label: "Short Answer",
  placeholder: "Enter text...",
  required: true,
  validation: { minLength: 3, maxLength: 50 }
});

const dropdownPrototype = createFormFieldPrototype({
  type: "select",
  label: "Choose Country",
  required: false,
  options: ["USA", "Canada", "UK", "Australia"],
  validation: { allowMultiple: false }
});

const formSchema = [];
const countryField1 = dropdownPrototype.clone({ label: "Primary Residence" });
formSchema.push(countryField1);
const countryField2 = countryField1.clone({ label: "Secondary Residence" });
formSchema.push(countryField2);
console.log(formSchema);
console.log(countryField1.options === countryField2.options); 