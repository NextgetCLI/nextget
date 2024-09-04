import { GluegunCommand } from 'gluegun';

const command: GluegunCommand = {
    name: 'nextget',
    description: 'Nextget CLI',
    run: async (toolbox) => {
        const { print } = toolbox;

        print.highlight('🚀 Nextget CLI');
        print.divider();
        print.info(
            'Nextget CLI é um boilerplate que facilita a instalação e configuração do Next.js e muito mais.'
        );
        print.newline();
        print.info(`Digite 'nextget help' para mais informações.`);
    },
};

module.exports = command;
