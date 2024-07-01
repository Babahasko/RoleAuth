db.createUser(
    {
        user: "ben",
        pwd: "aflik",
        roles: [
            {
                role: "readWrite",
                db: "auth_roles"
            }
        ]
    }
);