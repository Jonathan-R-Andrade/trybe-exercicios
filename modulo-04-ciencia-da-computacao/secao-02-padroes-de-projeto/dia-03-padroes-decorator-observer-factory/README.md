# Exercícios

__Exercício 1:__ Em Python, é possível imprimir uma saída colorida. Para isso, basta a string começar com um código da cor antes e terminar com um código que indica o fim da formatação.

```python
ROSA = "\033[95m"
ROXO = "\033[94m"
AZUL = "\033[96m"
VERDE = "\033[92m"
LARANJA = "\033[93m"
VERMELHO = "\033[91m"
NEGRITO = "\033[1m"
SUBLINHADO = "\033[4m"
RESET = "\033[0m"

print("\033[94mOlá Mundo!\033[0m")
# ou
print(f"{ROXO}Olá Mundo!{RESET}")
```

> A cor será diferente dependendo da configuração do seu computador.

> O recurso a seguir será utilizado para exibir logs coloridos no sistema. A classe `Log()` abaixo é responsável pela criação dos Logs:

```python
class Log:
    def dispara_log(message):
        return message
```

* Crie novas classes, `LogError()`, `LogWarning`, `LogSuccess()` com o padrão __Decorator__, para imprimir colorido as seguintes frases de Log:

> Success(Verde): O sistema está funcionando

> Warning(Laranja): O sistema está lento

> Error(Vermelho): O sistema está com erros

__Exercício 2:__ Você está desenvolvendo um novo despertador para Assistente virtual __Alexa__, utilizando o `Padrão Observer`. Ao despertar, esse despertador aciona algumas rotinas especiais na casa.

* Implemente um objeto `Alarme` que consiga `acionar` as tarefas de rotina previamente cadastradas, sempre que o alarme `despertar`. Veja alguns exemplos de rotinas:
* Acender as luzes;
* Preparar o café;
* Ligar o computador.

> 👀 __De olho na dica:__ crie um observador para cada rotina e vincule-o dinamicamente por composição ao objeto __Alarme__. Assim, quando o despertador tocar todas as rotinas vinculadas serão disparadas automaticamente.

__Exercício 3:__ Você recebeu um convite para ajudar com uma atualização de segurança em um sistema interno de uma empresa. Esse sistema atende os setores de __vendas__, __financeiro__ e __suporte__. Para respeitar a nova Lei Geral de Proteção de Dados, a empresa precisa garantir que as informações internas serão expostas somente a quem tem necessidade. Assim devemos ter os seguintes perfis de acesso:

* __Conta de Suporte:__ Acesso apenas ao sistema de __suporte__
* __Conta de Suporte e Vendas:__ Acesso aos sistemas __vendas__ e __suporte__
* __Conta de Gerente:__ Acesso a todos os sistemas __vendas__, __financeiro__ e __suporte__

> 👀 __De olho na dica:__ esse problema lembra o de combos na hamburgueria, que você já conhece! Aqui precisamos de uma implementação semelhante, utilizando o padrão __Factory__.

> 👀 __De olho na dica:__ a Account pode ser sua Interface Criadora, que será herdada pelas fábricas, que podem ser classes referentes aos perfis de acessos.

### Esses exercícios foram feitos por [min](https://www.linkedin.com/in/jonathan-r-andrade/) na [Trybe](https://www.betrybe.com/)
