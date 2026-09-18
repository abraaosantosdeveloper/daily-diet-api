class User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public password: string,
        public created_at: Date,
        public updated_at: Date
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.updated_at = updated_at;
        this.created_at = created_at;
    }
}