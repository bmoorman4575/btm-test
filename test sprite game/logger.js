var gdjs;
(function(gdjs2) {
  const supportedConsoleFunctions = {
    info: console.log,
    warning: console.warn,
    error: console.error
  };
  class ConsoleLoggerOutput {
    constructor() {
      this.discardedConsoleGroups = new Set();
    }
    discardGroup(groupName) {
      this.discardedConsoleGroups.add(groupName);
    }
    enableGroup(groupName) {
      this.discardedConsoleGroups.delete(groupName);
    }
    log(group, message, type = "info", internal = true) {
      if (this.discardedConsoleGroups.has(group))
        return;
      const logger = supportedConsoleFunctions[type] || supportedConsoleFunctions.info;
      logger(`[${group}] ${message}`);
    }
  }
  const consoleLoggerOutput = new ConsoleLoggerOutput();
  let loggerOutput = consoleLoggerOutput;
  function objectsToString(objects) {
    return objects.reduce((accumulator, value) => accumulator + value.toString(), "");
  }
  class Logger {
    constructor(group) {
      this.group = group;
    }
    log(...messages) {
      loggerOutput.log(this.group, objectsToString(messages), "info");
    }
    info(...messages) {
      loggerOutput.log(this.group, objectsToString(messages), "info");
    }
    warn(...messages) {
      loggerOutput.log(this.group, objectsToString(messages), "warning");
    }
    error(...messages) {
      loggerOutput.log(this.group, objectsToString(messages), "error");
    }
    static getDefaultConsoleLoggerOutput() {
      return consoleLoggerOutput;
    }
    static getLoggerOutput() {
      return loggerOutput;
    }
    static setLoggerOutput(newLoggerOutput) {
      loggerOutput = newLoggerOutput;
    }
  }
  gdjs2.Logger = Logger;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=logger.js.map
