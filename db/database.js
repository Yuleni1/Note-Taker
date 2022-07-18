const { writeFile, readFile } = require("fs").promises;
const path = require("path");

class Database {
    constructor() {
        this.path = path.join(__dirname, 'db.json');
    }

    getAll() {
        return readFile(this.path, 'utf-8').then(data => JSON.parse(data));
    }

    write(data) {
        return writeFile(this.path, JSON.stringify(data));
    }

    push(note) {
        return this.getAll().then(data => this.write([...data, note]));
    }
}

module.exports = Database;
