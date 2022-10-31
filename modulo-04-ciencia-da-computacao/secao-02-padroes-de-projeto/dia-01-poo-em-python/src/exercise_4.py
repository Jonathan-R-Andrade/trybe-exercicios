from abc import ABC, abstractmethod
from datetime import datetime
from enum import Enum
from typing import List
import os


class TipoDeLog(Enum):
    INFO = "INFO"
    ALERTA = "ALERTA"
    ERRO = "ERRO"
    DEBUG = "DEBUG"


class ManipuladorDeLog(ABC):
    @abstractmethod
    def log(self, mensagem: str):
        raise NotImplementedError


class LogEmArquivo(ManipuladorDeLog):
    def __init__(self):
        self.caminho_do_arquivo = "logs/log.txt"
        os.makedirs(os.path.dirname(self.caminho_do_arquivo), exist_ok=True)

    def log(self, mensagem: str):
        with open(
            self.caminho_do_arquivo, mode="a", encoding="utf-8"
        ) as arquivo_de_log:
            print(mensagem, file=arquivo_de_log)


class LogEmTela(ManipuladorDeLog):
    def log(self, mensagem: str):
        print(mensagem)


class Log:
    __manipuladores: List[ManipuladorDeLog] = []

    def __formatar(self, tipo: TipoDeLog, mensagem: str):
        data_e_hora = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
        return f"[{tipo.name} - {data_e_hora}]: {mensagem}"

    def __log(self, tipo: TipoDeLog, mensagem: str):
        mensagem_formatada = self.__formatar(tipo, mensagem)
        for manipulador in self.__manipuladores:
            manipulador.log(mensagem_formatada)

    def adicionar_manipulador(self, manipulador: ManipuladorDeLog):
        self.__manipuladores.append(manipulador)

    def info(self, mensagem: str):
        self.__log(TipoDeLog.INFO, mensagem)

    def alerta(self, mensagem: str):
        self.__log(TipoDeLog.ALERTA, mensagem)

    def erro(self, mensagem: str):
        self.__log(TipoDeLog.ERRO, mensagem)

    def debug(self, mensagem: str):
        self.__log(TipoDeLog.DEBUG, mensagem)


if __name__ == "__main__":
    logTela = LogEmTela()
    logArquivo = LogEmArquivo()
    log = Log()

    log.adicionar_manipulador(logTela)
    log.adicionar_manipulador(logArquivo)

    log.info("Testando informação")
    log.alerta("Testando alerta")
    log.erro("Testando erro")
    log.debug("Testando debug")
