import { GluegunToolbox } from 'gluegun';
import { sleep } from '../../utils/sleep';

const CONFIRM_MESSAGE = 'Você tem certeza que deseja sair de sua conta?';

module.exports = {
    name: 'logout',
    description: 'Realiza o logout da conta',
    run: async (toolbox: GluegunToolbox) => {
        const { prompt, print, auth } = toolbox;

        if (await prompt.confirm(CONFIRM_MESSAGE)) {
            const spinner = print.spin({
                text: 'Saindo da conta e removendo configurações.',
            });
            await sleep(2000);
            await auth.logout();
            spinner.succeed('Pronto!');
            process.exit(1);
        }
        return;
    },
};
