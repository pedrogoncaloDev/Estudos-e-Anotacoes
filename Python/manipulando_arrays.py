numeros = [1, 2, 3]

# Percorrendo arrys

## Forma mais comum 
for n in numeros:
    print(n)
    
    
## Quando precisar de índice
for i, valor in enumerate(numeros):
    print(i, valor)
    
    
## Adicionar no final
numeros.append(4)

## Adicionar em posição específica
numeros.insert(1, 10)

## Adicionar vários valores
numeros.extend([5, 6, 7])

## Remover pelo valor
numeros.remove(3)


## Remover pelo índice (qualquer uma dessas 2 opções)
del numeros[0] 
numeros.pop(0)

## Limpar lista inteira
numeros.clear()

## Buscar elemento
if 2 in numeros:
    print('Existe')
    
## Filtrar lista (forma moderna)
pares = [n for n in numeros if n % 2 == 0]

