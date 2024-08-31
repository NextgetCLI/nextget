import { GluegunToolbox } from 'gluegun';

const API_MESSAGE = `É necessário que você informe a sua APIKey para fazer o login.`;
module.exports = {
    name: 'init',
    alias: ['i'],
    description: 'Inicia a configuração do projeto Next.JS',
    run: async (toolbox: GluegunToolbox) => {
        const { print, prompt, auth } = toolbox;
        print.info('Vamos iniciar a instalação de seu projeto Next.JS...');

        if ((await auth.getApiKey()) === false) {
            const response = await prompt.ask({
                type: 'password',
                name: 'key',
                message: API_MESSAGE,
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
                return;
            } catch (err) {
                spinner.fail(`Ocorreu um erro. ${err}`);
                process.exit(1);
            }
        }
    },
};
