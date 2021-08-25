# language: pt

Funcionalidade: Hunter
    Como um Hunter
    Eu devo ter melhor desempenho na caçada
    Para que eu possa seguir viagem e ajudar outros passageiros a seguir viagem

    Contexto:
        Dado um Hunter de nome "Sylvanas"
        E ela sempre começa a viagem com 2 refeições
        E ela sempre começa a viagem saudável.

    Cenário: Caçou para conseguir mais refeições
        Quando o Hunter vai caçar 1 vezes
        Então a quantidade de refeições é igual a 7

     Cenário: Comeu e seguiu saudável
        Quando o Hunter ira comer 1 vezes
        Então a quantidade de refeições é igual a 0
        E o Hunter não ficará doente

     Cenário: Comeu e ficou doente
        Quando o Hunter ira comer 3 vezes
        Então a quantidade de refeições é igual a 0
        E o Hunter ficará doente

    Cenário: Saiu para caçar, comeu e seguiu saudável
        Quando o Hunter vai caçar 2 vezes
        E o Hunter ira comer 2 vezes
        Então a quantidade de refeições é igual a 8
        E o Hunter não ficará doente

    Cenário: Compartilha refeição caso tenha refeição suficiente
        Quando o Hunter compartilhar 1 refeição com "joão"
        Então a quantidade de refeições é igual a 1