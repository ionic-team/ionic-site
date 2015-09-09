System.register("ionic/components/item/item-options", [], function (_export) {
    "use strict";

    var ItemPrimaryOptions, ItemSecondaryOptions;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [],
        execute: function () {
            ItemPrimaryOptions = function ItemPrimaryOptions() {
                _classCallCheck(this, ItemPrimaryOptions);
            };

            _export("ItemPrimaryOptions", ItemPrimaryOptions);

            Object.defineProperty(ItemPrimaryOptions, "annotations", { get: function get() {
                    return [new Decorator({ selector: "ion-primary-options" })];
                } });

            ItemSecondaryOptions = function ItemSecondaryOptions() {
                _classCallCheck(this, ItemSecondaryOptions);
            };

            _export("ItemSecondaryOptions", ItemSecondaryOptions);

            Object.defineProperty(ItemSecondaryOptions, "annotations", { get: function get() {
                    return [new Decorator({ selector: "ion-secondary-options" })];
                } });
        }
    };
});