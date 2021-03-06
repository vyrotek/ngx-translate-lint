import { ErrorTypes } from './enums';
import { IAppConfig } from './interface';

const config: IAppConfig = {
    defaultValues: {
        rules: {
            misprint: ErrorTypes.warning,
            zombieKeys: ErrorTypes.warning,
            keysOnViews: ErrorTypes.error,
            maxWarning: 0,
            misprintCoefficient: 0.9,
            ast: {
                ngxTranslateService: ErrorTypes.disable,
                isNgxTranslateLintImported: ErrorTypes.disable,
            }
        },
        projectPath: './src/app/**/*.{html,ts}',
        tsconfigPath: './',
        languagesPath: './src/assets/i18n/*.json'
    }
};

const defaultConfig: object = {
    "rules": {
        "keysOnViews": "error",
        "zombieKeys": "warning",
        "misprint": "warning",
        "maxWarning": "0",
        "misprintCoefficient": "0.9",
        "ast": {
            "isNgxTranslateLintImported": "disable"
        }
    },
    "project": './src/app/**/*.{html,ts}',
    "tsconfig": './',
    "languages": './src/assets/i18n/*.json',
};

export { config };
