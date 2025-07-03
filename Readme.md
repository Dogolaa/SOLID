# SOLID

## Introdução

- 'Criado' por Robert C. Matin (Uncle Bob)
- Na verdade foi uma contribuição de diversas pessoas
- LSP (Princípio da Substituição de Liskov), foi criado por Barbara Liskov, **fundamental para garantir que classes derivadas possam substituir suas classes base sem quebrar o comportamento do programa**
- OCP (Princípio Opened/Closed), foi criado por Bertrand Meyer, pioneiro na **ideia de Programação por Contrato**, estabelecendo bases para design de software mais robusto e extensível.

<br>

_SOLID **evita** softwares **rígidos** (sistemas que qualquer mudança simples se tornam complexas e caras), **frágeis** (Código que quebra inesperadamente quando modificiado em uma parte), **imóveis** (Componentes difíceis de reutilizar em outros contextos ou projetos) e com **acoplamento excessivo** (Módulos fortemente dependentes, dificultando manutenção e evolução)_

<br>

## Acrônimo "SOLID"

- S: **Single Responsibility Principle**: Princípio da Responsabilidade Única
- O: **Open-Closed Principle** Princípio Aberto-Fechado
- L: **Liskov Substitution Principle** Princípio da Substituição de Liskov
- I: **Interface Segregation Principle** Princípio da Segregação de Interfaces
- D: **Dependency Inversion Principle** Princípio da Inversão de Dependência

<br>

## SRP - Single Responsibility Principle

"Princípio da única razão para mudança"

- Uma classe deve ter apenas uma responsabilidade bem definida, com um único motivo para mudança.
- Cada classe deve se especializar em fazer uma tarefa específica com excelência, criando código modular e coeso.
- Múltiplas responsabilidades em uma classe aumentam complexidade e riscos de manutenção.

<br>

Erros comuns:

- **Interpretação Literal**, pensar que "uma coisa" significa uma única linha de código ou função muito específica.
- **Escopo Restrito**, mal-entendido de que SRP significa limitar drasticamente a funcionalidade de uma classe
- **Abstração Inadequada**, dificuldade em identificar o nível correto de responsabilidade e coesão.'

### SRP: Definições

- **Atores**: Um ator pode ser um pessoa, um grupo ou um sistema que requisita mudanças no software. Diferentes atores como usuários finais, gestores de produto, equipes de negócios e desenvolvedores podem ter necessidades distintas.

- **Razões para mudança**: Uma razão para mudar representa os diferentes stakeholders ou atores que podem exigir modificações que acabam refletindo na mudança em uma mesma classe.

- **Impacto de Multiplicidade de Atores**: Mudanças para atender um ator podem impactar outras funcionalidades, gerando fragilidade no código.

### SRP: Atores e Stakeholders

![alt text](/readmeImages/atoresStakeholders.png)

## OCP - Open-Closed Principle

"Basicamente diz que um componente/classe deve estar aberta para extensão, mas fechado para modificação, ou seja, toda vez que você tem algo, tem-se que cria-lo de uma maneira que ele seja extensivo, não se da manutenção no componente principal e sim nos componentes que o formam."

## LSP - Liskov Substitution Principle

"Princípio que estabelece que objetos de uma classe base devem ser substituíveis por objetos de suas classes derivadas sem alterar o comportamento do programa"

- Garante que subclasses mantenham o comportamento esperado da classe pai, presenvando invariantes e respeitando os contratos de método.
- Promove design de software mais robusto, facilitando extensibilidade e matendo a consistência comportamental entre classes relacionadas.

<br>

![alt text](./readmeImages/lsp.png)

## ISP - Interface Segregation Principle

<br>

"O ISP afirma que os clientes não devem ser forçados a depender de métodos que não utilizam.As interfaces devem ser pequenas e focadas em um conjunto específico de métodos."

<br>

![alt text](./readmeImages/isp.png)
![alt text](./readmeImages/isp_solucao.png)
![alt text](./readmeImages/isp_resolucao.png)

### Interface de Serviço de Checkout

![alt text](./readmeImages/checkout.png)
![alt text](./readmeImages/segregacao.png)
![alt text](./readmeImages/segregacaoComponentes.png)

## ISP - Dependency Inversion Principle

<br>

"O DIP determina que as classes de alto nível não devem depender de classes de baixo nível. Em vez disso, ambas devem depender de abstrações. Isso permite que o código seja mais flexível e fácil de testar."

<br>

![alt text](./readmeImages/dip.png)
![alt text](./readmeImages/dip_solucao.png)
![alt text](./readmeImages/dip_solucao2.png)

### Dependency Inversion vs Dependency Injection

![alt text](./readmeImages/dip_vs_di.png)
