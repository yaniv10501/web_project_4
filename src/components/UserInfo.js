/** @module UserInfo */

/**
 * @class
 * @classdesc A class with methods to get and set the user info
 * @method getUserInfo - A public method to get an object with the user info
 * @method setUserInfo - A public method to set the user info
 * @constructor
 * @param {object} - An object with the user info selectors
 * @param {string} name - The selector for the user name
 * @param {string} job - The selector for the user about info
 * @param {string} picture - The selector for the user picture
 */

export default class UserInfo {
  constructor({ name, job, picture }) {
    this._name = document.querySelector(name);
    this._job = document.querySelector(job);
    this._picture = document.querySelector(picture);
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

  /**
   * @method setUserPicture
   * @description A public method to set the user picture
   * @param {string} url - The url of the user picture
   * @public
   */

  setUserPicture(url) {

    this._picture.style.backgroundImage = `url(${url})`;

  }

}
