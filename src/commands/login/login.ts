import { GluegunToolbox } from 'gluegun';
import { commandTitle } from '../../utils/strings';

module.exports = {
    name: 'login',
    alias: ['l'],
    description: 'Realiza o login usando a API Key.',
    run: async (toolbox: GluegunToolbox) => {
        const { prompt, print, auth } = toolbox;

        commandTitle('Login 🔑', print);
        if ((await auth.getApiKey()) === false) {
            const response = await prompt.ask({
                type: 'password',
                name: 'key',
                message: 'Insira a sua API Key para realizar o login',
            });

            const spinner = print.spin('Realizando o login...');
            try {
                if (response && response.key) {
                    await auth.authorize(response.key);
                    await new Promise((resolve) => setTimeout(resolve, 2000));
                    spinner.succeed('Login realizado com sucesso!');

                    spinner.start('Salvando suas credenciais...');
                    await new Promise((resolve) => setTimeout(resolve, 2000));
                    await auth.saveApiKey(response.key);
                    spinner.succeed('Pronto!');
                }

                //
                process.exit(0);
            } catch (err) {
                spinner.fail(`Ocorreu um erro. ${err}`);
                process.exit(1);
            }
        } else {
            print.warning(
                'Você já realizou o login. Se pretente trocar de conta, realize o logout.'
            );
        }
    },
};
