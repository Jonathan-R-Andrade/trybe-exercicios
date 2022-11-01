class Log:
    def dispara_log(self, message):
        return message


class LogSuccess:
    def __init__(self, log: Log):
        self.log = log

    def dispara_log(self, message):
        log = self.log.dispara_log(message)
        return f"\033[92m{log}\033[0m"


class LogWarning:
    def __init__(self, log: Log):
        self.log = log

    def dispara_log(self, message):
        log = self.log.dispara_log(message)
        return f"\033[93m{log}\033[0m"


class LogError:
    def __init__(self, log: Log):
        self.log = log

    def dispara_log(self, message):
        log = self.log.dispara_log(message)
        return f"\033[91m{log}\033[0m"


if __name__ == "__main__":
    log = Log()
    logSuccess = LogSuccess(log)
    logWarning = LogWarning(log)
    logError = LogError(log)

    print(logSuccess.dispara_log("O sistema está funcionando"))
    print(logWarning.dispara_log("O sistema está lento"))
    print(logError.dispara_log("O sistema está com erros"))
