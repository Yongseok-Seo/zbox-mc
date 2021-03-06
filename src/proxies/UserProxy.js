import Proxy from './Proxy';

class UserProxy extends Proxy {
  /**
   * The constructor for the ArtistProxy.
   *
   * @param {Object} parameters The query parameters.
   */
  constructor(parameters = {}) {
    super('v1/users', parameters);
  }

  /**
   * 로그인 사용자 메뉴 가져오기
   * @returns {Promise}
   */
  getMyMenus() {
    return this.submit('get', `${this.endpoint}/menus`);
  }

  /**
   * 로그인 사용자 정보 가져오기
   * @returns {Promise}
   */
  me() {
    return this.submit('get', `${this.endpoint}/me`);
  }

  /**
   * 사용자 ID로 사용자의 sensor가져오기
   * @param userId
   * @returns {Promise}
   */
  getSensorsByUserId(userId) {
    return this.submit('get', `${this.endpoint}/${userId}/sensors`);
  }
}

export default UserProxy;
