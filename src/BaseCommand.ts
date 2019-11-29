import Command, { flags } from '@oclif/command';
import { OutputArgs, OutputFlags } from '@oclif/parser';

export abstract class BaseCommand extends Command {
  public static flags = {
    help: flags.help({ char: 'h' }),
    version: flags.version(),
  };

  protected args: OutputArgs<any> = {};
  protected flags: OutputFlags<any> = {};

  protected async init(): Promise<void> {
    const data = this.parse(this.constructor as any);

    this.args = data.args;
    this.flags = data.flags as OutputFlags<any>;
  }

  protected err(error: string | Error, exit: boolean = true): void {
    if (exit) {
      super.error(error, { exit: 1 });
    } else {
      super.error(error, { exit: false });
    }
  }
}