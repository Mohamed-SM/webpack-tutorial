import $ from 'jquery';
import { ItemList } from './itemList';

export function updatetheView() {

    var tasks = $('#tasks');
    tasks.empty();

    ItemList.items.forEach(function (item) {
        var li = createLi(item);
        tasks.append(li);
    })

}

export function createLi(item) {
    var span = $('<span>');
    var i = $('<i>', { 'class': 'fa fa-trash-alt' });
    var li = $('<li>');

    i.on('click', function () {
        ItemList.delete(item);
    });

    li.text(item);
    span.append(i);
    li.append(span);
    return li;
}