class Qcm {

    #id;
    #name;
    #subject;
    #theme;

    constructor(id, name, subject, theme) {
        this.#id = id;
        this.#name = name;
        this.#subject = subject;
        this.#theme = theme;
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    get subject() {
        return this.#subject;
    }

    get theme() {
        return this.#theme;
    }
}

module.exports = Qcm