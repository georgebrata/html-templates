// window.vindicateClass =
window.vindicate = {};

function vindicateForm(options) {
  this.fields = {};
  this.validationSoftFail = false;
  this.validationHardFail = false;
  this.options = $.extend(true, {
      // These are the defaults.
      soft: false,
      activeForm: false,
      showSuccess: true,
      submitTo: "",
      requiredMessage: "This is a required field.",
      minLengthMessage: "You haven't reach the length",
      parent: "form-group",
      helper: "form-control-feedback",
      validationStates: {
        valid: {
          parent: "has-success",
          input: "form-control-success"
        },
        warning: {
          parent: "has-warning",
          input: "form-control-warning"
        },
        invalid: {
          parent:"has-danger",
          input:"form-control-danger"
        }
      },
      formats: {
        alpha: {
          regex: /^[a-zA-Z]+/,
          message: "This field only accepts alphabetic characters. (a-z)"
        },
        alphanumeric: {
          regex: /^[a-zA-Z0-9]+/,
          message: "This field does not accept any special characters. (a-z, 0-9)"
        },
        creditcard: {
          regex: /^d{16}/,
          message: "Please enter a valid credit card number."
        },
        date: {
          regex: /([0-9]{4}.[0-9]{1,2}.[0-9]{1,2})|([0-9]{1,2}.[0-9]{1,2}.[0-9]{4})/,
          message: "Please enter a valid date. (YYYY-MM-DD)",
        },
        decimal: {
          regex: /^\d+$/,
          message: "Please enter a decimal value (xxx.xx)"
        },
        email: {
          regex: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
          message: "Please enter a valid email address. (email@domain.com)"
        },
        numeric: {
          regex: /^\d+$/,
          message: "This field only accepts numbers. (0-9)"
        },
        phone: {
          regex: /^([0-9]{3}[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4})/,
          message: "Please enter a 10 digit phone number. (xxx-xxx-xxxx)"
        },
        time: {
          regex: /[0-9]{1,2}(\:[0-9]{0,2})?/,
          message: "Please enter a valid time (xx:xx)"
        },
        url: {
          regex: /^\d+$/,
          message: "Please enter a valid url. (www.website.com/example)"
        }
      }
  }, options);

  this.validate = function() {
    for (index in this.fields) {
      var field = this.fields[index].validate(this.options);
    }
  }

  this.findById = function(id) {
    for (field in this.fields) {
      if (this.fields[field].id == id) {
        return this.fields[field]
      }
    }
    return false;
  }
}

function vindicateField($element, formId, options) {
  this.element = $element;
  this.formId = formId;
  this.formGroup = this.element.closest(".form-group");
  this.formFeedback = this.formGroup.find(".form-control-feedback");
  this.id = this.element.attr("id");
  this.data = this.element.data("vindicate").split("|");
  this.validationSoftFail = false;
  this.validationHardFail = false;
  this.fieldType = "*"
  this.required = false;
  this.requiredField = false;
  this.requiredFields = false;
  this.format = false;
  this.options = {
    soft: options.soft,
    activeForm: options.activeForm,
    showSuccess: options.showSuccess,
    requiredMessage: options.requiredMessage,
    minLengthMessage: options.minLengthMessage,
    parent: options.parent,
    helper: options.helper,
    validationStates: options.validationStates,
    formatRegex: false,
    formatMessage: false
  }
  this.group = false;
  this.minLength = false;
  this.matchValue = false;
  this.matchField = false;

  // Determine type of input field
  if (this.element.is(":text") || this.element.is("textarea") || this.element.is("[type=email]") || this.element.is("[type=date]")) {
    this.fieldType = "text"
  }
  else if (this.element.is("select")) {
    this.fieldType = "dropdown"
  }
  else if (this.element.is(":checkbox")) {
    this.fieldType = "checkbox"
  }
  else if (this.element.is(":radio")) {
    this.fieldType = "radio"
  }
  else {
    console.warn("Vindicate - Unknown element", this.element);
  }
  // Object Methods
  this.init = function(options) {
    // Process Options
    for (option in this.data) {
      var input_option = this.data[option];
      if (input_option == "required") {
        this.required = true;
      }
      else if (input_option.substring(0,9) == "required:") {
        this.requiredField = input_option.substring(9,input_option.length)
      }
      else if (input_option.substring(0,14) == "requiredField:") {
        this.requiredField = input_option.substring(14,input_option.length)
        requiredFieldsPre = this.requiredField.split(",");
        requiredFields = []
        for (index in requiredFieldsPre) {
          requiredString =  requiredFieldsPre[index];
          // console.log(requiredString);
          if (requiredString.indexOf("[") > -1) {
            var element_id = requiredString.slice(0,requiredString.indexOf("["));
            requiredFields.push({
              "id": window.vindicate[this.formId].findById(element_id).fieldId,
              "value": requiredString.slice(requiredString.indexOf("[")+1,requiredString.indexOf("]"))
            });
          }
          else {

            //console.log(requiredString, $("#" + requiredString).data("vindicate-id"));
            requiredFields.push({"id": window.vindicate[this.formId].findById(requiredString).fieldId, "value": false});
          }
        }
        this.requiredFields = requiredFields;
      }
      else if (input_option.substring(0,7) == "format:") {
        this.format = input_option.substring(7,input_option.length);
        this.options["formatRegex"] = options.formats[this.format].regex;
        this.options["formatMessage"] = options.formats[this.format].message;
      }
      else if (input_option.substring(0,6) == "group:") {
        this.group = input_option.substring(6,input_option.length);
        this.element.data("vindicate-group", this.group);
      }
      else if (input_option.substring(0,4) == "min:") {
        this.minLength = input_option.substring(4,input_option.length);
      }
      else if (input_option.substring(0,7) == "equals:") {
        this.matchValue = input_option.substring(7,input_option.length);
      }
      else if (input_option.substring(0,6) == "match:") {
        this.matchField = input_option.substring(6,input_option.length);
      }
    }

    // EXTEND Options on field level so they don't have to be passed in
    // this.options = {}

    return true;
  }

  this.init(options);

  this.validatePrep = function() {
    this.formFeedback.text("");
    if (this.validationSoftFail) {
      this.element.removeClass(this.options.validationStates.warning.input);
      this.formGroup.removeClass(this.options.validationStates.warning.parent);
      this.validationSoftFail = false;
    }
    if (this.validationHardFail) {
      this.element.removeClass(this.options.validationStates.invalid.input);
      this.formGroup.removeClass(this.options.validationStates.invalid.parent);
      this.validationHardFail = false;
    }
  }

  this.validateComplete = function(options) {
    if (this.validationHardFail) {
      this.element.addClass(this.options.validationStates.invalid.input);
      this.formGroup.addClass(this.options.validationStates.invalid.parent);
      this.formFeedback.text(this.validationMessage);
    }
    else {
      if (this.validationSoftFail) {
        this.element.addClass(this.options.validationStates.warning.input);
        this.formGroup.addClass(this.options.validationStates.warning.parent);
        this.formFeedback.text(this.validationMessage);
      }
      else {
        if (options.showSuccess) {
          this.element.addClass(this.options.validationStates.valid.input);
          this.formGroup.addClass(this.options.validationStates.valid.parent);
        }
      }
    }
  }

  this.validateRequiredFields = function(options) {
    if (this.requiredField) {
      // requiredFields values
      for (index in this.requiredFields) {
        var field_id = this.requiredFields[index].id; // id does not contain loop index prefix...?
        // console.log("field_id", field_id);
        var required = window.vindicate[this.formId].fields[field_id].validateRequired();
        if (required && this.requiredFields[index].value) {
          return window.vindicate[this.formId].fields[field_id].validateMatch();
        }
        if (required) {
          return true // If required==true for any case, end loop and return true
        }
      }
    }
    return false; // Not Required
  }

  this.validateRequired = function(options) {
    if (this.fieldType == "text"){
      if (this.element.val().length == 0) {
        this.validationSoftFail = true;
        this.validationMessage = options.requiredMessage;
        return false;
      }
    }
    if (this.fieldType == "checkbox") {
      if (!this.element.is(":checked")) {
        this.validationSoftFail = true;
        this.validationMessage = options.requiredMessage;
        return false;
      }
    }
    if (this.fieldType == "radio") {
      if (this.group) {
        if ($('[data-vindicate*="group:' + this.group + '"]:checked').length == 0) {
          this.validationSoftFail = true;
          this.validationMessage = options.requiredMessage;
          return false;
        }
      }
      else {
        if (!this.element.is(":checked")) {
          this.validationSoftFail = true;
          this.validationMessage = options.requiredMessage;
          return false;
        }
      }
    }
    return true;
  }

  this.validateFormat = function(options) {
    strict_validation = ["alpha", "alphanumeric", "creditcard", "date", "decimal","email","numeric", "phone", "time", "url"]
    for (index in strict_validation) {
      format = strict_validation[index];
      if (this.format == format) {
        if (!this.element.val().match(options.formats[format].regex)) {
          this.validationHardFail = true;
          this.validationMessage = options.formats[format].message;
        }
      }
    }
    if (this.format == "custom") { // THIS IS NOT YET IMPLEMENTED
      if (!this.element.val().match(options.formats.date.regex)) {
        this.validationHardFail = true;
        this.validationMessage = options.formats.date.message;
      }
    }
  }

  this.validateMinLength = function(options) {
    if (this.element.val().length < this.minLength) {
      this.validationSoftFail = true;
      this.validationMessage = options.minLengthMessage;
    }
  }

  this.validateEquals = function(options) {
    if (this.element.val() != this.matchValue) {
      this.validationSoftFail = true;
      this.validationMessage = "An incorrect value has been entered.";
    }
  }

  this.validate = function(options){
    this.validatePrep(options);
    if (this.required == false && this.requiredField){
      this.required = this.validateRequiredFields(options);
    }
    if (this.required){
      if (!this.validateRequired(options)) {
        return this.validateComplete(options); // If required but no value, skip validations
      }
    }
    else {
      // Check for empty and exit?
    }
    if (this.matchValue){
      this.validateEquals(options);
    }
    if (this.format){
      this.validateFormat(options);
    }
    if (this.minLength){
      this.validateMinLength(options);
    }
    return this.validateComplete(options);
  }
}


(function ( $ ) {
    $.fn.vindicate = function() {
      action = "init";
      options = {};
      if (arguments.length == 1) {
        if (typeof(arguments[0]) == "string") {
          action =  arguments[0];
        }
        else {
          options =  arguments[0];
        }
      }
      else if (arguments.length == 2) {
        action = arguments[0];
        options = arguments[1];
      }

      var $form_this = $(this);
      var form_id = $form_this.attr("id");

      if (action == "init") {
        var vin = new vindicateForm(options);
        var fields = $form_this.find(":input").map(function() {
          var $input_this = $(this);
            if ($input_this.attr('data-vindicate')) {
              var field = new vindicateField($input_this, form_id, vin.options);
              return field;
            }
          }).toArray();
        // vin.fields = {} // already declared
        for (index in fields) {
          field = fields[index];
          field.fieldId = index + "-" + field.id;
          if (field.id) {
            $("#" + field.id).data("vindicate-id", field.fieldId);
            // console.log("vindicate-id:", $("#" + field.id).data("vindicate-id"));
          }
          vin.fields[field.fieldId] = field; // index prefix to maintain form ordering
        }
        window.vindicate[form_id] = vin;
        //window.vindicate.push(vin);
        // form_index = (window.vindicate.length-1); // Minus 1 because array is 0 based
        //$form_this.data("vindicate-index", form_index);
        // }
        console.log("Vindicate - Form Initialized", vin);
      }
      if (action == "validate") {
        var vin = window.vindicate[form_id];
        var validation = vin.validate();
      }
    };

}( jQuery ));
