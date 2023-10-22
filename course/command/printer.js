class Command {
  commands = {};
  execute() {};
}

class PrinterOperator extends Command {

  constructor(commandName, printer) {
    super();
    this.commandName = commandName;
    this.printer = printer;
    if(commandName === 'on') this.commands['on'] = this.printer.turnOn;
    else if(commandName === 'off') this.commands['off'] = this.printer.turnOff;
    else if(commandName === 'print') this.commands['print'] = this.printer.print;
    else {
      this.commands['err'] = printer.err;
      this.commandName = 'err';
    }
  }

  execute() {
    this.commands[this.commandName]();
  }
}

class Printer {
  turnOn() {
    console.log('Printer turned on');
  }

  turnOff() {
    console.log('Printer turned off');
  }

  print() {
    console.log('Printed successfully');
  }

  err() {
    console.log('Invalid operation');
  }
}

class ControlPanel {
  constructor(op) {
    this.operator = new PrinterOperator(op, new Printer());
  }
  pressButton() {
    this.operator.execute();
  }
}

let controlPanel = new ControlPanel('on');
controlPanel.pressButton();

controlPanel = new ControlPanel('print');
controlPanel.pressButton();
