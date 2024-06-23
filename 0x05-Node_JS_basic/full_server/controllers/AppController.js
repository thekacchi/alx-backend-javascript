/**
 * Contains the miscellaneous route handlers.
 * @author Onyedikachi Eze <https://github.com/thekacchi>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
