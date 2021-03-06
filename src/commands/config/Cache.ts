import { window, workspace } from 'vscode';
import cp = require('child_process');
import Common from '../../Common';
import Output from '../../utils/Output';

export default class ConfigCache extends Common {

    public static async run() {
        let command = `php ${this.artisan} config:cache`;
        Output.command(command);
        cp.exec(command, async (err, stdout, stderr) => {
            if (err) {
                Output.error(stdout);
                return this.showError('The config cache could not be created', err);
            } else {
                return this.showMessage('The config was cached');
            }
        });
    }
}