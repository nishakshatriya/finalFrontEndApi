module.exports = {

    quantityJson() {
       var measure= [{
            "INCH":
            {
                "FEET": 12,
                "INCH": 1,
                "YARD": 36,
                "CENTIMETER": 0.393701
            },
            "FEET":
            {
                "FEET": 1,
                "INCH": 0.083333,
                "YARD": 3,
                "CENTIMETER": 0.0328084
            },
            "YARD":
            {
                "FEET": 0.3333,
                "INCH": 0.0277778,
                "YARD": 1,
                "CENTIMETER": 0.0109361
            },
            "CENTIMETER": {
                "FEET": 30.48,
                "INCH": 2.5,
                "YARD": 91.44,
                "CENTIMETER": 1
            },
            "GALLON": {
                "GALLON": 1,
                "LITRE": 0.264172,
                "MILLILITER": 0.000264172
            },
            "LITRE": {
                "GALLON": 3.78,
                "LITRE": 1,
                "MILLILITER": 0.001
            },
            "MILLILITER": {
                "GALLON": 3785,
                "LITRE": 1000,
                "MILLILITER": 1
            },
            "KILOGRAM":
            {
                "GRAM": 0.001,
                "KILOGRAM": 1,
                "TONNE": 1000
            },
            "GRAM": {
                "GRAM": 1,
                "KILOGRAM": 1000,
                "TONNE": 1000000
            },
            "FAHRENHEIT": {
                "FAHRENHEIT": 1,
                "CELSIUS": 0.4716
            },
            "CELSIUS": {
                "FAHRENHEIT": 2.12,
                "CELSIUS": 1
            }
        }]
        return measure;
    }
}