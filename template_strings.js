//Шаблонные строки (template strings)
//Template Literals

const user = 'Bob';
const number = 12;
const txt = 'Hello, ' + user + 'you have ' + number + ' letters in your box';
console.log(txt);

const html =
    '<ul>' +
    '<li> Item One </li>' +
    '<li> Item Two </li>' +
    '<ul>'
console.log(html)


//Ecmascript > 2015
const txtTwo = `Hello ${user} you have ${number} letters in your box`;
console.log(txtTwo);

const templateHtml =
    `<ul>
        <li>Item One</li>
        <li>Item Two</li>
    </ul>`;
console.log(templateHtml);

const items = ['tea','coffee'];
const templateHtmlTwo =
    `<ul>
        <li>${items[0]}</li>
        <li>${items[1]}</li>
    </ul>`;
console.log(templateHtmlTwo)