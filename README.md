В globals.css указан размер шрифта на который ориентируется rem. Настроено все так, что при переносе стилей из дизайна нужно разделять пиксели на 10, если мы указываем величину в rem. Абсолютно все величины (отступы, ширина, высота) все должно быть указано в rem.

Начиная с 768 пикселей выключается rem, включаются обычные пиксели и мобильная верстка. Если ты понимаешь, что этой плохой переход для адаптивки - поменяй его. В globals.css опять же есть медиазапрос для этого.


Если что, смотри вот сюда - https://github.com/AlSudar/crpa
