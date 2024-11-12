const bcrypt = require('bcryptjs');

module.exports = (app) => {
    const obterHash = (password, callback) => {
        bcrypt.genSalt(10, (err, salt) => {
            if (err) return callback(null, err);  // Se ocorrer um erro ao gerar o salt
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) return callback(null, err); // Se ocorrer um erro ao criar o hash
                callback(hash); // Retorna o hash se tudo estiver correto
            });
        });
    };

    const save = (req, res) => {
        const { name, email, password } = req.body;
        if (!password) return res.status(400).json({ error: "Senha é obrigatória" });

        obterHash(password, (hash, err) => {
            if (err) return res.status(500).json({ error: "Erro ao gerar hash de senha" });

            app.db('users')
                .insert({
                    name: req.body.name,
                    email: req.body.email.toLowerCase(),
                    password: hash,
                })
                .then(() => res.status(204).send())
                .catch((err) => res.status(500).json(err));
        });
    };

    return { save };
};
