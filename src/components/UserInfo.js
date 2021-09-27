/** @module UserInfo */

/**
 * @class
 * @classdesc A class with methods to get and set the user info
 * @method getUserInfo - A public method to get an object with the user info
 * @method setUserInfo - A public method to set the user info
 * @constructor
 * @param {object} selectors - An object with the user info
 */

export default class UserInfo {
  constructor({ name, job }) {
    this._name = document.querySelector(name);
    this._job = document.querySelector(job);
  }

  /**
   * @method getUserInfo
   * @description A public method to get an object with the user info
   * @public
   */

  getUserInfo() {

    const userInfo = { name: this._name.textContent, job: this._job.textContent }

    return userInfo;

  }

  /**
   * @method setUserInfo
   * @description A public method to set the user info
   * @public
   */

  setUserInfo({ name, job }) {

    this._name.textContent = name;

    this._job.textContent = job;

  }

}
