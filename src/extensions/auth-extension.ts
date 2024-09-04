import { GluegunToolbox } from 'gluegun';

interface ValidateResponse {
    error: string;
    token: string;
}

module.exports = (toolbox: GluegunToolbox) => {
    const { filesystem, http } = toolbox;

    const AUTH_CONFIG = `${filesystem.homedir()}/.nextget/auth.config.json`;

    let userApiKey: string | false = false;

    async function getApiKey(): Promise<string | false> {
        if (userApiKey) return userApiKey;

        userApiKey = await readApiKey();

        return userApiKey;
    }

    async function readApiKey(): Promise<string | false> {
        return (
            filesystem.exists(AUTH_CONFIG) && filesystem.readAsync(AUTH_CONFIG)
        );
    }

    async function saveApiKey(apikey: string) {
        return filesystem.writeAsync(
            AUTH_CONFIG,
            JSON.stringify({ apikey }, null, 4)
        );
    }

    async function authorize(apiKey: string) {
        const api = http.create({
            baseURL: 'http://localhost:3000',
        });
        const { data } = await api.post<ValidateResponse>('/api/validate', {
            token: apiKey,
        });

        if (data.error) {
            throw new Error(data.error);
        }

        if (data.token) {
            data.token;
        }
    }

    async function logout() {
        await filesystem.removeAsync(AUTH_CONFIG);
    }

    toolbox.auth = { authorize, saveApiKey, getApiKey, readApiKey, logout };
};
