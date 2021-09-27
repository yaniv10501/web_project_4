/** @module Section */

/**
 * @class
 * @classdesc Creates a new sction in the index.html file.
 * @method renderSection - A public method to render the section
 * @method addItems - A public method to add items to the section
 * @constructor
 * @param {object}
 * @property {array} items - An array of items to initialize the section
 * @property {function} renderer - A function responsible for creating and rendering the section
 * @param {string} sectionSelector - A CSS selector for the section
 */

export default class Section {

  constructor({ items, renderer }, sectionSelector) {
    this._items = items;
    this._renderer = renderer;
    this._section = document.querySelector(sectionSelector);
  }

  /**
   * @method addItems
   * @description A public method to add items to the section
   * @public
   */

  addItems(item) {

    this._section.append(item);

  }

  /**
   * @method renderSection
   * @description A public method to render the section
   * @public
   */

  renderSection() {

    this._items.forEach(this._renderer);

  }

}
