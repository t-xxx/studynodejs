class Person {
    #id;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    get id() {
        return this.#id;
    }
}