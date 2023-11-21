/*
    Write a dessert menu;
    If the dessert is pie, console.log 'Pie, pie, me oh my!'
    If the dessert is cake, console.log 'Cake is great!'
    If the dessert is ice cream, console.log 'I scream for ice cream!'
    Otherwise, have your switch statement console.log 'Not on the menu.'
*/

let dessertMenu = 'Donut';

switch (dessertMenu) {
    case 'Pie':
        console.log('Pie, pie, me oh my!');
        break;
    case 'Cake':
        console.log('Cake is great!');
        break;
    case 'Ice Cream':
        console.log('I scream for ice cream!');
        break;
    default:
        console.log(`${dessertMenu} is not on the menu.`)
}