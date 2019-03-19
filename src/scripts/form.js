import $ from 'jquery';
import { ItemList } from './itemList';

var form = $('#taskForm');

form.submit(function (event) {

    event.preventDefault();

    var taskInput = $('#task');

    ItemList.add(taskInput.val())

    this.reset();
    
})