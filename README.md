# Нетология
## «Символы, итераторы, генераторы»

[Домашнее задание 2](https://github.com/netology-code/ajs-homeworks/tree/ajs8/symbols-iterators-generators)

## Описание установки

```shell
npm init
npm install --save-dev jest babel-jest @babel/core @babel/cli @babel/preset-env
npm install core-js@3
```

## Символы и генераторы

### Легенда

Реализовывать итераторы не так уж здорово, правда? Давайте посмотрим, как нам могут помочь генераторы при переборе.

### Описание

Используйте следующую заготовку для организации перебора класса `Team`:
```javascript
class Team {
  ...
  *[Symbol.iterator]() {
    // это генератор
    // и здесь есть доступ к this
    // остаётся лишь правильно написать yield
  }

}
```

---